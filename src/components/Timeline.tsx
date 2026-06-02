import { useState } from 'react';
import { motion } from 'motion/react';
import { timelineData } from '../data/portfolioData';
import { Sparkles, Calendar, Building, ChevronDown, Award } from 'lucide-react';

export default function Timeline() {
  const [expandedId, setExpandedId] = useState<string | null>('exp-1');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="journey" className="py-24 px-6 sm:px-12 bg-[#F3F3F3] relative border-t border-black/15">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Block with diagnostic styling info */}
        <div className="flex flex-col gap-2.5 mb-16 text-center items-center">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#2A2A2A] uppercase flex items-center gap-2 font-bold">
            <span className="w-1.5 h-1.5 bg-black" />
            [ PROTOCOL_03 // CAREER_CHRONOLOGY ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black uppercase font-display leading-none">
            REKAM KARIR & JALUR REKAYASA
          </h2>
          <div className="w-16 h-[1.5px] bg-black mt-2"></div>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-[#2A2A2A] font-light mt-4 leading-relaxed font-mono">
            Membangun sistem, membimbing tim rekayasa perangkat lunak, dan menyelaraskan inovasi visual untuk klien global.
          </p>
        </div>

        {/* Timeline Path Arena */}
        <div className="relative border-l border-black pl-6 sm:pl-10 ml-2 sm:ml-6 flex flex-col gap-10 py-4">
          
          {timelineData.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ 
                  duration: 0.5, 
                  ease: 'easeOut',
                  delay: index * 0.05
                }}
                className="relative flex flex-col gap-3 group"
              >
                {/* Visual Circle Indicator Node on Line representing Antigravity node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 bg-white border-2 border-black rounded-none flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                  <span className="w-1.5 h-1.5 bg-black rounded-none" />
                </div>

                {/* Card Container block */}
                <div 
                  className={`p-5 sm:p-7 rounded-none border-2 transition-all duration-300 relative ${
                    isExpanded 
                      ? 'border-black bg-white scale-[1.005] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' 
                      : 'border-black bg-white/70 hover:bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    
                    {/* Role Title and Company */}
                    <div className="flex flex-col gap-1 text-left">
                      <div className="flex items-center gap-1.5 text-xs text-[#2A2A2A]">
                        <Calendar className="w-3.5 h-3.5 text-black" />
                        <span className="font-mono tracking-wider text-black font-semibold uppercase">{exp.year}</span>
                      </div>
                      <h3 className="font-black text-lg sm:text-xl text-black tracking-tight uppercase mt-1 font-sans">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-[#2A2A2A] font-medium font-mono">
                        <Building className="w-3.5 h-3.5 text-black" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
 
                    {/* Toggle expand btn */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="absolute top-5 right-5 sm:relative sm:top-0 sm:right-0 p-2 border border-black bg-white rounded-none cursor-pointer pointer-events-auto transition-transform hover:scale-105 active:scale-95"
                      aria-label="Expand achievements"
                    >
                      <ChevronDown className={`w-5 h-5 text-black transition-transform duration-200 ${isExpanded ? 'rotate-180 text-black' : ''}`} />
                    </button>
                  </div>
 
                  <p className="text-xs sm:text-sm text-[#2A2A2A] font-mono leading-relaxed mt-4 pt-4 border-t border-black/15 text-left">
                    {exp.description}
                  </p>
 
                  {/* Expanded Achievements Node section */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 flex flex-col gap-3.5 border-t border-black/15 pt-4 text-left"
                    >
                      <div className="flex items-center gap-2 text-[#2A2A2A]">
                        <Award className="w-4 h-4 text-black" />
                        <span className="font-mono text-[9px] tracking-wider uppercase font-bold text-black">// PENCAPAIAN UTAMA / METRIC REKAYASA</span>
                      </div>
 
                       <div className="grid grid-cols-1 gap-2">
                        {exp.achievements.map((ach, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-[#F3F3F3] p-3 border border-black rounded-none">
                            <span className="font-mono text-black text-xs font-bold">0{idx + 1}.</span>
                            <p className="text-xs text-black leading-relaxed font-mono">{ach}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
