import React from 'react';
import { motion } from 'motion/react';
import { Rocket, CheckCircle2, ArrowRight, Clock, Shield, Sparkles, PhoneCall } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I%27m%20ready%20to%20get%20started%20with%20my%20new%20website%21";

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
              Start Your <span className="text-electric-blue">Digital Transformation</span> Today
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-10">
              Ready to take your business to the next level? Our 48-hour turnaround means you could be attracting new customers by the day after tomorrow.
            </p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-electric-blue text-black px-8 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
            >
              Get Started Now <ArrowRight size={20} />
            </a>
          </motion.div>

          <div className="prose prose-invert prose-neon max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">The Fast Track to Online Success</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              In the fast-paced South African market, speed is a competitive advantage. While other agencies take weeks or even months to launch a simple website, we've optimized our entire process to get you live in just 48 hours. We believe that every day your business isn't online is a day you're losing money. Our "Get Started" process is designed to be simple, efficient, and results-oriented.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-white">Our Simple 3-Step Process</h3>
            <div className="space-y-8 my-12">
              <div className="flex gap-6 p-6 rounded-2xl bg-dark-secondary border border-white/10">
                <div className="shrink-0 w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center text-electric-blue font-black text-xl">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Consultation & Strategy</h4>
                  <p className="text-text-secondary">We chat via WhatsApp or phone to understand your business, your target audience, and your specific goals. We help you choose the right package for your needs.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-2xl bg-dark-secondary border border-white/10">
                <div className="shrink-0 w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center text-electric-blue font-black text-xl">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Design & Development</h4>
                  <p className="text-text-secondary">Our expert team gets to work immediately. We design a mobile-responsive, SEO-optimized site that reflects your brand and is built to convert visitors into customers.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-2xl bg-dark-secondary border border-white/10">
                <div className="shrink-0 w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center text-electric-blue font-black text-xl">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Launch & Growth</h4>
                  <p className="text-text-secondary">Within 48 hours, your site is live! We don't stop there—we ensure your hosting is stable, your security is tight, and you're ready to start receiving leads.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">What We Need From You</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              To hit our 48-hour target, we need a few things from your side. Don't worry, we make this easy too!
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-white">
                <CheckCircle2 size={20} className="text-neon-green" />
                <span>Your business logo (if you don't have one, we can design one for R300)</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <CheckCircle2 size={20} className="text-neon-green" />
                <span>A brief description of your services and what makes you unique</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <CheckCircle2 size={20} className="text-neon-green" />
                <span>Contact details (Phone, Email, Physical Address if applicable)</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <CheckCircle2 size={20} className="text-neon-green" />
                <span>Any specific images you'd like to use (or we can use high-quality stock photos)</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">Why Wait? Your Competitors Aren't.</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Every hour you spend thinking about it is an hour a potential customer is finding someone else. In the time it takes most agencies to send you a quote, we could have your entire website finished. We only take on a limited number of clients each month to ensure we can maintain this speed without sacrificing quality. Secure your spot today.
            </p>

            <div className="bg-electric-blue/10 border border-electric-blue/20 p-8 rounded-3xl my-12">
              <h4 className="text-2xl font-bold mb-4 text-white">Ready to launch?</h4>
              <p className="text-text-secondary mb-6">
                Click the button below to start our simple onboarding process on WhatsApp. It's the fastest way to get your business online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-electric-blue text-black px-8 py-4 rounded-full font-bold text-center hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
                >
                  I'm Ready - Let's Go!
                </a>
                <Link 
                  to="/"
                  className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">The Vibrant Web Solutions Guarantee</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
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
