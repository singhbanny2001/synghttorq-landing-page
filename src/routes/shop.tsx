import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import {
  ShoppingCart, Package, CreditCard, Wallet, Truck, CheckCircle2, X, Minus, Plus, Satellite, Camera, Gauge, Cable,
  Shield, Wifi, Wrench, ArrowRight, Zap
} from "lucide-react";

import { SiteLayout } from "@/components/site-layout";
import { SHOP_PRODUCTS, PRODUCT_CATEGORIES, formatPhp, type ShopProduct, type ProductCategory } from "@/lib/shop-products";
import { placeOrder } from "@/lib/orders.functions";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — SYNGH TORQ Hardware & Devices" },
      { name: "description", content: "Order GPS trackers, fuel sensors, and fleet dashcams from SYNGH TORQ. Nationwide delivery in the Philippines." },
      { property: "og:title", content: "SYNGH TORQ Shop" },
      { property: "og:description", content: "GPS trackers, fuel sensors, and fleet dashcams. Order online." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [selected, setSelected] = useState<ShopProduct | null>(null);

  const categoryIcons: Record<ProductCategory, typeof Satellite> = {
    "GPS Trackers": Satellite,
    "Dash Cams": Camera,
    "Sensors": Gauge,
    "Accessories": Cable,
  };

  const grouped = PRODUCT_CATEGORIES.map((cat) => ({
    category: cat,
    icon: categoryIcons[cat],
    items: SHOP_PRODUCTS.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <SiteLayout>
      <div className="bg-[#050505] text-white selection:bg-primary selection:text-white min-h-screen">
        
        {/* Shop Hero */}
        <section className="relative overflow-hidden border-b border-white/10 py-24 bg-[#0A0A0A]">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
          
          <div className="container relative z-10 mx-auto px-6">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-primary backdrop-blur-md mb-6">
                  <ShoppingCart className="h-3 w-3" /> HARDWARE STORE
                </div>
                <h1 className="text-4xl md:text-6xl font-black leading-tight text-white mb-6">
                  Industrial-Grade <br /> <span className="text-gold">Fleet Devices.</span>
                </h1>
                <p className="text-lg text-white/60 mb-8 font-medium">
                  Order LTFRB-compliant GPS trackers, high-precision fuel sensors, and edge-AI dashcams. Built for Philippine roads, tested for maximum reliability.
                </p>
            </div>
          </div>
        </section>

        {/* Sticky Category Navigation */}
        <div className="sticky top-[64px] md:top-[80px] z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl">
           <div className="container mx-auto px-6 flex gap-3 overflow-x-auto no-scrollbar scroll-smooth">
             {grouped.map((g) => (
                <a key={g.category} href={`#cat-${g.category.replace(/\s+/g, "-").toLowerCase()}`} className="inline-flex whitespace-nowrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-bold tracking-widest text-white/80 hover:bg-white/10 hover:text-white transition">
                   <g.icon className="h-4 w-4 text-primary" /> {g.category.toUpperCase()}
                </a>
             ))}
           </div>
        </div>

        <section id="inventory" className="py-20">
          <div className="container mx-auto px-6 space-y-24">
            {grouped.map((g) => (
              <div key={g.category} id={`cat-${g.category.replace(/\s+/g, "-").toLowerCase()}`}>
                <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                      <g.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] text-primary">CATEGORY</p>
                      <h2 className="text-2xl md:text-3xl font-black text-white">{g.category}</h2>
                    </div>
                  </div>
                  <span className="text-xs tracking-widest text-white/50 font-bold">{g.items.length} {g.items.length === 1 ? "ITEM" : "ITEMS"}</span>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                  {g.items.map((p) => (
                    <article key={p.id} className="group flex flex-col rounded-2xl border border-white/10 bg-[#111] overflow-hidden hover:border-primary/50 hover:shadow-[0_20px_60px_-25px_rgba(59,130,246,0.45)] transition duration-500">
                      <div className="relative aspect-square bg-white overflow-hidden p-6 flex items-center justify-center">
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          width={1024}
                          height={1024}
                          className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 rounded-full border border-gold/60 bg-black/80 px-3 py-1 text-[10px] font-bold tracking-widest text-gold backdrop-blur-md">
                          IN STOCK
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-lg font-black leading-tight text-white">{p.name}</h3>
                        <p className="mt-2 text-sm text-white/50 leading-relaxed flex-1">{p.description}</p>
                        <ul className="mt-4 space-y-2 mb-6">
                          {p.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-xs text-white/80 font-medium">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />{f}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto flex items-end justify-between pt-4 border-t border-white/10">
                          <div>
                            <div className="text-[10px] tracking-widest text-white/40 font-bold mb-1">PRICE</div>
                            <div className="text-2xl font-black text-white">{formatPhp(p.pricePhp)}</div>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelected(p)}
                          className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--gradient-blue)] py-3.5 text-sm font-bold tracking-wider text-white shadow-[var(--shadow-glow)] hover:opacity-90 transition transform hover:-translate-y-0.5"
                        >
                          <ShoppingCart className="h-4 w-4" /> ORDER NOW
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {selected && <OrderDialog product={selected} onClose={() => setSelected(null)} />}

        {/* Dark Mode Enterprise CTA */}
        <section className="py-32 bg-[#050505] border-t border-white/10 relative overflow-hidden text-center">
           <div className="absolute inset-0 bg-[var(--gradient-blue)] opacity-5 mix-blend-screen" />
           <div className="container relative z-10 mx-auto px-6 max-w-3xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-6">
                 <Zap className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">Deploying a large fleet?</h2>
              <p className="text-lg text-white/60 mb-10 leading-relaxed">
                 Ordering 10+ units or need specialized hardware integrations? Our enterprise team will tailor a custom hardware package and schedule nationwide installation.
              </p>
              <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black px-8 py-4 text-sm font-bold tracking-wider hover:bg-white/90 transition transform hover:-translate-y-0.5">
                 CONTACT ENTERPRISE SALES <ArrowRight className="h-4 w-4" />
              </a>
           </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function OrderDialog({ product, onClose }: { product: ShopProduct; onClose: () => void }) {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
    quantity: 1,
    paymentMethod: "card" as "paypal" | "card",
    notes: "",
  });
  const [done, setDone] = useState<{ orderId: string; total: number } | null>(null);

  const total = useMemo(() => product.pricePhp * form.quantity, [product.pricePhp, form.quantity]);
  const placeOrderFn = useServerFn(placeOrder);
  const mutation = useMutation({
    mutationFn: () =>
      placeOrderFn({
        data: {
          fullName: form.fullName.trim(),
          companyName: form.companyName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          address: form.address.trim(),
          productId: product.id,
          quantity: form.quantity,
          paymentMethod: form.paymentMethod,
          notes: form.notes.trim(),
        },
      }),
    onSuccess: (res) => {
      setDone({ orderId: res.orderId, total: res.totalPhp });
      toast.success("Order placed! We'll contact you shortly.");
    },
    onError: (err) => {
      toast.error(err instanceof Error ? err.message : "Could not place order");
    },
  });

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.address) {
      toast.error("Please fill in all required fields");
      return;
    }
    mutation.mutate();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto" onClick={onClose}>
      <div className="relative w-full max-w-2xl my-8 rounded-2xl border border-white/10 bg-[#111] text-white shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 p-1.5 hover:border-primary hover:bg-primary/20 z-10 transition" aria-label="Close">
          <X className="h-5 w-5 text-white" />
        </button>

        {done ? (
          <div className="p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 mb-6">
              <CheckCircle2 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-3xl font-black text-white">Order Received</h3>
            <p className="mt-2 text-sm text-white/50">
              Reference: <span className="font-mono text-white font-bold">{done.orderId.slice(0, 8).toUpperCase()}</span>
            </p>
            <p className="mt-1 text-sm text-white/50">
              Total: <span className="font-bold text-white">{formatPhp(done.total)}</span>
            </p>
            <p className="mt-6 text-sm text-white/80 max-w-md mx-auto leading-relaxed">
              Our team will email payment instructions for <span className="font-bold text-primary">{labelForMethod(form.paymentMethod)}</span> within 1 business hour.
            </p>
            <button onClick={onClose} className="mt-8 rounded-xl bg-[var(--gradient-blue)] px-8 py-3.5 text-sm font-bold tracking-wider text-white shadow-[var(--shadow-glow)] hover:opacity-90 transition">
              CLOSE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid md:grid-cols-[1fr_280px] gap-0">
            <div className="p-6 md:p-8 space-y-5">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-primary">PLACE YOUR ORDER</p>
                <h3 className="text-2xl font-black mt-2 leading-tight">{product.name}</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name *" value={form.fullName} onChange={(v) => set("fullName", v)} />
                <Field label="Company (optional)" value={form.companyName} onChange={(v) => set("companyName", v)} />
                <Field label="Email *" type="email" value={form.email} onChange={(v) => set("email", v)} />
                <Field label="Phone *" value={form.phone} onChange={(v) => set("phone", v)} />
              </div>
              <Field label="Complete Delivery Address *" value={form.address} onChange={(v) => set("address", v)} textarea />

              <div>
                <Label>Quantity</Label>
                <div className="mt-1.5 inline-flex items-center rounded-xl border border-white/10 bg-white/5 p-1">
                  <button type="button" onClick={() => set("quantity", Math.max(1, form.quantity - 1))} className="px-3 py-2 hover:text-primary" aria-label="Decrease">
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <input
                    type="number" min={1} max={999} value={form.quantity}
                    onChange={(e) => set("quantity", Math.max(1, Math.min(999, Number(e.target.value) || 1)))}
                    className="w-14 bg-transparent text-center text-sm font-bold text-white outline-none"
                  />
                  <button type="button" onClick={() => set("quantity", Math.min(999, form.quantity + 1))} className="px-3 py-2 hover:text-primary" aria-label="Increase">
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div>
                <Label>Payment Method</Label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <PayOption icon={CreditCard} label="Card" active={form.paymentMethod === "card"} onClick={() => set("paymentMethod", "card")} />
                  <PayOption icon={Wallet} label="PayPal" active={form.paymentMethod === "paypal"} onClick={() => set("paymentMethod", "paypal")} />
                </div>
              </div>

              <Field label="Additional Notes (optional)" value={form.notes} onChange={(v) => set("notes", v)} textarea />
            </div>

            <aside className="bg-[#0A0A0A] border-t md:border-t-0 md:border-l border-white/10 p-6 md:p-8 flex flex-col">
              <p className="text-[10px] tracking-[0.3em] text-gold">ORDER SUMMARY</p>
              <div className="mt-4 rounded-xl border border-white/10 bg-[#111] overflow-hidden">
                <div className="aspect-square bg-white">
                  <img src={product.image} alt="" className="h-full w-full object-contain p-3" />
                </div>
                <div className="p-4">
                  <div className="text-xs font-bold leading-tight text-white">{product.shortName}</div>
                  <div className="text-[11px] text-white/50 mt-1">{formatPhp(product.pricePhp)} × {form.quantity}</div>
                </div>
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <Row k="Subtotal" v={formatPhp(product.pricePhp * form.quantity)} />
                <Row k="Shipping" v="Quoted on confirmation" muted />
                <div className="border-t border-white/10 my-3" />
                <div className="flex items-baseline justify-between pt-1">
                  <span className="text-xs tracking-widest text-white/50 font-bold">TOTAL</span>
                  <span className="text-2xl font-black text-white">{formatPhp(total)}</span>
                </div>
              </div>
              <button
                type="submit"
                disabled={mutation.isPending}
                className="mt-8 rounded-xl bg-[var(--gradient-blue)] py-4 text-sm font-bold tracking-wider text-white shadow-[var(--shadow-glow)] hover:opacity-90 disabled:opacity-60 transition"
              >
                {mutation.isPending ? "PLACING..." : "PLACE ORDER"}
              </button>
              <p className="mt-4 text-[10px] text-white/40 leading-relaxed text-center">
                By placing this order you agree to be contacted by SYNGH TORQ for payment & delivery confirmation.
              </p>
            </aside>
          </form>
        )}
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-[10px] tracking-[0.2em] text-white/50 font-bold block mb-1.5">{children}</label>;
}

function Field({ label, value, onChange, type = "text", textarea }: { label: string; value: string; onChange: (v: string) => void; type?: string; textarea?: boolean }) {
  return (
    <div>
      <Label>{label}</Label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={2}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary outline-none transition"
        />
      )}
    </div>
  );
}

function PayOption({ icon: Icon, label, active, onClick }: { icon: typeof CreditCard; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-2 rounded-xl border px-2 py-4 text-xs font-bold transition ${active ? "border-primary bg-primary/10 text-primary" : "border-white/10 bg-white/5 text-white/60 hover:border-primary/50 hover:text-white"}`}
    >
      <Icon className="h-5 w-5" />
      {label}
    </button>
  );
}

function Row({ k, v, muted }: { k: string; v: string; muted?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-white/60 font-medium">{k}</span>
      <span className={muted ? "text-white/40 text-xs" : "font-bold text-white"}>{v}</span>
    </div>
  );
}

function labelForMethod(m: "paypal" | "card") {
  return m === "paypal" ? "PayPal" : "Credit/Debit Card";
}