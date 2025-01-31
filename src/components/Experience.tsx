import React, { useRef, useEffect, useState } from 'react';
import { work } from "../constants";

const Experience: React.FC = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), 200);
        setAnimationTriggered(true); // Ensures animation runs only once
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

      <h1
        ref={ref}
        className={`text-8xl md:text-8xl font-bold mt-4 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap overflow-visible text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent ${
          visible ? 'animate-fadeIn' : 'opacity-0'
        }`}
      >
        Experience
      </h1>

      {/* Timeline Container */}
      <div className="container mx-auto px-8 mt-16 flex justify-center">
        <div className="relative border-l-4 border-blue-500">
          {work.map((exp, index) => (
            <div
              key={index}
              className={`mb-10 flex items-start transition-all duration-300 ease-out ${
                selectedIndex === index ? "scale-105" : "scale-100"
              }`}
              style={{
                animation: animationTriggered
                  ? `fadeInUp 0.5s ease-out ${index * 0.15}s forwards`
                  : "none",
                opacity: 0, // Ensure it starts hidden
              }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>

              {/* Clickable Content Box */}
              <div
                className={`bg-[#182a51] text-white p-5 rounded-xl shadow-lg w-full md:w-3/4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110`}
                onClick={() => handleClick(index)}
              >
                <h3 className="text-xl font-bold text-[#c4f9ff]">{exp.role}</h3>
                <h4 className="text-lg font-semibold text-blue-300">{exp.company}</h4>
                <p className="text-sm text-gray-300">{exp.date}</p>

                {/* Description - Appears when clicked */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    selectedIndex === index ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-md text-gray-200">
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
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default Experience;
