import React from 'react';
import { motion } from 'framer-motion';

const achievementsList = [
  {
    title: 'AI CAPTIONING & TRANSCRIPTION TOOL',
    award: 'Consolation Prize',
    contest: 'Innoquest Microsoft Azure Hackathon',
    participants: '800+ Participants',
    technologies: 'JavaScript · Machine Learning · Hugging Face API · Speech-to-Text · Text-to-Speech',
    description:
      'Won Consolation Prize for an AI accessibility tool enabling media-to-text and speech conversion.',
  },
  {
    title: 'AGRITECH AI V1.0',
    award: 'Finalist',
    contest: 'RupaJna Hackathon 2026',
    technologies: 'Computer Vision · Generative AI · Gemini API · Image Processing · API Integration',
    description:
      'Reached finals with an AI solution for crop disease detection and smart recommendations.',
  },
  {
    title: 'PORTFOLIO WEBSITE',
    award: 'Finalist',
    contest: 'TechXcelerate Hackathon',
    technologies: 'HTML · CSS · JavaScript · Responsive Web Design · UI/UX',
    description:
      'Advanced to final round with a responsive portfolio showcasing projects and technical skills.',
  },
];

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="relative w-full bg-[#F3EBDD] text-[#111111] font-sans selection:bg-[#2563EB]/20 selection:text-[#080808] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 border-t border-[#080808]/10 overflow-hidden"
    >
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
            07 / HACKATHONS &amp; ACHIEVEMENTS
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
              HACKATHONS &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0D274D] via-[#163A70] to-[#24528C] drop-shadow-[0_4px_16px_rgba(22,58,112,0.25)]">
              RECOGNITIONS.
            </span>
          </h2>
        </motion.div>

        {/* Achievements Cards */}
        <div className="space-y-4 sm:space-y-6">
          {achievementsList.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative p-5 sm:p-8 rounded-sm border border-[#080808]/10 bg-[#FAF6EF] shadow-[0_4px_24px_rgba(0,0,0,0.04)] group overflow-hidden transition-all duration-500 hover:border-[#163A70] hover:bg-[#FFF9EF]"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#163A70]/50 group-hover:border-[#163A70]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#163A70]/50 group-hover:border-[#163A70]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#163A70]/50 group-hover:border-[#163A70]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#163A70]/50 group-hover:border-[#163A70]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-baseline relative z-10">
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="text-[#FFF9EF] font-semibold px-2.5 py-0.5 rounded bg-[#163A70] border border-[#163A70]">
                      {item.award}
                    </span>
                    <span className="text-[#080808]/20">&mdash;</span>
                    <span className="text-[#163A70]">{item.contest}</span>
                    {item.participants && (
                      <span className="text-[#151515]/60 text-[11px]">({item.participants})</span>
                    )}
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl tracking-wide uppercase text-[#080808] group-hover:text-[#163A70] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                </div>

                <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
                  <p
                    className="text-xs sm:text-sm md:text-[14px] text-[#151515] font-light leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    &ldquo;{item.description}&rdquo;
                  </p>

                  <div className="font-mono text-xs text-[#151515]/80 tracking-wide flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
                    <span className="text-[#2563EB] text-[10px] tracking-widest uppercase">
                      TECH:
                    </span>
                    <span className="text-[11px]">{item.technologies}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
