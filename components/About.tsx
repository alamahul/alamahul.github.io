import React from 'react';
import { User, Code, Briefcase, GraduationCap } from 'lucide-react';
import { SKILLS, EXPERIENCE_DATA, UI_TEXT } from '../constants';
import { Language } from '../types';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = UI_TEXT[language].about;
  const skills = SKILLS[language];
  const experience = EXPERIENCE_DATA[language];

  return (
    <section id="about" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative transition-colors duration-300">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">{t.titlePre}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">{t.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Bio & Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <User className="text-primary w-6 h-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.profileTitle}</h3>
            </div>
            <div className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 space-y-4">
              <p>
                {t.profileDesc1} <strong className="text-slate-900 dark:text-white">Alamahul Bayan</strong>, {t.profileDesc2}
              </p>
              <p>
                {t.profileDesc3} <span className="text-primary">Laravel</span>, <span className="text-primary">Express.js</span>, <span className="text-primary">React.js</span>, & MongoDB.
              </p>
              <p className="italic border-l-2 border-primary pl-4 text-slate-600 dark:text-slate-300">
                {t.quote}
              </p>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Code className="text-secondary w-6 h-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.skillsTitle}</h3>
            </div>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <span className="text-xs text-slate-500">{skill.category}</span>
                  </div>
                  {/* <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div> */}
                  {/* terlalu bias jadi dihilangkan terlebih dahulu */}
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Experience & Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary w-6 h-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.expTitle}</h3>
            </div>

            <div className="relative border-l border-slate-300 dark:border-slate-700 ml-3 space-y-8">
              {experience.map((item) => (
                <div key={item.id} className="ml-6 relative group">
                  <div className="absolute -left-[31px] bg-white dark:bg-slate-900 border-2 border-primary w-4 h-4 rounded-full mt-1.5 group-hover:scale-125 transition-transform"></div>
                  <div className="p-6 bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-xl hover:shadow-md dark:hover:bg-slate-800/60 transition-all">
                    <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h4>
                        <span className="text-primary text-sm font-medium">{item.company}</span>
                      </div>
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 rounded-full text-xs text-slate-600 dark:text-slate-300 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-wide">
                      {item.type === 'work' ? <Briefcase size={12} /> : <GraduationCap size={12} />}
                      {item.type === 'work' ? t.work : t.edu}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;