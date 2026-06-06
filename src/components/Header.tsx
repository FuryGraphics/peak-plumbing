import { useState } from 'react';
import { Route } from '../types';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Wrench,
  Flame,
  Droplet,
  Shuffle,
  AlertTriangle,
  Home as HomeIcon,
  Building,
  Map
} from 'lucide-react';

interface HeaderProps {
  currentRoute: Route;
  onNavigate: (route: Route) => void;
}

export default function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);

  const handleNav = (route: Route) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
  };

  const servicesMenu = [
    { id: 'repair', name: 'Plumbing Repair', icon: Wrench },
    { id: 'water-heaters', name: 'Water Heaters', icon: Flame },
    { id: 'water-softeners', name: 'Water Softeners', icon: Droplet },
    { id: 'drain-cleaning', name: 'Drain Cleaning', icon: Shuffle },
    { id: 'emergency', name: 'Emergency Services', icon: AlertTriangle, highlight: true },
    { id: 'residential', name: 'Residential Plumbing', icon: HomeIcon },
    { id: 'commercial', name: 'Commercial Plumbing', icon: Building },
  ];

  const citiesMenu = [
    { id: 'pocatello', name: 'Pocatello Plumber' },
    { id: 'chubbuck', name: 'Chubbuck Plumber' },
    { id: 'blackfoot', name: 'Blackfoot Plumber' },
    { id: 'american-falls', name: 'American Falls' },
    { id: 'lava-hot-springs', name: 'Lava Hot Springs' },
    { id: 'malad', name: 'Malad City' },
    { id: 'mccammon', name: 'McCammon' },
  ];

  return (
    <header className="w-full z-50 relative">
      {/* Top utility contact rail */}
      <div className="bg-brand-navy text-white text-xs py-2 px-4 border-b border-brand-slate uppercase tracking-wider font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Business location */}
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-brand-amber animate-pulse" />
            <span>Pocatello, ID & Surrounding Areas (Up to 100 Miles)</span>
          </div>
          {/* Click to Call & Click to Mail */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:Peakplumbing.idaho@gmail.com"
              className="flex items-center gap-1.5 hover:text-brand-amber transition-colors"
              id="top-email-link"
            >
              <Mail className="w-3.5 h-3.5 text-brand-amber" />
              <span className="hidden md:inline">Peakplumbing.idaho@gmail.com</span>
            </a>
            <a
              href="tel:+12088971389"
              className="flex items-center gap-1.5 text-brand-amber font-semibold hover:text-white transition-colors"
              id="top-phone-link"
            >
              <Phone className="w-3.5 h-3.5 animate-bounce" />
              <span>(208) 897-1389</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <nav className="bg-brand-navy text-white shadow-xl sticky top-0 backdrop-blur-md bg-opacity-95 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
          {/* Brand Logo and Title */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer text-left"
            id="brand-logo-btn"
          >
            <div className="bg-brand-orange text-white p-2.5 rounded shadow-lg group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <Wrench className="w-6 h-6 stroke-[3]" />
            </div>
            <div>
              <div className="font-display font-black text-2.5xl tracking-tighter leading-none text-white group-hover:text-brand-orange transition-colors uppercase italic">
                PEAK PLUMBING
              </div>
              <div className="text-[10px] tracking-widest text-brand-orange uppercase font-bold leading-normal mt-0.5 font-mono">
                Company Inc
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleNav('home')}
              className={`font-display text-sm font-black tracking-widest uppercase hover:text-brand-orange transition-colors focus:outline-none cursor-pointer py-2 ${
                currentRoute === 'home' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-gray-100'
              }`}
              id="nav-home-btn"
            >
              Home
            </button>

            <button
              onClick={() => handleNav('about')}
              className={`font-display text-sm font-black tracking-widest uppercase hover:text-brand-orange transition-colors focus:outline-none cursor-pointer py-2 ${
                currentRoute === 'about' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-gray-100'
              }`}
              id="nav-about-btn"
            >
              Our Story
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setAreasDropdownOpen(false);
                }}
                className={`font-display text-sm font-black tracking-widest uppercase hover:text-brand-orange transition-colors focus:outline-none cursor-pointer py-2 flex items-center gap-1 ${
                  ['services', 'repair', 'water-heaters', 'water-softeners', 'drain-cleaning', 'emergency', 'residential', 'commercial'].includes(currentRoute)
                    ? 'text-brand-orange'
                    : 'text-gray-100'
                }`}
                id="nav-services-dropdown"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-64 bg-brand-navy border-2 border-brand-slate rounded shadow-2xl p-2.5 grid grid-cols-1 gap-1 z-50 animate-fadeIn animate-duration-200">
                  <button
                    onClick={() => handleNav('services')}
                    className="w-full text-left font-display font-black text-xs tracking-wider uppercase text-brand-orange hover:bg-brand-slate px-3 py-2 rounded transition-colors flex items-center gap-2 border-b border-brand-slate"
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    All Services Overview
                  </button>
                  {servicesMenu.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNav(item.id as Route)}
                        className={`w-full text-left px-3 py-2 font-display text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-2.5 ${
                          currentRoute === item.id
                            ? 'bg-brand-orange text-white'
                            : item.highlight
                            ? 'text-red-500 hover:bg-red-950/40'
                            : 'text-gray-300 hover:bg-brand-slate hover:text-white'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${item.highlight && currentRoute !== item.id ? 'text-brand-orange animate-pulse' : ''}`} />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setAreasDropdownOpen(!areasDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
                className={`font-display text-sm font-black tracking-widest uppercase hover:text-brand-orange transition-colors focus:outline-none cursor-pointer py-2 flex items-center gap-1 ${
                  ['areas', 'pocatello', 'chubbuck', 'blackfoot', 'american-falls', 'lava-hot-springs', 'malad', 'mccammon'].includes(currentRoute)
                    ? 'text-brand-orange'
                    : 'text-gray-100'
                }`}
                id="nav-areas-dropdown"
              >
                Service Areas
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${areasDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {areasDropdownOpen && (
                <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-60 bg-brand-navy border-2 border-brand-slate rounded shadow-2xl p-2 z-50 animate-fadeIn">
                  <button
                    onClick={() => handleNav('areas')}
                    className="w-full text-left font-display font-black text-xs tracking-wider uppercase text-brand-orange hover:bg-brand-slate px-3 py-2 rounded transition-colors flex items-center gap-2 border-b border-brand-slate mb-1"
                  >
                    <Map className="w-3.5 h-3.5" />
                    Coverage Map & List
                  </button>
                  {citiesMenu.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id as Route)}
                      className={`w-full text-left px-3 py-1.5 font-display text-xs uppercase tracking-wider rounded transition-colors ${
                        currentRoute === item.id
                          ? 'bg-brand-orange text-white'
                          : 'text-gray-300 hover:bg-brand-slate hover:text-white'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('testimonials')}
              className={`font-display text-sm font-black tracking-widest uppercase hover:text-brand-orange transition-colors focus:outline-none cursor-pointer py-2 ${
                currentRoute === 'testimonials' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-gray-100'
              }`}
              id="nav-reviews-btn"
            >
              Reviews
            </button>

            <button
              onClick={() => handleNav('faq')}
              className={`font-display text-sm font-black tracking-widest uppercase hover:text-brand-orange transition-colors focus:outline-none cursor-pointer py-2 ${
                currentRoute === 'faq' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-gray-100'
              }`}
              id="nav-faq-btn"
            >
              FAQ
            </button>

            <button
              onClick={() => handleNav('blog')}
              className={`font-display text-sm font-black tracking-widest uppercase hover:text-brand-orange transition-colors focus:outline-none cursor-pointer py-2 ${
                currentRoute === 'blog' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-gray-100'
              }`}
              id="nav-blog-btn"
            >
              Blog
            </button>

            <button
              onClick={() => handleNav('contact')}
              className={`font-display text-sm font-black tracking-widest uppercase hover:text-brand-orange transition-colors focus:outline-none cursor-pointer py-2 ${
                currentRoute === 'contact' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-gray-100'
              }`}
              id="nav-contact-btn"
            >
              Contact
            </button>

            <button
              onClick={() => handleNav('quote')}
              className="px-6 py-3 font-display text-sm font-black tracking-widest bg-brand-orange hover:bg-brand-slate text-white hover:text-brand-orange border-2 border-transparent hover:border-brand-orange rounded uppercase shadow-xl hover:shadow-brand-orange/20 transform transition-all hover:-translate-y-0.5 cursor-pointer"
              id="nav-quote-btn"
            >
              Free Quote
            </button>
          </div>

          {/* Hamburger Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-brand-amber transition-colors cursor-pointer"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-slate border-t border-brand-navy px-6 py-6 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 gap-2.5">
              <button
                onClick={() => handleNav('home')}
                className={`w-full text-left font-display text-base uppercase py-2 border-b border-brand-navy/60 ${currentRoute === 'home' ? 'text-brand-amber' : 'text-gray-100'}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNav('about')}
                className={`w-full text-left font-display text-base uppercase py-2 border-b border-brand-navy/60 ${currentRoute === 'about' ? 'text-brand-amber' : 'text-gray-100'}`}
              >
                Our Story
              </button>

              {/* Mobile Services Collapse */}
              <div className="space-y-1.5 py-1">
                <div className="font-display text-xs text-brand-orange font-bold uppercase tracking-wider">
                  Our Plumbing Services
                </div>
                <button
                  onClick={() => handleNav('services')}
                  className="w-full text-left font-sans text-sm text-gray-200 hover:text-brand-amber py-1 px-2 border-l-2 border-brand-orange"
                >
                  All Services (Overview)
                </button>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  {servicesMenu.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id as Route)}
                      className={`text-left font-sans text-xs py-1 ${currentRoute === item.id ? 'text-brand-amber font-semibold' : 'text-gray-300'}`}
                    >
                      • {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Towns Collapse */}
              <div className="space-y-1.5 py-1">
                <div className="font-display text-xs text-brand-orange font-bold uppercase tracking-wider">
                  Local Service Cities
                </div>
                <button
                  onClick={() => handleNav('areas')}
                  className="w-full text-left font-sans text-sm text-gray-200 hover:text-brand-amber py-1 px-2 border-l-2 border-brand-orange"
                >
                  Regional Service Areas
                </button>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  {citiesMenu.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id as Route)}
                      className={`text-left font-sans text-xs py-1 ${currentRoute === item.id ? 'text-brand-amber font-semibold' : 'text-gray-300'}`}
                    >
                      • {item.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNav('testimonials')}
                className={`w-full text-left font-display text-base uppercase py-2 border-b border-brand-navy/60 ${currentRoute === 'testimonials' ? 'text-brand-amber' : 'text-gray-100'}`}
              >
                Testimonials
              </button>
              <button
                onClick={() => handleNav('faq')}
                className={`w-full text-left font-display text-base uppercase py-2 border-b border-brand-navy/60 ${currentRoute === 'faq' ? 'text-brand-amber' : 'text-gray-100'}`}
              >
                FAQ
              </button>
              <button
                onClick={() => handleNav('blog')}
                className={`w-full text-left font-display text-base uppercase py-2 border-b border-brand-navy/60 ${currentRoute === 'blog' ? 'text-brand-amber' : 'text-gray-100'}`}
              >
                Commercial & DIY Blog
              </button>
              <button
                onClick={() => handleNav('contact')}
                className={`w-full text-left font-display text-base uppercase py-2 border-b border-brand-navy/60 ${currentRoute === 'contact' ? 'text-brand-amber' : 'text-gray-100'}`}
              >
                Contact Us
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => handleNav('quote')}
                className="w-full py-3 bg-brand-orange text-white text-center font-display uppercase tracking-widest text-sm rounded shadow-lg font-bold"
              >
                Get a Free Quote
              </button>
              <a
                href="tel:+12088971389"
                className="w-full py-3 bg-brand-navy border border-brand-orange text-brand-amber text-center font-display uppercase tracking-widest text-sm rounded flex items-center justify-center gap-2 font-bold"
              >
                <Phone className="w-4 h-4 animate-bounce" /> Call Office
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
