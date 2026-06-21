import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  MapPin, 
  BarChart, 
  Search, 
  Smartphone,
  MessageSquare
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

interface LocalSEOPageProps {
  title: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  location: string;
  content: {
    section1: {
      title: string;
      body: string;
    };
    section2: {
      title: string;
      items: { title: string; desc: string }[];
    };
    faq: { q: string; a: string }[];
  };
}

const LocalSEOPage: React.FC<LocalSEOPageProps> = ({ 
  title, 
  metaDescription, 
  headline, 
  subheadline, 
  location, 
  content 
}) => {
  const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I%27m%20interested%20in%20" + encodeURIComponent(title) + "%20services.";

  return (
    <div className="min-h-screen bg-light-bg text-primary-dark font-sans selection:bg-medium-teal selection:text-light-bg">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "${title}",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Vibrant Web Solutions",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "${location}",
                  "addressCountry": "ZA"
                }
              },
              "areaServed": "${location}",
              "description": "${metaDescription}"
            }
          `}
        </script>
      </Helmet>

      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest uppercase bg-white border border-medium-teal/10 rounded-full text-medium-teal shadow-sm">
              Expert {location} Agency
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter mb-8 leading-tight text-primary-dark">
              {headline}
            </h1>
            <p className="text-xl text-primary-dark/70 leading-relaxed mb-10 font-medium">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/checkout"
                className="w-full sm:w-auto h-[50px] bg-medium-teal text-light-bg px-8 rounded-[10px] font-semibold flex items-center justify-center gap-2 hover:bg-dark-teal transition-all cursor-pointer shadow-lg shadow-medium-teal/10"
              >
                Reserve My Build Slot <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-24">
            <div className="lg:col-span-2 space-y-12">
              <section className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-primary-dark">{content.section1.title}</h2>
                <div className="text-primary-dark/70 leading-relaxed space-y-4 whitespace-pre-line font-medium">
                  {content.section1.body}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-8 text-primary-dark">{content.section2.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.section2.items.map((item, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-white border border-medium-teal/5 hover:border-accent-green/30 transition-all group shadow-sm hover:shadow-md">
                      <h4 className="text-xl font-bold mb-3 text-primary-dark group-hover:text-medium-teal transition-colors">{item.title}</h4>
                      <p className="text-primary-dark/60 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-medium-teal/10">
                <h2 className="text-3xl font-bold mb-8 text-primary-dark">Frequently Asked Questions in {location}</h2>
                <div className="space-y-6">
                  {content.faq.map((faq, i) => (
                    <div key={i} className="border-b border-medium-teal/5 pb-6 last:border-0 last:pb-0">
                      <h5 className="font-bold text-primary-dark mb-2">{faq.q}</h5>
                      <p className="text-primary-dark/50 text-sm font-medium">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-8">
              <div className="p-8 rounded-[2rem] bg-medium-teal/5 border border-medium-teal/10 sticky top-32 shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-primary-dark">Dominate the {location} Market</h3>
                <p className="text-primary-dark/70 mb-6 font-medium">
                  In a competitive landscape like {location}, a standard website isn't enough. You need an authority site that ranks and converts.
                </p>
                <Link 
                  to="/checkout"
                  className="w-full block h-[50px] bg-primary-dark text-light-bg px-6 rounded-[10px] font-semibold text-center leading-[50px] hover:bg-medium-teal transition-all cursor-pointer shadow-lg"
                >
                  Start My Free Build
                </Link>
                <div className="mt-8 space-y-4">
                  {[
                    { icon: <Smartphone size={18} />, text: "Mobile-First Excellence" },
                    { icon: <Globe size={18} />, text: "100% Core Web Vitals" },
                    { icon: <Search size={18} />, text: "Local SEO Ready" }
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-primary-dark font-bold">
                      <div className="text-medium-teal">{feat.icon}</div>
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-white border border-medium-teal/10 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-primary-dark">Quick Links</h3>
                <ul className="space-y-3 text-sm text-primary-dark/40 font-bold uppercase tracking-widest list-none p-0">
                  <li><Link to="/web-designer-cape-town" className="hover:text-medium-teal transition-colors flex items-center gap-2 tracking-tighter">• Web Designer Cape Town</Link></li>
                  <li><Link to="/website-design-langebaan" className="hover:text-medium-teal transition-colors flex items-center gap-2 tracking-tighter">• Website Design Langebaan</Link></li>
                  <li><Link to="/seo-services-cape-town" className="hover:text-medium-teal transition-colors flex items-center gap-2 tracking-tighter">• SEO Services Cape Town</Link></li>
                  <li><Link to="/google-maps-seo-cape-town" className="hover:text-medium-teal transition-colors flex items-center gap-2 tracking-tighter">• Google Maps SEO</Link></li>
                  <li><Link to="/affordable-websites-south-africa" className="hover:text-medium-teal transition-colors flex items-center gap-2 tracking-tighter">• Affordable SA Websites</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LocalSEOPage;
