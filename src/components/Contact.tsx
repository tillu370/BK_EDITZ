import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Instagram, Youtube, Twitter, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'video'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@bkedits.com',
      link: 'mailto:hello@bkedits.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Los Angeles, CA',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/bkedits',
      color: 'hover:text-pink-400'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: 'https://youtube.com/bkedits',
      color: 'hover:text-red-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/bkedits',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-95"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0E1E40] mb-3 sm:mb-4 font-chewy">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-[#1C5FB7] mb-4 sm:mb-6 md:mb-8 font-montserrat">Ready to start your next creative project?</p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#0E1E40] to-[#1C5FB7] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-[#0E1E40] border-opacity-20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#0E1E40] mb-4 sm:mb-6 font-fredoka">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[#0E1E40] text-xs sm:text-sm font-medium mb-1 sm:mb-2 font-montserrat">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-[#0E1E40] border-opacity-20 rounded-lg sm:rounded-xl text-[#0E1E40] placeholder-[#1C5FB7] focus:outline-none focus:border-opacity-40 transition-all duration-300 font-inter text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[#0E1E40] text-xs sm:text-sm font-medium mb-1 sm:mb-2 font-['Roboto']">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-[#0E1E40] border-opacity-20 rounded-lg sm:rounded-xl text-[#0E1E40] placeholder-[#1C5FB7] focus:outline-none focus:border-opacity-40 transition-all duration-300 font-['Roboto'] text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[#0E1E40] text-xs sm:text-sm font-medium mb-1 sm:mb-2 font-['Roboto']">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-[#0E1E40] border-opacity-20 rounded-lg sm:rounded-xl text-[#0E1E40] focus:outline-none focus:border-opacity-40 transition-all duration-300 font-['Roboto'] text-sm sm:text-base"
                  >
                    <option value="video" className="bg-[#0E1E40]">Video Editing</option>
                    <option value="photo" className="bg-[#0E1E40]">Photo Editing</option>
                    <option value="both" className="bg-[#0E1E40]">Both</option>
                    <option value="consultation" className="bg-[#0E1E40]">Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#0E1E40] text-xs sm:text-sm font-medium mb-1 sm:mb-2 font-['Roboto']">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-[#0E1E40] border-opacity-20 rounded-lg sm:rounded-xl text-[#0E1E40] placeholder-[#1C5FB7] focus:outline-none focus:border-opacity-40 transition-all duration-300 font-['Roboto'] text-sm sm:text-base"
                    placeholder="Project subject"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#0E1E40] text-xs sm:text-sm font-medium mb-1 sm:mb-2 font-['Roboto']">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-[#0E1E40] border-opacity-20 rounded-lg sm:rounded-xl text-[#0E1E40] placeholder-[#1C5FB7] focus:outline-none focus:border-opacity-40 transition-all duration-300 resize-none font-['Roboto'] text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
                className="w-full bg-[#0E1E40] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 font-['Poppins'] disabled:opacity-50"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info & social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact information */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0E1E40] mb-4 sm:mb-6 font-['Poppins']">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#0E1E40] border-opacity-20 hover:bg-opacity-100 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0E1E40] to-[#1C5FB7] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[#1C5FB7] text-xs sm:text-sm font-['Roboto']">{item.title}</p>
                      <p className="text-[#0E1E40] text-sm sm:text-base font-medium font-['Roboto']">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social media */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0E1E40] mb-4 sm:mb-6 font-['Poppins']">Follow My Work</h3>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-[#0E1E40] bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-[#0E1E40] hover:bg-opacity-30 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl sm:rounded-3xl p-4 sm:p-6 border border-[#0E1E40] border-opacity-20"
            >
              <h4 className="text-lg sm:text-xl font-bold text-[#0E1E40] mb-2 sm:mb-3 font-['Poppins']">Quick Response Guarantee</h4>
              <p className="text-sm sm:text-base text-[#1C5FB7] mb-3 sm:mb-4 font-['Roboto']">
                I typically respond to all inquiries within 2-4 hours during business days. 
                For urgent projects, don't hesitate to call directly.
              </p>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-['Roboto']">Currently available for new projects</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-[#0E1E40] border-opacity-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base text-[#1C5FB7] font-['Roboto']">
            © 2025 BK Edits & Photo Editor. Crafting cinematic stories, one frame at a time.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;