import React from 'react';
import { Map, MapPin, Award } from 'lucide-react';
import bolt from '../../src/assets/Icon/bolt.webp';
import ETH from '../../src/assets/Icon/ethIndia.webp';
import codecrafter from '../../src/assets/Icon/codecrafter.webp';
import xyz from '../../src/assets/Icon/.xyz.webp';
import interviewbuddy from '../../src/assets/Icon/interviewbuddy.webp';
import loveable from '../../src/assets/Icon/loveable.webp';
import elevenlabs from '../../src/assets/Icon/elevenlabs.webp';
import axicov from '../../src/assets/Icon/axicov.webp';
import drop from '../../src/assets/Icon/drop.webp';
import keploy from '../../src/assets/Icon/keploy.webp';
import beeceptor from '../../src/assets/Icon/beeceptor.webp';
import magicui from '../../src/assets/Icon/magicui.webp';
import nomoex from '../../src/assets/Icon/nomoex.webp';
import decloudx from '../../src/assets/Icon/decloudx.webp';
import requestly from '../../src/assets/Icon/requestly.webp';
import aws from '../../src/assets/Icon/aws.webp';
import devfolio from '../../src/assets/Icon/devfolio.webp';
import duality from '../../src/assets/Icon/duality.webp';
import dodo from '../../src/assets/Icon/dodo.webp';
import n8n from '../../src/assets/Icon/n8n.webp';
import unibee from '../../src/assets/Icon/unibee.webp';
import trae from '../../src/assets/Icon/trae.webp';

const categories = {
  diamondspn: {
    name: 'Diamond Sponsors',
    partners: [
      {
        name: 'Nomoex',
        logo: nomoex,
        link: 'https://nomoex.com/',
        tagline: 'The Future of Crypto Trading',
      }
    ],
  },
  platinumspn: {
    name: 'Platinum Sponsors',
    partners: [
      {
        name: 'DeCloudX',
        logo: decloudx,
        link: 'https://decloudx.com/',
        tagline: 'The Decentralized Cloud Platform Powering Web3',
      }
    ],
  },
  inasw: {
    name: 'In association with',
    partners: [
      {
        name: 'AWS',
        logo: aws,
        link: 'https://aws.training/',
        tagline: 'Build your future in the AWS Cloud.',
      }
    ],
  },
  trackspn: {
    name: 'Track Sponsors',
    partners: [
      {
        name: 'Requestly',
        logo: requestly,
        link: 'https://requestly.com/',
        tagline: 'Lightweight Git-Friendly API Client Built for Modern Developers',
      }
    ],
  },
  silverspn: {
    name: 'Silver Sponsors',
    partners: [
      {
        name: 'Devfolio',
        logo: devfolio,
        link: 'https://devfolio.co/',
        tagline: 'We love software and the people who build it.',
      },
      {
        name: 'ETH India',
        logo: ETH,
        link: 'https://ethindia2024.devfolio.co/overview',
        tagline: 'Empowering the future of hackathons',
      },
      {
        name: 'Duality',
        logo: duality,
        link: 'https://duality.ai/',
        tagline: 'Virtual Worlds for Solving Real Problems',
      },
      {
        name: 'Axicov',
        logo: axicov,
        link: 'https://axicov.com/',
        tagline: 'Explore The Agentic Economy',
      },
      {
        name: 'Keploy',
        logo: keploy,
        link: 'https://keploy.io/',
        tagline: 'AI Generated Tests that actually matter',
      },
      {
        name: 'The Drop Organization',
        logo: drop,
        link: 'https://drop.org.in/',
        tagline: 'Master In-Demand Skills with Our Online Course & Secure Your Future!',
      },
    ],
  },
  audioaiptn: {
    name: 'AudioAI Partner',
    partners: [
      {
        name: 'ElevenLabs',
        logo: elevenlabs,
        link: 'https://elevenlabs.io/',
        tagline: 'The most realistic voice AI platform',
      },
    ],
  },
  vibingptn: {
    name: 'Vibing Partners',
    partners: [
      {
        name: 'Lovable',
        logo: loveable,
        link: 'https://lovable.dev/',
        tagline: 'Create apps and websites by chatting with AI',
      },
      {
        name: 'Bolt.new',
        logo: bolt,
        link: 'https://bolt.new/',
        tagline: 'Create stunning apps & websites by chatting with AI',
      },
    ],
  },
  educationptn: {
    name: 'Education Partners',
    partners: [
      {
        name: 'Codecrafters',
        logo: codecrafter,
        link: 'https://codecrafters.io/',
        tagline: 'Become a better software engineer.',
      },
      {
        name: 'Interview Buddy',
        logo: interviewbuddy,
        link: 'https://interviewbuddy.net/',
        tagline: 'AI-powered mock interviews, expert feedback, and personalized coaching.',
      },
    ],
  },
  utilityptn: {
    name: 'Utility Partners',
    partners: [
      {
        name: 'Dodo Payments',
        logo: dodo,
        link: 'https://dodopayments.com/',
        tagline: 'Payments & Billing Platform for SaaS, AI and Digital Products.',
      },
      {
        name: 'n8n',
        logo: n8n,
        link: 'https://n8n.io/',
        tagline: 'Flexible AI workflow automation for technical teams.',
      },
      {
        name: 'Beeceptor',
        logo: beeceptor,
        link: 'https://beeceptor.com/?utm_source=hackathon&utm_campaign=tiu_calcuttahacks',
        tagline: 'Mock APIs made easy with AI.',
      },
      {
        name: 'Magic UI',
        logo: magicui,
        link: 'https://pro.magicui.design/',
        tagline: 'UI library for Design Engineers.',
      },
      {
        name: 'Gen xyz',
        logo: xyz,
        link: 'https://gen.xyz/',
        tagline: 'For every website, everywhere.',
      },
      {
        name: 'UniBee',
        logo: unibee,
        link: 'https://unibee.dev/',
        tagline: 'Decimate Your High Billing Costs',
      },
      {
        name: 'Trae',
        logo: trae,
        link: 'https://www.trae.ai/',
        tagline: 'Ship Faster with TRAE',
      },
    ],
  },
};

