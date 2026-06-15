import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Shield, Lock, MapPin, AlertTriangle, PhoneCall, Heart } from "lucide-react";
import heroPersonal from "@/assets/hero-personal-tracking.jpg";

export const Route = createFileRoute("/products/personal-tracking")({
  head: () => ({ meta: [
    { title: "Personal GPS Tracking — SYNGH TORQ" },
  ]}),
  component: PersonalTrackingPage,
});

function PersonalTrackingPage() {
  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white min-h-screen">
        {/* Emerald Safety Hero */}
        <section className="relative py-10 lg:py-16 overflow-hidden border-b border-white/10 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#050505] to-[#050505]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-emerald-400 mb-6">
              <Heart className="h-4 w-4" /> FAMILY & VALUABLES
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Keep your loved ones <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">always safe.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Compact personal GPS trackers with SOS buttons, geofence alerts, and 2-way calling designed to protect your family and high-value bags.
            </p>
            <div className="flex justify-center gap-4 mb-16">
              <Link to="/contact" className="rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold tracking-wider hover:bg-emerald-500 transition">REQUEST DEMO</Link>
            </div>

            {/* Reassuring Circular Graphic */}
            <div className="max-w-2xl mx-auto relative">
               <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-12 relative overflow-hidden bg-[#0A0A0A]">
                  <div className="absolute inset-0 bg-emerald-500/10" />
                  <img src={heroPersonal} className="rounded-full w-full h-full object-cover mix-blend-luminosity opacity-80" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                     <Shield className="h-8 w-8 text-white" />
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 border-b border-white/10">
           <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: MapPin, title: "Geofence Boundaries", desc: "Set boundaries for home, office, or school. Get instant alerts when the person enters or exits the zone." },
                  { icon: PhoneCall, title: "SOS & 2-Way Calling", desc: "1-click alert to notify authorized contacts in emergencies. Configure up to 5 trusted phone numbers." },
                  { icon: AlertTriangle, title: "Man Down Alerts", desc: "If a person falls or is in an accident, the device detects the shock and sends an automatic emergency ping." },
                  { icon: Lock, title: "Anti-Theft Design", desc: "Compact enough to drop in a purse or luggage when traveling so you always know where your valuables are." }
                ].map(m => (
                  <div key={m.title} className="p-8 rounded-[40px] bg-[#0A0A0A] border border-white/5 flex gap-6 hover:border-emerald-500/30 transition">
                     <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                       <m.icon className="h-6 w-6 text-emerald-400" />
                     </div>
                     <div>
                       <h4 className="font-bold text-white mb-2 text-lg">{m.title}</h4>
                       <p className="text-sm text-white/50 leading-relaxed">{m.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
           </div>
        </section>
      </div>
    </SiteLayout>
  )
}