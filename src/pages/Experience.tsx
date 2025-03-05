import React, { useRef, useEffect, useState } from 'react';
import Timeline from './subpages/Timeline';

const Experience: React.FC = () => {
  const topRef = useRef<HTMLParagraphElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), 200);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <p id="ToTop" ref={topRef} className="invisible text-white">ToTop</p>
      <h1 ref={ref} className={`text-6xl lg:text-8xl font-bold lg:mt-2 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent ${visible ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out' : 'opacity-0 -translate-y-20'}`}>
        Experience
      </h1>
      <Timeline />
    </>
  );
};

export default Experience;
