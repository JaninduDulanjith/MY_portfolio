import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  ArrowUpRightIcon, 
  ChevronDownIcon, 
  ChevronUpIcon, 
  XIcon, 
  CheckCircle2Icon, 
  ExternalLinkIcon, 
  SparklesIcon, 
  MessageSquareIcon,
  SendIcon
} from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  image: string;
  tags: string[];
  category: 'Mobile App Design' | 'Web Application Design';
  subtitle?: string;
  overview?: string;
  keyFeatures?: string[];
  designProcess?: string[] | string;
  impact?: string;
  figmaUrl?: string;
  promptQuestion?: string;
}

const projects: ProjectItem[] = [
  // 📱 MOBILE APP DESIGNS
  {
    id: 'busease',
    title: 'BusEase – The Smart Bus Scheduler 🚍',
    client: 'Sri Lanka Public Transport App',
    image: '/busease.png',
    tags: ['Mobile App', 'UI/UX', 'Figma', 'Smart Navigation'],
    category: 'Mobile App Design',
    subtitle: 'Enhancing public transportation experience in Sri Lanka with real-time updates and smart navigation.',
    overview: 'Busease is a user-friendly mobile application designed to enhance the public transportation experience in Sri Lanka. With real-time updates, smart navigation, and seamless ticket booking, it helps commuters stay informed and travel efficiently.',
    keyFeatures: [
      'Real-Time Travel Updates – Stay informed about live traffic conditions, route changes, and public transport news.',
      'Schedules & Reservations – Easily check bus schedules, book seats, and view ticket prices.',
      'Smart Navigation – Get optimized routes, alternative travel options, and real-time tracking.',
      'Lost & Found – Report and retrieve lost items.',
      'User-Friendly Interface – Clean and intuitive design for smooth user experience.'
    ],
    designProcess: 'This UI/UX design was created using Figma, focusing on accessibility and simplicity. The visuals reflect a warm and inviting theme, ensuring clarity and ease of use for travelers.',
    impact: 'Busease aims to make daily commutes smoother by reducing uncertainty and optimizing travel plans. Whether you\'re a regular commuter or a traveler, this app simplifies your journey.',
    figmaUrl: 'https://www.figma.com',
    promptQuestion: 'Would you use Busease for your daily commute?'
  },
  {
    id: 'boardme',
    title: 'BoardMe – Workspace Booking App 🏢',
    client: 'Co-Working & Office Reservation',
    image: '/boardme.png',
    tags: ['Mobile App', 'UI/UX', 'Figma', 'Prototyping'],
    category: 'Mobile App Design',
    subtitle: 'Seamless workspace booking for professionals on the go!',
    overview: 'BoardMe is an innovative mobile app designed to help professionals and teams find and book co-working spaces and private offices effortlessly. With a user-friendly interface, personalized recommendations, and seamless booking options, BoardMe enhances productivity by simplifying workspace reservations.',
    keyFeatures: [
      'Smart Search – Filter workspaces based on budget, duration, and location preferences.',
      'Personalized Offers – Get exclusive membership deals and promotions.',
      'Wishlist & Bookings – Save favorite workspaces and manage reservations easily.',
      'Intuitive UI – Clean and modern design for a smooth user experience.'
    ],
    designProcess: [
      'Research & Wireframing – Understanding user needs and creating an intuitive layout.',
      'UI/UX Design – Aesthetic and functional design with a seamless flow.',
      'Prototyping – Interactive prototypes to refine user interactions.'
    ],
    impact: '📌 Designed with Figma | Focused on User Experience & Productivity',
    figmaUrl: 'https://www.figma.com',
    promptQuestion: 'Let us know your thoughts in the comments! 🚀'
  },
  {
    id: 'sneakverse',
    title: '⚡ SNEAKVERSE – Superhero Sneaker Experience',
    client: 'Nike × Marvel Mobile Store',
    image: '/sneakverse.png',
    tags: ['Mobile App', 'UI/UX', 'Figma', 'Cinematic UX', 'E-Commerce'],
    category: 'Mobile App Design',
    subtitle: 'Step into the universe where style meets superpowers! 🦸‍♂️✨',
    overview: 'SNEAKVERSE is a concept mobile shopping app that brings together the worlds of sneaker culture and superhero fandom. Designed for collectors and trendsetters, SNEAKVERSE lets users explore and buy exclusive Nike × Marvel inspired sneakers through a bold, cinematic, and intuitive interface. Each screen blends vibrant visuals, sleek product cards, and immersive layouts that make every user feel like they’re picking their next hero suit — one sneaker at a time.',
    keyFeatures: [
      'Hero-Themed Collections – Choose from limited-edition designs inspired by Iron Man, Hulk, Black Panther, and Rocket.',
      'Smooth Shopping Flow – Effortless product browsing, size selection, and checkout.',
      'Cinematic UI Design – Powerful visuals with character-inspired gradients and dynamic compositions.',
      'Smart Product Details – Integrated price, quantity, and rating display for a complete shopping experience.',
      'Interactive Prototype – Built with micro-interactions to enhance engagement and delight.'
    ],
    designProcess: [
      'Research & Ideation – Studied sneaker shopping trends and Marvel fan behavior to merge storytelling with retail UX.',
      'Wireframing – Structured clear navigation and card layouts for quick decision-making.',
      'UI/UX Design – Crafted bold, high-contrast visuals with color cues from each superhero.',
      'Prototyping & Testing – Animated flows in Figma to validate transitions and user delight.'
    ],
    impact: '📌 Designed in Figma & Canva | Focused on Cinematic UX & Superhero Aesthetics',
    figmaUrl: 'https://www.figma.com',
    promptQuestion: 'Drop your thoughts below! ⭐ Your feedback keeps the creativity flowing. 🚀'
  },
  {
    id: 'bloom',
    title: '🌿 Bloom – Flower & Plant Shop UI',
    client: 'Botanical E-Commerce Mobile App',
    image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=800&auto=format&fit=crop',
    tags: ['Mobile App', 'UI/UX', 'Dark Theme', 'Figma', 'Canva'],
    category: 'Mobile App Design',
    subtitle: 'Modern and elegant Flower & Plant Shop UI for greenery lovers.',
    overview: '"Bloom" is a modern and elegant Flower & Plant Shop UI designed to provide a seamless and visually appealing online shopping experience for plant lovers. This design enhances usability with a sleek, minimalistic dark theme that highlights the beauty of indoor plants.',
    keyFeatures: [
      'Homepage – A welcoming, visually rich landing page with featured collections.',
      'Category Page – Organizes plant varieties for easy navigation.',
      'Product Details Page – Detailed view with pricing and descriptions.',
      'Mobile & Tablet Responsive – Ensuring a smooth experience on all devices.',
      'Customer Reviews Section – Builds trust with real customer feedback.'
    ],
    designProcess: 'Designed in Figma & Canva with a dark botanical color scheme to contrast lush green imagery and create a serene shopping environment.',
    impact: '🌱 Crafted for plant lovers who seek an easy, aesthetically pleasing way to shop for greenery.',
    figmaUrl: 'https://www.figma.com',
    promptQuestion: 'Share your feedback on the Bloom Plant Shop UI! 🌿'
  },

  // 💻 WEB APPLICATION DESIGNS
  {
    id: 'telecom-dashboard',
    title: '📶 TeleCom Installation Cases Dashboard',
    client: 'Telecommunications Enterprise',
    image: '/telecom_dashboard.png',
    tags: ['Web App', 'Dashboard', 'UI/UX', 'Figma', 'Telecom'],
    category: 'Web Application Design',
    subtitle: 'A modern and intuitive installation case management dashboard designed for telecom admins.',
    overview: 'TeleCom Installation Cases Dashboard is a modern and intuitive installation case management dashboard designed for a telecommunications company. The goal of this project was to improve visibility, efficiency, and control for admins managing ongoing installation requests. The dashboard provides an at-a-glance overview of active cases, their statuses, priorities, and alerts, enabling seamless monitoring and better decision-making.',
    keyFeatures: [
      'Dashboard Overview – Displays Total Active Cases with visual KPIs & quick stats (Requested, Scheduled, In Progress, Completed, Needs Attention).',
      'Case Management Table – Case ID, customer details, status, due date, assigned team, and alerts with color-coded status badges.',
      'Smart Alerts & Priorities – Automatic highlighting of delayed (⛔) and high-priority cases with quick-action resolution buttons.',
      'Advanced Filters – Filter cases by status, customer, location, or priority with enhanced accessibility.'
    ],
    designProcess: [
      'Problem Statement & Objectives – Solved lack of centralized tracking tools causing delays, miscommunication, and low customer satisfaction.',
      'Minimal & Clean Layout – Prioritized clarity, readability, and structured data hierarchy.',
      'Color-Coded Status System – Primary Blue (#4C6EF5), Green (#4CAF50 Completed), Red (#F44336 Delayed), Dark Gray typography.',
      'Responsive Prototyping – Built high-fidelity mockups in Figma for desktop, tablet, and mobile interfaces.'
    ],
    impact: '📌 Role: UI/UX Designer | Duration: 3 Weeks (Aug 2025) | Tools: Figma, Adobe XD | Target Audience: Telecom admins, technicians & support teams',
    figmaUrl: 'https://www.figma.com',
    promptQuestion: 'What do you think of this Telecom Dashboard UX layout? Share your feedback! 🚀'
  },
  {
    id: 'learnova',
    title: '🎓 LEARNOVA – Online Learning Platform',
    client: 'EdTech Web Platform',
    image: '/learnova.png',
    tags: ['Web App', 'UI/UX', 'EdTech', 'Figma', 'Responsive'],
    category: 'Web Application Design',
    subtitle: 'Empowering learners to gain new skills anytime, anywhere! 💡',
    overview: 'LEARNOVA is a modern educational website designed to help students and professionals discover, learn, and master new skills through online courses. With an intuitive interface, engaging visuals, and seamless navigation, LEARNOVA connects learners with expert instructors and personalized learning experiences that make online education inspiring and accessible.',
    keyFeatures: [
      'Smart Search – Find courses instantly by category, skill level, or instructor.',
      'Explore Subjects – Browse curated topics like Science, Development, Business, and Psychology.',
      'Popular Courses – Highlight trending bootcamps and skill-based programs.',
      'Responsive Design – Fully optimized for mobile, tablet, and desktop learning.',
      'Engagement Tools – Newsletter signup and personalized offers to stay connected.'
    ],
    designProcess: [
      'Research & Wireframing – Understanding learner needs and designing clear navigation flows.',
      'UI/UX Design – A clean, modern interface focused on readability and accessibility.',
      'Prototyping & Testing – Built interactive prototypes in Figma to refine the user journey and micro-interactions.'
    ],
    impact: '📌 Designed in Figma | Tools: Figma, Adobe Illustrator, Photoshop | Focused on UX, Accessibility & Engagement',
    figmaUrl: 'https://www.figma.com',
    promptQuestion: 'Let us know your thoughts below! ⭐ Your feedback helps us make learning experiences even better. 🚀'
  },
  {
    id: 'cargoservice',
    title: '🚚 Cargo Service UI Design',
    client: 'Logistics & Shipping Web App',
    image: '/cargoservice.png',
    tags: ['Web App', 'UI/UX', 'Logistics', 'Figma', 'Canva'],
    category: 'Web Application Design',
    subtitle: 'Modern Cargo and Logistics Service website focused on a seamless and trustworthy user experience.',
    overview: 'This UI design is crafted for a modern Cargo and Logistics Service website, focused on delivering a seamless and trustworthy user experience for businesses and individuals looking to transport goods locally or internationally. The layout is clean, responsive, and designed to convert visitors into customers through engaging visuals and clear service information.',
    keyFeatures: [
      'Hero Section – Bold visuals and a clear CTA to showcase reliability and scale.',
      'Company Stats Section – Highlights deliveries, client count, and service coverage.',
      'Service Overview – Domestic Cargo, Freight Forwarding, and Warehousing.',
      'Client Testimonials – Builds trust through real customer feedback.',
      'Why Choose Us Section – Tracking, 24/7 support, and unique benefits.',
      'Latest News & Global Reach – World map with international warehouse locations.'
    ],
    designProcess: 'Created using Figma and Canva, prioritizing structured information architecture, real-time shipment tracking visuals, and high-conversion landing page layouts.',
    impact: '📌 Designed with Figma & Canva | Focused on User Experience & Productivity',
    figmaUrl: 'https://www.figma.com',
    promptQuestion: 'Let us know your thoughts in the comments! 🚀'
  },
  {
    id: 'kayels',
    title: '🌟 Kayel’s Clothing – Online Store Concept',
    client: 'Apparel & Fashion E-Commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    tags: ['Web App', 'UI/UX', 'Fashion', 'Figma', 'Photoshop'],
    category: 'Web Application Design',
    subtitle: 'Modern and minimalistic UI design concept for an online clothing store.',
    overview: 'This is a modern and minimalistic UI design concept for an online clothing store, focusing on a seamless and engaging shopping experience. The design is crafted with a clean aesthetic, intuitive navigation, and a visually appealing layout to enhance user experience.',
    keyFeatures: [
      'Homepage – Showcases featured products, promotions, and trendy outfits.',
      'Product Detail Page – Provides detailed information with high-quality images.',
      'Category Page – Well-structured product categories for easy navigation.',
      'Payment Page – Secure and user-friendly checkout process.',
      'Favorites Page – Allows users to save their preferred items for later.'
    ],
    designProcess: [
      'Brand & Concept Ideation – Designing visual branding and identity for Kayel’s Clothing.',
      'UI & Interaction Design – Creating high-contrast fashion product grids and payment flows.',
      'Asset Retouching & Mockups – Using Photoshop and Adobe XD for pixel-perfect presentation.'
    ],
    impact: '📌 Designed with Figma, Adobe XD & Photoshop | Focused on Seamless Fashion Shopping',
    figmaUrl: 'https://www.figma.com',
    promptQuestion: 'Let me know if you’d like to tweak anything! 😊'
  }
];

