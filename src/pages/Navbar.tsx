import React from 'react';
import { Link } from 'react-router-dom';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { FiFileText } from "react-icons/fi";
// import { MdSchool } from 'react-icons/md';
import { MdHome } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

const Navbar: React.FC = () => (
  <header className="top-0 left-0 w-full text-white shadow-lg py-4 z-50" style={{ background: 'linear-gradient(to bottom, #4b576a, #0e1528)' }}>
    <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
      {/* Center Section */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex flex-wrap space-x-3 md:space-x-6 text-lg text-blue-300">
          <li>
            <Link to="/" className="hover:text-blue-400">
              <MdHome className="w-8 h-8" />
            </Link>
          </li>
          <li>
            <Link to="about" className="hover:text-blue-400">
              <IoPersonSharp className="w-8 h-8" />
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-400">
              <FaSuitcase className="w-8 h-8" />
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-400">
              <MdEditDocument className="w-8 h-8" />
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-400">
              <HiChatBubbleBottomCenterText className="w-8 h-8" />
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-400">
              <HiOutlineChatBubbleBottomCenterText className="w-8 h-8" />
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-400">
              GI
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-400">
              RE
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-400">
              SC
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-400">
              GI
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
