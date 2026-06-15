import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import heroVehicle from "@/assets/hero-vehicle-tracking.jpg";
import featureTracking from "@/assets/feature-tracking.jpg";
import { Fuel, Wrench, ShieldAlert, MapPin, History, Bell, Navigation, Radar } from "lucide-react";

export const Route = createFileRoute("/products/vehicle-tracking")({
  head: () => ({ meta: [
    { title: "Vehicle GPS Tracking — SYNGH TORQ" },
  ]}),
  component: VehicleTracking,
});

function VehicleTracking() {
  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white min-h-screen">
        {/* Cyan Telemetry Hero */}
        <section className="relative py-10 lg:py-16 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/30 via-[#050505] to-[#050505]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-cyan-400 mb-6">
                  <Radar className="h-4 w-4" /> LIVE TELEMETRY
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                  Precision Vehicle <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tracking.</span>
                </h1>
                <p className="text-lg text-white/60 max-w-xl mb-10 leading-relaxed">
                  Monitor location, engine status, and fuel consumption with sub-second latency. Transform raw vehicle data into actionable fleet intelligence.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact" className="rounded-lg bg-cyan-600 px-8 py-4 text-sm font-bold tracking-wider hover:bg-cyan-500 transition">REQUEST DEMO</Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-[100px]" />
                <img src={featureTracking} alt="Live Tracking Map" className="relative rounded-2xl border border-white/10 shadow-2xl w-full" />
                <div className="absolute -bottom-6 -left-6 md:-left-12 bg-[#111] border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
                  <div>
                    <div className="text-[10px] text-white/50 tracking-widest font-bold">VEHICLE STATUS</div>
                    <div className="text-sm font-bold text-white">In Transit · 65 km/h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Metrics Grid */}
        <section className="py-16 lg:py-20 border-b border-white/10">
           <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Fuel, label: "Fuel Optimization", val: "-20%", desc: "Reduce idling and unauthorized usage." },
                  { icon: Wrench, label: "Maintenance", val: "Predictive", desc: "Alerts based on engine hours." },
                  { icon: MapPin, label: "Live Ping Rate", val: "10s", desc: "Ultra-fast location updates." },
                  { icon: ShieldAlert, label: "Theft Recovery", val: "99%", desc: "Remote engine immobilizer." }
                ].map(m => (
                  <div key={m.label} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-cyan-500/30 transition group">
                     <m.icon className="h-8 w-8 text-cyan-400 mb-6 group-hover:scale-110 transition" />
                     <div className="text-4xl font-black mb-2 text-white">{m.val}</div>
                     <h4 className="font-bold text-white/90 mb-2">{m.label}</h4>
                     <p className="text-sm text-white/50 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-16 flex flex-wrap justify-center gap-4">
                 {["History Playback", "Geofence Boundaries", "Live Notifications", "Automated Reports", "Route Optimization"].map(feat => (
                    <div key={feat} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white/80">
                       <Navigation className="h-4 w-4 text-cyan-500" /> {feat}
                    </div>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </SiteLayout>
  )
}
