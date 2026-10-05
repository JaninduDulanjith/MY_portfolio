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
          className="mb-6 sm:mb-10"
        >
          <div className="text-[#ccff00] font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
            <span>04. Get In Touch</span>
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase leading-none">
            Let's <span className="text-white/35">Talk</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-7"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-sans font-normal">
              Have a project in mind? Let's collaborate and create something
              extraordinary together.
            </p>

            <div className="space-y-3.5 sm:space-y-4 pt-2 sm:pt-3">
              {/* Email */}
              <a
                href="mailto:janindujayasundara@gmail.com"
                className="flex items-center gap-3.5 text-white/90 hover:text-[#ccff00] transition-colors duration-300 group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 border border-white/20 group-hover:border-[#ccff00] group-hover:bg-[#ccff00]/10 flex items-center justify-center transition-all duration-300 rounded-xl shrink-0">
                  <MailIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#ccff00]" />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-sans font-semibold truncate">janindujayasundara@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:0773452767"
                className="flex items-center gap-3.5 text-white/90 hover:text-[#ccff00] transition-colors duration-300 group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 border border-white/20 group-hover:border-[#ccff00] group-hover:bg-[#ccff00]/10 flex items-center justify-center transition-all duration-300 rounded-xl shrink-0">
                  <PhoneIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#ccff00]" />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-sans font-semibold">0773452767</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 text-white/90 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 border border-white/20 flex items-center justify-center transition-all duration-300 rounded-xl shrink-0">
                  <MapPinIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#ccff00]" />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-sans font-semibold">Galle / Malabe, Sri Lanka</span>
              </div>

              {/* Social Buttons: LinkedIn & Behance */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-5">
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/janindu-dulanjith-jayasundara-867966269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-3 border border-white/20 hover:border-[#ccff00] hover:bg-[#ccff00] flex items-center gap-2 text-white hover:text-black transition-all duration-300 rounded-full font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider group shadow-md"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#ccff00] group-hover:text-black transition-colors shrink-0" />
                  <span>LinkedIn</span>
                </motion.a>

                {/* Behance */}
                <motion.a
                  href="https://www.behance.net/janindudulanji"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-3 border border-white/20 hover:border-[#ccff00] hover:bg-[#ccff00] flex items-center gap-2 text-white hover:text-black transition-all duration-300 rounded-full font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider group shadow-md"
                >
                  <span className="w-4 h-4 flex items-center justify-center font-black text-xs text-[#ccff00] group-hover:text-black transition-colors leading-none shrink-0">Bē</span>
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
            className="space-y-4 xs:space-y-5 bg-[#111111]/80 backdrop-blur-md border border-white/10 p-5 xs:p-7 md:p-9 rounded-2xl xs:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 focus:border-[#ccff00] text-white font-sans text-xs xs:text-sm py-3 outline-none transition-colors duration-300 placeholder:text-white/40"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 focus:border-[#ccff00] text-white font-sans text-xs xs:text-sm py-3 outline-none transition-colors duration-300 placeholder:text-white/40"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-white/20 focus:border-[#ccff00] text-white font-sans text-xs xs:text-sm py-3 outline-none transition-colors duration-300 placeholder:text-white/40 resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 bg-[#ccff00] text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 shadow-[0_10px_25px_rgba(204,255,0,0.3)]"
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
          className="mt-14 sm:mt-20 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left text-white/50 font-mono text-xs sm:text-sm tracking-wider uppercase"
        >
          <p className="text-[#ccff00] font-bold">Janindu Jayasundara Portfolio 2026</p>
          <p>© 2026 All rights reserved. Designed &amp; Developed with passion.</p>
        </motion.div>
      </div>
    </section>
  );
}