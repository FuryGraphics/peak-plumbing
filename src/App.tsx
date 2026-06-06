/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Route } from './types';
import Header from './components/Header';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import ServicesOverview from './pages/ServicesOverview';
import ServicePage from './pages/ServicePage';
import ServiceAreas from './pages/ServiceAreas';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  // Unified list of legitimate router endpoints to validate hash inputs
  const validRoutes: Route[] = [
    'home',
    'about',
    'services',
    'repair',
    'water-heaters',
    'water-softeners',
    'drain-cleaning',
    'emergency',
    'residential',
    'commercial',
    'areas',
    'pocatello',
    'chubbuck',
    'american-falls',
    'blackfoot',
    'lava-hot-springs',
    'malad',
    'mccammon',
    'contact',
    'quote',
    'testimonials',
    'faq',
    'blog',
  ];

  const getRouteFromHash = (): Route => {
    const hash = window.location.hash.replace('#', '');
    return validRoutes.includes(hash as Route) ? (hash as Route) : 'home';
  };

  useEffect(() => {
    const handleHashChange = () => {
      const activeRoute = getRouteFromHash();
      setCurrentRoute(activeRoute);
      // Ensure smooth container resetting on transition
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial evaluation trigger
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: Route) => {
    window.location.hash = `#${route}`;
  };

  // Central Router Dispatcher
  const renderActivePage = () => {
    switch (currentRoute) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesOverview onNavigate={handleNavigate} />;
      case 'repair':
      case 'water-heaters':
      case 'water-softeners':
      case 'drain-cleaning':
      case 'emergency':
      case 'residential':
      case 'commercial':
        return <ServicePage currentRoute={currentRoute} onNavigate={handleNavigate} />;
      case 'areas':
      case 'pocatello':
      case 'chubbuck':
      case 'blackfoot':
      case 'american-falls':
      case 'lava-hot-springs':
      case 'malad':
      case 'mccammon':
        return <ServiceAreas currentRoute={currentRoute} onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'quote':
        return <QuotePage onNavigate={handleNavigate} />;
      case 'testimonials':
        return <ReviewsPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between selection:bg-brand-orange selection:text-white">
      {/* Dynamic Header System */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Container */}
      <main className="flex-grow w-full bg-white">
        {renderActivePage()}
      </main>

      {/* Footer System with Dynamic Triggering */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
