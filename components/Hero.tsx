import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, MousePointerClick } from 'lucide-react';
import { SERVICES, CURRENT_FOCUS, UI_TEXT, PROFILE_IMAGE } from '../constants';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = UI_TEXT[language].hero;
  const services = SERVICES[language];
  const focus = CURRENT_FOCUS[language];

  // Typing effect state
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    // Determine the array of strings to cycle through
    const roles = t.typingRoles || [t.role];

    const tick = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      // Adjust typing speed
      if (isDeleting) {
        setDelta(50);
      } else {
        setDelta(150);
      }

      if (!isDeleting && updatedText === fullText) {
        // Finished typing word, wait a bit
        setIsDeleting(true);
        setDelta(2000);
      } else if (isDeleting && updatedText === '') {
        // Finished deleting word, switch to next
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(150);
      }
    };

    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, delta, isDeleting, loopNum, t.typingRoles, t.role]);

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="lg:w-1/2 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="min-w-[10px] inline-block h-5">
                {text}
                <span className="animate-pulse ml-0.5">|</span>
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up [animation-delay:200ms] text-slate-900 dark:text-white">
              {t.headlinePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t.headlineSuffix}</span> {t.headlineEnd}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl animate-fade-in-up [animation-delay:400ms]">
              {t.desc}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:600ms]">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center gap-2 group"
              >
                {t.btnPortfolio}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="./assets/CV_Alamahul_Bayan.pdf"
                className="px-8 py-3.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold transition-all flex items-center gap-2"
              >
                <Download size={18} />
                {t.btnCV}
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="lg:w-1/2 relative flex justify-center animate-fade-in-up [animation-delay:800ms]">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Animated Background Blobs */}
              <div className="absolute top-0 -left-4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob dark:bg-purple-900/50 dark:mix-blend-screen"></div>
              <div className="absolute top-0 -right-4 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000 dark:bg-indigo-900/50 dark:mix-blend-screen"></div>
              <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-900/50 dark:mix-blend-screen"></div>

              {/* Image Container */}
              <div className="relative rounded-full p-2 bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-2xl">
                <div className="aspect-square rounded-full overflow-hidden relative">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Profile"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-8 right-0 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2 animate-bounce cursor-default">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Open for Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services & Focus Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
              <MousePointerClick className="text-primary" /> {t.services}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service.title} className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800/60 transition-colors group shadow-sm dark:shadow-none">
                  <service.icon className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">{t.focus}</h3>
            <div className="bg-gradient-to-br from-white/50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 h-full shadow-sm dark:shadow-none">
              <ul className="space-y-4">
                {focus.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;