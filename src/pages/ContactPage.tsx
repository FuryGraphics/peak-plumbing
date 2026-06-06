import { Route } from '../types';
import LeadForm from '../components/LeadForm';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  Facebook,
  Wrench
} from 'lucide-react';
import { assets } from '../utils/images';

interface ContactPageProps {
  onNavigate: (route: Route) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const operatingHours = [
    { day: 'Monday', hours: '6:00 AM – 9:00 PM', label: 'Office Available' },
    { day: 'Tuesday', hours: '6:00 AM – 9:00 PM', label: 'Office Available' },
    { day: 'Wednesday', hours: '6:00 AM – 9:00 PM', label: 'Office Available' },
    { day: 'Thursday', hours: '6:00 AM – 9:00 PM', label: 'Office Available' },
    { day: 'Friday', hours: '6:00 AM – 9:00 PM', label: 'Office Available' },
    { day: 'Saturday', hours: '7:00 AM – 6:00 PM', label: 'Emergency Core' },
    { day: 'Sunday', hours: 'Emergency Dispatching Only', label: 'Urgent Care Only', highlight: true },
  ];

  return (
    <div className="w-full">
      {/* Contact Page Header banner */}
      <section className="relative bg-brand-slate py-16 px-4 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('${assets.toolsFlatLay}')`,
          }}
        />
        <div className="relative max-w-4xl mx-auto space-y-3 z-10 animate-fadeIn">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-amber uppercase font-bold">Southeast Idaho Contractor Base</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-wider text-white">
            Contact Peak Plumbing
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Reach Travis and our administrative supervisors easily. Standard scheduling, emergency repairs, or detailed service estimates.
          </p>
        </div>
      </section>

      {/* Main Split Layout */}
      <section className="bg-white py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Core Address Information & Operating Hours */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-orange">Company Dispatch HQ</span>
              <h2 className="font-display text-2xl md:text-3.5xl uppercase text-brand-navy">Office Contact Card</h2>
              <div className="h-1.5 w-16 bg-brand-orange rounded"></div>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                We are headquartered in Pocatello, ID. Rather than maintaining a bloated storefront that inflates our consumer rates, Peak Plumbing operates an active mobile dispatch. Our trucks are pre-packed with brass fittings, PEX tools, camera monitors, and anode rods to deliver immediate service.
              </p>
            </div>

            {/* Structured info pieces */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 border border-gray-100 p-6 rounded-xl shadow-sm">
              <div className="space-y-1.5">
                <div className="flex gap-2 items-center text-brand-navy">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                  <span className="font-display text-xs uppercase font-bold tracking-wider">Mail Address</span>
                </div>
                <div className="text-xs text-gray-600 leading-normal font-sans font-medium pl-7">
                  <p className="text-brand-navy font-bold text-xs uppercase leading-none mb-1">Peak Plumbing Co.</p>
                  <p>PO Box 2960</p>
                  <p>Pocatello, ID 83206</p>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex gap-2 items-center text-brand-navy">
                  <Phone className="w-5 h-5 text-brand-orange animate-pulse" />
                  <span className="font-display text-xs uppercase font-bold tracking-wider">Direct Dial</span>
                </div>
                <div className="pl-7">
                  <a href="tel:+12088971389" className="text-brand-orange text-base font-bold font-sans hover:underline block leading-snug">
                    (208) 897-1389
                  </a>
                  <p className="text-[10px] text-gray-400 font-mono mt-0.5">Click to Call Office</p>
                </div>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-gray-200/50 sm:border-t-0 sm:pt-0">
                <div className="flex gap-2 items-center text-brand-navy">
                  <Mail className="w-5 h-5 text-brand-orange" />
                  <span className="font-display text-xs uppercase font-bold tracking-wider">Direct Email</span>
                </div>
                <div className="pl-7">
                  <a href="mailto:Peakplumbing.idaho@gmail.com" className="text-xs text-gray-600 hover:text-brand-orange break-all font-sans leading-snug block">
                    Peakplumbing.idaho@gmail.com
                  </a>
                  <p className="text-[10px] text-gray-400 font-mono mt-0.5">Checked Daily</p>
                </div>
              </div>

              <div className="space-y-1.5 pt-4 border-t border-gray-200/50 sm:border-t-0 sm:pt-0">
                <div className="flex gap-2 items-center text-brand-navy">
                  <Facebook className="w-5 h-5 text-brand-orange" />
                  <span className="font-display text-xs uppercase font-bold tracking-wider">Social Hub</span>
                </div>
                <div className="pl-7">
                  <a
                    href="https://business.facebook.com/latest/?asset_id=934140323123236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brand-navy font-bold hover:text-brand-orange transition-colors"
                  >
                    <span>Facebook Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating hours table layout */}
            <div className="space-y-4">
              <h3 className="font-display uppercase text-brand-navy text-sm font-bold flex items-center gap-2">
                <Clock className="w-4.5 h-4.5 text-brand-amber" />
                <span>Office Operating & Service Hours</span>
              </h3>
              <div className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse text-xs">
                  <tbody>
                    {operatingHours.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-200/40 last:border-0 ${
                          row.highlight ? 'bg-red-50/60 font-semibold' : ''
                        }`}
                      >
                        <td className="p-3 font-medium text-brand-navy w-1/3">{row.day}</td>
                        <td className={`p-3 font-sans ${row.highlight ? 'text-red-600' : 'text-gray-600'}`}>{row.hours}</td>
                        <td className="p-3 text-right">
                          <span
                            className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full font-bold ${
                              row.highlight
                                ? 'bg-red-100 text-red-600 border border-red-200'
                                : 'bg-brand-navy/5 text-brand-orange'
                            }`}
                          >
                            {row.label}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 md:p-6 space-y-3.5 shadow-sm">
              <div className="flex gap-2.5 items-center">
                <Wrench className="w-5 h-5 text-brand-amber animate-spin" style={{ animationDuration: '8s' }} />
                <h4 className="font-display text-sm font-bold uppercase text-brand-navy leading-none">Standard Message Panel</h4>
              </div>
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                Use the form below to file general queries, request routine plumbing checks, or drop feedback regarding completed jobs. We review and call you back in short order.
              </p>
            </div>

            <LeadForm type="contact" defaultService="repair" onSuccessNavigate={onNavigate} />
          </div>
        </div>
      </section>
    </div>
  );
}
