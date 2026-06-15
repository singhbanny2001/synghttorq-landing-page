import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { FleetGlobe } from "@/components/fleet-globe";
import { 
  Truck, Package, Users, MapPin, Camera, Send, ArrowRight, Activity, Shield, Zap, 
  Building2, HardHat, Fuel, CheckCircle2, BarChart3, Smartphone, Bell, History, 
  Settings, Lock, Headphones, Globe, Server, Clock, FileText, Wrench, Cpu, Network,
  Database, BrainCircuit, Radar, Eye, Crosshair, Link as LinkIcon
} from "lucide-react";
import heroProducts from "@/assets/hero-products.jpg";
import heroVehicle from "@/assets/hero-vehicle-tracking.jpg";
import heroAsset from "@/assets/hero-asset-tracking.jpg";
import heroEmployee from "@/assets/hero-employee-tracking.jpg";
import heroPersonal from "@/assets/hero-personal-tracking.jpg";
import heroDashcam from "@/assets/hero-dashcam.jpg";
import heroDispatch from "@/assets/hero-dispatch.jpg";
import featureFleet from "@/assets/feature-fleet.jpg";
import featureTracking from "@/assets/feature-tracking.jpg";
import featureDispatch from "@/assets/feature-dispatch.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({ meta: [
    { title: "Platform Capabilities — SYNGH TORQ" },
    { name: "description", content: "Operational intelligence for fleets, assets, and workforce. Gain complete visibility through one intelligent enterprise platform." },
    { property: "og:title", content: "Platform Capabilities — SYNGH TORQ" },
    { property: "og:description", content: "Operational intelligence for fleets, assets, and workforce." },
  ]}),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white selection:bg-primary selection:text-white pb-20">
        <CinematicHero />
        <LiveCommandCenter />
        <PlatformCapabilities />
        <IndustryTransformation />
        <WorkflowArchitecture />
        <BusinessImpact />
        <AIAnalytics />
        <EnterpriseTrust />
        <ProductEcosystem />
        <MassiveCTA />
      </div>
    </SiteLayout>
  );
}

