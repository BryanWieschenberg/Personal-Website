import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { animateHeader } from "../animations"; // Import animation function

const Experience: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const toppRef = useRef<HTMLParagraphElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    animateHeader(headingRef.current);
  }, []);

  const handleBruhClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // First scroll to top
    toppRef.current?.scrollIntoView();
    
    // Then navigate to /about after a short delay
    setTimeout(() => {
      navigate('/about');
    }, 0); // 500ms delay to allow the scroll to complete
  };

  return (
    <>
      <p id="topp" ref={toppRef} className="text-white">
        shit
      </p>
      <h1 ref={headingRef} className={`text-6xl md:text-8xl font-bold mt-16 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent`}>
          Experience
      </h1>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <a href="#" onClick={handleBruhClick} className="text-white">bruh</a>
    </>
  );
};

export default Experience;