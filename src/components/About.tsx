import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileTextIcon, DownloadIcon } from 'lucide-react';

const Node = ({ className }: { className?: string }) => (
  <div className={`absolute w-2.5 h-2.5 bg-[#ccff00] rounded-xs shadow-[0_0_8px_rgba(204,255,0,0.8)] z-30 ${className}`} />
);

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full min-h-screen bg-[#0a0a0a] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col justify-center font-sans selection:bg-[#ccff00] selection:text-black"
    >
      {/* Background Dot pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Glow highlight */}
      <div className="absolute top-1/4 left-[-10%] w-[45vw] h-[45vh] bg-[#ccff00] opacity-[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-10"
        >
          <div className="text-[#ccff00] font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
            <span>01. Introduction</span>
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase leading-none">
            About <span className="text-white/35">Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 sm:gap-12 lg:gap-14">
          {/* Left Column - Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.005 }}
            className="w-full lg:w-[56%] flex flex-col justify-center"
          >
            <div className="bg-[#111111]/90 backdrop-blur-md border border-white/10 hover:border-[#ccff00]/50 transition-all duration-500 rounded-2xl xs:rounded-3xl p-6 xs:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden group h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ccff00]/5 rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-125 group-hover:bg-[#ccff00]/10" />

              <h3 className="text-[#ccff00] font-mono font-bold text-xs sm:text-sm md:text-base mb-4 sm:mb-5 uppercase tracking-widest flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] inline-block animate-pulse shadow-[0_0_8px_#ccff00] shrink-0" />
                <span>UI / UX Designer &amp; IT Undergraduate</span>
              </h3>

              <p className="text-white/90 text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose font-sans font-normal">
                I'm <strong className="text-white font-extrabold">Janindu Jayasundara</strong>, a UI/UX Designer and IT undergraduate passionate about crafting intuitive, user-centered digital experiences.
                <br /><br />
                I enjoy solving real-world problems through thoughtful design, combining creativity with usability to build products that are both beautiful and highly functional. I'm continuously learning, exploring modern design trends, and striving to create meaningful digital experiences that leave a lasting impact.
              </p>

              {/* Download CV CTA */}
              <div className="mt-6 sm:mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <a
                  href="/Janindu_Jayasundara_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Janindu_Jayasundara_CV.pdf"
                  className="group px-6 py-3 bg-[#ccff00] hover:bg-white text-black font-display font-extrabold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.3)] flex items-center gap-2"
                >
                  <FileTextIcon className="w-4 h-4" />
                  <span>Download Full CV</span>
                  <DownloadIcon className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Portrait with Bounding Box Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full lg:w-[44%] relative flex justify-center items-center min-h-[380px] xs:min-h-[440px] sm:min-h-[500px] lg:min-h-[540px]"
          >
            {/* Portrait */}
            <div className="absolute z-10 w-[85%] max-w-[400px] h-full bottom-0 flex items-end justify-center">
              {/* Soft neon glow spotlight behind portrait */}
              <motion.div
                animate={{ opacity: [0.14, 0.26, 0.14], scale: [0.98, 1.04, 0.98] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[15%] w-[110%] h-[60%] bg-[#ccff00] blur-[80px] rounded-full pointer-events-none z-0"
              />

              <img
                src="/photo.png"
                alt="Janindu Jayasundara"
                className="w-full h-[98%] object-cover object-top opacity-95 relative z-10"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                }}
              />
            </div>

            {/* Bounding Box Frame with Centered Nodes */}
            <div className="absolute z-20 w-[88%] max-w-[380px] h-[86%] top-[7%] border-[1.5px] border-white/80 pointer-events-none rounded-xs">
              <Node className="-top-1.5 -left-1.5" />
              <Node className="-top-1.5 -right-1.5" />
              <Node className="-bottom-1.5 -left-1.5" />
              <Node className="-bottom-1.5 -right-1.5" />

              <Node className="-top-1.5 left-1/2 -translate-x-1/2" />
              <Node className="-bottom-1.5 left-1/2 -translate-x-1/2" />
              <Node className="-left-1.5 top-1/2 -translate-y-1/2" />
              <Node className="-right-1.5 top-1/2 -translate-y-1/2" />

              {/* Accent Arrow */}
              <svg
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-5 h-5 sm:w-6 sm:h-6 text-[#ccff00] drop-shadow-[0_0_8px_rgba(204,255,0,0.8)] z-40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2 2 L22 12 L12 22 Z" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Section End Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-24 pt-6 border-t border-white/10 flex items-center justify-between gap-4 text-white/50 font-mono text-[10px] xs:text-xs sm:text-sm tracking-wider uppercase"
        >
          <span className="text-[#ccff00] font-bold shrink-0">Janindu Jayasundara Portfolio 2026</span>
          <div className="flex-grow h-[1px] bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}