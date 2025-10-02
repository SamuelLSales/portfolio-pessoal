import React from 'react';
import { Button } from './ui/button';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/mock';

const ContactSection = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-20 px-6 bg-[#1a1c1b]">
      <div className="container max-w-[864px] mx-auto">
        <h2 className="heading-2 text-[#d9fb06] text-center mb-16 font-black text-6xl uppercase">
          Contato
        </h2>
        
        <div className="text-center space-y-8">
          {/* Email CTA */}
          <div className="bg-[#302f2c] rounded-lg p-8 mb-12">
            <Mail size={48} className="text-[#d9fb06] mx-auto mb-6" />
            <h3 className="heading-3 text-[#d9fb06] mb-4 text-2xl font-semibold">
              Vamos conversar!
            </h3>
            <p className="body-large text-[#888680] mb-6">
              Interessado em colaborar ou tem alguma pergunta? Entre em contato!
            </p>
            
            <Button
              size="lg"
              className="btn-primary bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:opacity-90 transition-all duration-300 uppercase tracking-wide mb-4"
              onClick={() => window.open(`mailto:${contact.email}`, '_self')}
            >
              {contact.email}
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-[#d9fb06]/30 text-[#d9fb06] hover:bg-[#d9fb06]/10 hover:border-[#d9fb06] transition-colors px-6 py-3"
              onClick={() => window.open(contact.links.github, '_blank')}
            >
              <Github size={20} className="mr-2" />
              GitHub
              <ExternalLink size={16} className="ml-2" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-[#d9fb06]/30 text-[#d9fb06] hover:bg-[#d9fb06]/10 hover:border-[#d9fb06] transition-colors px-6 py-3"
              onClick={() => window.open(contact.links.linkedin, '_blank')}
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
              <ExternalLink size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;