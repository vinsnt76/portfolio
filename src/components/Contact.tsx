import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<null | 'idle' | 'sending' | 'success' | 'error'>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setError(data.error || 'Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setError('Network or server error');
    }
  }

  return (
    <section id="contact" className="py-16">
      <h2>Contact Me</h2>
      <form onSubmit={onSubmit} className="space-y-4 max-w-lg mx-auto" noValidate>
        {/* Honeypot field (hidden from humans) */}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="name" className="block font-medium">Name</label>
          <input id="name" name="name" type="text" required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">Email</label>
          <input id="email" name="email" type="email" required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium">Message</label>
          <textarea id="message" name="message" required rows={5} className="w-full border p-2 rounded" />
        </div>

        <button type="submit" disabled={status === 'sending'} className="px-4 py-2 rounded bg-black text-white disabled:opacity-50">
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>

        {status === 'success' && <p className="text-green-600">Thanks! I’ll get back to you soon.</p>}
        {status === 'error' && <p className="text-red-600">{error}</p>}
      </form>
    </section>
  );
};