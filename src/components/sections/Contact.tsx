import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#F3EBDD] text-[#111111] font-sans selection:bg-[#2563EB]/20 selection:text-[#080808] pt-20 pb-20 px-6 sm:px-12 lg:px-20 border-t border-[#080808]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
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
                  09 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#163A70]/80 via-[#24528C]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#080808] via-[#111111] to-[#151515] drop-shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0D274D] via-[#163A70] to-[#24528C] drop-shadow-[0_4px_16px_rgba(22,58,112,0.25)]">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-normal text-[#151515] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Reach out directly via phone, email, or verified professional profiles.
              </p>

              {/* Verified Contact Details */}
              <div className="space-y-4 pt-4 border-t border-[#080808]/10 font-mono text-xs">
                <div>
                  <span className="text-[#163A70] uppercase tracking-widest block text-[10px] mb-1">
                    IDENTITY
                  </span>
                  <span className="text-[#080808] font-display text-lg">
                    Sowmya Jeedigunta
                  </span>
                </div>

                <div>
                  <span className="text-[#163A70] uppercase tracking-widest block text-[10px] mb-1">
                    PHONE
                  </span>
                  <a
                    href="tel:+916301675964"
                    className="text-[#163A70] text-sm hover:underline hover:text-[#2563EB]"
                  >
                    +91 6301675964
                  </a>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <a
                    href="https://www.linkedin.com/in/sowmyajeedigunta-7201a633a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#151515] hover:text-[#2563EB] transition-colors py-1 group"
                  >
                    <span className="text-[#2563EB] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                    <span className="text-[#080808] font-semibold">LinkedIn:</span>
                    <span className="text-[11px] underline underline-offset-2 text-[#163A70]">https://www.linkedin.com/in/sowmyajeedigunta-7201a633a</span>
                  </a>

                  <a
                    href="https://github.com/Sowmya784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#151515] hover:text-[#2563EB] transition-colors py-1 group"
                  >
                    <span className="text-[#2563EB] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                    <span className="text-[#080808] font-semibold">GitHub:</span>
                    <span className="text-[11px] underline underline-offset-2 text-[#163A70]">https://github.com/Sowmya784</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#163A70] bg-[#0D274D] p-8 sm:p-10 shadow-[0_20px_50px_rgba(13,39,77,0.18)] overflow-hidden"
          >
            {/* Top Blue Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#6B93C9]/70" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#6B93C9]/70" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#6B93C9]/70" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#6B93C9]/70" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#2563EB] text-[#2563EB] text-sm">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  PACKET DELIVERED
                </h3>
                <p className="text-xs text-[#FAF6EF]/85 font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Transmission registered successfully.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-xs font-mono text-[#6B93C9] tracking-widest uppercase hover:underline cursor-pointer"
                >
                  DISPATCH ANOTHER PACKET
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] font-mono tracking-[0.25em] text-[#6B93C9] uppercase mb-2"
                  >
                    IDENTIFIER / NAME
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0A1A33] border border-[#163A70] rounded-sm px-4 py-3 text-sm text-[#FFF9EF] placeholder:text-[#6B93C9]/50 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/40 transition-colors font-mono"
                    placeholder="Enter your name or entity"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] font-mono tracking-[0.25em] text-[#6B93C9] uppercase mb-2"
                  >
                    COMMUNICATION CHANNEL / EMAIL
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0A1A33] border border-[#163A70] rounded-sm px-4 py-3 text-sm text-[#FFF9EF] placeholder:text-[#6B93C9]/50 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/40 transition-colors font-mono"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-mono tracking-[0.25em] text-[#6B93C9] uppercase mb-2"
                  >
                    TRANSMISSION PAYLOAD / MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0A1A33] border border-[#163A70] rounded-sm px-4 py-3 text-sm text-[#FFF9EF] placeholder:text-[#6B93C9]/50 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/40 transition-colors font-mono resize-none"
                    placeholder="Provide details about opportunities or technical collaboration"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#163A70] via-[#2563EB] to-[#163A70] text-[#FFF9EF] font-semibold text-xs tracking-[0.3em] uppercase hover:brightness-110 transition-all rounded-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] cursor-pointer"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  DISPATCH TRANSMISSION
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </footer>
  );
};
