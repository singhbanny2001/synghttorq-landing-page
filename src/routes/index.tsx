import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroTruck from "@/assets/hero-syngh-truck.jpg";
import featureTracking from "@/assets/feature-tracking.jpg";
import featureFleet from "@/assets/feature-fleet.jpg";
import featureDispatch from "@/assets/feature-dispatch.jpg";
import productVehicle from "@/assets/product-vehicle.jpg";
import productAsset from "@/assets/product-asset.jpg";
import productEmployee from "@/assets/product-employee.jpg";
import productDashcam from "@/assets/product-dashcam.jpg";
import productDispatch from "@/assets/product-dispatch.jpg";
import coverageMap from "@/assets/coverage-map.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import fleetYard from "@/assets/fleet-yard.jpg";
import { SiteLayout } from "@/components/site-layout";

import {
  MapPin, Truck, Send, Shield, Fuel, Users, Globe, Clock,
  Zap, Activity, Award, ArrowRight, CheckCircle2, Star,
  TrendingDown, BarChart3, Headphones, Wrench, Camera, Bike,
  Building2, Route as RouteIcon, Bell, FileText, ChevronRight, Phone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SYNGH TORQ — LTFRB Accredited GPS Tracking" },
      { name: "description", content: "Track your fleet anytime, anywhere. LTFRB accredited GPS tracking solutions for vehicles, fleets and employees across the Philippines." },
      { property: "og:title", content: "SYNGH TORQ — GPS Fleet Tracking Philippines" },
      { property: "og:description", content: "LTFRB accredited GPS tracking for Motorcycle, Car, Bus, Truck, Heavy Equipment & Employees." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <AboutCompany />
      <Ecosystem />
      <ProductLineup />
      <CombinedFeatures />
      <CombinedBottomSections />
      <CTA />
    </SiteLayout>
  );
}


