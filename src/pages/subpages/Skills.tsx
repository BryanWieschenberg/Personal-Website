import { useState } from 'react';
import { skills } from "../../data";

const Skills = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
  // Group skills by category
  const categories = [
    { id: 0, name: "Programming Languages" },
    { id: 1, name: "Frameworks & Libraries" },
    { id: 2, name: "Tools, Software, and OS" },
    { id: 3, name: "Soft Skills" },
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
          
          <div className="grid grid-cols-6 lg:grid-cols-10 gap-6">
            {skills
              .filter(skill => skill.type === category.id)
              .map((skill, index) => (
                <div 
                  key={index}
                  className="relative flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 rounded-lg p-4 transition-transform hover:scale-[106%] hover:shadow-lg hover:bg-gray-800"
                  onMouseEnter={() => setActiveTooltip(`${category.id}-${index}`)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="w-8 h-8 lg:w-16 lg:h-16 flex items-center justify-center mb-2">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/assets/skills/default.png";
                      }}
                    />
                  </div>
                  
                  {/* Tooltip showing skill details */}
                  {activeTooltip === `${category.id}-${index}` && (
                    <div className="absolute -top-20 bg-gray-900 px-4 rounded-lg shadow-lg z-10 w-max">
                      <h3 className="font-semibold text-lg text-center text-[#00ffd4]">{skill.name}</h3>
                      <p className="text-sm text-center mt-1 text-white">{skill.yoe} Years of Experience</p>
                      <p className="text-xs text-center mt-1 text-[#d7e0e0]">{skill.desc}</p>
                      <div className="absolute h-3 w-3 bg-gray-900 mb-4"></div>
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
