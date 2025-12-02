import React, { useState } from 'react';

// Define the shape of the form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  // Handles updates to form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Explicitly type 'prev' to satisfy TypeScript's strict mode (TS7006)
    setFormData((prev: ContactFormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handles form submission logic
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 1. Send data to your Next.js API route: /api/contact
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        // Clear the form
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.error || 'Server error'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting the form. Please try again later.');
    }
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/60"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/60"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/60"
          rows={5}
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;