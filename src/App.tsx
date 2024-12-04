import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from "./components/Background";

const App: React.FC = () => (
  <div>
    <Background />
    <Header />
    <About />
    <Education />
    <Experience />
    <Projects />
    <Contact />
  </div>
);

export default App;
