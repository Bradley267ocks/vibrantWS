import React, { useState } from 'react';
import { Mail, Phone, User, Building, MessageSquare, ArrowRight, Loader2, AlertCircle, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PaymentFormProps {
  planName?: string;
  amount?: number;
  isSubscription?: boolean;
}

const PaymentForm: React.FC<PaymentFormProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    whatsappNumber: '',
    businessType: '',
    currentWebsite: '',
    aboutBusiness: '',
    websiteGoals: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit your request. Please try again.');
      }

      setStatus('success');
      
    } catch (err: any) {
      setError(err.message);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-xl mx-auto bg-white border border-medium-teal/10 rounded-3xl p-12 text-center shadow-2xl">
        <div className="w-20 h-20 bg-medium-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-medium-teal" />
        </div>
        <h2 className="text-3xl font-bold text-primary-dark mb-4">Request Sent!</h2>
        <p className="text-primary-dark/70 font-medium mb-8 leading-relaxed">
          Thank you! We've received your request. We'll contact you on WhatsApp within one business day to discuss your free website preview.
        </p>
        <div className="text-xs text-primary-dark/40 font-bold uppercase tracking-widest bg-light-bg py-3 px-6 rounded-xl inline-block">
          Spoke with you soon • Team Vibrant
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-white border border-medium-teal/10 rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="p-8 bg-gradient-to-br from-medium-teal/5 to-transparent border-b border-medium-teal/10">
        <h2 className="text-2xl font-bold text-primary-dark flex items-center gap-2">
          Start Your Free Build Request
        </h2>
        <p className="text-primary-dark/50 font-medium mt-1 text-sm">
          Tell us about your project, and we'll build your private website preview first.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="space-y-4">
          <h3 className="text-xs font-black text-primary-dark uppercase tracking-widest border-b border-medium-teal/5 pb-2">Business & Contact Info</h3>
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary-dark/60 ml-1 flex items-center gap-1">
              <User size={12} /> Full Name *
            </label>
            <input 
              required
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Bradley Ocks"
              className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm text-primary-dark"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary-dark/60 ml-1 flex items-center gap-1">
                <Building size={12} /> Business Name *
              </label>
              <input 
                required
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Your business name"
                className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm text-primary-dark"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary-dark/60 ml-1 flex items-center gap-1">
                <Sparkles size={12} /> Business Type *
              </label>
              <input 
                required
                type="text"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                placeholder="e.g. Plumber, Legal, Retail"
                className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm text-primary-dark"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary-dark/60 ml-1 flex items-center gap-1">
                <Mail size={12} /> Email Address *
              </label>
              <input 
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="bradley@company.co.za"
                className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm text-primary-dark"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary-dark/60 ml-1 flex items-center gap-1">
                <Phone size={12} /> WhatsApp Number *
              </label>
              <input 
                required
                type="tel"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="e.g. 064 519 2556"
                className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm text-primary-dark"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-primary-dark/60 ml-1 flex items-center gap-1">
              <Globe size={12} /> Current Website (Optional)
            </label>
            <input 
              type="text"
              name="currentWebsite"
              value={formData.currentWebsite}
              onChange={handleChange}
              placeholder="e.g. www.mybusiness.co.za"
              className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm text-primary-dark"
            />
          </div>

          <h3 className="text-xs font-black text-primary-dark uppercase tracking-widest border-b border-medium-teal/5 pt-4 pb-2">Project Details</h3>

          <div className="space-y-2">
            <label className="text-xs font-bold text-primary-dark/60 ml-1 flex items-center gap-1">
              <MessageSquare size={12} /> Tell us about your business *
            </label>
            <textarea 
              required
              rows={3}
              name="aboutBusiness"
              value={formData.aboutBusiness}
              onChange={handleChange}
              placeholder="Please describe what your business does, your target audience, and standard services..."
              className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm text-primary-dark resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-primary-dark/60 ml-1 flex items-center gap-1">
              <Sparkles size={12} /> What would you like your website to achieve? *
            </label>
            <textarea 
              required
              rows={3}
              name="websiteGoals"
              value={formData.websiteGoals}
              onChange={handleChange}
              placeholder="e.g. Get more leads, show my portfolio of work, let people book services online..."
              className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm text-primary-dark resize-none"
            />
          </div>
        </div>

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
          disabled={status === 'submitting'}
          type="submit"
          className="btn-primary w-full h-[60px] text-lg flex items-center justify-center gap-2 hover:bg-dark-teal transition-all shadow-lg shadow-medium-teal/20 disabled:opacity-50"
        >
          {status === 'submitting' ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>Send My Request <ArrowRight /></>
          )}
        </button>

        <p className="text-[10px] text-center text-primary-dark/40 font-bold uppercase tracking-widest">
          No Upfront Payment • See your site first, pay R299/mo only if you love it
        </p>
      </form>
    </div>
  );
};

export default PaymentForm;
