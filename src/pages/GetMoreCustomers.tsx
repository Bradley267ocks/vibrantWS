import React from 'react';
import { motion } from 'motion/react';
import { Users, TrendingUp, Target, MessageSquare, ArrowRight, Zap, BarChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GetMoreCustomers = () => {
  const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I%20want%20to%20know%20how%20to%20get%20more%20customers%21";

  return (
    <div className="min-h-screen bg-light-bg text-primary-dark font-sans selection:bg-medium-teal selection:text-light-bg">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter mb-8 leading-tight text-primary-dark">
              How to Get <span className="text-medium-teal italic">More Customers</span> Online in South Africa
            </h1>
            <p className="text-xl text-primary-dark/70 leading-relaxed mb-10 font-medium">
              Stop waiting for the phone to ring. We build systems that proactively find and convert your ideal customers while you focus on your business.
            </p>
            <Link 
              to="/checkout"
              className="inline-flex items-center gap-2 h-[50px] bg-medium-teal text-light-bg px-8 rounded-[8px] font-semibold uppercase tracking-widest text-[11px] hover:bg-dark-teal transition-all cursor-pointer shadow-lg"
            >
              Start Your Free Build <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="prose prose-slate max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary-dark">The Secret to Consistent Lead Generation</h2>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              Most small businesses in South Africa rely on word-of-mouth. While word-of-mouth is great, it's unpredictable. You can't scale a business on "maybe." To grow, you need a predictable system that brings in new leads every single day. That's where digital marketing and high-converting web design come in. We don't just build websites; we build marketing funnels that turn strangers into paying clients.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-primary-dark">Why Your Current Website Isn't Bringing in Customers</h3>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              If you already have a website but it's not generating leads, it's likely failing in one of three areas: Visibility, Trust, or Conversion. 
              <strong>Visibility:</strong> If people can't find you on Google, you don't exist to them. 
              <strong>Trust:</strong> If your site looks outdated or unprofessional, people will be afraid to call you. 
              <strong>Conversion:</strong> If your site doesn't have clear call-to-action buttons or an easy way to contact you, people will leave and go to a competitor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="p-8 rounded-2xl bg-white border border-medium-teal/10 shadow-sm">
                <Target className="text-medium-teal mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-primary-dark">Targeted Local SEO</h4>
                <p className="text-primary-dark/50 text-sm font-medium">We ensure you show up when people in your specific area search for your services.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-medium-teal/10 shadow-sm">
                <MessageSquare className="text-medium-teal mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-primary-dark">AI Chat Automation</h4>
                <p className="text-primary-dark/50 text-sm font-medium">Our AI bots engage visitors 24/7, answering questions and booking appointments even while you sleep.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-medium-teal/10 shadow-sm">
                <TrendingUp className="text-medium-teal mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-primary-dark">Conversion Optimization</h4>
                <p className="text-primary-dark/50 text-sm font-medium">We use proven psychological triggers to guide visitors toward clicking that "Call" or "WhatsApp" button.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-medium-teal/10 shadow-sm">
                <BarChart className="text-medium-teal mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-primary-dark">Lead Tracking</h4>
                <p className="text-primary-dark/50 text-sm font-medium">Know exactly where your customers are coming from so you can invest more in what works.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary-dark">Turning Visitors into Customers with AI</h3>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              In South Africa, customers expect fast responses. If you take 4 hours to reply to a WhatsApp message, they've already contacted three other businesses. Our AI Automation systems solve this. By integrating intelligent chatbots that can handle initial inquiries, provide pricing, and even book site visits, you ensure that no lead ever goes cold. This isn't just technology; it's a competitive advantage that directly impacts your bottom line.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-primary-dark">The Power of Local Search</h3>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              When someone searches for "plumber near me" or "best car wash in Sandton," Google uses a specific set of rules to decide who to show. We specialize in Local SEO for South African businesses. We optimize your Google Business Profile and your website's local keywords to ensure you're at the top of the list. Being in the "Map Pack" on Google can increase your phone calls by over 300%.
            </p>

            <div className="bg-white border border-medium-teal/10 p-8 md:p-12 rounded-[2.5rem] my-12 shadow-xl">
              <h4 className="text-2xl font-bold mb-4 text-primary-dark">Want a custom strategy for your business?</h4>
              <p className="text-primary-dark/60 mb-8 font-medium">
                Every business is different. Let's chat about your specific goals and how we can help you reach more customers in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/checkout"
                  className="bg-medium-teal text-light-bg px-8 h-[50px] flex items-center justify-center rounded-[8px] font-semibold uppercase tracking-widest text-[11px] text-center hover:bg-dark-teal transition-all cursor-pointer shadow-lg"
                >
                  Start My Free Build
                </Link>
                <Link 
                  to="/"
                  className="bg-transparent text-primary-dark border-2 border-primary-dark/20 px-8 h-[50px] flex items-center justify-center rounded-[8px] font-semibold uppercase tracking-widest text-[11px] text-center hover:bg-primary-dark/5 transition-all cursor-pointer"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary-dark">Why Results Matter More Than Design</h3>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              A beautiful website that doesn't bring in customers is a failed investment. We focus on results. We look at metrics like conversion rate, cost per lead, and return on investment. Our goal is to make sure that for every Rand you spend with us, you're getting multiple Rands back in new business. That's the Vibrant Web Solutions promise.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetMoreCustomers;
