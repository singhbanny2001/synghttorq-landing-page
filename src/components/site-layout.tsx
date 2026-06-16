import { Link } from "@tanstack/react-router";
import {
  Phone, Mail, Menu, Star, Facebook, Instagram, Linkedin, Twitter, ShoppingCart,
  ChevronDown, X,
} from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetClose } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground pt-3 md:pt-5">
      <TopBar />
      <Nav />
      {children}
      <GoogleReviews />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="hidden md:flex border-b border-border/50 bg-background/80 text-xs text-muted-foreground">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        <span className="tracking-[0.2em] text-gold">LTFRB ACCREDITED GPS TRACKING SOLUTION PHILIPPINES</span>
        <div className="flex items-center gap-5">
          <a className="flex items-center gap-1.5 hover:text-primary" href="tel:0289831983"><Phone className="h-3 w-3" />02 89831983</a>
          <a className="flex items-center gap-1.5 hover:text-primary" href="mailto:Info@fleethunt.ph"><Mail className="h-3 w-3" />Info@fleethunt.ph</a>
          <a className="hover:text-primary" href="tel:09953050030">09953050030</a>
          <div className="flex items-center gap-3 pl-3 border-l border-border/50">
            <Instagram className="h-3.5 w-3.5 hover:text-primary cursor-pointer" />
            <Linkedin className="h-3.5 w-3.5 hover:text-primary cursor-pointer" />
            <Twitter className="h-3.5 w-3.5 hover:text-primary cursor-pointer" />
            <Facebook className="h-3.5 w-3.5 hover:text-primary cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

const solutionLinks = [
  { to: "/products/vehicle-tracking", label: "Vehicle GPS Tracking" },
  { to: "/products/asset-tracking", label: "Asset Tracking" },
  { to: "/products/employee-tracking", label: "Employee Tracking" },
  { to: "/products/personal-tracking", label: "Personal Tracking" },
  { to: "/products/dash-cam", label: "Dash Cam" },
  { to: "/products/dispatch", label: "Dispatch" },
] as const;

