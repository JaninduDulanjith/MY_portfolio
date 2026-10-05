import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const educationItems = [
  {
    title: 'Bachelor of Science (Hons) in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    badge: 'BSc (Hons) Degree',
    period: '2021 – Present'
  },
  {
    title: 'GCE Advanced Level (18)',
    institution: 'Mahinda College Galle',
    indexNo: '1892972',
    badge: 'A/L Completed',
    period: '2018 – 2020'
  },
  {
    title: 'GCE Ordinary Level (2017)',
    institution: 'Mahinda College Galle',
    indexNo: '71256709',
    badge: 'O/L Completed',
    period: '2007 – 2017'
  },
  {
    title: 'British Council English Qualification',
    institution: 'CMV Upper Sec Int 1 - Term 1 (2018 English Course)',
    badge: 'Certificate',
    period: '2018'
  }
];

const volunteeringItems = [
  {
    organization: 'AIESEC in SLIIT',
    role: 'Member',
    focus: 'Incoming Global Volunteer',
    duration: '2022 – 2023',
    badge: 'Global Volunteering'
  }
];

const extracurricularItems = [
  {
    title: 'Swimming',
    details: [
      'SLIIT Colours Award (2025)',
      'Swimming Provincial Achievements (2014 – 2019)'
    ],
    badge: 'Aquatic Sports'
  },
  {
    title: 'Life Saving',
    details: [
      'International Life Saving Surf Lifeguard Certification'
    ],
    badge: 'Surf Lifeguard'
  },
  {
    title: 'Kayodan Martial Arts',
    details: [
      'Provincial Achievements & Black Belt (2013 – 2015)'
    ],
    badge: 'Martial Arts'
  }
];

