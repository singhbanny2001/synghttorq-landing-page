import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import heroEmployee from "@/assets/hero-employee-tracking.jpg";
import { Users, Clock, MapPin, Smartphone, CalendarCheck } from "lucide-react";

export const Route = createFileRoute("/products/employee-tracking")({
  head: () => ({ meta: [
    { title: "Employee Tracking — SYNGH TORQ" },
  ]}),
  component: EmployeeTrackingPage,
});

function EmployeeTrackingPage() {
  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white min-h-screen">
        {/* Indigo Mobile Hero */}
        <section className="relative py-10 lg:py-16 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/30 via-[#050505] to-[#050505]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                 {/* Mobile App Mockup */}
                 <div className="w-[300px] h-[600px] border-[12px] border-[#222] rounded-[40px] bg-[#111] p-4 relative shadow-[0_0_80px_rgba(99,102,241,0.2)]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-2xl" />
                    <div className="h-full w-full rounded-2xl overflow-hidden relative">
                       <img src={heroEmployee} className="absolute inset-0 w-full h-full object-cover opacity-30" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                       <div className="absolute bottom-4 left-4 right-4 bg-indigo-600 rounded-xl p-4 text-center font-bold shadow-lg">
                          CLOCK IN NOW
                       </div>
                    </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-indigo-400 mb-6">
                  <Smartphone className="h-4 w-4" /> WORKFORCE APP
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                  Empower your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Field Team.</span>
                </h1>
                <p className="text-lg text-white/60 max-w-xl mb-10 leading-relaxed">
                  Transform any smartphone into a powerful tracking and productivity tool. Monitor field staff, validate attendance, and optimize routing.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact" className="rounded-full bg-indigo-600 px-8 py-4 text-sm font-bold tracking-wider hover:bg-indigo-500 transition">REQUEST DEMO</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 border-b border-white/10">
           <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-16">The complete field toolkit.</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { icon: MapPin, title: "Live Location", desc: "See where your team is in real time." },
                  { icon: CalendarCheck, title: "Mobile Attendance", desc: "GPS-verified clock-ins." },
                  { icon: Clock, title: "Route History", desc: "Verify past routes and visits." },
                  { icon: Users, title: "Team Dashboard", desc: "One screen for all field operations." }
                ].map(m => (
                  <div key={m.title} className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-indigo-500/30 transition flex flex-col items-center">
                     <div className="h-16 w-16 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                        <m.icon className="h-8 w-8 text-indigo-400" />
                     </div>
                     <h4 className="font-bold text-white mb-2">{m.title}</h4>
                     <p className="text-sm text-white/50">{m.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>
      </div>
    </SiteLayout>
  )
}