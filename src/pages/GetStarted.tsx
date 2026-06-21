import React from 'react';
import { motion } from 'motion/react';
import { Rocket, CheckCircle2, ArrowRight, Clock, Shield, Sparkles, PhoneCall } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I%27m%20ready%20to%20get%20started%20with%20my%20new%20website%21";

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
              See Your Website <span className="text-medium-teal italic">Before You Pay</span>
            </h1>
            <p className="text-xl text-primary-dark/70 leading-relaxed mb-10 font-medium">
              We've removed the risk of hiring a web designer. We build your authority website first, and you only pay if you love it.
            </p>
            <Link 
              to="/checkout"
              className="inline-flex items-center gap-2 h-[56px] bg-medium-teal text-light-bg px-10 rounded-xl font-bold hover:bg-dark-teal transition-all cursor-pointer shadow-lg"
            >
              Reserve My Build Slot for R10 <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="prose prose-slate max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary-dark">The Risk-Free Way to Get Online</h2>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              Traditional web design requires thousands of Rands upfront for a product you haven't seen. At Vibrant Web Solutions, we do things differently. We believe in our skill and your business. That's why we build your full website preview first. If it's not everything you hoped for, you don't pay another cent.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-primary-dark">Our New Hire-Free Process</h3>
            <div className="space-y-8 my-12">
              <div className="flex gap-6 p-8 rounded-3xl bg-white border border-medium-teal/10 shadow-xl">
                <div className="shrink-0 w-12 h-12 bg-medium-teal/10 rounded-xl flex items-center justify-center text-medium-teal font-black text-xl">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-primary-dark">Reserve Your Slot (R10)</h4>
                  <p className="text-primary-dark/60 font-medium mb-0">Secure your place in our build queue for free. We collect card details only to verify commitment and prevent spam, ensuring we focus on serious entrepreneurs.</p>
                </div>
              </div>
              <div className="flex gap-6 p-8 rounded-3xl bg-white border border-medium-teal/10 shadow-xl">
                <div className="shrink-0 w-12 h-12 bg-medium-teal/10 rounded-xl flex items-center justify-center text-medium-teal font-black text-xl">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-primary-dark">Get Your Preview Link</h4>
                  <p className="text-primary-dark/60 font-medium mb-0">Our team builds your high-converting authority site in 5-7 business days and sends you a private preview link to review every detail.</p>
                </div>
              </div>
              <div className="flex gap-6 p-8 rounded-3xl bg-white border border-medium-teal/10 shadow-xl">
                <div className="shrink-0 w-12 h-12 bg-medium-teal/10 rounded-xl flex items-center justify-center text-medium-teal font-black text-xl">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-primary-dark">Activate & Scale (R299/mo)</h4>
                  <p className="text-primary-dark/60 font-medium mb-0">Love the result? Activate your R299/month subscription to take the site live on your domain. If not, walk away with no further obligation.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary-dark">What's Included in the R299/mo?</h3>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              We've bundled everything a South African business needs into one affordable price. No hidden extras.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 list-none p-0">
              {[
                "Premium High-Speed Hosting",
                "SSL Security Certificate",
                "Daily Automated Backups",
                "Unlimited Technical Support",
                "Domain Name Management",
                "Monthly Performance Reports"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary-dark/70 font-medium bg-secondary-bg/50 p-4 rounded-xl">
                  <CheckCircle2 size={18} className="text-medium-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-primary-dark text-white p-8 md:p-12 rounded-[2.5rem] my-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-medium-teal/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <h4 className="text-3xl font-bold mb-4 relative z-10">Start Your No-Risk Build</h4>
              <p className="text-white/70 mb-8 font-medium relative z-10 max-w-xl">
                We are currently accepting 3 new builds this week. Reserve your slot now to avoid waiting for the next opening.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Link 
              to="/checkout"
              className="inline-flex items-center gap-2 h-[56px] bg-medium-teal text-light-bg px-10 rounded-xl font-bold hover:bg-dark-teal transition-all cursor-pointer shadow-lg"
            >
              Reserve Slot for R10
            </Link>
                <Link 
                  to="/"
                  className="bg-white/10 text-white border-2 border-white/20 px-8 h-[56px] flex items-center justify-center rounded-xl font-bold text-center hover:bg-white/20 transition-all cursor-pointer"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary-dark">The Vibrant Web Solutions Guarantee</h3>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              We are committed to your success. Our websites are built using the latest technologies and best practices for SEO and conversion. We don't just hand over a site and disappear. With our monthly hosting and support, we're your long-term digital partners, ensuring your site stays fast, secure, and effective as your business grows.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
