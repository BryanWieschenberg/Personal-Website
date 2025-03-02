import React, { useRef, useEffect } from 'react';
import { animateHeader } from "../animations"; // Import animation function

const Experience: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const topRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    animateHeader(headingRef.current);
  }, []);

  return (
    <>
      <p id="top" ref={topRef} className="invisible text-white">ToTop</p>
      <h1 ref={headingRef} className={`text-6xl md:text-8xl font-bold lg:mt-2 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent`}>
          Experience
      </h1>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  );
};

export default Experience;
