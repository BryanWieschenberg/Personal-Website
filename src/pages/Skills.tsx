import { useState } from 'react';
import { skills } from "../constants";

const Skills = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
  // Group skills by category
  const categories = [
    { id: 0, name: "Programming Languages" },
    { id: 1, name: "Frameworks & Libraries" },
    { id: 2, name: "Tools & Software" },
    { id: 3, name: "Concepts" },
    { id: 4, name: "Soft Skills" }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mt-20"></div>
      <img 
        src="./assets/images/arrowBig.png"
        className="custom-image mx-auto animate-pulsate"
        style={{ width: '1600px', height: '20px' }} 
      />
      
      <div className="mt-20"></div>
      <h1 className="roles-text lg:mb-2 pt-4 lg:pt-10 text-2xl lg:text-6xl font-bold pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative text-[#8580e7] bg-clip-text opacity-100">
        My Skills:
      </h1>
      
      {categories.map((category) => (
        <div key={category.id} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#6c63ff] drop-shadow-[3px_3px_1px_rgba(30,30,160,0.8)]">
            {category.name}
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills
              .filter(skill => skill.cat === category.id)
              .map((skill, index) => (
                <div 
                  key={index}
                  className="relative flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 rounded-lg p-4 transition-transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50"
                  onMouseEnter={() => setActiveTooltip(`${category.id}-${index}`)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="w-16 h-16 flex items-center justify-center mb-2">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/assets/skills/default.png";
                      }}
                    />
                  </div>
                  
                  {/* Only show tooltip when hovering */}
                  {activeTooltip === `${category.id}-${index}` && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded shadow-lg z-10 w-max">
                      <div className="text-sm font-medium">{skill.name}</div>
                      <div className="tooltip-arrow absolute h-2 w-2 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 rotate-45 bg-gray-900"></div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
