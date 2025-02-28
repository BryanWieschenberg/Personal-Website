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
  <Router>
      <style>
      {`
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

    <Background />
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
