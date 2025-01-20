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
      <div className={`mt-20`}></div>

      <h1 ref={ref} className={`text-8xl md:text-8xl font-bold mt-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent ${visible ? 'animate-fadeIn' : 'opacity-0'}`}>
          About Me
      </h1>


      <h3>
        <a href="./assets/attachments/Resume - Bryan Wieschenberg.pdf" target="_blank" rel="noopener noreferrer">
          View PDF
        </a>
      </h3>

    </>
  );
};

export default About;
