import { useEffect, useRef } from "react";
import createGlobe from "cobe";

/**
 * Premium interactive 3D globe rendered with cobe (WebGL).
 * Lightweight (~6kb), smooth, auto-rotating, with glowing connection markers
 * representing fleet hubs across major global regions.
 */
export function FleetGlobe({ size = 480 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    let phi = 0;
    let width = 0;
    let rafId = 0;
    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 16000,
      mapBrightness: 7,
      baseColor: [0.12, 0.2, 0.35],
      markerColor: [0.4, 0.8, 1],
      glowColor: [0.25, 0.55, 1],
      arcColor: [0.4, 0.85, 1],
      arcWidth: 1.4,
      arcHeight: 0.45,
      arcs: [
        { from: [14.5995, 120.9842], to: [1.3521, 103.8198] },
        { from: [14.5995, 120.9842], to: [22.3193, 114.1694] },
        { from: [1.3521, 103.8198], to: [25.2048, 55.2708] },
        { from: [25.2048, 55.2708], to: [51.5074, -0.1278] },
        { from: [51.5074, -0.1278], to: [40.7128, -74.006] },
        { from: [40.7128, -74.006], to: [37.7749, -122.4194] },
        { from: [37.7749, -122.4194], to: [35.6762, 139.6503] },
        { from: [35.6762, 139.6503], to: [-33.8688, 151.2093] },
        { from: [40.7128, -74.006], to: [-23.5505, -46.6333] },
        { from: [52.52, 13.405], to: [28.6139, 77.209] },
      ],
      markers: [
        { location: [14.5995, 120.9842], size: 0.1 },   // Manila
        { location: [1.3521, 103.8198], size: 0.07 },   // Singapore
        { location: [35.6762, 139.6503], size: 0.08 },  // Tokyo
        { location: [22.3193, 114.1694], size: 0.07 },  // Hong Kong
        { location: [25.2048, 55.2708], size: 0.07 },   // Dubai
        { location: [51.5074, -0.1278], size: 0.08 },   // London
        { location: [40.7128, -74.006], size: 0.08 },   // New York
        { location: [37.7749, -122.4194], size: 0.07 }, // San Francisco
        { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney
        { location: [-23.5505, -46.6333], size: 0.07 }, // São Paulo
        { location: [19.4326, -99.1332], size: 0.06 },  // Mexico City
        { location: [52.52, 13.405], size: 0.06 },      // Berlin
        { location: [28.6139, 77.209], size: 0.07 },    // Delhi
      ],
    });

    const tick = () => {
      phi += 0.0035;
      globe.update({ phi, width: width * 2, height: width * 2 });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="relative mx-auto" style={{ width: "100%", maxWidth: size, aspectRatio: "1" }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.45),transparent_60%)] blur-2xl" />
      <div className="absolute inset-[-15%] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_65%)] blur-3xl" />
      <canvas
        ref={canvasRef}
        className="relative h-full w-full"
        style={{ contain: "layout paint size" }}
      />
    </div>
  );
}