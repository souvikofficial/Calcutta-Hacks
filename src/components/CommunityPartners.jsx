import React, { useRef, useEffect } from 'react';
import { VintageCard } from '../Section/Tracks';
import { Users, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import apexLogo from '../assets/Community/apex.webp';

const CommunityPartners = () => {
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const isUserInteractingRef = useRef(false);
  
  const partners = [
    {
      name: 'Apex Circle',
      note: 'Community Host',
      description: 'Bringing together developers and tech enthusiasts since 2018.',
      logo: apexLogo,
      location: 'Kolkata',
      events: 12,
      comingSoon: true,
    },
    {
      name: 'Local Devs',
      note: 'Meetups & Support',
      description: 'Monthly tech meetups and workshops for local developers.',
      icon: Users,
      location: 'Kolkata & Howrah',
      events: 24,
      comingSoon: true,
    },
    {
      name: 'University Clubs',
      note: 'Student Partners',
      description: 'Empowering the next generation of tech leaders.',
      icon: Users,
      location: 'Multiple Campuses',
      events: 8,
      comingSoon: true,
    },
  ];

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners, ...partners];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // Pause auto-scroll during manual interaction
      isUserInteractingRef.current = true;
      
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });

      // Resume auto-scroll after 2 seconds
      setTimeout(() => {
        isUserInteractingRef.current = false;
      }, 2000);
    }
  };

  // Circular auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 1; // pixels per frame
    let pauseTimeout;

    const autoScroll = () => {
      if (!isUserInteractingRef.current && container) {
        container.scrollLeft += scrollSpeed;

        // Reset scroll position for infinite loop
        const cardWidth = container.scrollWidth / 3; // Since we have 3 copies
        if (container.scrollLeft >= cardWidth) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll
    animationRef.current = requestAnimationFrame(autoScroll);

    // Pause on user interaction
    const handleInteractionStart = () => {
      isUserInteractingRef.current = true;
      clearTimeout(pauseTimeout);
    };

    const handleInteractionEnd = () => {
      clearTimeout(pauseTimeout);
      pauseTimeout = setTimeout(() => {
        isUserInteractingRef.current = false;
      }, 2000); // Resume after 2 seconds
    };

    container.addEventListener('mouseenter', handleInteractionStart);
    container.addEventListener('mouseleave', handleInteractionEnd);
    container.addEventListener('touchstart', handleInteractionStart);
    container.addEventListener('touchend', handleInteractionEnd);
    container.addEventListener('wheel', handleInteractionStart);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(pauseTimeout);
      container.removeEventListener('mouseenter', handleInteractionStart);
      container.removeEventListener('mouseleave', handleInteractionEnd);
      container.removeEventListener('touchstart', handleInteractionStart);
      container.removeEventListener('touchend', handleInteractionEnd);
      container.removeEventListener('wheel', handleInteractionStart);
    };
  }, []);

  return (
    <section 
      id="partners" 
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4">
            COMMUNITY PARTNERS
          </h2>
          <div className="w-32 h-1 bg-[#D4AF37] mx-auto"></div>
          <p className="font-serif text-xl text-[#6B4423] mt-6">
            Ecosystem collaborators supporting innovation
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 bg-[#3E2C1D] border-4 border-[#3E2C1D] text-[#F4E5C2] hover:bg-[#6B4423] hover:border-[#6B4423] transition-all duration-300 hidden md:flex items-center justify-center shadow-lg group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="group-hover:scale-110 transition-transform" size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 bg-[#3E2C1D] border-4 border-[#3E2C1D] text-[#F4E5C2] hover:bg-[#6B4423] hover:border-[#6B4423] transition-all duration-300 hidden md:flex items-center justify-center shadow-lg group"
            aria-label="Scroll right"
          >
            <ChevronRight className="group-hover:scale-110 transition-transform" size={24} />
          </button>

          {/* Scrollable Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 px-2 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'auto',
            }}
          >
            {duplicatedPartners.map((partner, index) => {
              const Icon = Users;
              
              return (
                <div key={`${partner.name}-${index}`} className="flex-shrink-0 w-full md:w-[450px]">
                  <VintageCard className="text-center hover:scale-[1.03] transform-gpu transition-all duration-300 relative flex flex-col min-h-[420px] overflow-hidden h-full">
                    {/* Logo Section at Top */}
                    <div className="bg-gradient-to-b from-[#3E2C1D] to-[#5d4b31] -mx-6 -mt-6 mb-6 py-12 px-6 relative overflow-hidden">
                      {/* Logo Circle */}
                      <div className="mx-auto w-24 h-24 rounded-full bg-[#F4E5C2] border-4 border-[#D4AF37] flex items-center justify-center text-[#3E2C1D] shadow-2xl transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                        {partner.logo && !partner.comingSoon ? (
                          <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <Icon size={36} strokeWidth={2.5} />
                        )}
                      </div>
                    </div>

                    {!partner.comingSoon ? (
                      <div className="flex flex-col flex-grow px-2 items-center">
                        {/* Partner Name */}
                        <div className="font-display text-3xl font-bold text-[#3E2C1D] mb-2 relative text-center">
                          {partner.name}
                          <div className="h-1 w-20 bg-[#D4AF37] mx-auto mt-2 hover:w-32 transition-all duration-500"></div>
                        </div>

                        {/* Note/Badge */}
                        <div className="inline-block px-4 py-1.5 mb-4 bg-[#D4AF37]/20 border-2 border-[#D4AF37]/40 rounded-sm">
                          <span className="font-serif text-[#6B4423] font-bold text-sm uppercase tracking-wide">
                            {partner.note}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="font-serif text-[#6B4423]/90 mb-6 text-base px-4 leading-relaxed flex-grow text-center max-w-lg">
                          {partner.description}
                        </p>

                        {/* Footer Info */}
                        <div className="w-full mt-auto py-2 border-t-2 border-[#3E2C1D]/10">
                          <div className="flex justify-center gap-6 text-sm font-serif text-[#6B4423] flex-wrap">
                            <div className="flex items-center gap-1.5">
                              <MapPin size={16} className="text-[#D4AF37]" />
                              <span className="font-medium">{partner.location}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar size={16} className="text-[#D4AF37]" />
                              <span className="font-medium">{partner.events} Events/Year</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col justify-center items-center flex-grow py-12">
                        {/* Coming Soon Badge */}
                        <div className="relative">
                          <div className="font-display text-3xl font-bold text-[#3E2C1D] mb-3 relative inline-block">
                            Coming Soon...
                            <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-2 hover:w-32 transition-all duration-500"></div>
                          </div>
                        </div>
                        
                        {/* Optional decorative text */}
                        <p className="font-serif text-[#6B4423]/70 text-sm mt-4 italic">
                          Stay tuned for exciting partnerships
                        </p>
                      </div>
                    )}
                  </VintageCard>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-serif text-[#6B4423] mb-4">
            Interested in becoming a community partner?
          </p>
          <a
            href="https://links.calcuttahacks.xyz/partner-with-us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#332518] text-[#F2E2C0] px-8 py-3 text-lg font-display font-bold border-4 border-[#332518] hover:bg-[#7D5B3D] hover:border-[#7D5B3D] transition-all duration-300"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners;
