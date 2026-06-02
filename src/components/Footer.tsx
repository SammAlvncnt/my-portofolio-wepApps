import React, { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const [bandungTime, setBandungTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Calculate Bandung Time (UTC +7)
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit' as const,
        minute: '2-digit' as const,
        second: '2-digit' as const,
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setBandungTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#F3F3F3] text-[#2A2A2A] py-16 px-6 sm:px-12 border-t border-black/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-black/15 pb-12">
          
          {/* Slogan segment */}
          <div className="md:col-span-6 flex flex-col gap-4 text-left">
            <h3 className="font-sans font-black text-xl text-black uppercase tracking-tighter flex items-center gap-1.5">
              ALVIN
              <span className="w-1.5 h-1.5 bg-black inline-block rounded-none animate-pulse" />
            </h3>
            <p className="max-w-md text-xs sm:text-sm text-[#2A2A2A] leading-relaxed font-mono">
              Menghargai ketenangan desain, mengeksekusi kerumitan fungsional. Mari merakit gagasan yang mempercantik pengalaman interaktif manusia.
            </p>
          </div>

          {/* Social segment */}
          <div className="md:col-span-3 flex flex-col gap-3 text-left">
            <span className="font-mono text-[9px] tracking-widest text-black uppercase font-bold">// KONEKSI ONLINE</span>
            <div className="flex flex-col gap-2 font-mono text-xs">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-[#2A2A2A] hover:text-black hover:underline transition-all py-0.5 uppercase font-bold">
                <Github className="w-4 h-4 text-black" /> Github
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-[#2A2A2A] hover:text-black hover:underline transition-all py-0.5 uppercase font-bold">
                <Linkedin className="w-4 h-4 text-black" /> LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-[#2A2A2A] hover:text-black hover:underline transition-all py-0.5 uppercase font-bold">
                <Twitter className="w-4 h-4 text-black" /> Twitter / X
              </a>
            </div>
          </div>

          {/* Location & Time segments */}
          <div className="md:col-span-3 flex flex-col gap-3 text-left">
            <span className="font-mono text-[9px] tracking-widest text-[#2A2A2A] uppercase font-bold">// INFO_LOGS</span>
            <div className="flex flex-col gap-1.5 text-xs text-[#2A2A2A]">
              <p className="font-medium text-black font-mono">Bandung, Jawa Barat, ID</p>
              <div className="font-mono text-[10.5px] border border-black px-3.5 py-2.5 rounded-none w-fit text-black font-bold block bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {bandungTime || 'Calculated...'}
              </div>
            </div>
          </div>

        </div>

        {/* Footer base metadata */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left font-mono">
          <div className="flex flex-col gap-1 text-[11px] text-[#2A2A2A]">
            <p>© {new Date().getFullYear()} Samuel Alvin. All Rights Reserved.</p>
            <p className="uppercase text-[9px] font-bold text-black">// DESIGNED_BUILT_IN_BANDUNG_INDONESIA</p>
          </div>

          {/* Back to top button */}
          <button 
            onClick={handleBackToTop}
            className="group px-4 py-2 border-2 border-black rounded-none bg-white text-black font-mono text-[10px] uppercase tracking-wider hover:bg-black hover:text-[#F3F3F3] transition-all pointer-events-auto cursor-pointer self-start sm:self-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
          >
            Arus Atas
          </button>
        </div>

      </div>
    </footer>
  );
}
