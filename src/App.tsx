/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Zap, 
  Layout, 
  Bot, 
  Server, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  Smartphone, 
  Globe, 
  Search, 
  Clock,
  User,
  Mail,
  Phone,
  Building,
  Shield,
  TrendingUp,
  AlertTriangle,
  Users,
  TrendingDown,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import ThankYouPage from './ThankYouPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GetMyWebsite from './pages/GetMyWebsite';
import GetMoreCustomers from './pages/GetMoreCustomers';
import GetStarted from './pages/GetStarted';
import WhatsAppContact from './pages/WhatsAppContact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import LocalSEOPage from './pages/LocalSEOPage';
import { seoPagesData } from './data/seoContent';

const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I'm%20interested%20in%20your%20website%20services.%20Can%20you%20help%20me%3F";

const AgencyCredentials = () => (
  <div className="bg-dark-secondary py-10 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-text-secondary mb-8">Dominating Local SEO in South Africa</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 transition-all">
        <div className="flex items-center gap-2"><Globe className="w-5 h-5 text-electric-blue" /> <span className="font-display font-bold text-white">Google Search Authority</span></div>
        <div className="flex items-center gap-2"><Smartphone className="w-5 h-5 text-electric-blue" /> <span className="font-display font-bold text-white">100% Core Web Vitals</span></div>
        <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-electric-blue" /> <span className="font-display font-bold text-white">Secure Data Protection</span></div>
        <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-electric-blue" /> <span className="font-display font-bold text-white">Fast-Loading Agency</span></div>
      </div>
    </div>
  </div>
);

