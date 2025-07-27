import React, { useRef, useEffect, useState } from 'react';
import Timeline from './subpages/Timeline';
import Jobs from './subpages/Jobs';
import Availability from "./subpages/Availability";

const Experience: React.FC = () => {
  const topRef = useRef<HTMLParagraphElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const availabilityRef = useRef<HTMLDivElement>(null);
  const [availabilityVisible, setAvailabilityVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), 0);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setAvailabilityVisible(true), 0);
          }
        });
        if (availabilityRef.current) observer.observe(availabilityRef.current);
        return () => observer.disconnect();
      }, []);
  
  return (
    <>
      <p id="ToTop" ref={topRef} className="invisible text-white">ToTop</p>
      <h1 ref={ref} className={`text-6xl lg:text-8xl font-bold lg:mt-2 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent ${visible ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out' : 'opacity-0 -translate-y-20'}`}>
        Experience
      </h1>
      <Timeline />
      <Jobs />
      <div ref={availabilityRef} className={`${availabilityVisible ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out' : 'opacity-0 translate-y-[50px]'}`}>
        <Availability />
      </div>
      
    </>
  );
};

export default Experience;
