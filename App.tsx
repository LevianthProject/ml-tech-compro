
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import Services from './views/Services';
import Collaborations from './views/Collaborations';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimationObserver = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="relative min-h-screen">
        <ScrollToTop />
        <AnimationObserver />
        <Navbar />
        
        {/* Global Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="gradient-blur w-96 h-96 bg-cyan-500 top-[-10%] left-[-10%] animate-pulse"></div>
          <div className="gradient-blur w-[30rem] h-[30rem] bg-violet-600 bottom-[-10%] right-[-10%] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/collaborations" element={<Collaborations />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
