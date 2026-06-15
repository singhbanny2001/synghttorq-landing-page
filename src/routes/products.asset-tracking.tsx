import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import heroAsset from "@/assets/hero-asset-tracking.jpg";
import { Battery, Shield, MapPin, Anchor, Activity } from "lucide-react";

export const Route = createFileRoute("/products/asset-tracking")({
  head: () => ({ meta: [
    { title: "Asset Tracking — SYNGH TORQ" },
  ]}),
  component: AssetTrackingPage,
});

function AssetTrackingPage() {
  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white min-h-screen">
        {/* Gold Rugged Hero */}
        <section className="relative py-10 lg:py-16 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-amber-900/10" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-sm border border-amber-500/50 bg-amber-500/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-amber-400 mb-6">
                  <Anchor className="h-4 w-4" /> RUGGED MONITORING
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                  Protect high-value <br/> <span className="text-amber-500">Unpowered Assets.</span>
                </h1>
                <p className="text-lg text-white/60 max-w-xl mb-10 leading-relaxed">
                  Track containers, generators, and heavy equipment with IP67 weatherproof trackers boasting up to 5 years of battery life.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact" className="rounded-none bg-amber-600 px-8 py-4 text-sm font-bold tracking-wider hover:bg-amber-500 transition">REQUEST DEMO</Link>
                </div>
              </div>
              <div className="relative">
                 {/* Blocky hardware showcase */}
                 <div className="aspect-square bg-[#111] border-4 border-[#222] p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                       <Shield className="h-10 w-10 text-amber-500" />
                       <div className="text-right">
                          <div className="text-[10px] tracking-widest font-bold text-amber-500">IP RATING</div>
                          <div className="text-2xl font-black">IP67</div>
                       </div>
                    </div>
                    <img src={heroAsset} className="w-full h-48 object-cover mix-blend-luminosity opacity-50" />
                    <div className="text-center bg-[#222] py-4 text-xs font-mono font-bold tracking-widest text-white/50">
                      MAGNETIC MOUNT DETECTED
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 border-b border-white/10">
           <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
             {[
               { icon: Battery, title: "5-Year Battery Life", desc: "Deploy and forget. Long-lasting power for unpowered assets." },
               { icon: MapPin, title: "Geofence Boundaries", desc: "Instant alerts the second equipment leaves the yard." },
               { icon: Activity, title: "Utilization Tracking", desc: "Identify dormant equipment and move it to active job sites." }
             ].map(m => (
               <div key={m.title} className="p-8 bg-[#0A0A0A] border border-white/10 hover:border-amber-500/50 transition">
                  <m.icon className="h-8 w-8 text-amber-500 mb-6" />
                  <h4 className="font-bold text-white text-xl mb-2">{m.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{m.desc}</p>
               </div>
             ))}
           </div>
        </section>
      </div>
    </SiteLayout>
  )
}