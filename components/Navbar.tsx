
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Collaborations', path: '/collaborations' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <span className="text-white font-futuristic font-bold text-xs">ML</span>
          </div>
          <span className="text-xl font-futuristic font-bold tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
            MINILEMON<span className="text-cyan-400">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-all hover:text-cyan-400 ${
                location.pathname === link.path ? 'text-cyan-400' : 'text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
