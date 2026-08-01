// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: inset plot rect from ratios (legacy lxe).
// Stage-3 wave-134.

export function lxe(clpIn5109: any, clpIn5110: any) {
  let clpBind14598 = typeof clpIn5110?.x == "number" ? clpIn5110.x : 0.54,
    clpBind14599 = typeof clpIn5110?.y == "number" ? clpIn5110.y : 0.06,
    clpBind14600 = typeof clpIn5110?.w == "number" ? clpIn5110.w : 0.42,
    clpBind14601 = typeof clpIn5110?.h == "number" ? clpIn5110.h : 0.28;
  return {
    x: clpIn5109.x + clpIn5109.width * clpBind14598 + 6,
    y: clpIn5109.y + clpIn5109.height * clpBind14599 + 6,
    width: Math.max(0, clpIn5109.width * clpBind14600 - 12),
    height: Math.max(0, clpIn5109.height * clpBind14601 - 12),
  };
}
