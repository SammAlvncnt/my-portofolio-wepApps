import { useRef } from 'react';
import { motion } from 'motion/react';
import { skillsData } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Cpu, 
  Terminal, 
  Layers, 
  Sparkles, 
  Database, 
  Wifi, 
  Palette, 
  GitBranch, 
  Hammer 
} from 'lucide-react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Multiply skills list to guarantee a seamless, infinite loop on any screen width
  const duplicatedSkills = [...skillsData, ...skillsData, ...skillsData, ...skillsData];

  // Map skill names to appropriate decorative icons
  const getSkillIcon = (name: string) => {
    const norm = name.toLowerCase();
    if (norm.includes('react') || norm.includes('next')) return Cpu;
    if (norm.includes('typescript')) return Terminal;
    if (norm.includes('tailwind')) return Layers;
    if (norm.includes('motion') || norm.includes('framer')) return Sparkles;
    if (norm.includes('node') || norm.includes('express')) return Database;
    if (norm.includes('postgresql') || norm.includes('sql')) return Database;
    if (norm.includes('api') || norm.includes('websocket')) return Wifi;
    if (norm.includes('design') || norm.includes('figma')) return Palette;
    if (norm.includes('prototype')) return Palette;
    if (norm.includes('git') || norm.includes('github')) return GitBranch;
    if (norm.includes('vite') || norm.includes('esbuild')) return Hammer;
    return Sparkles;
  };

  const creativeCards = [
    {
      icon: GraduationCap,
      title: 'Academic & Education',
      subtitle: 'EDUCATIONAL TRACK RECORD',
      subtextHeader: 'Teknik Komputer Jaringan',
      subtextContent: 'SMK Immanuel Pontianak (2022-2024)',
      description: 'Building a deep computational foundation through network infrastructure administration, routing/switching configuration, and server management (Linux/Windows). This vocational education not only sharpened my precision in system troubleshooting, but also shaped my fundamental understanding of how data flows within a network—a critical stepping stone that underpins my current focus on high-performance database architecture.'
    },
    {
      icon: GraduationCap,
      title: 'Academic & Education',
      subtitle: 'EDUCATIONAL TRACK RECORD',
      subtextHeader: 'COMPUTER SCIENCE',
      subtextContent: 'Binus University (2024-now)',
      description: 'Developing a rigorous computational core across semesters 1–4 by mastering advanced data structures, discrete mathematics, and object-oriented programming. As I transition into the Database Technology specialization stream, my academic focus has deepened into relational database systems, logical schema design, query optimization, and the foundational algorithms underpinning modern Artificial Intelligence. This academic pipeline provides the analytical engine that guides my current architectural database builds.'
    },
  ];

  return (
    <div ref={containerRef} className="bg-transparent">
      {/* SECTION 1: DETAIL ARSITEK KREATIF */}
      <section id="about" className="py-24 px-6 sm:px-12 bg-[#F3F3F3] relative overflow-hidden border-t border-black/10">
        
        {/* Antigravity grid styling alignment */}
        <div className="absolute inset-0 bg-[#F3F3F3] opacity-40 z-0 bg-size-40-gradient pointer-events-none" 
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.015) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Diagnostic Header */}
          <div className="flex flex-col gap-2.5 mb-16 text-left">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-zinc-500 uppercase flex items-center gap-2 font-bold">
              <span className="w-1.5 h-1.5 bg-black rounded-none" />
              [ TENTANG 1.1 ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black uppercase font-display leading-none">
              INTRODUCTION
            </h2>
            <div className="w-16 h-[1.5px] bg-black mt-2"></div>
          </div>

          {/* Grid Layout: Left text alongside Right fanned giant structured cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Core Description */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-zinc-400 uppercase font-bold">// IDENTITAS REKAYASA</span>
                <h3 className="font-extrabold text-2xl sm:text-3xl text-black uppercase tracking-tight font-display leading-tight">
                  Samuel Alvincent
                </h3>
                <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-light font-sans text-justify">
                  I am a Computer Science undergraduate student at BINUS University, currently in my 4th semester and specializing in Database Technology. 
                  My academic trajectory is highly focused on understanding how robust database engines, structured query pipelines, and complex data architectures
                   form the computational backbone of modern applications. Rather than just learning the theory, I actively train myself to design scalable database 
                   schemas and manage information systems that can support high-performance data operations.
                </p>
                <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-light font-sans text-justify">
                  My affinity for data is driven by a natural aptitude for critical thinking, deep analytical reasoning, and an innate capability to rapidly master
                   new concepts in the data domain. I thrive on the challenge of translating chaotic, raw datasets into structured, highly readable visual assets.
                    To achieve this, I actively operate a targeted technical stack that includes Python, SQL, and MySQL, while utilizing industry-standard tools such as Tableau,
                   Power BI, SSMS, MySQL Workbench, and Excel to engineer comprehensive pipelines and build intuitive analytics dashboards.
                </p>
                 <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-light font-sans text-justify">
                  Witnessing how Artificial Intelligence has fundamentally redefined the modern technological landscape, I am highly enthusiastic about its rapid development 
                  and how machine learning intersects with modern database engineering. I am actively preparing myself to secure impactful professional opportunities as a Data 
                  Analyst or Data Scientist. I am looking to join forward-thinking teams where I can deploy my analytical rigor, database technology foundation, and fast-learning
                   mindset to solve real-world architectural and business intelligence challenges.
                </p>
              </div>
            </div>

            {/* Right Column: Stacked detailed LARGE cards, ordered vertically from top to bottom */}
            <div className="lg:col-span-7 flex flex-col gap-8 w-full">
              {creativeCards.map((card, index) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20, delay: index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.015 }}
                    className="relative block w-full p-8 sm:p-10 border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:border-black transition-all duration-300 select-none overflow-hidden"
                  >
                    {/* Diagnostic corner plus marks on each brutalist card */}
                    <div className="absolute top-2 left-2 text-black/15 font-mono text-[10px] font-bold select-none">+</div>
                    <div className="absolute top-2 right-2 text-black/15 font-mono text-[10px] font-bold select-none">+</div>
                    <div className="absolute bottom-2 left-2 text-black/15 font-mono text-[10px] font-bold select-none">+</div>
                    <div className="absolute bottom-2 right-2 text-black/15 font-mono text-[10px] font-bold select-none">+</div>

                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      {/* Decorative brute black badge box with light icon */}
                      <div className="p-4 bg-black text-white rounded-none border border-black shrink-0 relative">
                        <CardIcon className="w-6 h-6 text-white" />
                      </div>

                      {/* Well-structured content details */}
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-400 uppercase font-bold leading-none mb-1">
                          {card.subtitle} // ID_0{index + 1}
                        </span>
                        
                        <h4 className="font-black text-xl sm:text-2xl text-black uppercase tracking-tight font-display">
                          {card.title}
                        </h4>

                        {/* Crucial academic details highlight container */}
                        <div className="bg-zinc-50 border border-zinc-200 p-3.5 my-1.5 flex flex-col gap-0.5 card-detail-container">
                          <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest leading-none font-bold">
                            {card.subtextHeader}
                          </span>
                          <span className="font-bold text-xs sm:text-sm text-black uppercase tracking-tight font-sans">
                            {card.subtextContent}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed font-sans text-justify pt-1">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: ARENA SIMULASI WORKSPACE (LIGHT BRUTALIST ALIGNED WITH KATALOG PROYEK) */}
      <section id="skills-simulation" className="py-24 px-6 sm:px-12 bg-white text-black relative overflow-hidden border-t border-b border-black/15">
        
        {/* Holographic Diagnostic Grid Background in light theme styles */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.012)_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none z-0 opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-zinc-100 blur-[80px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
          
          {/* Section Diagnostic Header */}
          <div className="flex flex-col gap-2.5 text-left">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-zinc-500 uppercase flex items-center gap-2 font-bold">
              <span className="w-1.5 h-1.5 bg-black rounded-none animate-pulse" />
              [ TENTANG 1.2 ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black uppercase font-display leading-none">
              SKILLS & TOOLS
            </h2>
            <div className="w-16 h-[1.5px] bg-black mt-2"></div>
          </div>

                    {/* Ultra-Premium Interactive Tilted Infinite Marquee */}
          <div className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] overflow-hidden py-24 -my-12 select-none">
            
            {/* Diagonal Editorial Tilt (Serong) */}
            <div className="rotate-[-3.5deg] -skew-x-2 scale-[1.08] origin-center">
              
              {/* Marquee Track Container with Hover Pause functionality */}
              <div className="relative w-full overflow-hidden border-y-2 border-black bg-white group/track">
                
                {/* Pure CSS Keyframes for seamless performance and play-state control */}
                <style dangerouslySetInnerHTML={{ __html: `
                  @keyframes infinite-marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: infinite-marquee 45s linear infinite;
                  }
                  .group\\/track:hover .marquee-track {
                    animation-play-state: paused;
                  }
                `}} />

                <div className="marquee-track py-10">
                  {/* Duplicate skills list ensures no gaps during transition */}
                  {duplicatedSkills.map((skill, index) => {
                    const SkillIcon = getSkillIcon(skill.name);
                    return (
                      <motion.div
                        key={`${skill.name}-ultra-${index}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className="relative shrink-0 w-60 sm:w-70 p-6 mx-4 border-2 border-black bg-white text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-[#F3F3F3] hover:border-[#F3F3F3] hover:shadow-none transition-all duration-300 overflow-hidden flex flex-col justify-between h-32.5 cursor-pointer group/card"
                      >
                        {/* Diagonal corner markers */}
                        <div className="absolute top-1 left-1.5 text-black/20 group-hover/card:text-white/20 font-mono text-[9px] font-bold">+</div>
                        <div className="absolute top-1 right-1.5 text-black/20 group-hover/card:text-white/20 font-mono text-[9px] font-bold">+</div>
                        <div className="absolute bottom-1 left-1.5 text-black/20 group-hover/card:text-white/20 font-mono text-[9px] font-bold">+</div>
                        <div className="absolute bottom-1 right-1.5 text-black/20 group-hover/card:text-white/20 font-mono text-[9px] font-bold">+</div>

                        <div className="flex items-center gap-4">
                          {/* Inverting icon badge */}
                          <div className="p-2 border-2 border-black bg-black text-white group-hover/card:bg-[#F3F3F3] group-hover/card:text-black group-hover/card:border-[#F3F3F3] transition-colors shrink-0">
                            <SkillIcon className="w-5 h-5" />
                          </div>
                          <div className="flex flex-col leading-tight text-left">
                            <span className="font-mono text-[8px] text-zinc-400 group-hover/card:text-zinc-500 uppercase tracking-widest mb-0.5 font-bold">
                              {skill.category.toUpperCase()} // SYS
                            </span>
                            <span className="font-extrabold text-xs sm:text-sm font-display uppercase tracking-tight line-clamp-1">
                              {skill.name}
                            </span>
                          </div>
                        </div>

                        {/* Technical Metadata Footer */}
                        <div className="flex justify-between items-center border-t border-black/10 group-hover/card:border-white/10 pt-2 mt-2">
                          <span className="font-mono text-[8px] text-zinc-400 group-hover/card:text-zinc-500 font-bold uppercase tracking-widest">
                            // SKILL & TOOLS
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
