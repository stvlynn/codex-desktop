// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Three.js pastel material cache.
// Stage-3 wave-111.

import { Color } from "../../vendor/three";

const DEFAULT_PASTEL_FALLBACK = "#60a5fa";

void Color;
void DEFAULT_PASTEL_FALLBACK;

export function parseThemeColor(
  tcpIn8088: any,
  tcpIn8089: any = DEFAULT_PASTEL_FALLBACK,
) {
  let tcpBind18600 = new Color();
  try {
    tcpBind18600.set(tcpIn8088 ?? tcpIn8089);
  } catch {
    tcpBind18600.set(tcpIn8089);
  }
  return (
    (Number.isNaN(tcpBind18600.r) ||
      Number.isNaN(tcpBind18600.g) ||
      Number.isNaN(tcpBind18600.b)) &&
      tcpBind18600.set(tcpIn8089),
    tcpBind18600
  );
}
export function resolvePastelMaterial(tcpIn1917: any, tcpIn1918: any) {
  let tcpBind8621 =
      (tcpIn1917 ?? DEFAULT_PASTEL_FALLBACK).toLowerCase() +
      "_mobile_pastel_v2",
    tcpBind8622 = tcpIn1918.get(tcpBind8621);
  if (tcpBind8622) return tcpBind8622;
  let tcpBind8623 = parseThemeColor(tcpIn1917),
    tcpBind8624 = {
      h: 0,
      s: 0,
      l: 0,
    };
  tcpBind8623.getHSL(tcpBind8624);
  let tcpBind8625 = tcpBind8624.h,
    tcpBind8626 = tcpBind8624.s,
    tcpBind8627 = tcpBind8624.l,
    tcpBind8628 = tcpBind8625 < 0.03 || tcpBind8625 > 0.97,
    tcpBind8629 = !tcpBind8628 && tcpBind8625 >= 0.03 && tcpBind8625 < 0.11,
    tcpBind8630 = !tcpBind8628 && tcpBind8625 >= 0.11 && tcpBind8625 < 0.2;
  tcpBind8626 = tcpBind8626 * 1.25 + 0.06;
  tcpBind8627 = tcpBind8627 * 0.92 + 0.04;
  tcpBind8629 &&
    ((tcpBind8626 = Math.min(1, tcpBind8626 * 1.35 + 0.08)),
    (tcpBind8627 += 0.03));
  tcpBind8630 &&
    ((tcpBind8626 = Math.min(1, tcpBind8626 * 1.2 + 0.06)),
    (tcpBind8627 += 0.01));
  tcpBind8628 &&
    ((tcpBind8626 = Math.min(1, tcpBind8626 * 1.2 + 0.06)),
    (tcpBind8627 -= 0.12));
  tcpBind8627 = Math.max(tcpBind8628 ? 0.32 : 0.4, Math.min(0.72, tcpBind8627));
  let tcpBind8631 = new tcpBind1103({
    color: tcpBind8623,
    metalness: 0,
    roughness: 0.6,
    clearcoat: 1,
    clearcoatRoughness: 0.35,
    reflectivity: 0.5,
    emissive: tcpBind8623.clone().multiplyScalar(0.75),
    transmission: 0,
    thickness: 0.1,
    opacity: 1,
  });
  return (tcpIn1918.set(tcpBind8621, tcpBind8631), tcpBind8631);
}

export const Zbe = parseThemeColor;
export const workbookHelper519 = resolvePastelMaterial;
