import React from 'react';

const Navbar: React.FC = () => (
  <header className="bg-gray-800 text-white shadow-lg py-4">
    <div className="container mx-auto flex justify-between items-center px-4">
      <h1 className="text-3xl font-bold">Bryan Wieschenberg</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#education" className="hover:text-blue-400">Education</a></li>
          <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
