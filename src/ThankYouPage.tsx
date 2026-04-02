import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  Zap, 
  MessageCircle, 
  Phone, 
  Calendar, 
  Clock,
  Palette,
  Facebook,
  MapPin
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const WHATSAPP_BASE_URL = "https://wa.me/27645192556";

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

const ThankYouPage = () => {
  const upsells = [
    {
      title: "Logo Design",
      price: "R500",
      icon: <Palette className="text-neon-green" size={24} />,
      description: "Professional, custom logo design to make your brand stand out.",
      whatsappText: "Hi, I want to add Logo Design for R500 once-off"
    },
    {
      title: "Facebook Marketing",
      price: "R1500",
      icon: <Facebook className="text-neon-green" size={24} />,
      description: "Reach thousands of local customers with targeted Facebook ads.",
      whatsappText: "Hi, I want to add Facebook Marketing for R1500/month"
    },
    {
      title: "Google Business",
      price: "R1000",
      icon: <MapPin className="text-neon-green" size={24} />,
      description: "Get found on Google Maps and dominate local search results.",
      whatsappText: "Hi, I want to add Google Business Management for R1000/month"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-neon-green selection:text-black">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6">
            Thank You! 🎉
          </h1>
          <p className="text-xl text-zinc-400 mb-4">
            Your request has been received. We’ll contact you shortly.
          </p>
          <p className="text-lg text-gold font-bold">
            While you wait, take your business to the next level with automation that works for you 24/7.
          </p>
        </motion.div>
      </section>

      {/* Main Offer Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-12 rounded-[3rem] bg-zinc-900 border-2 border-neon-green shadow-[0_0_50px_rgba(0,255,0,0.15)] overflow-hidden"
          >
            {/* Gold/Green Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/10 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div>
                  <span className="inline-block px-4 py-1 mb-4 text-xs font-black uppercase tracking-widest bg-neon-green text-black rounded-full">
                    🔥 Most Popular
                  </span>
                  <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter">
                    AI Agent Automation
                  </h2>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-5xl md:text-7xl font-display font-black text-gold">R2500</span>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">per month</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                    Let your business run on autopilot with an AI system that works for you 24/7.
                  </p>
                  <ul className="space-y-4">
                    {[
                      { icon: <MessageCircle size={20} />, text: "Replies to client messages instantly" },
                      { icon: <Phone size={20} />, text: "Answers phone calls automatically" },
                      { icon: <Zap size={20} />, text: "Follows up with leads" },
                      { icon: <Calendar size={20} />, text: "Keeps your calendar full" },
                      { icon: <Clock size={20} />, text: "Works for you 24/7" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-zinc-300">
                        <div className="text-neon-green">{item.icon}</div>
                        <span className="font-medium">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-zinc-950/50 p-8 rounded-3xl border border-white/5">
                  <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="text-neon-green" />
                    Why Choose Automation?
                  </h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-green mt-2"></div>
                      <p className="text-zinc-400 text-sm"><span className="text-white font-bold">Trusted system</span> used by top local businesses.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-green mt-2"></div>
                      <p className="text-zinc-400 text-sm"><span className="text-white font-bold">Saves 20+ hours</span> of manual work every week.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-green mt-2"></div>
                      <p className="text-zinc-400 text-sm"><span className="text-white font-bold">Increases leads</span> by engaging visitors instantly.</p>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href={`${WHATSAPP_BASE_URL}?text=Hi%2C%20I%20want%20the%20AI%20automation%20system%20for%20R2500/month`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-neon-green text-black font-black py-6 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-2xl shadow-[0_10px_30px_rgba(0,255,0,0.2)]"
              >
                <WhatsAppIcon size={28} />
                Activate My AI System
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upsells Section */}
      <section className="py-24 px-4 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Complete Your Brand</h2>
            <p className="text-zinc-400">Add these powerful tools to your package for maximum impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upsells.map((upsell, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-neon-green/30 transition-all flex flex-col"
              >
                <div className="mb-6 p-4 bg-zinc-900 rounded-2xl w-fit">
                  {upsell.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{upsell.title}</h3>
                <div className="text-3xl font-display font-bold text-gold mb-4">{upsell.price}</div>
                <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">
                  {upsell.description}
                </p>
                <a 
                  href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(upsell.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-white/5 text-white font-bold hover:bg-neon-green hover:text-black transition-all text-center flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon size={18} />
                  Add to My Package
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
