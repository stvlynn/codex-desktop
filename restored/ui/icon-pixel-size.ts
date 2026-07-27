// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Pixel size table for compact icon boxes (bundle `qQe` / `JQe`).

export type IconPixelSizeScale = 1 | 2;

const ICON_PIXEL_SIZE_BY_SCALE: Record<IconPixelSizeScale, number> = {
  1: 9,
  2: 11,
};

/**
 * Map a compact icon scale to a pixel size (bundle `qQe` / export `Tut`).
 * Scale `1` → 9px, scale `2` → 11px.
 */
export function getIconPixelSize(scale: IconPixelSizeScale = 1): number {
  return ICON_PIXEL_SIZE_BY_SCALE[scale];
}

export { ICON_PIXEL_SIZE_BY_SCALE };

/** Bundle export `Eut` — rolldown ESM init for the pixel-size table. */
export function ensureIconPixelSizeInit(): void {}
