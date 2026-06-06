import { Route } from '../types';
import { cities } from '../data/cities';
import LeadForm from '../components/LeadForm';
import {
  MapPin,
  Map,
  CheckCircle,
  Truck,
  Compass,
  AlertCircle,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { assets } from '../utils/images';

interface ServiceAreasProps {
  currentRoute: Route;
  onNavigate: (route: Route) => void;
}

export default function ServiceAreas({ currentRoute, onNavigate }: ServiceAreasProps) {
  // Check if currentRoute is one of the specific city IDs
  const activeCity = cities.find((c) => c.id === currentRoute);

  // If we are looking at the overall "areas" overview page
  if (!activeCity) {
    return (
      <div className="w-full animate-fadeIn">
        {/* Page Header */}
        <section className="relative bg-brand-slate py-16 px-4 text-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('${assets.toolsFlatLay}')`,
            }}
          />
          <div className="relative max-w-4xl mx-auto space-y-3 z-10">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-amber uppercase font-bold">Southeast Idaho Service Territory</span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-wider text-white">
              Areas We Proudly Serve
            </h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
              Based in Pocatello, Peak Plumbing Company Inc travels up to a 100-mile grid radius to provide top-rated residential & commercial repairs.
            </p>
          </div>
        </section>

        {/* Master areas list section */}
        <section className="bg-white py-16 px-6 md:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-orange">Regional Coverage</span>
              <h2 className="text-2xl md:text-3.5xl uppercase leading-none text-brand-navy">Where Safe Pipelines Meet Idaho Values</h2>
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                We travel along the I-15 and US-30 highway networks to key suburbs, agricultural cities, and resort destinations. Select your municipality below to access custom SEO service pages.
              </p>
            </div>

            {/* List of 7 service cities cards with custom SEO buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <div
                  key={city.id}
                  className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div className="relative h-40 w-full">
                    <img
                      src={city.imageUrl}
                      alt={city.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex gap-1.5 items-center">
                      <MapPin className="w-4 h-4 text-brand-amber" />
                      <span className="text-xs text-white font-mono font-bold">{city.distance}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3 flex-grow">
                    <h3 className="font-display text-lg uppercase text-brand-navy font-bold">{city.name} Plumber</h3>
                    <p className="text-xs text-gray-500 font-sans line-clamp-3 leading-relaxed">
                      {city.description}
                    </p>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => onNavigate(city.id)}
                      className="w-full py-2.5 bg-brand-navy hover:bg-brand-orange text-white text-center rounded font-display tracking-wider text-xs uppercase font-semibold transition-colors cursor-pointer"
                    >
                      Browse {city.name} Page
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic dispatch assurance card */}
        <section className="bg-brand-slate text-white py-14 px-6 md:px-8 border-t border-brand-navy">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="space-y-3 max-w-xl">
              <div className="flex gap-2 items-center text-brand-amber">
                <Truck className="w-6 h-6 animate-pulse" />
                <span className="font-display font-bold uppercase text-xs tracking-widest">Active Dispatch Logistics</span>
              </div>
              <h3 className="font-display uppercase text-white text-lg font-bold">Unsure if you’re within our 100-mile perimeter?</h3>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                If you are managing an agricultural parcel, historic property, or commercial lot in rural Power, Bannock, Bingham, or Oneida counties, we’ve got you covered. Submit your address to talk with Travis.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-brand-orange hover:bg-brand-amber text-white hover:text-brand-navy rounded font-display font-bold tracking-widest text-xs uppercase cursor-pointer uppercase"
            >
              Consult Dispatch Supervisor
            </button>
          </div>
        </section>
      </div>
    );
  }

  // --- LOCALIZED SEO PAGE VIEW ---
  return (
    <div className="w-full animate-fadeIn shadow-inner">
      {/* 1. Localized SEO Hero Header */}
      <section className="relative bg-brand-navy py-12 md:py-16 text-center text-white px-4">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: `url('${activeCity.imageUrl}')` }}
        />
        <div className="relative max-w-4xl mx-auto space-y-3.5 z-10">
          <div className="inline-flex items-center gap-1.5 bg-brand-orange/20 border border-brand-orange/40 text-brand-amber px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Region: {activeCity.distance}</span>
          </div>
          <h1 className="font-display font-black text-2.5xl sm:text-4.5xl uppercase tracking-wider text-white leading-tight">
            {activeCity.headline}
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Professional high-quality residential and commercial plumbing solutions delivered straight to your door in {activeCity.name}.
          </p>
        </div>
      </section>

      {/* 2. Structured SEO Paragraph content split */}
      <section className="bg-white py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main SEO text columns */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl md:text-3.5xl uppercase text-brand-navy">
              Top-Rated Plumbing & Filtration In {activeCity.name}, ID
            </h2>
            <div className="h-1.5 w-16 bg-brand-orange rounded"></div>

            <p className="text-sm font-sans text-gray-600 leading-relaxed">
              {activeCity.description}
            </p>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 md:p-6 space-y-4">
              <h4 className="font-display uppercase text-xs tracking-wider text-brand-orange font-mono font-bold flex items-center gap-1.5 leading-none">
                <AlertCircle className="w-4 h-4 text-brand-orange" />
                <span>Local Climate & Pipeline Factors</span>
              </h4>
              <p className="text-xs text-gray-600 font-sans leading-relaxed">
                Southeast Idaho regions suffer from extreme winter freezing where crawlspaces regularly drop to subzero digits. Furthermore, water supplied in {activeCity.name} carries extremely heavy minerals that cause lime scaling. Peak Plumbing is specialized in installing frost-free hose bibbs, winterizing pipelines, and calibrating water softeners exactly for regional grain counts.
              </p>
            </div>

            {/* highlights checkmarks */}
            <div className="space-y-4 pt-2">
              <h3 className="font-display text-sm uppercase text-brand-navy font-bold">Why {activeCity.name} Chooses Peak Plumbing:</h3>
              <ul className="grid grid-cols-1 gap-3.5 text-xs text-gray-600 font-sans">
                {activeCity.highlights.map((hlt, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle className="w-4.5 h-4.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>{hlt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service link suggestions */}
            <div className="border-t border-gray-100 pt-6 flex flex-wrap gap-3.5">
              <button
                onClick={() => onNavigate('repair')}
                className="px-4 py-2 bg-brand-slate hover:bg-brand-orange text-white text-xs font-mono uppercase rounded transition-colors"
              >
                Pipe Repairs
              </button>
              <button
                onClick={() => onNavigate('water-heaters')}
                className="px-4 py-2 bg-brand-slate hover:bg-brand-orange text-white text-xs font-mono uppercase rounded transition-colors"
              >
                Water Heaters
              </button>
              <button
                onClick={() => onNavigate('water-softeners')}
                className="px-4 py-2 bg-brand-slate hover:bg-brand-orange text-white text-xs font-mono uppercase rounded transition-colors"
              >
                Water Softeners
              </button>
            </div>
          </div>

          {/* Right Column form to schedule */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-navy text-white rounded-xl p-5 border border-brand-slate space-y-4">
              <div className="flex gap-3 items-center">
                <Truck className="w-6 h-6 text-brand-amber animate-bounce" />
                <div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-widest text-brand-amber leading-none">
                    Dispatching to {activeCity.name}
                  </h4>
                  <p className="text-[10px] font-mono text-gray-300 mt-1">Location Radius: {activeCity.distance}</p>
                </div>
              </div>
              <p className="text-xs text-gray-300 font-sans leading-relaxed">
                Travis Zohner regularly travels outward to {activeCity.name}. We bring all necessary copper lines, fittings, and testing equipment directly to your site. Let's get began.
              </p>
            </div>

            <LeadForm type="quote" defaultService="repair" onSuccessNavigate={onNavigate} />
          </div>
        </div>
      </section>
    </div>
  );
}
