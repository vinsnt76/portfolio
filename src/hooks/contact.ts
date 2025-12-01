import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// Instantiate Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM!, // The "from" address you configured in Vercel
      to: process.env.CONTACT_TO!,     // Your personal email address to receive messages
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p>You have a new message from your portfolio contact form:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) throw error;

    res.status(200).json({ message: 'Email sent successfully!', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
}