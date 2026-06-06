import { Route } from '../types';
import {
  Wrench,
  ShieldCheck,
  Zap,
  Users,
  Compass,
  ArrowRight,
  UserCheck,
  HeartHandshake
} from 'lucide-react';
import { assets } from '../utils/images';

interface AboutProps {
  onNavigate: (route: Route) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const coreValues = [
    {
      title: 'Technical Mastery',
      desc: 'Travis Zohner does not believe in shortcuts or quick band-aid fixes. We build and repair code-compliant lines designed to endure freezing conditions and high water mineral pressure.',
      icon: Wrench
    },
    {
      title: 'Neatness & Respect',
      desc: 'We treat your house like our own. Our plumbers wear protective boot covers, lay down drop cloths, and clean up every ounce of copper clippings, dust, and water before leaving.',
      icon: UserCheck
    },
    {
      title: 'Absolute Integrity Services',
      desc: 'If a water heater can be safely repaired rather than replaced, we will tell you. No fabricated diagnostic charges, no up-charging parts, and no hidden travel multipliers.',
      icon: HeartHandshake
    }
  ];

  return (
    <div className="w-full">
      {/* Page header banner with dark Rocky mountain feel */}
      <section className="relative bg-brand-slate py-16 px-4 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('${assets.toolsFlatLay}')`,
          }}
        />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10 animate-fadeIn">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-amber uppercase">Get to Know Peak Plumbing</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-wider text-white">
            Travis Zohner’s Story
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Local owner, registered plumber, and direct provider of honest, high-end contractor services in Pocatello, Idaho.
          </p>
        </div>
      </section>

      {/* Main split narrative layout */}
      <section className="bg-white py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photos Stack */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-orange rounded-xl -rotate-2 transform scale-102 -z-10 opacity-10"></div>
            <img
              src={assets.bathroomRepair}
              alt="Travis consulting plumbing setup"
              referrerPolicy="no-referrer"
              className="rounded-xl shadow-2xl w-full object-cover h-[450px]"
            />
            {/* Embedded citation overlay */}
            <div className="absolute top-6 right-6 bg-brand-navy text-white text-xs font-mono py-2 px-3.5 rounded shadow border border-brand-slate">
              <span>Established Local Contractor</span>
            </div>
          </div>

          {/* Narrative text block */}
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-orange">Integrity First Contractor</span>
            <h2 className="text-3xl md:text-4.5xl uppercase leading-none text-brand-navy">Built On Trust, Experience, & Quality</h2>
            <div className="h-1.5 w-16 bg-brand-orange rounded"></div>

            <p className="text-sm font-sans text-gray-600 leading-relaxed">
              Peak Plumbing Company Inc first took shape out of a simple observation: local Southeast Idaho families and business managers were struggling to find plumbers who showed up on schedule, communicated clearly, and performed durable, high-quality work.
            </p>
            <p className="text-sm font-sans text-gray-600 leading-relaxed">
              Founded and operated by <strong>Travis Zohner</strong>, Peak Plumbing is deeply committed to Southeast Idaho. We understand the unique geomorphic realities of Idaho’s water supply—from the extremely high mineral grains flowing through Pocatello municipal systems to the heavy sand silt common in regional rural farming wells in American Falls and Blackfoot.
            </p>
            <p className="text-sm font-sans text-gray-600 leading-relaxed">
              Whether responding to a burst pipe emergency at midnight or engineering a commercial boiler replacement for a hotel in Lava Hot Springs, Travis and our licensed technicians bring unwavering professionalism, neat work habits, and straightforward pricing to every jobsite.
            </p>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4 items-center">
              <div>
                <p className="font-display text-sm font-bold uppercase text-brand-navy">Travis Zohner</p>
                <p className="text-xs text-gray-500 font-mono">Owner & Chief Operator</p>
              </div>
              <p className="hidden md:block text-xs font-mono text-brand-orange font-bold uppercase tracking-widest pl-4 border-l border-gray-200">
                Pocatello, Chubbuck, & Beyond
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values list */}
      <section className="bg-gray-50 py-16 px-6 md:px-8 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2.5 max-w-xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-orange">Our Principles</span>
            <h2 className="text-2.5xl uppercase text-brand-navy">Values We Bring to Every Idaho Jobsite</h2>
            <div className="h-1.5 w-16 bg-brand-amber mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-white rounded-xl border border-gray-100 p-6 space-y-4 shadow-sm group hover:-translate-y-0.5 transition-all">
                  <div className="bg-brand-navy text-brand-amber p-3.5 rounded-lg inline-block group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="font-display text-lg uppercase text-brand-navy font-bold leading-snug">{val.title}</h3>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="bg-brand-navy text-white py-16 px-6 md:px-8 text-center relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto space-y-6 z-10">
          <h2 className="text-2.5xl md:text-3.5xl uppercase text-white tracking-wide">Ready to Experience Peak Performance?</h2>
          <p className="text-sm text-gray-300 font-sans leading-relaxed max-w-xl mx-auto">
            Reach out to Travis directly for standard scheduling, or submit our easy Quote request with snapshot attachments for straightforward pricing estimates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-brand-orange hover:bg-brand-amber hover:text-brand-navy rounded uppercase tracking-wider font-display font-bold text-xs"
            >
              Contact Our Office
            </button>
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-brand-navy rounded uppercase tracking-wider font-display font-medium text-xs text-white"
            >
              Request Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
