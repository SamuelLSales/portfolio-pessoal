import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Atividades', href: '#activities' },
    { label: 'Educação', href: '#education' },
    { label: 'Contato', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a1c1b]/95 backdrop-blur-sm border-b border-[#3f4816]/50' : 'bg-transparent'
      }`}
    >
      <nav className="container max-w-[864px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-[#d9fb06] font-bold text-xl hover:opacity-80 transition-opacity"
          >
            Samuel Lima
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="nav-link text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#d9fb06] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-[#3f4816]/50 mt-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 px-2 text-[#d9fb06] hover:text-[#d9fb06]/80 hover:bg-[#3f4816]/30 rounded transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;