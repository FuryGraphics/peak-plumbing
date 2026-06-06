import { Route } from '../types';
import { services } from '../data/services';
import LeadForm from '../components/LeadForm';
import {
  Wrench,
  Flame,
  Droplet,
  Shuffle,
  AlertTriangle,
  Home as HomeIcon,
  Building,
  CheckCircle,
  PhoneCall,
  ShieldCheck,
  Award
} from 'lucide-react';

interface ServicePageProps {
  currentRoute: Route;
  onNavigate: (route: Route) => void;
}

export default function ServicePage({ currentRoute, onNavigate }: ServicePageProps) {
  // Find the exact active service item based on current route ID
  const service = services.find((s) => s.id === currentRoute);

  // Mapping text IDs to Lucide components
  const iconMap: Record<string, any> = {
    Wrench: Wrench,
    Flame: Flame,
    Droplet: Droplet,
    Shuffle: Shuffle,
    AlertTriangle: AlertTriangle,
    Home: HomeIcon,
    Building: Building
  };

  if (!service) {
    return (
      <div className="bg-white min-h-[60vh] py-20 px-4 text-center space-y-6">
        <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto animate-bounce" />
        <h2 className="font-display text-3xl uppercase text-brand-navy">Service Page Not Found</h2>
        <p className="text-sm font-sans text-gray-500 max-w-sm mx-auto">
          We could not resolve this specific service configuration. Use our navigation menu to explore active options.
        </p>
        <button
          onClick={() => onNavigate('services')}
          className="px-6 py-2 bg-brand-orange text-white uppercase text-xs font-semibold rounded tracking-wider"
        >
          Return to All Services
        </button>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || Wrench;
  const isEmergency = service.id === 'emergency';

  return (
    <div className="w-full animate-fadeIn">
      {/* 1. Dynamic Page Banner Header */}
      <section className="relative bg-brand-navy py-12 md:py-16 px-4 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url('${service.imageUrl}')` }}
        />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10">
          <div className="inline-flex items-center gap-1.5 bg-brand-orange/20 border border-brand-orange/40 text-brand-amber px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold">
            <IconComponent className="w-3 h-3" />
            <span>Specialty Contractor Support</span>
          </div>
          <h1 className="font-display font-black text-2.5xl sm:text-4.5xl uppercase tracking-wider text-white">
            {service.title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Southeast Idaho’s premier plumbing choice for {service.title.toLowerCase()}.
          </p>
        </div>
      </section>

      {/* 2. Urgent Emergency Warning (Special Layout Addition) */}
      {isEmergency && (
        <section className="bg-red-50 border-y border-red-200 py-8 px-6 md:px-8">
          <div className="max-w-4xl mx-auto bg-white border-2 border-red-600 rounded-xl p-6 md:p-8 shadow-xl text-center space-y-5 animate-pulse">
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest font-mono inline-block">
              Immediate Assistance Area
            </span>
            <h2 className="font-display text-2.5xl sm:text-3.5xl font-black text-red-600 uppercase leading-none">
              CALL TRAVIS DIRECTLY AT (208) 897-1389
            </h2>
            <p className="text-xs sm:text-sm font-sans text-gray-600 max-w-xl mx-auto leading-relaxed">
              For leaking standard hot water tanks, sub-zero pipe fractures, severe household sewage backups, and structural flooding. If you are experiencing water pooling right now, shut off your main line and dial Travis.
            </p>
            <div>
              <a
                href="tel:+12088971389"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-display uppercase tracking-widest text-sm font-bold rounded-lg shadow-lg shadow-red-600/10 cursor-pointer"
              >
                <PhoneCall className="w-4.5 h-4.5 animate-bounce" />
                <span>Call (208) 897-1389</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 3. Main content body split */}
      <section className="bg-white py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Descriptive text and checklist */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-2xl md:text-3.5xl uppercase text-brand-navy">
                Comprehensive {service.title} Details
              </h2>
              <div className="h-1.5 w-16 bg-brand-orange rounded"></div>
            </div>

            <p className="text-sm font-sans text-gray-600 leading-relaxed">
              {service.longDesc}
            </p>

            {/* Representative Image inside Page Content (Non-AI generated) */}
            <div className="relative rounded-xl overflow-hidden h-72 md:h-96 shadow-lg">
              <img
                src={service.imageUrl}
                alt={service.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white text-xs font-mono flex items-center gap-1.5 bg-brand-slate/90 px-3 py-1.5 rounded">
                <ShieldCheck className="w-4 h-4 text-brand-amber" />
                <span>Licensed Idaho Craftsmanship</span>
              </div>
            </div>

            {/* Checklist of service benefits */}
            <div className="space-y-4">
              <h3 className="font-display uppercase text-brand-navy text-lg font-bold">What’s Included in This Service:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-xs font-sans text-gray-600">
                    <CheckCircle className="w-4.5 h-4.5 text-brand-orange shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Lead capture form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 md:p-6 space-y-4 shadow-sm">
              <div className="flex gap-3 items-center">
                <div className="bg-brand-orange text-white p-2.5 rounded">
                  <IconComponent className="w-5 h-5 text-brand-amber" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold uppercase text-brand-navy leading-none">Schedule Service Now</h4>
                  <p className="text-[10px] text-gray-400 font-sans mt-0.5">Let’s get your plumbing issue handled</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                Provide your contact points below. Travis Zohner or our billing deputy will review scheduling and reach you within 2 hours.
              </p>
            </div>

            <LeadForm type="contact" defaultService={service.id} onSuccessNavigate={onNavigate} />
          </div>
        </div>
      </section>
    </div>
  );
}
