import React from 'react';

const About: React.FC = () => (
  <section
    id="about"
    className="relative bg-blue-500 py-10 overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-[radial-gradient(circle,white_.05%,transparent_10%)] bg-[length:50px_50px] animate-moveDots"
    ></div>
    <div className="relative container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
      <p className="text-lg text-gray-100 leading-relaxed">
        I'm a passionate Computer Science student at The College of New Jersey, dedicated to creating scalable software
        solutions and exploring the cutting edge of quantum computing and full-stack development.
      </p>
    </div>
  </section>
);

export default About;
