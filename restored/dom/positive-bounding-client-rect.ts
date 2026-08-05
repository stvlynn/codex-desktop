// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `MFr` / export `RZ`.

export type ClientRectBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

/** `getBoundingClientRect` when width/height are positive; else null. */
export function positiveBoundingClientRect(
  element: Element,
): ClientRectBox | null {
  const { x, y, width, height } = element.getBoundingClientRect();
  return width > 0 && height > 0 ? { x, y, width, height } : null;
}