const companyLinks = [
  { to: "/company", label: "Company" },
  { to: "/about", label: "About Us" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
] as const;

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-6">
        <Link to="/" className="flex items-center group" aria-label="SYNGH TORQ">
          <img
            decoding="async"
            fetchPriority="high"
            src="https://plain-apac-prod-public.komododecks.com/202606/13/6tsV8R2MEAxMSNiKTry4/image.png"
            alt="SYNGH TORQ"
            className="h-14 md:h-16 w-auto object-contain drop-shadow-[0_0_18px_rgba(212,175,55,0.35)] transition-transform group-hover:scale-105"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-medium">
          <Link to="/" className="text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }}>HOME</Link>
          <NavDropdown label="SOLUTIONS" links={solutionLinks} />
          <Link to="/industries" className="text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }}>INDUSTRIES</Link>
          <NavDropdown label="COMPANY" links={companyLinks} />
          <Link to="/contact" className="text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }}>CONTACT US</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/shop" className="hidden sm:inline-flex items-center justify-center gap-1.5 rounded bg-[var(--gradient-blue)] px-4 py-2 text-xs font-bold tracking-[0.15em] text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition">
            <ShoppingCart className="h-3.5 w-3.5" />SHOP
          </Link>
          <Link to="/login" className="hidden sm:inline-flex items-center justify-center rounded border border-gold/60 px-5 py-2 text-xs font-bold tracking-[0.2em] text-gold hover:bg-gold hover:text-background transition">
            LOGIN
          </Link>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded border border-gold/40 text-gold hover:bg-gold/10 transition"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[88vw] sm:w-[400px] bg-background border-l border-gold/30 p-0 flex flex-col"
      >
        <SheetHeader className="border-b border-border/60 px-5 py-4 flex-row items-center justify-between space-y-0">
          <SheetTitle className="flex items-center gap-2">
            <img src="https://plain-apac-prod-public.komododecks.com/202606/13/6tsV8R2MEAxMSNiKTry4/image.png" alt="SYNGH TORQ" className="h-10 w-auto object-contain" />
          </SheetTitle>
          <SheetClose asChild>
            <button aria-label="Close menu" className="rounded p-1.5 text-gold hover:bg-gold/10">
              <X className="h-5 w-5" />
            </button>
          </SheetClose>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <nav className="flex flex-col gap-0.5 text-sm font-semibold">
            <MobileLink to="/" onNav={close}>Home</MobileLink>
            <MobileGroup label="Solutions" links={solutionLinks} onNav={close} />
            <MobileLink to="/industries" onNav={close}>Industries</MobileLink>
            <MobileGroup label="Company" links={companyLinks} onNav={close} />
            <MobileLink to="/contact" onNav={close}>Contact Us</MobileLink>
            <MobileLink to="/shop" onNav={close}>
              <ShoppingCart className="h-4 w-4" /> Shop
            </MobileLink>
          </nav>
        </div>
        <div className="border-t border-border/60 p-4 space-y-2.5 bg-card/40">
          <Link
            to="/contact"
            onClick={close}
            className="flex w-full items-center justify-center rounded bg-[var(--gradient-blue)] px-4 py-3 text-xs font-bold tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-glow)]"
          >
            REQUEST DEMO
          </Link>
          <Link
            to="/contact"
            onClick={close}
            className="flex w-full items-center justify-center rounded border border-primary/50 px-4 py-3 text-xs font-bold tracking-[0.2em] text-primary hover:bg-primary/10"
          >
            GET QUOTE
          </Link>
          <Link
            to="/login"
            onClick={close}
            className="flex w-full items-center justify-center rounded border border-gold/60 px-4 py-3 text-xs font-bold tracking-[0.2em] text-gold hover:bg-gold hover:text-background transition"
          >
            LOGIN
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MobileLink({ to, onNav, children }: { to: string; onNav: () => void; children: ReactNode }) {
  return (
    <Link
      to={to}
      onClick={onNav}
      activeProps={{ className: "text-primary bg-primary/10" }}
      className="flex items-center gap-2 rounded-md px-4 py-3 text-foreground/90 hover:bg-primary/10 hover:text-primary transition tracking-wide"
    >
      {children}
    </Link>
  );
}

function MobileGroup({ label, links, onNav }: { label: string; links: readonly { to: string; label: string }[]; onNav: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-4 py-3 text-foreground/90 hover:bg-primary/10 hover:text-primary transition tracking-wide">
        <span>{label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
        <div className="ml-3 mt-1 mb-1 border-l border-gold/30 pl-2 flex flex-col gap-0.5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={onNav}
              activeProps={{ className: "text-primary bg-primary/10" }}
              className="rounded-md px-3 py-2.5 text-xs text-muted-foreground hover:bg-primary/10 hover:text-primary transition"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function NavDropdown({ label, links }: { label: string; links: readonly { to: string; label: string }[] }) {
  return (
    <div className="relative group">
      <button className="text-foreground/80 hover:text-primary">{label}</button>
      <div className="absolute left-1/2 top-full hidden -translate-x-1/2 pt-3 group-hover:block">
        <div className="min-w-[220px] rounded-lg border border-border bg-card shadow-[var(--shadow-card)] p-2">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="block rounded px-3 py-2 text-sm text-foreground/80 hover:bg-background hover:text-primary">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GoogleReviews() {
  const reviews = [
    { name: "Arr-Eyy", text: "It really helps our business operations. We can now monitor our vehicle using fuel sensor — our fuel expenses have decreased compared to before." },
    { name: "Ervill Elefante", text: "All the reports we need are already available in SYNGH TORQ. We don't struggle with generating reports because it's already automated." },
    { name: "Paul Aris Briones", text: "SYNGH TORQ's GPS service is a lifesaver for our fleet. Accurate directions and real-time traffic updates help us deliver on time, every time." },
    { name: "Richelle Pasion", text: "Thanks to SYNGH TORQ, our company vehicle always takes the most efficient routes. Their GPS service helps us optimize our operations." },
    { name: "Darlene Agutaya", text: "With SYNGH TORQ our drivers never get lost. It's a cost-effective solution that keeps our company vehicle on the right path." },
    { name: "Ana Mhae Cruz", text: "Maganda ang SYNGH TORQ — nakikita ko ang mga trucks ko sa phone ko. Mabilis silang sumagot sa concerns namin." },
  ];
  return (
    <section className="border-t border-border bg-card/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-6">
          <div>
            <p className="text-xs tracking-[0.3em] text-primary mb-3">GOOGLE REVIEWS</p>
            <h3 className="text-3xl md:text-4xl font-black">RATED <span className="text-gold">EXCELLENT</span> BY OUR CLIENTS</h3>
          </div>
          <div className="flex items-center gap-3 rounded border border-border bg-card px-5 py-3">
            <div>
              <div className="text-[10px] tracking-widest text-muted-foreground">EXCELLENT</div>
              <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
            </div>
            <div className="border-l border-border pl-3 text-xs text-muted-foreground">Based on 12<br />Google reviews</div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-lg border border-border bg-card p-6 hover:border-primary transition">
              <div className="flex gap-0.5 mb-3">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}</div>
              <p className="text-sm text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-4 flex items-center gap-3 pt-4 border-t border-border">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gradient-blue)] text-xs font-bold text-primary-foreground">{r.name.charAt(0)}</div>
                <div className="text-xs">
                  <div className="font-bold">{r.name}</div>
                  <div className="text-muted-foreground">Google · 2 years ago</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto grid md:grid-cols-4 gap-10 px-6 py-10">
        <div className="md:col-span-2">
          <div className="mb-4">
            <img loading="lazy" decoding="async" src="https://plain-apac-prod-public.komododecks.com/202606/13/6tsV8R2MEAxMSNiKTry4/image.png" alt="SYNGH TORQ" className="h-16 w-auto object-contain drop-shadow-[0_0_18px_rgba(212,175,55,0.35)]" />
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">LTFRB accredited GPS tracking solution. Power. Intelligence. Control — for fleets across the Philippines.</p>
          <div className="mt-5 flex items-center gap-3 text-muted-foreground">
            <Facebook className="h-4 w-4 hover:text-primary cursor-pointer" />
            <Instagram className="h-4 w-4 hover:text-primary cursor-pointer" />
            <Linkedin className="h-4 w-4 hover:text-primary cursor-pointer" />
            <Twitter className="h-4 w-4 hover:text-primary cursor-pointer" />
          </div>
        </div>
        <div>
          <h4 className="text-xs tracking-widest text-gold mb-4">SOLUTIONS</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {solutionLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-primary">{l.label}</Link></li>
            ))}
            <li><Link to="/shop" className="hover:text-primary">Shop Hardware</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-widest text-gold mb-4">COMPANY</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {companyLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-primary">{l.label}</Link></li>
            ))}
            <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
          </ul>
          <h4 className="text-xs tracking-widest text-gold mt-6 mb-3">CONTACT</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>02 89831983</li>
            <li>09953050030</li>
            <li>Info@fleethunt.ph</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground">
          <span>© 2017–{new Date().getFullYear()} SYNGH TORQ Inc. All Rights Reserved.</span>
          <span className="tracking-[0.3em] text-gold">POWER · INTELLIGENCE · CONTROL</span>
          <div className="flex gap-4"><a href="#">Privacy Policy</a><a href="#">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}

