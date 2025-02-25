import React, { useRef, useEffect, useState } from 'react';
import { work } from "../constants";

const Experience: React.FC = () => {
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
    <>
      <div className="mt-20"></div>

      <img
        src="/assets/images/arrowBig.png"
        className="custom-image mx-auto animate-pulsate"
        style={{ width: '1600px', height: '20px' }}
      />
      <div className="mt-20"></div>

      <div className={'text-center mt-4 pb-12'}>
        <h1 ref={ref} className={`text-8xl md:text-8xl font-bold drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap overflow-visible justify-center inline relative bg-gradient-to-r from-[#768bff] to-[#00e7ff] bg-clip-text text-transparent ${visible ? 'animate-fadeIn' : 'opacity-0'}`}>
          Experience
        </h1>
      </div>

      {/* Timeline Container */}
      <div className="container mx-auto px-8 mt-16 flex justify-center items-center">
        <div className="relative">
          {work.map((exp, index) => (
            <div
              key={index}
              className="mb-4"
              style={{
                animation: visible ? `fadeInUp 0.4s ease-in-out ${index * 0.1}s forwards` : 'none',
                opacity: 0,
              }}
            >
              {/* Timeline Circle and Line */}
              <div className="absolute left-0 h-full flex flex-col items-center">
                {/* Circle - Scales when the box is hovered */}
                <div
                  className={`w-4 h-4 ml-[18rem] bg-blue-500 rounded-full transition-all duration-500 ease-in-out ${
                    hoveredIndex === index ? "bg-[#00e7ff] scale-150" : "bg-blue-500 scale-100"
                  }`}
                ></div>
                {/* Line */}
                {index !== work.length && (
                  <div className="w-1 h-[5.5rem] bg-blue-500 mt-2 ml-[18rem]"></div>
                )}
              </div>

              {/* Clickable Content Box */}
              <div
                className={`bg-[#182a51] text-white p-5 rounded-xl shadow-lg w-full md:w-2/5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 mx-auto`}
                onClick={() => handleClick(index)}
                onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
                onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#a9c7ff] to-[#00e7ff] text-transparent bg-clip-text inline-block">
                  {exp.role}
                </h3>
                <h4 className="text-lg font-semibold text-blue-300">{exp.company}</h4>
                <p className="text-sm text-gray-300">{exp.date}</p>
              </div>

              {/* Description Box - Appears below the clicked box */}
              <div
className={`mt-4 w-1/3 transition-all duration-500 ease-in-out overflow-hidden ${selectedIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} mx-auto`}
>
                <div className="bg-[#182a51] text-white p-5 rounded-xl shadow-lg">
                  <p className="text-sm text-gray-200">
                    {exp.description.split("•").map((text, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <br />}
                        {index > 0 && "• "}
                        {text.trim()}
                      </React.Fragment>
                    ))}
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
    </>
  );
};

export default Experience;
