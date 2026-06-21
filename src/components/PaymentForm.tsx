import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ArrowRight, Loader2, Info, AlertCircle } from 'lucide-react';

interface PaymentFormProps {
  planName?: string;
  amount?: number;
  isSubscription?: boolean;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ 
  planName = "Build Slot Reservation", 
  amount = 0, 
  isSubscription = false 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    whatsapp: '',
    currentWebsite: '',
    businessType: '',
    notes: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'redirecting' | 'error' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      // Step 1: Initiate payment on backend
      const response = await fetch('/api/payfast/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          businessName: formData.businessName,
          amount: amount,
          itemName: planName,
          isSubscription: isSubscription,
          notes: `${formData.businessType} | ${formData.currentWebsite} | ${formData.notes}`
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to initiate payment. Please check with support.');
      }

      const data = await response.json();
      
      // Step 2: Handle redirect to PayFast
      setStatus('redirecting');
      
      // We create a hidden form and submit it to PayFast
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = data.url;

      Object.keys(data.fields).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = data.fields[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      
    } catch (err: any) {
      console.error('Payment error:', err);
      setError(err.message || 'Payment processing failed');
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white border border-medium-teal/10 rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="p-8 bg-gradient-to-br from-medium-teal/5 to-transparent border-b border-medium-teal/10">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-primary-dark flex items-center gap-2">
              Reserve Your Build Slot <ShieldCheck className="text-medium-teal w-6 h-6" />
            </h2>
            <p className="text-primary-dark/50 font-medium mt-1">Start your free website preview process</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-primary-dark/30 uppercase font-black tracking-widest leading-none">Booking Fee</p>
            <p className="text-3xl font-black text-primary-dark mt-1">R{amount}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {/* Step 1: Business Requirements */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-primary-dark uppercase tracking-widest border-b border-medium-teal/5 pb-2">Business Requirements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary-dark/40 ml-1">Full Name</label>
              <input 
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary-dark/40 ml-1">Business Name</label>
              <input 
                required
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary-dark/40 ml-1">Email Address</label>
              <input 
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@business.co.za"
                className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary-dark/40 ml-1">Phone / WhatsApp Number</label>
              <input 
                required
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="082 123 4567"
                className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary-dark/40 ml-1">Current Website (Optional)</label>
              <input 
                type="text"
                name="currentWebsite"
                value={formData.currentWebsite}
                onChange={handleChange}
                placeholder="www.yoursite.co.za"
                className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary-dark/40 ml-1">Business Type</label>
              <input 
                required
                type="text"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                placeholder="e.g. Plumber, Salon, Cafe"
                className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-primary-dark/40 ml-1">Notes About Website Requirements</label>
            <textarea 
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us what you need your website to do..."
              className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm resize-none"
            />
          </div>
        </div>

        <div className="bg-medium-teal/5 p-4 rounded-2xl flex gap-3 items-center border border-medium-teal/10">
          <Info className="text-medium-teal w-5 h-5 shrink-0" />
          <p className="text-[11px] text-primary-dark/60 font-medium">You will be redirected to PayFast's secure engine to complete your reservation.</p>
        </div>

        {/* Status Messages */}
        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex gap-2 items-center text-sm font-bold"
            >
              <AlertCircle size={16} />
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          disabled={status === 'submitting' || status === 'redirecting'}
          type="submit"
          className="btn-primary w-full h-[60px] text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <><Loader2 className="animate-spin" /> Processing...</>
          ) : status === 'redirecting' ? (
            "Redirecting to PayFast..."
          ) : (
            <>Continue to Secure Payment <ArrowRight /></>
          )}
        </button>

        <p className="text-[10px] text-center text-primary-dark/40 font-bold uppercase tracking-widest">
          Secure Payment via PayFast South Africa
        </p>
      </form>
    </div>
  );
};

export default PaymentForm;
