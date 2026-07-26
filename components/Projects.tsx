import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';
import { PROJECTS, CERTIFICATES, UI_TEXT } from '../constants';
import { Project, Language } from '../types';
import Swal from 'sweetalert2';
import { MousePointerClick } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project; index: number; language: Language }> = ({ project, index, language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const t = UI_TEXT[language].projects;
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const handleDemoClick = (e: React.MouseEvent) => {
    if (project.demoUrl === '#') {
      e.preventDefault();
      Swal.fire({
        title: t.demoNotAvailable,
        text: language === 'id'
          ? 'Maaf, versi demo untuk proyek ini sedang dalam tahap persiapan.'
          : 'Sorry, the demo version for this project is currently being prepared.',
        icon: 'info',
        confirmButtonColor: '#3b82f6', // primary color
        background: document.documentElement.classList.contains('dark') ? '#1e293b' : '#fff',
        color: document.documentElement.classList.contains('dark') ? '#fff' : '#1e293b',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardContainerRef.current) return;
    const rect = cardContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden 
        hover:shadow-2xl hover:shadow-primary/10 
        tilt-card transition-all duration-300 flex flex-col 
        ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
      style={{
        animationDelay: `${index * 150}ms`,
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}>
      <div
        ref={cardContainerRef}
        className="relative overflow-hidden h-48"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative group">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover 
              transform group-hover:scale-115 
              transition-transform duration-500 
              tilt-effect"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  onClick={handleDemoClick}
                  target={project.demoUrl === '#' ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors transform hover:scale-105 hover:shadow-lg hover:shadow-primary/5 text-white"
                  title="Live Demo"
                >
                  <ExternalLink size={18} />
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} className="p-2 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors text-white transform hover:scale-105 hover:shadow-lg hover:shadow-primary/5"
                  title="View Code">
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="p-6 flex-1 flex flex-col 
          tilt-shadow 
          transition-shadow duration-300 
          hover:shadow-2xl hover:shadow-primary/20"
      >
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors transform hover:scale-105"
          style={{
            transform: 'translateZ(5px)',
            transition: 'transform 0.2s ease'
          }}>
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 
              bg-slate-100 dark:bg-slate-700/50 
              rounded border border-slate-200 dark:border-slate-600 
              transform hover:scale-105 transition-all duration-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProjectsProps {
  language: Language;
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const t = UI_TEXT[language].projects;
  const projects = PROJECTS[language];
  const certificates = CERTIFICATES[language];

  const [activeFilter, setActiveFilter] = useState('All');

  const uniqueTags = Array.from(new Set(projects.flatMap(project => project.tags))).sort() as string[];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  const handleFilterClick = (tag: string) => {
    setActiveFilter(tag);
  };

  return (
    <section id="projects" className="py-20 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">{t.preTitle}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">{t.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up">
          <button
            onClick={() => handleFilterClick('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === 'All'
              ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transform hover:scale-105'}`}
          >
            {t.filterAll}
          </button>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleFilterClick(tag)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transform hover:scale-105"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 min-h-[300px]">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} language={language} />
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-12 text-slate-500 dark:text-slate-400">
              <p>No projects found with this filter.</p>
            </div>
          )}
        </div>

        {/* Certificates & Licenses */}
        <div className="bg-white/80 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 lg:p-10 shadow-sm dark:shadow-none hover:shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="text-yellow-500" /> {t.certsTitle}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{t.certsDesc}</p>
            </div>
            <button className="text-primary hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors">
              {t.viewAll} &rarr;
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => {
              const isLinkable = cert.url && cert.url !== '#';
              const Content = (
                <>
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 flex-shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Award size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-900 dark:text-white font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-slate-500 text-xs">{cert.issuer} • {cert.date}</p>
                  </div>
                  {isLinkable && <ExternalLink size={14} className="text-slate-400 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />}
                </>
              );

              const className = "flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-primary/30 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all group text-left w-full";

              if (isLinkable) {
                return (
                  <a
                    key={cert.id}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {Content}
                  </a>
                );
              }

              return (
                <button
                  key={cert.id}
                  className={className}
                  onClick={() => {
                    Swal.fire({
                      title: language === 'id' ? 'Kredensial' : 'Credential',
                      text: language === 'id'
                        ? 'Tautan sertifikat digital belum tersedia.'
                        : 'Digital certificate link is not available yet.',
                      icon: 'info',
                      confirmButtonColor: '#3b82f6',
                      background: document.documentElement.classList.contains('dark') ? '#1e293b' : '#fff',
                      color: document.documentElement.classList.contains('dark') ? '#fff' : '#1e293b',
                    });
                  }}
                >
                  {Content}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;