// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: point equality / collinear / near (legacy Dde/Ode/workbookHelper 307).

import type { Point2D } from "./types";

/** Legacy workbookHelper 307 — near-equal floats. */
export function pointsNearEqual(a: number, b: number): boolean {
  return Math.abs(a - b) < 0.001;
}

/** Legacy `Dde` — near-equal 2D points. */
export function pointsEqual(a: Point2D, b: Point2D): boolean {
  return Math.abs(a.x - b.x) < 0.001 && Math.abs(a.y - b.y) < 0.001;
}

/** Legacy `Ode` — middle point collinear on axis-aligned segment. */
export function isAxisCollinear(
  a: Point2D,
  b: Point2D,
  c: Point2D,
): boolean {
  const sameX = pointsNearEqual(a.x, b.x) && pointsNearEqual(b.x, c.x);
  const sameY = pointsNearEqual(a.y, b.y) && pointsNearEqual(b.y, c.y);
  return sameX || sameY;
}
