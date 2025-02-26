import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiFileText } from "react-icons/fi";
import { MdSchool } from 'react-icons/md';

const Navbar: React.FC = () => (
  <header className="top-0 left-0 w-full text-white shadow-lg py-4 z-50" style={{ background: 'linear-gradient(to bottom, #4b576a, #0e1528)' }}>
    <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
      {/* Left Section */}
      <div className="flex items-center space-x-2 flex-1">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="./assets/images/favicon.ico"
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-semibold text-blue-200 hidden lg:inline">
            Bryan Wieschenberg
          </span>
        </Link>
      </div>

      {/* Center Section */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex flex-wrap space-x-4 md:space-x-9 text-lg text-blue-300">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <a href="#education" className="hover:text-blue-400">
              Education
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-400">
              Experience
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

      {/* Right Section */}
      <div className="flex flex-wrap space-x-4 flex-1 justify-end">
        <a
          href="./assets/attachments/Resume - Bryan Wieschenberg.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FiFileText className="w-7 h-7" />
        </a>
        <a
          href="https://tcnj.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <MdSchool className="w-7 h-7" />
        </a>
        <a
          href="https://github.com/BryanWieschenberg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaGithub className="w-7 h-7" />
        </a>
        <a
          href="https://www.linkedin.com/in/bryanwieschenberg/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin className="w-7 h-7" />
        </a>
      </div>
    </div>
  </header>
);

export default Navbar;
