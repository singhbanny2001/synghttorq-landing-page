import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Briefcase, MapPin, Mail, CheckCircle2, Users, Rocket, Laptop, HeartPulse, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [
    { title: "Careers — SYNGH TORQ" },
    { name: "description", content: "Join SYNGH TORQ. Open roles across the Philippines." },
  ]}),
  component: Careers,
});

function Careers() {
  const responsibilities = [
    "Acquire new clients and manage a robust B2B pipeline.",
    "Build and maintain strong relationships with new and existing enterprise clients.",
    "Present the company's telematics products and software solutions effectively.",
    "Identify and pursue sales opportunities to meet monthly, quarterly and annual sales targets.",
  ];
  const requirements = [
    "Diploma or Degree in any field (Business, IT, or Logistics preferred).",
    "Customer-centric with strong communication, negotiation and interpersonal skills.",
    "Highly motivated and proactive — you thrive with an independent work ethic.",
    "Excellent presentation skills with a polished professional demeanor.",
    "Computer literate and fluent in English.",
  ];
  const benefits = [
    { icon: Laptop, title: "Hybrid Work", desc: "Flexible schedules combining remote focus time with in-office collaboration." },
    { icon: HeartPulse, title: "Health & Wellness", desc: "Comprehensive HMO coverage for you and your dependents from day one." },
    { icon: GraduationCap, title: "Continuous Growth", desc: "Annual stipends for courses, certifications, and professional development." },
    { icon: Users, title: "Awesome Team", desc: "Work alongside some of the brightest hardware and software engineers in the country." },
  ];

  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white min-h-screen">
        
        {/* Combined Hero & Benefits - Fits in one screen */}
        <section className="relative overflow-hidden border-b border-white/10 pt-16 pb-12 lg:pt-20 lg:pb-16 min-h-[calc(100vh-80px)] flex flex-col justify-center">
          <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Modern Office" className="w-full h-full object-cover opacity-15 mix-blend-luminosity" />
             <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505]" />
          </div>

          <div className="container relative z-10 mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-primary backdrop-blur-md mb-6">
                <Rocket className="h-4 w-4" /> JOIN THE TEAM
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-white mb-4">
                Do the best work of <br />
                <span className="text-transparent bg-clip-text bg-[var(--gradient-blue)]">your career.</span>
              </h1>
              <p className="text-base lg:text-lg text-white/60 leading-relaxed font-medium max-w-2xl mx-auto">
                We are building the operating system for physical infrastructure. If you love solving hard, tangible problems, you belong here.
              </p>
            </div>

            {/* Perks & Benefits Grid directly below hero text */}
            <div className="text-center mb-6">
               <h2 className="text-2xl font-black tracking-tighter text-white mb-2">Perks & Benefits</h2>
               <p className="text-sm text-white/50">We take care of our people so they can focus on taking care of our clients.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-left max-w-6xl mx-auto">
               {benefits.map(b => (
                 <div key={b.title} className="p-5 lg:p-6 rounded-2xl bg-[#111]/80 backdrop-blur-md border border-white/5 hover:border-white/20 transition flex flex-col">
                    <b.icon className="h-6 w-6 text-primary mb-3" />
                    <h4 className="text-base font-bold text-white mb-1.5">{b.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{b.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Open Roles Section */}
        <section className="py-16 bg-[#050505] border-b border-white/10">
           <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-10">
                 <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">Open Roles</h2>
              </div>
              
              {/* Role Card */}
              <div className="rounded-3xl border border-white/10 bg-[#111] p-6 md:p-8 shadow-2xl overflow-hidden relative group hover:border-primary/30 transition">
                 <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
                       <div>
                          <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] font-bold text-gold mb-3 bg-gold/10 px-3 py-1 rounded-full border border-gold/20">SALES & EXPANSION</div>
                          <h3 className="text-3xl md:text-4xl font-black text-white">Sales Executive</h3>
                          <p className="text-sm text-white/50 mt-2">Build relationships and seek out new sales opportunities across major PH cities.</p>
                       </div>
                       <a href="mailto:hrhiring@fleethunt.ph" className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-8 py-4 text-sm font-bold tracking-wider hover:bg-white/90 transition transform hover:-translate-y-0.5">
                          <Mail className="h-4 w-4" /> APPLY NOW
                       </a>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                       <div>
                          <h4 className="text-[11px] font-bold tracking-[0.2em] text-primary mb-4">RESPONSIBILITIES</h4>
                          <ul className="space-y-2">
                            {responsibilities.map((r) => (
                              <li key={r} className="flex items-start gap-3 text-sm text-white/80"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />{r}</li>
                            ))}
                          </ul>
                       </div>
                       <div>
                          <h4 className="text-[11px] font-bold tracking-[0.2em] text-primary mb-4">REQUIREMENTS</h4>
                          <ul className="space-y-2">
                            {requirements.map((r) => (
                              <li key={r} className="flex items-start gap-3 text-sm text-white/80"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />{r}</li>
                            ))}
                          </ul>
                       </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-sm font-bold text-white/60">
                       <MapPin className="h-4 w-4 text-gold" /> Available Locations: <span className="text-white">Deparo Caloocan, Cebu, Davao</span>
                    </div>
                 </div>
              </div>

              {/* Don't see a fit */}
              <div className="mt-10 text-center border border-white/10 bg-[#0A0A0A] rounded-2xl p-8">
                 <Briefcase className="h-8 w-8 text-white/20 mx-auto mb-3" />
                 <h3 className="text-xl font-bold text-white mb-2">Don't see a perfect fit?</h3>
                 <p className="text-sm text-white/50 mb-4">We're always open to meeting talented people. Send us your resume and we'll keep you in mind.</p>
                 <a href="mailto:hrhiring@fleethunt.ph" className="text-sm font-bold text-primary hover:text-white transition">Email hr@fleethunt.ph →</a>
              </div>

           </div>
        </section>
      </div>
    </SiteLayout>
  );
}