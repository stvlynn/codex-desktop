// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Z6i` / export `KR`; companions `r8i`=10 / `i8i`=400.

const MIN_ZOOM_PERCENT = 10;
const MAX_ZOOM_PERCENT = 400;
const ZOOM_DECAY = 0.01;

/** Clamp artifact zoom percent into the supported range. */
export function clampZoomPercent(value: number): number {
  return Math.min(MAX_ZOOM_PERCENT, Math.max(MIN_ZOOM_PERCENT, value));
}

/** Exponential decay helper for scroll-zoom. Bundle `Q6i` / `JR`. */
export function decayZoomPercent(value: number, delta: number): number {
  return clampZoomPercent(Math.round(value * Math.exp(-delta * ZOOM_DECAY)));
}

/** Scale zoom by pinch distance ratio. Bundle `$6i` / `qR`. */
export function scaleZoomByPinchDistance(input: {
  initialDistance: number;
  initialZoomPercent: number;
  nextDistance: number;
}): number {
  return clampZoomPercent(
    Math.round(
      (input.nextDistance / input.initialDistance) * input.initialZoomPercent,
    ),
  );
}
