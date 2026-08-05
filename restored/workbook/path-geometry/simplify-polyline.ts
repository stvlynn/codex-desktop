// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: polyline simplify + elbow insert (legacy workbookHelper 306/xde).

import type { Point2D } from "./types";
import { isAxisCollinear, pointsEqual, pointsNearEqual } from "./point-ops";

/**
 * Legacy `xde` — insert an axis-aligned elbow between two non-aligned points.
 */
export function insertAxisElbow(a: Point2D, b: Point2D): Point2D[] {
  if (pointsNearEqual(a.x, b.x) || pointsNearEqual(a.y, b.y)) return [a, b];
  const midX = (a.x + b.x) / 2;
  return [a, { x: midX, y: a.y }, { x: midX, y: b.y }, b];
}

/**
 * Legacy workbookHelper 306 — drop duplicate + axis-collinear interior points.
 */
export function simplifyPolyline(points: Point2D[]): Point2D[] {
  if (points.length < 2) return points;
  const deduped: Point2D[] = [];
  for (const point of points) {
    const prev = deduped[deduped.length - 1];
    (prev && pointsEqual(prev, point)) || deduped.push(point);
  }
  if (deduped.length <= 2) return deduped;
  const kept: Point2D[] = [deduped[0]!];
  for (let i = 1; i < deduped.length - 1; i += 1) {
    const prev = kept[kept.length - 1];
    const cur = deduped[i];
    const next = deduped[i + 1];
    !prev ||
      !cur ||
      !next ||
      isAxisCollinear(prev, cur, next) ||
      kept.push(cur);
  }
  kept.push(deduped[deduped.length - 1]!);
  return kept;
}
