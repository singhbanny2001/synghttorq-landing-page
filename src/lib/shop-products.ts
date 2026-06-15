import fuelSensor from "@/assets/product-fuel-sensor.jpg";
import dashcam2 from "@/assets/product-dashcam-2.jpg";
import dashcam4 from "@/assets/product-dashcam-4.jpg";
import gpsTracker from "@/assets/product-gps-tracker.jpg";

export type ProductCategory = "GPS Trackers" | "Dash Cams" | "Sensors" | "Accessories";

export type ShopProduct = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  pricePhp: number;
  image: string;
  features: string[];
  category: ProductCategory;
};

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: "fuel-level-sensor",
    name: "Fuel Level Sensor",
    shortName: "Fuel Sensor",
    description:
      "Capacitive fuel level sensor for accurate, real-time fuel monitoring. Detect refueling, theft, and consumption per trip — pairs with any SYNGH TORQ GPS tracker.",
    pricePhp: 9500,
    image: fuelSensor,
    features: ["Real-time fuel level", "Refuel & theft alerts", "Works with all SYNGH TORQ GPS units"],
    category: "Sensors",
  },
  {
    id: "offline-dashcam-2",
    name: "Offline Dashcam (2 Cameras — Front & Rear)",
    shortName: "Dashcam 2-CH",
    description:
      "Dual-channel HD dash cam with front and rear cameras. Loop recording, G-sensor incident capture, and local SD storage — no monthly fees.",
    pricePhp: 8500,
    image: dashcam2,
    features: ["Front + Rear HD recording", "G-sensor incident capture", "Loop SD-card storage"],
    category: "Dash Cams",
  },
  {
    id: "offline-dashcam-4",
    name: "Offline Dashcam (4 Cameras — Front, Rear & Sides)",
    shortName: "Dashcam 4-CH",
    description:
      "Full 4-channel MDVR system for trucks and buses. Covers front, rear, and both sides with synchronized recording — ideal for fleet evidence and insurance claims.",
    pricePhp: 15000,
    image: dashcam4,
    features: ["4 synchronized HD channels", "Up to 6 months local storage", "Truck & bus ready"],
    category: "Dash Cams",
  },
  {
    id: "basic-gps-tracker",
    name: "Basic GPS Tracker",
    shortName: "GPS Tracker",
    description:
      "Compact, LTFRB-accredited GPS tracker for cars, motorcycles, and light vehicles. Real-time location, geofencing, and trip history through the SYNGH TORQ platform.",
    pricePhp: 4500,
    image: gpsTracker,
    features: ["Real-time location (10s refresh)", "Geofencing & speed alerts", "LTFRB accredited"],
    category: "GPS Trackers",
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "GPS Trackers",
  "Dash Cams",
  "Sensors",
  "Accessories",
];

export function formatPhp(amount: number) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function findProduct(id: string) {
  return SHOP_PRODUCTS.find((p) => p.id === id);
}