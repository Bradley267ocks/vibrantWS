import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2, ArrowRight, Smartphone, Clock, Zap, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const WhatsAppContact = () => {
  const WHATSAPP_URL = "https://wa.me/27645192556?text=Hi%2C%20I%27m%20contacting%20you%20from%20your%20website%20for%20a%20consultation%21";

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
              Instant Support and Consultation via <span className="text-electric-blue">WhatsApp</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-10">
              In South Africa, business happens on WhatsApp. Skip the emails and long forms—chat with us directly for instant answers and expert advice.
            </p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-electric-blue text-black px-8 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
            >
              Chat on WhatsApp Now <ArrowRight size={20} />
            </a>
          </motion.div>

          <div className="prose prose-invert prose-neon max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Why We Prioritize WhatsApp for Our Clients</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              WhatsApp is the heartbeat of communication in South Africa. It's fast, it's reliable, and it allows for a level of personal connection that email simply can't match. At Vibrant Web Solutions, we've integrated WhatsApp into every part of our service. From initial consultation to ongoing support, we're just a message away. This means you get answers faster, projects move quicker, and your business grows sooner.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-white">The Benefits of WhatsApp Business Communication</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="p-8 rounded-2xl bg-dark-secondary border border-white/10">
                <Clock className="text-electric-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-white">Instant Replies</h4>
                <p className="text-text-secondary text-sm">No more waiting days for an email response. We aim to reply to all WhatsApp inquiries within minutes during business hours.</p>
              </div>
              <div className="p-8 rounded-2xl bg-dark-secondary border border-white/10">
                <Smartphone className="text-electric-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-white">Easy File Sharing</h4>
                <p className="text-text-secondary text-sm">Send us your logo, photos, and content directly from your phone. It's the easiest way to collaborate on your project.</p>
              </div>
              <div className="p-8 rounded-2xl bg-dark-secondary border border-white/10">
                <Zap className="text-electric-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-white">Voice Notes</h4>
                <p className="text-text-secondary text-sm">Sometimes it's easier to explain your ideas by talking. Send us a voice note and we'll understand exactly what you need.</p>
              </div>
              <div className="p-8 rounded-2xl bg-dark-secondary border border-white/10">
                <Shield className="text-electric-blue mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2 text-white">Personal Service</h4>
                <p className="text-text-secondary text-sm">You're not just a ticket number. You're chatting with real South African experts who care about your business.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">How We Use WhatsApp to Grow Your Business</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              We don't just use WhatsApp for our own communication; we help you use it for yours. Every website we build can include a prominent WhatsApp CTA button, allowing your potential customers to contact you instantly. In the South African market, this can increase lead generation by up to 40% compared to traditional contact forms. People feel more comfortable chatting than filling out a form, and we help you capitalize on that.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-white">A Direct Line to Growth</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              When you choose Vibrant Web Solutions, you're not just getting a web developer; you're getting a digital partner. Our WhatsApp line is always open for our clients. Whether you have a quick question about your hosting, need a small update to your site, or want to discuss a new marketing idea, we're right there in your pocket.
            </p>

            <div className="bg-electric-blue/10 border border-electric-blue/20 p-8 rounded-3xl my-12">
              <h4 className="text-2xl font-bold mb-4 text-white">Have a question right now?</h4>
              <p className="text-text-secondary mb-6">
                Don't hesitate. Click the button below and send us a message. We're ready to help you take the next step in your business journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-electric-blue text-black px-8 py-4 rounded-full font-bold text-center hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
                >
                  Message Us on WhatsApp
                </a>
                <Link 
                  to="/"
                  className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">Safe, Secure, and Professional</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
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
