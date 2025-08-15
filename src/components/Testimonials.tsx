import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Wedding Planner',
      company: 'Elegant Events',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5,
      text: 'BK Edits transformed our wedding videos into cinematic masterpieces. The attention to detail and creative vision exceeded all expectations. Every couple should experience this level of artistry.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'TechFlow Solutions',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      rating: 5,
      text: 'Professional, creative, and incredibly talented. Our product videos have never looked better. The color grading and motion graphics work is absolutely phenomenal.'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Fashion Photographer',
      company: 'Studio Luxe',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      rating: 5,
      text: 'The photo retouching services are top-notch. BK Edits understands how to enhance natural beauty while maintaining authenticity. Consistently outstanding results.'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Content Creator',
      company: 'Creative Studios',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 5,
      text: 'Fast turnaround, excellent communication, and incredible quality. My YouTube videos have never looked more professional. Highly recommend for any creative project.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-95"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0E1E40] mb-3 sm:mb-4 font-chewy">Client Reviews</h2>
          <p className="text-lg sm:text-xl text-[#1C5FB7] mb-6 sm:mb-8 font-montserrat">What clients say about working with BK Edits</p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#0E1E40] to-[#1C5FB7] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          {/* Main testimonial */}
          <div className="relative h-auto min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem] mb-4 sm:mb-6 md:mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="h-full bg-white bg-opacity-90 backdrop-blur-md rounded-2xl sm:rounded-3xl border-2 border-[#0E1E40] border-opacity-20 p-3 sm:p-5 md:p-8 flex flex-col justify-center relative overflow-hidden">
                  {/* Quote decoration */}
                  <Quote className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-6 md:left-6 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-[#0E1E40] opacity-20" />
                  <Quote className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-[#0E1E40] opacity-20 rotate-180" />
                  
                  {/* Content */}
                  <div className="text-center">
                    <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#0E1E40] mb-4 sm:mb-6 md:mb-8 leading-relaxed font-fredoka italic px-1 sm:px-2">
                      "{testimonials[currentIndex].text}"
                    </p>
                    
                    <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 sm:border-3 border-[#0E1E40] border-opacity-40">
                        <div 
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${testimonials[currentIndex].image})` }}
                        ></div>
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg sm:text-xl font-bold text-[#0E1E40] font-archivo">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-[#1C5FB7] text-sm sm:text-base font-concert">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-[#1C5FB7] text-xs sm:text-sm font-montserrat">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0E1E40] bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-[#0E1E40] hover:bg-opacity-30 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-[#0E1E40] scale-125' : 'bg-[#0E1E40] bg-opacity-30'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0E1E40] bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-[#0E1E40] hover:bg-opacity-30 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;