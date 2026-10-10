import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import sowmyaAboutImg from '../../assets/sowmya-about.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // 3D Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);

  // Springs for 3D Tilt Physics
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { damping: 18, stiffness: 220 });

  // Spotlight Glass Glow (Refined Royal Blue & Soft White)
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 240px at ${x}px ${y}px, rgba(255,255,255,0.25), rgba(59,130,246,0.22), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsCardHovered(true);

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="about" 
      className="relative w-full min-h-screen bg-[#F3EBDD] text-[#111111] font-sans selection:bg-[#2563EB]/20 selection:text-[#080808] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center border-t border-[#080808]/10"
    >
      {/* Background Deep Blue Ambient Glows */}
      <motion.div 
        animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-[32rem] h-[32rem] bg-[#163A70] rounded-full blur-[170px] pointer-events-none"
      />
      <motion.div 
        animate={shouldReduceMotion ? {} : { scale: [1.2, 1, 1.2], opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/6 right-1/4 w-[28rem] h-[28rem] bg-[#0D274D] rounded-full blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-10"
        >
          <span 
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#163A70]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / ABOUT
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#163A70]/80 via-[#24528C]/40 to-transparent" />
        </motion.div>

        {/* Main Grid: Content + 3D Portrait Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT CONTENT (7 COLS) ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Cinematic Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.88]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#080808] via-[#111111] to-[#151515] drop-shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
                  ENGINEERING
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0D274D] via-[#163A70] to-[#24528C] drop-shadow-[0_4px_16px_rgba(22,58,112,0.25)]">
                  WITH PURPOSE.
                </span>
              </h2>
            </motion.div>

            {/* Verbatim Resume Bio Paragraph */}
            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-normal text-[#151515] leading-[1.85] tracking-wide mb-8 max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Computer Science graduate with a strong foundation in software engineering, web development, application development, programming, and problem-solving. Hands-on experience developing software applications and AI-powered solutions through academic projects, hackathons, and collaborative initiatives. Demonstrates strong analytical, communication, and teamwork skills with the ability to quickly adapt to new technologies.
            </motion.p>



            {/* Academic Credentials Row */}
            <motion.div 
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#080808]/10"
            >
              <div className="flex flex-col">
                <span 
                  className="text-2xl sm:text-3xl font-light text-[#080808] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  8.79
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#163A70] mt-0.5">
                  B.Tech CGPA
                </span>
              </div>

              <div className="flex flex-col">
                <span 
                  className="text-2xl sm:text-3xl font-light text-[#163A70] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  2022–2026
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#151515]/70 mt-0.5">
                  Anurag University
                </span>
              </div>

              <div className="flex flex-col">
                <span 
                  className="text-2xl sm:text-3xl font-light text-[#080808] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  ACM
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#163A70] mt-0.5">
                  Chapter President
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT 3D HOLOGRAPHIC PORTRAIT ================= */}
          <div className="lg:col-span-5 flex items-center justify-center relative perspective-[1400px]">
            
            {/* Ambient Animated Deep Blue Glow Ring Behind Frame */}
            <motion.div 
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: isCardHovered ? 1.15 : 1,
                      opacity: isCardHovered ? 0.35 : 0.15,
                      rotate: isCardHovered ? 180 : 0,
                    }
              }
              transition={{ duration: 3, ease: 'easeOut' }}
              className="absolute -inset-6 bg-[conic-gradient(from_0deg,#163A70_0%,#0D274D_30%,transparent_60%,#2563EB_100%)] blur-2xl rounded-3xl pointer-events-none"
            />

            {/* Drifting Soft Blue Spark Embers on Hover */}
            {isCardHovered && !shouldReduceMotion && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 10, x: -20 }}
                  animate={{ opacity: [0, 1, 0], y: -50, x: -30 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute top-1/4 -left-6 w-1.5 h-1.5 bg-[#6B93C9] rounded-full blur-[1px] shadow-[0_0_8px_#2563EB] pointer-events-none z-30"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  animate={{ opacity: [0, 1, 0], y: -60, x: 40 }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
                  className="absolute bottom-1/3 -right-6 w-2 h-2 bg-[#2563EB] rounded-full blur-[1px] shadow-[0_0_12px_#2563EB] pointer-events-none z-30"
                />
              </>
            )}

            {/* 3D Holographic Main Card Container */}
            <motion.div
              ref={cardRef}
              style={{
                rotateX: shouldReduceMotion ? 0 : rotateX,
                rotateY: shouldReduceMotion ? 0 : rotateY,
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-3.5 border border-[#163A70] rounded-sm bg-[#0D274D] backdrop-blur-xl shadow-[0_20px_50px_rgba(13,39,77,0.22)] cursor-pointer group transition-colors duration-500 hover:border-[#2563EB]"
            >
              {/* Dynamic Laser Border Pulse on Card Perimeter */}
              <div className="absolute inset-0 rounded-sm pointer-events-none overflow-hidden">
                <motion.div 
                  animate={{ x: isCardHovered ? ['-100%', '200%'] : '-100%' }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent skew-x-12"
                />
              </div>

              {/* Locked Corner Deep Blue Accent Brackets */}
              <div className="pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#6B93C9] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#6B93C9] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#6B93C9] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#6B93C9] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
              </div>

              {/* Portrait Image Canvas with 3D Holographic Character */}
              <div className="relative overflow-hidden w-full max-w-[390px] aspect-[4/5] bg-[#0A101D] rounded-sm">
                <img
                  src={sowmyaAboutImg}
                  alt="Sowmya Jeedigunta"
                  className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.05] group-hover:brightness-105 group-hover:contrast-[1.1] transition-all duration-700 ease-out"
                />

                {/* Mouse-Tracked Holographic Glass Spotlight Sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
                  style={{
                    background: spotlightBg,
                    opacity: isCardHovered ? 1 : 0,
                  }}
                />

                {/* Bottom Film Noir Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D274D]/95 via-[#0D274D]/30 to-transparent pointer-events-none" />

                {/* Corner Emblem Signature */}
                <div className="absolute bottom-4 right-4 z-20 select-none">
                  <span 
                    className="text-2xl text-[#FFF9EF] drop-shadow-[0_0_12px_rgba(37,99,235,0.5)] transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: "'Herr Von Muellerhoff', cursive" }}
                  >
                    Sowmya
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
