// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: checkbox paint (legacy owe).
// Stage-3 wave-128.

import { swe } from "../shape-path";

const CHECKBOX_RADIUS = 2;

export function paintCheckboxBox(
  pcbIn2397: any,
  pcbIn2398: any,
  { accentColor: any, darkMode }: any,
) {
  let { x, y, size } = pcbIn2398.boxRect,
    pcbBind9615 = darkMode ? "#E5E7EB" : "#6B7280",
    pcbBind9616 = darkMode ? "#0F172A" : "#FFFFFF",
    pcbBind9617 = accentColor ?? (darkMode ? "#93C5FD" : "#2563EB"),
    pcbBind9618 = Math.max(1, Math.round(size * 0.08));
  pcbIn2397.save();
  pcbIn2397.lineWidth = pcbBind9618;
  pcbIn2397.strokeStyle = pcbBind9615;
  pcbIn2397.fillStyle = pcbBind9616;
  pcbIn2397.beginPath();
  swe(pcbIn2397, x, y, size, size, CHECKBOX_RADIUS);
  pcbIn2397.fill();
  pcbIn2397.stroke();
  pcbIn2398.checked &&
    ((pcbIn2397.lineWidth = Math.max(pcbBind9618, Math.round(size * 0.12))),
    (pcbIn2397.strokeStyle = pcbBind9617),
    (pcbIn2397.lineCap = "round"),
    (pcbIn2397.lineJoin = "round"),
    pcbIn2397.beginPath(),
    pcbIn2397.moveTo(x + size * 0.2, y + size * 0.55),
    pcbIn2397.lineTo(x + size * 0.45, y + size * 0.75),
    pcbIn2397.lineTo(x + size * 0.8, y + size * 0.28),
    pcbIn2397.stroke());
  pcbIn2397.restore();
}

export const owe = paintCheckboxBox;
