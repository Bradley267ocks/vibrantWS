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
    <div className="min-h-screen bg-dark-primary text-white font-sans selection:bg-electric-blue selection:text-black">
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
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-dark-secondary border border-white/10 rounded-full text-neon-green">
              Expert {location} Agency
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter mb-8 leading-tight text-white">
              {headline}
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-10">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_URL}
                className="w-full sm:w-auto bg-electric-blue text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                Get Started on WhatsApp <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-24">
            <div className="lg:col-span-2 space-y-12">
              <section className="prose prose-invert prose-neon max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-white">{content.section1.title}</h2>
                <div className="text-text-secondary leading-relaxed space-y-4 whitespace-pre-line">
                  {content.section1.body}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-8 text-white">{content.section2.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.section2.items.map((item, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-dark-secondary border border-white/10 hover:border-electric-blue/30 transition-all group">
                      <h4 className="text-xl font-bold mb-3 text-white group-hover:text-electric-blue transition-colors">{item.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-dark-secondary rounded-3xl p-8 md:p-12 border border-white/10">
                <h2 className="text-3xl font-bold mb-8 text-white">Frequently Asked Questions in {location}</h2>
                <div className="space-y-6">
                  {content.faq.map((faq, i) => (
                    <div key={i} className="border-b border-white/5 pb-6 last:border-0">
                      <h5 className="font-bold text-white mb-2">{faq.q}</h5>
                      <p className="text-text-secondary text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-8">
              <div className="p-8 rounded-3xl bg-electric-blue/10 border border-electric-blue/20 sticky top-32">
                <h3 className="text-2xl font-bold mb-4 text-white">Dominate the {location} Market</h3>
                <p className="text-text-secondary mb-6">
                  In a competitive landscape like {location}, a standard website isn't enough. You need an authority site that ranks and converts.
                </p>
                <a 
                  href={WHATSAPP_URL}
                  className="w-full block bg-electric-blue text-black px-6 py-4 rounded-xl font-bold text-center hover:scale-[1.02] transition-transform"
                >
                  Start My Transformation
                </a>
                <div className="mt-8 space-y-4">
                  {[
                    { icon: <Smartphone size={18} />, text: "Mobile-First Excellence" },
                    { icon: <Globe size={18} />, text: "100% Core Web Vitals" },
                    { icon: <Search size={18} />, text: "Local SEO Ready" }
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white">
                      <div className="text-neon-green">{feat.icon}</div>
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-dark-secondary border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-white">Areas Serviced</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Cape Town CBD</li>
                  <li>• Langebaan & West Coast</li>
                  <li>• Stellenbosch & Winelands</li>
                  <li>• Century City & Milnerton</li>
                  <li>• Bloubergstrand</li>
                  <li>• Northern Suburbs</li>
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
