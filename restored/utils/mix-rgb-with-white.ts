// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tKt` / export `Int`.

/** Mix an RGB triple toward white by amount `t` in `[0,1]`. */
export function mixRgbWithWhite(
  r: number,
  g: number,
  b: number,
  t?: number,
): [number, number, number] {
  const amount = Math.min(Math.max(t ?? 1, 0), 1);
  const lift = 255 * (1 - amount);
  return [
    Math.round(r * amount + lift),
    Math.round(g * amount + lift),
    Math.round(b * amount + lift),
  ];
}
