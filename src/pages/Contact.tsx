// ContactForm.tsx (React Frontend)
import React, { useRef, useEffect, useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), 200);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

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
    <>
      <div className="mt-20"></div>
      
      <img
        src="./assets/images/arrowBig.png"
        className="custom-image mx-auto animate-pulsate"
        style={{ width: '1600px', height: '20px' }}
      />
      <div className="mt-20"></div>

      <h1
        ref={ref}
        className={`text-8xl md:text-8xl font-bold mt-4 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap overflow-visibe text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent ${
          visible ? 'animate-fadeIn' : 'opacity-0'
        }`}
      >
        Contact
      </h1>

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
    </>
  );
};

export default Contact;
