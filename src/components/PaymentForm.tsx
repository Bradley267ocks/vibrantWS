import React from 'react';
import { ShieldCheck, ArrowRight, Info } from 'lucide-react';

interface PaymentFormProps {
  planName?: string;
  amount?: number;
  isSubscription?: boolean;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ 
  planName = "Website Build Reservation Fee", 
  amount = 10, 
  isSubscription = false 
}) => {
  return (
    <div className="w-full max-w-xl mx-auto bg-white border border-medium-teal/10 rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="p-8 bg-gradient-to-br from-medium-teal/5 to-transparent border-b border-medium-teal/10">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-primary-dark flex items-center gap-2">
              Reserve Your Build Slot <ShieldCheck className="text-medium-teal w-6 h-6" />
            </h2>
            <p className="text-primary-dark/50 font-medium mt-1">Pay R10 to secure your development queue</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-primary-dark/30 uppercase font-black tracking-widest leading-none">Price</p>
            <p className="text-3xl font-black text-primary-dark mt-1">R10.00</p>
          </div>
        </div>
      </div>

      <form 
        action="https://www.payfast.co.za/eng/process" 
        method="POST" 
        className="p-8 space-y-6"
      >
        {/* PayFast Hidden Fields */}
        <input type="hidden" name="merchant_id" value="21135185" />
        <input type="hidden" name="merchant_key" value="[INSERT_MERCHANT_KEY_HERE]" />
        <input type="hidden" name="amount" value="10.00" />
        <input type="hidden" name="item_name" value="Website Build Reservation Fee" />
        <input type="hidden" name="m_payment_id" value={`vibrant_${Date.now()}`} />
        
        {/* Return URLs */}
        <input type="hidden" name="return_url" value={`${window.location.origin}/success`} />
        <input type="hidden" name="cancel_url" value={`${window.location.origin}/cancel`} />
        <input type="hidden" name="notify_url" value={`${window.location.origin}/notify`} />

        {/* Security / Signature (Placeholder if required) */}
        {/* <input type="hidden" name="signature" value="..." /> */}

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-primary-dark uppercase tracking-widest border-b border-medium-teal/5 pb-2">Your Contact Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary-dark/40 ml-1">First Name</label>
              <input 
                required
                type="text"
                name="name_first"
                placeholder="John"
                className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary-dark/40 ml-1">Last Name</label>
              <input 
                required
                type="text"
                name="name_last"
                placeholder="Doe"
                className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-primary-dark/40 ml-1">Email Address</label>
            <input 
              required
              type="email"
              name="email_address"
              placeholder="name@business.co.za"
              className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-primary-dark/40 ml-1">Phone Number</label>
            <input 
              required
              type="tel"
              name="cell_number"
              placeholder="082 123 4567"
              className="w-full bg-light-bg/50 border border-medium-teal/10 rounded-xl py-3 px-4 focus:border-medium-teal outline-none transition-all font-medium text-sm"
            />
          </div>
        </div>

        <div className="bg-medium-teal/5 p-4 rounded-2xl flex gap-3 items-center border border-medium-teal/10">
          <Info className="text-medium-teal w-5 h-5 shrink-0" />
          <p className="text-[11px] text-primary-dark/60 font-medium">You will be redirected to PayFast's secure engine to complete your R10 payment.</p>
        </div>

        <button 
          type="submit"
          className="btn-primary w-full h-[60px] text-lg flex items-center justify-center gap-2 hover:bg-dark-teal transition-all shadow-lg shadow-medium-teal/20"
        >
          Pay R10 & Reserve My Website <ArrowRight />
        </button>

        <p className="text-[10px] text-center text-primary-dark/40 font-bold uppercase tracking-widest">
          Secure Payment via PayFast South Africa
        </p>
      </form>
    </div>
  );
};

export default PaymentForm;
