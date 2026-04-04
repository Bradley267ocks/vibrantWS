/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  Building
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ThankYouPage from './ThankYouPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChatAssistant from './components/AIChatAssistant';

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
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-neon-green">
              South Africa's Fastest Web Agency
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] mb-8">
              Get Your Business Online in <span className="text-neon-green">48 Hours</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Professional, high-converting websites built for local South African businesses. Fast, affordable, and mobile-ready. Starting from <span className="text-white font-bold">R1000</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-neon-green text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform group"
              >
                <WhatsAppIcon size={20} />
                Chat on WhatsApp
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                View Packages
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
                  className="rounded-3xl shadow-2xl border-4 border-zinc-900"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Mobile View: Only Mobile Image */}
            <div className="sm:hidden flex justify-center">
              <img 
                src="https://i.ibb.co/b51pp2N8/1000416693.png" 
                alt="Mobile Website Mockup" 
                className="w-64 h-auto rounded-[2.5rem] shadow-2xl border-8 border-zinc-900"
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

const Services = () => {
  const services = [
    {
      icon: <Layout className="text-neon-green" size={32} />,
      title: "Website Design",
      description: "Modern, mobile-friendly websites that look great on any device and turn visitors into customers."
    },
    {
      icon: <Bot className="text-neon-green" size={32} />,
      title: "AI Chatbots",
      description: "Automate your customer replies and bookings with intelligent AI that works for you 24/7."
    },
    {
      icon: <Server className="text-neon-green" size={32} />,
      title: "Hosting & Support",
      description: "Fast, secure local hosting with dedicated South African support whenever you need help."
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Services</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Everything you need to grow your digital presence in South Africa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-zinc-950 border border-white/5 hover:border-neon-green/30 transition-all group"
            >
              <div className="mb-6 p-4 bg-zinc-900 rounded-xl w-fit group-hover:bg-neon-green/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{service.description}</p>
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
      title: "Contact Us",
      description: "Send us a message on WhatsApp to discuss your business needs and goals."
    },
    {
      number: "02",
      title: "We Build",
      description: "Our team designs and develops your custom website with speed and precision."
    },
    {
      number: "03",
      title: "Go Live",
      description: "We launch your site in 48 hours, ready to attract and convert new customers."
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
          <p className="text-zinc-400">Your journey to a professional website in 3 simple steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/5 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl md:text-8xl font-display font-black text-white/5 mb-6 select-none">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{step.description}</p>
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
      popular: false
    },
    {
      name: "Business Website",
      price: "2500",
      features: ["Up to 5 Pages", "Custom Design", "WhatsApp Integration", "Advanced SEO", "Google Maps Setup"],
      popular: true
    },
    {
      name: "Pro Website",
      price: "4000+",
      features: ["Unlimited Pages", "E-commerce Ready", "AI Chatbot Setup", "Custom Functionality", "Priority Support"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Simple Pricing</h2>
          <p className="text-zinc-400">Transparent packages with no hidden costs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl bg-zinc-950 border ${plan.popular ? 'border-neon-green shadow-[0_0_30px_rgba(0,255,0,0.1)]' : 'border-white/5'} flex flex-col`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-green text-black text-xs font-black uppercase px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-display font-bold text-neon-green">R{plan.price}</span>
                <span className="text-zinc-500 text-sm">once-off</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 size={16} className="text-neon-green shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition-all text-center ${plan.popular ? 'bg-neon-green text-black hover:scale-[1.02]' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-zinc-500 text-sm italic">
          * All packages require local hosting & support at R300/month.
        </p>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "Affordable Pricing", desc: "High-end quality at a fraction of agency costs." },
    { title: "Fast Turnaround", desc: "We get you online in just 48 hours, not weeks." },
    { title: "Mobile-First Design", desc: "Optimized for the way South Africans browse the web." },
    { title: "AI Automation", desc: "Cutting-edge tools to help you scale your business." },
    { title: "Local Support", desc: "Real South Africans helping you every step of the way." }
  ];

  const stats = [
    { icon: <Smartphone size={20} />, label: "Mobile Ready" },
    { icon: <Zap size={20} />, label: "Ultra Fast" },
    { icon: <Search size={20} />, label: "SEO Optimized" },
    { icon: <Clock size={20} />, label: "24/7 Support" }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Why South African Businesses Choose Us
            </h2>
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-neon-green mt-2.5"></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{reason.title}</h4>
                    <p className="text-zinc-400">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="p-8 rounded-3xl bg-zinc-900 border border-white/5 flex flex-col items-center text-center group hover:border-neon-green/20 transition-colors">
                <div className="mb-4 text-neon-green group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <span className="font-bold text-sm uppercase tracking-wider">{stat.label}</span>
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
    { img: "https://i.ibb.co/rfTz8tTh/Opera-Snapshot-2026-03-19-173306-www-prestigepoolscare-co-za.png", title: "Prestige Pools Care" },
    { img: "https://i.ibb.co/20YDHT6w/Gemini-Generated-Image-wx6rtowx6rtowx6r.png", title: "Electrical Services" },
    { img: "https://i.ibb.co/XxRTJSbb/Gemini-Generated-Image-m4mj90m4mj90m4mj.png", title: "Garden Maintenance" },
    { img: "https://i.ibb.co/svP4T60f/Gemini-Generated-Image-hpcca0hpcca0hpcc.png", title: "Construction & Renovation" },
    { img: "https://i.ibb.co/LX53BXGs/Gemini-Generated-Image-23g2ir23g2ir23g2.png", title: "Plumbing Solutions" },
    { img: "https://i.ibb.co/qMZX9zYR/Gemini-Generated-Image-8i0bv08i0bv08i0b.png", title: "Professional Car Wash" },
    { img: "https://i.ibb.co/1t4mcCgK/Chat-GPT-Image-Mar-19-2026-06-20-12-PM.png", title: "Cleaning Services" }
  ];

  return (
    <section id="portfolio" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Work</h2>
          <p className="text-zinc-400">A glimpse at some of the businesses we can help grow at vibrant web solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/5"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-1">{project.title}</h4>
                <p className="text-zinc-500 text-sm">Business Website</p>
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
    { q: "Do you offer email addresses?", a: "Yes, all our hosting packages include professional business email addresses (e.g., info@vibrantws.co.za)." }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-400">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/5 rounded-2xl overflow-hidden bg-zinc-900/30">
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-bold">{faq.q}</span>
                <ChevronDown className={`transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
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
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
              Let's Build Your <span className="text-neon-green underline decoration-neon-green/30 underline-offset-8">Digital Future</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-lg">
              Ready to take your business to the next level? Fill out the form and we'll get back to you within 24 hours with a custom strategy.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5">
                  <Smartphone className="text-neon-green w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Call or WhatsApp</p>
                  <p className="font-bold">+27 64 519 2556</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5">
                  <Mail className="text-neon-green w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Email Us</p>
                  <p className="font-bold">info@vibrantws.co.za</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl"
          >
            <p className="text-white font-bold text-lg mb-8 leading-tight">
              Tell us about your business — we’ll show you exactly how to get more customers online.
            </p>
            <form 
              method="post" 
              action="https://systeme.io/embedded/39250656/subscription"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="first_name" className="text-sm font-bold text-zinc-400 ml-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input 
                      required
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="John Doe"
                      className="w-full bg-zinc-950 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-all text-white placeholder:text-zinc-700"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-zinc-400 ml-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input 
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full bg-zinc-950 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-all text-white placeholder:text-zinc-700"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone_number" className="text-sm font-bold text-zinc-400 ml-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input 
                      required
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      placeholder="+27 64 519 2556"
                      className="w-full bg-zinc-950 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-all text-white placeholder:text-zinc-700"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company_name" className="text-sm font-bold text-zinc-400 ml-1">Business Name</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input 
                      type="text"
                      id="company_name"
                      name="company_name"
                      placeholder="Your Company Ltd"
                      className="w-full bg-zinc-950 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-all text-white placeholder:text-zinc-700"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-zinc-400 ml-1">Message / Website Needs</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-zinc-950 border border-white/10 rounded-2xl py-4 px-4 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-none transition-all text-white placeholder:text-zinc-700 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-neon-green text-black font-black py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="pt-4 text-center">
                <p className="text-zinc-500 text-sm mb-3 uppercase tracking-widest font-bold">Or chat with us directly</p>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-neon-green transition-colors font-bold"
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

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-neon-green p-12 md:p-20 rounded-[3rem] text-black text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tighter">
              Ready to Get Your Business Online?
            </h2>
            <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
              Join hundreds of South African businesses growing their digital footprint with Vibrant Web Solutions.
            </p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3 mx-auto w-fit"
            >
              <WhatsAppIcon size={24} />
              Chat on WhatsApp Now
            </a>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen font-sans selection:bg-neon-green selection:text-black">
            <Navbar />
            <Hero />
            <Services />
            <HowItWorks />
            <Pricing />
            <WhyChooseUs />
            <Portfolio />
            <FAQ />
            <LeadForm />
            <CTA />
            <Footer />
            <FloatingWhatsApp />
            <AIChatAssistant />
          </div>
        } />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}
