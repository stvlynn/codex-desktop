// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `eXs` / export `gg` — pure DOM helper via extractFn(eXs).

/** Set `element.style.left/top` from a point (no-op when element is nullish). */
export function setElementStylePosition(
  element: { style: { left: string; top: string } } | null | undefined,
  point: { x: number; y: number },
): void {
  if (element != null) {
    element.style.left = `${point.x}px`;
    element.style.top = `${point.y}px`;
  }
}
