import '../App.css';
import abhishek from '../assets/Judge-mentors/abhishek.webp'
import devesh from '../assets/Judge-mentors/devesh.webp'
import hridam from '../assets/Judge-mentors/hridam.webp'
import anubhab from '../assets/Judge-mentors/anubhab.webp'
import purnangshu from '../assets/Judge-mentors/purnangshu.webp'
import avik from '../assets/Judge-mentors/avik.webp'

export const Card = ({ children, className = 'bg-[#e1d7c3] ' }) => (
  <div className={` border-4 border-[#3E2C1D] p-10 relative ${className}`}>
    <div className="absolute top-3 left-3 right-3 bottom-3 border-2 border-[#6B4423] opacity-30 pointer-events-none"></div>
    {children}
  </div>
);

const Judges = () => {
  const judges = [
    {
      name: 'Abhishek Mahto',
      role: 'Founder & CEO at NOMOEX & MBT Ventures',
      badge: 'Web3 & AI Investor',
      img_url: abhishek,
      linkedin: 'https://www.linkedin.com/in/abhishekmahto340/',
    },
    {
      name: 'Devesh Tulshyan',
      role: 'Systems Engineer',
      badge: 'Top 1% Global TryHackMe',
      img_url: devesh,
      linkedin: 'https://www.linkedin.com/in/devesh-tulshyan-b674421a2/',
    },
    {
      name: 'Hridam Basu',
      role: 'Founder & CTO at Rump Labs',
      badge: 'Cryptography Research Engineer',
      img_url: hridam,
      linkedin: 'https://www.linkedin.com/in/hridam-basu/',
    },
    {
      name: 'Anubhab Saha',
      role: 'Systems Engineer @ TCS-Prime',
      badge: 'AWS, Cloud Computing',
      img_url: anubhab,
      linkedin: 'https://www.linkedin.com/in/anubhabsaha09/',
    },
    {
      name: 'Purnangshu Roy',
      role: 'AI Consultant at CSRBOX',
      badge: 'Data Analytics and Senior Technical Trainer',
      img_url: purnangshu,
      linkedin: 'https://www.linkedin.com/in/purnangshu-roy-16380614/',
    },
    {
      name: 'Avik Agarwala',
      role: 'Systems Engineer @TCS',
      badge: 'Previous System Software Engineer @AMI',
      img_url: avik,
      linkedin: 'https://www.linkedin.com/in/avikagarwala/',
    },
  ];
  const judge = [
    { content: 'Coming Soon...' },
    { content: 'Coming Soon...' },
    { content: 'Coming Soon...' },
    { content: 'Coming Soon...' },
  ];

  return (
    <section id="judges" className="py-20 bg-[#3E2C1D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#3E2C1D] mb-4">
            JUDGES
          </h2>
          <div className="w-32 h-1 bg-[#D4AF37] mx-auto"></div>
          <p className="font-serif text-xl text-[#6B4423] mt-6">
            Evaluating creativity, execution, and impact
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {/* ====== Original Judge Cards ====== */}
          
          {judges.map((j, i) => (
            <div key={i} className="group [perspective:1000px] w-full sm:w-[300px] lg:w-[320px]">
              <div className="relative transform-gpu transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl [transform-style:preserve-3d] h-full">
                <Card className="bg-[#ebdbb9] h-full flex flex-col justify-between">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-40 h-40 rounded-full bg-[#F4E5C266] border-2 border-[#3E2C1D] flex items-center justify-center mb-6 overflow-hidden">
                      <img
                        src={j.img_url}
                        alt={`Image of judge ${j.name}`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="font-display text-2xl font-bold text-[#3E2C1D] mb-2">{j.name}</div>
                    <div className="font-serif text-[#6B4423] mb-4">{j.role}</div>
                    <span className="inline-block px-4 py-1.5 text-sm bg-[#3E2C1D1A] text-[#3E2C1D] rounded-full">
                      {j.badge}
                    </span>
                    <a
                      href={j.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center text-[#3E2C1D] hover:text-[#6B4423] transition-colors"
                    >
                      <span className="mr-2 font-bold">Connect</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </Card>
                <div
                  className="absolute inset-0 rounded-lg ring-1 ring-[#6B44234D] translate-y-2 blur-sm opacity-0 group-hover:opacity-100 transition pointer-events-none"
                  aria-hidden
                ></div>
              </div>
            </div>
          ))}
     
        </div>
      </div>
    </section>
  );
};

export default Judges;
