import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video, Film, Edit } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing with smooth transitions, color correction, and audio enhancement',
      features: ['Multi-camera editing', 'Color grading', 'Audio mixing', 'Motion graphics']
    },
    {
      icon: Film,
      title: 'Motion Graphics',
      description: 'Dynamic animations, titles, and visual effects to elevate your content',
      features: ['Title animations', 'Logo reveals', 'Lower thirds', 'Visual effects']
    },
    {
      icon: Edit,
      title: 'Short Form Content',
      description: 'Social media optimized edits for Instagram, TikTok, and YouTube Shorts',
      features: ['Vertical editing', 'Trend adaptation', 'Quick cuts', 'Engaging hooks']
    },
    
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-95"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0E1E40] mb-3 sm:mb-4 font-chewy">Services</h2>
          <p className="text-lg sm:text-xl text-[#1C5FB7] mb-6 sm:mb-8 font-montserrat">Comprehensive creative solutions for all your visual needs</p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#0E1E40] to-[#1C5FB7] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="group relative"
            >
              {/* Curved container inspired by logo */}
              <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-[#0E1E40] border-opacity-20 hover:border-opacity-40 transition-all duration-500 h-full relative overflow-hidden">
                {/* Decorative arc */}
                <div className="absolute -top-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 border-4 border-[#0E1E40] border-opacity-20 rounded-full border-dashed group-hover:rotate-180 transition-transform duration-700"></div>
                
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#0E1E40] to-[#1C5FB7] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0E1E40] mb-2 sm:mb-3 md:mb-4 font-fredoka">{service.title}</h3>
                <p className="text-[#1C5FB7] mb-3 sm:mb-4 md:mb-6 leading-relaxed font-montserrat text-xs sm:text-sm md:text-base">{service.description}</p>

                {/* Features */}
                <ul className="space-y-1 sm:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      className="flex items-center text-[#1C5FB7] text-xs sm:text-sm font-concert"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#0E1E40] to-[#1C5FB7] rounded-full mr-2 sm:mr-3"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-10 sm:mt-16"
        >
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#0E1E40] to-[#1C5FB7] rounded-full text-white font-bold text-lg sm:text-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;