import React, { useRef, useEffect, useState } from 'react';

const Projects: React.FC = () => {
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
        Projects
      </h1>

    </>
  );
};

export default Projects;
