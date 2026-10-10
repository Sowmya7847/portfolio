import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    number: '01',
    title: 'PROGRAMMING',
    badge: 'CORE FOUNDATION',
    items: ['Java', 'Python'],
    colSpan: 'lg:col-span-6',
  },
  {
    number: '02',
    title: 'WEB TOOLS',
    badge: 'APPLICATION DEVELOPMENT',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'],
    colSpan: 'lg:col-span-6',
  },
  {
    number: '03',
    title: 'DATABASE',
    badge: 'DATA PERSISTENCE',
    items: ['SQL', 'Firebase'],
    colSpan: 'lg:col-span-4',
  },
  {
    number: '04',
    title: 'DATA STRUCTURES',
    badge: 'ALGORITHMIC CORE',
    items: [
      'Arrays',
      'Linked Lists',
      'Stacks',
      'Queues',
      'Trees',
      'Graphs',
      'Hashing',
    ],
    colSpan: 'lg:col-span-8',
  },
  {
    number: '05',
    title: 'APIs & LIBRARIES',
    badge: 'INTEGRATION',
    items: ['Hugging Face API', 'Google Maps API', 'Esri ArcGIS API'],
    colSpan: 'lg:col-span-6',
  },
  {
    number: '06',
    title: 'TOOLS',
    badge: 'WORKFLOW & DEV',
    items: ['Microsoft Office', 'GitHub', 'VS Code', 'Linux Programming'],
    colSpan: 'lg:col-span-6',
  },
  {
    number: '07',
    title: 'SOFT SKILLS',
    badge: 'COLLABORATIVE EXECUTION',
    items: [
      'Communication',
      'Multi-tasking',
      'Team Building',
      'Problem Solving',
      'Time Management',
    ],
    colSpan: 'lg:col-span-12',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Skills: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-full bg-[#F3EBDD] text-[#111111] font-sans selection:bg-[#2563EB]/20 selection:text-[#080808] pt-16 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-8 lg:px-16 overflow-hidden flex flex-col justify-center border-t border-[#080808]/10"
    >
      {/* Ambient Deep Blue Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#163A70]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#0D274D]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-4 sm:mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#163A70]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / CAPABILITIES
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#163A70]/80 via-[#24528C]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-14"
        >
          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.88] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#080808] via-[#111111] to-[#151515] drop-shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
              WHAT I
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0D274D] via-[#163A70] to-[#24528C] drop-shadow-[0_4px_16px_rgba(22,58,112,0.25)]">
              WORK WITH.
            </span>
          </h2>
          <p
            className="text-xs sm:text-sm font-normal text-[#151515] max-w-lg mt-3 sm:mt-4 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Technologies and foundations I&apos;ve worked with while building software, web applications and AI-powered solutions.
          </p>
        </motion.div>

        {/* Cinematic Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6"
        >
          {bentoCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`${cat.colSpan} relative rounded-sm border border-[#080808]/10 bg-[#FAF6EF] p-5 sm:p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] group overflow-hidden transition-all duration-500 hover:border-[#163A70] hover:bg-[#FFF9EF]`}
            >
              {/* Corner Minimal L-Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#163A70]/50 group-hover:border-[#163A70]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#163A70]/50 group-hover:border-[#163A70]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#163A70]/50 group-hover:border-[#163A70]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#163A70]/50 group-hover:border-[#163A70]" />

              <div className="relative z-10 flex flex-col justify-between h-full space-y-4 sm:space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span
                      className="text-[10px] font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#163A70]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {cat.number} // {cat.badge}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl tracking-wide uppercase text-[#080808] group-hover:text-[#163A70] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                  {cat.items.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-[11px] font-mono tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-sm bg-[#E9DECC] border border-[#080808]/10 text-[#111111] group-hover:border-[#163A70]/40 group-hover:bg-[#FAF6EF] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
