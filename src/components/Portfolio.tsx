import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Play, ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({});

  const toggleVideo = (videoId: number) => {
    setPlayingVideos(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  const portfolioItems = [
    // My Best - 4 videos
    {
      id: 1,
      title: 'My Best Video 1',
      category: 'mybest',
      type: 'My Best',
      thumbnail: '/video1.mp4',
      description: 'Your best video description here'
    },
    {
      id: 2,
      title: 'My Best Video 2',
      category: 'mybest',
      type: 'My Best',
      thumbnail: '/video2.mp4',
      description: 'Your best video description here'
    },
    {
      id: 3,
      title: 'My Best Video 3',
      category: 'mybest',
      type: 'My Best',
      thumbnail: '/video3.mp4', // Reusing existing images
      description: 'Your best video description here'
    },
    {
      id: 4,
      title: 'My Best Video 4',
      category: 'mybest',
      type: 'My Best',
      thumbnail: '/video4.mp4', // Reusing existing images
      description: 'Your best video description here'
    },
    // Recreations - 2 videos
    {
      id: 5,
      title: 'Recreation Video 1',
      category: 'recreations',
      type: 'Recreations',
      thumbnail: '/recreation1.mp4',
      description: 'Your recreation video description here'
    },
    {
      id: 6,
      title: 'Recreation Video 2',
      category: 'recreations',
      type: 'Recreations',
      thumbnail: '/recreation2.mp4',
      description: 'Your recreation video description here'
    },
    // Others - 1 video
    {
      id: 7,
      title: 'Other Video 1',
      category: 'others',
      type: 'Others',
      thumbnail: '/other1.mp4',
      description: 'Your other video description here'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'mybest', label: 'My Best' },
    { id: 'recreations', label: 'Recreations' },
    { id: 'others', label: 'Others' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  // Log for debugging
  useEffect(() => {
    console.log('Portfolio component mounted');
    console.log('Portfolio items:', portfolioItems);
  }, []);

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-white opacity-95"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0E1E40] mb-3 sm:mb-4 font-chewy">Portfolio</h2>
          <p className="text-lg sm:text-xl text-[#1C5FB7] mb-6 sm:mb-8 font-montserrat">Showcasing my latest creative projects</p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#0E1E40] to-[#1C5FB7] mx-auto rounded-full"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 font-righteous text-xs sm:text-sm md:text-base ${
                activeFilter === filter.id
                  ? 'bg-[#0E1E40] text-white shadow-lg'
                  : 'bg-[#0E1E40] bg-opacity-20 text-[#0E1E40] hover:bg-opacity-30'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white bg-opacity-90 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 shadow-md"
              >
                {/* Video */}
                <div className="relative w-full aspect-[9/16] overflow-hidden bg-gray-200">
                  <video 
                    ref={(el) => {
                      if (el) {
                        el.onloadedmetadata = () => {
                          console.log(`Video ${item.id} loaded:`, item.thumbnail);
                          setVideoLoaded(true);
                        };
                        el.onerror = (e) => {
                          console.error(`Video ${item.id} error:`, e, item.thumbnail);
                        };
                        el.onloadstart = () => {
                          console.log(`Video ${item.id} loading started:`, item.thumbnail);
                        };
                        if (playingVideos[item.id]) {
                          el.play().catch(err => console.error(`Play error for video ${item.id}:`, err));
                        } else {
                          el.pause();
                        }
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                    muted={!playingVideos[item.id]}
                    loop
                    playsInline
                    preload="metadata"
                    onClick={() => toggleVideo(item.id)}
                  >
                    <source src={item.thumbnail} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Fallback text if video doesn't load */}
                  {!videoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                      <div className="text-center text-gray-600">
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs">Loading video...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Play/Pause Overlay */}
                  <div 
                    className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                    onClick={() => toggleVideo(item.id)}
                  >
                    {playingVideos[item.id] ? (
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-[#1C5FB7] to-[#0E1E40] text-white text-xs sm:text-sm rounded-full font-['Roboto']">
                      {item.type}
                    </span>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E1E40] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-[#0E1E40] mb-1 sm:mb-2 font-fredoka">{item.title}</h3>
                  <p className="text-[#1C5FB7] text-xs sm:text-sm font-montserrat">{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-lg text-[#0E1E40]">No portfolio items found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;