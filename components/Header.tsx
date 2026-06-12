import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" onClick={(e) => handleNavClick(e, '#hero')} className="text-2xl font-black text-slate-900 transition-colors hover:text-teal-600">
              Abem Tadele
            </a>
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                aria-label="Main menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <XMarkIcon className="block h-6 w-6" /> : <Bars3Icon className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm"></div>
        <div className="relative z-50 flex flex-col items-center justify-center h-full bg-white shadow-2xl border-l border-slate-100 max-w-xs ml-auto">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-100"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-2xl font-bold text-slate-800 hover:text-teal-600 transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
        </div>
      </div>
    </>
  );
};

export default Header;