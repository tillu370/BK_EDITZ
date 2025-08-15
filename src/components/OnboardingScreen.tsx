import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';

interface OnboardingScreenProps {
  onEnter: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onEnter }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E1E40] via-[#14366E] to-[#1C5FB7]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle background accents */}
      <motion.div
        className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, -12, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, 10, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="w-full max-w-2xl mx-auto px-6">
        <motion.div
          className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] p-6 sm:p-8 md:p-10 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
        {/* Logo */}
        <motion.div
          className="mx-auto mb-6 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white/50 to-white/10 p-[3px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-white/5 backdrop-blur shadow-lg">
            <img
              src="/logo.jpg"
              alt="BK Edits Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Brand */}
        <motion.h1
          className="relative inline-block font-blackops text-white text-3xl sm:text-4xl md:text-5xl leading-tight"
          variants={fadeUp}
        >
          BK Edits
        </motion.h1>
        <motion.p
          className="font-montserrat text-blue-100 text-sm sm:text-base md:text-lg mt-2"
          variants={fadeUp}
        >
          Professional Video & Photo Editing Services
        </motion.p>

        {/* Feature chips */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {['Video Editing', 'Photo Retouching', 'Color Grading'].map((f) => (
            <motion.span
              key={f}
              className="px-3 py-1 rounded-full text-xs sm:text-sm font-montserrat text-white/90 bg-white/10 border border-white/15"
              variants={fadeUp}
            >
              {f}
            </motion.span>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="mt-8 flex items-center justify-center" variants={fadeUp}>
          <motion.button
            onClick={onEnter}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#0E1E40] font-semibold font-montserrat text-sm sm:text-base hover:bg-blue-50 transition-colors"
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Enter Portfolio
          </motion.button>
        </motion.div>

        {/* Social */}
        <div className="mt-6 flex items-center justify-center gap-5 text-white/80">
          <motion.a
            href="https://www.instagram.com/bk.edits01/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
            variants={fadeUp}
            whileHover={{ y: -2 }}
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@bk.edits01"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="YouTube"
            variants={fadeUp}
            whileHover={{ y: -2 }}
          >
            <Youtube className="w-5 h-5" />
          </motion.a>
        </div>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default OnboardingScreen;