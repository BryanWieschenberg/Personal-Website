import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

const App: React.FC = () => (
  <>
      <Background />
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
  </>
);

export default App;
