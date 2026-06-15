import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ShieldCheck, Lock, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Secure Login — SYNGH TORQ" },
      { name: "description", content: "Access your SYNGH TORQ fleet management dashboard securely." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white min-h-[calc(100vh-80px)] flex">
        {/* Left Side - Visual / Branding */}
        <div className="hidden lg:flex w-1/2 relative bg-[#0A0A0A] border-r border-white/10 items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
            alt="Server Security" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-blue)]/10 to-transparent" />
          <div className="relative z-10 p-12 max-w-lg">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-primary backdrop-blur-md mb-8">
              <ShieldCheck className="h-4 w-4" /> SECURE INFRASTRUCTURE
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-white mb-6">
              Your fleet data, <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500">fully protected.</span>
            </h2>
            <p className="text-white/60 leading-relaxed text-lg">
              Access real-time telemetry, routing data, and driver analytics through our ISO-certified, end-to-end encrypted command center.
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
          
          <div className="w-full max-w-md relative z-10">
            <div className="mb-10">
              <h1 className="text-3xl font-black text-white mb-2">Welcome Back</h1>
              <p className="text-white/50 text-sm">Enter your credentials to access your dashboard.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40"><Mail className="h-5 w-5" /></div>
                  <input type="email" placeholder="Email Address" required className="w-full bg-[#111] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition" />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40"><Lock className="h-5 w-5" /></div>
                  <input type="password" placeholder="Password" required className="w-full bg-[#111] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition" />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="rounded border-white/20 bg-[#111] text-primary focus:ring-primary/50" />
                  <span className="text-white/60 group-hover:text-white transition">Remember this device</span>
                </label>
                <a href="#" className="text-primary font-bold hover:text-gold transition tracking-wide">Forgot Password?</a>
              </div>

              <button type="button" className="w-full rounded-xl bg-[var(--gradient-blue)] py-4 text-sm font-bold tracking-wider text-white shadow-[var(--shadow-glow)] hover:opacity-90 transition transform hover:-translate-y-0.5 flex justify-center items-center gap-2">
                AUTHENTICATE <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}