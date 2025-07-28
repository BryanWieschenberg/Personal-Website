import React, { useRef, useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState('');
  const topRef = useRef<HTMLParagraphElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  
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

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), 0);
        }
      });
  
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);
  
  return (
    <div>
      <p id="ToTop" ref={topRef} className="invisible text-white">ToTop</p>
      <h1 ref={ref} className={`text-6xl lg:text-8xl font-bold lg:mt-2 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent ${visible ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out' : 'opacity-0 -translate-y-20'}`}>
        Contact
      </h1>

      <div className="animate-fadeInLeft">
        <p className="text-center text-sm lg:text-xl text-white max-w-2xl lg:max-w-6xl mx-auto mt-4 mb-8">
          Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
          <br/>
          I'm always open to connecting with new people and exploring opportunities.
        </p>

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
    </div>
  );
};

export default Contact;
