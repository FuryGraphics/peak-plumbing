import { useState } from 'react';
import { Route } from '../types';
import {
  Phone,
  Mail,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Clock
} from 'lucide-react';

interface LeadFormProps {
  type: 'contact' | 'quote';
  defaultService?: string;
  onSuccessNavigate?: (route: Route) => void;
}

export default function LeadForm({ type, defaultService = 'repair', onSuccessNavigate }: LeadFormProps) {
  const [copied, setCopied] = useState(false);
  const email = 'Peakplumbing.idaho@gmail.com';
  const phone = '(208) 897-1389';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Safe baseline check to prevent unused property compiling issues
  if (false && defaultService && onSuccessNavigate) {
    onSuccessNavigate('home');
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div
        className="bg-brand-slate text-white p-6 md:p-8 rounded-xl border border-brand-navy shadow-2xl space-y-6 text-center animate-fadeIn"
        id={`${type}-lead-form`}
      >
        <div className="border-b border-brand-navy pb-4 mb-2">
          <div className="mx-auto bg-brand-orange/10 border border-brand-orange/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-brand-orange animate-pulse">
            <Mail className="w-8 h-8" />
          </div>
          <h3 className="font-display text-2xl text-white uppercase tracking-wide">
            {type === 'quote' ? 'Get a Free Quote' : 'Contact Us Directly'}
          </h3>
          <p className="text-xs text-gray-400 font-sans mt-2 max-w-sm mx-auto">
            We have simplified our inquiries. Skip the forms and email our team with your project details or site photos directly.
          </p>
        </div>

        <div className="space-y-4 text-left">
          {/* Email Card Segment */}
          <div className="bg-brand-navy border border-brand-neutral/15 rounded-lg p-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left w-full md:w-auto">
              <span className="text-[10px] text-brand-orange font-mono font-bold uppercase tracking-widest block mb-1">Direct Email Connection</span>
              <a
                href={`mailto:${email}`}
                className="text-lg md:text-xl font-display font-bold text-white hover:text-brand-orange transition-colors break-all flex items-center gap-1.5"
              >
                {email}
              </a>
            </div>

            <div className="flex gap-2 w-full md:w-auto shrink-0 justify-end">
              <button
                onClick={handleCopy}
                className="flex-1 md:flex-initial py-2 px-3.5 bg-brand-slate hover:bg-brand-orange border border-brand-orange/40 text-xs font-mono uppercase tracking-wider rounded font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-brand-amber" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="flex-1 md:flex-initial py-2 px-3.5 bg-brand-orange hover:bg-brand-amber hover:text-brand-navy text-xs font-mono uppercase tracking-wider rounded font-bold transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Email</span>
              </a>
            </div>
          </div>

          {/* Phone Card Segment */}
          <div className="bg-brand-navy/65 border border-brand-navy rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="bg-brand-orange/20 text-brand-orange p-2 rounded-lg shrink-0">
                <Phone className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-sans">For emergency issues or immediate dispatch:</p>
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                  className="font-display text-base font-bold text-white hover:text-brand-orange transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>

            <a
              href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
              className="py-2 px-4 bg-transparent hover:bg-white hover:text-brand-navy text-white text-xs font-mono uppercase tracking-widest font-extrabold border border-white rounded transition-colors whitespace-nowrap text-center w-full sm:w-auto"
            >
              Call Us
            </a>
          </div>
        </div>

        {/* Informational Benefits List */}
        <div className="bg-brand-navy/30 rounded-lg p-4 border border-brand-navy/40 text-left space-y-3">
          <p className="font-display text-[10px] text-brand-orange uppercase tracking-widest font-bold border-b border-brand-navy/50 pb-1">
            Why direct connection is superior:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 font-sans">
            <div className="flex gap-2 items-start">
              <Clock className="w-3.5 h-3.5 text-brand-amber shrink-0 mt-0.5" />
              <span>Get the direct attention of our master plumber.</span>
            </div>
            <div className="flex gap-2 items-start">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-amber shrink-0 mt-0.5" />
              <span>Easily attach multiple site pictures or diagnostic details.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