function Hero() {
  const stats = [
    { icon: Zap, title: "REAL-TIME GPS", sub: "Live tracking" },
    { icon: Shield, title: "LTFRB CERTIFIED", sub: "Accredited provider" },
    { icon: Activity, title: "24/7 MONITORING", sub: "Nationwide support" },
    { icon: Award, title: "TRUSTED SERVICE", sub: "Since 2017" },
  ];
  return (
    <section className="relative overflow-hidden flex flex-col h-[calc(100dvh-4.75rem)] md:h-[calc(100dvh-8.5rem)]">
      {/* Full-bleed cinematic truck */}
      <div className="absolute inset-0">
        <img decoding="async" fetchPriority="high" src={heroTruck} alt="SYNGH TORQ heavy-duty truck on a wet city street at night with blue accent lighting" width={1920} height={1080} className="h-full w-full object-cover object-center" />
        {/* legibility + mood overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60" />
        <div className="absolute inset-0 bg-[var(--gradient-blue)] opacity-[0.06] mix-blend-screen" />
      </div>

      <div className="container relative mx-auto px-6 flex-1 flex items-center pb-12 md:pb-16 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-12 max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight text-foreground drop-shadow-[0_4px_40px_rgba(0,0,0,0.8)]">
              <span className="block">TRACK YOUR FLEET</span>
              <span className="block">ANYTIME ANYWHERE.</span>
            </h1>
          <p className="mt-8 md:mt-10 max-w-lg text-foreground/85 leading-relaxed">
              Empower your business with Syngh Torq's LTFRB-accredited GPS tracking solutions. Monitor motorcycles, cars, buses, trucks, heavy equipment, and employees in real time. Optimize operations, enhance security, and maintain complete control of your fleet from anywhere in the world through one powerful management platform.
            </p>
            <div className="mt-8 md:mt-12 flex flex-wrap gap-4">
              <Link to="/contact" className="rounded bg-[var(--gradient-blue)] px-7 py-3.5 text-sm font-bold tracking-wider text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition">
                REQUEST DEMO
              </Link>
              <Link to="/contact" className="rounded border border-gold/60 bg-background/40 backdrop-blur px-7 py-3.5 text-sm font-bold tracking-wider text-gold hover:bg-gold hover:text-background transition">
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-background/40 backdrop-blur-sm mb-8 md:mb-12">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 px-0">
          {stats.map((s) => (
            <div key={s.title} className="flex items-center gap-3 bg-transparent px-5 py-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40">
                <s.icon className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-wider text-gold">{s.title}</div>
                <div className="text-xs text-muted-foreground">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  const items = [
    { img: featureTracking, icon: MapPin, title: "LIVE TRACKING", desc: "Real-time GPS, reports, DTC alerts, geo-fences and link sharing.", to: "/products/vehicle-tracking" as const },
    { img: featureFleet, icon: Truck, title: "FLEET MANAGEMENT", desc: "Manage fuel cost, repair cost, driver behavior, routes and inventory.", to: "/products" as const },
    { img: featureDispatch, icon: Send, title: "DISPATCH", desc: "Paperless dispatching, driver app, route optimization, 1-click invoice.", to: "/products/dispatch" as const },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-end mb-12">
          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.3em] text-primary mb-3">OUR ECOSYSTEM</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              INNOVATIVE SOLUTIONS<br />FOR A <span className="text-gold">SMARTER FLEET</span>
            </h2>
          </div>
          <p className="text-muted-foreground">From intelligent vehicle tracking to advanced fleet management, we deliver end-to-end solutions that keep your business ahead.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <Link key={it.title} to={it.to} className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition block">
              <div className="aspect-[4/3] overflow-hidden">
                <img decoding="async" src={it.img} alt={it.title} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <it.icon className="h-5 w-5 text-gold" />
                  <h3 className="text-lg font-bold tracking-wide">{it.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{it.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-gold">KNOW MORE <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CombinedFeatures() {
  const whyStats = [
    { val: "10+", label: "YEARS OF EXPERIENCE", icon: Award },
    { val: "500+", label: "ENTERPRISE CLIENTS", icon: Users },
    { val: "50+", label: "COUNTRIES SERVED", icon: Globe },
    { val: "24/7", label: "SUPPORT & SERVICE", icon: Clock },
  ];
  const steps = [
    { n: "01", icon: Phone, title: "Book a Free Demo", desc: "Tell us your fleet size and pain points. We tailor the right hardware and plan." },
    { n: "02", icon: Wrench, title: "Professional Installation", desc: "Our certified technicians install nationwide — onsite, at your yard, or our service center." },
    { n: "03", icon: BarChart3, title: "Onboard & Configure", desc: "We set up dashboards, alerts, geo-fences, drivers and users for your operations team." },
    { n: "04", icon: Headphones, title: "Track, Optimize, Save", desc: "Monitor live, get automated reports, and lean on our 24/7 NOC for everyday support." },
  ];
  const features = [
    { title: "Driver Behavior", desc: "Real-time tracking of driver behavior avoids extra costs from wear, tear and accidents." },
    { title: "Driver Fatigue", desc: "Fatigue warning device alerts drivers before tiredness causes major accidents." },
    { title: "Seat Belt Alarm", desc: "Ensure driving protocol — seatbelt alarms dramatically reduce injury risk." },
    { title: "Safety Alerts", desc: "Real-time alerts for harsh driving, overspeeding, overheating and emergencies." },
  ];

  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-6 space-y-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* WHY CHOOSE */}
          <div className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-between hover:border-primary/50 transition">
            <div>
              <p className="text-xs tracking-[0.3em] text-primary mb-3">WHY CHOOSE SYNGH TORQ</p>
              <h3 className="text-3xl md:text-4xl font-black leading-tight">BUILT ON POWER.<br />DRIVEN BY <span className="text-gold">PURPOSE.</span></h3>
              <p className="mt-4 text-sm text-muted-foreground">SYNGH TORQ provides automated reports that decrease day-to-day operating costs and increase your fleet efficiency. Access fleets of all sizes from your laptop or phone — anywhere in the world.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {whyStats.map((s) => (
                <div key={s.label} className="bg-background/50 rounded-lg p-4 text-center border border-border">
                  <s.icon className="mx-auto h-6 w-6 text-primary mb-2" />
                  <div className="text-2xl font-black bg-[var(--gradient-blue)] bg-clip-text text-transparent">{s.val}</div>
                  <div className="mt-1 text-[9px] tracking-widest text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* COVERAGE */}
          <div className="relative rounded-2xl border border-border overflow-hidden p-8 flex flex-col justify-between group hover:border-primary/50 transition">
            <img src={coverageMap} alt="Coverage map" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-card via-card/90 to-card/40" />
            <div className="relative z-10">
              <p className="text-xs tracking-[0.3em] text-primary mb-3">NATIONWIDE COVERAGE</p>
              <h3 className="text-3xl md:text-4xl font-black leading-tight">FROM BATANES TO TAWI-TAWI.<br /><span className="text-gold">WE'VE GOT YOU COVERED.</span></h3>
              <p className="mt-4 text-sm text-muted-foreground max-w-md">Our trackers run on dual-SIM (Globe + Smart) for maximum uptime across Philippine islands. Field engineers and authorized installers operate from Metro Manila, Cebu, Davao, Cagayan de Oro, Iloilo, and more.</p>
            </div>
            <div className="relative z-10 mt-8 grid grid-cols-3 gap-3">
              {[
                { v: "17", l: "REGIONS" },
                { v: "82", l: "PROVINCES" },
                { v: "15K+", l: "DEVICES LIVE" },
              ].map((s) => (
                <div key={s.l} className="rounded-lg border border-border bg-background/60 backdrop-blur p-4 text-center">
                  <div className="text-2xl font-black text-gold">{s.v}</div>
                  <div className="mt-1 text-[9px] tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* HOW IT WORKS */}
          <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition">
            <p className="text-xs tracking-[0.3em] text-primary mb-3">HOW IT WORKS</p>
            <h3 className="text-3xl md:text-4xl font-black leading-tight mb-2">FROM SIGN-UP TO <span className="text-gold">SAVINGS</span></h3>
            <p className="text-sm text-muted-foreground mb-6">A streamlined onboarding process trusted by hundreds of Philippine operators.</p>
            <div className="space-y-2">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-4 p-3 rounded-lg hover:bg-background transition border border-transparent hover:border-border">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--gradient-blue)] text-primary-foreground font-black shadow-[var(--shadow-glow)]">
                    {s.n}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{s.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCTIVITY */}
          <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition flex flex-col">
            <div>
              <p className="text-xs tracking-[0.3em] text-primary mb-3">INCREASE PRODUCTIVITY</p>
              <h3 className="text-3xl md:text-4xl font-black leading-tight mb-2">SAFETY AT YOUR <span className="text-gold">FINGERTIPS</span></h3>
              <p className="text-sm text-muted-foreground">Centralize all your fleet data and gain insights backed by data science. Control costs with real-time metrics like total cost, cost-per-km and asset utilization.</p>
              <div className="mt-4 mb-6 flex flex-wrap gap-2">
                {["Safety", "Security", "Saving", "Sustainability"].map((p) => (
                  <span key={p} className="rounded-full border border-border bg-background px-3 py-1 text-[10px] tracking-widest text-gold">{p.toUpperCase()}</span>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-auto">
              {features.map((f, i) => (
                <div key={f.title} className="rounded-lg border border-border bg-background p-4">
                  <div className="text-[10px] font-bold text-primary mb-1">0{i + 1}</div>
                  <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CombinedBottomSections() {
  const industries = ["Logistics", "Car Rental", "Transportation", "Security Vehicle", "Construction", "Food & Beverages", "Oil & Gas", "Healthcare", "Emergency Vehicle", "Municipal"];
  const outcomes = [
    { icon: TrendingDown, val: "Up to 25%", label: "Fuel cost reduction with real-time fuel sensors and route optimization." },
    { icon: Shield, val: "90%", label: "Drop in theft and unauthorized use through engine cut-off and geo-fence alerts." },
    { icon: Clock, val: "5+ hrs/wk", label: "Saved on manual reports — every report is automated and emailed." },
    { icon: BarChart3, val: "30%", label: "Boost in dispatch productivity with paperless routes and driver mobile app." },
  ];
  const faqs = [
    { q: "Is Syngh Torq LTFRB accredited?", a: "Yes. We are an official LTFRB-accredited GPS tracking provider for Public Utility Vehicles (PUVs) in the Philippines, fully compliant with DOTr requirements." },
    { q: "How long does installation take?", a: "Most vehicles take 45–90 minutes to install. Our certified technicians can come to your yard or you can drop off the unit at our service centers." },
    { q: "Does it work nationwide?", a: "Yes. Our devices use dual-SIM (Globe and Smart) and we have authorized installers across Luzon, Visayas and Mindanao." },
    { q: "Can I access tracking from my phone?", a: "Absolutely. You get web dashboard plus iOS and Android apps — multi-user with role-based access for owners, dispatchers and managers." },
    { q: "What about after-sales support?", a: "Our in-house NOC is staffed 24/7. We typically respond to concerns within minutes and roll out updates within 48 hours." },
    { q: "Do you offer fuel monitoring?", a: "Yes. We install calibrated fuel level sensors for trucks, buses and heavy equipment — accurate to within 2% and tamper-proof." },
  ];
  const reviews = [
    { name: "W*l**c Logistics", role: "Owner, We***k Logistics", text: "With SYNGH TORQ I feel connected to my vehicle every time even when they are far from me. Data is a very big help in the trucking industry." },
    { name: "Ju**us Cu****as", role: "Fleet Manager, AAT Tobacco", text: "We deliver nationwide and can monitor our vehicle anywhere in the Philippines. Service is excellent — we never encountered any issue." },
    { name: "Jo**n Ge***e", role: "Operations Manager, SS*C", text: "We run 700+ flat beds and dump trailers. SYNGH TORQ provides updates and improvements in less than 48 hours." },
    { name: "Jack", role: "Officer, C***o Ba**n", text: "Very accurate and real time. SYNGH TORQ's after-sales service never delays our requests across Luzon, Visayas and Mindanao." },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 space-y-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* OUTCOMES */}
          <div className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-between hover:border-primary/50 transition overflow-hidden relative group">
            <div className="relative z-10 mb-8">
              <p className="text-xs tracking-[0.3em] text-primary mb-3">RESULTS THAT PAY BACK</p>
              <h3 className="text-3xl md:text-4xl font-black leading-tight mb-4">REAL OUTCOMES<br />FOR <span className="text-gold">REAL FLEETS</span></h3>
              <p className="text-sm text-muted-foreground mb-6">Independent benchmarks from Syngh Torq customers across logistics, construction, and public transport.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {outcomes.map((o) => (
                  <div key={o.val} className="rounded-lg border border-border bg-background/80 backdrop-blur p-4">
                    <o.icon className="h-6 w-6 text-primary mb-2" />
                    <div className="text-2xl font-black text-gold mb-1">{o.val}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{o.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-48 -mx-8 -mb-8 mt-auto">
              <img src={fleetYard} alt="Fleet yard" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>
          </div>

          {/* INDUSTRIES */}
          <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition flex flex-col">
            <p className="text-xs tracking-[0.3em] text-primary mb-3">INDUSTRIES WE SERVE</p>
            <h3 className="text-3xl md:text-4xl font-black leading-tight mb-8">CUSTOMIZED SOLUTIONS<br />FOR <span className="text-gold">EVERY INDUSTRY</span></h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-auto">
              {industries.map((l) => (
                <div key={l} className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border bg-background p-4 text-center hover:border-primary transition">
                  <Truck className="h-6 w-6 text-gold" />
                  <span className="text-xs font-semibold">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* TESTIMONIALS */}
          <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition flex flex-col">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs tracking-[0.3em] text-primary mb-3">CLIENT TESTIMONIALS</p>
                <h3 className="text-3xl md:text-4xl font-black leading-tight">TRUSTED BY <span className="text-gold">FLEETS</span></h3>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-2">
                <div>
                  <div className="text-[9px] tracking-widest text-muted-foreground">EXCELLENT</div>
                  <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3 fill-gold text-gold" />)}</div>
                </div>
                <div className="border-l border-border pl-3 text-[10px] text-muted-foreground leading-tight">Based on 12<br />Google reviews</div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-auto">
              {reviews.map((r) => (
                <div key={r.name} className="rounded-lg border border-border bg-background p-5 flex flex-col">
                  <div className="flex gap-0.5 mb-3">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3 fill-gold text-gold" />)}</div>
                  <p className="text-xs text-foreground/90 italic leading-relaxed flex-1">"{r.text}"</p>
                  <div className="mt-4 flex items-center gap-3 pt-4 border-t border-border">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gradient-blue)] text-xs font-bold text-primary-foreground shrink-0">{r.name.charAt(0)}</div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">{r.name}</div>
                      <div className="text-[10px] text-muted-foreground truncate">{r.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition flex flex-col">
            <div className="mb-8">
              <p className="text-xs tracking-[0.3em] text-primary mb-3">FREQUENTLY ASKED</p>
              <h3 className="text-3xl md:text-4xl font-black leading-tight mb-3">QUESTIONS, <span className="text-gold">ANSWERED.</span></h3>
              <p className="text-sm text-muted-foreground mb-4">Can't find what you're looking for? Our team is happy to walk you through anything.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-gold transition">TALK TO US <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="space-y-2 mt-auto">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-lg border border-border bg-background p-4 hover:border-primary transition">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-bold list-none">
                    {f.q}
                    <ChevronRight className="h-4 w-4 text-gold transition group-open:rotate-90 shrink-0" />
                  </summary>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-border" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-[var(--gradient-blue)] opacity-10" />
      <div className="container relative mx-auto grid lg:grid-cols-2 gap-10 px-6 py-20 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] text-gold mb-3">REQUEST FREE DEMO</p>
          <h2 className="text-4xl md:text-5xl font-black">SAVE TIME, EFFORT<br />AND <span className="bg-[var(--gradient-blue)] bg-clip-text text-transparent">FUEL.</span></h2>
          <p className="mt-4 text-muted-foreground max-w-md">Get a free demo today and control all your fleets at your fingertips from anywhere in the world.</p>
          <ul className="mt-6 space-y-2 text-sm">
            {["LTFRB Accredited Provider", "24/7 Nationwide Support", "In-house Technicians & Dealer Network"].map((t) => (
              <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />{t}</li>
            ))}
          </ul>
        </div>
        <form className="rounded-lg border border-border bg-card/80 backdrop-blur p-7 space-y-4 shadow-[var(--shadow-card)]">
          <h3 className="text-xl font-bold">Get in Touch</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <input placeholder="Full Name" className="rounded border border-border bg-background px-4 py-3 text-sm focus:border-primary outline-none" />
            <input placeholder="Company" className="rounded border border-border bg-background px-4 py-3 text-sm focus:border-primary outline-none" />
            <input placeholder="Phone" className="rounded border border-border bg-background px-4 py-3 text-sm focus:border-primary outline-none" />
            <input placeholder="Email" className="rounded border border-border bg-background px-4 py-3 text-sm focus:border-primary outline-none" />
          </div>
          <textarea placeholder="Tell us about your fleet" rows={3} className="w-full rounded border border-border bg-background px-4 py-3 text-sm focus:border-primary outline-none" />
          <button type="button" className="w-full rounded bg-[var(--gradient-blue)] py-3.5 text-sm font-bold tracking-wider text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90">
            REQUEST DEMO
          </button>
        </form>
      </div>
    </section>
  );
}

function AboutCompany() {
  return (
    <section className="py-12 lg:py-0 min-h-[calc(100dvh-4.75rem)] md:min-h-[calc(100dvh-8.5rem)] bg-background flex items-center">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 px-6 items-center">
        <div className="relative">
          <img decoding="async" src={aboutTeam} alt="Syngh Torq fleet operations team" width={1280} height={960} loading="lazy" className="rounded-lg border border-border shadow-[var(--shadow-card)] w-full" />
          <div className="absolute -bottom-4 -right-4 hidden md:block rounded-lg border border-gold/40 bg-card/90 backdrop-blur p-4 max-w-[200px]">
            <div className="text-2xl lg:text-3xl font-black text-gold">9+</div>
            <div className="text-[10px] tracking-widest text-muted-foreground mt-1">YEARS PROTECTING PHILIPPINE FLEETS</div>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] text-primary mb-2">ABOUT SYNGH TORQ</p>
          <h2 className="text-3xl lg:text-4xl font-black leading-tight">
            BORN IN THE TRENCHES.<br />
            <span className="text-gold">ENGINEERED WITH THE GIANTS.</span>
          </h2>
          <div className="mt-4 md:mt-5 space-y-3 text-sm lg:text-base text-muted-foreground leading-relaxed">
            <p>
              We didn’t build Syngh Torq in a laboratory. We built it on the road, in the dirt, and on the front lines of global logistics.
            </p>
            <p>
              Years ago, we looked at the vehicle tracking industry and saw a massive failure. Tech companies were building soft, passive software that didn't survive real-world chaos. Fleet managers were losing millions to theft, fuel drainage, and operational lag because their tracking systems lacked teeth.
            </p>
            <p>
              We decided to change the game.
            </p>
            <p>
              We embedded ourselves directly with the world’s leading fleet operators, heavy equipment commanders, and logistics giants. We listened to their frustrations, studied their vulnerabilities, and engineered Syngh Torq alongside them.
            </p>
            <p className="font-bold text-foreground text-base pt-1">
              Built By Operators, For Operators.
            </p>
            <p>
              Every single line of code and every piece of armor-grade hardware we deploy is a direct result of this global collaboration. Syngh Torq exists strictly to serve the exact, brutal realities of your daily operations. 
            </p>
            <p>
              We do not believe in one-size-fits-all tech. We forge custom-fit, aggressive tracking solutions designed to make your specific business bulletproof.
            </p>
            <p className="font-bold text-foreground">
              Our mission is simple: To give every partner the seamless connection they need to scale, and the powerful protection they need to dominate.
            </p>
          </div>
          <Link to="/company" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold">
            LEARN MORE ABOUT OUR COMPANY <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductLineup() {
  const products = [
    { img: productVehicle, icon: Truck, title: "Vehicle GPS Tracking", desc: "Real-time location, fuel sensors, ignition, geo-fences and trip reports for cars, vans, buses and trucks.", to: "/products/vehicle-tracking" },
    { img: productAsset, icon: Wrench, title: "Asset & Equipment Tracking", desc: "Rugged, long-battery trackers for heavy equipment, containers, generators and high-value cargo.", to: "/products/asset-tracking" },
    { img: productEmployee, icon: Users, title: "Employee Tracking", desc: "Track field teams, riders and personnel with attendance, check-in and SOS panic alerts.", to: "/products/employee-tracking" },
    { img: productDashcam, icon: Camera, title: "AI Dash Cam", desc: "Forward-facing and in-cab dash cams with AI driver-behavior alerts and event video upload.", to: "/products/dash-cam" },
    { img: productDispatch, icon: Send, title: "Dispatch & Routing", desc: "Paperless dispatch, route optimization, driver mobile app and 1-click electronic proof of delivery.", to: "/products/dispatch" },
    { img: featureTracking, icon: Bike, title: "Personal & Motorcycle", desc: "Compact trackers for motorcycles and personal vehicles with anti-theft engine cut-off.", to: "/products/personal-tracking" },
  ];
  return (
    <section className="py-20 border-y border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] text-primary mb-3">PRODUCT LINEUP</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              ONE PLATFORM.<br /><span className="text-gold">EVERY TRACKING NEED.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">Hardware engineered for Philippine roads and weather, unified inside one cloud dashboard and mobile app.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link key={p.title} to={p.to} className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition">
              <div className="aspect-[5/3] overflow-hidden">
                <img decoding="async" src={p.img} alt={p.title} width={1280} height={960} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent pointer-events-none" />
              </div>
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded border border-gold/40 bg-background">
                    <p.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold tracking-wide">{p.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-gold">EXPLORE <ChevronRight className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
