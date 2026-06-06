import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, LayoutGrid, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-xs"
        />

        {/* Modal Sheet panel with Stereoscopic Shadow Offset underneath */}
        <div className="absolute inset-4 sm:inset-10 max-w-4xl border-2 border-black bg-black rounded-none pointer-events-none translate-x-2 translate-y-2 z-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          transition={{ type: 'spring', damping: 28, stiffness: 240 }}
          className="relative bg-[#F3F3F3] w-full max-w-4xl h-[85vh] sm:h-[80vh] rounded-none border-2 border-black flex flex-col overflow-hidden z-10 text-black select-text shadow-none font-mono"
        >
          {/* Header Bar */}
          <div className="p-4 sm:px-8 border-b-2 border-black flex items-center justify-between bg-white relative z-10 text-black">
            <span className="font-mono text-xs font-black uppercase text-black flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-black animate-pulse" />
              DETAIL PROJECT // {project.category}
            </span>

            <button
              onClick={onClose}
              className="p-2 px-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 bg-white border border-black hover:bg-black hover:text-[#F3F3F3] transition-all rounded-none text-black font-mono text-[10px] uppercase font-bold cursor-pointer"
              aria-label="Tutup Detail"
            >
              <span>CLOSE</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Modal Main Scrollable Section Container */}
          <div className="flex-1 overflow-y-auto relative z-10 scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent touch-pan-y overscroll-contain select-text">
            {/* Project Hero Banner Image */}
            <div className="w-full h-[220px] sm:h-[300px] relative overflow-hidden bg-[#F3F3F3] border-b-2 border-black">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale"
              />
              {/* Ultra High-Contrast Gradient Dark Overlay for Perfect Text Reading */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-80" />
              
              <div className="absolute inset-0 flex items-end p-6 sm:p-10">
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[9px] sm:text-[10px] text-zinc-350 uppercase tracking-[0.2em] font-semibold leading-none">
                    {project.subtitle}
                  </span>
                  <h3 className="font-sans font-black text-2xl sm:text-4xl tracking-tighter uppercase leading-none text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Brutalist image label overlay */}
              <div className="absolute top-3 left-3 bg-white border border-black px-2 py-0.5 z-10">
                <span className="font-mono text-[8.5px] uppercase tracking-wider text-black font-bold">// Preview Image</span>
              </div>
            </div>

            {/* Content Space */}
            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left core column */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                  
                  {/* General Text */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 pb-2.5 border-b border-black/15">
                      <LayoutGrid className="w-4 h-4 text-black" />
                      <h4 className="font-sans font-bold text-black text-sm sm:text-base uppercase tracking-tight">
                        DESCRIPTION / Overview
                      </h4>
                    </div>
                    <p className="text-[#2A2A2A] font-mono font-light text-xs sm:text-sm leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Tech Stacks Grid */}
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[9px] tracking-widest text-[#2a2a2a] uppercase font-bold"> // Tech Stack</span>
                    <div className="flex flex-wrap gap-2 w-full">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-white border border-black text-black font-mono text-[10px] rounded-none shadow-[2px_2px_0px_0px_#000000]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right metadata panel */}
                <div className="lg:col-span-4 flex flex-col gap-6 p-6 bg-white border-2 border-black rounded-none relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {/* Assignment Context details */}
                  <div className="flex flex-col gap-4 border-b border-black/15 pb-5">
                    <span className="font-mono text-[9px] tracking-widest text-[#2A2A2A] uppercase font-bold">// Github Preview</span>
                  </div>

                  {/* Action Buttons: Github */}
                  <div className="flex flex-col gap-3 w-full">
                    <a
                      href={`https://github.com/samuelalvincent/${project.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 bg-black hover:bg-[#2A2A2A] text-white border border-black px-4 text-center font-mono text-[10px] font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 cursor-pointer pointer-events-auto rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                    >
                      <Github className="w-4 h-4 text-[#F3F3F3]" />
                      <span>Repositori GitHub</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
