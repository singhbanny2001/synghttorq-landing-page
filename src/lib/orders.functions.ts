import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const PRODUCT_CATALOG: Record<string, { name: string; price: number }> = {
  "fuel-level-sensor": { name: "Fuel Level Sensor", price: 9500 },
  "offline-dashcam-2": { name: "Offline Dashcam (2 Cameras — Front & Rear)", price: 8500 },
  "offline-dashcam-4": { name: "Offline Dashcam (4 Cameras — Front, Rear & Sides)", price: 15000 },
  "basic-gps-tracker": { name: "Basic GPS Tracker", price: 4500 },
};

const orderSchema = z.object({
  fullName: z.string().trim().min(1).max(120),
  companyName: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(40),
  address: z.string().trim().min(5).max(500),
  productId: z.string().min(1),
  quantity: z.number().int().min(1).max(999),
  paymentMethod: z.enum(["paypal", "card"]),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const placeOrder = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => orderSchema.parse(input))
  .handler(async ({ data }) => {
    const product = PRODUCT_CATALOG[data.productId];
    if (!product) throw new Error("Unknown product");

    const total = product.price * data.quantity;

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: inserted, error } = await supabaseAdmin
      .from("orders")
      .insert({
        full_name: data.fullName,
        company_name: data.companyName || null,
        email: data.email,
        phone: data.phone,
        address: data.address,
        product_id: data.productId,
        product_name: product.name,
        unit_price_php: product.price,
        quantity: data.quantity,
        total_php: total,
        payment_method: data.paymentMethod,
        notes: data.notes || null,
      })
      .select("id, created_at, total_php")
      .single();

    if (error) {
      console.error("[placeOrder] insert failed", error);
      throw new Error("Could not save your order. Please try again.");
    }

    return {
      orderId: inserted.id,
      totalPhp: inserted.total_php,
      createdAt: inserted.created_at,
    };
  });