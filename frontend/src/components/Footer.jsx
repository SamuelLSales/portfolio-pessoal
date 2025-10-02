import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { hero, contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-[#302f2c] border-t border-[#3f4816]/30">
      <div className="container max-w-[864px] mx-auto">
        <div className="text-center space-y-6">
          {/* Name/Brand */}
          <h3 className="text-[#d9fb06] font-bold text-xl">
            {hero.name}
          </h3>
          
          {/* Tagline */}
          <p className="text-[#888680] max-w-md mx-auto">
            {hero.headline} - {hero.location}
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center space-x-4">
            <a 
              href={contact.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#888680] hover:text-[#d9fb06] transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={contact.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#888680] hover:text-[#d9fb06] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`mailto:${contact.email}`}
              className="p-2 text-[#888680] hover:text-[#d9fb06] transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-[#3f4816]/30">
            <p className="text-[#888680] text-sm">
              © {currentYear} {hero.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;