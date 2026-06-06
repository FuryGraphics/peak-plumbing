import { Route } from '../types';
import { testimonials } from '../data/testimonials';
import { Star, MessageSquare, ShieldCheck, HeartHandshake, Phone } from 'lucide-react';
import { assets } from '../utils/images';

interface ReviewsPageProps {
  onNavigate: (route: Route) => void;
}

export default function ReviewsPage({ onNavigate }: ReviewsPageProps) {
  return (
    <div className="w-full">
      {/* Testimonials Header banner */}
      <section className="relative bg-brand-slate py-16 px-4 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('${assets.toolsFlatLay}')`,
          }}
        />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10 animate-fadeIn">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-amber uppercase font-bold">Uncompromising Quality Assurance</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-wider text-white">
            Honest Customer Reviews
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Read real-world testimonials from residential homeowners and commercial property managers throughout Pocatello & surrounding Southeast Idaho counties.
          </p>
        </div>
      </section>

      {/* Trust Rating Statistics Hero section */}
      <section className="bg-gray-50 border-b border-gray-100 py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-1">
            <p className="font-display font-bold text-5xl text-brand-navy leading-none">4.9</p>
            <div className="flex justify-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-amber text-brand-amber" />
              ))}
            </div>
            <p className="text-[10px] text-gray-400 uppercase font-mono">Weighted Rating Average</p>
          </div>
          <div className="space-y-1 md:border-x border-gray-200 py-2">
            <p className="font-display font-bold text-3xl text-brand-orange leading-none">100%</p>
            <p className="font-sans text-xs font-bold text-brand-navy">Satisfied Compliance</p>
            <p className="text-[10px] text-gray-400 uppercase font-mono">Licensed & Bonded Assurance</p>
          </div>
          <div className="space-y-1.5 flex flex-col items-center justify-center">
            <HeartHandshake className="w-8 h-8 text-brand-orange animate-pulse" />
            <p className="font-display font-bold text-xs uppercase tracking-wide text-brand-navy">Commitment to Integrity</p>
            <p className="text-[10px] text-gray-400 font-sans leading-none">Straightforward rates with zero up-charging</p>
          </div>
        </div>
      </section>

      {/* Grid listing of all active structural testimonials */}
      <section className="bg-white py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 md:p-8 space-y-4 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4.5 h-4.5 fill-brand-amber text-brand-amber" />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono font-bold uppercase">{item.date}</span>
                  </div>

                  <p className="text-xs text-gray-600 font-sans italic leading-relaxed">
                    "{item.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 mt-2 flex justify-between items-center">
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-brand-navy">{item.name}</h4>
                    <p className="text-[10px] text-gray-400 font-mono mt-0.5">{item.location}</p>
                  </div>
                  <span className="bg-brand-navy text-brand-amber border border-brand-slate uppercase font-mono text-[9px] font-bold py-1 px-3 rounded-full shadow-inner tracking-wider">
                    {item.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedbacks CTA Section */}
      <section className="bg-brand-navy text-white text-center py-16 px-6 md:px-8 border-t border-brand-orange">
        <div className="max-w-2xl mx-auto space-y-6">
          <MessageSquare className="w-12 h-12 text-brand-amber mx-auto animate-bounce" />
          <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl text-white">Were You Blown Away By Travis’s Service?</h2>
          <p className="text-xs text-gray-300 font-sans leading-relaxed max-w-md mx-auto">
            We are a small, independently run Southeast Idaho contractor business. Your direct feedback fuels our business. Share your experience with your neighbors!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://business.facebook.com/latest/?asset_id=934140323123236"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-orange hover:bg-brand-amber text-white hover:text-brand-navy font-display uppercase font-bold tracking-widest text-xs rounded transition-colors cursor-pointer"
            >
              Post A Review on Facebook
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-brand-navy text-white font-display uppercase font-bold tracking-widest text-xs rounded transition-all cursor-pointer"
            >
              Write Direct Crew Feedback
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
