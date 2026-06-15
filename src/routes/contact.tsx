import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Phone, Mail, MapPin, Globe, Clock, Zap } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us — SYNGH TORQ" },
    { name: "description", content: "Get in touch with SYNGH TORQ. Request a free demo or speak to our team." },
    { property: "og:title", content: "Contact SYNGH TORQ" },
    { property: "og:description", content: "Request a free demo or speak with our team." },
  ]}),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white min-h-screen flex flex-col">
        <section className="relative py-24 overflow-hidden border-b border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent" />

           <div className="container relative z-10 mx-auto px-6 max-w-7xl">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                 
                 {/* Left Column: Dense Contact Data */}
                 <div className="lg:col-span-5">
                    <h1 className="text-5xl font-black text-white mb-6">Get in touch.</h1>
                    <p className="text-white/60 mb-10 text-lg">Our dedicated NOC engineers and fleet consultants are standing by to help secure your assets.</p>

                    <div className="space-y-4">
                       {[
                         { icon: Phone, label: "Landline", value: "02 89831983", href: "tel:0289831983" },
                         { icon: Phone, label: "Mobile", value: "0995 305 0030", href: "tel:09953050030" },
                         { icon: Mail, label: "Email", value: "Info@fleethunt.ph", href: "mailto:Info@fleethunt.ph" },
                       ].map((c) => (
                         <a key={c.label} href={c.href} className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-[#111] hover:border-primary/50 transition">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                               <c.icon className="h-4 w-4" />
                            </div>
                            <div>
                               <div className="text-xs font-bold text-white/50 tracking-widest mb-1">{c.label.toUpperCase()}</div>
                               <div className="text-lg font-bold">{c.value}</div>
                            </div>
                         </a>
                       ))}
                    </div>
                 </div>

                 {/* Right Column: Clean Form */}
                 <div className="lg:col-span-7">
                    <div className="rounded-3xl border border-white/10 bg-[#111] p-8 md:p-10 shadow-2xl">
                       <h3 className="text-2xl font-black text-white mb-8">Request a Free Consultation</h3>
                       <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                          <div className="grid sm:grid-cols-2 gap-4">
                             <input placeholder="Full Name *" className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition" />
                             <input placeholder="Company Name" className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition" />
                             <input placeholder="Phone Number *" className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition" />
                             <input placeholder="Email Address *" className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition" />
                          </div>
                          <input placeholder="Fleet size (e.g. 25 vehicles)" className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition" />
                          <textarea placeholder="Tell us about your fleet requirements..." rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition resize-none" />
                          <button type="submit" className="w-full mt-4 rounded-xl bg-[var(--gradient-blue)] py-4 text-sm font-bold tracking-wider text-white shadow-[var(--shadow-glow)] hover:opacity-90 transition transform hover:-translate-y-0.5">
                             SUBMIT INQUIRY
                          </button>
                       </form>
                    </div>
                 </div>
                 
              </div>
           </div>
        </section>
      </div>
    </SiteLayout>
  );
}