import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background - Responsive */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <img 
          src="/hero1.png" 
          alt="Hero Background Mobile"
          className="w-full h-full object-cover object-center md:hidden"
          style={{ minHeight: '100vh' }}
        />
        {/* Desktop Image */}
        <img 
          src="/hero.png" 
          alt="Hero Background Desktop"
          className="hidden md:block w-full h-full object-cover"
          style={{ 
            minHeight: '100vh',
            objectPosition: 'center 5%'
          }}
        />
      </div>


    </section>
  );
};

export default Hero;