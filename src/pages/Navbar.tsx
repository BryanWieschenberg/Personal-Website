import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoDocumentTextOutline, IoDocumentTextSharp, IoPersonCircleOutline, IoPersonCircle } from "react-icons/io5";
import { MdWork, MdWorkOutline } from "react-icons/md";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiSchoolLine, RiSchoolFill } from "react-icons/ri";
import { FiPlus, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaFileAlt, FaUniversity } from 'react-icons/fa';
import NavbarExpand from './NavbarExpand';

const Navbar: React.FC = () => {
  const location = useLocation();
  const homeRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const educationRef = useRef<HTMLAnchorElement>(null);
  const experienceRef = useRef<HTMLAnchorElement>(null);
  const projectsRef = useRef<HTMLAnchorElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);
  const [lineStyle, setLineStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  const updateLinePosition = () => {
    if (location.pathname === '/' && homeRef.current) {
      const rect = homeRef.current.getBoundingClientRect();
      const headerRect = homeRef.current.closest('header')?.getBoundingClientRect();
      if (headerRect) {
        const left = rect.left - headerRect.left - 4;
        const width = rect.width + 8;
        setLineStyle({ left, width });
      }
    }
    else if (location.pathname === '/about' && aboutRef.current) {
      const rect = aboutRef.current.getBoundingClientRect();
      const headerRect = aboutRef.current.closest('header')?.getBoundingClientRect();
      if (headerRect) {
        const left = rect.left - headerRect.left - 4;
        const width = rect.width + 8;
        setLineStyle({ left, width });
      }
    }
    else if (location.pathname === '/education' && educationRef.current) {
      const rect = educationRef.current.getBoundingClientRect();
      const headerRect = educationRef.current.closest('header')?.getBoundingClientRect();
      if (headerRect) {
        const left = rect.left - headerRect.left - 4;
        const width = rect.width + 8;
        setLineStyle({ left, width });
      }
    }
    else if (location.pathname === '/experience' && experienceRef.current) {
      const rect = experienceRef.current.getBoundingClientRect();
      const headerRect = experienceRef.current.closest('header')?.getBoundingClientRect();
      if (headerRect) {
        const left = rect.left - headerRect.left - 4;
        const width = rect.width + 8;
        setLineStyle({ left, width });
      }
    }
    else if (location.pathname === '/projects' && projectsRef.current) {
      const rect = projectsRef.current.getBoundingClientRect();
      const headerRect = projectsRef.current.closest('header')?.getBoundingClientRect();
      if (headerRect) {
        const left = rect.left - headerRect.left - 4;
        const width = rect.width + 8;
        setLineStyle({ left, width });
      }
    }
    else if (location.pathname === '/contact' && contactRef.current) {
      const rect = contactRef.current.getBoundingClientRect();
      const headerRect = contactRef.current.closest('header')?.getBoundingClientRect();
      if (headerRect) {
        const left = rect.left - headerRect.left - 4;
        const width = rect.width + 8;
        setLineStyle({ left, width });
      }
    }
  };

  useEffect(() => {
    updateLinePosition();
    window.addEventListener('resize', updateLinePosition);
    return () => {
      window.removeEventListener('resize', updateLinePosition);
    };
  }, [location]);

  return (
    <header
      className="relative flex items-center top-0 left-0 w-full text-white shadow-lg py-2 z-50"
      style={{ background: 'linear-gradient(to bottom, #4b576a, #0e1528)' }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo section - always visible, text hidden on small screens */}
        <div className="flex items-center">
          <img src="./assets/images/favicon.ico" alt="Logo" className="w-6 h-6 md:w-10 md:h-10" />
          <div className="ml-2 hidden md:block">
            <span className="text-white">Bryan</span>
            <span className="block text-sm text-white">Wieschenberg</span>
          </div>
        </div>

        {/* Main navigation - centered */}
        <nav className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex space-x-3 md:space-x-10 text-lg text-blue-300">
          <ul className="flex flex-wrap space-x-2 md:space-x-10 text-lg text-blue-300">
            <li>
              <Link
                to="/"
                ref={homeRef}
                className="hover:text-blue-400 flex flex-col items-center"
              >
                {location.pathname === '/' ? (
                  <GoHomeFill className="w-6 h-6" />
                ) : (
                  <GoHome className="w-6 h-6" />
                )}
                <span className="hidden md:block text-sm leading-tight mb-1">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                ref={aboutRef}
                className="hover:text-blue-400 flex flex-col items-center"
              >
                {location.pathname === '/about' ? (
                  <IoPersonCircle className="w-6 h-6" />
                ) : (
                  <IoPersonCircleOutline className="w-6 h-6" />
                )}
                <span className="hidden md:block text-sm leading-tight mb-1">About</span>
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                ref={educationRef}
                className="hover:text-blue-400 flex flex-col items-center"
              >
                {location.pathname === '/education' ? (
                  <RiSchoolFill className="w-6 h-6" />
                ) : (
                  <RiSchoolLine className="w-6 h-6" />
                )}
                <span className="hidden md:block text-sm leading-tight mb-1">Education</span>
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                ref={experienceRef}
                className="hover:text-blue-400 flex flex-col items-center"
              >
                {location.pathname === '/experience' ? (
                  <MdWork className="w-6 h-6" />
                ) : (
                  <MdWorkOutline className="w-6 h-6" />
                )}
                <span className="hidden md:block text-sm leading-tight mb-1">Experience</span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                ref={projectsRef}
                className="hover:text-blue-400 flex flex-col items-center"
              >
                {location.pathname === '/projects' ? (
                  <IoDocumentTextSharp className="w-6 h-6" />
                ) : (
                  <IoDocumentTextOutline className="w-6 h-6" />
                )}
                <span className="hidden md:block text-sm leading-tight mb-1">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                ref={contactRef}
                className="hover:text-blue-400 flex flex-col items-center"
              >
                {location.pathname === '/contact' ? (
                  <HiChatBubbleBottomCenterText className="w-6 h-6" />
                ) : (
                  <HiOutlineChatBubbleBottomCenterText className="w-6 h-6" />
                )}
                <span className="hidden md:block text-sm leading-tight mb-1">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right section: Social Links on md+ and toggle button on mobile */}
        <div className="flex items-center">
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-6 text-lg text-blue-300">
              <li>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex flex-col items-center"
                >
                  <FaLinkedin className="w-8 h-8" />
                  <span className="text-sm leading-tight">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex flex-col items-center"
                >
                  <FaGithub className="w-8 h-8" />
                  <span className="text-sm leading-tight">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex flex-col items-center"
                >
                  <FaFileAlt className="w-8 h-8" />
                  <span className="text-sm leading-tight">Resume</span>
                </a>
              </li>
              <li>
                <a
                  href="https://college.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex flex-col items-center"
                >
                  <FaUniversity className="w-8 h-8" />
                  <span className="text-sm leading-tight">College</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Mobile toggle button */}
          <button
            className="md:hidden text-white text-3xl ml-4"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <FiX /> : <FiPlus />}
          </button>
        </div>
      </div>

      {(location.pathname === '/' || location.pathname === '/about' || location.pathname === '/education' || location.pathname === '/experience' || location.pathname === '/projects' || location.pathname === '/contact') && (
        <div
          className="absolute bg-blue-400"
          style={{
            bottom: 0,
            left: lineStyle.left,
            width: lineStyle.width,
            height: '2px',
          }}
        />
      )}

      {isExpanded && <NavbarExpand onClose={() => setIsExpanded(false)} />}
    </header>
  );
};

export default Navbar;