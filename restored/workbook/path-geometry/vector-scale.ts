// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: vector scale + monotonic check + percent clamp (legacy Tde/Ede/workbookHelper 310/jde).

import type { Point2D } from "./types";
import { pointsNearEqual } from "./point-ops";

/** Legacy `Tde` — point + direction * scale. */
export function scaleOffset(
  origin: Point2D,
  direction: Point2D,
  scale: number,
): Point2D {
  return {
    x: origin.x + direction.x * scale,
    y: origin.y + direction.y * scale,
  };
}

/**
 * Legacy `Ede` — true when successive points only move +x or +y (axis-monotonic).
 */
export function isAxisMonotonicPolyline(points: Point2D[]): boolean {
  for (let i = 0; i < points.length - 1; i += 1) {
    const a = points[i]!;
    const b = points[i + 1]!;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    if (
      (!pointsNearEqual(dx, 0) && !pointsNearEqual(dy, 0)) ||
      dx < -0.001 ||
      dy < -0.001
    )
      return false;
  }
  return true;
}

/** Legacy `jde` — clamp to OOXML 0…1e5 fixed percent. */
export function clampFixedPercent(value: number): number {
  return value < 0 ? 0 : value > 1e5 ? 1e5 : value;
}

/**
 * Legacy workbookHelper 310 — value/total → fixed 1e5 percent (rounded).
 */
export function ratioToFixedPercent(
  value: number | undefined,
  total: number,
): number | undefined {
  if (
    value === undefined ||
    !Number.isFinite(value) ||
    !Number.isFinite(total) ||
    total <= 0
  )
    return;
  return clampFixedPercent(Math.round((value / total) * 1e5));
}
