import React, { useRef, useEffect, useState } from 'react';
import { animateHeader } from "../animations"; // Import animation function

const Contact: React.FC = () => {
  const [status, setStatus] = useState('');
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const topRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
      animateHeader(headingRef.current);
    }, []);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xrbenbye', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div>
      <p id="top" ref={topRef} className="invisible text-white">ToTop</p>
      <h1 ref={headingRef} className={`text-6xl md:text-8xl font-bold lg:mt-2 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent`}>
        Contact
      </h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-white">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-white">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-lg transition-colors duration-300"
        >
          Send Message
        </button>
        
        {status === 'success' || status === 'error' && (
          <p className="text-lg mt-4 text-green-400 text-center">
            Your message was sent successfully! I look forward to connecting.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
