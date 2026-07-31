// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: rect side hit / nearest edge (legacy kde/wde/Cde/Ade).

import type { EdgeHit, Point2D, RectSide, SizeRect } from "./types";
import { rectCenter } from "./bbox";

/** Legacy `kde` — midpoint + outward normal for a rect side. */
export function rectSideHit(
  rect: SizeRect,
  side: RectSide | number,
): EdgeHit | null {
  switch (side) {
    case 0:
      return {
        point: { x: rect.x + rect.width / 2, y: rect.y },
        normal: { x: 0, y: -1 },
      };
    case 1:
      return {
        point: { x: rect.x, y: rect.y + rect.height / 2 },
        normal: { x: -1, y: 0 },
      };
    case 2:
      return {
        point: {
          x: rect.x + rect.width / 2,
          y: rect.y + rect.height,
        },
        normal: { x: 0, y: 1 },
      };
    case 3:
      return {
        point: {
          x: rect.x + rect.width,
          y: rect.y + rect.height / 2,
        },
        normal: { x: 1, y: 0 },
      };
    default:
      return null;
  }
}

/** Legacy `wde` — dominant side from center toward a target. */
export function dominantRectSide(
  from: Point2D,
  to: Point2D,
): RectSide {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  return Math.abs(dx) >= Math.abs(dy)
    ? dx >= 0
      ? 3
      : 1
    : dy >= 0
      ? 2
      : 0;
}

/** Legacy `Ade` — unit vector (or zero if near-zero). */
export function normalizeVector(v: Point2D): Point2D {
  const len = Math.hypot(v.x, v.y);
  return len < 0.001
    ? { x: 0, y: 0 }
    : { x: v.x / len, y: v.y / len };
}

/**
 * Legacy `Cde` — preferred side hit toward target, else center→target normal.
 */
export function nearestRectEdgeToward(
  rect: SizeRect,
  preferredSide: RectSide | number,
  toward: Point2D,
): EdgeHit {
  const preferred = rectSideHit(rect, preferredSide);
  if (preferred) return preferred;
  const center = rectCenter(rect);
  return (
    rectSideHit(rect, dominantRectSide(center, toward)) || {
      point: center,
      normal: normalizeVector({
        x: toward.x - center.x,
        y: toward.y - center.y,
      }),
    }
  );
}
