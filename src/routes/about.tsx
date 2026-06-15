import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Flag, Target, Heart, Users, ArrowRight, History } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us — SYNGH TORQ" },
    { name: "description", content: "Learn about the story, mission, and the team behind SYNGH TORQ." },
    { property: "og:title", content: "About Us — SYNGH TORQ" },
  ]}),
  component: About,
});

function About() {
  const team = [
    { name: "Arvinder Singh", role: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
    { name: "Elena Cruz", role: "Head of Operations", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
    { name: "Michael Reyes", role: "Lead Solutions Engineer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
  ];

  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white min-h-screen">
        
        {/* Story Hero */}
        <section className="relative overflow-hidden border-b border-white/10 py-20 lg:py-28">
          <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="The SYNGH TORQ Team" className="w-full h-full object-cover opacity-15 mix-blend-luminosity" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/40" />
          </div>

          <div className="container relative z-10 mx-auto px-6 max-w-4xl">
            <div className="animate-fade-in">
               <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-primary backdrop-blur-md mb-6">
                 <History className="h-4 w-4" /> OUR STORY
               </div>
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter text-white mb-6">
                 We are <span className="text-gold">SYNGH TORQ.</span>
               </h1>
               <p className="text-xl text-white/70 leading-relaxed mb-10 font-medium">
                 In 2017, we noticed a massive gap in the logistics industry. Companies were running multi-million peso operations completely blind.
               </p>
               <p className="text-lg text-white/50 leading-relaxed">
                 We built SYNGH TORQ to fix that. We started by installing simple GPS trackers by hand. Today, we develop enterprise-grade IoT hardware and cloud platforms that power over 5,000 active vehicles across the Philippines and beyond. We believe that when operators have crystal-clear data, they make better decisions, drivers stay safer, and businesses grow faster.
               </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 bg-[#0A0A0A] border-b border-white/10">
           <div className="container mx-auto px-6">
              <div className="text-center mb-16 max-w-2xl mx-auto">
                 <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4">Meet the Leadership</h2>
                 <p className="text-white/50">Our executive team brings decades of combined experience in logistics, hardware engineering, and enterprise software.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                 {team.map(member => (
                   <div key={member.name} className="group cursor-pointer">
                      <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-white/5 border border-white/10 relative">
                         <img src={member.img} alt={member.name} className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:scale-105 transition duration-500" />
                      </div>
                      <h3 className="text-xl font-black text-white mb-1">{member.name}</h3>
                      <p className="text-sm font-bold tracking-widest text-primary uppercase">{member.role}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Culture CTA */}
        <section className="py-24 text-center relative overflow-hidden bg-[#050505]">
           <div className="absolute inset-0 bg-[var(--gradient-blue)] opacity-5 mix-blend-screen" />
           <div className="container mx-auto px-6 relative z-10 max-w-3xl">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                 <Heart className="h-8 w-8 text-red-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Driven by culture.</h2>
              <p className="text-white/50 mb-10 text-lg">We're always looking for brilliant minds to join our mission of digitizing physical operations. Come build the future with us.</p>
              <Link to="/careers" className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-blue)] px-8 py-4 text-sm font-bold tracking-wider text-white shadow-[var(--shadow-glow)] hover:opacity-90 transition">
                VIEW OPEN ROLES <ArrowRight className="h-4 w-4" />
              </Link>
           </div>
        </section>
      </div>
    </SiteLayout>
  );
}