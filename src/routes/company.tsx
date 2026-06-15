import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Globe, Building2, ShieldCheck, Server, ArrowRight, Network, Target, Shield, Users } from "lucide-react";

export const Route = createFileRoute("/company")({
  head: () => ({ meta: [
    { title: "Corporate Profile — SYNGH TORQ" },
    { name: "description", content: "SYNGH TORQ is a global leader in enterprise fleet intelligence and IoT infrastructure." },
  ]}),
  component: Company,
});

function Company() {
  const values = [
    { icon: Target, title: "Uncompromising Precision", desc: "We build hardware and software that delivers exact data when you need it most." },
    { icon: Shield, title: "Absolute Security", desc: "Your fleet's operational data is protected by enterprise-grade infrastructure." },
    { icon: Users, title: "Partnership First", desc: "We don't just sell devices. We partner with operators to ensure long-term ROI." },
  ];

  return (
    <SiteLayout>
      <div className="min-h-screen">
        
        {/* Corporate Hero */}
        <section className="relative overflow-hidden border-b border-border py-24">
          <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Corporate Headquarters" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
             <div className="absolute inset-0 bg-background/80" />
          </div>
          <div className="absolute inset-0 bg-[var(--gradient-blue)] opacity-[0.03] mix-blend-screen pointer-events-none" />

          <div className="container relative z-10 mx-auto px-6 max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-primary backdrop-blur-md mb-6">
              <Building2 className="h-4 w-4" /> CORPORATE PROFILE
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.05]">
                  Enterprise scale. <br/> <span className="text-transparent bg-clip-text bg-[var(--gradient-blue)]">Global reach.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium">
                  SYNGH TORQ is a global IoT and telematics provider. We equip the world's largest logistics, construction, and transit companies with the hardware and cloud infrastructure needed to command their fleets.
                </p>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--gradient-blue)] px-8 py-4 text-sm font-bold tracking-wider text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition">
                  CONTACT ENTERPRISE SALES
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Active Nodes", val: "15,000+" },
                  { label: "Data Centers", val: "Tier 4" },
                  { label: "Uptime SLA", val: "99.99%" },
                  { label: "Markets", val: "5 Nations" },
                ].map(s => (
                  <div key={s.label} className="p-6 rounded-2xl bg-card/80 border border-border backdrop-blur-md">
                    <div className="text-3xl font-black mb-1">{s.val}</div>
                    <div className="text-[10px] tracking-widest text-muted-foreground font-bold uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Infrastructure */}
        <section className="py-24 bg-card/30 border-b border-border">
           <div className="container mx-auto px-6">
              <div className="max-w-3xl mb-16">
                 <p className="text-[10px] font-bold tracking-[0.3em] text-primary mb-3">INFRASTRUCTURE</p>
                 <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Built for mission-critical operations.</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                 {[
                   { icon: ShieldCheck, title: "Compliance & Standards", desc: "Fully accredited by the LTFRB and built strictly to ISO 9001 quality management standards." },
                   { icon: Server, title: "Data Security", desc: "End-to-end AES-256 encryption secures your telemetry data from the edge device to our cloud." },
                   { icon: Network, title: "High-Availability", desc: "Dual-SIM redundancy and localized CDN routing ensures zero latency and zero data loss." },
                 ].map(i => (
                   <div key={i.title} className="p-8 rounded-2xl bg-card border border-border">
                      <i.icon className="h-8 w-8 text-primary mb-6" />
                      <h3 className="text-xl font-bold mb-3">{i.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Core Principles */}
        <section className="py-24 bg-background border-b border-border">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Our Corporate Values</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="p-10 rounded-3xl bg-card border border-border text-center hover:border-primary/50 transition duration-500">
                  <div className="h-16 w-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <v.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}