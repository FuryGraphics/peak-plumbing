import { Service } from '../types';
import { assets } from '../utils/images';

export const services: Service[] = [
  {
    id: 'repair',
    title: 'Plumbing Repair & Maintenance',
    shortDesc: 'Immediate fix for leaking pipes, running toilets, clogged fixtures, and general hardware wear-and-tear.',
    longDesc: 'From the smallest drip to full-blown pipe replacements, Peak Plumbing restores stability to your home or commercial systems. Idaho winters can be incredibly harsh on pipelines, causing hidden damage and high water bills. Our crew utilizes state-of-the-art diagnostic gear to zero in on leaks and deliver permanent, rugged repairs that stand the test of time.',
    icon: 'Wrench',
    imageUrl: assets.orangeGlovesSinkTrap,
    benefits: [
      'Comprehensive leak detection and diagnostics',
      'High-quality brass, copper, and PEX repiping',
      'Fixtures repair, replacement, and premium hardware installs',
      'Noise vibration reduction in pressurized water lines',
      'Preventative home plumbing inspections'
    ]
  },
  {
    id: 'water-heaters',
    title: 'Water Heater Installation & Repair',
    shortDesc: 'Expert maintenance for traditional tank heaters and high-efficiency tankless units for relentless hot water.',
    longDesc: 'There is nothing worse than an icy shower on an Idaho winter morning. Whether your heater is leaking, making strange knocking sounds, or failing to supply hot water, we have the specialized expertise to restore comfort. We install heavy-duty traditional tanks and high-efficiency tankless water heaters built for long-term endurance and lower energy consumption.',
    icon: 'Flame',
    imageUrl: assets.waterHeaterAdjustment,
    benefits: [
      'Industrial-grade gas & electric standard tank installations',
      'Advanced tankless water heater integration for continuous hot water',
      'Corrosion protection anode rod replacements',
      'Sediment flushing and thermodynamic optimization',
      'Emergency valve and thermal expansion tank maintenance'
    ]
  },
  {
    id: 'water-softeners',
    title: 'Water Softener & Filtration Systems',
    shortDesc: 'Eliminate scale buildup, soap residue, and pipe corrosion with premium mineral filtration engineered for Idaho’s hard water.',
    longDesc: 'The Snake River aquifer delivers beautiful water but carries ultra-high mineral content. This hard water leads to stubborn scale buildup inside your pipes, clogs water-using appliances, compromises water heater efficiency, and leaves white residue on fixtures. Peak Plumbing installs top-tier water softening and whole-house filtration systems that purge scaling minerals, extending your plumbing’s lifespan and saving you thousands.',
    icon: 'Droplet',
    imageUrl: assets.waterFilterReplacement,
    benefits: [
      'Whole-house water softener installation with digital controls',
      'Hardness testing and tailored brine tank calibration',
      'Multi-stage clean water filtration and carbon systems',
      'Removal of heavy scale buildup inside home appliances',
      'Eco-efficient salt regeneration cycles'
    ]
  },
  {
    id: 'drain-cleaning',
    title: 'Professional Drain Cleaning',
    shortDesc: 'Clearing stubborn secondary blockages and sewer lines using advanced cabling and camera inspection.',
    longDesc: 'Slow-draining showers, backed-up kitchen sinks, and gurgling drains are warning signs of serious pipeline blockages. Standard store-bought chemical drain cleaners damage pipes and rarely treat the actual source of the block. Peak Plumbing uses robust mechanical cabling (snaking) and state-of-the-art inline drain cameras to safely locate and scour out heavy grease, tree roots, hair, and scale buildup.',
    icon: 'Shuffle',
    imageUrl: assets.showerDrainCleaning,
    benefits: [
      'High-torque mechanical drain cabling & auger clearing',
      'Inline HD sewer camera inspections and structural checks',
      'Kitchen grease, soap scum, and hair extraction',
      'Sewer line root removal and maintenance coaching',
      'Safe, non-chemical processes that protect older drain lines'
    ]
  },
  {
    id: 'emergency',
    title: 'Emergency Plumbing Service',
    shortDesc: 'Rapid dispatcher response for bursting water pipes, severe sewage backups, and catastrophic failures.',
    longDesc: 'Plumbing disasters don’t wait for business hours. Burst pipes, failed sump pumps, and rising raw sewage require immediate intervention to protect your property from structural rot and electrical hazards. Peak Plumbing maintains an alert emergency action status, dispatching our licensed technicians with fully-stocked trucks to solve critical issues in record time.',
    icon: 'AlertTriangle',
    imageUrl: assets.pipeWrenchUnderSink,
    benefits: [
      'Urgent dispatch with fully equipped service vehicles',
      'Emergency main water shut-off and system depressurization',
      'Sump pump failure resolution and emergency bypass setup',
      'Rapid pipe patching and sewer backup relief',
      'Clear, honest upfront pricing despite the high-stress urgency'
    ]
  },
  {
    id: 'residential',
    title: 'Residential Plumbing Services',
    shortDesc: 'A complete spectrum of household plumbing services, high-quality remodels, and fixture upgrades with premium care.',
    longDesc: 'Your home is your most valuable asset, and a properly functioning plumbing system keeps it comfortable and safe. We provide Pocatello homeowners with clean, respectful, and reliable services including fixture replacements, bathroom and kitchen remodeling support, garbage disposal installs, water line rerouting, and custom upgrades. Our team wears boot covers and leaves your home spotless.',
    icon: 'Home',
    imageUrl: assets.bathroomRepair,
    benefits: [
      'Custom bathroom and kitchen plumbing installations',
      'Garbage disposal and appliance hookups',
      'Sillcock upgrades and outdoor plumbing freeze-proofing',
      'Sump pump monitoring and back-up battery installs',
      'Residential gas line plumbing and appliance connections'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Plumbing Solutions',
    shortDesc: 'Heavy-duty water installations, commercial boiler repair, grease trap maintenance, and code compliance for Idaho businesses.',
    longDesc: 'A commercial plumbing failure can halt your operations, impact your customers, and lead to lost revenue. Peak Plumbing understands the technical standards, local commercial codes, and heavy-duty performance requirements of local retail, restaurants, medical clinics, offices, and multi-family complexes. We deliver custom scheduled maintenance and fast repairs to keep your business operating.',
    icon: 'Building',
    imageUrl: assets.commercialPipeFitting,
    benefits: [
      'Commercial grease trap plumbing and maintenance',
      'Multi-stall restroom repairs, automatic sensor valve installs',
      'High-volume commercial water heaters and boilers',
      'Backflow preventer assembly testing and installation',
      'Scheduled preventive commercial maintenance packages'
    ]
  }
];