const categories = ['All', 'Mobile App Design', 'Web Application Design'];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });

  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  
  // Interactive comments state
  const [commentInput, setCommentInput] = useState('');
  const [commentsMap, setCommentsMap] = useState<Record<string, string[]>>({
    busease: [
      "Awesome concept! Real-time bus tracking in Sri Lanka will reduce so much commute anxiety.",
      "The warm theme and seat reservation feature look super clean and intuitive!"
    ],
    boardme: [
      "Sleek and efficient workspace finder! Booking private offices in seconds is a huge time saver.",
      "Love the filter UI by budget and duration."
    ],
    sneakverse: [
      "The superhero theme color palette for Iron Man and Black Panther is insane!",
      "Shoe shopping with Marvel vibes? Count me in! Super cinematic UI."
    ],
    learnova: [
      "Great EdTech platform layout! Clear navigation for discovering new skills.",
      "Love the course search and responsive subject categories."
    ],
    cargoservice: [
      "Very professional logistics UI! The company stats and global reach section build high trust.",
      "Clear call to actions and service breakdown."
    ],
    bloom: [
      "The dark theme botanic style makes the plant photography pop!",
      "Minimalistic and super aesthetic flower shop UI."
    ],
    kayels: [
      "Clean fashion e-commerce aesthetic! Intuitive checkout and favorites flow.",
      "Sleek product detail pages with high-res image focus."
    ],
    'telecom-dashboard': [
      "The color-coded case management table makes monitoring high-priority delayed requests effortless!",
      "Very clean data density and KPI overview widgets for telecom operations."
    ]
  });

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMore = filteredProjects.length > 6;

  const handleAddComment = (projectId: string) => {
    if (!commentInput.trim()) return;
    setCommentsMap(prev => ({
      ...prev,
      [projectId]: [...(prev[projectId] || []), commentInput.trim()]
    }));
    setCommentInput('');
  };

  useEffect(() => {
    const handleCategoryEvent = (e: CustomEvent<string>) => {
      if (e.detail) {
        setActiveCategory(e.detail);
        setShowAll(false);
      }
    };
    window.addEventListener('changeCategory' as any, handleCategoryEvent);
    return () => window.removeEventListener('changeCategory' as any, handleCategoryEvent);
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full bg-[#0a0a0a] py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vh] bg-[#ccff00] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[#ccff00] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-6 sm:mb-8"
        >
          <div>
            <div className="text-[#ccff00] font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
              <span>03. Portfolio Showcase</span>
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase leading-none">
              Selected <span className="text-white/35">Work</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className="relative px-3.5 py-1.5 sm:px-4.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-display font-bold uppercase tracking-wider transition-colors duration-300 border border-white/10 bg-[#121212] overflow-hidden"
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#ccff00]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeCategory === cat ? 'text-black font-extrabold' : 'text-white/75 hover:text-white'
                }`}>
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id || project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-[#111111]/80 border border-white/10 hover:border-[#ccff00]/50 transition-all duration-500 rounded-2xl xs:rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_15px_35px_rgba(204,255,0,0.1)] h-full"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-[#1a1a1a] aspect-[16/10] w-full shrink-0">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4 text-center">
                    <motion.div
                      className="w-11 h-11 sm:w-12 sm:h-12 bg-[#ccff00] rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      <ArrowUpRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </motion.div>
                    <span className="text-white text-[11px] sm:text-xs font-display font-bold tracking-widest uppercase bg-black/70 px-3.5 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                      View Project Details
                    </span>
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-5 xs:p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-[#ccff00] font-mono font-bold tracking-wider uppercase leading-snug">
                        {project.client}
                      </span>
                      <span className="text-[10px] text-white/60 font-mono tracking-wider uppercase bg-white/5 px-2 py-0.5 rounded-full shrink-0">
                        {project.category === 'Mobile App Design' ? 'Mobile App' : 'Web App'}
                      </span>
                    </div>
                    <h3 className="text-lg xs:text-xl md:text-xl font-display font-extrabold text-white group-hover:text-[#ccff00] transition-colors duration-300 line-clamp-2 leading-snug">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs sm:text-sm text-white/80 font-sans line-clamp-2 font-normal leading-relaxed pt-0.5">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/10 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 border border-white/10 text-white/70 rounded-full group-hover:border-white/20 group-hover:text-white/95 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            layout
            className="flex justify-center mt-12 sm:mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative flex items-center gap-2.5 xs:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#ccff00]/40 hover:border-[#ccff00] rounded-full text-xs sm:text-sm font-display font-extrabold uppercase tracking-widest text-[#ccff00] hover:text-black transition-all duration-300 overflow-hidden shadow-lg"
            >
              <span className="absolute inset-0 bg-[#ccff00] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              
              <span className="relative z-10 transition-colors duration-300">
                {showAll ? 'Show Less Work' : 'View More Work'}
              </span>
              
              <div className="relative z-10 transition-transform duration-300 group-hover:rotate-180">
                {showAll ? (
                  <ChevronUpIcon className="w-4 h-4 text-[#ccff00] group-hover:text-black transition-colors" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4 text-[#ccff00] group-hover:text-black transition-colors" />
                )}
              </div>
            </button>
          </motion.div>
        )}

        {/* Section End Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-12 pt-6 border-t border-white/10 flex items-center justify-between gap-4 text-white/50 font-mono text-[10px] xs:text-xs sm:text-sm tracking-wider uppercase"
        >
          <span className="text-[#ccff00] font-bold shrink-0">Janindu Jayasundara Portfolio 2026</span>
          <div className="flex-grow h-[1px] bg-white/10" />
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-[#141414] border border-white/15 rounded-2xl xs:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] my-auto text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 xs:top-4 xs:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 bg-black/70 hover:bg-[#ccff00] text-white hover:text-black rounded-full flex items-center justify-center transition-colors border border-white/10"
              >
                <XIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Cover Image Container */}
              <div className="relative w-full h-48 xs:h-56 sm:h-64 md:h-80 bg-[#1a1a1a]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[10px] xs:text-xs font-mono uppercase tracking-widest text-[#ccff00] bg-black/70 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#ccff00]/30 backdrop-blur-sm">
                      {selectedProject.client}
                    </span>
                    <h2 className="text-xl xs:text-2xl md:text-4xl font-display font-extrabold text-white mt-1.5 sm:mt-2 drop-shadow-md leading-tight">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-4 xs:p-6 md:p-8 space-y-4 xs:space-y-6 max-h-[55vh] sm:max-h-[60vh] overflow-y-auto custom-scrollbar">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 xs:gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] xs:text-xs font-mono px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/5 border border-white/10 rounded-full text-white/70">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Subtitle */}
                {selectedProject.subtitle && (
                  <p className="text-sm xs:text-base md:text-lg font-display font-semibold text-[#ccff00] leading-snug">
                    {selectedProject.subtitle}
                  </p>
                )}

                {/* Overview */}
                {selectedProject.overview && (
                  <div className="space-y-2">
                    <h4 className="text-[11px] xs:text-xs font-mono uppercase tracking-widest text-white/50 flex items-center gap-2">
                      <SparklesIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ccff00]" />
                      Project Overview
                    </h4>
                    <p className="text-xs xs:text-sm md:text-base font-sans text-white/85 leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </div>
                )}

                {/* Key Features */}
                {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                  <div className="space-y-2.5 xs:space-y-3 bg-[#1a1a1a] p-4 xs:p-5 md:p-6 rounded-xl xs:rounded-2xl border border-white/10">
                    <h4 className="text-[11px] xs:text-xs font-mono uppercase tracking-widest text-[#ccff00]">
                      🔹 Key Features
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.keyFeatures.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 xs:gap-3 text-xs md:text-sm font-sans text-white/85 leading-relaxed">
                          <CheckCircle2Icon className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Design & Process / Impact */}
                {selectedProject.designProcess && (
                  <div className="space-y-2">
                    <h4 className="text-[11px] xs:text-xs font-mono uppercase tracking-widest text-white/50">
                      🎨 Design Process &amp; Development
                    </h4>
                    {Array.isArray(selectedProject.designProcess) ? (
                      <ul className="list-disc list-inside space-y-1 text-xs md:text-sm font-sans text-white/85 leading-relaxed">
                        {selectedProject.designProcess.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs md:text-sm font-sans text-white/85 leading-relaxed">
                        {selectedProject.designProcess}
                      </p>
                    )}
                  </div>
                )}

                {/* Impact */}
                {selectedProject.impact && (
                  <div className="space-y-2 border-l-2 border-[#ccff00] pl-3 xs:pl-4 py-1">
                    <h4 className="text-[11px] xs:text-xs font-mono uppercase tracking-widest text-[#ccff00]">
                      💡 Impact &amp; Focus
                    </h4>
                    <p className="text-xs md:text-sm font-sans text-white/90 italic">
                      {selectedProject.impact}
                    </p>
                  </div>
                )}

                {/* Figma Prototype Callout */}
                <div className="pt-2 flex flex-col xs:flex-row gap-3 xs:gap-4 items-start xs:items-center justify-between">
                  <a
                    href={selectedProject.figmaUrl || "https://www.figma.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#ccff00] text-black font-display font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-colors shadow-md"
                  >
                    <span>Check Prototype on Figma</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <span className="text-[10px] xs:text-[11px] text-white/50 font-mono">
                    📌 Designed with Figma | Focused on UX &amp; Usability
                  </span>
                </div>

                {/* Interactive Comment / Feedback Section */}
                <div className="pt-4 sm:pt-6 border-t border-white/10 space-y-3 xs:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-[11px] xs:text-xs font-mono uppercase tracking-widest text-[#ccff00] flex items-center gap-2">
                      <MessageSquareIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Community Thoughts &amp; Feedback
                    </h4>
                    {selectedProject.promptQuestion && (
                      <span className="text-[11px] sm:text-xs text-white/60 italic font-sans">
                        {selectedProject.promptQuestion}
                      </span>
                    )}
                  </div>

                  {/* List of comments */}
                  <div className="space-y-2">
                    {(commentsMap[selectedProject.id] || []).map((comm, idx) => (
                      <div key={idx} className="p-2.5 xs:p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-white/90 font-sans leading-relaxed">
                        "{comm}"
                      </div>
                    ))}
                  </div>

                  {/* Comment Input */}
                  <div className="flex flex-col xs:flex-row gap-2">
                    <input
                      type="text"
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddComment(selectedProject.id)}
                      placeholder={selectedProject.promptQuestion || "Share your thoughts on this design..."}
                      className="flex-grow px-3.5 py-2 xs:px-4 xs:py-2.5 bg-[#1e1e1e] border border-white/10 rounded-xl text-xs text-white font-sans focus:outline-none focus:border-[#ccff00]"
                    />
                    <button
                      onClick={() => handleAddComment(selectedProject.id)}
                      className="px-4 py-2 xs:py-2.5 bg-[#ccff00] text-black rounded-xl hover:bg-white transition-colors flex items-center justify-center font-display font-bold text-xs uppercase"
                    >
                      <SendIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}