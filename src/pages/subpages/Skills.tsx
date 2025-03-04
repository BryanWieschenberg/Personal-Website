import { useState } from 'react';
import { skills } from "../../data";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<any>(null);
  
  // Map category IDs to border colors
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
    <div className="container mx-auto px-4 py-12 relative">
      {/* Spacing and arrow image */}
      <div className="mt-20"></div>
      <img 
        src="./assets/images/arrowBig.png"
        className="custom-image mx-auto animate-pulsate"
        style={{ width: '1600px', height: '20px' }} 
      />
      <div className="mt-20"></div>
      
      {/* Section Title */}
      <h1 className="roles-text lg:mb-2 pt-4 lg:pt-10 text-2xl lg:text-6xl font-bold pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative text-[#8580e7] bg-clip-text">
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
        {skills.map((skill, index) => (
          <div 
            key={index}
            className={`relative flex flex-col items-center justify-center bg-opacity-50 transition-transform 
              hover:scale-[107%] hover:shadow-lg hover:bg-black border-2 ${categoryColors[skill.type]} ${categoryBgColors[skill.type]}`}
            onMouseEnter={() => setActiveSkill(skill)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div className="w-8 h-8 lg:w-16 lg:h-16 flex items-center justify-center mt-[1.5px] mb-[1.5px]">
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/assets/skills/default.png";
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Tooltip below the skills grid */}
      {activeSkill && (
        <div className="flex justify-center mt-6">
          <div className="bg-[#2c5ba6] px-4 py-2 rounded-lg shadow-lg z-10">
            <h3 className="font-semibold text-lg text-center text-[#00ffd4]">
              {activeSkill.name}
            </h3>
            <p className="text-sm text-center mt-1 text-white">
              {activeSkill.yoe} Years of Experience
            </p>
            <p className="text-xs text-center mt-1 text-[#d7e0e0]">
              {activeSkill.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
