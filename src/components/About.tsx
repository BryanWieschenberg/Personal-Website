import React, { useRef, useEffect, useState } from 'react';

const About: React.FC = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), 200); // Delay animation by 2 seconds
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <>
      <img src="./assets/images/arrowBig.png" className="custom-image mx-auto" style={{ width: '1600px', height: '20px' }} />
      <div className={`mt-32`}></div>

      <h2
        ref={ref}
        className={`text-4xl font-bold mb-6 container mx-auto text-center text-white transition-opacity duration-500 ${
          visible ? 'opacity-100 animate-fadeInLeft' : 'opacity-0'
        }`}
      >
        About
      </h2>

      <h3>
        <a href="./assets/attachments/Resume - Bryan Wieschenberg.pdf" target="_blank" rel="noopener noreferrer">
          View PDF
        </a>
      </h3>

    </>
  );
};

export default About;
