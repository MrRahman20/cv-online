import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/custom.scss';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider>
        <LanguageProvider>
          <div className={`app ${isDark ? 'dark-mode' : ''}`}>
            <Header toggleTheme={toggleTheme} isDark={isDark} />
            <main>
              <Hero />
              <About />
              <Experience />
              <Education />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
