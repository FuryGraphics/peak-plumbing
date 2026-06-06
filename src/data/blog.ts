import { BlogPost } from '../types';
import { assets } from '../utils/images';

export const blogPosts: BlogPost[] = [
  {
    id: 'winterizing-pipes',
    title: 'How to Prevent Frozen Pipes in Southeast Idaho',
    excerpt: 'When sub-zero Pocatello winter storms roll in, unprotected copper and PEX lines in crawlspaces or exterior walls can freeze and burst in hours. Read our simple 5-step checklist for safeguarding your home before frost hits.',
    date: 'October 15, 2025',
    readTime: '5 min read',
    imageUrl: assets.waterMeterLeakAdjust,
    category: 'Winter Maintenance'
  },
  {
    id: 'hard-water-guide',
    title: 'Understanding Hard Water: Why Pocatello’s Water Table Scales Fixtures',
    excerpt: 'The beautiful Snake River plain’s aquifer supplies mineral-heavy water. While fine to drink, high calcium and magnesium deposits slowly solidify your water lines, corrode water heaters, and ruin washing machines. Learn how softeners fix this.',
    date: 'September 22, 2025',
    readTime: '7 min read',
    imageUrl: assets.garbageDisposalInstallation,
    category: 'Water Quality'
  },
  {
    id: 'tankless-vs-tank',
    title: 'Water Heater Battle: High-Efficiency Tankless vs. Standard Tank Systems',
    excerpt: 'Is upgrading to a tankless hot water heater really worth the investment? We break down the upfront installation costs, regional utility bill savings, space advantages, and the long-term lifetime expectation for Idaho properties.',
    date: 'August 10, 2025',
    readTime: '6 min read',
    imageUrl: assets.waterHeaterAdjustment,
    category: 'Water Heaters'
  }
];
