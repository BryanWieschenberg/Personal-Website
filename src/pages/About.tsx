import React, { useRef, useEffect } from 'react';
import { animateHeader } from "./animations"; // Import animation function

const About: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    animateHeader(headingRef.current);
  }, []);

  return (
    <h1 ref={headingRef} className={`text-6xl md:text-8xl font-bold mt-4 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent`}>
        About Me
    </h1>
  );
};

export default About;
