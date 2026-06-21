import React from 'react';
import { motion } from 'motion/react';
import { XCircle, ArrowLeft, RefreshCcw, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PaymentCancel = () => {
  return (
    <div className="min-h-screen bg-light-bg flex flex-col justify-center items-center pt-20 text-primary-dark">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full mx-auto p-12 bg-white border border-medium-teal/10 rounded-[3rem] text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-transparent" />
        
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center border border-red-100">
            <XCircle className="text-red-600 w-12 h-12" />
          </div>
        </div>

        <h1 className="text-4xl font-black text-primary-dark mb-4">Payment Cancelled</h1>
        <p className="text-primary-dark/70 font-medium text-lg mb-8 leading-relaxed">
          The transaction was interrupted or cancelled. No funds have been deducted from your account. 
        </p>

        <div className="flex flex-col gap-4 mb-4">
           <Link 
            to="/pricing"
            className="inline-flex items-center gap-2 h-[60px] bg-medium-teal text-light-bg px-10 rounded-[12px] font-bold text-lg hover:bg-dark-teal transition-all w-full justify-center shadow-lg shadow-medium-teal/10"
          >
            <RefreshCcw size={20} />
            Try Again
          </Link>
          <a 
            href="https://wa.me/27645192556?text=Hi%2C%20I%20had%20trouble%20with%20the%20payment%20process"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-[60px] bg-transparent border-2 border-medium-teal text-medium-teal px-10 rounded-[12px] font-bold text-lg hover:bg-medium-teal/5 transition-all w-full justify-center"
          >
            <HelpCircle size={20} />
            Contact Support
          </a>
        </div>

        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-primary-dark/40 hover:text-medium-teal transition-colors py-4 font-bold text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </motion.div>
      <Footer />
    </div>
  );
};

export default PaymentCancel;
