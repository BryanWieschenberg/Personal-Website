import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => (
  <>
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
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <div className="pb-64"></div>
  </>
);

export default App;
