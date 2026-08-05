// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: roundRect adj formula helpers (legacy Binding656/Nde/$S/Pde).

import { esmInit } from "../../runtime/rolldown-runtime";
import type { RoundRectAdjInput, ShapeAdjustment } from "./types";

/** Legacy `workbookBinding656` — OOXML adj clamp ceiling (50_000). */
export const ROUND_RECT_ADJ_MAX = 5e4;

/** Legacy `Nde` — clamp adj to 0…ROUND_RECT_ADJ_MAX. */
export function clampRoundRectAdj(value: number): number {
  return value < 0
    ? 0
    : value > ROUND_RECT_ADJ_MAX
      ? ROUND_RECT_ADJ_MAX
      : value;
}

/**
 * Legacy `$S` — radiusPx / min(width,height) → OOXML `adj` formula list.
 */
export function buildRoundRectAdjList(
  input: RoundRectAdjInput,
): ShapeAdjustment[] | undefined {
  const { widthPx, heightPx, radiusPx } = input;
  if (
    !Number.isFinite(widthPx) ||
    widthPx <= 0 ||
    !Number.isFinite(heightPx) ||
    heightPx <= 0 ||
    !Number.isFinite(radiusPx) ||
    radiusPx < 0
  )
    return;
  const adj = Math.round((radiusPx / Math.min(widthPx, heightPx)) * 1e5);
  return [
    {
      name: "adj",
      formula: `val ${clampRoundRectAdj(adj)}`,
    },
  ];
}

/** Legacy `Pde` — touch roundRect adj helpers. */
export const ensureRoundRectAdjInit = esmInit(() => {
  void ROUND_RECT_ADJ_MAX;
  void clampRoundRectAdj;
  void buildRoundRectAdjList;
});
