// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: luminance-based contrast text colors (legacy JSe).
// Stage-3 wave-130.

import { color } from "../../vendor/d3-color";

export function contrastTextColors(ctcIn5256: any) {
  let ctcBind14830 = color(ctcIn5256);
  if (!ctcBind14830)
    return {
      primary: "#1a1a1a",
      secondary: "rgba(0,0,0,0.7)",
    };
  let ctcBind14831 = ctcBind14830.rgb(),
    ctcBind14832 = ctcBind14831.r / 255,
    ctcBind14833 = ctcBind14831.g / 255,
    ctcBind14834 = ctcBind14831.b / 255;
  return 0.2126 * ctcBind14832 + 0.7152 * ctcBind14833 + 0.0722 * ctcBind14834 >
    0.55
    ? {
        primary: "#1a1a1a",
        secondary: "rgba(0,0,0,0.6)",
      }
    : {
        primary: "#ffffff",
        secondary: "rgba(255,255,255,0.8)",
      };
}

export const JSe = contrastTextColors;
