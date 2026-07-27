// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `jat` — pure helper.

/** Center a pointer event against an element rect. */
export function pointerCenterFromRects(
  rect: { left: number; top: number; width: number; height: number },
  pointer: { screenX: number; screenY: number },
): { centerX: number; centerY: number; height: number; width: number } {
  return {
    centerX: pointer.screenX + rect.left + rect.width / 2,
    centerY: pointer.screenY + rect.top + rect.height / 2,
    height: rect.height,
    width: rect.width,
  };
}
