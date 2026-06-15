import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  MapPin, History, Bell, FileText, PhoneCall, Lock, Fuel, Wrench,
  ShieldAlert, TrendingUp, PackageCheck, CheckCircle2, X, Truck,
} from "lucide-react";


export function TrackingProductPage({ 
  eyebrow, 
  title, 
  heroImage,
  description,
  outcomes,
  features,
  compare
}: { 
  eyebrow: string; 
  title: string; 
  heroImage?: string;
  description?: string;
  outcomes?: { icon: any; label: string; val: string; desc: string }[];
  features?: { icon: any; title: string; desc?: string }[];
  compare?: string[];
}) {
  const displayOutcomes = outcomes || [
    { icon: Fuel, label: "Saving On Fuel", val: "+20%", desc: "Clients save up to 20% on daily fuel with smart fuel monitoring." },
    { icon: Wrench, label: "Maintenance Cost", val: "-12%", desc: "On-time service reminders and records cut extra wear-and-tear costs." },
    { icon: ShieldAlert, label: "Collision Cost", val: "-25%", desc: "Driver behavior monitoring helps avoid fatigue-related accidents." },
    { icon: TrendingUp, label: "Productivity", val: "+30%", desc: "Automation, route optimization, and on-time deliveries." },
    { icon: PackageCheck, label: "Product Safety", val: "+8%", desc: "Real-time monitoring of door opening and temperature alerts." },
  ];
  const displayFeatures = features || [
    { icon: MapPin, title: "Live Tracking", desc: "Real-time GPS tracking of every fleet vehicle, anytime, anywhere." },
    { icon: History, title: "History Playback", desc: "Replay fleet history to investigate routes and build smarter strategies." },
    { icon: Bell, title: "Notification Alerts", desc: "Instant alerts for harsh driving, idling, geofence and emergencies." },
    { icon: FileText, title: "Reports", desc: "Automated reports for trips, fuel, mileage and driver behavior." },
    { icon: PhoneCall, title: "Emergency Call", desc: "1-click SOS alert to authorized contacts for emergency situations." },
    { icon: Lock, title: "Immobilizer", desc: "Remotely cut off engine to prevent theft and unauthorized use." },
  ];
  const displayCompare = compare || [
    "Dispatch Management", "Fuel Monitoring", "Temperature Monitoring", "Aircon Alert / Report",
    "Driver Behavior", "Crash Detection", "Door Detection", "Anti-theft Call",
    "Traffic Updates", "24/7 Priority Support",
  ];

  const displayDesc = description || "SYNGH TORQ's advanced GPS tracking solution helps increase productivity and decrease day-to-day operational costs. Ensure vehicle security, enhance driver safety, reduce travel time and save on fuel. Assign paperless tasks with SYNGH TORQ Dispatch — and add a Dash Cam for extra security.";
  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white selection:bg-primary selection:text-white min-h-screen flex flex-col">
        
        {/* Full-Screen Dense Dashboard Hero */}
        <section className="relative flex-grow flex items-center py-10 lg:py-16 overflow-hidden border-b border-white/10 min-h-[calc(100vh-80px)]">
          {/* Cinematic Background */}
          {heroImage && (
            <>
              <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-[#050505]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
            </>
          )}
          <div className="absolute inset-0 bg-[var(--gradient-blue)] opacity-5 mix-blend-screen pointer-events-none" />

          <div className="container relative z-10 mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Mission & Trust */}
              <div className="lg:col-span-5 animate-fade-in">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-primary backdrop-blur-md mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  {eyebrow}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tighter text-white drop-shadow-2xl mb-6">
                  {title} <br className="hidden lg:block"/>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">MANAGE COST EFFECTIVELY.</span>
                </h1>
                <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 font-medium">
                  {displayDesc}
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black px-8 py-4 text-sm font-bold tracking-wider hover:bg-white/90 transition transform hover:-translate-y-0.5">
                    REQUEST DEMO
                  </Link>
                  <Link to="/shop" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-xl px-8 py-4 text-sm font-bold tracking-wider text-white hover:bg-white/10 transition transform hover:-translate-y-0.5">
                    VIEW HARDWARE
                  </Link>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-[10px] tracking-[0.3em] text-gold font-bold mb-4">TRUSTED BY FLEETS PH-WIDE</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {["LTFRB Accredited", "ISO Ready", "5 Countries", "Since 2017"].map(badge => (
                      <div key={badge} className="flex items-center gap-2 text-xs font-bold text-white/60">
                        <CheckCircle2 className="h-4 w-4 text-primary" /> {badge}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: High-Density Telemetry & Outcomes */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                {/* Top-line Metrics */}
                <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { val: "5,000+", label: "Vehicles Online" },
                    { val: "20%", label: "Avg. Fuel Savings" },
                    { val: "30%", label: "Productivity Gain" },
                    { val: "24/7", label: "Support Coverage" },
                  ].map(s => (
                    <div key={s.label} className="rounded-xl border border-white/10 bg-[#111]/80 backdrop-blur-md p-4 flex flex-col justify-center items-center text-center hover:border-primary/50 transition">
                      <div className="text-xl md:text-2xl font-black text-white">{s.val}</div>
                      <div className="text-[9px] tracking-widest text-white/50 uppercase font-bold mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Core Outcomes */}
                <div className="col-span-2 grid sm:grid-cols-2 gap-4">
                  {displayOutcomes.slice(0, 4).map((o) => (
                    <div key={o.label} className="rounded-xl border border-white/10 bg-[#111]/80 backdrop-blur-md p-5 hover:bg-white/5 transition group">
                       <div className="flex items-center justify-between mb-3">
                         <o.icon className="h-5 w-5 text-gold group-hover:scale-110 transition" />
                         <div className="text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{o.val}</div>
                       </div>
                       <div>
                         <h4 className="font-bold text-white text-sm mb-1">{o.label}</h4>
                         <p className="text-xs text-white/50 leading-relaxed">{o.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>

                {/* Tightly Packed Real-Time Features Array */}
                <div className="col-span-2 rounded-xl border border-white/10 bg-primary/5 backdrop-blur-md p-4 md:p-5 flex flex-wrap gap-2 md:gap-3">
                   {displayFeatures.map(r => (
                     <div key={r.title} className="flex items-center gap-2 bg-[#050505]/50 border border-white/5 rounded-full px-3 py-1.5 text-[11px] md:text-xs font-medium text-white/80">
                       <r.icon className="h-3.5 w-3.5 text-primary" /> {r.title}
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compact Comparative Matrix */}
        <section className="py-12 bg-[#0A0A0A] border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-white">SYNGH TORQ vs Industry Standards</h2>
            </div>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-[#111] shadow-2xl">
              <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_160px_160px] border-b border-white/10 bg-white/5">
                <div className="px-5 py-4 text-[10px] sm:text-xs font-bold tracking-widest text-white/50 uppercase flex items-center">Feature</div>
                <div className="px-2 py-4 text-center text-[10px] sm:text-xs font-black tracking-widest text-primary bg-primary/10 border-x border-primary/20 uppercase">SYNGH TORQ</div>
                <div className="px-2 py-4 text-center text-[10px] sm:text-xs font-bold tracking-widest text-white/50 uppercase">Others</div>
              </div>
              <div className="divide-y divide-white/5">
              {displayCompare.map((f) => (
                  <div key={f} className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_160px_160px] hover:bg-white/5 transition">
                    <div className="px-5 py-3 text-xs sm:text-sm font-medium text-white/80 flex items-center">{f}</div>
                    <div className="px-2 py-3 text-center bg-primary/5 border-x border-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  </div>
                    <div className="px-2 py-3 text-center flex items-center justify-center">
                      <X className="h-4 w-4 text-white/20" />
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>
      </div>
     </SiteLayout>
  );
}

export { Truck };