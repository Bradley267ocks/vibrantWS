import React from 'react';
import { motion } from 'motion/react';
import { Layout, CheckCircle2, ArrowRight, Smartphone, Globe, Shield, Zap, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const GetMyWebsite = () => {
  const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I%20want%20to%20get%20my%20website%20started%21";

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
              Professional Website Design for <span className="text-electric-blue">South African Small Businesses</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-10">
              Stop losing customers to competitors who have better websites. We build customer-generating machines that work for you 24/7.
            </p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-electric-blue text-black px-8 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
            >
              Get Started on WhatsApp <ArrowRight size={20} />
            </a>
          </motion.div>

          <div className="prose prose-invert prose-neon max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Why Your South African Business Needs a Professional Website in 2026</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              In today's digital age, your website is often the first point of contact between your business and potential customers. In South Africa, where mobile internet usage is skyrocketing, having a professional, mobile-responsive website is no longer a luxury—it's a necessity for survival. Whether you're a plumber in Johannesburg, an electrician in Cape Town, or a salon owner in Durban, your customers are searching for your services online right now. If you're not there, you're giving money away to your competitors.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-white">The High Cost of Not Having a Website</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Many small business owners believe that a Facebook page or a Google Business profile is enough. While these are important tools, they don't replace a dedicated website. Without a website, you don't own your digital presence. You're at the mercy of algorithm changes and platform policies. More importantly, a professional website builds trust. Studies show that over 75% of consumers judge a company's credibility based on its website design. If a potential client can't find a professional site for your business, they'll likely move on to someone who looks more established.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="p-8 rounded-2xl bg-dark-secondary border border-white/10">
                <Smartphone className="text-electric-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-white">Mobile-First Design</h4>
                <p className="text-text-secondary text-sm">Most South Africans access the web via smartphones. Our designs are optimized for the best mobile experience.</p>
              </div>
              <div className="p-8 rounded-2xl bg-dark-secondary border border-white/10">
                <Search className="text-electric-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-white">SEO Optimized</h4>
                <p className="text-text-secondary text-sm">We build sites that Google loves, helping you show up when local customers search for your services.</p>
              </div>
              <div className="p-8 rounded-2xl bg-dark-secondary border border-white/10">
                <Zap className="text-electric-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-white">Ultra-Fast Loading</h4>
                <p className="text-text-secondary text-sm">Speed matters. We ensure your site loads instantly, reducing bounce rates and keeping visitors engaged.</p>
              </div>
              <div className="p-8 rounded-2xl bg-dark-secondary border border-white/10">
                <Shield className="text-electric-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-white">Secure & Reliable</h4>
                <p className="text-text-secondary text-sm">With our R300/month hosting, you get SSL security, daily backups, and 99.9% uptime guarantee.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">Our Results-Driven Approach</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              At Vibrant Web Solutions, we don't just build "pretty" websites. We build customer-generating machines. Every element of our design is focused on one goal: converting visitors into leads and sales. From strategic call-to-action buttons to intuitive navigation, we guide your potential customers through a journey that ends with them contacting you.
            </p>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We understand the unique challenges faced by South African entrepreneurs. That's why we've streamlined our process to deliver high-quality websites in just 48 hours. We know you don't have weeks to wait for a developer to get back to you. You need to be online, and you need to be there now.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-white">Affordable Pricing for Local Growth</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We've structured our pricing to be accessible for every stage of business. Our starter packages begin at just R1000 once-off, with a low monthly fee of R300 for hosting and support. This isn't just an expense; it's an investment in your business's future. For the price of a few takeaway meals, you can have a professional digital storefront that works for you even while you sleep.
            </p>

            <div className="bg-electric-blue/10 border border-electric-blue/20 p-8 rounded-3xl my-12">
              <h4 className="text-2xl font-bold mb-4 text-white">Ready to dominate your local market?</h4>
              <p className="text-text-secondary mb-6">
                Don't let another day go by while your competitors take your potential customers. Let's build a website that actually grows your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-electric-blue text-black px-8 py-4 rounded-full font-bold text-center hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
                >
                  Chat on WhatsApp
                </a>
                <Link 
                  to="/"
                  className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">Frequently Asked Questions About Our Web Design</h3>
            <div className="space-y-6 mb-12">
              <div>
                <h5 className="font-bold text-electric-blue mb-2">How long does it take?</h5>
                <p className="text-text-secondary text-sm">Once we have your content, we can have your site live in 48 hours. We value speed because we know time is money.</p>
              </div>
              <div>
                <h5 className="font-bold text-electric-blue mb-2">What do I need to provide?</h5>
                <p className="text-text-secondary text-sm">We'll need your logo (if you have one), your business details, and a brief description of your services. We can help with the rest!</p>
              </div>
              <div>
                <h5 className="font-bold text-electric-blue mb-2">Is the R300/month mandatory?</h5>
                <p className="text-text-secondary text-sm">Yes, this covers your high-speed hosting, security, backups, and ongoing support. It ensures your site stays healthy and fast.</p>
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
