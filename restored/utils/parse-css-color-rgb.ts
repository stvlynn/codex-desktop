// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `by` / export `Wnt`.

/**
 * Parse `#rrggbb`, `rgb(...)`, or `rgba(...)` into `[r,g,b]`.
 * Invalid input returns `[0,0,0]` (matches bundle fallback without logging).
 */
export function parseCssColorRgb(color: string): [number, number, number] {
  if (color.startsWith("#")) {
    const value = parseInt(color.slice(1), 16);
    return [(value & 0xff0000) >> 16, (value & 0x00ff00) >> 8, value & 0xff];
  }
  if (color.startsWith("rgb(")) {
    return color
      .slice(4, -1)
      .split(",")
      .map((part) => parseInt(part, 10)) as [number, number, number];
  }
  if (color.startsWith("rgba(")) {
    return color
      .slice(5, -1)
      .split(",")
      .map((part) => parseInt(part, 10))
      .slice(0, 3) as [number, number, number];
  }
  return [0, 0, 0];
}
