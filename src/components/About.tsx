import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video, Camera, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skills = [
    { icon: Video, title: 'Video Editing', description: 'Professional video editing with seamless transitions' },
    { icon: Camera, title: 'Photo Retouching', description: 'Advanced photo manipulation and enhancement' },
    { icon: Palette, title: 'Color Grading', description: 'Cinematic color correction and grading' },
    { icon: Zap, title: 'Motion Graphics', description: 'Dynamic animations and visual effects' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-95"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#0E1E40] mb-4 font-chewy">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0E1E40] to-[#1C5FB7] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="relative mb-8 flex justify-center lg:justify-start">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E1E40] to-[#1C5FB7] rounded-full p-1">
                  <div className="w-full h-full bg-[url('https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg')] bg-cover bg-center rounded-full"></div>
                </div>
                {/* Floating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                  className="absolute -inset-4 border-4 border-dashed border-[#0E1E40] border-opacity-30 rounded-full"
                ></motion.div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-[#0E1E40] mb-6 font-fredoka">Creative Visual Storyteller</h3>
            <p className="text-lg text-[#1C5FB7] mb-8 leading-relaxed font-montserrat">
              With over 5 years of experience in video editing and photo retouching, I specialize in bringing creative visions to life. 
              From wedding films to corporate videos, product photography to portrait retouching, I deliver high-quality results that 
              exceed expectations and tell compelling visual stories.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {['Adobe Premiere Pro', 'After Effects', 'Photoshop', 'DaVinci Resolve'].map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 bg-[#0E1E40] bg-opacity-20 backdrop-blur-sm rounded-full text-[#0E1E40] text-sm font-medium font-concert"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-3xl border border-[#0E1E40] border-opacity-20 hover:bg-opacity-100 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0E1E40] to-[#1C5FB7] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#0E1E40] mb-4 text-center font-archivo">{skill.title}</h4>
                <p className="text-[#1C5FB7] text-center font-montserrat">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;