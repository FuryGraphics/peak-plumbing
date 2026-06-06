import { CitySEO } from '../types';
import { assets } from '../utils/images';

export const cities: CitySEO[] = [
  {
    id: 'pocatello',
    name: 'Pocatello',
    headline: 'Pocatello’s Trusted Local Plumber',
    description: 'Operating directly out of Pocatello, Peak Plumbing Company Inc provides premier residential and commercial services to our home base. From historic bungalows near ISU with aging galvanized iron pipelines to modern custom homes in the University Area and Johnny Creek, Travis and the crew deliver the rugged expertise required to handle high mineral concentrations and deep winter frosts.',
    highlights: [
      'Fast, same-day local response for Pocatello residents',
      'Extensive experience with historic home renovation and copper piping and drain systems',
      'Knowledge of Pocatello Municipal Code and safety compliance',
      'Water softener setups calibrated precisely for the local water table hardness'
    ],
    distance: 'Home Base (0 miles)',
    populationInfo: 'Serving all East, West, and North Side neighborhoods',
    imageUrl: assets.toiletRepair
  },
  {
    id: 'chubbuck',
    name: 'Chubbuck',
    headline: 'Top-Rated Plumbing Services in Chubbuck, ID',
    description: 'Chubbuck is expanding rapidly, with new residential projects and commercial spaces rising along Yellowstone Highway. Peak Plumbing supports Chubbuck homeowners and local business owners with expert contractor solutions. Whether you are installing a high-efficiency water heater in a brand-new build or need immediate drain cleaning in an established hub, our responsive dispatch is just minutes away.',
    highlights: [
      'High-speed response along the Yellowstone Corridor and Hiline Rd',
      'Appliance hookups and new fixture alignments for rapid modern developments',
      'Backflow prevention testing and commercial grease control systems',
      'Strategic tankless water heater installations for busy suburban households'
    ],
    distance: '5 miles north of Pocatello',
    populationInfo: 'Suburban development focus',
    imageUrl: assets.faucetInstallation
  },
  {
    id: 'blackfoot',
    name: 'Blackfoot',
    headline: 'Expert Plumber in Blackfoot, Idaho',
    description: 'As the potato capital of the region, Blackfoot stands as a core community within Peak Plumbing’s service area. With a mix of agricultural facilities, historic downtown venues, and rural residences, pipeline needs vary wildly. Travis Zohner specializes in providing adaptable, tough plumbing designs—be it rural well pump connections, water softeners for high-sediment lines, or commercial maintenance.',
    highlights: [
      'Comprehensive service coverage for both municipal water lines and well networks',
      'Hard water filtration units formulated for agricultural and rural residential wells',
      'Commercial kitchen sewer line maintenance and grease block solutions',
      'Scheduled contractor appointments that respect busy farming timings'
    ],
    distance: '25 miles north of Pocatello via I-15',
    populationInfo: 'Complete service for city limits and outlying homesteads',
    imageUrl: assets.plumberUnderCabinets
  },
  {
    id: 'american-falls',
    name: 'American Falls',
    headline: 'Dependable Plumbing for American Falls Residents',
    description: 'Nestled next to the beautiful American Falls Reservoir, this community enjoys gorgeous scenic views but suffers from heavy hard water and intense freezing drafts blowing off the reservoir. Peak Plumbing is American Falls’ first choice for preventative winterization insulation, water heater replacements, and whole-house softeners that keep fixtures pristine.',
    highlights: [
      'Full pipe winterization, crawl space draft proofing, and freeze remediation',
      'Water heater installations built to handle reservoir-proximity drafts',
      'High-capacity agricultural & residential plumbing repairs',
      'Local service with no bloated "travel fees" or surprise mileage charges'
    ],
    distance: '25 miles west of Pocatello',
    populationInfo: 'Reservoir margin and downtown servicing',
    imageUrl: assets.sumpDrainFlushing
  },
  {
    id: 'lava-hot-springs',
    name: 'Lava Hot Springs',
    headline: 'Commercial & Rental Plumbing in Lava Hot Springs, ID',
    description: 'Lava Hot Springs is famous for its thermal springs, local hotels, and hundreds of vibrant short-term rental cabins. High hot water demands from large traveler turnarounds and unique heavy-mineral geothermal water conditions require a plumber who understands specialized heating elements. Peak Plumbing keeps local lodges and residential vacation rentals operating smoothly.',
    highlights: [
      'High-volume commercial boiler, water heater repair, and backup heater loop setups',
      'Short-term rental plumbing audits, preventative shut-off valves, and smart-sensor tools',
      'Rapid diagnostics to keep tourist-focused cabins up and running',
      'Specialized hard water scale cleaning solutions'
    ],
    distance: '35 miles southeast of Pocatello',
    populationInfo: 'Tourism, guest lodgings, and mountain cabin support',
    imageUrl: assets.underSinkWhitePipes
  },
  {
    id: 'malad',
    name: 'Malad City',
    headline: 'Malad’s Top Choice Plumber for Tough Repairs',
    description: 'Located in the Malad Valley near the Utah border, Malad City stands as a prime example of Peak Plumbing’s rugged, 100-mile comprehensive service perimeter. Malad homeowners trust Peak Plumbing to deliver long-lasting, heavy-duty repair services for older rural setups, sub-zero pipeline freezing protections, and comprehensive copper repiping projects.',
    highlights: [
      'Dedicated deep-valley service coverage reaching Idaho border boundaries',
      'Complete home copper/PEX repipes and high-flow septic line checking',
      'Winter freeze protection and emergency diagnostic callouts',
      'Warm local customer service from an owner-run contractor business'
    ],
    distance: '55 miles south of Pocatello via I-15',
    populationInfo: 'Full valley-wide diagnostic coverage',
    imageUrl: assets.pvcDrainConnections
  },
  {
    id: 'mccammon',
    name: 'McCammon',
    headline: 'McCammon Plumbing Installations and Repairs',
    description: 'A pivotal mountain town crossroads, McCammon requires prompt, heavy-duty service during freezing regional weather. Peak Plumbing is on continuous standby to handle water line failures, well pressure tank adjustments, sub-grade repairs, and general household fixture replacements for local residents and roadside businesses.',
    highlights: [
      'Rapid response down the US-30 highway corridor toward Lava Hot Springs',
      'Well pump water tanks and heavy pressure adjustment services',
      'Complete residential laundry, kitchen, and bathroom upgrades',
      'Available emergency plumbing restoration'
    ],
    distance: '20 miles south of Pocatello',
    populationInfo: 'Mountain crossroads coverage',
    imageUrl: assets.doubleSinkMetalJoint
  }
];
