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
  const [lineStyle, setLineStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  // Function to update the line position
  const updateLinePosition = () => {
    if (location.pathname === '/' && homeRef.current) {
      // Get the bounding rectangle of the About link.
      const rect = homeRef.current.getBoundingClientRect();
      // Get the bounding rectangle of the header (the closest header element).
      const headerRect = homeRef.current.closest('header')?.getBoundingClientRect();
      if (headerRect) {
        // Calculate the left offset relative to the header.
        // Subtracting a few pixels to let the line be a little wider than the icon.
        const left = rect.left - headerRect.left - 4;
        // The width is the About link's width plus extra pixels (e.g., 8px) for a slight overhang.
        const width = rect.width + 8;
        setLineStyle({ left, width });
      }
    }
    else if (location.pathname === '/about' && aboutRef.current) {
      // Get the bounding rectangle of the About link.
      const rect = aboutRef.current.getBoundingClientRect();
      // Get the bounding rectangle of the header (the closest header element).
      const headerRect = aboutRef.current.closest('header')?.getBoundingClientRect();
      if (headerRect) {
        // Calculate the left offset relative to the header.
        // Subtracting a few pixels to let the line be a little wider than the icon.
        const left = rect.left - headerRect.left - 4;
        // The width is the About link's width plus extra pixels (e.g., 8px) for a slight overhang.
        const width = rect.width + 8;
        setLineStyle({ left, width });
      }
    }
  };

  // Update on both location change and resize events
  useEffect(() => {
    updateLinePosition();
    
    // Add resize event listener to update line position when window is resized
    window.addEventListener('resize', updateLinePosition);
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateLinePosition);
    };
  }, [location]);

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
              <Link to="/education" className="hover:text-blue-400 flex flex-col items-center">
                <MdHome className="w-8 h-8" />
                <span className="hidden md:block text-sm leading-tight mb-1">Education</span>
              </Link>
            </li>
            <li>
              <Link to="/experience" className="hover:text-blue-400 flex flex-col items-center">
                <IoPersonSharp className="w-8 h-8" />
                <span className="hidden md:block text-sm leading-tight mb-1">Experience</span>
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-400 flex flex-col items-center">
                <FaSuitcase className="w-8 h-8" />
                <span className="hidden md:block text-sm leading-tight mb-1">Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 flex flex-col items-center">
                <MdEditDocument className="w-8 h-8" />
                <span className="hidden md:block text-sm leading-tight mb-1">Contact</span>
              </Link>
            </li>
            {/* Additional links as needed */}
          </ul>
        </nav>
      </div>
      {/* Render the blue line at the bottom of the navbar if on the About page */}
      {(location.pathname === '/' || location.pathname === '/about') && (
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
    </header>
  );
};

export default Navbar;