function CinematicHero() {
  return (
    <section className="relative min-h-screen flex items-center py-10 lg:py-16 overflow-hidden border-b border-white/10">
      {/* Interactive Interactive Globe Background */}
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none flex items-center justify-center">
        <div className="w-full max-w-[1200px] opacity-40 scale-150 md:scale-100">
          <FleetGlobe size={1200} />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] z-0 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 text-center max-w-5xl">
        <div className="animate-fade-in">
          <div className="mx-auto w-fit inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] text-white backdrop-blur-xl mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            ENTERPRISE PLATFORM
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.02] tracking-tighter text-white drop-shadow-2xl mb-6">
            Operational Intelligence for <br className="hidden md:block"/>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Fleets, Assets & Workforce</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
            Gain complete visibility of vehicles, assets, drivers, and field operations through one intelligent, interconnected global platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black px-8 py-4 text-sm font-bold tracking-wider hover:bg-white/90 transition transform hover:-translate-y-0.5">
              SCHEDULE DEMO
            </Link>
            <a href="#command-center" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-xl px-8 py-4 text-sm font-bold tracking-wider text-white hover:bg-white/10 hover:border-white/30 transition transform hover:-translate-y-0.5">
              WATCH PLATFORM TOUR <Eye className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden backdrop-blur-md border border-white/10 animate-fade-in" style={{ animationDelay: "200ms" }}>
          {[
            { label: "Connected Assets", val: "15,000+" },
            { label: "Data Points/Sec", val: "1.2M" },
            { label: "Platform Uptime", val: "99.99%" },
            { label: "Global Coverage", val: "5 Regions" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0A0A0A]/80 p-6 text-left hover:bg-white/5 transition">
              <div className="text-3xl font-black text-white tracking-tight">{s.val}</div>
              <div className="text-[10px] tracking-widest text-white/50 uppercase font-bold mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveCommandCenter() {
  return (
    <section id="command-center" className="relative py-16 lg:py-20 bg-[#0A0A0A] border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A0A0A] to-[#0A0A0A]" />
      <div className="container relative mx-auto px-6">
         <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-[10px] font-bold tracking-[0.3em] text-primary mb-3">LIVE COMMAND CENTER</p>
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter text-white">One unified dashboard. <br /> Infinite capabilities.</h2>
        </div>

        <div className="relative mx-auto max-w-6xl aspect-video perspective-1000">
           {/* Central Platform Image */}
           <div className="relative rounded-2xl border border-white/10 bg-[#111] p-2 backdrop-blur-xl shadow-[0_0_80px_rgba(59,130,246,0.15)] z-20 transform hover:scale-[1.02] transition duration-700">
             <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5" />
             <img src={featureFleet} alt="SYNGH TORQ Command Center" className="rounded-xl border border-white/5 w-full h-full object-cover" />
           </div>

           {/* Floating Dispatch Layer */}
           <div className="absolute -right-8 md:-right-24 top-1/4 w-2/3 md:w-[450px] rounded-2xl border border-white/10 bg-[#111]/90 p-2 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-30 transform hover:-translate-y-2 transition duration-700">
             <img src={featureDispatch} alt="Dispatch Operations" className="rounded-xl border border-white/5 w-full object-cover" />
             <div className="absolute -top-4 -right-4 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> LIVE DISPATCH
             </div>
           </div>

           {/* Floating Tracking Layer */}
           <div className="absolute -left-8 md:-left-24 bottom-1/4 w-2/3 md:w-[450px] rounded-2xl border border-white/10 bg-[#111]/90 p-2 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-30 transform hover:-translate-y-2 transition duration-700">
             <img src={featureTracking} alt="Live Telemetry" className="rounded-xl border border-white/5 w-full object-cover" />
             <div className="absolute -bottom-4 -left-4 bg-[#111] border border-white/10 text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 tracking-widest">
                <Radar className="h-3.5 w-3.5 text-primary" /> TELEMETRY ACTIVE
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function PlatformCapabilities() {
  const capabilities = [
    { title: "Vehicle Intelligence", tag: "TELEMATICS", img: heroVehicle, metric: "-20% Fuel Cost", useCase: "Real-time engine diagnostics, high-frequency GPS polling, and automated route playback designed to eliminate idling and unauthorized use." },
    { title: "Asset Intelligence", tag: "MONITORING", img: heroAsset, metric: "0% Equipment Loss", useCase: "Unpowered asset tracking with 5-year battery life, IP67 rugged casings, and automated geo-fence breach alerts for job sites and yards." },
    { title: "Workforce Intelligence", tag: "OPERATIONS", img: heroEmployee, metric: "+30% Productivity", useCase: "GPS-verified mobile check-ins, automated timesheets, and dynamic job routing based on real-time employee proximity." },
    { title: "Video Intelligence", tag: "AI VISION", img: heroDashcam, metric: "100% Truth", useCase: "Dual-facing HD edge-AI cameras that auto-detect distracted driving, tailgating, and instantly upload critical event footage to the cloud." },
    { title: "Dispatch Intelligence", tag: "LOGISTICS", img: heroDispatch, metric: "1-Click Billing", useCase: "End-to-end load management from order creation to driver assignment, featuring electronic proof of delivery (ePOD) and automatic invoicing." },
  ];
  
  return (
    <section className="py-16 lg:py-20 bg-[#050505] border-b border-white/10">
      <div className="container mx-auto px-6 space-y-16 lg:space-y-24">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">Platform Capabilities</h2>
          <p className="text-xl text-white/60">An interconnected suite of enterprise-grade modules designed to digitize every aspect of your physical operations.</p>
        </div>
        
        {capabilities.map((cap, i) => (
          <div key={cap.title} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
             <div className="lg:w-1/2 w-full relative group">
               <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-50 transition duration-700" />
               <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
                 <img src={cap.img} alt={cap.title} className="w-full aspect-[4/3] object-cover opacity-80 group-hover:scale-105 transition duration-700 mix-blend-luminosity hover:mix-blend-normal" />
               </div>
               {/* Floating Metric */}
               <div className="absolute -bottom-6 -right-6 lg:bottom-10 lg:-right-10 bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl">
                  <div className="text-[10px] tracking-widest text-primary font-bold mb-1">BUSINESS OUTCOME</div>
                  <div className="text-3xl font-black text-white">{cap.metric}</div>
               </div>
             </div>
             <div className="lg:w-1/2 w-full">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-primary mb-6">
                  <Crosshair className="h-3.5 w-3.5" /> {cap.tag}
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">{cap.title}</h3>
                <p className="text-lg text-white/60 leading-relaxed mb-8">{cap.useCase}</p>
                <Link to="/contact" className="inline-flex items-center gap-3 text-sm font-bold tracking-widest text-white hover:text-primary transition group">
                  EXPLORE CAPABILITY <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition" />
                </Link>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function IndustryTransformation() {
  const industries = [
    { name: "Transportation", img: heroVehicle, challenge: "Route adherence & compliance", roi: "100% LTFRB Approved" },
    { name: "Logistics", img: heroDispatch, challenge: "On-time delivery tracking", roi: "+40% Dispatch Speed" },
    { name: "Construction", img: heroAsset, challenge: "Heavy equipment theft", roi: "0 Lost Assets" },
    { name: "Mining", img: heroProducts, challenge: "Remote off-grid safety", roi: "Live Panic Alerts" },
    { name: "Oil & Gas", img: heroProducts, challenge: "Fuel siphoning & leaks", roi: "99% Fuel Accuracy" },
    { name: "Security Services", img: heroPersonal, challenge: "Guard patrol verification", roi: "Real-time Audits" },
  ];
  
  return (
    <section className="py-16 lg:py-20 bg-[#050505] border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <p className="text-[10px] font-bold tracking-[0.3em] text-primary mb-4">INDUSTRY TRANSFORMATION</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Engineered for your sector.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {industries.map((ind) => (
             <div key={ind.name} className="group relative h-80 rounded-2xl border border-white/10 overflow-hidden bg-[#111]">
                <img src={ind.img} alt={ind.name} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-20 transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                   <h3 className="text-2xl font-black text-white mb-2">{ind.name}</h3>
                   <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <div className="border-t border-white/20 pt-4 mt-2 flex justify-between items-center">
                         <div>
                            <div className="text-[10px] text-white/50 tracking-widest mb-1">CHALLENGE</div>
                            <div className="text-sm text-white font-medium">{ind.challenge}</div>
                         </div>
                         <div className="text-right">
                            <div className="text-[10px] text-primary tracking-widest mb-1 font-bold">PROVEN ROI</div>
                            <div className="text-sm text-white font-bold">{ind.roi}</div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowArchitecture() {
  const steps = [
    { label: "Hardware & Edge", icon: Cpu },
    { label: "Secure Gateway", icon: Network },
    { label: "Cloud Platform", icon: Database },
    { label: "Analytics Engine", icon: BrainCircuit },
    { label: "Operations Team", icon: Users },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#050505] border-b border-white/10 overflow-hidden">
      <div className="container mx-auto px-6">
         <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <p className="text-[10px] font-bold tracking-[0.3em] text-primary mb-4">PLATFORM ARCHITECTURE</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">How the platform works.</h2>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
           {/* Animated Data Pipeline */}
           <div className="hidden lg:block absolute top-1/2 left-[5%] right-[5%] h-px bg-white/10 -translate-y-1/2 z-0" />
           <div className="hidden lg:block absolute top-1/2 left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-primary to-transparent -translate-y-1/2 z-0 animate-pulse opacity-50" />
           
           <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {steps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center text-center group">
                   <div className="h-20 w-20 rounded-full border border-white/10 bg-[#0A0A0A] flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-primary/50 transition duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                      <step.icon className="h-8 w-8 text-white group-hover:text-primary group-hover:scale-110 transition duration-500 relative z-10" />
                   </div>
                   <div className="text-[11px] tracking-[0.2em] font-bold text-white/50 group-hover:text-white transition">STEP 0{i+1}</div>
                   <h4 className="text-sm font-bold text-white mt-1">{step.label}</h4>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}

function BusinessImpact() {
  return (
    <section className="py-16 lg:py-20 bg-[#050505] border-b border-white/10 relative">
       <div className="absolute inset-0 bg-[var(--gradient-blue)] opacity-5 mix-blend-screen" />
      <div className="container mx-auto px-6">
         <div className="max-w-3xl mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Measurable business impact.</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-12 gap-x-8 border-t border-white/10 pt-10 lg:pt-12">
           {[
             { val: "-20%", label: "Fuel Costs", desc: "Reduce idling and unauthorized usage." },
             { val: "+30%", label: "Asset Utilization", desc: "Optimize routing and equipment allocation." },
             { val: "90%", label: "Theft Recovery", desc: "Track and recover stolen assets immediately." },
             { val: "-15%", label: "Maintenance", desc: "Preventative alerts based on engine hours." },
             { val: "+45%", label: "Dispatch Speed", desc: "Automate scheduling and job routing." },
             { val: "100%", label: "Data Visibility", desc: "A single source of truth for operations." },
           ].map((m) => (
             <div key={m.label} className="group">
                <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 mb-3 tracking-tighter group-hover:to-primary transition duration-500">{m.val}</div>
                <h4 className="text-xl font-bold text-white mb-2">{m.label}</h4>
                <p className="text-sm text-white/50">{m.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function AIAnalytics() {
  return (
    <section className="py-16 lg:py-20 bg-[#050505] border-b border-white/10 relative">
      <div className="container mx-auto px-6">
         <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
               <p className="text-[10px] font-bold tracking-[0.3em] text-primary mb-4">FUTURE-READY</p>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">Predictive AI & Analytics.</h2>
               <p className="text-xl text-white/60 mb-10 leading-relaxed">Leverage billions of data points to forecast maintenance, prevent accidents before they happen, and score driver behavior automatically.</p>
               <div className="space-y-6">
                  {[
                    { title: "Predictive Maintenance", desc: "Algorithms flag battery drains and engine faults before breakdowns occur." },
                    { title: "Driver Behavior Scoring", desc: "AI ranks drivers based on harsh braking, cornering, and speeding events." },
                    { title: "Intelligent Video Processing", desc: "Edge-AI dash cams auto-upload only critical incident footage, saving data." },
                  ].map(item => (
                    <div key={item.title} className="flex gap-4">
                       <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                       <div>
                          <h4 className="text-white font-bold mb-1">{item.title}</h4>
                          <p className="text-white/50 text-sm">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative">
               {/* Abstract AI Graphic */}
               <div className="aspect-square rounded-full border border-white/10 bg-[#0A0A0A] flex items-center justify-center relative shadow-[0_0_100px_rgba(34,211,238,0.1)]">
                  <div className="absolute inset-10 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-20 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
                  <BrainCircuit className="h-24 w-24 text-primary opacity-80" />
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}

function EnterpriseTrust() {
  return (
    <section className="py-16 lg:py-20 bg-[#0A0A0A] border-b border-white/10 text-center">
      <div className="container mx-auto px-6">
         <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-10 lg:mb-12">Enterprise Trust & Security</h2>
         <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Bank-Grade Encryption", desc: "AES-256 encrypted telemetry data." },
              { icon: Server, title: "Scalable Infrastructure", desc: "Processes millions of pings per hour." },
              { icon: Lock, title: "Data Privacy", desc: "Strictly compliant role-based access." },
              { icon: Headphones, title: "24/7 Priority Support", desc: "Dedicated enterprise NOC engineers." },
            ].map(t => (
              <div key={t.title} className="flex flex-col items-center">
                 <t.icon className="h-10 w-10 text-white/50 mb-4" />
                 <h4 className="text-white font-bold mb-2">{t.title}</h4>
                 <p className="text-xs text-white/40">{t.desc}</p>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}

function ProductEcosystem() {
  return (
    <section className="py-16 lg:py-20 bg-[#050505] border-b border-white/10">
      <div className="container mx-auto px-6 text-center">
         <p className="text-[10px] font-bold tracking-[0.3em] text-primary mb-4">THE ECOSYSTEM</p>
         <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-12">Everything connects.</h2>
         
         <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["GPS Tracking", "Asset Sensors", "AI Dash Cams", "Dispatch Software", "Driver Mobile App", "Cloud Analytics", "Open API"].map((item) => (
              <div key={item} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white flex items-center gap-3 backdrop-blur-md">
                 <LinkIcon className="h-4 w-4 text-primary" /> {item}
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}

function MassiveCTA() {
  return (
    <section className="py-20 lg:py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-[#050505] to-[#050505]" />
      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6">
          Transform Operations <br /> Into Intelligence.
        </h2>
        <p className="text-xl md:text-2xl text-white/50 mb-12 font-medium tracking-wide">
          Track. Monitor. Analyze. Optimize.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
           <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black px-10 py-5 text-sm font-bold tracking-wider hover:bg-white/90 transition transform hover:-translate-y-0.5">
              SCHEDULE DEMO
           </Link>
           <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-xl px-10 py-5 text-sm font-bold tracking-wider text-white hover:bg-white/10 transition transform hover:-translate-y-0.5">
              TALK TO SALES
           </Link>
        </div>
      </div>
    </section>
  );
}