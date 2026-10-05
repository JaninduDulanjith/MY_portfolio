import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, ArrowUpRightIcon, FileTextIcon } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  category?: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Mobile Apps', href: '#projects', category: 'Mobile App Design' },
  { label: 'Web Apps', href: '#projects', category: 'Web Application Design' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeCategory, setActiveCategory] = useState<string>('Mobile App Design');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveredRef = useRef(false);
  const mobileMenuOpenRef = useRef(false);

  useEffect(() => {
    mobileMenuOpenRef.current = mobileMenuOpen;
    if (mobileMenuOpen) {
      setShowNavbar(true);
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleCategoryEvent = (e: CustomEvent<string>) => {
      if (e.detail) {
        setActiveCategory(e.detail);
      }
    };
    window.addEventListener('changeCategory' as any, handleCategoryEvent);
    return () => window.removeEventListener('changeCategory' as any, handleCategoryEvent);
  }, []);

  useEffect(() => {
    const resetTimer = () => {
      setShowNavbar(true);
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        if (!isHoveredRef.current && !mobileMenuOpenRef.current) {
          setShowNavbar(false);
        }
      }, 2500);
    };

    // Show navbar initially on mount
    resetTimer();

    const handleActivity = () => {
      resetTimer();
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('scroll', handleActivity, { passive: true });
    window.addEventListener('touchstart', handleActivity, { passive: true });
    window.addEventListener('touchmove', handleActivity, { passive: true });

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('touchmove', handleActivity);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('home');
      const heroHeight = heroElement ? heroElement.offsetHeight : window.innerHeight;
      
      setScrolled(window.scrollY > heroHeight - 150);

      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    setMobileMenuOpen(false);
    
    // If a category filter is specified, dispatch event to Projects component
    if (item.category) {
      setActiveCategory(item.category);
      window.dispatchEvent(
        new CustomEvent('changeCategory', { detail: item.category })
      );
    }

    const targetId = item.href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const isItemActive = (item: NavItem) => {
    const targetSection = item.href.substring(1);
    if (targetSection !== activeSection) return false;

    if (targetSection === 'projects') {
      if (item.category) {
        return activeCategory === item.category;
      }
      return true;
    }
    return true;
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    setShowNavbar(true);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!isHoveredRef.current && !mobileMenuOpenRef.current) {
        setShowNavbar(false);
      }
    }, 2000);
  };

  return (
    <AnimatePresence>
      {showNavbar && (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 xs:px-4 pt-3 md:pt-6 pointer-events-none">
          <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`pointer-events-auto w-full max-w-7xl h-16 rounded-full transition-all duration-300 border px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4 sm:gap-6 ${
              scrolled
                ? 'bg-[#08080a]/92 border-white/20 backdrop-blur-2xl shadow-[0_14px_45px_rgba(0,0,0,0.9)]'
                : 'bg-[#121216]/88 border-white/12 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.7)]'
            }`}
          >
            {/* Brand Logo & Avatar with Status Accent */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick({ label: 'Home', href: '#home' });
              }}
              className="flex items-center gap-3 group cursor-pointer shrink-0"
            >
              <div className="relative shrink-0">
                <div className="w-9 h-9 rounded-full bg-[#ccff00] flex items-center justify-center font-display font-black text-black text-xs tracking-tight group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(204,255,0,0.45)]">
                  JJ
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#ccff00] rounded-full border-2 border-[#0a0a0d] animate-pulse" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs sm:text-sm md:text-base font-display font-black text-white tracking-tight group-hover:text-[#ccff00] transition-colors leading-none whitespace-nowrap">
                  Janindu Jayasundara
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#ccff00]/90 tracking-widest uppercase mt-1 leading-none font-bold">
                  UI / UX Designer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Clean floating layout without middle borders) */}
            <div className="hidden md:flex items-center gap-1.5 shrink-0">
              {navItems.map((item) => {
                const isActive = isItemActive(item);

                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="relative px-4 lg:px-5 h-8.5 rounded-full text-xs font-display font-extrabold uppercase tracking-wider transition-colors duration-300 whitespace-nowrap flex items-center justify-center"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbarActiveTab"
                        className="absolute inset-0 bg-[#ccff00] rounded-full shadow-[0_0_18px_rgba(204,255,0,0.45)]"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? 'text-black font-black'
                          : 'text-white/75 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Action Buttons: CV & Let's Talk CTA */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a
                href="/Janindu_Jayasundara_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Janindu_Jayasundara_CV.pdf"
                className="group flex items-center justify-center gap-2 px-4 h-9.5 rounded-full border border-white/20 hover:border-[#ccff00]/70 text-white hover:text-[#ccff00] font-display font-extrabold text-xs uppercase tracking-wider transition-all duration-300 bg-white/5 hover:bg-[#ccff00]/15 shadow-sm whitespace-nowrap"
              >
                <FileTextIcon className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>CV</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick({ label: 'Contact', href: '#contact' });
                }}
                className="group flex items-center justify-center gap-2 px-5 sm:px-6 h-9.5 rounded-full bg-[#ccff00] text-black font-display font-black text-xs uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_24px_rgba(204,255,0,0.4)] hover:shadow-white/40 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
              >
                <span>Let's Talk</span>
                <ArrowUpRightIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 border border-white/12 text-white hover:text-[#ccff00] hover:bg-white/10 transition-all shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </motion.nav>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="pointer-events-auto absolute top-18 sm:top-20 left-3 right-3 xs:left-4 xs:right-4 bg-[#121216]/96 border border-white/15 rounded-3xl p-5 sm:p-6 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] md:hidden flex flex-col gap-3 max-h-[80vh] overflow-y-auto custom-scrollbar"
              >
                <div className="text-[10px] text-[#ccff00] font-mono font-bold tracking-widest uppercase mb-0.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
                  <span>Navigation Menu</span>
                </div>
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-[#ccff00]/10 hover:border-[#ccff00]/40 border border-white/5 text-left text-xs xs:text-sm font-display font-extrabold text-white hover:text-[#ccff00] transition-all"
                  >
                    <span className="tracking-wide">{item.label}</span>
                    <ArrowUpRightIcon className="w-4 h-4 text-white/40" />
                  </button>
                ))}
                
                <a
                  href="/Janindu_Jayasundara_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Janindu_Jayasundara_CV.pdf"
                  className="mt-1 w-full py-3.5 bg-white/10 hover:bg-[#ccff00]/20 border border-white/15 text-white hover:text-[#ccff00] font-display font-extrabold text-xs uppercase tracking-widest text-center rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <FileTextIcon className="w-4 h-4 text-[#ccff00]" />
                  <span>Download Full CV</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick({ label: 'Contact', href: '#contact' });
                  }}
                  className="w-full py-3.5 bg-[#ccff00] text-black font-display font-black text-xs uppercase tracking-widest text-center rounded-2xl shadow-[0_10px_30px_rgba(204,255,0,0.35)] hover:bg-white transition-all"
                >
                  Get In Touch
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      )}
    </AnimatePresence>
  );
}

