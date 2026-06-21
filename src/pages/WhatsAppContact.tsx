import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2, ArrowRight, Smartphone, Clock, Zap, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const WhatsAppContact = () => {
  const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I%27m%20contacting%20you%20from%20your%20website%20for%20a%20consultation%21";

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
              Instant Support and Consultation via <span className="text-medium-teal italic">WhatsApp</span>
            </h1>
            <p className="text-xl text-primary-dark/70 leading-relaxed mb-10 font-medium">
              In South Africa, business happens on WhatsApp. Skip the emails and long forms—chat with us directly for instant answers and expert advice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-[50px] bg-medium-teal text-light-bg px-8 rounded-[10px] font-semibold flex items-center justify-center gap-2 hover:bg-dark-teal transition-all cursor-pointer shadow-lg shadow-medium-teal/10"
              >
                Chat on WhatsApp Now <ArrowRight size={20} />
              </a>
              <Link 
                to="/checkout"
                className="w-full sm:w-auto h-[50px] bg-primary-dark text-light-bg px-8 rounded-[10px] font-semibold flex items-center justify-center gap-2 hover:bg-medium-teal transition-all cursor-pointer shadow-lg"
              >
                Start Free Build
              </Link>
            </div>
          </motion.div>

          <div className="prose prose-slate max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary-dark">Why We Prioritize WhatsApp for Our Clients</h2>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              WhatsApp is the heartbeat of communication in South Africa. It's fast, it's reliable, and it allows for a level of personal connection that email simply can't match. At Vibrant Web Solutions, we've integrated WhatsApp into every part of our service. From initial consultation to ongoing support, we're just a message away. This means you get answers faster, projects move quicker, and your business grows sooner.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-primary-dark">The Benefits of WhatsApp Business Communication</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="p-8 rounded-2xl bg-white border border-medium-teal/10 shadow-sm">
                <Clock className="text-medium-teal mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-primary-dark">Instant Replies</h4>
                <p className="text-primary-dark/50 text-sm font-medium">No more waiting days for an email response. We aim to reply to all WhatsApp inquiries within minutes during business hours.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-medium-teal/10 shadow-sm">
                <Smartphone className="text-medium-teal mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-primary-dark">Easy File Sharing</h4>
                <p className="text-primary-dark/50 text-sm font-medium">Send us your logo, photos, and content directly from your phone. It's the easiest way to collaborate on your project.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-medium-teal/10 shadow-sm">
                <Zap className="text-medium-teal mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-primary-dark">Voice Notes</h4>
                <p className="text-primary-dark/50 text-sm font-medium">Sometimes it's easier to explain your ideas by talking. Send us a voice note and we'll understand exactly what you need.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-medium-teal/10 shadow-sm">
                <Shield className="text-medium-teal mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-primary-dark">Personal Service</h4>
                <p className="text-primary-dark/50 text-sm font-medium">You're not just a ticket number. You're chatting with real South African experts who care about your business.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary-dark">How We Use WhatsApp to Grow Your Business</h3>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              We don't just use WhatsApp for our own communication; we help you use it for yours. Every website we build can include a prominent WhatsApp CTA button, allowing your potential customers to contact you instantly. In the South African market, this can increase lead generation by up to 40% compared to traditional contact forms. People feel more comfortable chatting than filling out a form, and we help you capitalize on that.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-primary-dark">A Direct Line to Growth</h3>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              When you choose Vibrant Web Solutions, you're not just getting a web developer; you're getting a digital partner. Our WhatsApp line is always open for our clients. Whether you have a quick question about your hosting, need a small update to your site, or want to discuss a new marketing idea, we're right there in your pocket.
            </p>

            <div className="bg-white border border-medium-teal/10 p-8 md:p-12 rounded-[2.5rem] my-12 shadow-xl">
              <h4 className="text-2xl font-bold mb-4 text-primary-dark">Have a question right now?</h4>
              <p className="text-primary-dark/60 mb-8 font-medium">
                Don't hesitate. Click the button below and send us a message. We're ready to help you take the next step in your business journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-medium-teal text-light-bg h-[50px] px-8 rounded-[10px] font-semibold text-center flex items-center justify-center hover:bg-dark-teal transition-all cursor-pointer shadow-lg shadow-medium-teal/10"
                >
                  Message Us on WhatsApp
                </a>
                <Link 
                  to="/checkout"
                  className="bg-primary-dark text-light-bg h-[50px] px-8 rounded-[10px] font-semibold text-center flex items-center justify-center hover:bg-medium-teal transition-all cursor-pointer shadow-lg"
                >
                  Start My Free Build
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary-dark">Safe, Secure, and Professional</h3>
            <p className="text-primary-dark/70 mb-6 leading-relaxed font-medium">
              While WhatsApp is informal, our service is anything but. We maintain professional standards in all our communications, ensuring that your project is documented and your requirements are met with precision. We use WhatsApp to enhance our service, not to replace our commitment to quality and professionalism.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsAppContact;
