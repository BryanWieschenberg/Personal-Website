import React, { useRef, useEffect, useState } from 'react';
import { work } from "../../constants";

const Timeline: React.FC = () => {
  const [items, setItems] = useState(
    work.map(item => ({ 
      ...item, 
      visible: false,
      imagePath: `/assets/images/${item.company.toLowerCase().replace(/\s+/g, '')}.png`
    }))
  );
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), 0);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      items.forEach((_, index) => {
        setTimeout(() => {
          setItems(prev =>
            prev.map((item, i) =>
              i === index ? { ...item, visible: true } : item
            )
          );
        }, index * 100);
      });
    }
  }, [visible]);

  const handleClick = (index: number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto px-4 lg:px-20 mb-6 overflow-x-hidden">
      <h1 
        ref={ref}
        className="roles-text lg:mb-2 pt-4 lg:pt-10 text-2xl lg:text-6xl font-bold pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative text-[#8580e7] bg-clip-text"
      > 
        My Timeline:
      </h1>
      {/* Timeline Container with vertical line decoration */}
      <div className="relative lg:mt-4">
        {/* Centered Vertical timeline line */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 top-0 w-3 h-[98%] bg-[#1e65ff] transition-opacity duration-1000 ${
    visible ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className="w-full max-w-4xl mx-auto px-4">
          {items.map((exp, index) => (
            <div key={index} className="mb-[9px] relative">
              {/* Centered Dot marker */}
              <div className={`transition-opacity duration-300 ease-in-out ${exp.visible ? 'translate-x-0 opacity-100' : 'translate-x-[150px] opacity-0'}`}>
                {/* Clickable Content Box */}
                <div 
                  className="bg-[#182a51] text-white p-5 rounded-xl shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.01] flex items-center space-x-4 mx-auto"
                  onClick={() => handleClick(index)}
                >
                  {/* Company Logo */}
                  <img 
                    src={exp.imagePath} 
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain rounded-lg bg-white p-2 shadow-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/default.png';
                    }}
                  />

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-[#a9c7ff] to-[#00e7ff] text-transparent bg-clip-text inline-block">
                      {exp.role}
                    </h3>
                    <h4 className="text-md lg:text-lg font-semibold text-blue-300">{exp.company}</h4>
                    <p className="text-sm text-gray-300">{exp.date}</p>
                  </div>
                </div>

                {/* Description Box */}
                <div
                  className={`mt-2 transition-all duration-500 ease-in-out overflow-hidden ${
                    selectedIndex === index ? 'max-h-[32rem] opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
                  }`}
                >
                  <div className="bg-[#2f4677] text-white p-3 rounded-xl shadow-lg">
                    <p className="text-sm lg:text-base text-gray-200 whitespace-pre-line">
                      {exp.desc}
                    </p>
                    {exp.skills && Object.keys(exp.skills).length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {Object.entries(exp.skills).map(([skill, level], i) => {
                      let bgColor;
                      switch (level) {
                        case 0:
                          bgColor = 'bg-blue-600';
                          break;
                        case 1:
                          bgColor = 'bg-green-600';
                          break;
                        case 2:
                          bgColor = 'bg-yellow-600';
                          break;
                        case 3:
                          bgColor = 'bg-red-600';
                          break;
                      }
                      return (
                        <span key={i} className={`${bgColor} px-2 py-1 rounded-lg border text-white border-white text-xs inline-block min-w-0 max-w-full truncate`}>
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 lg:mt-20"></div>
    </div>
  );
};

export default Timeline;