// VintageCard component with black/dark border, inner gold border, and proper padding
const VintageCard = ({ children, className = '' }) => {
  return (
    <div
      className={`relative bg-[#F8E9C4] border-4 border-[#332518] shadow-inner p-1 ${className}`}
    >
      {/* Inner border and content area */}
      <div className="h-full w-full border-2 border-[#C9A22C]/40 bg-gradient-to-b from-[#F6E4BF] to-[#F2E2C0] p-8 rounded-sm">
        {children}
      </div>
    </div>
  );
};

const SponsorCard = ({ category }) => {
  const { name, partners } = categories[category];
  return (
    <VintageCard className="mb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex items-center gap-4 mb-6 md:col-span-2">
          <div className="w-16 h-16 bg-[#3E2C1D] rounded-full flex items-center justify-center">
            <Award className="text-[#D4AF37]" size={32} />
          </div>
          <h3 className="font-display uppercase text-3xl font-bold text-[#3E2C1D]">
            {name}
          </h3>
        </div>
        {partners.map(partner => (
          <React.Fragment key={partner.name}>
            <div className="mb-6">
              <h4 className="font-display uppercase text-2xl font-bold text-[#6B4423] mb-4">
                {partner.name}
              </h4>
              <p className="font-serif text-[#6B4423]/90 mb-4">{partner.tagline}</p>
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#6B4423] hover:text-[#3E2C1D] font-medium transition-colors"
              >
                Visit Website
              </a>
            </div>
            <div className="p-2 rounded-lg flex items-center justify-center">
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="max-h-[120px] object-contain"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </VintageCard>
  );
};

const OurPartners = () => {
  return (
    <section id="sponsors" className="py-20 bg-[#F2E2C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#332518] mb-4">
            OUR PARTNERS
          </h2>
          <div className="w-32 h-1 bg-[#C9A22C] mx-auto mb-6"></div>
          <p className="font-serif text-xl text-[#7D5B3D] max-w-3xl mx-auto">
            They make the magic happen! A big thanks to our amazing partners for their support and collaboration.
          </p>
        </div>

        {/* Venue Partner */}
        <VintageCard className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#332518] rounded-full flex items-center justify-center">
                  <Map className="text-[#C9A22C]" size={32} />
                </div>
                <h3 className="font-display uppercase text-3xl font-bold text-[#332518]">Venue Partner</h3>
              </div>

              <div className="mb-6">
                <h4 className="font-display text-2xl font-bold text-[#7D5B3D] mb-2">
                  Techno India University
                </h4>
                <p className="font-serif text-[#7D5B3D]/90 mb-4">
                  EM-4, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091
                </p>
                <a
                  href="https://maps.app.goo.gl/qX2sEeT1irqAn4836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#7D5B3D] hover:text-[#332518] font-medium transition-colors"
                >
                  <MapPin className="mr-2" size={18} />
                  View on Google Maps
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="inline-block px-4 py-2 bg-[#332518]/10 text-[#332518] font-medium rounded-full">
                  🚇 10 min from Sector V Metro
                </span>
                <span className="inline-block px-4 py-2 bg-[#332518]/10 text-[#332518] font-medium rounded-full">
                  🅿️ Ample Parking
                </span>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border-4 border-[#332518] h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0827672337136!2d88.42593737499146!3d22.576007532846074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f970ae9a2e19b5%3A0x16c43b9069f4b159!2sTechno%20India%20University!5e0!3m2!1sen!2sin!4v1760859347451!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Techno India University Location"
                className="w-full h-full min-h-[300px]"
              ></iframe>
            </div>
          </div>
        </VintageCard>

        {/* Diamond Sponsor */}
        <SponsorCard category="diamondspn" />

        {/* Platinum Sponsor */}
        <SponsorCard category="platinumspn" />

        {/* In Association With */}
        <SponsorCard category="inasw" />

        {/* Track Sponsor */}
        <SponsorCard category="trackspn" />

        {/* Silver Sponsor */}
        <SponsorCard category="silverspn" />

        {/* AudioAI Partner */}
        <SponsorCard category="audioaiptn" />

        {/* Vibing Partner */}
        <SponsorCard category="vibingptn" />

        {/* Education Partners */}
        <SponsorCard category="educationptn" />

        {/* AI Utility Partner */}
        <SponsorCard category="utilityptn" />

        {/* Partner CTA */}
        {/* <div className="text-center">
          <h3 className="font-display text-2xl font-bold text-[#332518] mb-8">
            Want to Sponsor us?
          </h3>
          <a
            href="https://links.calcuttahacks.xyz/sponsor-us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#332518] text-[#F2E2C0] px-8 py-3 text-lg font-display font-bold border-4 border-[#332518] hover:bg-[#7D5B3D] hover:border-[#7D5B3D] transition-all duration-300"
          >
            Become a Sponsor
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default OurPartners;
