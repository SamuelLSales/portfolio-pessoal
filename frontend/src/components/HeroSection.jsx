import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';

const HeroSection = () => {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="hero-section min-h-screen bg-[#1a1c1b] flex items-center justify-center py-20 px-6">
      <div className="container max-w-[864px] mx-auto">
        <div className="text-center space-y-8">
          {/* Name */}
          <h1 className="brand-display text-[#d9fb06] mb-6">
            {hero.name}
          </h1>
          
          {/* Headline */}
          <h2 className="heading-4 text-[#d9fb06] mb-4 font-inter font-semibold text-2xl">
            {hero.headline}
          </h2>
          
          {/* Summary */}
          <p className="body-large text-[#d9fb06] mb-8 max-w-2xl mx-auto leading-relaxed">
            {hero.summary}
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center text-[#888680] mb-8">
            <MapPin size={18} className="mr-2" />
            <span className="font-inter">{hero.location}</span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <a 
              href={hero.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#302f2c] rounded-full hover:bg-[#3f4816] transition-colors group"
              aria-label="GitHub"
            >
              <Github size={20} className="text-[#d9fb06] group-hover:text-white transition-colors" />
            </a>
            <a 
              href={hero.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#302f2c] rounded-full hover:bg-[#3f4816] transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-[#d9fb06] group-hover:text-white transition-colors" />
            </a>
            <a 
              href={`mailto:${hero.email}`}
              className="p-3 bg-[#302f2c] rounded-full hover:bg-[#3f4816] transition-colors group"
              aria-label="Email"
            >
              <Mail size={20} className="text-[#d9fb06] group-hover:text-white transition-colors" />
            </a>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:opacity-90 transition-all duration-300 uppercase tracking-wide"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;