import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

const Navbar: React.FC = () => (
  <header className="fixed top-0 left-0 w-full text-white shadow-lg py-4 z-50" style={{ background: 'linear-gradient(to bottom, #4b576a, #0e1528)' }}>
    <div className="container mx-auto flex justify-between items-center px-4">
      <div className="flex items-center space-x-2">
        <a href="#home">
          <img
            src="./assets/images/favicon.ico"
            alt="Logo"
            className="w-10 h-10"
          />
        </a>
      </div>
      <nav>
        <ul className="flex space-x-8 text-lg text-blue-300">
          <li>
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400">
              About Me
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-400">
              Professional Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex space-x-4">
        <a
          href="https://tcnj.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <MdSchool className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/BryanWieschenberg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/bryanwieschenberg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  </header>
);

export default Navbar;
