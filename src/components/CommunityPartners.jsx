import React, { useRef, useEffect } from 'react';
import { VintageCard } from '../Section/Tracks';
import { Users, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import apexLogo from '../assets/Community/apex.webp';
import lme from '../assets/Community/lastminuteengineering.webp';
import techtribe from '../assets/Community/techtribe.webp';
import noobuild from '../assets/Community/noobuild.webp';
import resourcio from '../assets/Community/resourcio.webp';
import ajinava from '../assets/Community/ajinavaedge.webp';
import kugj from '../assets/Community/kugj.webp';
import repository from '../assets/Community/repository.webp';
import techverse from '../assets/Community/techverse.webp';
import aizenera from '../assets/Community/aizenera.webp';
import studentspot from '../assets/Community/thestudentspot.webp';
import gdgoc from '../assets/Community/gdgoc.webp';
import techdevclub from '../assets/Community/techdevclub.webp';
import sourcifyin from '../assets/Community/sourcifyin.webp';
import elitecoders from '../assets/Community/elitecoders.webp';
import anonymouslegion from '../assets/Community/anonymouslegion.webp';
import ieee from '../assets/Community/ieee.webp';
import feimacm from '../assets/Community/fiemacm.webp';
import postman from '../assets/Community/postman.webp';
import startup4nation from '../assets/Community/startup4nation.webp';
import hackx from '../assets/Community/hackx.webp';
import samarthtmsl from '../assets/Community/samarthtmsl.webp';
import lncommunity from '../assets/Community/lncommunity.webp';
import techmastersindia from '../assets/Community/techmastersindia.webp';
import builderbase from '../assets/Community/builderbase.webp';
import brik from '../assets/Community/brik.webp';
import digitaldominators from '../assets/Community/digitaldominators.webp';
import magistics from '../assets/Community/magistics.webp';
import ascentcircle from '../assets/Community/ascentcircle.webp';
import ieistudentschapter from '../assets/Community/ieistudentschapter.webp';
import bytebrigade from '../assets/Community/bytebrigade.webp';
import acmtint from '../assets/Community/acmtint.webp';
import cyberonites from '../assets/Community/cyberonites.webp';

const CommunityPartners = () => {
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const isUserInteractingRef = useRef(false);
  
  const partners = [
    {
      name: 'LME',
      note: 'Streaming Partner',
      description: 'LastMinuteEngineering is a dedicated platform that helps engineering students excel in exams with Free resources, Concise Notes, MAKAUT PYQs, and smart topic-focused Suggestions.',
      logo: lme,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'TechTribe',
      note: 'Partner Community',
      description: 'Your one-stop community for tech, hackathons & projects. Get mentorship, collaborate & grow. Learn, build, win!',
      logo: techtribe,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Noobuild',
      note: 'Partner Community',
      description: 'A student-led, independent tech community with over 2,000 members, dedicated to fostering a strong coding culture in Eastern India and beyond.',
      logo: noobuild,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'GDGoC BCREC',
      note: 'Partner Community',
      description: 'Google Developer Groups on Campus BCREC is the renewed student-led community of learners enthusiastic about Google\'s developer ecosystem.',
      logo: gdgoc,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Resourcio Community',
      note: 'Partner Community',
      description: 'Are you ready to level up your tech skills and become a pro in programming languages, full stack web development, android development, AI/ML, cybersecurity, and web dev? 🤖💻🔒',
      logo: resourcio,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Ajinava edge',
      note: 'Partner Community',
      description: 'At Ajinava Edge, we believe in embracing the best global trends and technologies, and transforming them to create value for our own country.',
      logo: ajinava,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Kotlin User Group Jaipur',
      note: 'Partner Community',
      description: 'Kotlin User Group Jaipur is a developer-led community dedicated to promoting the Kotlin programming language and its applications across Android, backend, web, and multiplatform development.',
      logo: kugj,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Cyberonites',
      note: 'Partner Community',
      description: 'The Cyber Security Task Force (Community) at GLA University Mathura',
      logo: cyberonites,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'GDGoC GCELT',
      note: 'Partner Community',
      description: 'GDG on Campus GCELT at the Government College of Engineering and Leather Technology in Kolkata is a dynamic community for student developers.',
      logo: gdgoc,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Repository',
      note: 'Partner Community',
      description: 'Repository - A Hackathon-Focused Developer Community Repository is a student-led tech community built to empower the next generation of innovators, makers, and hackers at BPPIMT and beyond.',
      logo: repository,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'TechVerse',
      note: 'Partner Community',
      description: 'Join a cosmic community where developers, designers, and tech enthusiasts unite to build the future. Connect, learn, and create amazing projects together.',
      logo: techverse,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Aizenera',
      note: 'Partner Community',
      description: 'Join AiZenera shaping the future with AI',
      logo: aizenera,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'The Student Spot',
      note: 'Partner Community',
      description: 'Your One Stop Shop For All Things Tech 🎯 A vibrant community of 10000+ students & professionals 🤝 across India!',
      logo: studentspot,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Tech Dev Club ',
      note: 'Partner Community',
      description: 'Tech Dev Club is a global community for developers, designers, and tech enthusiasts.',
      logo: techdevclub,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'GDGoC GCECT',
      note: 'Partner Community',
      description: 'Google Developer Student Club for the college Government College of Engineering and Ceramic Technology.',
      logo: gdgoc,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Sourcify IN',
      note: 'Partner Community',
      description: 'Sourcify is a vibrant student community dedicated to empowering college students to reach their full potential.',
      logo: sourcifyin,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Elite Coders',
      note: 'Partner Community',
      description: 'We provide virtual internships exclusively for freshers, focused on real-world skills and portfolio development.',
      logo: elitecoders,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'GDGoC TMSL',
      note: 'Partner Community',
      description: 'GDG On-Campus Techno Main Salt Lake Students from all undergraduate or graduate programs interested in growing as a developer are welcome.',
      logo: gdgoc,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Anonymous Legion',
      note: 'Partner Community',
      description: 'Anonymous Legion, a vibrant tech community where students and alumni, now working in corporate environments, come together to explore the realms of technology, cybersecurity, and corporate awareness.',
      logo: anonymouslegion,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'IEEE Student Branch Calcutta University',
      note: 'Partner Community',
      description: 'IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.',
      logo: ieee,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'FIEM ACM Student Chapter',
      note: 'Partner Community',
      description: 'Official ACM Student Chapter of Future Institute of Engineering and Management.',
      logo: feimacm,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'GDGoC RCCIIT',
      note: 'Partner Community',
      description: 'We are a tech community trying to bridge the gap between students and technology, empowering the next generation of innovators. Join us 🤩',
      logo: gdgoc,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'GDGoC NSEC',
      note: 'Partner Community',
      description: 'GDG on Campus NSEC, in collaboration with Google Developer Groups, is bringing you Google Cloud Study Jams — a month-long, hands-on learning journey that will take you from cloud curious to cloud confident! ',
      logo: gdgoc,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Postman Community Kolkata',
      note: 'Partner Community',
      description: 'Welcome to the vibrant world of the Postman Community Kolkata – an API-focused community nestled in the "City of Joy," Kolkata!',
      logo: postman,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Startup4nation',
      note: 'Partner Community',
      description: 'At Startup Nation, we specialize in transforming innovative ideas into real-world solutions.',
      logo: startup4nation,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'HackX Community',
      note: 'Partner Community',
      description: 'HackX is a Tech community dedicated to empowering individuals in Web development, backend, cloud, and AI.',
      logo: hackx,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'GDGoC IIIT Ranchi',
      note: 'Partner Community',
      description: 'GDG on Campus Indian Institute of Information Technology - Ranchi, India is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation.',
      logo: gdgoc,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Samarth TMSL',
      note: 'Partner Community',
      description: 'SAMARTH, the educational society of Techno Main Salt Lake, founded in 2019.',
      logo: samarthtmsl,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'LNC Community',
      note: 'Partner Community',
      description: 'LNC Community is for innovators, coders, and creators passionate about hackathons and tech.',
      logo: lncommunity,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Tech Masters India',
      note: 'Partner Community',
      description: 'A community that helps students learn coding, build projects, and grow together.',
      logo: techmastersindia,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Builder Base',
      note: 'Partner Community',
      description: 'Web3 | Crypto | Hackathons | Internships |Dev Collabs | ZK Alpha | Airdrops | Welcome to The Builder Base - where ideas meet execution.',
      logo: builderbase,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Brik',
      note: 'Partner Community',
      description: 'BRIK is India’s invite-only, performance-first tech talent platform designed to connect the brightest student builders, developers, and early founders with leading industry partners.',
      logo: brik,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Digital Dominators',
      note: 'Partner Community',
      description: 'Welcome to Digital Dominators, where passionate innovators come together to explore the latest in tech.',
      logo: digitaldominators,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Magistics',
      note: 'Partner Community',
      description: 'MAGISTICS is a dynamic blend of brand, freelancing agency, and innovation-driven company.',
      logo: magistics,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'GDGoC IIIT Kalyani',
      note: 'Partner Community',
      description: 'Official page of Google Developer Student Club of IIIT Kalyani!',
      logo: gdgoc,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Ascent circle',
      note: 'Partner Community',
      description: 'The Ascent Circle is a 🌟 vibrant, inclusive student community where you can grow, learn, and succeed together!',
      logo: ascentcircle,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'IEI Students Chapter ECE',
      note: 'Partner Community',
      description: 'Academy of Technology 🎓 ECE Department 💡⚡COMPASSION || INNOVATION || TRUST.',
      logo: ieistudentschapter,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'Byte Brigade',
      note: 'Partner Community',
      description: '🚀 Non-profit student tech community. 💻 Hackathons | Team Building | Knowledge Sharing',
      logo: bytebrigade,
      location: 'India',
      comingSoon: false,
    },
    {
      name: 'ACM TINT',
      note: 'Partner Community',
      description: 'ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field\'s challenges.',
      logo: acmtint,
      location: 'India',
      comingSoon: false,
    },
  ];

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners, ...partners];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // Pause auto-scroll during manual interaction
      isUserInteractingRef.current = true;
      
      const scrollAmount = 600;
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

    const scrollSpeed = 3; // pixels per frame
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
                            {/* <div className="flex items-center gap-1.5">
                              <Calendar size={16} className="text-[#D4AF37]" />
                              <span className="font-medium">{partner.events} Events/Year</span>
                            </div> */}
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

        {/* <div className="mt-12 text-center">
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
        </div> */}
      </div>
    </section>
  );
};

export default CommunityPartners;
