import { motion } from 'framer-motion';
const Node = ({ className }: { className?: string; }) =>
  <div className={`absolute w-2.5 h-2.5 bg-[#ccff00] ${className}`} />;

export function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] bg-[#0a0a0a] overflow-hidden flex items-center justify-center font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Top Spotlight */}
      <motion.div
        animate={{ opacity: [0.1, 0.18, 0.1], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[90vw] sm:w-[80vw] max-w-[800px] h-[30vh] bg-white blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"
      />

      {/* Background Typography */}
      <div className="absolute z-0 flex flex-col items-center justify-center w-full h-full select-none pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[18vw] xs:text-[20vw] md:text-[24vw] font-display font-black text-[#1a1a1a] leading-[0.72] tracking-tighter m-0 p-0"
        >
          PORT
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="text-[18vw] xs:text-[20vw] md:text-[24vw] font-display font-black text-[#1a1a1a] leading-[0.72] tracking-tighter m-0 p-0"
        >
          FOLIO
        </motion.h1>
      </div>

      {/* Central Portrait & Aligned Bounding Box UI */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="absolute z-10 w-[85vw] sm:w-[60vw] md:w-[38vw] max-w-[360px] sm:max-w-[440px] h-[60vh] sm:h-[70vh] md:h-[76vh] max-h-[720px] bottom-0 flex items-end justify-center"
      >
        {/* Continuous Soft neon glow spotlight behind the transparent portrait */}
        <motion.div
          animate={{ opacity: [0.12, 0.24, 0.12], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] w-[110%] h-[60%] bg-[#ccff00] blur-[70px] sm:blur-[90px] rounded-full pointer-events-none z-0"
        />

        {/* Portrait Image */}
        <img
          src="/photo.png"
          alt="Janindu Jayasundara"
          className="w-full h-full object-cover object-top opacity-95 relative z-10"
          style={{
            maskImage: 'linear-gradient(to bottom, black 78%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 78%, transparent 100%)'
          }}
        />

        {/* Aligned Bounding Box UI Frame */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute z-20 w-[92%] h-[88%] top-[6%] left-1/2 -translate-x-1/2 border-[1.5px] border-white/70 pointer-events-none rounded-sm"
        >
          {/* Corners with subtle pulse animation */}
          <Node className="top-[-5px] left-[-5px]" />
          <Node className="top-[-5px] right-[-5px]" />
          <Node className="bottom-[-5px] left-[-5px]" />
          <Node className="bottom-[-5px] right-[-5px]" />

          {/* Midpoints */}
          <Node className="top-[-5px] left-1/2 -translate-x-1/2" />
          <Node className="bottom-[-5px] left-1/2 -translate-x-1/2" />
          <Node className="left-[-5px] top-1/2 -translate-y-1/2" />
          <Node className="right-[-5px] top-1/2 -translate-y-1/2" />

          {/* Bottom Right Corner Pointer SVG Accent */}
          <motion.svg
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 w-5 h-5 sm:w-6 sm:h-6 text-[#ccff00]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2 2 L22 12 L12 22 Z" />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Floating Tags */}
      <div className="absolute z-30 w-full h-full max-w-[1400px] pointer-events-none">
        {/* UI/UX Tag with continuous floating animation */}
        <motion.div
          initial={{ opacity: 0, x: -20, rotate: -10 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
            rotate: [-6, -3, -6]
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1.2 },
            x: { duration: 0.6, delay: 1.2 },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
            rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }
          }}
          className="absolute top-[20%] xs:top-[22%] md:top-[26%] left-[3%] xs:left-[5%] sm:left-[8%] md:left-[14%] lg:left-[18%]"
        >
          <div className="bg-[#ccff00] text-black px-3 py-1.5 xs:px-4 xs:py-2 md:px-6 md:py-2.5 rounded-full font-display font-extrabold text-[11px] xs:text-xs sm:text-sm md:text-base shadow-[0_10px_30px_rgba(204,255,0,0.4)] border border-[#ccff00] tracking-wide whitespace-nowrap">
            UI / UX Designer
          </div>
          {/* Hand-drawn arrow SVG pointing to photo frame */}
          <motion.svg
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-8 sm:-bottom-10 right-1 sm:right-2 w-7 h-7 sm:w-10 sm:h-10 text-[#ccff00]"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5 C 10 25, 20 35, 40 40"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M30 35 L 42 41 L 35 48"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Footer Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-4 sm:bottom-6 w-[92%] sm:w-[90%] max-w-[1400px] flex items-center justify-between z-40 text-white/60 text-[10px] xs:text-xs sm:text-sm font-mono tracking-wider sm:tracking-widest uppercase"
      >
        <span className="shrink-0 text-[#ccff00] font-bold">Janindu Jayasundara Portfolio 2026</span>
        <div className="flex-grow mx-3 xs:mx-4 md:mx-8 h-[1px] bg-white/20" />
      </motion.div>
    </section>
  );
}