const workExperiences = [
  {
    role: 'Social Media Manager & Graphic Designer',
    company: 'SKECH Creations',
    duration: 'JULY 2026 – Present',
    details: [
      'Manage social media content and maintain a consistent brand presence.',
      'Design creative social media posts, flyers, banners, and promotional materials.',
      'Create engaging captions and content for products, services, offers, and campaigns.',
      'Develop content strategies to improve engagement, reach, and brand awareness.',
      'Coordinate with clients to deliver creative content aligned with their business goals.'
    ]
  },
  {
    role: 'Intern UI/UX Designer',
    company: 'Gamage Recruiters',
    duration: '6 Months',
    details: [
      'Designed user-friendly web and mobile interfaces.',
      'Created wireframes, user flows, mockups, and interactive prototypes using Figma.',
      'Developed responsive designs for desktop, tablet, and mobile devices.',
      'Collaborated with developers and team members to deliver effective UI/UX solutions.',
      'Improved designs based on feedback while maintaining usability and visual consistency.'
    ]
  },
  {
    role: 'Intern Digital Assistant',
    company: 'Commercial Bank',
    duration: '1 Year',
    details: [
      'Supported daily digital banking operations and customer services.',
      'Assisted customers with online and mobile banking services.',
      'Handled data entry, documentation, and record management.',
      'Supported the team in delivering accurate and efficient banking services.',
      'Developed strong communication, teamwork, and problem-solving skills.'
    ]
  }
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative w-full min-h-screen bg-[#0a0a0a] py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col justify-center font-sans selection:bg-[#ccff00] selection:text-black"
    >
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

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
            <span>02. Qualifications &amp; Background</span>
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase leading-none">
            Work Experience <span className="text-white/35">&amp; Education</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 sm:gap-10">
          {/* 01. Work Experience Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-[#0e0e0e]/95 backdrop-blur-sm border border-white/10 hover:border-[#ccff00]/40 transition-all duration-300 rounded-2xl xs:rounded-3xl p-6 xs:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative"
          >
            <h3 className="text-[#ccff00] font-display font-extrabold text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 uppercase tracking-widest flex items-center gap-2.5">
              <span className="text-white/40 font-mono text-xs font-bold">01.</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ccff00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              WORK EXPERIENCE
            </h3>

            {/* Continuous Vertical Timeline Line */}
            <div className="relative pl-6 sm:pl-8 space-y-7 sm:space-y-9 border-l-2 border-white/10">
              {workExperiences.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Node Dot perfectly centered on 2px border */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0a0a0a] border-2 border-[#ccff00] group-hover:bg-[#ccff00] shadow-[0_0_10px_#ccff00] group-hover:scale-125 transition-all duration-300" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                    <h4 className="text-white text-base sm:text-lg md:text-xl font-display font-extrabold leading-snug group-hover:text-[#ccff00] transition-colors">
                      {item.role}
                    </h4>
                    <span className="self-start sm:self-auto text-[11px] sm:text-xs font-mono font-bold text-[#ccff00] bg-[#1c2800] px-3 py-0.5 rounded-full border border-[#ccff00]/40 whitespace-nowrap">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-white/85 text-xs sm:text-sm font-sans font-semibold mt-1 mb-2">
                    {item.company}
                  </p>

                  {item.details && (
                    <ul className="space-y-1.5 mt-2">
                      {item.details.map((point, idx) => (
                        <li key={idx} className="text-white/80 text-xs sm:text-sm font-sans flex items-start gap-2 leading-relaxed">
                          <span className="text-[#ccff00] text-xs font-bold shrink-0 mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 02. Education Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-[#0e0e0e]/95 backdrop-blur-sm border border-white/10 hover:border-[#ccff00]/40 transition-all duration-300 rounded-2xl xs:rounded-3xl p-6 xs:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative"
          >
            <h3 className="text-[#ccff00] font-display font-extrabold text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 uppercase tracking-widest flex items-center gap-2.5">
              <span className="text-white/40 font-mono text-xs font-bold">02.</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ccff00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              EDUCATION
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {educationItems.map((item, index) => (
                <div
                  key={index}
                  className="relative p-5 bg-[#121212] border border-white/10 hover:border-[#ccff00]/50 rounded-2xl transition-all duration-300 flex flex-col justify-between group shadow-md"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block text-[11px] sm:text-xs font-mono font-bold text-[#ccff00] bg-[#1c2800] px-2.5 py-0.5 rounded-full border border-[#ccff00]/40">
                        {item.badge}
                      </span>
                      {item.period && (
                        <span className="text-[11px] text-white/50 font-mono">
                          {item.period}
                        </span>
                      )}
                    </div>
                    <h4 className="text-white text-sm sm:text-base md:text-lg font-display font-extrabold leading-snug group-hover:text-[#ccff00] transition-colors pt-1">
                      {item.title}
                    </h4>
                    <p className="text-white/80 text-xs sm:text-sm font-sans font-medium">
                      {item.institution}
                    </p>
                  </div>

                  {item.indexNo && (
                    <div className="mt-3 pt-2.5 border-t border-white/10 text-white/50 text-[11px] sm:text-xs font-mono tracking-wider">
                      Index No: <span className="text-white/80 font-bold">{item.indexNo}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 03. Volunteering Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="bg-[#0e0e0e]/95 backdrop-blur-sm border border-white/10 hover:border-[#ccff00]/40 transition-all duration-300 rounded-2xl xs:rounded-3xl p-6 xs:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative"
          >
            <h3 className="text-[#ccff00] font-display font-extrabold text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 uppercase tracking-widest flex items-center gap-2.5">
              <span className="text-white/40 font-mono text-xs font-bold">03.</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ccff00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              VOLUNTEERING
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10">
              {volunteeringItems.map((item, index) => (
                <div key={index} className="relative group">
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0a0a0a] border-2 border-[#ccff00] group-hover:bg-[#ccff00] shadow-[0_0_10px_#ccff00] group-hover:scale-125 transition-all duration-300" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                    <h4 className="text-white text-base sm:text-lg md:text-xl font-display font-extrabold leading-snug group-hover:text-[#ccff00] transition-colors">
                      {item.organization}
                    </h4>
                    <span className="self-start sm:self-auto text-[11px] sm:text-xs font-mono font-bold text-[#ccff00] bg-[#1c2800] px-3 py-0.5 rounded-full border border-[#ccff00]/40">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-white/85 text-xs sm:text-sm font-sans font-semibold mt-1">
                    {item.role} &mdash; <span className="text-[#ccff00]">{item.focus}</span>
                  </p>

                  <div className="mt-2.5">
                    <span className="inline-block text-[11px] font-mono font-bold text-white/70 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 04. Extracurricular Activities Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="bg-[#0e0e0e]/95 backdrop-blur-sm border border-white/10 hover:border-[#ccff00]/40 transition-all duration-300 rounded-2xl xs:rounded-3xl p-6 xs:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative"
          >
            <h3 className="text-[#ccff00] font-display font-extrabold text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 uppercase tracking-widest flex items-center gap-2.5">
              <span className="text-white/40 font-mono text-xs font-bold">04.</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ccff00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
              EXTRACURRICULAR ACTIVITIES
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {extracurricularItems.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-[#121212] border border-white/10 hover:border-[#ccff00]/50 rounded-2xl transition-all duration-300 flex flex-col justify-between group shadow-md"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="inline-block text-[11px] font-mono font-bold text-[#ccff00] bg-[#1c2800] px-2.5 py-0.5 rounded-full border border-[#ccff00]/40">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-white text-base sm:text-lg font-display font-extrabold leading-snug group-hover:text-[#ccff00] transition-colors pt-1">
                      {item.title}
                    </h4>
                    <ul className="space-y-1.5 pt-2 border-t border-white/10 mt-2.5">
                      {item.details.map((point, idx) => (
                        <li key={idx} className="text-white/80 text-xs sm:text-sm font-sans flex items-start gap-1.5 leading-relaxed">
                          <span className="text-[#ccff00] font-bold shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 05. Software & Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="bg-[#0e0e0e]/95 backdrop-blur-sm border border-white/10 rounded-2xl xs:rounded-3xl p-6 xs:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-6 sm:mb-8">
              <h3 className="text-[#ccff00] font-display font-extrabold text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest flex items-center gap-2.5">
                <span className="text-white/40 font-mono text-xs font-bold">05.</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#ccff00] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 17 22 12" />
                </svg>
                DESIGN SOFTWARE &amp; PROFICIENCY
              </h3>
              <span className="text-[11px] sm:text-xs text-white/60 font-mono tracking-wider">Tools &amp; software used in design workflow</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {[
                {
                  name: 'Figma',
                  category: 'UI/UX & Prototyping',
                  level: 'Advanced',
                  description: 'Wireframing, High-Fidelity UI, Micro-Interactions, Component Systems',
                  icon: (
                    <div className="w-9 h-9 flex items-center justify-center">
                      <svg className="h-8 w-auto max-w-full" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
                        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                      </svg>
                    </div>
                  )
                },
                {
                  name: 'Canva',
                  category: 'Graphic & Social Media',
                  level: 'Proficient',
                  description: 'Social Media Banners, Marketing Creatives, Promotional Layouts',
                  icon: (
                    <div className="w-9 h-9 flex items-center justify-center">
                      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="48" fill="url(#canva-grad-exp)" />
                        <path d="M62 38C58 33 50 33 43 37C34 42 30 52 33 61C36 70 45 74 54 71C60 69 64 64 66 59" stroke="white" strokeWidth="7" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="canva-grad-exp" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00C4CC" />
                            <stop offset="1" stopColor="#7D2AE8" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )
                },
                {
                  name: 'CapCut',
                  category: 'Video & Motion Content',
                  level: 'Skilled',
                  description: 'Short-Form Reels, Motion Transitions, Video Post-Production',
                  icon: (
                    <div className="w-9 h-9 flex items-center justify-center">
                      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" rx="22" fill="#111111" />
                        <rect x="3" y="3" width="94" height="94" rx="19" stroke="#ccff00" strokeWidth="4" opacity="0.8" />
                        <path d="M26 34H46M26 34V54M26 34L54 62" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M74 66H54M74 66V46M74 66L46 38" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )
                },
                {
                  name: 'Lightroom',
                  category: 'Photo & Color Editing',
                  level: 'Proficient',
                  description: 'Photo Retouching, Color Grading, Image Asset Preparation',
                  icon: (
                    <div className="w-9 h-9 flex items-center justify-center">
                      <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" rx="22" fill="#051929" />
                        <rect width="100" height="100" rx="22" stroke="#31A8FF" strokeWidth="5" />
                        <text x="22" y="66" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="42" fill="#31A8FF">L</text>
                        <text x="50" y="66" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="32" fill="#31A8FF">r</text>
                      </svg>
                    </div>
                  )
                }
              ].map((sw) => (
                <div
                  key={sw.name}
                  className="group relative bg-[#141414] hover:bg-[#181818] border border-white/10 hover:border-[#ccff00]/50 p-5 sm:p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform flex items-center justify-center">
                        {sw.icon}
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#ccff00] bg-[#1c2800] px-2.5 py-0.5 rounded-full border border-[#ccff00]/40">
                        {sw.level}
                      </span>
                    </div>
                    <h4 className="text-white text-lg sm:text-xl font-display font-extrabold group-hover:text-[#ccff00] transition-colors">
                      {sw.name}
                    </h4>
                    <p className="text-[#ccff00]/90 text-[11px] sm:text-xs font-mono font-medium mb-2 mt-0.5">
                      {sw.category}
                    </p>
                    <p className="text-white/80 text-xs sm:text-sm font-sans leading-relaxed font-normal">
                      {sw.description}
                    </p>
                  </div>
                </div>
              ))}
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