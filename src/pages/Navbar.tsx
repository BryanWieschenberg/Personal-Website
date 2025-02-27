import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { GoHome, GoHomeFill } from "react-icons/go";

const Navbar: React.FC = () => {
  const location = useLocation();
  const homeRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const educationRef = useRef<HTMLAnchorElement>(null);
  const experienceRef = useRef<HTMLAnchorElement>(null);
  const projectsRef = useRef<HTMLAnchorElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);
  
  const [lineStyle, setLineStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const [hasTransition, setHasTransition] = useState(true);
  const resizeTimerRef = useRef<number | null>(null);

  // Function to update the line position based on current route
  const updateLinePosition = (shouldAnimate: boolean = true) => {
    let activeRef: React.RefObject<HTMLAnchorElement> | null = null;
    
    // Determine which ref to use based on the current path
    switch (location.pathname) {
      case '/':
        activeRef = homeRef;
        break;
      case '/about':
        activeRef = aboutRef;
        break;
      case '/education':
        activeRef = educationRef;
        break;
      case '/experience':
        activeRef = experienceRef;
        break;
      case '/projects':
        activeRef = projectsRef;
        break;
      case '/contact':
        activeRef = contactRef;
        break;
      default:
        activeRef = null;
    }
    
    // Set transition state based on whether this should animate
    setHasTransition(shouldAnimate);
    
    // If we have an active ref, calculate and set the line style
    if (activeRef && activeRef.current) {
      const rect = activeRef.current.getBoundingClientRect();
      const headerRect = activeRef.current.closest('header')?.getBoundingClientRect();
      
      if (headerRect) {
        const left = rect.left - headerRect.left - 4;
        const width = rect.width + 8;
        
        setLineStyle({ left, width });
      }
    }
  };

  // Handle resize events without animation
  const handleResize = () => {
    // Clear the transition first (no animation)
    updateLinePosition(false);
    
    // Clear any existing timer
    if (resizeTimerRef.current !== null) {
      window.clearTimeout(resizeTimerRef.current);
    }
  };

  // Update on location change
  useEffect(() => {
    // Small delay to ensure route change is complete
    const timer = setTimeout(() => {
      updateLinePosition(true); // Animate on page navigation
    }, 10);
    
    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  // Add resize listener separately
  useEffect(() => {
    // Initial position (no animation on first render)
    updateLinePosition(false);
    
    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimerRef.current !== null) {
        window.clearTimeout(resizeTimerRef.current);
      }
    };
  }, []);

  return (
    <header
      className="relative top-0 left-0 w-full text-white shadow-lg py-2 z-50"
      style={{ background: 'linear-gradient(to bottom, #4b576a, #0e1528)' }}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <nav className="flex-1 flex justify-center">
          <ul className="flex flex-wrap space-x-3 md:space-x-10 text-lg text-blue-300">
            <li>
              <Link
                to="/"
                ref={homeRef}
                className="hover:text-blue-400 flex flex-col items-center"
              >
                {location.pathname === '/' ? (
                  <GoHomeFill className="w-8 h-8" />
                ) : (
                  <GoHome className="w-8 h-8" />
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
                  <HiChatBubbleBottomCenterText className="w-8 h-8" />
                ) : (
                  <HiOutlineChatBubbleBottomCenterText className="w-8 h-8" />
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
                <MdHome className="w-8 h-8" />
                <span className="hidden md:block text-sm leading-tight mb-1">Education</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/experience" 
                ref={experienceRef}
                className="hover:text-blue-400 flex flex-col items-center"
              >
                <IoPersonSharp className="w-8 h-8" />
                <span className="hidden md:block text-sm leading-tight mb-1">Experience</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                ref={projectsRef}
                className="hover:text-blue-400 flex flex-col items-center"
              >
                <FaSuitcase className="w-8 h-8" />
                <span className="hidden md:block text-sm leading-tight mb-1">Projects</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                ref={contactRef}
                className="hover:text-blue-400 flex flex-col items-center"
              >
                <MdEditDocument className="w-8 h-8" />
                <span className="hidden md:block text-sm leading-tight mb-1">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Render the blue line at the bottom of the navbar */}
      <div
        className="absolute bg-blue-400"
        style={{
          bottom: 0,
          left: lineStyle.left,
          width: lineStyle.width,
          height: '2px',
          transition: hasTransition ? 'left 0.3s ease, width 0.3s ease' : 'none'
        }}
      />
    </header>
  );
};

export default Navbar;