import React, { useRef, useEffect, useState } from 'react';
import { classes, Class } from '../constants';
import { motion } from "framer-motion";

const Education: React.FC = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
        src="./assets/images/arrowBig.png"
        className="custom-image mx-auto"
        style={{ width: '1600px', height: '20px' }}
      />
      <div className="mt-20"></div>

      <h1
        ref={ref}
        className={`text-8xl md:text-8xl font-bold mt-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap overflow-visible text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent ${
          visible ? 'animate-fadeIn' : 'opacity-0'
        }`}
      >
        Education
      </h1>

      <div className="container mx-auto px-16 mt-16">
        <div className="flex flex-wrap justify-center gap-4">
          {classes.map((classItem: Class, index: number) => (
            <div key={index} className="flex flex-col w-64">
              {/* Item */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`flex items-center p-2 bg-[#182a51] rounded-2xl shadow-lg cursor-pointer transition-opacity duration-200 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionDelay: visible ? `${index * 50}ms` : '0ms',
                  transitionProperty: 'transform, opacity',
                  transitionDuration: visible ? '0ms' : '0ms',
                }}
                onClick={() => handleClick(index)}
              >
                <div className={`${classItem.color} flex-shrink-0`}>{classItem.icon}</div>
                <div className="ml-2">
                  <div className="flex items-center space-x-2">
                    <span className={`${classItem.color} font-bold text-xl`}>{classItem.id}</span>
                  </div>
                  <span className="text-white text-sm block leading-tight">{classItem.name}</span>
                </div>
              </motion.div>

              {/* Underbox */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden bg-[#1d3557] rounded-2xl shadow-lg text-white w-64 ${
                  selectedIndex === index ? 'max-h-40 opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
                }`}
              >
                <p className="px-3">{classItem.click}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
