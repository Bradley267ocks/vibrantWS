import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I'm%20interested%20in%20your%20website%20services.%20Can%20you%20help%20me%3F";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img 
                src="https://i.ibb.co/S4B1XSSd/Untitled-design-5.jpg" 
                alt="Vibrant Web Solutions Logo" 
                className="h-10 w-auto rounded-md" 
                referrerPolicy="no-referrer"
              />
            </Link>
            <Link to="/" className="text-2xl font-display font-bold tracking-tighter text-white hidden sm:block">
             Vibrant Web Solutions <span className="text-neon-green">.</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-text-secondary hover:text-electric-blue transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-sm font-medium text-text-secondary hover:text-electric-blue transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-electric-blue text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
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
            className="md:hidden bg-dark-primary border-b border-white/10 px-4 pt-2 pb-6 space-y-1"
          >
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-text-secondary hover:text-electric-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-4 text-base font-medium text-text-secondary hover:text-electric-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 bg-electric-blue text-black px-6 py-3 rounded-full text-sm font-bold text-center block"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
