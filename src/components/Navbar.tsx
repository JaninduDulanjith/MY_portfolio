import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, ArrowUpRightIcon } from 'lucide-react';

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
            className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-500 border ${
              scrolled
                ? 'bg-[#0a0a0a]/90 border-white/15 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5 px-4 sm:px-6 md:px-8'
                : 'bg-[#111111]/80 border-white/10 backdrop-blur-md py-3 px-4 sm:px-6 md:px-9'
            } flex items-center justify-between`}
          >
            {/* Brand Logo / Name */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick({ label: 'Home', href: '#home' });
              }}
              className="flex items-center gap-2 xs:gap-2.5 group cursor-pointer"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ccff00] flex items-center justify-center font-display font-black text-black text-[11px] sm:text-xs tracking-tight group-hover:scale-105 transition-transform duration-300 shadow-[0_0_12px_rgba(204,255,0,0.4)] shrink-0">
                JJ
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[11px] xs:text-xs sm:text-sm font-display font-extrabold text-white tracking-tight group-hover:text-[#ccff00] transition-colors leading-snug truncate max-w-[130px] xs:max-w-none">
                  Janindu Jayasundara
                </span>
                <span className="text-[8px] xs:text-[9px] text-white/50 font-mono tracking-widest uppercase leading-none mt-0.5">
                  UI/UX Portfolio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-black/50 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = isItemActive(item);

                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="relative px-3.5 lg:px-4 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-colors duration-300"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbarActiveTab"
                        className="absolute inset-0 bg-[#ccff00] rounded-full shadow-[0_0_15px_rgba(204,255,0,0.35)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? 'text-black font-extrabold'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Hire / Contact CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick({ label: 'Contact', href: '#contact' });
                }}
                className="group flex items-center gap-2 px-4 lg:px-5 py-2 rounded-full bg-[#ccff00] text-black font-display font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(204,255,0,0.25)] hover:shadow-white/20"
              >
                <span>Let's Talk</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#ccff00] transition-colors"
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
                className="pointer-events-auto absolute top-16 sm:top-20 left-3 right-3 xs:left-4 xs:right-4 bg-[#121212]/95 border border-white/15 rounded-2xl xs:rounded-3xl p-4 sm:p-6 backdrop-blur-2xl shadow-2xl md:hidden flex flex-col gap-2.5 max-h-[80vh] overflow-y-auto custom-scrollbar"
              >
                <div className="text-[10px] text-[#ccff00] font-mono tracking-widest uppercase mb-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-ping" />
                  Navigation Menu
                </div>
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="flex items-center justify-between p-3 xs:p-3.5 rounded-xl xs:rounded-2xl bg-white/5 hover:bg-[#ccff00]/10 hover:border-[#ccff00]/40 border border-white/5 text-left text-xs xs:text-sm font-display font-bold text-white hover:text-[#ccff00] transition-all"
                  >
                    <span className="tracking-wide">{item.label}</span>
                    <ArrowUpRightIcon className="w-4 h-4 text-white/40" />
                  </button>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick({ label: 'Contact', href: '#contact' });
                  }}
                  className="mt-1 w-full py-3 sm:py-3.5 bg-[#ccff00] text-black font-display font-extrabold text-xs uppercase tracking-widest text-center rounded-xl xs:rounded-2xl shadow-lg"
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

