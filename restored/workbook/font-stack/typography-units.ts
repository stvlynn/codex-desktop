// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-14: hundredths-of-a-point / twip → CSS px.

import { esmInit } from "../../runtime/rolldown-runtime";

/** CSS px per typographic point (96/72). */
export let CSS_PX_PER_POINT: number;
/** Twips per point. */
export let TWIPS_PER_POINT: number;

export let ensureTypographyUnitsInit: () => void = esmInit(() => {
  CSS_PX_PER_POINT = 1.3333333333333333;
  TWIPS_PER_POINT = 20;
});

/** Hundredths of a point → CSS px (optional scale). */
export function hundredthsPointToCssPx(
  hundredthsOfPoint: number | null | undefined,
  scale: number = 1,
): number {
  ensureTypographyUnitsInit();
  return ((hundredthsOfPoint ?? 0) / 100) * CSS_PX_PER_POINT * scale;
}

/** Hundredths of a point → CSS px, or 0 when falsy. */
export function hundredthsPointToCssPxOrZero(
  hundredthsOfPoint: number | null | undefined,
): number {
  ensureTypographyUnitsInit();
  return hundredthsOfPoint
    ? (hundredthsOfPoint / 100) * CSS_PX_PER_POINT
    : 0;
}

/** Twips → CSS px. */
export function twipToCssPx(twips: number | null | undefined): number {
  ensureTypographyUnitsInit();
  return twips ? (twips / TWIPS_PER_POINT) * CSS_PX_PER_POINT : 0;
}
