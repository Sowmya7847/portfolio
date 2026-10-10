import React from 'react';
import { motion } from 'framer-motion';

const initiatives = [
  {
    name: 'CAREER CRAFT',
    description:
      'Hosted career-focused sessions with content creators and entrepreneurs covering career guidance and personal branding.',
  },
  {
    name: 'TECHTALES',
    description:
      'Coordinated a Machine Learning seminar with Dr. Swagatam Das, including technical quiz and Q&A sessions.',
  },
  {
    name: 'CODESPRINT 2025',
    description:
      'Organized a competitive programming contest on HackerRank with 150+ active participants, focused on Data Structures, Algorithms, and problem-solving.',
  },
  {
    name: 'PROTOSPHERE',
    description:
      'Led an industrial visit to T-Works, providing students exposure to prototyping, innovation, and product development.',
  },
];

export const Leadership: React.FC = () => {
  return (
    <section
      id="leadership"
      className="relative w-full bg-[#F3EBDD] text-[#111111] font-sans selection:bg-[#2563EB]/20 selection:text-[#080808] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 border-t border-[#080808]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#163A70]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            06 / LEADERSHIP &amp; ACTIVITIES
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#163A70]/80 via-[#24528C]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#080808] via-[#111111] to-[#151515] drop-shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
              LEADERSHIP &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0D274D] via-[#163A70] to-[#24528C] drop-shadow-[0_4px_16px_rgba(22,58,112,0.25)]">
              ACTIVITIES.
            </span>
          </h2>
        </motion.div>

        {/* Executive Role Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 sm:p-12 rounded-sm border border-[#080808]/10 bg-[#FAF6EF] shadow-[0_4px_24px_rgba(0,0,0,0.04)] group overflow-hidden transition-all duration-500 hover:border-[#163A70] mb-8"
        >
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#163A70]/50 group-hover:border-[#163A70]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#163A70]/50 group-hover:border-[#163A70]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#163A70]/50 group-hover:border-[#163A70]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#163A70]/50 group-hover:border-[#163A70]" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#080808]/10 relative z-10">
            <div>
              <span
                className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#163A70] block mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                EXECUTIVE TENURE
              </span>
              <h3
                className="text-3xl sm:text-4xl tracking-wide uppercase text-[#080808] group-hover:text-[#163A70] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                ACM STUDENT CHAPTER
              </h3>
              <p
                className="text-xs sm:text-sm font-light text-[#151515]/70 mt-0.5"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Anurag University, Hyderabad
              </p>
            </div>

            <div className="sm:text-right font-mono text-xs">
              <span className="text-[#FFF9EF] font-semibold px-3 py-1 rounded bg-[#163A70] border border-[#163A70] block sm:inline-block mb-1.5">
                PRESIDENT
              </span>
              <div className="text-[#151515]/70 text-[11px] tracking-wider">
                JUNE 2024 &ndash; JUNE 2025
              </div>
            </div>
          </div>

          <div className="pt-8 relative z-10">
            <span
              className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#163A70] block mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              COORDINATED CHAPTER INITIATIVES
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initiatives.map((item, idx) => (
                <div
                  key={item.name}
                  className="p-6 rounded-sm bg-[#E9DECC] border border-[#080808]/10 space-y-2 hover:border-[#163A70]/50 transition-colors"
                >
                  <div className="flex items-center gap-2 font-mono text-xs text-[#080808] font-medium tracking-wider">
                    <span className="text-[#2563EB]">0{idx + 1}</span>
                    <span>{item.name}</span>
                  </div>
                  <p
                    className="text-xs sm:text-sm text-[#151515] font-light leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
