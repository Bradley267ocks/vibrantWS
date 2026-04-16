import React from 'react';
import { motion } from 'motion/react';
import { Users, TrendingUp, Target, MessageSquare, ArrowRight, Zap, BarChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GetMoreCustomers = () => {
  const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I%20want%20to%20know%20how%20to%20get%20more%20customers%21";

  return (
    <div className="min-h-screen bg-dark-primary text-white font-sans selection:bg-electric-blue selection:text-black">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter mb-8 leading-tight text-white">
              How to Get <span className="text-electric-blue">More Customers</span> Online in South Africa
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-10">
              Stop waiting for the phone to ring. We build systems that proactively find and convert your ideal customers while you focus on your business.
            </p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-electric-blue text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Start Getting Customers <ArrowRight size={20} />
            </a>
          </motion.div>

          <div className="prose prose-invert prose-neon max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">The Secret to Consistent Lead Generation</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Most small businesses in South Africa rely on word-of-mouth. While word-of-mouth is great, it's unpredictable. You can't scale a business on "maybe." To grow, you need a predictable system that brings in new leads every single day. That's where digital marketing and high-converting web design come in. We don't just build websites; we build marketing funnels that turn strangers into paying clients.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-white">Why Your Current Website Isn't Bringing in Customers</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              If you already have a website but it's not generating leads, it's likely failing in one of three areas: Visibility, Trust, or Conversion. 
              <strong>Visibility:</strong> If people can't find you on Google, you don't exist to them. 
              <strong>Trust:</strong> If your site looks outdated or unprofessional, people will be afraid to call you. 
              <strong>Conversion:</strong> If your site doesn't have clear call-to-action buttons or an easy way to contact you, people will leave and go to a competitor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="p-8 rounded-2xl bg-dark-secondary border border-white/10">
                <Target className="text-electric-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-white">Targeted Local SEO</h4>
                <p className="text-text-secondary text-sm">We ensure you show up when people in your specific area search for your services.</p>
              </div>
              <div className="p-8 rounded-2xl bg-dark-secondary border border-white/10">
                <MessageSquare className="text-electric-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-white">AI Chat Automation</h4>
                <p className="text-text-secondary text-sm">Our AI bots engage visitors 24/7, answering questions and booking appointments even while you sleep.</p>
              </div>
              <div className="p-8 rounded-2xl bg-dark-secondary border border-white/10">
                <TrendingUp className="text-electric-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-white">Conversion Optimization</h4>
                <p className="text-text-secondary text-sm">We use proven psychological triggers to guide visitors toward clicking that "Call" or "WhatsApp" button.</p>
              </div>
              <div className="p-8 rounded-2xl bg-dark-secondary border border-white/10">
                <BarChart className="text-electric-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-white">Lead Tracking</h4>
                <p className="text-text-secondary text-sm">Know exactly where your customers are coming from so you can invest more in what works.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">Turning Visitors into Customers with AI</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              In South Africa, customers expect fast responses. If you take 4 hours to reply to a WhatsApp message, they've already contacted three other businesses. Our AI Automation systems solve this. By integrating intelligent chatbots that can handle initial inquiries, provide pricing, and even book site visits, you ensure that no lead ever goes cold. This isn't just technology; it's a competitive advantage that directly impacts your bottom line.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-white">The Power of Local Search</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              When someone searches for "plumber near me" or "best car wash in Sandton," Google uses a specific set of rules to decide who to show. We specialize in Local SEO for South African businesses. We optimize your Google Business Profile and your website's local keywords to ensure you're at the top of the list. Being in the "Map Pack" on Google can increase your phone calls by over 300%.
            </p>

            <div className="bg-electric-blue/10 border border-electric-blue/20 p-8 rounded-3xl my-12">
              <h4 className="text-2xl font-bold mb-4 text-white">Want a custom strategy for your business?</h4>
              <p className="text-text-secondary mb-6">
                Every business is different. Let's chat about your specific goals and how we can help you reach more customers in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_URL}
                  className="bg-electric-blue text-black px-8 py-4 rounded-full font-bold text-center hover:scale-105 transition-transform"
                >
                  Get a Free Strategy Call
                </a>
                <Link 
                  to="/"
                  className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">Why Results Matter More Than Design</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
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
