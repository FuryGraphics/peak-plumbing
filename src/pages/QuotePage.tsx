import { Route } from '../types';
import LeadForm from '../components/LeadForm';
import {
  Calculator,
  ShieldCheck,
  ClipboardCheck,
  CheckCircle,
  Phone
} from 'lucide-react';
import { assets } from '../utils/images';

interface QuotePageProps {
  onNavigate: (route: Route) => void;
}

export default function QuotePage({ onNavigate }: QuotePageProps) {
  const estimationRules = [
    {
      title: 'No surprise fees',
      desc: 'Travis Zohner supplies comprehensive itemized estimates before striking any pipeline. If issues arise during repair, we consult you first.'
    },
    {
      title: 'Snapshot Diagnostics',
      desc: 'Our interactive uploader below lets you attach photos of leaking valves or standard hot water heater plates. Travis can audit these visual details to immediately unpack precise parts lists.'
    },
    {
      title: 'Compliant & Safe',
      desc: 'Every quote matches rigid Idaho and uniform municipal building codes. We stand securely behind our structural plumbing crafts.'
    }
  ];

  return (
    <div className="w-full">
      {/* Quote page header banner with elegant amber contractor overlay */}
      <section className="relative bg-brand-slate py-16 px-4 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('${assets.toolsFlatLay}')`,
          }}
        />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10 animate-fadeIn">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-amber uppercase font-bold">Fast Estimator System</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-wider text-white">
            Get A Free Quote
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Outline your home leak or heating project below. Travis and our crew will evaluate visual and address specs to draft transparent estimates.
          </p>
        </div>
      </section>

      {/* Main Quote Content splits */}
      <section className="bg-white py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Estimating principles or benefit highlights */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-orange">Honest Appraisals</span>
              <h2 className="font-display text-2xl md:text-3xl uppercase text-brand-navy">Transparent Estimates For Over 20 Years</h2>
              <div className="h-1.5 w-16 bg-brand-orange rounded"></div>
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                Plumbing work should be based on accurate configurations, not guessing games. We specialize in mapping out reliable repair strategies. Here is what to expect from us:
              </p>
            </div>

            {/* List layout */}
            <div className="space-y-6">
              {estimationRules.map((rule, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-gray-50 border border-gray-100 p-5 rounded-lg shadow-sm">
                  <div className="bg-brand-navy/5 text-brand-orange p-2.5 rounded shrink-0">
                    <ClipboardCheck className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase text-xs sm:text-sm text-brand-navy">{rule.title}</h3>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed mt-1">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-150 pt-6">
              <div className="flex gap-3 items-center text-xs">
                <ShieldCheck className="w-9 h-9 text-brand-orange" />
                <p className="text-gray-400 font-sans leading-tight">
                  Licensed State Plumber License • Fully Bonded and Insured • Safe and Guaranteed Work.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Quote form */}
          <div className="lg:col-span-7">
            <LeadForm type="quote" defaultService="repair" onSuccessNavigate={onNavigate} />
          </div>
        </div>
      </section>
    </div>
  );
}
