// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: axis-aligned bbox + center (legacy workbookHelper 308/309).

import type { AxisAlignedBBox, Point2D, SizeRect } from "./types";

/** Legacy workbookHelper 308 — axis-aligned bbox of points. */
export function pointsBBox(points: Point2D[]): AxisAlignedBBox {
  let minX = 1 / 0,
    minY = 1 / 0,
    maxX = -1 / 0,
    maxY = -1 / 0;
  for (const point of points) {
    minX = Math.min(minX, point.x);
    minY = Math.min(minY, point.y);
    maxX = Math.max(maxX, point.x);
    maxY = Math.max(maxY, point.y);
  }
  return { minX, minY, maxX, maxY };
}

/** Legacy workbookHelper 309 — rect center. */
export function rectCenter(rect: SizeRect): Point2D {
  return {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
  };
}
