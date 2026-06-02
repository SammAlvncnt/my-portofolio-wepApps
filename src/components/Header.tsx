import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background scroll trigger
      setIsScrolled(window.scrollY > 50);

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang', href: '#about' },
    { label: 'Proyek', href: '#projects' },
    { label: 'Perjalanan', href: '#journey' },
    { label: 'Kontak', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-[#F3F3F3] border-b border-black py-3' : 'bg-[#F3F3F3] border-b border-black/15 py-4'
        }`}
      >
        {/* Scroll Progress Bar in Solid Black */}
        <div className="absolute bottom-0 left-0 h-[1.5px] bg-[#F3F3F3] w-full">
          <motion.div
            style={{ scaleX: scrollProgress }}
            className="h-full bg-black origin-left"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-mono text-xs select-none uppercase flex items-center gap-2 tracking-wider"
          >
            <span className="font-bold text-black bg-white px-2 py-1 border border-black">ALVIN</span>
            <span className="text-[10px] text-zinc-500 font-normal hidden sm:inline-block">/ antigravity_node</span>
            <span className="w-1.5 h-1.5 bg-black" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-mono text-[11px] tracking-wider text-[#2A2A2A] hover:text-black hover:underline transition-colors uppercase relative py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Connect Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2A2A2A] hover:text-black transition-colors p-1"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2A2A2A] hover:text-black transition-colors p-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <div className="h-3 w-[1px] bg-black/15 mx-1"></div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1 px-4 py-1.5 border border-black rounded-none text-black bg-white font-mono text-[11px] uppercase tracking-wider hover:bg-black hover:text-[#F3F3F3] transition-all relative overflow-hidden"
            >
              <span className="z-10">Hubungi</span>
              <ArrowUpRight className="w-3 h-3 text-black z-10 group-hover:text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black focus:outline-none p-2 border border-black bg-white rounded-none cursor-pointer pointer-events-auto transition-transform hover:scale-105 active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 top-14 z-30 bg-[#F3F3F3] md:hidden flex flex-col justify-between p-10 border-b border-black"
          >
            <div className="flex flex-col gap-6 pt-4">
              <p className="font-mono text-[9px] tracking-widest text-black uppercase font-bold">// SEKTOR NAVIGASI</p>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="font-mono font-bold text-2xl tracking-tight text-[#2A2A2A] hover:text-black uppercase"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-black/15 pt-6">
              <p className="font-mono text-[9px] tracking-widest text-[#2A2A2A] uppercase font-bold">// DIAL_UP</p>
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#2A2A2A] hover:text-black font-mono uppercase"
                >
                  <Github className="w-3.5 h-3.5" /> Github
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#2A2A2A] hover:text-black font-mono uppercase"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
