import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Background from './pages/Background';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: React.FC = () => (
  <Router basename="/">
    <style>
      {`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow-x: hidden; /* Prevent horizontal scroll only */
        }
        
        #root {
          height: 100%;
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          position: relative;
        }
        
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          background-color: rgba(10, 10, 10, 0.95); /* Semi-transparent background */
        }
        
        .content-container {
          flex: 1;
          width: 100%;
          /* No padding-top, allowing content to scroll under navbar */
        }
        
        /* Custom Dark Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a; /* Dark background */
        }
        ::-webkit-scrollbar-thumb {
          background: #444; /* Darker thumb */
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #777; /* Lighter on hover */
        }

        /* Firefox Scrollbar */
        * {
          scrollbar-color: #555 #0a0a0a;
        }
      `}
    </style>

    <div className="app-container">
      <Background />
      
      <div className="navbar">
        <Navbar />
      </div>
      
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
