import React from 'react';
import { motion } from 'framer-motion';

const certificationsList = [
  {
    name: 'ServiceNow Certified Application Developer (CAD)',
    issuer: 'ServiceNow',
  },
  {
    name: 'ServiceNow Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
  },
  {
    name: 'Foundations of Cybersecurity',
    issuer: 'Google',
  },
  {
    name: 'Business Intelligence (BI) Essentials',
    issuer: 'IBM',
  },
  {
    name: 'Excel Basics for Data Analysis',
    issuer: 'IBM',
  },
];

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
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
            08 / CERTIFICATIONS
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
              TECHNICAL
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0D274D] via-[#163A70] to-[#24528C] drop-shadow-[0_4px_16px_rgba(22,58,112,0.25)]">
              CREDENTIALS.
            </span>
          </h2>
        </motion.div>

        {/* Certifications Rows */}
        <div className="space-y-3 sm:space-y-4">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              className="relative p-4 sm:p-6 md:p-7 rounded-sm border border-[#080808]/10 bg-[#FAF6EF] group overflow-hidden transition-all duration-500 hover:border-[#163A70] hover:bg-[#FFF9EF]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 relative z-10">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-mono text-xs text-[#2563EB] shrink-0">0{idx + 1}</span>
                  <h3
                    className="text-lg sm:text-xl md:text-2xl tracking-wide uppercase text-[#080808] group-hover:text-[#163A70] transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {cert.name}
                  </h3>
                </div>

                <div className="font-mono text-xs tracking-wider text-[#163A70] uppercase pl-7 sm:pl-0 shrink-0">
                  <span className="px-2.5 sm:px-3 py-1 rounded bg-[#E9DECC] border border-[#163A70]/20 text-[#163A70] font-medium text-[11px] sm:text-xs">
                    {cert.issuer}
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
