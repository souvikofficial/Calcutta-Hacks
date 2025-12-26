import React from 'react';
import TiltedCard from '../components/ui/TiltedCard';
import soumojit from '../assets/Judge-mentors/soumojit.webp'
import amit from '../assets/Judge-mentors/amit.webp'
import roshan from '../assets/Judge-mentors/roshan.webp'
import abhirup from '../assets/Judge-mentors/abhirup.webp'

const Mentors = () => {
  const mentors = [
    {
      name: 'Soumojit Shome',
      role: 'Full‑Stack Engineer',
      badge: 'Web & Cloud',
      emoji: '🧑‍💻',
      imageSrc: soumojit,
      specialty: 'Co-Founder & System Engineer at LastMinuteEngineering',
      linkedin: 'https://www.linkedin.com/in/soumojit-shome/',
    },
    {
      name: 'Amit Barnwal',
      role: 'Commercial Manager',
      badge: 'Business Operations',
      emoji: '🤖',
      imageSrc: amit,
      specialty: 'Business Operations, Management & Expense Control',
      linkedin: 'https://www.linkedin.com/in/amit-barnwal-193402220/',
    },
    {
      name: 'Roshan Burnwal',
      role: 'Security Architect',
      badge: 'Cybersecurity',
      emoji: '🛡️',
      imageSrc: roshan,
      specialty: 'Founder CEO @ The DROP Organization',
      linkedin: 'https://www.linkedin.com/in/roshan-burnwal-ceo-of-drop/',
    },
    {
      name: 'Abhirup Banerjee',
      role: 'Blockchain Developer',
      badge: 'Blockchain',
      emoji: '🎨',
      imageSrc: abhirup,
      specialty: 'Co-Founder @AXICOV',
      linkedin: 'https://www.linkedin.com/in/abhirup-banerjee-651537223/',
    },
  ];

  return (
    <section id="mentors" className="py-20 bg-[#ebdbb9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4">
            MENTORS
          </h2>
          <div className="w-32 h-1 bg-[#D4AF37] mx-auto"></div>
          <p className="font-serif text-xl text-[#6B4423] mt-6">
            Guiding your builds with real‑world expertise
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex justify-center group">
              <div className="relative">

                <div className="absolute inset-0 translate-y-4 translate-x-4 bg-[#3E2C1D]/20 blur-md rounded-lg transform transition-all duration-500 group-hover:translate-y-6 group-hover:translate-x-6"></div>

                <TiltedCard
                  imageSrc={mentor.imageSrc}
                  altText={mentor.name}
                  captionText={mentor.name}
                  containerHeight="420px"
                  containerWidth="100%"
                  imageHeight="380px"
                  imageWidth="280px"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="w-[280px] h-[380px] flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-[15px]">
                      <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-[#D4AF37] text-[#3E2C1D] text-xs font-bold rounded-full shadow-lg">
                            {mentor.badge}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-[#F4E5C2] mb-1 drop-shadow-md">
                          {mentor.name}
                        </h3>
                        <p className="font-serif text-[#D4AF37] mb-2 font-medium">{mentor.role}</p>
                        <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {mentor.specialty}
                        </p>
                        <a
                          href={mentor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#F4E5C2] hover:text-[#D4AF37] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="mr-2 font-bold">Connect</span>
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
