// Enforce Vercel build output if deployed on Vercel
if (process.env.VERCEL) process.env.NITRO_PRESET = "vercel";

import { imagetools } from "vite-imagetools";

export default async (env: any) => {
  const { defineConfig } = await import("@lovable.dev/vite-tanstack-config");

  const configFactory = defineConfig({
    tanstackStart: {
      server: {
        entry: "server",
        preset: "vercel",
      },
    },
    vite: {
      plugins: [
        imagetools({
          defaultDirectives: (url) => {
            if (url.searchParams.has("skip")) return new URLSearchParams();

            if (/\.(jpe?g|png)$/i.test(url.pathname) && !url.search) {
              return new URLSearchParams({
                format: "webp",
                quality: "75",
              });
            }

            return new URLSearchParams();
          },
        }),
      ],
    },
  });

  return configFactory(env);
};