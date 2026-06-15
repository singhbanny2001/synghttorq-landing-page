import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title: "Blog — SYNGH TORQ" },
    { name: "description", content: "Insights on GPS tracking, fuel monitoring, dispatch and fleet management from SYNGH TORQ." },
    { property: "og:title", content: "Blog — SYNGH TORQ" },
    { property: "og:description", content: "Insights on GPS tracking, fuel monitoring and fleet management." },
  ]}),
  component: Blog,
});

const posts = [
  { date: "May 25, 2023", title: "A GPS tracker can be a valuable tool for optimizing your time and fuel usage", excerpt: "SYNGH TORQ GPS tracker can be a valuable tool for optimizing your time and fuel usage...", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000&auto=format&fit=crop" },
  { date: "April 7, 2023", title: "GPS tracker Benefits for Private Vehicles", excerpt: "Installing a GPS tracker in a private vehicle can provide several benefits...", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop" },
  { date: "March 22, 2023", title: "SYNGH TORQ GPS tracking solution with Fuel Monitoring", excerpt: "SYNGH TORQ fuel monitoring with GPS combines tracking with fuel capabilities...", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop" },
  { date: "March 22, 2023", title: "Why GPS monitoring is important for logistics companies", excerpt: "GPS technology is important for logistic companies because it allows them to track...", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop" },
  { date: "November 11, 2022", title: "How To Save Fuel Cost With the Help Of GPS", excerpt: "Fuel-efficient driving and fuel monitoring solutions can save you thousands...", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop" },
];

function Blog() {
  const [feat, ...rest] = posts;
  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white min-h-screen">
        
        {/* Integrated Featured Post Hero */}
        <section className="relative overflow-hidden border-b border-white/10 py-10 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505]" />
          <div className="container relative z-10 mx-auto px-6">
             <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5">
                   <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-primary backdrop-blur-md mb-6">
                     <BookOpen className="h-4 w-4" /> FLEET INSIGHTS
                   </div>
                   <h1 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter text-white mb-6">
                     Latest from <br /> <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">the road.</span>
                   </h1>
                   <p className="text-lg text-white/70 leading-relaxed">
                     Read our latest thoughts, updates, and deep-dives on GPS tracking, fuel monitoring, dispatch, and overall fleet management strategy.
                   </p>
                </div>
                
                <div className="lg:col-span-7">
                   <article className="group flex flex-col justify-end min-h-[380px] relative rounded-3xl border border-white/10 bg-[#111] overflow-hidden shadow-2xl hover:border-primary/50 transition duration-500">
                     <img src={feat.image} alt={feat.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition duration-700 mix-blend-luminosity" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
                     <div className="relative p-8 md:p-12 z-10">
                        <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-gold uppercase mb-4">
                           <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
                           LATEST POST · {feat.date}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight group-hover:text-primary transition">{feat.title}</h2>
                        <p className="text-base text-white/60 mb-8 leading-relaxed max-w-xl">{feat.excerpt}</p>
                        <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-6 py-3 text-xs font-bold tracking-wider hover:bg-white/90 transition transform hover:-translate-y-0.5">
                           READ FULL ARTICLE <ArrowRight className="h-4 w-4" />
                        </a>
                     </div>
                   </article>
                </div>
             </div>
          </div>
        </section>

        {/* Dense Article Grid */}
        <section className="py-16 lg:py-24 bg-[#0A0A0A]">
           <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {rest.map((p) => (
                   <article key={p.title} className="group flex flex-col rounded-2xl border border-white/10 bg-[#111] overflow-hidden hover:border-primary/50 transition">
                     <div className="aspect-[16/9] bg-white/5 relative overflow-hidden">
                        <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
                     </div>
                     <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-white/40 mb-3"><Calendar className="h-3 w-3" /> {p.date}</div>
                        <h3 className="font-bold text-white text-lg mb-3 leading-snug group-hover:text-primary transition">{p.title}</h3>
                        <p className="text-sm text-white/50 mb-6 leading-relaxed flex-1">{p.excerpt}</p>
                        <a href="#" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary hover:text-white transition mt-auto">READ MORE <ArrowRight className="h-3 w-3" /></a>
                     </div>
                   </article>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </SiteLayout>
  );
}