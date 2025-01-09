// ContactForm.tsx (React Frontend)
import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      if (response.ok) {
        alert('Message sent!');
        setEmail('');
        setMessage('');
      } else {
        alert('Error sending message.');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
