// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `XYs` / export `yg`.

export type Point2D = { x: number; y: number };
export type Rect2D = { x: number; y: number; width: number; height: number };

/** Top-right corner of a rect (`x+width`, `y`). */
export function rectTopRightPoint(rect: Rect2D): Point2D {
  return { x: rect.x + rect.width, y: rect.y };
}
