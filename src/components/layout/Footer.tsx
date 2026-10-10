import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#080808]/10 bg-[#E9DECC] py-16 text-[#151515]/70 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="text-[#080808] text-sm font-display font-medium tracking-wide">
            SOWMYA JEEDIGUNTA
          </p>
          <p className="text-[#151515]/70">
            Computer Science Engineering Student &middot; Anurag University
          </p>
        </div>

        {/* Verified Social Profiles */}
        <div className="flex items-center gap-4 text-xs font-mono tracking-wider">
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

        <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-[#151515]/60">
          <span>&copy; {new Date().getFullYear()} &middot; Personal Portfolio</span>
          <button
            onClick={scrollToTop}
            className="text-[#163A70] hover:text-[#2563EB] transition-colors flex items-center gap-1.5 self-start cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <span aria-hidden="true">&uarr;</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
