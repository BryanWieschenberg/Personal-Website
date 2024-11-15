import React from 'react';

const projects = [
  {
    name: 'Video Sharing Service',
    description: 'Engineered a full-stack application for video browsing and playback using React and Next.js.',
  },
  {
    name: 'Hackathon Scheduling Tool',
    description: 'Developed a scheduler in Ruby to generate optimized plans from event and room data.',
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="py-10">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-100 p-4 mb-4 rounded-lg">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
