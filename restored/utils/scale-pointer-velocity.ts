// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Pat` — pure helper.

/** Scale pointer delta by `0.055 / scale` and clamp hypot to `maxSpeed`. */
export function scalePointerVelocity(
  delta: { x: number; y: number },
  scale: number,
  maxSpeed: number,
): { x: number; y: number } {
  const x = (delta.x * 0.055) / scale;
  const y = (delta.y * 0.055) / scale;
  const hypot = Math.hypot(x, y);
  const factor = hypot > maxSpeed ? maxSpeed / hypot : 1;
  return { x: x * factor, y: y * factor };
}
