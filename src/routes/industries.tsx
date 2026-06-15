import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  Truck, Shield, HardHat, Fuel, Siren, Building2, CheckCircle2, ArrowRight, Box
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({ meta: [
    { title: "Industries We Serve — SYNGH TORQ" },
    { name: "description", content: "SYNGH TORQ serves logistics, transportation, construction, healthcare, oil & gas and more across the Philippines." },
    { property: "og:title", content: "Industries — SYNGH TORQ" },
    { property: "og:description", content: "Customized GPS tracking solutions for every industry." },
  ]}),
  component: Industries,
});

function Industries() {
  const sectors = [
    { icon: Truck, name: "Logistics & Freight", desc: "Automate dispatching and ensure on-time deliveries with real-time ETA accuracy.", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000&auto=format&fit=crop" },
    { icon: HardHat, name: "Construction", desc: "Secure heavy machinery with rugged trackers and eliminate fuel theft.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" },
    { icon: Shield, name: "Security Services", desc: "Ensure patrol compliance with geofencing and instant panic button alerts.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" },
    { icon: Siren, name: "Emergency Response", desc: "Priority routing and shift accountability for ambulance and fire services.", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1000&auto=format&fit=crop" },
  ];

  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white selection:bg-primary selection:text-white min-h-screen">
        
        {/* Cinematic Industry Hero */}
        <section className="relative overflow-hidden border-b border-white/10 py-24">
          <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000&auto=format&fit=crop" alt="Industry" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
             <div className="absolute inset-0 bg-[#050505]/80" />
          </div>
          
          <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-primary backdrop-blur-md mb-6">
              <Building2 className="h-4 w-4" /> SECTOR SOLUTIONS
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white leading-[1.05]">
              Purpose-Built for <br/> <span className="text-transparent bg-clip-text bg-[var(--gradient-gold)]">Your Industry.</span>
            </h1>
            <p className="text-lg text-white/60 mb-10 leading-relaxed font-medium">
              We don't believe in one-size-fits-all. Our hardware and software configurations are tailored to solve the exact logistical challenges of your specific sector.
            </p>
          </div>
        </section>

        {/* Sector Bento Grid */}
        <section className="py-20 bg-[#0A0A0A] border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {sectors.map((s) => (
                <div key={s.name} className="group relative h-[350px] rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
                  <img src={s.image} alt={s.name} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="h-12 w-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4 backdrop-blur-md border border-gold/30">
                      <s.icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">{s.name}</h3>
                    <p className="text-white/70 text-sm leading-relaxed max-w-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Case Study */}
        <section className="py-20 bg-[#050505] border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="rounded-3xl border border-white/10 bg-[#111] overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
                <p className="text-[10px] tracking-[0.3em] text-gold font-bold mb-4">CASE STUDY: LOGISTICS</p>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">"SYNGH TORQ reduced our fleet's idle time by 40% in just two months."</h3>
                <p className="text-white/50 mb-8">By implementing automated routing and capacitive fuel sensors, this nationwide freight carrier eliminated unauthorized usage and dramatically lowered overhead costs.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm font-bold text-white"><CheckCircle2 className="h-5 w-5 text-primary" /> ROI achieved in 45 days</li>
                  <li className="flex items-center gap-3 text-sm font-bold text-white"><CheckCircle2 className="h-5 w-5 text-primary" /> 100% LTFRB Compliance</li>
                </ul>
              </div>
              <div className="lg:w-1/2 relative min-h-[300px]">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Standard CTA */}
        <section className="py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--gradient-gold)] opacity-5" />
          <div className="container mx-auto px-6 relative z-10 max-w-3xl">
            <h2 className="text-4xl font-black text-white mb-6">Talk to an industry specialist.</h2>
            <p className="text-white/60 mb-8">We offer free 15-minute consultations to map out the exact hardware and software required to solve your operational pain points.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-blue)] px-8 py-4 text-sm font-bold tracking-wider text-white shadow-[var(--shadow-glow)] hover:opacity-90 transition">
              BOOK CONSULTATION <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}
