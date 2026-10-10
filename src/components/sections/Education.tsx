import React from 'react';
import { motion } from 'framer-motion';

interface EducationItem {
  institution: string;
  period: string;
  degree: string;
  metricLabel: string;
  metricValue: string;
}

const educationList: EducationItem[] = [
  {
    institution: 'ANURAG UNIVERSITY',
    period: '2022–2026',
    degree: 'Bachelors of Technology in Computer Science and Engineering',
    metricLabel: 'CGPA',
    metricValue: '8.79',
  },
  {
    institution: 'EXCELLENCIA JUNIOR COLLEGE',
    period: '2020–2022',
    degree: 'Intermediate',
    metricLabel: 'Percentage',
    metricValue: '97.1%',
  },
  {
    institution: 'BHAVANS SRI RAMAKRISHNA VIDYALAYA',
    period: '2020',
    degree: 'Schooling',
    metricLabel: 'Percentage',
    metricValue: '91.2%',
  },
];

export const Education: React.FC = () => {
  return (
    <section
      id="education"
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
            05 / EDUCATION
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
              ACADEMIC
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0D274D] via-[#163A70] to-[#24528C] drop-shadow-[0_4px_16px_rgba(22,58,112,0.25)]">
              FOUNDATIONS.
            </span>
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-4 sm:space-y-6">
          {educationList.map((item, idx) => (
            <motion.div
              key={item.institution}
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

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 relative z-10">
                <div className="space-y-1 sm:space-y-1.5">
                  <span
                    className="text-xs font-mono tracking-[0.2em] text-[#2563EB]"
                  >
                    {item.period}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl tracking-wide uppercase text-[#080808] group-hover:text-[#163A70] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {item.institution}
                  </h3>
                  <p
                    className="text-xs sm:text-sm font-normal text-[#151515]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.degree}
                  </p>
                </div>

                <div className="font-mono text-xs sm:text-sm tracking-wider flex items-center gap-2 self-start sm:self-auto shrink-0">
                  <span className="text-[#163A70] text-xs">{item.metricLabel}:</span>
                  <span className="text-[#080808] font-semibold px-2.5 sm:px-3 py-1 rounded bg-[#E9DECC] border border-[#163A70]/20">
                    {item.metricValue}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
