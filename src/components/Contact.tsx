import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedinIcon
} from 'lucide-react';
export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };
  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full bg-[#0a0a0a] py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 flex items-center selection:bg-[#ccff00] selection:text-black"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-6"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight uppercase leading-none">
            Let's <span className="text-white/35">Talk</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:gap-12 lg:gap-20 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed font-sans font-normal">
              Have a project in mind? Let's collaborate and create something
              extraordinary together.
            </p>

            <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
              {/* Email */}
              <a
                href="mailto:janindujayasundara@gmail.com"
                className="flex items-center gap-3.5 sm:gap-4 text-white/90 hover:text-[#ccff00] transition-colors duration-300 group"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 border border-white/20 group-hover:border-[#ccff00] group-hover:bg-[#ccff00]/10 flex items-center justify-center transition-all duration-300 rounded-xl sm:rounded-2xl shrink-0">
                  <MailIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#ccff00]" />
                </div>
                <span className="text-base xs:text-lg sm:text-xl font-sans font-semibold truncate">janindujayasundara@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:0773452767"
                className="flex items-center gap-3.5 sm:gap-4 text-white/90 hover:text-[#ccff00] transition-colors duration-300 group"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 border border-white/20 group-hover:border-[#ccff00] group-hover:bg-[#ccff00]/10 flex items-center justify-center transition-all duration-300 rounded-xl sm:rounded-2xl shrink-0">
                  <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#ccff00]" />
                </div>
                <span className="text-base xs:text-lg sm:text-xl font-sans font-semibold">0773452767</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 sm:gap-4 text-white/90 group">
                <div className="w-11 h-11 sm:w-14 sm:h-14 border border-white/20 flex items-center justify-center transition-all duration-300 rounded-xl sm:rounded-2xl shrink-0">
                  <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#ccff00]" />
                </div>
                <span className="text-base xs:text-lg sm:text-xl font-sans font-semibold">Galle / Malabe, Sri Lanka</span>
              </div>

              {/* Social Buttons: LinkedIn & Behance */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/janindu-dulanjith-jayasundara-867966269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-3 xs:px-7 xs:py-4 border border-white/20 hover:border-[#ccff00] hover:bg-[#ccff00] flex items-center gap-3 text-white hover:text-black transition-all duration-300 rounded-full font-display font-bold text-xs xs:text-sm sm:text-base uppercase tracking-wider group shadow-md"
                >
                  <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#ccff00] group-hover:text-black transition-colors" />
                  <span>LinkedIn</span>
                </motion.a>

                {/* Behance */}
                <motion.a
                  href="https://www.behance.net/janindudulanji"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-3 xs:px-7 xs:py-4 border border-white/20 hover:border-[#ccff00] hover:bg-[#ccff00] flex items-center gap-3 text-white hover:text-black transition-all duration-300 rounded-full font-display font-bold text-xs xs:text-sm sm:text-base uppercase tracking-wider group shadow-md"
                >
                  <span className="text-base sm:text-lg font-black text-[#ccff00] group-hover:text-black transition-colors leading-none">Bē</span>
                  <span>Behance</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5 xs:space-y-6 bg-[#111111]/80 backdrop-blur-md border border-white/10 p-6 xs:p-9 md:p-11 rounded-2xl xs:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 focus:border-[#ccff00] text-white font-sans text-base xs:text-lg sm:text-xl py-3.5 sm:py-4 outline-none transition-colors duration-300 placeholder:text-white/40"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 focus:border-[#ccff00] text-white font-sans text-base xs:text-lg sm:text-xl py-3.5 sm:py-4 outline-none transition-colors duration-300 placeholder:text-white/40"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={5}
                className="w-full bg-transparent border-b border-white/20 focus:border-[#ccff00] text-white font-sans text-base xs:text-lg sm:text-xl py-3.5 sm:py-4 outline-none transition-colors duration-300 placeholder:text-white/40 resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 sm:px-14 py-4 sm:py-4.5 bg-[#ccff00] text-black font-display font-extrabold text-xs sm:text-sm md:text-base uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 shadow-[0_10px_25px_rgba(204,255,0,0.3)]"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left text-white/50 font-mono text-xs sm:text-sm tracking-wider"
        >
          <p className="text-[#ccff00] font-bold">Janindu Jayasundara Portfolio 2026</p>
          <p>© 2026 All rights reserved. Designed &amp; Developed with passion.</p>
        </motion.div>
      </div>
    </section>
  );
}