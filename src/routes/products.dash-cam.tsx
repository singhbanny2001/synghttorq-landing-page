import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ScanFace, Focus, Camera, ShieldAlert, Eye, Database, Activity } from "lucide-react";
import heroDashcam from "@/assets/hero-dashcam.jpg";

export const Route = createFileRoute("/products/dash-cam")({
  head: () => ({ meta: [
    { title: "Dual Dash Cam — SYNGH TORQ" },
  ]}),
  component: DashCamPage,
});

function DashCamPage() {
  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white min-h-screen">
        {/* Red AI Vision Hero */}
        <section className="relative py-10 lg:py-16 overflow-hidden border-b border-white/10 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-[#050505] to-[#050505]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-red-400 mb-6">
              <ScanFace className="h-4 w-4" /> AI VISION PLATFORM
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              See what your drivers see. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">In real-time.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Dual-facing HD cameras equipped with edge-AI to instantly detect distracted driving, harsh braking, and unavoidable accidents.
            </p>
            <div className="flex justify-center gap-4 mb-16">
              <Link to="/contact" className="rounded-lg bg-red-600 px-8 py-4 text-sm font-bold tracking-wider hover:bg-red-500 transition">REQUEST DEMO</Link>
            </div>
            
            {/* Large Video Display Mockup */}
            <div className="max-w-5xl mx-auto relative group">
              <div className="absolute inset-0 bg-red-500/20 blur-[100px]" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111] aspect-video">
                 <img src={heroDashcam} className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                 {/* Overlay UI elements to make it look like an AI interface */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 border-2 border-red-500/50 rounded-lg flex items-center justify-center pointer-events-none">
                    <Focus className="h-10 w-10 text-red-500/50" />
                 </div>
                 <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-widest text-red-400">REC / 1080P HD</span>
                 </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 lg:py-20 border-b border-white/10">
           <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-black text-white">Event-triggered intelligence.</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Camera, title: "Dual HD Video", desc: "Forward-facing and in-cab recording." },
                  { icon: ShieldAlert, title: "Accident Detection", desc: "Instantly upload collision footage." },
                  { icon: Eye, title: "Driver Distraction", desc: "AI detects texting, smoking, or fatigue." },
                  { icon: Database, title: "6-Month Backup", desc: "Access continuous video history on cloud." }
                ].map(m => (
                  <div key={m.title} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-red-500/30 transition text-center flex flex-col items-center">
                     <div className="h-16 w-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                       <m.icon className="h-8 w-8 text-red-400" />
                     </div>
                     <h4 className="font-bold text-white/90 mb-2 text-lg">{m.title}</h4>
                     <p className="text-sm text-white/50 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>
      </div>
    </SiteLayout>
  )
}