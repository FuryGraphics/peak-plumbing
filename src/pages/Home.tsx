import { Route } from '../types';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { assets } from '../utils/images';
import {
  Phone,
  ShieldCheck,
  Award,
  Users,
  Compass,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Wrench,
  ThumbsUp,
  Droplet
} from 'lucide-react';

interface HomeProps {
  onNavigate: (route: Route) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // Take top 3 services for sneak-peek grid
  const previewServices = services.slice(0, 3);
  // Take top 3 testimonials
  const previewReviews = testimonials.slice(0, 3);

  const stats = [
    { label: 'Licensed & Insured', desc: 'Full Idaho Compliance', icon: ShieldCheck },
    { label: 'Up to 100 Miles', desc: 'Pocatello out to Malad', icon: Compass },
    { label: 'Local Owner', desc: 'Travis Zohner, Pocatello', icon: Award },
    { label: 'Residential & Commercial', desc: 'Houses, cabins, office shops', icon: Users },
  ];

  const serviceAreas = [
    { city: 'Pocatello', note: 'Office Base' },
    { city: 'Chubbuck', note: 'Fast Dispatch' },
    { city: 'Blackfoot', note: '25 Min Response' },
    { city: 'American Falls', note: 'Reservoir margin' },
    { city: 'Lava Hot Springs', note: 'Cabins & Hotels' },
    { city: 'Malad', note: 'High Boundary' },
    { city: 'McCammon', note: 'Roadside Junction' }
  ];

