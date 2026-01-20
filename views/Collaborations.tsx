
import React from 'react';

const Collaborations: React.FC = () => {
  const colabs = [
    { title: "Internship Programs", desc: "High-intensity immersive learning by doing alongside our Core and Meta teams." },
    { title: "Open Source Projects", desc: "Core components of our stack shared for community growth and innovation." },
    { title: "CSR Initiatives", desc: "Applying advanced technology to solve pressing social and environmental problems." },
    { title: "Research & Experiments", desc: "Testing bleeding-edge technologies and theoretical frameworks in the lab." }
  ];

  return (
    <div className="w-full pt-20">
      {/* Collaborations Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900/40 via-slate-950 to-violet-900/40 reveal">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-futuristic font-black mb-8 uppercase tracking-tighter">Collaborations</h1>
          <p className="text-xl md:text-3xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Building technology together through openness and learning.
          </p>
        </div>
      </section>

      {/* Playground Team Section */}
      <section className="py-24 border-b border-white/5 reveal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-futuristic font-bold mb-8">The Playground</h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                The Playground Team is dedicated to experimentation, open-source initiatives, learning programs, and technology-driven social impact. It is our sandbox for the future.
              </p>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl italic text-slate-300">
                "Innovation thrives in environments where failure is an accepted part of the learning process. Playground is that environment for Minilemon."
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2068&auto=format&fit=crop" alt="Team Playground" className="relative rounded-2xl border border-white/10 shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Colab Types */}
      <section className="py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {colabs.map((col, idx) => (
            <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between reveal">
              <div>
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-6 font-futuristic font-bold">0{idx+1}</div>
                <h3 className="text-xl font-futuristic font-bold mb-4">{col.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{col.desc}</p>
              </div>
              <button className="text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-white transition-colors">Learn More →</button>
            </div>
          ))}
        </div>
      </section>

      {/* How to Collaborate */}
      <section className="py-32 bg-slate-900/50 backdrop-blur-xl reveal">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-futuristic font-bold mb-12">How to Collaborate</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20 relative">
             <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-white/10 z-0"></div>
             {[
               { s: "01", t: "Reach Out", d: "Email us your proposal" },
               { s: "02", t: "Idea Share", d: "Initial discovery call" },
               { s: "03", t: "Align Goals", d: "Strategy & Roadmap" },
               { s: "04", t: "Co-Launch", d: "Start the project" }
             ].map((step, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center">
                 <div className="w-20 h-20 bg-slate-950 border-2 border-cyan-500 rounded-full flex items-center justify-center font-futuristic font-bold text-2xl mb-6 shadow-lg shadow-cyan-500/20">
                   {step.s}
                 </div>
                 <h4 className="font-futuristic font-bold text-white mb-2">{step.t}</h4>
                 <p className="text-slate-400 text-sm">{step.d}</p>
               </div>
             ))}
          </div>

          <button className="px-12 py-5 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20 uppercase tracking-[0.2em] text-sm">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;
