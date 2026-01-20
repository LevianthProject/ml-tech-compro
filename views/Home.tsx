
import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Futuristic Network" 
            className="w-full h-full object-cover opacity-30 scale-105"
            style={{ 
              transform: `translateY(${scrollY * 0.4}px) scale(${1.05 + scrollY * 0.0002})`,
              transition: 'transform 0.1s ease-out'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c14]/40 via-transparent to-[#0a0c14]"></div>
        </div>
        
        <div 
          className="container mx-auto px-6 relative z-10 text-center"
          style={{ 
            transform: `translateY(${-scrollY * 0.2}px)`,
            opacity: Math.max(0, 1 - scrollY / 700)
          }}
        >
          <h1 className="text-5xl md:text-8xl font-futuristic font-black mb-8 leading-tight tracking-tighter animate-fade-in-up">
            MINILEMON<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600">
              TECHNOLOGY
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            A product-first technology company designing systems, platforms, and digital ecosystems for long-term impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all transform hover:scale-105 hover:shadow-lg shadow-cyan-500/20 uppercase tracking-widest text-sm">
              Explore Our Vision
            </button>
            <button className="px-10 py-4 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold rounded-full transition-all uppercase tracking-widest text-sm backdrop-blur-sm">
              View Products
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
          <span className="text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative reveal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-futuristic font-bold mb-8 text-glow">Who We Are</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Minilemon Technology is a technology-driven organization that combines product development, professional services, and experimental collaboration into one cohesive ecosystem.
                </p>
                <p>
                  We believe technology should be designed as a long-term system, not as a short-lived project. Our methodology blends deep architectural thinking with agile execution to deliver results that stand the test of time.
                </p>
                <p>
                  Our team is composed of multidisciplinary experts who are passionate about pushing the boundaries of what's possible in the digital realm.
                </p>
              </div>
              <div className="mt-12 flex space-x-12">
                <div>
                  <div className="text-4xl font-futuristic font-black text-cyan-400">12+</div>
                  <div className="text-xs uppercase tracking-widest mt-2 text-slate-500">Global Products</div>
                </div>
                <div>
                  <div className="text-4xl font-futuristic font-black text-violet-500">45+</div>
                  <div className="text-xs uppercase tracking-widest mt-2 text-slate-500">Meta Partners</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-violet-500 opacity-20 group-hover:opacity-30 blur-2xl transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                alt="System Architecture" 
                className="relative z-10 rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-32 bg-slate-900/50 backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-6 text-center mb-20 reveal">
          <h2 className="text-4xl md:text-5xl font-futuristic font-bold mb-6">The Ecosystem</h2>
          <p className="text-slate-400 max-w-2xl mx-auto uppercase tracking-widest text-sm font-bold">A tripartite structure for total innovation</p>
        </div>

        <div className="space-y-24">
          {/* Products - Core Team */}
          <div className="group relative reveal">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1551288049-bbbda50a5f4a?q=80&w=2070&auto=format&fit=crop" alt="Core Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/80 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12">
                <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Products — Core Team</span>
                <h3 className="text-3xl md:text-4xl font-futuristic font-bold mb-6">Building Original Legacies</h3>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Our Core Team focuses on building original digital products. From ideation to deployment, every product is designed with scalability, maintainability, and impact in mind.
                </p>
                <button className="group flex items-center space-x-3 text-cyan-400 font-bold uppercase tracking-widest text-xs">
                  <span>Explore Core Catalog</span>
                  <span className="transition-transform group-hover:translate-x-2">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Services - Meta Team */}
          <div className="group relative bg-white/5 py-12 reveal">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 p-8 md:p-12 text-right">
                <span className="text-violet-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Services — Meta Team</span>
                <h3 className="text-3xl md:text-4xl font-futuristic font-bold mb-6">Expert Execution</h3>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Through the Meta Team, we deliver professional technology services for external partners, combining strong processes, clear communication, and accountable execution.
                </p>
                <button className="group inline-flex items-center space-x-3 text-violet-400 font-bold uppercase tracking-widest text-xs">
                  <span className="transition-transform group-hover:-translate-x-2">←</span>
                  <span>Partner With Meta</span>
                </button>
              </div>
              <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Meta Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-violet-950/80 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Collaborations - Playground Team */}
          <div className="group relative reveal">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" alt="Playground Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12">
                <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Collaborations — Playground Team</span>
                <h3 className="text-3xl md:text-4xl font-futuristic font-bold mb-6">The Open Lab</h3>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Playground is our open space for experimentation, learning, and social impact through technology. This includes open-source projects, intensive internship programs, and CSR initiatives.
                </p>
                <button className="group flex items-center space-x-3 text-blue-400 font-bold uppercase tracking-widest text-xs">
                  <span>Enter the Playground</span>
                  <span className="transition-transform group-hover:translate-x-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-32 relative overflow-hidden reveal">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-cyan-500/5 rounded-full blur-[150px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-futuristic font-bold mb-8">Why We Are Different</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Systems Over Projects", desc: "We don't build one-offs. Every solution is conceived as part of an evolving digital ecosystem." },
              { title: "Long-term Impact", desc: "Our metrics aren't just quarters; they're decades. We build infrastructure that lasts." },
              { title: "Ethical Innovation", desc: "Technology should serve humanity. We prioritize privacy, security, and sustainability in every line of code." },
              { title: "Collective Intelligence", desc: "By combining internal products with external services and open playground experiments, we create a feedback loop of innovation." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all group">
                <h4 className="text-2xl font-futuristic font-bold mb-4 text-cyan-400 group-hover:text-glow transition-all">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white relative reveal">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-black">
            <h2 className="text-4xl md:text-6xl font-futuristic font-bold mb-8">Get in Touch</h2>
            <p className="text-xl text-slate-600 mb-12 font-medium">
              We are open to conversations around products, services, and collaborative initiatives. Whether you are a partner, collaborator, or institution, we welcome meaningful discussions.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              <a href="mailto:hello@minilemon.tech" className="text-2xl font-bold border-b-2 border-cyan-500 pb-1 hover:text-cyan-500 transition-colors">
                hello@minilemon.tech
              </a>
              <a href="https://www.minilemon.tech" target="_blank" className="text-2xl font-bold border-b-2 border-violet-500 pb-1 hover:text-violet-500 transition-colors">
                minilemon.tech
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
