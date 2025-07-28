import React, { useRef, useState, useEffect } from 'react';
import { projects } from "../constants"; // Added import for projects
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon

const Projects: React.FC = () => {
  const topRef = useRef<HTMLParagraphElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // New state for project items with a visible flag for each project
  const [projectItems, setProjectItems] = useState(
    projects.map(item => ({ ...item, visible: false }))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), 0);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // New useEffect for staggered spawning animation for project items
  useEffect(() => {
    if (visible) {
      projectItems.forEach((_, index) => {
        setTimeout(() => {
          setProjectItems(prev =>
            prev.map((item, i) =>
              i === index ? { ...item, visible: true } : item
            )
          );
        }, index * 50);
      });
    }
  }, [visible]);

  // Group projects by scale: 0 = Large-scale, 1 = Medium-scale, 2 = Small-scale
  const largeProjects = projectItems.filter(item => item.scale === 0);
  const mediumProjects = projectItems.filter(item => item.scale === 1);
  const smallProjects = projectItems.filter(item => item.scale === 2);

  return (
    <>
      <p id="ToTop" ref={topRef} className="invisible text-white">ToTop</p>
      <h1 
        ref={ref} 
        className={`text-6xl lg:text-8xl font-bold lg:mt-2 pb-4 drop-shadow-[7px_7px_1.5px_rgba(30,30,160,1)] text-center relative bg-gradient-to-r from-[#0030ff] to-[#c4f9ff] bg-clip-text text-transparent ${visible ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out' : 'opacity-0 -translate-y-20'}`}
      >
        Projects
      </h1>

      {/* New Projects List */}
      <div className="container mx-auto px-4 lg:px-20 py-10">
        {largeProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-5xl text-center font-extrabold mb-6 text-[#4fbdf1] relative bg-gradient-to-r drop-shadow-[7px_7px_1.5px_rgba(60,60,150,1)]">
              Flagships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {largeProjects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative p-[6px] rounded-2xl shadow-lg transition-all duration-300 ease-out transform hover:scale-105 ${project.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} bg-gradient-to-t from-[#473eb4] to-[#00e5ff]`}
                >
                  <div className="rounded-xl bg-[#4fbdf1] p-3 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-xl font-bold text-gray-800 truncate">{project.name}</h3>
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 flex-shrink-0 ml-2"
                        >
                          <FaGithub size={32} />
                        </a>
                      ) : (
                        <span 
                          title="This GitHub Repository is Private" 
                          className="flex-shrink-0 ml-2"
                        >
                          <FaGithub size={32} className="text-gray-400" />
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {project.date} • {project.span}
                    </p>
                    <p className="mt-1 text-gray-700 whitespace-pre-line flex-grow overflow-y-auto max-h-32">
                      {project.desc}
                    </p>
                    {project.skills && Object.keys(project.skills).length > 0 && (
                      <div className="mt-auto pt-3">
                        <div className="flex flex-wrap gap-1">
                          {Object.entries(project.skills).map(([skill, level], i) => {
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
                              case 4:
                                bgColor = 'bg-fuchsia-600';
                                break;
                            }
                            return (
                              <span key={i} className={`${bgColor} px-2 py-1 rounded-lg border text-white border-white text-xs inline-block min-w-0 max-w-full truncate`}>
                                {skill}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {mediumProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-5xl text-center font-extrabold mb-6 text-[#4ff192] relative bg-gradient-to-r drop-shadow-[7px_7px_1.5px_rgba(20,120,20,1)]">
              Medium-Sized
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediumProjects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative p-[6px] rounded-2xl shadow-lg transition-all duration-300 ease-out transform hover:scale-105 ${project.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} bg-gradient-to-t from-[#3eb47c] to-[#30ff00]`}
                >
                  <div className="rounded-xl bg-[#4ff192] p-3 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-xl font-bold text-gray-800 truncate">{project.name}</h3>
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 flex-shrink-0 ml-2"
                        >
                          <FaGithub size={32} />
                        </a>
                      ) : (
                        <span 
                          title="This GitHub Repository is Private" 
                          className="flex-shrink-0 ml-2"
                        >
                          <FaGithub size={32} className="text-[#b7bcc5]" />
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {project.date} • {project.span}
                    </p>
                    <p className="mt-1 text-gray-700 whitespace-pre-line flex-grow overflow-y-auto max-h-32">
                      {project.desc}
                    </p>
                    {project.skills && Object.keys(project.skills).length > 0 && (
                      <div className="mt-auto pt-3">
                        <div className="flex flex-wrap gap-1">
                          {Object.entries(project.skills).map(([skill, level], i) => {
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
                              case 4:
                                bgColor = 'bg-fuchsia-600';
                                break;
                            }
                            return (
                              <span key={i} className={`${bgColor} px-2 py-1 rounded-lg border border-white text-white text-xs inline-block min-w-0 max-w-full truncate`}>
                                {skill}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {smallProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-5xl text-center font-extrabold mb-6 text-[#f1e24f] relative bg-gradient-to-r drop-shadow-[7px_7px_1.5px_rgba(120,120,30,1)]">
              Small-Scale
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {smallProjects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative p-[6px] rounded-2xl shadow-lg transition-all duration-300 ease-out transform hover:scale-105 ${project.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} bg-gradient-to-t from-[#b4a03e] to-[#ffe700]`}
                >
                  <div className="rounded-xl bg-[#f1e24f] p-3 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-xl font-bold text-gray-800 truncate">{project.name}</h3>
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 flex-shrink-0 ml-2"
                        >
                          <FaGithub size={32} />
                        </a>
                      ) : (
                        <span 
                          title="This GitHub Repository is Private" 
                          className="flex-shrink-0 ml-2"
                        >
                          <FaGithub size={32} className="text-[#b7bcc5]" />
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {project.date} • {project.span}
                    </p>
                    <p className="mt-1 text-gray-700 whitespace-pre-line flex-grow overflow-y-auto max-h-32">
                      {project.desc}
                    </p>
                    {project.skills && Object.keys(project.skills).length > 0 && (
                      <div className="mt-auto pt-3">
                        <div className="flex flex-wrap gap-1">
                          {Object.entries(project.skills).map(([skill, level], i) => {
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
                              case 4:
                                bgColor = 'bg-fuchsia-600';
                                break;
                            }
                            return (
                              <span key={i} className={`${bgColor} px-2 py-1 rounded-lg border text-white border-white text-xs inline-block min-w-0 max-w-full truncate`}>
                                {skill}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Projects;
