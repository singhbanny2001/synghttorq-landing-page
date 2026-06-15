// Enforce Vercel build output if deployed on Vercel
if (process.env.VERCEL) process.env.NITRO_PRESET = "vercel";

// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { imagetools } from "vite-imagetools";

export default async (env: any) => {
  const { defineConfig } = await import("@lovable.dev/vite-tanstack-config");
  
  const configFactory = defineConfig({
    tanstackStart: {
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      // nitro/vite builds from this
      server: { entry: "server" },
    },
    vite: {
      plugins: [
        imagetools({
          defaultDirectives: (url) => {
            if (url.searchParams.has("skip")) return new URLSearchParams();
            // Auto-convert jpg imports to webp at 75 quality unless overridden
            if (/\.(jpe?g|png)$/i.test(url.pathname) && !url.search) {
              return new URLSearchParams({ format: "webp", quality: "75" });
            }
            return new URLSearchParams();
          },
        }),
      ],
    },
  });

  return configFactory(env);
};
