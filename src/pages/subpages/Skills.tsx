import { useState, useRef, useEffect } from 'react';
import { skills } from "../../constants";

const Skills = () => {
  // Initialize skills with a "visible" flag
  const [items, setItems] = useState(
    skills.map(item => ({ ...item, visible: false }))
  );
  const [activeSkill, setActiveSkill] = useState<any>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  
  // Intersection Observer to trigger animation when container is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), 0);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  // Staggered animation effect similar to the Classes component
  useEffect(() => {
    if (visible) {
      items.forEach((_, index) => {
        setTimeout(() => {
          setItems(prev =>
            prev.map((item, i) =>
              i === index ? { ...item, visible: true } : item
            )
          );
        }, index * 25);
      });
    }
  }, [visible]);

  // Map category IDs to border and background colors
  const categoryColors: { [key: number]: string } = {
    0: 'border-blue-500',    // Programming Languages
    1: 'border-yellow-500',  // Frameworks & Libraries
    2: 'border-green-500',   // Tools, Software, and OS
    3: 'border-red-500',     // Soft Skills
  };

  const categoryBgColors: { [key: number]: string } = {
    0: 'bg-blue-900',    // Programming Languages
    1: 'bg-yellow-900',  // Frameworks & Libraries
    2: 'bg-green-900',   // Tools, Software, and OS
    3: 'bg-red-900',     // Soft Skills
  };

  return (
    <div ref={ref} className="container mx-auto px-4 py-12 relative">
      {/* Spacing and arrow image */}
      <div className="mt-20"></div>
      <img 
        src="./assets/images/arrowBig.png"
        className="custom-image mx-auto animate-pulsate"
        style={{ width: '1600px', height: '20px' }} 
      />
      <div className="mt-20"></div>
      
      {/* Section Title */}
      <h1 className="roles-text lg:mb-2 lg:pt-5 text-2xl lg:text-6xl font-bold pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative text-[#8580e7] bg-clip-text">
        My Skills:
      </h1>
      
      {/* Legend */}
      <div className="flex justify-center mt-6 gap-4">
        <div className="flex items-center">
          <div className="mr-2 min-w-[1rem] min-h-[1rem] bg-blue-500 rounded-full"></div>
          <span className="text-xs lg:text-sm text-white">Programming Languages</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 min-w-[1rem] min-h-[1rem] bg-yellow-500 rounded-full"></div>
          <span className="text-xs lg:text-sm text-white">Frameworks & Libraries</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 min-w-[1rem] min-h-[1rem] bg-green-500 rounded-full"></div>
          <span className="text-xs lg:text-sm text-white">Tools, Software, and OS</span>
        </div>
        <div className="flex items-center">
          <div className="mr-2 min-w-[1rem] min-h-[1rem] bg-red-500 rounded-full"></div>
          <span className="text-xs lg:text-sm text-white">Soft Skills</span>
        </div>
      </div>
      
      {/* Combined Skills Grid */}
      <div className="mt-10 grid grid-cols-8 lg:grid-cols-12">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`relative flex flex-col items-center justify-center mb-[0.25px] bg-opacity-50 transition-transform 
              hover:scale-[115%] hover:z-50 hover:shadow-lg hover:bg-opacity-100 border-2 
              ${categoryColors[item.type]} ${categoryBgColors[item.type]}
              ${item.visible ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out' : 'opacity-0 translate-y-10'}`}
            onMouseEnter={() => setActiveSkill(item)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div className="w-8 h-8 lg:w-16 lg:h-16 text-white flex items-center justify-center mt-[1.5px] mb-[1.5px]">
              {typeof item.icon === 'string' ? (
                <img 
                  src={item.icon} 
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/assets/skills/default.png";
                  }}
                />
              ) : (
                item.icon
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Tooltip below the skills grid */}
      {activeSkill && (
        <div className="flex justify-center mt-6">
          <div className="bg-[#2c5ba6] px-4 py-2 rounded-lg shadow-lg z-10">
            <h3 className="font-bold text-lg lg:text-2xl text-center text-[rgb(157,230,255)]">
              {activeSkill.name}
            </h3>
            <p className="text-sm lg:text-xl text-center text-[#00ffd4]">
              {activeSkill.yoe} {activeSkill.yoe === 1 ? "Year" : "Years"} of Experience
            </p>
            <p className="text-xs lg:text-lg text-center text-[#d7e0e0] whitespace-pre-line">
              <span className="text-white font-semibold">Used in: </span>
              {activeSkill.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
