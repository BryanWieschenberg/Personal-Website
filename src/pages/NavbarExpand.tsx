import React from 'react';
import { Link } from 'react-router-dom';
import { FiX } from "react-icons/fi";

interface NavbarExpandProps {
  onClose: () => void;
}

const NavbarExpand: React.FC<NavbarExpandProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 w-3/4 h-full bg-gray-900 text-white shadow-lg z-50 p-5 flex flex-col">
      {/* Close button */}
      <button className="self-end text-3xl" onClick={onClose}>
        <FiX />
      </button>

      {/* Menu items */}
      <nav className="flex flex-col mt-6 space-y-4 text-lg">
        <Link to="/" className="hover:text-blue-400" onClick={onClose}>Home</Link>
        <Link to="/about" className="hover:text-blue-400" onClick={onClose}>About</Link>
        <Link to="/education" className="hover:text-blue-400" onClick={onClose}>Education</Link>
        <Link to="/experience" className="hover:text-blue-400" onClick={onClose}>Experience</Link>
        <Link to="/projects" className="hover:text-blue-400" onClick={onClose}>Projects</Link>
        <Link to="/contact" className="hover:text-blue-400" onClick={onClose}>Contact</Link>
      </nav>
    </div>
  );
};

export default NavbarExpand;