const AboutEEAT = () => (
  <section className="py-24 bg-dark-secondary relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10">
             <img 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=max&q=80" 
               alt="Vibrant Web Solutions Team" 
               className="w-full h-auto object-contain block"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/60 via-transparent to-transparent pointer-events-none"></div>
             <div className="absolute bottom-8 left-8">
               <p className="text-electric-blue font-black text-4xl mb-2">5+</p>
               <p className="text-white font-bold uppercase tracking-widest text-xs">Years of Growth Expertise</p>
             </div>
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-electric-blue/20 blur-3xl -z-10"></div>
        </div>
        <div>
          <span className="text-neon-green text-xs font-black uppercase tracking-[0.2em] mb-4 block">Authority & Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white tracking-tighter">
            Empowering South African Businesses to <span className="text-electric-blue">Dominate Digitally</span>
          </h2>
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              Vibrant Web Solutions was born from a simple mission: to bridge the gap between high-level digital performance and South African small business affordability. We don't just build websites; we engineer sales systems.
            </p>
            <p>
              Our team consists of Google Maps ranking specialists, UI/UX designers, and local SEO strategists dedicated to putting your business in the Top 3 search results. We combine technical excellence with deep market understanding to deliver results that impact your daily revenue.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-white font-bold mb-2">Our Mission</h4>
                <p className="text-sm">To provide every local entrepreneur with the digital tools needed to compete with national brands.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Our Vision</h4>
                <p className="text-sm">To become the leading catalyst for small business growth in the Western Cape and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AreasServed = () => (
  <section className="py-24 bg-dark-primary border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Local Areas We Support</h2>
        <p className="text-text-secondary">Providing dominant digital presence across the Western Cape and South Africa.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
        {[
          "Cape Town CBD", "Langebaan", "Vredenburg", "Saldanha", "Century City", 
          "Stellenbosch", "Milnerton", "Blouberg", "Paarl", "Bellville", 
          "Durbanville", "West Coast"
        ].map((area, i) => (
          <a 
            key={i} 
            href={`https://wa.me/27645192556?text=Hi%2C%20I%20need%20a%20website%20in%20${encodeURIComponent(area)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-dark-secondary border border-white/10 text-sm font-bold text-text-secondary hover:text-electric-blue hover:border-electric-blue/30 hover:scale-105 active:scale-95 transition-all cursor-pointer block"
          >
            {area}
          </a>
        ))}
      </div>
    </div>
  </section>
);

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

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-dark-secondary border border-white/10 rounded-full text-neon-green">
              Expert Web Designer Cape Town & Langebaan
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] mb-8 text-white">
              Professional <span className="text-electric-blue">Website Design</span> Agency in South Africa
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
              We specialize in local SEO and high-converting website design for businesses in Cape Town, Langebaan, and nationwide. Dominate your market from R300/month.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/get-my-website"
                className="w-full sm:w-auto bg-electric-blue text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all group cursor-pointer"
              >
                Get My Website
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-dark-secondary border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 active:scale-95 transition-all text-center cursor-pointer"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Desktop & Tablet View: Both Images */}
            <div className="hidden sm:block relative">
              <img 
                src="https://i.ibb.co/tpZL7L1h/mockup-descktop.png" 
                alt="Desktop Website Mockup" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-4 md:-right-10 w-32 md:w-48">
                <img 
                  src="https://i.ibb.co/b51pp2N8/1000416693.png" 
                  alt="Mobile Mockup" 
                  className="rounded-3xl shadow-2xl border-4 border-dark-primary"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Mobile View: Only Mobile Image */}
            <div className="sm:hidden flex justify-center">
              <img 
                src="https://i.ibb.co/b51pp2N8/1000416693.png" 
                alt="Mobile Website Mockup" 
                className="w-64 h-auto rounded-[2.5rem] shadow-2xl border-8 border-dark-primary"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green/5 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
};

const Problem = () => (
  <section className="py-24 bg-dark-primary relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-6 text-white">
          Is Your Business <span className="text-electric-blue">Invisible</span> Online?
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-lg">
          Every day you wait, you're losing money. Here's how an outdated or non-existent website is hurting your bottom line.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Users className="text-electric-blue" />,
            title: "Losing Customers",
            desc: "Your potential customers are searching for your services right now. If they can't find you, they're calling your competitors."
          },
          {
            icon: <AlertTriangle className="text-electric-blue" />,
            title: "Zero Trust",
            desc: "In 2026, customers judge your credibility by your website. An outdated site makes your business look unprofessional."
          },
          {
            icon: <TrendingDown className="text-electric-blue" />,
            title: "Lost Revenue",
            desc: "Without a high-converting website, you're missing out on leads, bookings, and sales that should be yours."
          }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl bg-dark-secondary border border-white/10 hover:border-electric-blue/30 transition-all group">
            <div className="w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
            <p className="text-text-secondary leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="text-electric-blue" size={32} />,
      title: "Mobile-First Design",
      description: "90% of South Africans use their phones to find services. We ensure your site looks perfect and works fast on every device."
    },
    {
      icon: <Search className="text-electric-blue" size={32} />,
      title: "Local SEO Dominance",
      description: "Get found on the first page of Google. We optimize your site so local customers find you first when they need your help."
    },
    {
      icon: <Zap className="text-electric-blue" size={32} />,
      title: "Instant WhatsApp Contact",
      description: "We make it incredibly easy for customers to reach you. One click and they're chatting with you on WhatsApp."
    },
    {
      icon: <Bot className="text-electric-blue" size={32} />,
      title: "AI Chat Automation",
      description: "Never miss a lead again. Our AI bots answer questions and book appointments 24/7, even while you sleep."
    },
    {
      icon: <Shield className="text-electric-blue" size={32} />,
      title: "Secure & Fast Hosting",
      description: "Your site will be lightning-fast and secure, with 99.9% uptime and daily backups included in your R300/month plan."
    },
    {
      icon: <TrendingUp className="text-electric-blue" size={32} />,
      title: "Conversion Focused",
      description: "Every element of your site is strategically placed to turn visitors into paying customers. Results are our only metric."
    }
  ];

  return (
    <section id="services" className="py-24 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-6 text-white">
            We Build <span className="text-electric-blue">Customer-Generating</span> Machines
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            We don't just build "pretty" websites. We build systems designed to get you more leads, more calls, and more bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-dark-primary border border-white/10 hover:border-electric-blue/30 transition-all group shadow-sm"
            >
              <div className="mb-6 p-4 bg-dark-secondary rounded-xl w-fit group-hover:bg-electric-blue/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Chat with us on WhatsApp. We'll show you exactly how to get more customers online."
    },
    {
      number: "02",
      title: "Fast Build",
      description: "We build your customer-generating machine in just 48 hours. No waiting around."
    },
    {
      number: "03",
      title: "Start Growing",
      description: "Your site goes live and starts attracting real customers, calls, and bookings."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">How It Works</h2>
          <p className="text-text-secondary">Your journey to a professional website in 3 simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl md:text-8xl font-display font-black text-white/5 mb-6 select-none">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter Website",
      price: "1000",
      features: ["1 Page Design", "Mobile Friendly", "Contact Form", "Basic SEO", "48h Turnaround"],
      popular: false,
      desc: "Perfect for new businesses looking for a professional presence."
    },
    {
      name: "Business Website",
      price: "2500",
      features: ["Up to 5 Pages", "Custom Design", "WhatsApp Integration", "Advanced SEO", "Google Maps Setup"],
      popular: true,
      desc: "Our most popular package for growing local businesses."
    },
    {
      name: "Pro Website",
      price: "4000+",
      features: ["Up to 7 Pages", "AI Chatbot Integration", "Logo Design Included", "Premium SEO", "Priority Support"],
      popular: false,
      desc: "The ultimate customer-generating machine for established brands."
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-6 text-white">
            Affordable <span className="text-electric-blue">Investment</span> for Massive Growth
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Choose the package that fits your business stage. All plans include our R300/month high-speed hosting and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl bg-dark-secondary border ${plan.popular ? 'border-electric-blue shadow-[0_0_30px_rgba(0,194,255,0.1)]' : 'border-white/10'} flex flex-col`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric-blue text-black text-xs font-black uppercase px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className="text-text-secondary text-xs mb-6 leading-relaxed">{plan.desc}</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-display font-bold text-electric-blue">R{plan.price}</span>
                <span className="text-text-secondary text-sm">once-off</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 size={16} className="text-neon-green shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                to="/get-started"
                className={`w-full py-4 rounded-xl font-bold transition-all text-center cursor-pointer active:scale-95 ${plan.popular ? 'bg-electric-blue text-black hover:scale-[1.02]' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center p-8 rounded-3xl bg-dark-secondary border border-white/10">
          <p className="text-text-secondary italic text-sm">
            "We only take on a limited number of clients each month to ensure quality and fast delivery."
          </p>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "Affordable Pricing", desc: "High-end quality at a fraction of agency costs. Starting from R300/month." },
    { title: "Fast Turnaround", desc: "We get you online in just 48 hours, not weeks. Speed is our priority." },
    { title: "Mobile-First Design", desc: "Optimized for the way South Africans browse the web on their phones." },
    { title: "AI Automation", desc: "Cutting-edge tools to help you scale your business and handle leads 24/7." },
    { title: "Local Support", desc: "Real South Africans helping you every step of the way. We understand your market." }
  ];

  const stats = [
    { icon: <Smartphone size={20} />, label: "Mobile Ready" },
    { icon: <Zap size={20} />, label: "Ultra Fast" },
    { icon: <Search size={20} />, label: "SEO Optimized" },
    { icon: <Clock size={20} />, label: "24/7 Support" }
  ];

  return (
    <section className="py-24 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight tracking-tighter text-white">
              Why South African Businesses <span className="text-electric-blue">Choose Us</span>
            </h2>
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-neon-green mt-2.5"></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-white">{reason.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="p-8 rounded-3xl bg-dark-secondary border border-white/10 flex flex-col items-center text-center group hover:border-electric-blue/20 transition-colors">
                <div className="mb-4 text-electric-blue group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <span className="font-bold text-xs uppercase tracking-widest text-white">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { 
      img: "https://i.ibb.co/1GfmFspm/www-fspainting-co-za.png", 
      title: "FS Painting",
      location: "Cape Town",
      results: "185% Increase in Leads"
    },
    { 
      img: "https://i.ibb.co/bM7fMdsG/www-elitefinishes-co-za.png", 
      title: "Elite Finishes",
      location: "Langebaan",
      results: "#1 Ranking West Coast"
    },
    { 
      img: "https://i.ibb.co/BVv7v83D/www-leroysweldingworks-co-za.png", 
      title: "Leroy's Welding",
      location: "Saldanha",
      results: "3x More Customer Calls"
    },
    { 
      img: "https://i.ibb.co/pvnY2xNv/Www-Strong-Root-co-za.png", 
      title: "Strong Root Foundations",
      location: "Western Cape",
      results: "Dominant Market Share"
    },
    { 
      img: "https://i.ibb.co/20YDHT6w/Gemini-Generated-Image-wx6rtowx6rtowx6r.png", 
      title: "Electrical Services",
      location: "Cape Town",
      results: "High-Volume Bookings"
    },
    { 
      img: "https://i.ibb.co/XxRTJSbb/Gemini-Generated-Image-m4mj90m4mj90m4mj.png", 
      title: "Garden Maintenance",
      location: "Stellenbosch",
      results: "Local SEO Success"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tighter text-white">
            SEO Case <span className="text-electric-blue">Studies</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Real results for local South African businesses. We transform websites into high-authority money-making assets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-dark-primary border border-white/10 shadow-sm flex flex-col"
            >
              <div className="bg-dark-secondary/50 flex items-center justify-center overflow-hidden p-4">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg text-white">{project.title}</h4>
                  <span className="text-[10px] bg-electric-blue/10 text-electric-blue px-2 py-1 rounded uppercase font-black">{project.location}</span>
                </div>
                <p className="text-neon-green text-sm font-bold mb-1">{project.results}</p>
                <p className="text-text-secondary text-xs">High-Authority Web Design & Local SEO</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How long does it really take?", a: "We pride ourselves on our 48-hour turnaround for starter and business packages once all content is received." },
    { q: "Do I own my website?", a: "Yes, 100%. Once the final payment is made, you own the website and all its assets." },
    { q: "What is the monthly R300 for?", a: "This covers high-speed local hosting, security updates, daily backups, and dedicated technical support." },
    { q: "Can I update the site myself?", a: "Absolutely! We build on user-friendly platforms and provide basic training so you can make simple updates." },
    { q: "Do you offer email addresses?", a: "Yes, all our hosting packages include professional business email addresses (e.g., help@vibrantws.co.za)." }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-dark-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-text-secondary">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-dark-secondary">
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors cursor-pointer group"
              >
                <span className="font-bold text-white group-hover:text-electric-blue transition-colors">{faq.q}</span>
                <ChevronDown className={`text-electric-blue transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-secondary leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', business: '', message: '' });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Something went wrong. Please try again or WhatsApp us.');
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter text-white">
              Let's Build Your <span className="text-electric-blue underline decoration-electric-blue/30 underline-offset-8">Digital Future</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed max-w-lg">
              Ready to take your business to the next level? Fill out the form and we'll get back to you within 24 hours with a custom strategy.
            </p>
            
            <div className="space-y-6">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white group cursor-pointer"
              >
                <div className="w-12 h-12 bg-dark-secondary rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-electric-blue/50 transition-colors">
                  <Smartphone className="text-electric-blue w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase font-bold tracking-widest">WhatsApp Us</p>
                  <p className="font-bold group-hover:text-electric-blue transition-colors">+27 64 519 2556</p>
                </div>
              </a>
              <a 
                href="mailto:help@vibrantws.co.za"
                className="flex items-center gap-4 text-white group cursor-pointer"
              >
                <div className="w-12 h-12 bg-dark-secondary rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-electric-blue/50 transition-colors">
                  <Mail className="text-electric-blue w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary uppercase font-bold tracking-widest">Email Us</p>
                  <p className="font-bold group-hover:text-electric-blue transition-colors">help@vibrantws.co.za</p>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-secondary p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-xl"
          >
            <p className="text-white font-bold text-lg mb-8 leading-tight">
              Tell us about your business — we’ll show you exactly how to get more customers online.
            </p>
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-text-secondary ml-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                    <input 
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-dark-primary border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all text-white placeholder:text-text-secondary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-text-secondary ml-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                    <input 
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-dark-primary border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all text-white placeholder:text-text-secondary"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-text-secondary ml-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                    <input 
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 64 519 2556"
                      className="w-full bg-dark-primary border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all text-white placeholder:text-text-secondary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="business" className="text-sm font-bold text-text-secondary ml-1">Business Name</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                    <input 
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your Company Ltd"
                      className="w-full bg-dark-primary border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all text-white placeholder:text-text-secondary"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-text-secondary ml-1">Message / Website Needs</label>
                <textarea 
                  required
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-dark-primary border border-white/10 rounded-2xl py-4 px-4 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none transition-all text-white placeholder:text-text-secondary resize-none"
                ></textarea>
              </div>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 text-green-400 rounded-2xl text-center font-bold"
                >
                  Message sent! We'll be in touch soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 text-red-400 rounded-2xl text-center font-bold text-sm"
                >
                  {errorMessage}
                </motion.div>
              )}

              <button 
                disabled={status === 'submitting'}
                type="submit"
                className="w-full bg-electric-blue text-black font-black py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="pt-4 text-center">
                <p className="text-text-secondary text-sm mb-3 uppercase tracking-widest font-bold">Or chat with us directly</p>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-electric-blue transition-colors font-bold"
                >
                  <WhatsAppIcon size={20} className="text-[#25D366]" />
                  +27 64 519 2556
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const testimonials = [
    {
      name: "Sipho Mdluli",
      role: "Plumbing Contractor",
      content: "Vibrant Web Solutions transformed my business. I used to rely on word of mouth, but now I get 3-4 solid leads every week through my new site. Best investment I've made.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Salon Owner",
      content: "The WhatsApp integration is a game changer! My clients can book appointments directly with one click. Professional, fast, and exactly what I needed to grow.",
      rating: 5
    },
    {
      name: "David Naidoo",
      role: "Construction Services",
      content: "I was worried about the cost, but the R300/month hosting and support makes it so affordable. The site looks amazing and it's already paying for itself with new contracts.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-6 text-white">
            Trusted by <span className="text-electric-blue">Local Businesses</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            See how we've helped South African entrepreneurs dominate their local markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-dark-primary border border-white/10 hover:border-electric-blue/20 transition-all group shadow-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-electric-blue text-electric-blue" />
                ))}
              </div>
              <p className="text-text-secondary mb-8 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-dark-secondary flex items-center justify-center text-electric-blue font-bold border border-white/10">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-text-secondary text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 bg-dark-primary relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="bg-electric-blue rounded-[3rem] p-12 md:p-24 text-center text-black">
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8 leading-tight">
          Get Your Website & Start <br className="hidden md:block" /> Getting Customers Today
        </h2>
        <p className="text-xl font-medium mb-12 max-w-2xl mx-auto opacity-80">
          Don't let another day go by while your competitors take your leads. Let's build your customer-generating machine.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/get-started"
            className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all text-center cursor-pointer shadow-lg"
          >
            Get Started
          </Link>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <WhatsAppIcon size={24} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
        Chat with us!
      </span>
      <WhatsAppIcon size={28} />
    </motion.a>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-electric-blue selection:text-black bg-dark-primary">
      <Helmet>
        <title>Web Designer Cape Town & Langebaan | Professional Website Design SA</title>
        <meta name="description" content="Affordable, high-converting web design and local SEO services in Cape Town, Langebaan, and across South Africa. Get a professional business website for R1000 once-off." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Vibrant Web Solutions",
              "image": "https://i.ibb.co/tpZL7L1h/mockup-descktop.png",
              "@id": "https://www.vibrantws.co.za",
              "url": "https://www.vibrantws.co.za",
              "telephone": "+27645192556",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Road",
                "addressLocality": "Langebaan",
                "postalCode": "7357",
                "addressCountry": "ZA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -33.0906,
                "longitude": 18.0331
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/vibrantwebsolutions",
                "https://wa.me/27645192556"
              ]
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      <Hero />
      <AgencyCredentials />
      <AboutEEAT />
      <Problem />
      <Services />
      <HowItWorks />
      <Pricing />
      <Portfolio />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <LeadForm />
      <AreasServed />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/get-my-website" element={<GetMyWebsite />} />
        <Route path="/get-more-customers" element={<GetMoreCustomers />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/whatsapp-contact" element={<WhatsAppContact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        
        {/* Local SEO Pages - Manually registered to satisfy strict TS types */}
        <Route 
          path="/web-designer-cape-town" 
          element={<LocalSEOPage {...seoPagesData["web-designer-cape-town"]} />} 
        />
        <Route 
          path="/website-design-langebaan" 
          element={<LocalSEOPage {...seoPagesData["website-design-langebaan"]} />} 
        />
        <Route 
          path="/seo-services-cape-town" 
          element={<LocalSEOPage {...seoPagesData["seo-services-cape-town"]} />} 
        />
        <Route 
          path="/affordable-websites-south-africa" 
          element={<LocalSEOPage {...seoPagesData["affordable-websites-south-africa"]} />} 
        />
        <Route 
          path="/google-maps-seo-cape-town" 
          element={<LocalSEOPage {...seoPagesData["google-maps-seo-cape-town"]} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}
