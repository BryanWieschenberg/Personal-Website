import React, { useRef, useState, useEffect } from 'react';
import { projects } from "../constants"; // Added import for projects

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
            <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Large-scale Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {largeProjects.map((project, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg transition-all duration-300 ease-out transform ${project.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200`}
                >
                  <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.date} • {project.span}</p>
                  <p className="mt-2 text-gray-700 whitespace-pre-line">{project.desc}</p>
                  {/* Added skills section similar to Timeline */}
                  {project.skills && project.skills.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2 overflow-x-auto">
                      {project.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-[#2e229b] text-blue-200 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {mediumProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-yellow-600">Medium-scale Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediumProjects.map((project, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg transition-all duration-300 ease-out transform ${project.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400`}
                >
                  <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.date} • {project.span}</p>
                  <p className="mt-2 text-gray-700 whitespace-pre-line">{project.desc}</p>
                  {/* Added skills section similar to Timeline */}
                  {project.skills && project.skills.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2 overflow-x-auto">
                      {project.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-[#2e229b] text-blue-200 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {smallProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-green-600">Small-scale Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {smallProjects.map((project, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg transition-all duration-300 ease-out transform ${project.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} bg-gradient-to-r from-green-200 via-green-300 to-green-400`}
                >
                  <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.date} • {project.span}</p>
                  <p className="mt-2 text-gray-700 whitespace-pre-line">{project.desc}</p>
                  {/* Added skills section similar to Timeline */}
                  {project.skills && project.skills.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2 overflow-x-auto">
                      {project.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-[#2e229b] text-blue-200 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View on GitHub
                    </a>
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
