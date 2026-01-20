
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-futuristic font-bold text-xs">ML</span>
              </div>
              <span className="text-2xl font-futuristic font-bold tracking-tighter text-white">
                MINILEMON<span className="text-cyan-400">.</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Designing systems, products, and collaborations for the future. We build digital ecosystems that prioritize long-term impact over short-term trends.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-futuristic text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-slate-400 hover:text-cyan-400 transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/collaborations" className="text-slate-400 hover:text-cyan-400 transition-colors">Collaborations</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors">Company</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-futuristic text-sm font-bold uppercase tracking-widest mb-6">Connect</h4>
            <ul className="space-y-4">
              <li className="text-slate-400">hello@minilemon.tech</li>
              <li className="text-slate-400">careers@minilemon.tech</li>
              <li className="text-slate-400">+1 (555) 123-4567</li>
              <li className="text-slate-400">Silicon Valley, CA</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-widest">
          <p>© 2025 Minilemon Technology. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
