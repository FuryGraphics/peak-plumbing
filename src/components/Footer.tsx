import { Route } from '../types';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Wrench,
  ShieldCheck,
  LifeBuoy,
  PhoneCall
} from 'lucide-react';

interface FooterProps {
  onNavigate: (route: Route) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const primaryServices = [
    { id: 'repair', name: 'Plumbing Repairs' },
    { id: 'water-heaters', name: 'Water Heaters' },
    { id: 'water-softeners', name: 'Water Softeners' },
    { id: 'drain-cleaning', name: 'Drain Cleaning' },
    { id: 'emergency', name: 'Emergency Plumbing' },
  ];

  const targetCities = [
    { id: 'pocatello', name: 'Pocatello Plumber' },
    { id: 'chubbuck', name: 'Chubbuck' },
    { id: 'blackfoot', name: 'Blackfoot' },
    { id: 'american-falls', name: 'American Falls' },
    { id: 'lava-hot-springs', name: 'Lava Hot Springs' },
  ];

  return (
    <footer className="bg-brand-navy text-gray-200 border-t-4 border-brand-orange">
      {/* Dynamic CTA Banner inside Footer */}
      <div className="bg-brand-slate py-8 px-4 border-b border-brand-navy">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="bg-brand-orange text-white p-3 rounded-full hidden sm:block shadow-lg">
              <PhoneCall className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="font-display text-xl text-white tracking-wide uppercase">Need Emergency Plumbing Assistance?</h3>
              <p className="text-sm text-gray-300">We respond rapidly within Pocatello, Chubbuck, and a 100-mile perimeter.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="tel:+12088971389"
              className="px-6 py-3 font-display font-bold tracking-widest text-center bg-brand-orange text-white hover:bg-brand-amber hover:text-brand-navy rounded shadow transition-all cursor-pointer uppercase"
            >
              Call (208) 897-1389
            </a>
            <button
              onClick={() => onNavigate('quote')}
              className="px-6 py-3 font-display font-bold tracking-widest text-center bg-transparent text-white hover:bg-white hover:text-brand-navy rounded border-2 border-white transition-all cursor-pointer uppercase"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand details & Trust elements */}
        <div className="space-y-6">
          <div>
            <div className="font-display font-bold text-2xl tracking-wide text-white leading-none">
              PEAK PLUMBING
            </div>
            <div className="text-xs text-brand-orange uppercase font-bold tracking-widest mt-1 font-mono">
              Company Inc
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed font-sans">
            Owned and engineered by Travis Zohner, Peak Plumbing Company Inc provides top-tier residential and commercial pipe repair, filtration, and heating systems across Southeast Idaho.
          </p>
          <div className="space-y-2.5 font-mono text-xs">
            <div className="flex items-center gap-2.5 text-gray-300">
              <ShieldCheck className="w-4.5 h-4.5 text-brand-amber" />
              <span>Licensed, Bonded, & Insured</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-300">
              <LifeBuoy className="w-4.5 h-4.5 text-brand-amber animate-spin" style={{ animationDuration: '6s' }} />
              <span>100-Mile Strategic Radius</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick links to services */}
        <div>
          <h3 className="font-display text-white text-base font-bold uppercase tracking-wider mb-6 pb-2.5 border-b border-brand-slate">
            Specialty Services
          </h3>
          <ul className="space-y-3 text-sm">
            {primaryServices.map((service) => (
              <li key={service.id}>
                <button
                  onClick={() => onNavigate(service.id as Route)}
                  className="hover:text-brand-amber text-gray-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Wrench className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{service.name}</span>
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => onNavigate('services')}
                className="text-brand-amber font-semibold hover:underline text-xs tracking-wider uppercase flex items-center gap-1.5 mt-2"
              >
                View Services Grid →
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Local SEO page linking */}
        <div>
          <h3 className="font-display text-white text-base font-bold uppercase tracking-wider mb-6 pb-2.5 border-b border-brand-slate">
            Our Service Areas
          </h3>
          <ul className="space-y-3 text-sm">
            {targetCities.map((city) => (
              <li key={city.id}>
                <button
                  onClick={() => onNavigate(city.id as Route)}
                  className="hover:text-brand-amber text-gray-400 transition-colors cursor-pointer"
                >
                  {city.name} Plumbing
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => onNavigate('areas')}
                className="text-brand-amber font-semibold hover:underline text-xs tracking-wider uppercase flex items-center gap-1.5 mt-2"
              >
                Browse All Areas (7) →
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Concrete Contact Card */}
        <div className="space-y-6">
          <h3 className="font-display text-white text-base font-bold uppercase tracking-wider pb-2.5 border-b border-brand-slate">
            Contact Company Office
          </h3>
          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Office Address</p>
                <p className="text-gray-400">PO Box 2960</p>
                <p className="text-gray-400">Pocatello, ID 83206</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Call Travis Directly</p>
                <a href="tel:+12088971389" className="text-brand-amber hover:underline text-base font-bold block mt-0.5">
                  (208) 897-1389
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Email Address</p>
                <a href="mailto:Peakplumbing.idaho@gmail.com" className="text-gray-400 hover:text-brand-amber break-all">
                  Peakplumbing.idaho@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-brand-slate">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3.5 font-sans font-semibold">Join Travis on Facebook</p>
            <a
              href="https://business.facebook.com/latest/?asset_id=934140323123236"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:scale-105 bg-brand-slate hover:bg-brand-orange text-white px-4 py-2.5 rounded shadow transition-all uppercase tracking-wider text-xs font-bold"
              id="footer-facebook-link"
            >
              <Facebook className="w-4 h-4 fill-white" />
              <span>Facebook Page</span>
            </a>
          </div>
        </div>
      </div>

      {/* Extreme Bottom Sub-rail */}
      <div className="bg-[#070c1a] py-6 px-4 border-t border-brand-slate">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
          <div>
            &copy; {currentYear} Peak Plumbing Company Inc. All Rights Reserved. Registered Professional Contractor in Pocatello, ID.
          </div>
          <div className="flex flex-wrap gap-4 text-gray-400">
            <span>Domain: <strong className="text-brand-amber font-normal">pocatelloplumbingservice.com</strong></span>
            <span className="hidden md:inline">|</span>
            <span>Servicing Southeast Idaho</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
