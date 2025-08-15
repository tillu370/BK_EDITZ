import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Camera, Palette, Zap, Sparkles } from 'lucide-react';

interface OnboardingScreenProps {
  onEnter: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onEnter }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLogo(true), 300);
    const timer2 = setTimeout(() => setShowText(true), 1500);
    const timer3 = setTimeout(() => setShowButton(true), 3000);
    const timer4 = setTimeout(() => setShowParticles(true), 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0E1E40] via-[#1C5FB7] to-[#0E1E40] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          animate={showParticles ? {
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1]
          } : {}}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

      {/* Multiple rotating rings */}
      <motion.div
        className="absolute inset-0 w-80 h-80 -top-40 -left-40"
        animate={showLogo ? { rotate: 360 } : {}}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      >
        <div className="w-full h-full border-4 border-white border-opacity-10 rounded-full border-dashed"></div>
      </motion.div>
      
      <motion.div
        className="absolute inset-0 w-64 h-64 -top-32 -left-32"
        animate={showLogo ? { rotate: -360 } : {}}
        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
      >
        <div className="w-full h-full border-3 border-white border-opacity-20 rounded-full border-dashed"></div>
      </motion.div>

      <motion.div
        className="absolute inset-0 w-48 h-48 -top-24 -left-24"
        animate={showLogo ? { rotate: 360 } : {}}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      >
        <div className="w-full h-full border-2 border-white border-opacity-30 rounded-full"></div>
      </motion.div>

      <div className="text-center relative z-10 px-2 sm:px-4">
        {/* Service icons floating around */}
        <motion.div
          className="absolute -top-20 -left-20"
          animate={showLogo ? { 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Camera className="w-8 h-8 text-white opacity-60" />
        </motion.div>

        <motion.div
          className="absolute -top-16 -right-16"
          animate={showLogo ? { 
            rotate: [0, -360],
            scale: [1, 1.3, 1]
          } : {}}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Palette className="w-8 h-8 text-white opacity-60" />
        </motion.div>

        <motion.div
          className="absolute -bottom-16 -left-16"
          animate={showLogo ? { 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          } : {}}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="w-8 h-8 text-white opacity-60" />
        </motion.div>

        <motion.div
          className="absolute -bottom-20 -right-20"
          animate={showLogo ? { 
            rotate: [0, -360],
            scale: [1, 1.4, 1]
          } : {}}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Play className="w-8 h-8 text-white opacity-60" />
        </motion.div>

        {/* Enhanced Logo with sparkles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={showLogo ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 sm:mb-8 relative"
        >
          <motion.div
            animate={showLogo ? { rotate: 360 } : {}}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="absolute inset-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 -top-1 -left-1 sm:-top-2 sm:-left-2 md:-top-3 md:-left-3 lg:-top-4 lg:-left-4"
          >
            <Sparkles className="w-full h-full text-white opacity-20" />
          </motion.div>
          
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-full flex items-center justify-center shadow-2xl border-2 sm:border-3 md:border-4 border-white border-opacity-30 relative overflow-hidden">
            <motion.div
              animate={showLogo ? { 
                background: ["linear-gradient(45deg, #0E1E40, #1C5FB7)", "linear-gradient(45deg, #1C5FB7, #0E1E40)"]
              } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 opacity-10"
            />
            <img 
              src="/logo.jpg" 
              alt="BK Edits Logo" 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover relative z-10 rounded-full"
            />
          </div>
        </motion.div>

        {/* Enhanced tagline with word-by-word animation */}
        <motion.div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={showText ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4 font-blackops px-2 sm:px-4"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={showText ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="inline-block"
            >
              BK Edits
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={showText ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-base sm:text-lg md:text-xl text-blue-100 mb-3 sm:mb-4 font-montserrat px-2 sm:px-4"
          >
            Professional Video & Photo Editing Services
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={showText ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-white opacity-80 px-2 sm:px-4"
          >
            <div className="flex items-center space-x-2">
              <Camera className="w-5 h-5" />
              <span className="font-montserrat text-sm">Video Editing</span>
            </div>
            <div className="flex items-center space-x-2">
              <Palette className="w-5 h-5" />
              <span className="font-montserrat text-sm">Color Grading</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span className="font-montserrat text-sm">Motion Graphics</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced enter button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={showButton ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 20px 40px rgba(28, 95, 183, 0.4)",
            background: "linear-gradient(45deg, #ffffff, #f0f8ff)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 bg-white text-[#0E1E40] rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-blackops relative overflow-hidden group mx-2 sm:mx-4"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <span className="relative z-10">Enter Portfolio</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default OnboardingScreen;