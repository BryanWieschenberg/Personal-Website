import React, { useRef } from 'react';

const Projects: React.FC = () => {
  const topRef = useRef<HTMLParagraphElement | null>(null);

  return (
    <>
      <p id="ToTop" ref={topRef} className="invisible text-white">ToTop</p>
      <h1 className={`text-6xl md:text-8xl font-bold lg:mt-2 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent`}>
          Projects
      </h1>
    </>
  );
};

export default Projects;
