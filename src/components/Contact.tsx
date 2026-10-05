import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedinIcon,
  CheckCircle2Icon,
  SendIcon,
  Loader2Icon,
  AlertCircleIcon
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/janindujayasundara@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`,
          _template: 'table'
        })
      });

      const result = await response.json();

      if (response.ok || result.success === 'true' || result.success === true) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      // Fallback to mailto link if API fetch encounters issues
      const mailtoUrl = `mailto:janindujayasundara@gmail.com?subject=${encodeURIComponent(
        `Portfolio Message from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#111111]/80 backdrop-blur-md border border-white/10 p-5 xs:p-7 md:p-9 rounded-2xl xs:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-14 h-14 bg-[#ccff00]/10 border border-[#ccff00] rounded-full flex items-center justify-center mx-auto text-[#ccff00]">
                  <CheckCircle2Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-extrabold text-white uppercase">
                  Message Sent!
                </h3>
                <p className="text-sm text-white/70 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out! Your message has been sent directly to{' '}
                  <span className="text-[#ccff00] font-semibold">janindujayasundara@gmail.com</span>. I will reply to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-display font-bold text-xs uppercase tracking-wider rounded-full transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5">
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-red-400 text-xs font-sans">
                    <AlertCircleIcon className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

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
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full sm:w-auto px-8 sm:px-10 py-3.5 bg-[#ccff00] text-black font-display font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 shadow-[0_10px_25px_rgba(204,255,0,0.3)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2Icon className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <SendIcon className="w-3.5 h-3.5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
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