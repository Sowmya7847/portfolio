import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';

interface Project {
  number: string;
  title: string;
  subtitle: string;
  technologies: string[];
  description: string;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'MEALMATE 5.0',
    subtitle: 'AI-Powered Meal Planning Platform',
    technologies: ['Node.js', 'Express.js', 'Firebase', 'JavaScript', 'Bootstrap', 'AI/LLM'],
    description:
      'Built a full-stack AI meal planning platform with recipe discovery, ingredient management, recommendations, and weekly planning.',
  },
  {
    number: '02',
    title: 'MEALMATE',
    subtitle: 'Food Ordering & Kitchen Management',
    technologies: ['JavaScript', 'Firebase', 'Firestore', 'Authentication', 'Bootstrap', 'Web Development'],
    description:
      'Developed a food ordering system with menu, cart, checkout, order tracking, and real-time kitchen status management.',
  },
  {
    number: '03',
    title: 'GAMIFIED LEARNING PLATFORM',
    subtitle: 'NCERT LMS',
    technologies: ['Node.js', 'Express.js', 'Firebase', 'Firestore', 'JavaScript', 'AI', 'Gamification'],
    description:
      'Built an LMS platform with role-based access, quizzes, assignments, XP, achievements, leaderboards, and progress tracking.',
  },
  {
    number: '04',
    title: 'CLOUDSHIELD',
    subtitle: 'Cloud Security Platform',
    technologies: ['Cloud Security', 'Web Development', 'Authentication', 'APIs', 'Security'],
    description:
      'Developed a cloud security solution focused on secure application access, protection, and management.',
  },
  {
    number: '05',
    title: 'REAL-TIME DISASTER INFORMATION AGGREGATION SYSTEM',
    subtitle: 'Real-Time Disaster Data & Alerts',
    technologies: ['Smart APIs', 'REST APIs', 'JavaScript', 'Real-Time Data', 'Data Aggregation'],
    description:
      'Built a real-time disaster information system integrating smart APIs to aggregate and present critical disaster updates.',
  },
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#F3EBDD] text-[#111111] font-sans selection:bg-[#2563EB]/20 selection:text-[#080808] pt-20 pb-32 px-6 sm:px-12 lg:px-20 border-t border-[#080808]/10"
    >
      {/* Studio Ambient Deep Blue Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#163A70]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#0D274D]/5 rounded-full blur-[170px] pointer-events-none" />

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
            04 / ACADEMIC PROJECTS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#163A70]/80 via-[#24528C]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#080808] via-[#111111] to-[#151515] drop-shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
              ACADEMIC PROJECTS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0D274D] via-[#163A70] to-[#24528C] drop-shadow-[0_4px_16px_rgba(22,58,112,0.25)]">
              ENGINEERED SOLUTIONS.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-normal text-[#151515] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards developed through academic coursework and engineering initiatives.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#163A70] bg-[#0D274D] p-8 sm:p-12 shadow-[0_20px_60px_rgba(13,39,77,0.22)] group overflow-hidden transition-colors duration-500 hover:border-[#2563EB]">
                
                {/* Top Blue Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/70 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#6B93C9]/70 group-hover:border-[#2563EB] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#6B93C9]/70 group-hover:border-[#2563EB] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#6B93C9]/70 group-hover:border-[#2563EB] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#6B93C9]/70 group-hover:border-[#2563EB] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#24528C]/15 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                <div className="relative z-10 space-y-6">
                  {/* Category & Index */}
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-mono font-medium tracking-[0.25em] text-[#6B93C9]"
                    >
                      {project.number} // {project.subtitle.toUpperCase()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.9] text-[#FFF9EF] group-hover:text-white transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-xs sm:text-sm md:text-[14.5px] font-light text-[#FAF6EF]/90 leading-relaxed max-w-2xl"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    &ldquo;{project.description}&rdquo;
                  </p>

                  {/* Technology Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] sm:text-[11px] font-mono tracking-wider px-2.5 py-1 rounded bg-[#0A1A33] border border-[#163A70] text-[#FAF6EF]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Repository Link */}
                  <div className="pt-2">
                    <a
                      href="https://github.com/Sowmya784"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-[#6B93C9] hover:text-[#FFF9EF] transition-colors group/link"
                    >
                      <span>VIEW REPOSITORY ON GITHUB</span>
                      <span className="transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>

              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};
