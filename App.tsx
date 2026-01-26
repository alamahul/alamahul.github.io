import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import SettingsPanel from './components/SettingsPanel';
import AiAssistant from './components/AiAssistant';
import SectionTransition from './components/SectionTransition';
import { Heart } from 'lucide-react';
import { Language } from './types';
import { UI_TEXT } from './constants';

const App: React.FC = () => {
  // State for background intensity, default is 0.5 (50%)
  const [intensity, setIntensity] = useState(0.5);
  // State for dark mode, default true
  const [isDarkMode, setIsDarkMode] = useState(true);
  // State for language, default 'id'
  const [language, setLanguage] = useState<Language>('id');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const t = UI_TEXT[language].footer;

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-200 transition-colors duration-300">
      <Background intensity={intensity} isDarkMode={isDarkMode} />
      <Navbar language={language} />

      <main>
        <SectionTransition>
          <Hero language={language} />
        </SectionTransition>
        <SectionTransition>
          <About language={language} />
        </SectionTransition>
        <SectionTransition>
          <Projects language={language} />
        </SectionTransition>
        <SectionTransition>
          <Contact language={language} />
        </SectionTransition>
      </main>

      <AiAssistant language={language} />

      <SettingsPanel
        intensity={intensity}
        setIntensity={setIntensity}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        language={language}
        setLanguage={setLanguage}
      />

      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-dark/50 text-center relative z-10 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
            © 2026 {t.madeWith} <Heart size={14} className="text-red-500 fill-red-500" /> {t.using}
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm text-slate-500 dark:text-slate-400">
            <a href="https://www.instagram.com/alamahulsaja/" className="hover:text-primary transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/alamahul-bayan-30b16a24a/" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/alamahul" className="hover:text-primary transition-colors">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;