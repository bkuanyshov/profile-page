import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    let currentSectionId = 'hero';
    
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < 100) {
        currentSectionId = section.id;
      }
    });
    
    setCurrentSection(currentSectionId);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        <div className="min-h-screen flex flex-col">
          <Navbar activeSection={currentSection} />
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;