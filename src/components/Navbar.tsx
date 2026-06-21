import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I'm%20interested%20in%20your%20website%20services.%20Can%20you%20help%20me%3F";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocations, setShowLocations] = useState(false);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Pricing', href: '/#pricing' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-dark shadow-lg border-b border-light-bg/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="https://i.ibb.co/S4B1XSSd/Untitled-design-5.jpg" 
                alt="Vibrant Web Solutions Logo" 
                className="h-10 w-auto rounded-md cursor-pointer brightness-110 saturate-150 shadow-sm" 
                referrerPolicy="no-referrer"
              />
            </Link>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-display font-black tracking-tighter text-light-bg hidden sm:block hover:text-accent-green transition-colors">
             Vibrant <span className="text-accent-green text-opacity-80">Web Solutions</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-black uppercase tracking-widest text-light-bg hover:text-accent-green transition-all cursor-pointer"
              >
                {link.name}
              </a>
            ))}

            <Link 
              to="/checkout"
              className="bg-medium-teal text-light-bg border border-accent-green/20 px-8 h-[46px] flex items-center justify-center rounded-[10px] text-xs font-black uppercase tracking-widest hover:bg-dark-teal hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md"
            >
              Start Free Build
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-light-bg p-2 cursor-pointer active:scale-90 transition-transform">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-secondary-dark border-b border-light-bg/10 px-4 pt-2 pb-8 space-y-2 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-4 text-sm font-black uppercase tracking-widest text-light-bg hover:text-accent-green cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            
            <Link 
              to="/checkout"
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 bg-medium-teal text-light-bg px-6 h-[50px] rounded-[10px] text-xs font-black uppercase tracking-widest text-center flex items-center justify-center cursor-pointer active:scale-95 transition-all"
            >
              Start Free Build
            </Link>
          </motion.div>
        )}
      </AnimatePresence>


    </nav>
  );
};

export default Navbar;
