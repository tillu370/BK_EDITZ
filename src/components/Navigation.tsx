import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu first
      setIsMobileMenuOpen(false);
      
      // Add a small delay to ensure menu closes before scrolling
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#0E1E40] to-[#1C5FB7] rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/logo.jpg" 
                alt="BK Edits Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[#0E1E40] font-bold text-lg sm:text-xl font-blackops">BK Edits</span>
          </div>

          {/* Navigation items */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#0E1E40] hover:text-[#1C5FB7] transition-colors duration-300 font-medium font-righteous"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#0E1E40] p-3 hover:bg-[#0E1E40] hover:text-white rounded-lg transition-colors duration-300 active:scale-95 touch-manipulation"
            aria-label="Toggle mobile menu"
            type="button"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#0E1E40]/20 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="w-full text-left text-[#0E1E40] hover:text-[#1C5FB7] active:text-[#1C5FB7] transition-colors duration-300 font-medium font-righteous text-lg py-4 px-4 hover:bg-[#0E1E40]/5 active:bg-[#0E1E40]/10 rounded-lg flex items-center justify-between touch-manipulation"
                  type="button"
                >
                  <span>{item.label}</span>
                  <div className="text-[#1C5FB7] opacity-60">
                    →
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;