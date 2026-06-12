import React, { useState } from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { PROJECTS, XMarkIcon } from '../constants';
import type { Project } from '../types';

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...new Set(PROJECTS.map((p) => p.category))];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <Section id="portfolio">
      <SectionTitle>Our Work</SectionTitle>
      
      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              activeFilter === category
                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/25'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-teal-500/50 hover:shadow-teal-500/5 aspect-w-4 aspect-h-3"
          >
            <div className="w-full h-48 md:h-56 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold tracking-wider uppercase text-teal-400">{project.category}</span>
              <h3 className="text-lg font-bold text-white mt-1 group-hover:text-teal-300 transition-colors">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-400 line-clamp-2">{project.description}</p>
              <div className="mt-4 flex items-center text-sm font-semibold text-teal-400 group-hover:text-teal-300">
                View Project Details
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-slate-900/90 backdrop-blur border-b border-slate-800/80">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-teal-400">{selectedProject.category}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedProject.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div className="w-full h-64 overflow-hidden rounded-xl border border-slate-800">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Overview</h4>
                <p className="mt-2 text-base leading-relaxed text-gray-300">{selectedProject.description}</p>
              </div>

              {selectedProject.features && selectedProject.features.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Key Features</h4>
                  <ul className="mt-3 space-y-2.5">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckIcon className="h-5 w-5 text-teal-400 mr-2.5 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Tech Stack</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="inline-flex items-center rounded-md bg-teal-400/5 px-2.5 py-1.5 text-xs font-medium text-teal-300 ring-1 ring-inset ring-teal-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-900 border-t border-slate-800/80 flex flex-wrap gap-3 sm:justify-end">
              {selectedProject.githubUrl && (
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 px-4 py-2.5 text-sm font-semibold text-white transition-all active:scale-95"
                >
                  GitHub Repository
                  <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </a>
              )}
              {selectedProject.demoUrl && (
                <a 
                  href={selectedProject.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-teal-500 hover:bg-teal-400 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-all active:scale-95"
                >
                  Live Demo
                  <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </a>
              )}
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 px-4 py-2.5 text-sm font-semibold text-gray-300 hover:text-white transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Portfolio;