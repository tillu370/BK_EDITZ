import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OnboardingScreen from './components/OnboardingScreen';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleEnterPortfolio = () => {
    setShowOnboarding(false);
  };

  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {showOnboarding ? (
          <OnboardingScreen key="onboarding" onEnter={handleEnterPortfolio} />
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation />
            <Hero />
            <Portfolio />
            <Services />
            <Testimonials />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;