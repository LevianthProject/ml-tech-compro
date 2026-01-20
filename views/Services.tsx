
import React from 'react';

const Services: React.FC = () => {
  const services = [
    { title: "Software Development", desc: "Enterprise-grade web and system-based solutions with modular architecture." },
    { title: "Digital Product Development", desc: "End-to-end product realization from initial strategy to production scaling." },
    { title: "Platform & System Architecture", desc: "Design of high-performance, resilient, and secure cloud-native infrastructure." },
    { title: "Custom Technology Solutions", desc: "Specialized R&D for unique challenges in AI, IoT, and high-performance computing." }
  ];

  return (
    <div className="w-full pt-20">
      {/* Services Hero */}
      <section className="relative py-32 bg-slate-950 reveal">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-futuristic font-black mb-8 tracking-tighter">SERVICES</h1>
          <p className="text-xl md:text-2xl text-cyan-400 max-w-3xl mx-auto uppercase tracking-widest font-bold">
            Professional technology services delivered with structure and accountability.
          </p>
        </div>
      </section>

      {/* Meta Team Section */}
      <section className="py-24 bg-white text-black reveal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Collaboration" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-futuristic font-bold mb-8">The Meta Team</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                The Meta Team handles client-based projects, providing software development and digital solutions while maintaining the same quality standards used in our internal products. 
              </p>
              <div className="space-y-4">
                {['Direct access to senior architects', 'Agile transformation leadership', 'Security-first development cycle', 'Post-launch optimization and support'].map((bullet, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="font-bold text-sm uppercase tracking-widest">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Scope Grid */}
      <section className="py-32 bg-slate-950 relative overflow-hidden reveal">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-futuristic font-bold mb-6">Service Scope</h2>
            <div className="h-1 w-24 bg-cyan-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="group p-12 border border-white/10 hover:border-cyan-500 transition-all relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 text-white/5 font-futuristic text-9xl font-black group-hover:text-cyan-500/10 transition-colors">0{idx + 1}</div>
                <h3 className="text-2xl font-futuristic font-bold mb-4 relative z-10">{service.title}</h3>
                <p className="text-slate-400 text-lg relative z-10 group-hover:text-slate-200 transition-colors">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-futuristic font-bold mb-20 text-center reveal">Selected Case Studies</h2>
          
          <div className="space-y-20">
            {[
              { title: "Omni-Channel Retail Core", client: "Global Fashion Retailer", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" },
              { title: "Smart City Traffic Mesh", client: "Metropolitan Auth.", img: "https://images.unsplash.com/photo-1518005020411-38b81210a22f?q=80&w=2070&auto=format&fit=crop" }
            ].map((proj, idx) => (
              <div key={idx} className="relative group cursor-pointer overflow-hidden rounded-3xl h-[600px] reveal">
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">Meta Case Study 0{idx+1}</div>
                  <h3 className="text-4xl md:text-5xl font-futuristic font-bold mb-2">{proj.title}</h3>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">{proj.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
