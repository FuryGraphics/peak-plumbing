import { Route } from '../types';
import { services } from '../data/services';
import {
  Wrench,
  Flame,
  Droplet,
  Shuffle,
  AlertTriangle,
  Home as HomeIcon,
  Building,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { assets } from '../utils/images';

interface ServicesOverviewProps {
  onNavigate: (route: Route) => void;
}

export default function ServicesOverview({ onNavigate }: ServicesOverviewProps) {
  // Mapping string to corresponding lucide-react icons for type safety
  const iconMap: Record<string, any> = {
    Wrench: Wrench,
    Flame: Flame,
    Droplet: Droplet,
    Shuffle: Shuffle,
    AlertTriangle: AlertTriangle,
    Home: HomeIcon,
    Building: Building
  };

  return (
    <div className="w-full">
      {/* Page header banner with rich hard-hat blue look */}
      <section className="relative bg-brand-slate py-16 px-4 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('${assets.toolsFlatLay}')`,
          }}
        />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10 animate-fadeIn">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-amber uppercase">Professional Contractor Services</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-wider text-white">
            Specialty Plumbing & Heating
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Engineered setups, repairs, and preventive upgrades for homeowners and corporate venues throughout Southeast Idaho.
          </p>
        </div>
      </section>

      {/* Grid listing of all active structural service offerings */}
      <section className="bg-white py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item) => {
              const IconComponent = iconMap[item.icon] || Wrench;
              const isUrgent = item.id === 'emergency';

              return (
                <div
                  key={item.id}
                  className={`bg-gray-50 border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                    isUrgent ? 'border-red-200 hover:border-red-500' : 'border-gray-100 hover:border-brand-orange'
                  }`}
                >
                  <div>
                    {/* Visual Unsplash cover photo with category label Overlay */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className={`p-2 rounded shadow ${isUrgent ? 'bg-red-600 text-white animate-pulse' : 'bg-brand-navy text-brand-amber'}`}>
                          <IconComponent className="w-4 h-4 stroke-[2]" />
                        </div>
                        <span className="text-white text-xs font-display font-bold uppercase tracking-wider">
                          {isUrgent ? 'Urgent Response' : 'Peak Specialty'}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className={`font-display text-lg uppercase font-bold tracking-wide transition-colors ${isUrgent ? 'group-hover:text-red-500' : 'group-hover:text-brand-orange'}`}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-3">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => onNavigate(item.id)}
                      className={`group w-full py-3 text-center font-display font-semibold tracking-wider text-xs uppercase rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                        isUrgent
                          ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse hover:animate-none'
                          : 'bg-brand-navy hover:bg-brand-orange text-white'
                      }`}
                    >
                      <span>Retrieve Specific Pricing Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty Emergency Urgent notification panel */}
      <section className="bg-red-950 text-white py-12 px-6 md:px-8 border-t border-b border-red-500/20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="bg-red-600 text-white p-3.5 rounded-full animate-bounce">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2.5xl uppercase font-bold tracking-wide text-red-100">
                Facing a Bursting Pipe Or Severe Leak?
              </h2>
              <p className="text-xs text-red-300 font-sans mt-1">
                Do not wait. Locate your main manual shut-off valve, close it, and trigger Peak Plumbing dispatch.
              </p>
            </div>
          </div>
          <a
            href="tel:+12088971389"
            className="px-6 py-3 font-display font-bold bg-white text-red-950 hover:bg-brand-amber hover:text-brand-navy transition-all uppercase tracking-widest text-xs rounded uppercase shrink-0 text-center"
          >
            Call (208) 897-1389
          </a>
        </div>
      </section>
    </div>
  );
}
