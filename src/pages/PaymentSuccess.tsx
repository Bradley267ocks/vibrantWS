import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-light-bg flex flex-col justify-center items-center pt-20">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full mx-auto p-12 bg-white border border-medium-teal/10 rounded-[3rem] text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-medium-teal to-accent-green" />
        
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-medium-teal/10 rounded-full flex items-center justify-center border border-medium-teal/20">
            <CheckCircle2 className="text-medium-teal w-12 h-12" />
          </div>
        </div>

        <h1 className="text-4xl font-black text-primary-dark mb-4">Payment Successful!</h1>
        <p className="text-primary-dark/70 font-medium text-lg mb-8 leading-relaxed">
          Your subscription has been activated successfully. We've sent a detailed receipt to your inbox.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="p-6 bg-light-bg/30 rounded-3xl border border-medium-teal/5 text-left">
             <Mail className="text-medium-teal w-6 h-6 mb-3" />
             <p className="text-sm font-bold text-primary-dark">Check Email</p>
             <p className="text-xs text-primary-dark/40 font-bold mt-1">We've sent your onboarding packet and dashboard login details.</p>
          </div>
          <div className="p-6 bg-light-bg/30 rounded-3xl border border-medium-teal/5 text-left">
             <Smartphone className="text-accent-green w-6 h-6 mb-3" />
             <p className="text-sm font-bold text-primary-dark">WhatsApp Updates</p>
             <p className="text-xs text-primary-dark/40 font-bold mt-1">Join our priority WhatsApp support channel for instant help.</p>
          </div>
        </div>

        <Link 
          to="/"
          className="inline-flex items-center gap-2 h-[60px] bg-medium-teal text-light-bg px-10 rounded-[12px] font-bold text-lg hover:bg-dark-teal transition-all w-full justify-center shadow-lg shadow-medium-teal/10"
        >
          Return to Dashboard
          <ArrowRight size={20} />
        </Link>
      </motion.div>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
