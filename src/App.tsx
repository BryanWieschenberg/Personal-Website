import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToTop from "./pages/ToTop";
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
          overflow: hidden;
        }
        
        #root {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          overflow: hidden;
        }
        
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }
        
        .content-container {
          flex: 1;
          overflow-y: auto;
          position: relative;
        }
        
        /* Custom Dark Scrollbar */
        .content-container::-webkit-scrollbar {
          width: 10px;
        }
        .content-container::-webkit-scrollbar-track {
          background: #0a0a0a; /* Dark background */
        }
        .content-container::-webkit-scrollbar-thumb {
          background: #444; /* Darker thumb */
          border-radius: 5px;
        }
        .content-container::-webkit-scrollbar-thumb:hover {
          background: #777; /* Lighter on hover */
        }

        /* Firefox Scrollbar */
        .content-container {
          scrollbar-color: #555 #0a0a0a;
        }
      `}
    </style>

    <div className="app-container">
      <ToTop />
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
