## Goal
Use the uploaded SYNGH TORQ PNG (icon + wordmark together) as the single brand asset in the header and footer. Remove the separate text block.

## Steps

1. **Upload the PNG as a Lovable Asset**

2. **Update `src/components/site-layout.tsx` — `Nav`**
   - Remove the stacked SYNGH / TORQ text span block.
   - Replace the `<Link>` brand contents with a single `<img>` using the new asset.
   - Sizing: `h-10 md:h-12 w-auto object-contain` (preserves aspect ratio, no cropping/stretch). The PNG's dark background blends with the site's dark header; no background treatment needed.
   - Keep hover scale and gold drop-shadow glow for premium feel.
   - Keep header height `h-16 md:h-20`, login button, menu icon, and nav links unchanged.

3. **Update `Footer` in the same file**
   - Replace the logo+text block with the same single `<img>` lockup at `h-12 w-auto`.

4. **Cleanup**
   - Delete unused `src/assets/syngh-torq-official.png.asset.json` (and `syngh-logo.png.asset.json`, `syngh-logo-3d.png.asset.json` if no other references remain — will grep first to confirm).

## Out of scope
No other pages, copy, or layout changes.