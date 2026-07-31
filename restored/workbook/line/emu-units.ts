// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-6: EMU ↔ point converters used by Line stroke width (legacy of / workbookTt).

const EMU_PER_POINT = 9525;
const POINT_PER_EMU = 1 / EMU_PER_POINT;

/** Legacy `of` — EMU → CSS points. */
export function emuToPoints(emu: number | null | undefined): number {
  return emu == null ? 0 : emu * POINT_PER_EMU;
}

/** Legacy `workbookTt` — CSS points → EMU (rounded). */
export function pointsToEmu(points: number): number {
  return Math.round(points * EMU_PER_POINT);
}
