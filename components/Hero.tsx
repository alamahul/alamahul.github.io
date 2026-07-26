import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const roles = t.typingRoles || [t.role];

    const tick = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(50);
      } else {
        setDelta(150);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(2000);
      } else if (isDeleting && updatedText === '') {
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

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);

  const tiltX = mousePos.y * -8;
  const tiltY = mousePos.x * 8;

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-32 pb-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Orb Gradient Background */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full mix-blend-multiply dark:mix-blend-screen transition-opacity duration-700" style={{ opacity: 0.3 + mousePos.x * 0.1 }}>
        <div className="absolute inset-0 rounded-full animate-orbit" />
      </div>
      <div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full mix-blend-multiply dark:mix-blend-screen transition-opacity duration-700"
        style={{ opacity: 0.3 + mousePos.y * 0.1 }}
      >
        <div className="absolute inset-0 rounded-full animate-orbit animation-delay-2000" />
      </div>
      <div
        className="absolute -bottom-10 left-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen transition-opacity duration-700"
        style={{ opacity: 0.2 + mousePos.x * 0.05 }}
      >
        <div className="absolute inset-0 rounded-full animate-orbit animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6">
        <div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
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

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up [animation-delay:200ms] text-slate-900 dark:text-white" style={{ transform: 'translateZ(30px)' }}>
              {t.headlinePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t.headlineSuffix}</span> {t.headlineEnd}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl animate-fade-in-up [animation-delay:400ms]" style={{ transform: 'translateZ(20px)' }}>
              {t.desc}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:600ms]">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300 flex items-center gap-2 group cta-glow"
              >
                {t.btnPortfolio}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="./assets/CV_Alamahul_Bayan.pdf"
                className="px-8 py-3.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 text-slate-900 dark:text-white font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                {t.btnCV}
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="lg:w-1/2 relative flex justify-center animate-fade-in-up [animation-delay:800ms]">
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
              {/* Orb Gradient Behind Photo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen blur-3xl animate-pulse-glow"></div>

              {/* Animated Background Blobs */}
              <div className="absolute top-0 -left-4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob dark:bg-purple-900/50 dark:mix-blend-screen"></div>
              <div className="absolute top-0 -right-4 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000 dark:bg-indigo-900/50 dark:mix-blend-screen"></div>
              <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-900/50 dark:mix-blend-screen"></div>

              {/* Image Container with glossy frame */}
              <div className="relative rounded-full p-2 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-white/30 dark:border-slate-700 shadow-2xl dark:shadow-primary/10 animate-pulse-glow">
                <div className="aspect-square rounded-full overflow-hidden relative">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Profile"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/20 dark:to-white/5 mix-blend-overlay pointer-events-none"></div>
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
                <div key={service.title} className="p-5 rounded-xl bg-white/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800/60 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group hover:-translate-y-1 shadow-sm dark:shadow-none">
                  <service.icon className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">{t.focus}</h3>
            <div className="bg-gradient-to-br from-white/50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 h-full shadow-sm dark:shadow-none hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
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