import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { KanbanSquare, ClipboardList, UserCheck, Truck, Camera, FileText, Navigation } from "lucide-react";

export const Route = createFileRoute("/products/dispatch")({
  head: () => ({ meta: [
    { title: "Dispatch Software — SYNGH TORQ" },
  ]}),
  component: DispatchPage,
});

function DispatchPage() {
  const columns = [
    { title: "1. UNASSIGNED", icon: ClipboardList, color: "text-slate-400", items: ["Order #8922", "Order #8923"] },
    { title: "2. DISPATCHED", icon: UserCheck, color: "text-blue-400", items: ["Order #8919 - John Doe"] },
    { title: "3. IN TRANSIT", icon: Truck, color: "text-yellow-400", items: ["Order #8915 - En route"] },
    { title: "4. DELIVERED", icon: Camera, color: "text-green-400", items: ["Order #8912 - POD attached"] },
  ];

  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white min-h-screen">
        {/* Monochrome Logistics Hero */}
        <section className="relative py-10 lg:py-16 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-white mb-6">
              <KanbanSquare className="h-4 w-4" /> LOGISTICS WORKFLOW
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Command & Control <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-white">Your Operations.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              End-to-end trucking software for scheduling, routing, electronic proof of delivery, and one-click invoicing. Completely paperless.
            </p>
            <div className="flex justify-center gap-4 mb-20">
              <Link to="/contact" className="rounded-lg bg-white text-black px-8 py-4 text-sm font-bold tracking-wider hover:bg-slate-200 transition">REQUEST DEMO</Link>
            </div>

            {/* Kanban UI Mockup */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-4 text-left">
               {columns.map(col => (
                 <div key={col.title} className="bg-[#111] border border-white/10 rounded-xl p-4 flex flex-col h-64">
                    <div className={`flex items-center gap-2 text-[10px] font-bold tracking-widest mb-4 ${col.color}`}>
                       <col.icon className="h-4 w-4" /> {col.title}
                    </div>
                    <div className="flex flex-col gap-3">
                       {col.items.map(item => (
                         <div key={item} className="bg-[#1A1A1A] p-4 rounded-lg border border-white/5 shadow-md">
                            <div className="text-sm font-bold text-white mb-1">{item}</div>
                            <div className="text-xs text-white/40">Manila → Cebu</div>
                         </div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 border-b border-white/10">
           <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Navigation, title: "Auto-Assignment AI", desc: "System automatically checks routes and assigns the closest available vehicle." },
                  { icon: Camera, title: "Electronic POD", desc: "Drivers upload photos and signatures instantly via the mobile driver app." },
                  { icon: FileText, title: "1-Click Invoicing", desc: "Generate professional invoices instantly with all toll and fuel expenses included." }
                ].map(m => (
                  <div key={m.title} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition">
                     <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                       <m.icon className="h-6 w-6 text-white" />
                     </div>
                     <h4 className="font-bold text-white mb-2 text-xl">{m.title}</h4>
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