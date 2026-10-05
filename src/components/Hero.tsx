import { motion } from 'framer-motion';

const Node = ({ className }: { className?: string }) => (
  <div className={`absolute w-2.5 h-2.5 bg-[#ccff00] rounded-xs shadow-[0_0_8px_rgba(204,255,0,0.8)] z-30 ${className}`} />
);

export function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[680px] bg-[#0a0a0a] overflow-hidden flex items-center justify-center font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Top Spotlight */}
      <motion.div
        animate={{ opacity: [0.1, 0.18, 0.1], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[90vw] sm:w-[80vw] max-w-[800px] h-[30vh] bg-white blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"
      />

      {/* Background Typography Watermark with high contrast styling */}
      <div className="absolute z-0 flex flex-col items-center justify-center w-full h-full select-none pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[14vw] xs:text-[16vw] md:text-[18vw] font-display font-black text-white/[0.07] watermark-text leading-[0.72] tracking-tighter m-0 p-0 text-center"
        >
          PORT
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="text-[14vw] xs:text-[16vw] md:text-[18vw] font-display font-black text-white/[0.07] watermark-text leading-[0.72] tracking-tighter m-0 p-0 text-center"
        >
          FOLIO
        </motion.h1>
      </div>

      {/* Central Portrait & Aligned Bounding Box UI */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="absolute z-10 w-[85vw] sm:w-[60vw] md:w-[38vw] max-w-[360px] sm:max-w-[440px] h-[58vh] sm:h-[68vh] md:h-[74vh] max-h-[700px] bottom-0 flex items-end justify-center"
      >
        {/* Continuous Soft neon glow spotlight behind the transparent portrait */}
        <motion.div
          animate={{ opacity: [0.14, 0.28, 0.14], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[18%] w-[110%] h-[60%] bg-[#ccff00] blur-[70px] sm:blur-[90px] rounded-full pointer-events-none z-0"
        />

        {/* Portrait Image */}
        <img
          src="/photo.png"
          alt="Janindu Jayasundara"
          className="w-full h-full object-cover object-top opacity-95 relative z-10"
          style={{
            maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)'
          }}
        />

        {/* Aligned Bounding Box UI Frame */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute z-20 w-[90%] h-[86%] top-[8%] left-1/2 -translate-x-1/2 border-[1.5px] border-white/80 pointer-events-none rounded-xs"
        >
          {/* Corners centered on border lines */}
          <Node className="-top-1.5 -left-1.5" />
          <Node className="-top-1.5 -right-1.5" />
          <Node className="-bottom-1.5 -left-1.5" />
          <Node className="-bottom-1.5 -right-1.5" />

          {/* Midpoints */}
          <Node className="-top-1.5 left-1/2 -translate-x-1/2" />
          <Node className="-bottom-1.5 left-1/2 -translate-x-1/2" />
          <Node className="-left-1.5 top-1/2 -translate-y-1/2" />
          <Node className="-right-1.5 top-1/2 -translate-y-1/2" />

          {/* Bottom Right Corner Pointer SVG Accent */}
          <motion.svg
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-5 h-5 sm:w-6 sm:h-6 text-[#ccff00] drop-shadow-[0_0_8px_rgba(204,255,0,0.8)] z-40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2 2 L22 12 L12 22 Z" />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Floating UI/UX Designer Tag */}
      <div className="absolute z-30 w-full h-full max-w-7xl pointer-events-none px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -8, 0],
            rotate: [-4, -2, -4]
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1.2 },
            x: { duration: 0.6, delay: 1.2 },
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
            rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }
          }}
          className="absolute top-[26%] xs:top-[28%] md:top-[30%] left-[4%] xs:left-[6%] sm:left-[8%] md:left-[12%]"
        >
          <div className="bg-[#ccff00] text-black px-3 py-1.5 xs:px-4 xs:py-2 md:px-5 md:py-2 rounded-full font-display font-black text-[11px] xs:text-xs sm:text-sm shadow-[0_10px_30px_rgba(204,255,0,0.4)] border border-[#ccff00] tracking-wide whitespace-nowrap">
            UI / UX Designer
          </div>
          {/* Hand-drawn arrow SVG pointing to photo frame */}
          <motion.svg
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-8 sm:-bottom-10 right-2 w-7 h-7 sm:w-9 sm:h-9 text-[#ccff00]"
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

      {/* Footer Line with Standardized Container Width max-w-7xl */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-4 sm:bottom-6 w-full max-w-7xl px-4 sm:px-6 md:px-12 flex items-center justify-between z-40 text-white/60 text-[10px] xs:text-xs font-mono tracking-wider sm:tracking-widest uppercase"
      >
        <span className="shrink-0 text-[#ccff00] font-bold">Janindu Jayasundara Portfolio 2026</span>
        <div className="flex-grow mx-3 xs:mx-4 md:mx-8 h-[1px] bg-white/20" />
      </motion.div>
    </section>
  );
}