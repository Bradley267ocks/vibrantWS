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
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  const locations = [
    { name: 'Cape Town', href: '/web-designer-cape-town' },
    { name: 'Langebaan', href: '/website-design-langebaan' },
    { name: 'SEO Cape Town', href: '/seo-services-cape-town' },
    { name: 'Google Maps SEO', href: '/google-maps-seo-cape-town' },
    { name: 'Affordable SA Sites', href: '/affordable-websites-south-africa' },
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
      // If element is not found, standard link behavior will navigate to the home page with the hash
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="https://i.ibb.co/S4B1XSSd/Untitled-design-5.jpg" 
                alt="Vibrant Web Solutions Logo" 
                className="h-10 w-auto rounded-md cursor-pointer hover:opacity-80 transition-opacity" 
                referrerPolicy="no-referrer"
              />
            </Link>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-display font-bold tracking-tighter text-white hidden sm:block hover:text-electric-blue transition-colors">
             Vibrant Web Solutions <span className="text-neon-green">.</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-text-secondary hover:text-electric-blue transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-sm font-medium text-text-secondary hover:text-electric-blue transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              )
            ))}

            {/* Locations Dropdown */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setShowLocations(true)}
                onMouseLeave={() => setShowLocations(false)}
                className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-electric-blue transition-colors py-8 whitespace-nowrap cursor-pointer"
              >
                Locations <ChevronDown size={14} className={`transition-transform grow-0 ${showLocations ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showLocations && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setShowLocations(true)}
                    onMouseLeave={() => setShowLocations(false)}
                    className="absolute top-full left-0 w-56 bg-dark-secondary border border-white/10 rounded-xl py-2 shadow-2xl"
                  >
                    {locations.map((loc) => (
                      <Link
                        key={loc.name}
                        to={loc.href}
                        className="block px-4 py-2 text-sm text-text-secondary hover:text-white hover:bg-white/5 cursor-pointer"
                        onClick={() => setShowLocations(false)}
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/get-started"
              className="bg-electric-blue text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 cursor-pointer active:scale-90 transition-transform">
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
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-4 text-base font-medium text-text-secondary hover:text-electric-blue cursor-pointer"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-4 text-base font-medium text-text-secondary hover:text-electric-blue cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <div className="px-3 py-4 border-t border-white/5">
              <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4">Our Service Areas</p>
              <div className="grid grid-cols-1 gap-2">
                {locations.map((loc) => (
                  <Link
                    key={loc.name}
                    to={loc.href}
                    className="text-sm font-medium text-text-secondary hover:text-electric-blue cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              to="/get-started"
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 bg-electric-blue text-black px-6 py-3 rounded-full text-sm font-bold text-center block cursor-pointer active:scale-95 transition-transform"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
