import React, { useRef, useEffect, useState } from 'react';
import { skills, Skill } from '../constants';

const About: React.FC = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <>
      <img
        src="./assets/images/arrowBig.png"
        className="custom-image mx-auto"
        style={{ width: '1600px', height: '20px' }}
      />
      <div className="mt-20"></div>

      <h1
        ref={ref}
        className={`text-8xl md:text-8xl font-bold mt-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] whitespace-nowrap text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent ${
          visible ? 'animate-fadeIn' : 'opacity-0'
        }`}
      >
        About Me
      </h1>

      <div className="container mx-auto px-16 mt-16">
        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill: Skill, index: number) => (
            <div
              key={index}
              className={`flex items-center p-3 bg-[#182a51] rounded-2xl shadow-lg w-64 transition-transform duration-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{
                transitionDelay: visible ? `${index * 50}ms` : '0ms',
                transitionProperty: 'transform, opacity',
                transitionDuration: visible ? '300ms' : '200ms',
              }}
            >
              <div className="text-blue-400 flex-shrink-0 mr-2">{skill.icon}</div>
              <span className="text-sm text-white font-semibold">{skill.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;