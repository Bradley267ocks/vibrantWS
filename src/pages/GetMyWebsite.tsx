import React from 'react';
import { motion } from 'motion/react';
import { Layout, CheckCircle2, ArrowRight, Smartphone, Globe, Shield, Zap, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GetMyWebsite = () => {
  const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I%20want%20to%20get%20my%20website%20started%21";

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
              We Build Your Website <span className="text-medium-teal italic">For Free First</span>
            </h1>
            <p className="text-xl text-primary-dark/70 leading-relaxed mb-10 font-medium">
              Reserve your free build slot today. We'll build a complete preview of your new authority website and send you a private link to review.
            </p>
            <Link 
              to="/checkout"
              className="inline-flex items-center gap-2 h-[56px] bg-medium-teal text-light-bg px-10 rounded-xl font-bold hover:bg-dark-teal transition-all cursor-pointer shadow-lg"
            >
              Start My Free Build Preview <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="prose prose-slate max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary-dark">Why We Build Your Site Before You Pay</h2>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              In a market full of empty promises, we choose to lead with value. We believe that once you see the quality, speed, and conversion potential of our work, you'll want to keep it. This "Build-First" approach removes the stress of hiring a web designer and puts you in the driver's seat. Whether you're a plumber in Johannesburg, an electrician in Cape Town, or a local service provider, you deserve a site that actually generates leads.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-primary-dark">The Benefits of Our Build-First Model</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="p-8 rounded-2xl bg-white border border-medium-teal/10 shadow-xl">
                <Shield className="text-medium-teal mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-primary-dark">Zero Financial Risk</h4>
                <p className="text-primary-dark/50 text-sm font-medium">You don't pay anything upfront. A free booking reserves your slot—we only collect card details to ensure commitment.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-medium-teal/10 shadow-xl">
                <Search className="text-medium-teal mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-primary-dark">SEO Performance Preview</h4>
                <p className="text-primary-dark/50 text-sm font-medium">Your preview site is built with SEO in mind from day one. You'll see exactly how your site is structured to rank on Google.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-medium-teal/10 shadow-xl">
                <Zap className="text-medium-teal mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-primary-dark">7-Day Turnaround</h4>
                <p className="text-primary-dark/50 text-sm font-medium">We move fast. Within 7 business days of your booking, your private preview link will be ready for your review.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-medium-teal/10 shadow-xl">
                <Smartphone className="text-medium-teal mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-primary-dark">R299 All-Inclusive</h4>
                <p className="text-primary-dark/50 text-sm font-medium">No hidden fees. Your subscription covers premium hosting, SSL security, updates, and dedicated support.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary-dark">Affordable Growth for Local Success</h3>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              We've structured our model to be the most affordable way to get a high-quality website in South Africa. For just R299 per month, you get a professionally managed digital storefront that works for you 24/7. No more DIY website struggles or overhead costs.
            </p>

            <div className="bg-white border border-medium-teal/10 p-10 rounded-[2.5rem] my-12 shadow-2xl text-center">
              <h4 className="text-3xl font-bold mb-4 text-primary-dark">Reserve Your Free Build Slot</h4>
              <p className="text-primary-dark/60 mb-8 font-medium">
                We only accept 5 new build-first requests per week to maintain our high quality standards. Reserve yours today for R10.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/checkout"
                  className="bg-medium-teal text-white px-10 h-[56px] flex items-center justify-center rounded-xl font-bold hover:bg-dark-teal transition-all cursor-pointer shadow-lg"
                >
                  Reserve Slot (R10)
                </Link>
                <Link 
                  to="/"
                  className="bg-transparent text-primary-dark border-2 border-primary-dark/20 px-10 h-[56px] flex items-center justify-center rounded-xl font-bold hover:bg-primary-dark/5 transition-all cursor-pointer"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary-dark">Frequently Asked Questions About Our Web Design</h3>
            <div className="space-y-6 mb-12">
              <div className="border-b border-medium-teal/5 pb-6 last:border-0">
                <h5 className="font-bold text-medium-teal mb-2">How long does it take?</h5>
                <p className="text-primary-dark/50 text-sm font-medium">Once we have your content, we can have your site live in 48 hours. We value speed because we know time is money.</p>
              </div>
              <div className="border-b border-medium-teal/5 pb-6 last:border-0">
                <h5 className="font-bold text-medium-teal mb-2">What do I need to provide?</h5>
                <p className="text-primary-dark/50 text-sm font-medium">We'll need your logo (if you have one), your business details, and a brief description of your services. We can help with the rest!</p>
              </div>
              <div className="border-b border-medium-teal/5 pb-6 last:border-0">
                <h5 className="font-bold text-medium-teal mb-2">Is the R299/month mandatory?</h5>
                <p className="text-primary-dark/50 text-sm font-medium">Yes, this covers your high-speed hosting, security, backups, and ongoing support. It ensures your site stays healthy and fast.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetMyWebsite;
