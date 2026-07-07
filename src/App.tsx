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
import Checkout from './pages/Checkout';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentCancel from './pages/PaymentCancel';
import { seoPagesData } from './data/seoContent';
import { getWhatsAppUrl } from './utils/whatsapp';

const WHATSAPP_URL = getWhatsAppUrl('contactUs');

const AgencyCredentials = () => (
  <div className="bg-light-bg py-12 border-y border-medium-teal/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-secondary-dark/60 mb-10">Dominating Local SEO in South Africa</p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 transition-all">
        <div className="flex items-center gap-2"><Globe className="w-5 h-5 text-medium-teal" /> <span className="font-display font-bold text-primary-dark">Google Search Authority</span></div>
        <div className="flex items-center gap-2"><Smartphone className="w-5 h-5 text-medium-teal" /> <span className="font-display font-bold text-primary-dark">100% Core Web Vitals</span></div>
        <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-medium-teal" /> <span className="font-display font-bold text-primary-dark">Secure Data Protection</span></div>
        <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-medium-teal" /> <span className="font-display font-bold text-primary-dark">Fast-Loading Agency</span></div>
      </div>
    </div>
  </div>
);

const AboutEEAT = () => (
  <section className="py-24 bg-light-bg relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-primary-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=max&q=80" 
               alt="Vibrant Web Solutions Team" 
               className="w-full h-auto object-contain block"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 via-transparent to-transparent pointer-events-none"></div>
             <div className="absolute bottom-8 left-8 text-white">
               <p className="font-black text-4xl mb-2 drop-shadow-md">5+</p>
               <p className="font-bold uppercase tracking-widest text-xs drop-shadow-md">Years of Growth Expertise</p>
             </div>
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-medium-teal/10 blur-3xl -z-10"></div>
        </div>
        <div className="pr-4">
          <span className="text-medium-teal text-xs font-black uppercase tracking-[0.2em] mb-4 block">Authority & Expertise</span>
          <h2 className="mb-8">
            Empowering South African Businesses to <span className="text-medium-teal italic">Dominate Digitally</span>
          </h2>
          <div className="space-y-6 text-primary-dark/80 leading-relaxed font-medium">
            <p>
              Vibrant Web Solutions was born from a simple mission: to bridge the gap between high-level digital performance and South African small business affordability. We don't just build websites; we engineer sales systems.
            </p>
            <p>
              Our team consists of Google Maps ranking specialists, UI/UX designers, and local SEO strategists dedicated to putting your business in the Top 3 search results. We combine technical excellence with deep market understanding to deliver results that impact your daily revenue.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="font-bold mb-2 text-primary-dark">Our Mission</h4>
                <p className="text-sm">To provide every local entrepreneur with the digital tools needed to compete with national brands.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-primary-dark">Our Vision</h4>
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
  <section id="areas-served" className="py-24 bg-light-bg border-t border-medium-teal/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="mb-4 text-primary-dark">Local Areas We Support</h2>
        <p className="text-primary-dark/70 font-medium">Providing dominant digital presence across the Western Cape and South Africa.</p>
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
            className="p-4 rounded-xl bg-white border border-medium-teal/10 text-sm font-bold text-primary-dark/60 hover:text-accent-green hover:border-accent-green/30 hover:scale-105 active:scale-95 transition-all cursor-pointer block shadow-sm"
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
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-light-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#8EB69B08_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.2em] uppercase bg-primary-dark text-accent-green rounded-full shadow-sm">
              Premium Web Design & Local SEO Agency
            </span>
            <h1 className="mb-10 text-primary-dark">
              See Your New Website <span className="text-medium-teal italic">Before You Pay</span>
            </h1>
            <p className="text-secondary-dark/80 mb-10 max-w-2xl mx-auto font-medium">
              We build your website first and send you a private preview link. If you love it, keep it for only R299 per month. Start completely risk-free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={getWhatsAppUrl('freePreview')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-medium-teal text-light-bg h-[50px] min-w-[200px] px-8 rounded-[10px] font-semibold uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 hover:bg-dark-teal transition-all group cursor-pointer shadow-lg animate-pulse"
              >
                Start My Free Build Preview
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-3 px-6 h-[50px] rounded-[10px] bg-white border border-medium-teal/10">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary-dark/60">Risk-Free Preview</span>
              </div>
            </div>

            {/* Quick Links Section requested by user */}
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mt-12 pt-12 border-t border-medium-teal/10">
              <Link to="/blog" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-dark/40 hover:text-accent-green transition-colors flex items-center gap-2">
                <Globe size={14} /> Success Blog
              </Link>
              <a 
                href="#portfolio" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-dark/40 hover:text-accent-green transition-colors flex items-center gap-2"
              >
                <Layout size={14} /> Client Portfolio
              </a>
              <a 
                href="#areas-served" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('areas-served')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-dark/40 hover:text-accent-green transition-colors flex items-center gap-2"
              >
                <Smartphone size={14} /> Service Areas
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
                className="w-full h-auto rounded-2xl shadow-xl shadow-slate-200 border border-gray-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-4 md:-right-10 w-32 md:w-48">
                <img 
                  src="https://i.ibb.co/b51pp2N8/1000416693.png" 
                  alt="Mobile Mockup" 
                  className="rounded-3xl shadow-2xl border-4 border-white"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Mobile View: Only Mobile Image */}
            <div className="sm:hidden flex justify-center">
              <img 
                src="https://i.ibb.co/b51pp2N8/1000416693.png" 
                alt="Mobile Website Mockup" 
                className="w-64 h-auto rounded-[2.5rem] shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
};

