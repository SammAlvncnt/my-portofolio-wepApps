import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'motion/react';
import { ArrowDown } from 'lucide-react';

// Custom Magnetic effect for buttons and CTA links
function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);
  const springX = useSpring(mX, { stiffness: 120, damping: 15 });
  const springY = useSpring(mY, { stiffness: 120, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const posX = clientX - (left + width / 2);
    const posY = clientY - (top + height / 2);
    // Smooth responsive pull within 35% of bounds
    mX.set(posX * 0.35);
    mY.set(posY * 0.35);
  };

  const handleMouseLeave = () => {
    mX.set(0);
    mY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Parallax Tilt State for the Grayscale Profile Portrait Image Box
  const tiltCardRef = useRef<HTMLDivElement>(null);
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  // Map mouse coordinate ratios to degree rotations
  const tiltX = useSpring(useTransform(cardY, [-0.5, 0.5], [12, -12]), { stiffness: 160, damping: 18 });
  const tiltY = useSpring(useTransform(cardX, [-0.5, 0.5], [-12, 12]), { stiffness: 160, damping: 18 });

  const handleCardMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltCardRef.current) return;
    const rect = tiltCardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    cardX.set(mouseX / width);
    cardY.set(mouseY / height);
  };

  const handleCardMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  // Prepare letters for Giant Header slide up reveal animation
  const word1 = "SAMUEL".split("");
  const word2 = "ALVINCENT".split("");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1
      }
    }
  };

  const letterVariants: Variants = {
    hidden: { y: "110%" },
    visible: { 
      y: "0%",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Left-aligned services visual list
  const visualServices = [
    { label: "/ DATA ANALYST", desc: "ENTHUSIAST" },
    { label: "/ DATA SCIENCE", desc: "ENTHUSIAST" },
    { label: "/ ARTIFICIAL INTELIGENCE", desc: "ENTHUSIAST" }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 px-6 sm:px-12 bg-[#F3F3F3] text-black select-none z-10"
    >
      {/* Editorial top visual header zone */}
      <div className="w-full max-w-7xl mx-auto flex flex-col mt-4 sm:mt-8">
        
        {/* Giant Header: Magazine style stretching full width */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col tracking-tighter leading-none select-none text-black selection:bg-black selection:text-[#F3F3F3]"
        >
          <div className="overflow-hidden flex flex-wrap justify-between w-full">
            <h1 className="text-[12vw] sm:text-[10vw] md:text-[9.5vw] font-black tracking-tighter leading-[0.82] uppercase flex select-none">
              {word1.map((char, index) => (
                <span key={`w1-${index}`} className="inline-block overflow-hidden h-[13vw] sm:h-[11vw] md:h-[10.5vw]">
                  <motion.span
                    variants={letterVariants}
                    className="inline-block origin-bottom"
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>
          
          <div className="overflow-hidden flex flex-wrap justify-start w-full -mt-1 sm:-mt-2 cursor-default">
            <h1 className="text-[12vw] sm:text-[10vw] md:text-[9.5vw] font-black tracking-tighter leading-[0.82] uppercase flex select-none group/developer">
              {word2.map((char, index) => (
                <span key={`w2-${index}`} className="inline-block overflow-hidden h-[13vw] sm:h-[11vw] md:h-[10.5vw]">
                  <motion.span
                    variants={letterVariants}
                    className="inline-block origin-bottom text-transparent [-webkit-text-stroke:1px_#000000] transition-all duration-300 ease-in-out group-hover/developer:text-black group-hover/developer:[-webkit-text-stroke:1px_transparent]"
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>
        </motion.div>

        {/* Subtitle: Aligned to the right under the giant header with uppercase spacing */}
        <div className="w-full flex justify-end mt-2">
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-bold"
          >
            BASED IN JAKARTA, ID
          </motion.p>
        </div>
      </div>

      {/* Central Profile Zone: Holds layout elements + overlapping portrait box */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-6 sm:my-10 relative">
        
        {/* Left Side: Editorial list overlaps or aligns neat next to picture container */}
        <div className="md:col-span-4 flex flex-col gap-4 text-left justify-center relative z-20">
          <div className="flex flex-col gap-3">
            {visualServices.map((service, idx) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1, ease: 'easeOut' }}
                whileHover="hover"
                className="group cursor-pointer flex flex-col select-none"
              >
                <div className="flex items-center gap-2">
                  <motion.span 
                    variants={{
                      hover: { x: 5, fontWeight: 700 }
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="font-mono text-xs sm:text-sm md:text-base font-semibold tracking-wider text-black uppercase"
                  >
                    {service.label}
                  </motion.span>
                </div>
                {/* Expand micro text on hover */}
                <span className="font-mono text-[8px] text-zinc-400 pl-4 tracking-widest uppercase transition-colors group-hover:text-black">
                  // {service.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mid/Central Section: Grayscale Profile Box with real-time 3D tilt Parallax */}
        <div className="md:col-span-4 flex justify-center items-center relative z-10">
          <motion.div
            ref={tiltCardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-60 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 border-2 border-black bg-white p-2.5 shadow-[8px_8px_0px_0px_#000000] group cursor-grab active:cursor-grabbing hover:shadow-[14px_14px_0px_0px_#000000] transition-shadow duration-300 select-none"
          >
            {/* Holographic Diagnostic cross symbols inside details box */}
            <div className="absolute top-1.5 left-1.5 text-black font-mono text-[9px] font-bold z-20">+</div>
            <div className="absolute top-1.5 right-1.5 text-black font-mono text-[9px] font-bold z-20">+</div>
            <div className="absolute bottom-1.5 left-1.5 text-black font-mono text-[9px] font-bold z-20">+</div>
            <div className="absolute bottom-1.5 right-1.5 text-black font-mono text-[9px] font-bold z-20">+</div>

            <div 
              style={{ transform: "translateZ(20px)" }} 
              className="w-full h-full overflow-hidden bg-zinc-200 relative pointer-events-none rounded-none"
            >
              {/* Grayscale profile photo */}
              <img
                src="/alvin_photo_1780424699601.png"
                alt="Samuel Alvin Profile Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 filter contrast-[1.08] duration-500 scale-100 group-hover:scale-105 transition-all"
              />
              <div className="absolute inset-0 bg-transparent noise-overlay opacity-[0.05] pointer-events-none" />
            </div>
            
            {/* Minimalistic floating serial layout coordinate */}
            <div className="absolute -bottom-3 left-4 bg-black border border-black text-white font-mono text-[8px] sm:text-[9px] px-2 py-0.5 tracking-widest uppercase font-bold select-none z-20">
              Undergraduate Student
            </div>
          </motion.div>
        </div>

        {/* Right Side: Reserved for asymmetrical grid balance / whitespace */}
        <div className="hidden md:flex md:col-span-4 justify-end">
          <div className="border border-dashed border-zinc-300 w-full max-w-[200px] h-[1px] relative self-center">
            <span className="absolute -top-2 right-0 font-mono text-[8px] text-zinc-400 uppercase select-none">
              ALIGN // RECT
            </span>
          </div>
        </div>

      </div>

      {/* Center Paragraph: Detailed layout statement below photo */}
      <div className="w-full max-w-xl mx-auto text-center mt-4 sm:mt-8">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xs sm:text-sm font-bold font-sans tracking-tight text-black text-center uppercase leading-relaxed max-w-lg mx-auto"
        >
          "I'm a data enthusiast and aspiring data analyst & data scientist with a passion for transforming complex datasets into compelling visual stories. and of course I also have an interest in artificial intelligence"
        </motion.p>
      </div>

      {/* Premium Footer Metadata section with magnetic buttons */}
      <div className="w-full max-w-7xl mx-auto border-t border-black/15 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-2">
        
        {/* Left footer link/metadata */}
        <Magnetic>
          <div className="flex flex-col gap-1 text-left">
            <span className="font-mono text-[8px] text-zinc-400 tracking-[0.2em] uppercase font-bold">
              // STATUS
            </span>
            <span className="font-bold text-xs sm:text-sm text-black flex items-center gap-1.5 font-sans leading-none uppercase">
              <span className="w-1.5 h-1.5 bg-[#0f9d58] rounded-full animate-ping" />
              SEARCHING FOR INTERNSHIPS
            </span>
          </div>
        </Magnetic>

        {/* Right footer CTA triggering Catalog scrolling action */}
        <Magnetic>
          <a
            href="#projects"
            onClick={(e) => handleScrollClick(e, '#projects')}
            className="flex flex-col gap-0.5 text-left sm:text-right group cursor-pointer"
          >
            <span className="font-mono text-[8px] sm:text-[9px] text-zinc-500 tracking-wider uppercase font-bold inline-flex items-center gap-1 group-hover:text-black">
              RECENT WORK ↘
            </span>
            <span className="font-display font-black text-sm sm:text-base md:text-lg text-black uppercase tracking-tight group-hover:underline">
            E-COMERCE SALES DASHBOARD
            </span>
          </a>
        </Magnetic>
      </div>
    </section>
  );
}
