import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowLeft, Lock, Globe, Smartphone, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const plan = queryParams.get('plan') || 'Build-First Preview';
  const amount = 0; // Free build slot reservation reservation

  return (
    <div className="min-h-screen bg-light-bg pt-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-primary-dark">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Order Summary */}
          <div className="flex-1 lg:max-w-md order-2 lg:order-1">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary-dark/40 hover:text-medium-teal transition-colors mb-8 font-semibold text-xs uppercase tracking-widest"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>

            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-white border border-medium-teal/10 rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-xl font-bold text-primary-dark mb-6">Build Slot Details</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-primary-dark text-lg">Free Website Build</p>
                  <p className="text-sm text-primary-dark/50 font-medium">Custom Website Preview Build</p>
                </div>

                <div className="space-y-3 pt-6 border-t border-medium-teal/5">
                   {[
                     "Custom UI/UX Design Draft",
                     "Private Preview Link",
                     "7-Day Turnaround Guarantee",
                     "Mobile-Friendly Prototype",
                     "No Upfront Design Costs"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-2 text-sm text-primary-dark/60 font-medium">
                        <Zap className="w-4 h-4 text-medium-teal" />
                        {item}
                     </div>
                   ))}
                </div>

                <div className="pt-6 border-t border-medium-teal/10 mt-6">
                  <div className="flex justify-between items-center text-xl font-black">
                     <span className="text-primary-dark">Setup Fee</span>
                     <span className="text-medium-teal">R0.00 (Free)</span>
                  </div>
                  <p className="text-[10px] text-primary-dark/30 font-bold text-right mt-1">100% Risk-Free. See your site before you pay.</p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 space-y-6">
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-light-bg flex items-center justify-center shrink-0 border border-medium-teal/5">
                       <ShieldCheck className="w-5 h-5 text-medium-teal" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-primary-dark leading-tight">Pay After Build Model</p>
                       <p className="text-xs text-primary-dark/40 font-medium mt-1">You only subscribe to R299/mo if you love the preview website we build for you.</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Payment Form */}
          <div className="flex-[1.5] order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <PaymentForm planName={plan} amount={amount} isSubscription={false} />
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