const Problem = () => (
  <section className="py-24 bg-light-bg relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-primary-dark">
      <div className="text-center mb-16">
        <h2 className="mb-6">
          Is Your Business <span className="text-medium-teal italic">Invisible</span> Online?
        </h2>
        <p className="text-primary-dark/70 max-w-2xl mx-auto font-medium">
          Every day you wait, you're losing money. Here's how an outdated or non-existent website is hurting your bottom line.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Users className="text-medium-teal" />,
            title: "Losing Customers",
            desc: "Your potential customers are searching for your services right now. If they can't find you, they're calling your competitors."
          },
          {
            icon: <AlertTriangle className="text-medium-teal" />,
            title: "Zero Trust",
            desc: "In 2026, customers judge your credibility by your website. An outdated site makes your business look unprofessional."
          },
          {
            icon: <TrendingDown className="text-medium-teal" />,
            title: "Lost Revenue",
            desc: "Without a high-converting website, you're missing out on leads, bookings, and sales that should be yours."
          }
        ].map((item, i) => (
          <div key={i} className="p-10 rounded-xl bg-white border border-medium-teal/5 shadow-md hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-light-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary-dark">{item.title}</h3>
            <p className="text-primary-dark/60 font-medium leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="text-medium-teal" size={32} />,
      title: "Mobile-First Design",
      description: "90% of South Africans use their phones to find services. We ensure your site looks perfect and works fast on every device."
    },
    {
      icon: <Search className="text-medium-teal" size={32} />,
      title: "Local SEO Dominance",
      description: "Get found on the first page of Google. We optimize your site so local customers find you first when they need your help."
    },
    {
      icon: <Zap className="text-accent-green" size={32} />,
      title: "Instant WhatsApp Contact",
      description: "We make it incredibly easy for customers to reach you. One click and they're chatting with you on WhatsApp."
    },
    {
      icon: <Bot className="text-medium-teal" size={32} />,
      title: "AI Chat Automation",
      description: "Never miss a lead again. Our AI bots answer questions and book appointments 24/7, even while you sleep."
    },
    {
      icon: <Shield className="text-medium-teal" size={32} />,
      title: "Secure & Fast Hosting",
      description: "Your site will be lightning-fast and secure, with 99.9% uptime and daily backups included in your R299/month plan."
    },
    {
      icon: <TrendingUp className="text-medium-teal" size={32} />,
      title: "Conversion Focused",
      description: "Every element of your site is strategically placed to turn visitors into paying customers. Results are our only metric."
    }
  ];

  return (
    <section id="services" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-primary-dark">
            We Build <span className="text-medium-teal italic">Customer-Generating</span> Machines
          </h2>
          <p className="text-primary-dark/70 max-w-2xl mx-auto font-medium">
            We don't just build "pretty" websites. We build systems designed to get you more leads, more calls, and more bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-10 rounded-xl bg-white border border-medium-teal/10 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="mb-6 p-4 bg-light-bg rounded-xl w-fit group-hover:bg-accent-green/10 transition-colors shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-dark">{service.title}</h3>
              <p className="text-primary-dark/60 font-medium leading-relaxed text-sm">{service.description}</p>
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
      title: "Reserve Slot",
      description: "Book your slot for free. We only require card details to ensure you're a serious business owner."
    },
    {
      number: "02",
      title: "Private Preview",
      description: "We build your authority website and send you a private link to review the design and features."
    },
    {
      number: "03",
      title: "Review & Keep",
      description: "If you love it, activate your R299/mo subscription. If not, you pay nothing more. Ever."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 text-primary-dark">
          <h2 className="mb-4">How It <span className="text-medium-teal italic">Works</span></h2>
          <p className="text-primary-dark/70 font-medium">Your journey to a professional website in 3 simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-medium-teal/10 -z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center relative z-10">
              <div className="text-6xl md:text-8xl font-display font-black text-medium-teal/5 mb-6 select-none">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary-dark">{step.title}</h3>
              <p className="text-primary-dark/60 leading-relaxed font-medium">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const steps = [
    {
      step: "01",
      title: "Request Your Preview",
      desc: "Tell us about your business and goals. We require no upfront payments, booking fees, or credit cards.",
      cta: "Request Free Build"
    },
    {
      step: "02",
      title: "We Build It First",
      desc: "Our experts design and build your custom authority website draft and send you a private link to review in 5-7 days.",
      cta: null
    },
    {
      step: "03",
      title: "Review & Activate",
      desc: "If you love the custom website draft, keep it for R299/month. Hosting, SSL, and ongoing support are all included.",
      cta: "Start Free Build"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-primary-dark text-center">
        <div className="mb-16">
          <h2 className="mb-6">
            Get Your Website Built <span className="text-medium-teal italic">For Free First</span>
          </h2>
          <p className="text-primary-dark/70 max-w-2xl mx-auto font-medium">
            We've removed all the risk. Request your free website draft today and see it before you pay a single cent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {steps.map((item, index) => (
            <div 
              key={index}
              className="p-10 rounded-[2.5rem] bg-light-bg border border-medium-teal/10 shadow-xl relative overflow-hidden group"
            >
              <div className="text-6xl font-black text-medium-teal/5 absolute top-4 right-8 group-hover:text-medium-teal/10 transition-colors">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
              <p className="text-secondary-dark/60 font-medium leading-relaxed mb-8 relative z-10">
                {item.desc}
              </p>
              {item.cta && (
                <a 
                  href={item.step === "01" ? getWhatsAppUrl('freePreview') : getWhatsAppUrl('buildMyWebsite')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-[50px] bg-medium-teal text-light-bg rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-dark-teal transition-all shadow-lg shadow-medium-teal/10"
                >
                  {item.cta} <ArrowRight size={16} />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-secondary-bg rounded-3xl border border-medium-teal/10 inline-block">
          <p className="text-sm font-bold text-secondary-dark/60 uppercase tracking-widest">
            After Preview: <span className="text-primary-dark">R299 Monthly Subscription</span> (No Upfront Setup Fee)
          </p>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "Affordable Pricing", desc: "High-end quality at a fraction of agency costs. Starting from R299/month." },
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
    <section className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-primary-dark pr-4">
            <h2 className="mb-8">
              Why South African Businesses <span className="text-medium-teal italic">Choose Us</span>
            </h2>
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-accent-green mt-2 shadow-sm shadow-accent-green/20"></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{reason.title}</h4>
                    <p className="text-primary-dark/60 text-sm leading-relaxed font-medium">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white border border-medium-teal/5 flex flex-col items-center text-center group hover:border-accent-green/20 hover:shadow-xl transition-all shadow-sm">
                <div className="mb-4 text-medium-teal group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <span className="font-bold text-[10px] uppercase tracking-widest text-primary-dark">{stat.label}</span>
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
      results: "185% Increase in Leads"
    },
    { 
      img: "https://i.ibb.co/bM7fMdsG/www-elitefinishes-co-za.png", 
      title: "Elite Finishes",
      results: "#1 Ranking West Coast"
    },
    { 
      img: "https://i.ibb.co/BVv7v83D/www-leroysweldingworks-co-za.png", 
      title: "Leroy's Welding",
      results: "3x More Customer Calls"
    },
    { 
      img: "https://i.ibb.co/pvnY2xNv/Www-Strong-Root-co-za.png", 
      title: "Strong Root Foundations",
      results: "Dominant Market Share"
    },
    { 
      img: "https://i.ibb.co/20YDHT6w/Gemini-Generated-Image-wx6rtowx6rtowx6r.png", 
      title: "Electrical Services",
      results: "High-Volume Bookings"
    },
    { 
      img: "https://i.ibb.co/XxRTJSbb/Gemini-Generated-Image-m4mj90m4mj90m4mj.png", 
      title: "Garden Maintenance",
      results: "Local SEO Success"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 text-primary-dark">
          <h2 className="mb-4">
            SEO Case <span className="text-medium-teal italic">Studies</span>
          </h2>
          <p className="text-primary-dark/70 max-w-2xl mx-auto font-medium">Real results for local South African businesses. We transform websites into high-authority money-making assets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-white border border-medium-teal/10 shadow-md flex flex-col hover:shadow-xl hover:border-accent-green/20 transition-all"
            >
              <div className="bg-light-bg flex items-center justify-center overflow-hidden p-6">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.05] drop-shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h4 className="font-bold text-lg text-primary-dark mb-2">{project.title}</h4>
                <p className="text-medium-teal text-sm font-black mb-1">{project.results}</p>
                <p className="text-primary-dark/40 text-[10px] font-bold uppercase tracking-widest">High-Authority Web Design & Local SEO</p>
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
    { q: "What is the monthly R299 for?", a: "This covers high-speed local hosting, security updates, daily backups, and dedicated technical support." },
    { q: "Can I update the site myself?", a: "Absolutely! We build on user-friendly platforms and provide basic training so you can make simple updates." },
    { q: "Do you offer email addresses?", a: "Yes, all our hosting packages include professional business email addresses (e.g., help@vibrantws.co.za)." }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-light-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-primary-dark">Frequently Asked <span className="text-medium-teal italic">Questions</span></h2>
          <p className="text-primary-dark/70 font-medium">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-medium-teal/10 rounded-xl overflow-hidden bg-white shadow-sm transition-all">
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-light-bg transition-colors cursor-pointer group"
              >
                <span className="font-bold text-primary-dark group-hover:text-medium-teal transition-colors">{faq.q}</span>
                <ChevronDown className={`text-medium-teal transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-primary-dark/60 font-medium leading-relaxed">
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
    <section id="contact" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-primary-dark pr-4">
            <h2 className="mb-6 tracking-tighter">
              Let's Build Your <span className="text-medium-teal italic">Digital Future</span>
            </h2>
            <p className="text-primary-dark/80 text-lg mb-10 leading-relaxed max-w-lg font-medium">
              Ready to take your business to the next level? Fill out the form and we'll get back to you within 24 hours with a custom strategy.
            </p>
            
            <div className="space-y-6">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-dark group cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-medium-teal/10 group-hover:border-accent-green/50 transition-colors shadow-sm">
                  <Smartphone className="text-medium-teal w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-[10px] text-primary-dark/40 uppercase font-black tracking-widest mb-0.5">WhatsApp Us</p>
                  <p className="font-bold group-hover:text-medium-teal transition-colors">+27 64 519 2556</p>
                </div>
              </a>
              <a 
                href="mailto:help@vibrantws.co.za"
                className="flex items-center gap-4 text-primary-dark group cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-medium-teal/10 group-hover:border-accent-green/50 transition-colors shadow-sm">
                  <Mail className="text-medium-teal w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-[10px] text-primary-dark/40 uppercase font-black tracking-widest mb-0.5">Email Us</p>
                  <p className="font-bold group-hover:text-medium-teal transition-colors">help@vibrantws.co.za</p>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-medium-teal/5 shadow-2xl"
          >
            <p className="text-primary-dark font-black text-lg mb-8 leading-tight">
              Tell us about your business — we’ll show you exactly how to get more customers online.
            </p>
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-black text-primary-dark/40 uppercase tracking-widest ml-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-dark/40" />
                    <input 
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-light-bg border border-medium-teal/10 rounded-2xl py-4 pl-12 pr-4 focus:border-accent-green focus:ring-1 focus:ring-accent-green outline-none transition-all text-primary-dark placeholder:text-primary-dark/30 font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-black text-primary-dark/40 uppercase tracking-widest ml-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-dark/40" />
                    <input 
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-light-bg border border-medium-teal/10 rounded-2xl py-4 pl-12 pr-4 focus:border-accent-green focus:ring-1 focus:ring-accent-green outline-none transition-all text-primary-dark placeholder:text-primary-dark/30 font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-black text-primary-dark/40 uppercase tracking-widest ml-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-dark/40" />
                    <input 
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 64 519 2556"
                      className="w-full bg-light-bg border border-medium-teal/10 rounded-2xl py-4 pl-12 pr-4 focus:border-accent-green focus:ring-1 focus:ring-accent-green outline-none transition-all text-primary-dark placeholder:text-primary-dark/30 font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="business" className="text-xs font-black text-primary-dark/40 uppercase tracking-widest ml-1">Business Name</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-dark/40" />
                    <input 
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your Company Ltd"
                      className="w-full bg-light-bg border border-medium-teal/10 rounded-2xl py-4 pl-12 pr-4 focus:border-accent-green focus:ring-1 focus:ring-accent-green outline-none transition-all text-primary-dark placeholder:text-primary-dark/30 font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-black text-primary-dark/40 uppercase tracking-widest ml-1">Message / Website Needs</label>
                <textarea 
                  required
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-light-bg border border-medium-teal/10 rounded-2xl py-4 px-4 focus:border-accent-green focus:ring-1 focus:ring-accent-green outline-none transition-all text-primary-dark placeholder:text-primary-dark/30 font-medium resize-none"
                ></textarea>
              </div>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-accent-green/10 border border-accent-green/20 text-dark-teal rounded-2xl text-center font-bold"
                >
                  Message sent! We'll be in touch soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-center font-bold text-sm"
                >
                  {errorMessage}
                </motion.div>
              )}

              <button 
                disabled={status === 'submitting'}
                type="submit"
                className="w-full h-[50px] bg-medium-teal text-light-bg font-semibold rounded-[10px] hover:bg-dark-teal transition-all flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="pt-4 text-center">
                <p className="text-[10px] text-primary-dark/40 uppercase tracking-[0.2em] font-black mb-3">Or chat with us directly</p>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-dark hover:text-medium-teal transition-colors font-bold"
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
      content: "I was worried about the cost, but the R299/month hosting and support makes it so affordable. The site looks amazing and it's already paying for itself with new contracts.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-primary-dark">
            Trusted by <span className="text-medium-teal italic">Local Businesses</span>
          </h2>
          <p className="text-primary-dark/70 max-w-2xl mx-auto font-medium">
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
              className="p-10 rounded-xl bg-white border border-medium-teal/10 hover:border-accent-green/20 transition-all group shadow-md hover:shadow-xl"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent-green text-accent-green" />
                ))}
              </div>
              <p className="text-primary-dark/70 mb-8 italic leading-relaxed font-medium text-sm">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-light-bg flex items-center justify-center text-medium-teal font-bold border border-medium-teal/10 uppercase">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark">{testimonial.name}</h4>
                  <p className="text-primary-dark/40 text-[10px] font-bold uppercase tracking-widest">{testimonial.role}</p>
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
  <section className="py-24 bg-light-bg relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="bg-primary-dark rounded-[3rem] p-12 md:p-24 text-center text-light-bg shadow-2xl">
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8 leading-tight text-light-bg">
          Get Your Website & Start <br className="hidden md:block" /> Getting Customers Today
        </h2>
        <p className="text-xl font-medium mb-12 max-w-2xl mx-auto opacity-80">
          Don't let another day go by while your competitors take your leads. Let's build your customer-generating machine.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a 
            href={getWhatsAppUrl('getStarted')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-[60px] bg-medium-teal text-light-bg px-12 rounded-[12px] font-semibold uppercase tracking-widest text-sm hover:bg-dark-teal transition-all flex items-center justify-center cursor-pointer shadow-xl animate-pulse"
          >
            Get Started
          </a>
          <a 
            href={getWhatsAppUrl('contactUs')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-[60px] bg-transparent text-light-bg border-2 border-light-bg/20 px-12 rounded-[12px] font-semibold uppercase tracking-widest text-sm hover:bg-light-bg/10 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
          >
            <WhatsAppIcon size={24} />
            WhatsApp Us
          </a>
        </div>

        {/* Migrated Links from Navbar */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pt-10 border-t border-light-bg/10">
          <Link to="/blog" className="text-[11px] font-black uppercase tracking-[0.2em] text-light-bg/40 hover:text-accent-green transition-colors">
            Success Blog
          </Link>
          <a 
            href="#portfolio" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }} 
            className="text-[11px] font-black uppercase tracking-[0.2em] text-light-bg/40 hover:text-accent-green transition-colors"
          >
            Client Portfolio
          </a>
          <a 
            href="#areas-served" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('areas-served')?.scrollIntoView({ behavior: 'smooth' });
            }} 
            className="text-[11px] font-black uppercase tracking-[0.2em] text-light-bg/40 hover:text-accent-green transition-colors"
          >
            Service Areas
          </a>
        </div>
      </div>
    </div>
  </section>
);

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={getWhatsAppUrl('contactUs')}
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
    <div className="min-h-screen font-sans selection:bg-medium-teal selection:text-light-bg bg-light-bg">
      <Helmet>
        <title>Web Designer Cape Town & Langebaan | Professional Website Design SA</title>
        <meta name="description" content="Affordable, high-converting web design and local SEO services in South Africa. Get a professional business website preview for R0 today." />
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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentCancel />} />
        
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
