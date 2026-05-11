import React from 'react';
import { Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I'm%20interested%20in%20your%20website%20services.%20Can%20you%20help%20me%3F";

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-dark-secondary pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src="https://i.ibb.co/S4B1XSSd/Untitled-design-5.jpg" 
                alt="Vibrant Web Solutions Logo" 
                className="h-10 w-auto rounded-md group-hover:opacity-80 transition-opacity" 
                referrerPolicy="no-referrer"
              />
              <span className="text-2xl font-display font-bold tracking-tighter text-white block group-hover:text-electric-blue transition-colors">
                Vibrant Web Solutions <span className="text-neon-green">.</span>
              </span>
            </Link>
            <p className="text-text-secondary max-w-sm mb-8 leading-relaxed">
              Empowering South African businesses with fast, affordable, and high-quality web design solutions. Built with ❤️ in South Africa.
            </p>
            <div className="flex gap-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-electric-blue text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <WhatsAppIcon size={20} />
                Chat on WhatsApp Now
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Areas Serviced</h4>
            <ul className="space-y-4 text-text-secondary text-sm">
              <li><Link to="/web-designer-cape-town" className="hover:text-electric-blue transition-colors">Cape Town</Link></li>
              <li><Link to="/website-design-langebaan" className="hover:text-electric-blue transition-colors">Langebaan</Link></li>
              <li><Link to="/seo-services-cape-town" className="hover:text-electric-blue transition-colors">SEO Services CT</Link></li>
              <li><Link to="/google-maps-seo-cape-town" className="hover:text-electric-blue transition-colors">Google Maps SEO</Link></li>
              <li><Link to="/affordable-websites-south-africa" className="hover:text-electric-blue transition-colors">Affordable SA Sites</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-text-secondary text-sm">
              <li><Link to="/blog" className="hover:text-electric-blue transition-colors">Expert Blog</Link></li>
              <li><a href="/#services" className="hover:text-electric-blue transition-colors">Our Services</a></li>
              <li><a href="/#pricing" className="hover:text-electric-blue transition-colors">Pricing Plans</a></li>
              <li><a href="/#portfolio" className="hover:text-electric-blue transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-text-secondary text-sm">
              <li className="flex items-center gap-2">
                <span className="text-electric-blue">Email:</span> 
                <a href="mailto:help@vibrantws.co.za" className="hover:text-electric-blue transition-colors">help@vibrantws.co.za</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-electric-blue">WhatsApp:</span>
                <a href={WHATSAPP_URL} className="hover:text-electric-blue transition-colors">+27 64 519 2556</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-secondary text-sm">
            © 2026 Vibrant Web Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <span>Built with ❤️ in South Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
