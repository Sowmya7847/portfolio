import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'LEADERSHIP', href: '#leadership' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F3EBDD]/90 backdrop-blur-md border-b border-[#080808]/10 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]'
          : 'bg-transparent py-5 md:py-7 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center gap-2.5 font-display text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#080808] hover:text-[#163A70] transition-colors uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2563EB] shadow-[0_0_10px_rgba(37,99,235,0.7)] group-hover:scale-125 transition-transform" />
          <span>SOWMYA JEEDIGUNTA</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-[11px] font-medium tracking-[0.22em] text-[#151515] hover:text-[#2563EB] transition-colors uppercase relative py-1 group"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#2563EB] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-wider text-[#163A70]">
            <a
              href="https://www.linkedin.com/in/sowmyajeedigunta-7201a633a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563EB] transition-colors"
              title="LinkedIn Profile"
            >
              LINKEDIN ↗
            </a>
            <span className="text-[#080808]/20">&middot;</span>
            <a
              href="https://github.com/Sowmya784"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563EB] transition-colors"
              title="GitHub Profile"
            >
              GITHUB ↗
            </a>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="group flex items-center space-x-2 text-[11px] tracking-[0.22em] font-medium uppercase py-2 px-4 border border-[#163A70] hover:border-[#2563EB] bg-[#163A70] hover:bg-[#2563EB] text-[#FFF9EF] hover:text-white transition-all duration-300 shadow-[0_4px_14px_rgba(22,58,112,0.2)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs text-[#FFF9EF]">
              ↗
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden text-[#080808] hover:text-[#163A70] focus:outline-none p-2"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`h-[1.5px] w-full bg-current transition-transform duration-200 ${
                mobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-current transition-opacity duration-200 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-current transition-transform duration-200 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FAF6EF]/98 backdrop-blur-2xl border-b border-[#080808]/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 space-y-3">
              {[...navItems, { label: 'CONTACT', href: '#contact' }].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-xs font-mono tracking-widest text-[#151515] hover:text-[#2563EB] transition-colors uppercase py-2 border-b border-[#080808]/10"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-3 font-mono text-xs">
                <a
                  href="https://www.linkedin.com/in/sowmyajeedigunta-7201a633a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#163A70] hover:text-[#2563EB] transition-colors tracking-widest"
                >
                  LINKEDIN ↗
                </a>
                <span className="text-[#080808]/20">&middot;</span>
                <a
                  href="https://github.com/Sowmya784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#163A70] hover:text-[#2563EB] transition-colors tracking-widest"
                >
                  GITHUB ↗
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