const DEFAULT_HERO_STATS: { value: string; label: string }[] = [
  { value: "5,000+", label: "Vehicles tracked" },
  { value: "10+", label: "Industries served" },
  { value: "24/7", label: "Nationwide support" },
  { value: "99.9%", label: "Uptime SLA" },
];

export function PageHero({
  eyebrow, title, accent, subtitle, cta, heroImage, badge, stats,
}: {
  eyebrow: string; title: string; accent?: string; subtitle?: string;
  cta?: ReactNode; heroImage?: string; badge?: string;
  stats?: { value: string; label: string }[];
}) {
  const heroStats = stats ?? DEFAULT_HERO_STATS;
  return (
    <section
      className="relative overflow-hidden border-b border-border py-10 lg:py-16"
      style={{ background: "var(--gradient-hero)" }}
    >
      {heroImage && (
        <>
          <img decoding="async" fetchPriority="high" src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </>
      )}
      <div className="absolute inset-0 bg-[var(--gradient-blue)] opacity-10" />
      <div className="container relative mx-auto grid gap-8 px-6 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-10">
        <div className="min-w-0">
          <p className="text-xs tracking-[0.4em] text-primary mb-3">{eyebrow}</p>
          <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-black leading-[1.05] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
            {title} {accent && <span className="bg-[var(--gradient-blue)] bg-clip-text text-transparent">{accent}</span>}
          </h1>
          {subtitle && <p className="mt-4 max-w-2xl text-sm md:text-base text-foreground/85 leading-relaxed">{subtitle}</p>}
          {badge && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-4 py-2 text-[11px] tracking-[0.25em] text-primary backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />{badge}
            </div>
          )}
          <div className="mt-5 flex flex-wrap gap-3">
            {cta ?? (
              <>
                <Link to="/contact" className="rounded bg-[var(--gradient-blue)] px-6 py-3 text-xs font-bold tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90">REQUEST DEMO</Link>
                <Link to="/shop" className="rounded border border-gold/60 px-6 py-3 text-xs font-bold tracking-[0.2em] text-gold hover:bg-gold hover:text-background transition">VIEW HARDWARE</Link>
              </>
            )}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card/70 backdrop-blur p-5 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] tracking-[0.3em] text-gold">TRUSTED BY FLEETS PH-WIDE</span>
            <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3 fill-gold text-gold" />)}</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {heroStats.map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-background/60 p-3">
                <div className="text-xl md:text-2xl font-black bg-[var(--gradient-blue)] bg-clip-text text-transparent">{s.value}</div>
                <div className="text-[11px] text-muted-foreground leading-tight mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border/60 pt-3">
            {["LTFRB", "ISO Ready", "5 Countries", "Since 2017"].map((b) => (
              <span key={b} className="rounded border border-gold/40 px-2 py-0.5 text-[10px] tracking-widest text-gold">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip({ items }: { items?: { value: string; label: string }[] }) {
  const data = items ?? [
    { value: "5,000+", label: "Vehicles online" },
    { value: "20%", label: "Avg. fuel savings" },
    { value: "30%", label: "Productivity gain" },
    { value: "24/7", label: "Support coverage" },
  ];
  return (
    <section className="border-b border-border bg-card/40">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden px-6">
        {data.map((s) => (
          <div key={s.label} className="px-4 py-5 text-center">
            <div className="text-2xl md:text-3xl font-black bg-[var(--gradient-blue)] bg-clip-text text-transparent">{s.value}</div>
            <div className="text-[11px] tracking-widest text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, accent, center }: { eyebrow: string; title: string; accent?: string; center?: boolean }) {
  return (
    <div className={`mb-6 ${center ? "text-center max-w-2xl mx-auto" : ""}`}>
      <p className="text-xs tracking-[0.3em] text-primary mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-black leading-tight">
        {title} {accent && <span className="text-gold">{accent}</span>}
      </h2>
    </div>
  );
}

export function DemoCTA({ title = "Request a Free Demo", subtitle = "Get a free demo today and control all your fleets at your fingertips." }: { title?: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-y border-border" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-[var(--gradient-blue)] opacity-10" />
      <div className="container relative mx-auto px-6 py-12 text-center">
        <p className="text-xs tracking-[0.3em] text-gold mb-3">GET STARTED</p>
        <h2 className="text-3xl md:text-5xl font-black">{title}</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="rounded bg-[var(--gradient-blue)] px-7 py-3.5 text-sm font-bold tracking-wider text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90">REQUEST DEMO</Link>
          <Link to="/contact" className="rounded border border-border bg-card/60 px-7 py-3.5 text-sm font-bold tracking-wider hover:border-primary">CONTACT US</Link>
        </div>
      </div>
    </section>
  );
}
