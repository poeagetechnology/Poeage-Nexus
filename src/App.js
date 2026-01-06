import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import WhatsAppButton from './Component/WhatsAppButton';

// Lazy load pages for better performance
const Home = lazy(() => import('./Component/Home'));
const About = lazy(() => import('./Component/About'));
const Projects = lazy(() => import('./Component/Projects'));
const Services = lazy(() => import('./Component/Services'));
const Contact = lazy(() => import('./Component/Contact'));
const Clients = lazy(() => import('./Component/Clients'));
const Jobs = lazy(() => import('./Component/Jobs'));
const HowItWorks = lazy(() => import('./Component/HowItWorks'));
const Hire = lazy(() => import('./Component/Hire'));
const NotFound = lazy(() => import('./Component/NotFound'));
const PrivacyPolicy = lazy(() => import('./Component/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./Component/TermsConditions'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {  
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/work' element={<HowItWorks />} />
          <Route path='/hire' element={<Hire />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<TermsConditions />} />
          {/* 404 - Catch all unmatched routes */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
