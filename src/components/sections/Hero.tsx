import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { DigitalArtifactsScene } from '../ui/DigitalArtifactsScene';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen h-screen overflow-hidden bg-[#F3EBDD] text-[#111111] font-sans selection:bg-[#2563EB]/20 selection:text-[#080808] flex flex-col justify-between pt-24 pb-8 px-6 sm:px-12 lg:px-16"
    >
      {/* ================= 1. 3D HOLOGRAPHIC PERSONAL VISUAL STAGE & DEEP BLUE ENVIRONMENT ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-end">
        {/* Deep blue atmospheric lighting envelope */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 bg-gradient-to-l from-[#0D274D]/90 via-[#0D274D]/50 to-transparent pointer-events-none" />
        
        {/* Ambient deep blue atmospheric glows */}
        <div className="absolute right-1/4 top-1/3 w-80 h-80 bg-[#163A70]/30 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute right-1/6 bottom-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-[150px] pointer-events-none" />

        {/* Floating Ambient Sparks / Particles */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[
              { top: '25%', right: '35%', delay: 0, duration: 4 },
              { top: '60%', right: '20%', delay: 1.2, duration: 5 },
              { top: '40%', right: '15%', delay: 2.1, duration: 4.5 },
              { top: '75%', right: '30%', delay: 0.7, duration: 5.2 },
            ].map((p, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: p.delay,
                }}
                style={{ top: p.top, right: p.right }}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#6B93C9] blur-[0.5px] shadow-[0_0_8px_#2563EB]"
              />
            ))}
          </div>
        )}

        {/* 3D Digital Artifacts Interactive Stage */}
        <div className="relative w-full lg:w-1/2 h-full flex items-center justify-center lg:justify-end pr-0 lg:pr-12 pointer-events-auto z-10">
          <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] lg:w-[580px] lg:h-[580px] max-w-[95vw] max-h-[80vh] flex items-center justify-center">
            <DigitalArtifactsScene className="w-full h-full" />
          </div>
        </div>

        {/* Seamless Soft Left Edge Gradient Blend into Light Beige */}
        <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-[#F3EBDD] via-[#F3EBDD]/90 to-transparent pointer-events-none z-10" />


      </div>

      {/* ================= 2. CONTENT LAYER ================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between pointer-events-none">
        
        {/* Top Eyebrow / University Affiliation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 font-mono text-[11px] sm:text-xs tracking-[0.25em] text-[#163A70] uppercase pointer-events-auto"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shadow-[0_0_10px_rgba(37,99,235,0.7)]" />
          <span>Anurag University &middot; Hyderabad, India</span>
        </motion.div>

        {/* Primary Visual Identity: SOWMYA JEEDIGUNTA & Role */}
        <div className="my-auto py-6 sm:py-10 max-w-2xl lg:max-w-3xl pointer-events-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {/* Massive Condensed Headline with Strong Black and Deep Blue Gradient */}
            <motion.div variants={fadeUpVariants} className="select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-tight uppercase leading-[0.84]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#080808] via-[#111111] to-[#151515] drop-shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
                  SOWMYA
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0D274D] via-[#163A70] to-[#24528C] drop-shadow-[0_4px_16px_rgba(22,58,112,0.25)]">
                  JEEDIGUNTA
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Role */}
            <motion.div variants={fadeUpVariants} className="pt-2">
              <p
                className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.24em] uppercase text-[#111111]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                COMPUTER SCIENCE ENGINEERING STUDENT
              </p>
            </motion.div>

            {/* Disciplines Line */}
            <motion.div variants={fadeUpVariants}>
              <p
                className="text-[11px] sm:text-xs md:text-sm font-normal tracking-[0.25em] uppercase text-[#163A70]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                AI <span className="text-[#2563EB] mx-1.5">&#8226;</span> SOFTWARE{' '}
                <span className="text-[#2563EB] mx-1.5">&#8226;</span> WEB
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Metadata & Social Profiles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-6 border-t border-[#080808]/10 flex items-center justify-between gap-6 pointer-events-auto"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
            </span>
            <div
              className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase leading-tight space-y-0.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <div className="text-[#163A70]">BASED IN INDIA</div>
              <div className="text-[#080808] font-medium">ANURAG UNIVERSITY</div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-4 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-mono">
            <a
              href="https://www.linkedin.com/in/sowmyajeedigunta-7201a633a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#163A70] hover:text-[#2563EB] transition-colors"
            >
              LINKEDIN ↗
            </a>
            <span className="text-[#080808]/20">&middot;</span>
            <a
              href="https://github.com/Sowmya784"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#163A70] hover:text-[#2563EB] transition-colors"
            >
              GITHUB ↗
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
