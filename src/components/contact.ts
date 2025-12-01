import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type Data =
  | { ok: true }
  | { ok: false; error: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, message, website } = req.body || {};

    // Honeypot: bots often fill hidden fields like "website"
    if (website) {
      return res.status(200).json({ ok: true }); // silently accept
    }

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return res.status(400).json({ ok: false, error: 'Invalid field types' });
    }

    // Compose email
    const to = process.env.CONTACT_TO!;
    const from = process.env.CONTACT_FROM!;
    await resend.emails.send({
      from,
      to,
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    // Avoid leaking internals
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
}