  return (
    <div className="w-full">
      {/* 1. Large Scenic Full-Bleed Hero Section */}
      <section className="relative h-[80vh] min-h-[550px] w-full flex items-center justify-center bg-brand-navy overflow-hidden">
        {/* Real Mountain / scenic Idaho backdrop image of Snake plains / mountains */}
        <div
          className="absolute inset-x-0 inset-y-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[12s]"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 19, 43, 0.75), rgba(28, 37, 65, 0.85)), url('${assets.toolsFlatLay}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
          }}
        />

        {/* Hero Interactive Text Overlay */}
        <div className="relative max-w-5xl mx-auto text-center px-4 md:px-8 space-y-6 z-10 animate-fadeIn w-full">
          {/* Accent badge */}
          <div className="inline-flex items-center gap-1.5 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange px-4 py-2 rounded text-xs font-mono font-black uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping"></span>
            Professional Idaho Contractor Support
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-white tracking-tighter uppercase leading-none italic">
            Pocatello’s <span className="text-brand-orange font-black">Trusted</span> Plumber
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-semibold">
            Professional Residential & Commercial Plumbing Serving Southeast Idaho Since Day One. Rugged dependability with straightforward flat rates.
          </p>

          <div className="pt-6 flex flex-row justify-center items-center gap-2 sm:gap-4 max-w-2xl mx-auto w-full px-2">
            <a
              href="tel:+12088971389"
              className="px-4 xs:px-6 sm:px-10 py-3 sm:py-5 font-display font-black text-xs xs:text-sm sm:text-lg tracking-wider whitespace-nowrap text-center bg-brand-orange hover:bg-brand-amber text-white hover:text-brand-navy rounded uppercase shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
              id="hero-call-cta"
            >
              <Phone className="w-4 h-4 xs:w-5 h-5 animate-bounce shrink-0" />
              <span>Call Travis Now</span>
            </a>
            <button
              onClick={() => onNavigate('quote')}
              className="px-4 xs:px-6 sm:px-10 py-3 sm:py-5 font-display font-black text-xs xs:text-sm sm:text-lg tracking-wider whitespace-nowrap text-center bg-transparent hover:bg-white hover:text-brand-navy text-white rounded border-2 border-white uppercase transition-all cursor-pointer"
              id="hero-quote-cta"
            >
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* Decorative Pacific Northwest overlay elements */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* 2. Bold Trust Badges Bar */}
      <section className="bg-white border-b-2 border-gray-100 py-10 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex gap-4 items-start text-left group">
                  <div className="text-brand-orange shrink-0">
                    <Icon className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-lg text-brand-navy tracking-tight uppercase leading-none">{stat.label}</h4>
                    <p className="text-xs font-sans text-gray-500 mt-1.5 leading-relaxed">{stat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Core Services Pre-View Grid */}
      <section className="bg-gray-50 py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-orange">Contractor Capabilities</span>
            <h2 className="text-3xl md:text-4.5xl uppercase leading-none text-brand-navy">Specialized Plumbing Services</h2>
            <div className="h-1.5 w-20 bg-brand-orange mx-auto rounded"></div>
            <p className="text-sm text-gray-600 font-sans leading-relaxed">
              We handle standard leak restorations, advanced water filtration, commercial kitchen refittings, and fast-dispatch emergency shutdowns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-brand-slate text-white p-2.5 rounded shadow-md">
                      <Wrench className="w-5 h-5 text-brand-amber" />
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-lg uppercase text-brand-navy leading-snug font-bold">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigate(service.id)}
                    className="group w-full py-2.5 text-center font-display font-semibold tracking-wider text-xs uppercase bg-brand-navy hover:bg-brand-orange text-white rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Inspect Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase font-bold text-brand-orange hover:text-brand-navy transition-colors cursor-pointer border-b-2 border-brand-orange hover:border-brand-navy pb-1"
            >
              <span>Explore All Commercial & Residential Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section with visual metrics */}
      <section className="bg-white py-20 px-6 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image container with shadow frame */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange rounded-lg -z-10 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-brand-navy rounded-lg -z-10"></div>
            <img
              src={assets.plumberUnderCabinets}
              alt="Travis working on pipe fitting"
              referrerPolicy="no-referrer"
              className="rounded-lg shadow-2xl w-full object-cover h-[450px]"
            />
            {/* Embedded stats badge */}
            <div className="absolute bottom-6 right-6 bg-brand-orange text-white p-6 rounded shadow-2xl font-display font-black uppercase tracking-tighter italic text-center">
              <span className="block text-5xl leading-none font-black italic">24/7</span>
              <span className="block text-xs uppercase tracking-widest font-bold mt-1 text-white/90">Expert Support</span>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-orange">Locally Owned & Run</span>
            <h2 className="text-3xl md:text-4.5xl uppercase leading-none text-brand-navy">Why Southeast Idaho Trusts Peak Plumbing</h2>
            <div className="h-1.5 w-16 bg-brand-amber rounded"></div>
            <p className="text-sm text-gray-600 font-sans leading-relaxed">
              We aren’t a distant, bloated franchise network that sends random subcontractors. Peak Plumbing Company Inc is a dedicated contractor business run directly by Travis Zohner. We live where you live, meaning we are intimately familiar with local water table variables and sub-zero freeze dynamics.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-gray-700">
              <li className="flex gap-2.5 items-start">
                <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
                <span><strong className="text-brand-navy">100% Licensed & Bonded</strong> – Full active liability insurance on residential & corporate sites.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <ThumbsUp className="w-5 h-5 text-brand-orange shrink-0" />
                <span><strong className="text-brand-navy">Straightforward Quotations</strong> – We outline exact parts and costs upfront; no surprise charges.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Wrench className="w-5 h-5 text-brand-orange shrink-0" />
                <span><strong className="text-brand-navy">Hardware Endurance</strong> – Installing durable brass, copper, and heavy gauge anode rod heaters.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Droplet className="w-5 h-5 text-brand-orange shrink-0 animate-bounce" />
                <span><strong className="text-brand-navy">Hard Water Calibrated</strong> – Water softener installations fine-tuned to local well grains.</span>
              </li>
            </ul>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 font-display uppercase tracking-wider text-xs font-bold bg-brand-navy hover:bg-brand-orange text-white rounded transition-colors cursor-pointer"
              >
                Read Travis’s Story
              </button>
              <button
                onClick={() => onNavigate('quote')}
                className="px-6 py-3 font-display uppercase tracking-wider text-xs font-bold bg-brand-orange hover:bg-brand-amber hover:text-brand-navy text-white rounded transition-colors cursor-pointer"
              >
                Request Free Inspection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Service Area Section with styled map visual badges */}
      <section className="bg-brand-navy text-white py-20 px-6 md:px-8 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-slate rounded-full -mr-32 -mt-32 opacity-20 filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-amber">Rapid Radial Coverage</span>
            <h2 className="text-3xl md:text-4.5xl uppercase leading-none text-white">Full 100-Mile Regional Dispatch</h2>
            <div className="h-1.5 w-16 bg-brand-orange rounded"></div>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              We travel outwards from our central core in Pocatello, ID, down highways I-15 and US-30 to serve homesteads, corporate facilities, and vacation lodges. No site is too far for Peak Plumbing Company Inc.
            </p>

            {/* List of service area tag badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {serviceAreas.map((area, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(area.city.toLowerCase().replace(' ', '-') as Route)}
                  className="bg-brand-slate hover:bg-brand-orange text-left border border-white/5 hover:border-brand-orange/40 rounded-lg p-3 transition-all cursor-pointer group"
                >
                  <p className="font-display font-bold text-xs uppercase tracking-wider group-hover:text-white text-brand-amber">
                    {area.city}
                  </p>
                  <p className="text-[10px] text-gray-400 font-mono mt-0.5">{area.note}</p>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('areas')}
                className="px-6 py-3 font-display uppercase tracking-widest text-xs font-bold bg-brand-orange hover:bg-brand-amber text-white hover:text-brand-navy rounded transition-all cursor-pointer"
              >
                Inspect Service Areas Detailed Map
              </button>
            </div>
          </div>

          {/* Visual Representative Map Card */}
          <div className="bg-brand-slate border border-white/10 rounded-xl p-6 space-y-6 shadow-2xl">
            <div className="flex justify-between items-center border-b border-white/15 pb-4">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-brand-orange animate-bounce" />
                <div>
                  <h4 className="font-display font-medium uppercase text-xs tracking-wider text-white">Dispatch Logistics Map</h4>
                  <p className="text-[10px] font-mono text-gray-400">Pocatello Base Station</p>
                </div>
              </div>
              <span className="bg-brand-orange/20 text-brand-orange border border-brand-orange/30 text-[10px] px-2.5 py-1 font-mono uppercase font-bold rounded">
                Active Zone
              </span>
            </div>

            {/* Stylized vector coverage region card */}
            <div className="bg-brand-navy border border-white/5 rounded-lg h-56 flex flex-col justify-center items-center text-center p-6 space-y-3 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <Compass className="w-12 h-12 text-brand-amber animate-spin" style={{ animationDuration: '10s' }} />
              <div>
                <p className="font-display text-white text-sm uppercase tracking-widest font-bold">Southeast Idaho Hub</p>
                <p className="text-xs text-gray-400 font-sans max-w-xs mt-1">
                  Pocatello Base Core • Chubbuck • American Falls • Blackfoot • Lava Hot Springs • Out to Malad Valley boundaries
                </p>
              </div>
            </div>

            <p className="text-[10px] text-gray-400 font-sans text-center leading-relaxed">
              * Note: For distant locations past 50 miles, scheduled calls help us align same-day parts packing to streamline repairs.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Quick Highlights of Client Reviews */}
      <section className="bg-white py-20 px-6 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-orange">Client Testimonials</span>
            <h2 className="text-3xl md:text-4.5xl uppercase leading-none text-brand-navy">What Pocatello Neighbors Are Saying</h2>
            <div className="h-1.5 w-16 bg-brand-orange mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewReviews.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl border border-gray-100 p-6 space-y-4 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4.5 h-4.5 fill-brand-amber text-brand-amber" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 font-sans italic leading-relaxed">
                    "{item.review}"
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-display font-bold text-xs uppercase tracking-wide text-brand-navy">{item.name}</p>
                  <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono mt-0.5">
                    <span>{item.location}</span>
                    <span className="text-brand-orange font-bold font-sans uppercase text-[9px]">{item.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('testimonials')}
              className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase font-bold text-brand-navy hover:text-brand-orange transition-colors cursor-pointer border-b-2 border-brand-navy hover:border-brand-orange pb-1"
            >
              <span>Read More Honest Customer Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
