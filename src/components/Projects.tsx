import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Sparkles, ChevronLeft, ChevronRight, Hand } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [cardWidth, setCardWidth] = useState(600);
  const [gap, setGap] = useState(32);
  const [windowWidth, setWindowWidth] = useState(1200);

  // Dynamically calculate responsive card dimensions and offsets
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 640) { // Mobile
        setCardWidth(290);
        setGap(16);
      } else if (window.innerWidth < 1024) { // Tablet
        setCardWidth(460);
        setGap(24);
      } else { // Desktop
        setCardWidth(600);
        setGap(32);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < projectsData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleDragEnd = (_event: any, info: any) => {
    const swipeThreshold = 40; // fast flick threshold
    if (info.offset.x < -swipeThreshold && currentIndex < projectsData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Center offset calculations based on responsive sizes
  const centerOffset = (windowWidth - cardWidth) / 2;
  const xTranslation = centerOffset - currentIndex * (cardWidth + gap);

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 bg-[#F3F3F3] relative border-t border-black/15 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Antigravity diagnostics-themed section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[9px] tracking-[0.2em] text-[#2A2A2A] uppercase flex items-center gap-2 font-bold">
              <span className="w-1.5 h-1.5 bg-black" />
              [ PROJECT | OVERVIEW]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black uppercase font-display leading-none">
              MY Project's
            </h2>
            <div className="w-16 h-[1.5px] bg-black mt-2"></div>
          </div>
        </div>

        {/* Swipeable Swiper Container Area - Large Overlapping Focus Cards */}
        <div className="relative w-full py-6 select-none sm:cursor-grab active:cursor-grabbing overflow-visible z-10">
          <div className="overflow-visible relative w-full h-[530px] sm:h-[610px]">
            <motion.div
              drag="x"
              dragConstraints={{ left: xTranslation - 50, right: xTranslation + 50 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              animate={{ x: xTranslation }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 24,
                mass: 0.8
              }}
              className="absolute left-0 flex gap-4 sm:gap-6 lg:gap-8 items-center h-full select-none"
              style={{ width: `${projectsData.length * (cardWidth + gap)}px` }}
            >
              {projectsData.map((project, index) => {
                const isActive = index === currentIndex;
                const distance = Math.abs(index - currentIndex);
                
                // Beautiful 3D Perspective and Scale Attenuation curves
                const cardScale = isActive ? 1.05 : 0.88;
                const cardRotation = isActive ? 0 : (index < currentIndex ? -3 : 3);
                const cardOpacity = isActive ? 1.0 : 0.45;
                const cardDelay = index * 0.05;

                return (
                  <div 
                    key={project.id} 
                    className="relative shrink-0 pointer-events-auto transition-shadow duration-300 select-none pb-4"
                    style={{ 
                      width: `${cardWidth}px`,
                      zIndex: isActive ? 30 : (20 - distance)
                    }}
                  >
                    {/* Stereoscopic Depth Shadow / Hover Frame Offset Layer */}
                    <div className="absolute inset-2 border border-black rounded-none pointer-events-none transition-all duration-500 ease-out translate-x-0 translate-y-0 opacity-20" 
                      style={{
                        transform: isActive ? 'translate(6px, 6px)' : 'none',
                      }}
                    />

                    {/* Main Interactive Card */}
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: cardOpacity, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      animate={{ 
                        scale: cardScale,
                        rotate: cardRotation,
                        opacity: cardOpacity
                      }}
                      transition={{ 
                        type: 'spring',
                        stiffness: 140,
                        damping: 22,
                        delay: cardDelay
                      }}
                      onClick={() => setSelectedProject(project)}
                      className="relative block w-full h-[510px] sm:h-[590px] rounded-none border-2 border-black overflow-hidden bg-white hover:shadow-[14px_14px_0px_0px_#000000] cursor-pointer transition-shadow duration-300 group"
                    >
                      {/* Corner crosshair guides representing Antigravity */}
                      <div className="absolute top-2.5 left-2.5 w-3 h-3 text-black font-mono text-[10px] select-none font-bold z-20">+</div>
                      <div className="absolute top-2.5 right-2.5 w-3 h-3 text-black font-mono text-[10px] select-none font-bold z-20">+</div>
                      <div className="absolute bottom-2.5 left-2.5 w-3 h-3 text-black font-mono text-[10px] select-none font-bold z-20">+</div>
                      <div className="absolute bottom-2.5 right-2.5 w-3 h-3 text-black font-mono text-[10px] select-none font-bold z-20">+</div>

                      {/* Image that almost entirely fills the card top portion */}
                      <div className="w-full h-[45%] sm:h-[50%] overflow-hidden relative border-b-2 border-black">
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* Information Stack on high-contrast white background */}
                      <div className="p-5 sm:p-7 flex flex-col justify-between h-[55%] sm:h-[50%] bg-white text-black">
                        
                        <div className="flex flex-col gap-2 text-left">
                          {/* Floating Category Pill */}
                          <div className="self-start border border-black bg-[#F3F3F3] px-2.5 py-0.5 flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#000000] rounded-none">
                            <span className="w-1.5 h-1.5 bg-black rounded-none animate-pulse" />
                            <span className="font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider">{project.category}</span>
                          </div>

                          <span className="font-mono text-[9px] tracking-widest text-[#2A2A2A] uppercase block font-semibold leading-none mt-1">
                            {project.subtitle}
                          </span>
                          
                          <h3 className="font-black text-lg sm:text-2xl text-black tracking-tight uppercase transition-colors font-display line-clamp-1 leading-tight">
                            {project.title}
                          </h3>
                          
                          <p className="text-[11px] sm:text-[13px] text-[#2A2A2A] font-light leading-relaxed line-clamp-2 sm:line-clamp-3 font-mono">
                            {project.description}
                          </p>
                        </div>

                        {/* Footer details row of the card */}
                        <div className="flex items-center justify-between border-t border-black/15 pt-4 select-none pointer-events-auto">
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 max-w-[55%]">
                            {project.tags.slice(0, 2).map((tag) => (
                              <span 
                                key={tag} 
                                className="font-mono text-[8px] sm:text-[9px] text-black border border-black px-2 py-0.5 rounded-none bg-[#F3F3F3] hover:bg-black hover:text-[#F3F3F3] transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Tactile detail action trigger */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                            className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] uppercase font-bold text-white bg-black hover:bg-[#2A2A2A] px-3.5 py-1.5 rounded-none transition-all cursor-pointer shrink-0"
                          >
                            <span>Selengkapnya</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                          </button>

                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Navigation Indicator Buttons & Carousel control bar */}
        <div className="flex items-center justify-between mt-12 px-2 max-w-4xl mx-auto">
          {/* Active indicator dots */}
          <div className="flex items-center gap-2">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 transition-all duration-350 rounded-none ${
                  index === currentIndex ? 'w-8 bg-black' : 'w-2 bg-zinc-300 hover:bg-black'
                }`}
                aria-label={`Slide ke ${index + 1}`}
              />
            ))}
          </div>

          {/* Touch Swiper Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-none border-2 border-black transition-all duration-150 flex items-center justify-center ${
                currentIndex === 0 
                  ? 'opacity-40 cursor-not-allowed text-zinc-400 border-zinc-200 bg-zinc-50' 
                  : 'text-black bg-white hover:bg-black hover:text-[#F3F3F3] active:scale-95'
              }`}
              title="Kembali"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              onClick={handleNext}
              disabled={currentIndex === projectsData.length - 1}
              className={`p-3 rounded-none border-2 border-black transition-all duration-150 flex items-center justify-center ${
                currentIndex === projectsData.length - 1 
                  ? 'opacity-40 cursor-not-allowed text-zinc-400 border-zinc-200 bg-zinc-50' 
                  : 'text-black bg-white hover:bg-black hover:text-[#F3F3F3] active:scale-95'
              }`}
              title="Lanjut"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Case Study Modal Overlay */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}

