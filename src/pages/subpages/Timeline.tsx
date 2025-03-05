import React, { useRef, useEffect, useState } from 'react';
import { work } from "../../constants";

const Timeline: React.FC = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track hovered box

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

  const handleClick = (index: number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  
  return (
    <div className="container mx-auto px-4 lg:px-20 mb-6">
      <h1 
        ref={ref}
        className="roles-text lg:mb-2 pt-4 lg:pt-10 text-2xl lg:text-6xl font-bold pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative text-[#8580e7] bg-clip-text"
      > 
        My Timeline:
      </h1>
      {/* Timeline Container */}
      <div className="container mx-auto px-4 sm:px-8 mt-16 flex flex-col items-center">
        <div className="relative w-full">
          {work.map((exp, index) => (
            <div
              key={index}
              className="mb-4"
              style={{
                animation: visible ? `fadeInUp 0.4s ease-in-out ${index * 0.1}s forwards` : 'none',
              }}
            >
              {/* Timeline Circle and Line */}
              <div className="absolute left-0 h-full flex flex-col items-center">
                {/* On mobile, use a smaller left margin; on lg+ use the larger margin */}
                <div
                  className={`w-4 h-4 ml-4 lg:ml-[18rem] bg-blue-500 rounded-full transition-all duration-500 ease-in-out ${
                    hoveredIndex === index ? "bg-[#00e7ff] scale-150" : "bg-blue-500 scale-100"
                  }`}
                ></div>
                {index !== work.length && (
                  <div className="w-1 h-[5.5rem] bg-blue-500 mt-2 ml-4 lg:ml-[18rem]"></div>
                )}
              </div>

              {/* Clickable Content Box */}
              <div
                className="bg-[#182a51] text-white p-5 rounded-xl shadow-lg w-full lg:w-2/5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 mx-auto"
                onClick={() => handleClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#a9c7ff] to-[#00e7ff] text-transparent bg-clip-text inline-block">
                  {exp.role}
                </h3>
                <h4 className="text-lg font-semibold text-blue-300">{exp.company}</h4>
                <p className="text-sm text-gray-300">{exp.date}</p>
              </div>

              {/* Description Box - Appears below the clicked box */}
              <div
                className={`mt-4 w-full lg:w-2/5 transition-all duration-500 ease-in-out overflow-hidden mx-auto ${
                  selectedIndex === index ? 'max-h-64 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
                }`}
              >
                <div className="bg-[#182a51] text-white p-3 rounded-xl shadow-lg">
                  <p className="text-sm text-gray-200 whitespace-pre-line">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframes for Staggered Animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateX(150px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Timeline;
