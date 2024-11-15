import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => (
  <div>
    <Header />
    <About />
    <Education />
    <Experience />
    <Projects />
    <Contact />
  </div>
);

export default App;
