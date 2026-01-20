
import React from 'react';

const Products: React.FC = () => {
  const products = [
    {
      name: "CitrusOS",
      desc: "A distributed runtime for high-concurrency cloud environments, prioritizing low-latency and auto-healing capabilities.",
      cat: "Infastructure",
      status: "Production",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2026&auto=format&fit=crop"
    },
    {
      name: "Lumina Grid",
      desc: "Real-time data visualization engine for IoT sensor networks, providing deep insights into complex physical systems.",
      cat: "Data & AI",
      status: "Beta",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Vertex Protocol",
      desc: "An encrypted communication layer designed for secure multi-party computation and private collaboration.",
      cat: "Security",
      status: "Alpha",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full pt-20">
      {/* Products Hero */}
      <section className="relative py-32 overflow-hidden reveal">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-900/20 to-violet-900/20 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-futuristic font-black mb-8">PRODUCTS</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto italic font-light">
            Designed as systems. Built for the long term.
          </p>
          <div className="h-1 w-32 bg-cyan-500 mx-auto mt-12 animate-pulse"></div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 border-y border-white/5 bg-slate-900/30 reveal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-futuristic font-bold mb-8">Core Team Philosophy</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                The Core Team operates as Minilemon Technology’s product engine. They are responsible for research, design, development, and long-term maintenance of original products.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                We don't build based on hype cycles. Our roadmap is driven by first-principles thinking, addressing fundamental technology gaps with elegant, scalable solutions.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" alt="Abstract Math" className="rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-32">
        <div className="container mx-auto px-6 space-y-32">
          {products.map((product, idx) => (
            <div key={idx} className={`flex flex-col reveal ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 group`}>
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-3xl aspect-video border border-white/10 shadow-2xl">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-cyan-500/30">{product.cat}</span>
                  <span className={`px-3 py-1 bg-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10`}>{product.status}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-futuristic font-bold mb-6 text-white group-hover:text-cyan-400 transition-colors">{product.name}</h3>
                <p className="text-xl text-slate-400 leading-relaxed mb-8">
                  {product.desc}
                </p>
                <button className="px-8 py-3 bg-white/5 border border-white/20 hover:bg-white hover:text-black font-bold uppercase tracking-widest text-xs rounded-full transition-all">
                  Technical Deep Dive
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
