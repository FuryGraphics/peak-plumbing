import { useState } from 'react';
import { Route } from '../types';
import { faqs } from '../data/faqs';
import { HelpCircle, ChevronDown, ChevronUp, Phone, BookOpen } from 'lucide-react';
import { assets } from '../utils/images';

interface FAQPageProps {
  onNavigate: (route: Route) => void;
}

export default function FAQPage({ onNavigate }: FAQPageProps) {
  // Store status array of booleans indicating which index is open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="relative bg-brand-slate py-16 px-4 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('${assets.toolsFlatLay}')`,
          }}
        />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10 animate-fadeIn">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-amber uppercase">Plumbing Answers & Insights</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-wider text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Get straightforward answers directly from Travis Zohner regarding rates, municipal code compliance, and hard water.
          </p>
        </div>
      </section>

      {/* Accordion List Layout */}
      <section className="bg-white py-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-100 rounded-lg p-2 transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-4 flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex gap-3 items-center">
                    <div className="bg-brand-navy/5 text-brand-orange p-1.5 rounded-md shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold uppercase text-xs sm:text-sm text-brand-navy tracking-wide leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-brand-orange shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-10 pb-5 pt-1 text-xs text-gray-600 font-sans leading-relaxed animate-fadeIn border-t border-gray-200/50 mt-1 pl-4 sm:pl-10">
                    <p className="max-w-2xl">{faq.answer}</p>
                    <div className="mt-3.5 flex gap-2.5 items-center">
                      <span className="bg-brand-orange/15 text-brand-orange font-mono text-[9px] uppercase font-bold py-0.5 px-2.5 rounded-full">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Support card block */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-display font-bold uppercase text-xl sm:text-2xl text-brand-navy">
            Have A Different Plumbing Dilemma?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed max-w-lg mx-auto">
            Every home is wired and piped differently. If you are facing a technical issue not addressed here, contact Travis or fill out a quote request sheet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:+12088971389"
              className="px-6 py-3 bg-brand-orange hover:bg-brand-amber text-white hover:text-brand-navy font-display uppercase font-bold tracking-widest text-xs rounded transition-all cursor-pointer flex justify-center items-center gap-2"
            >
              <Phone className="w-4 h-4 animate-bounce" /> Call Office Directly
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-brand-navy hover:bg-brand-slate text-white font-display uppercase font-bold tracking-widest text-xs rounded transition-colors cursor-pointer"
            >
              Ask Our Crew
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
