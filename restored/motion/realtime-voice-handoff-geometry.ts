// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Geometry helpers for realtime-voice handoff FLIP animations
// (bundle exports `lct`/`sct`/`cct` / inits `uct`).

export type ScreenPoint = { x: number; y: number };
export type ScreenRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};
export type ScreenCenterBox = {
  centerX: number;
  centerY: number;
  height: number;
  width: number;
};

/** Bundle export `lct` — map a DOM rect + window screen origin to a center box. */
export function rectToScreenCenterBox(
  rect: ScreenRect,
  screen: { screenX: number; screenY: number },
): ScreenCenterBox {
  return {
    centerX: screen.screenX + rect.left + rect.width / 2,
    centerY: screen.screenY + rect.top + rect.height / 2,
    height: rect.height,
    width: rect.width,
  };
}

/**
 * Bundle export `sct` — delta between two center boxes, scaled by zoom and capped.
 */
export function centerBoxDelta(from: ScreenCenterBox, to: ScreenCenterBox, zoom: number, maxDistance: number): ScreenPoint {
  const dx = (from.centerX - to.centerX) / zoom;
  const dy = (from.centerY - to.centerY) / zoom;
  const dist = Math.hypot(dx, dy);
  const scale = dist > maxDistance ? maxDistance / dist : 1;
  return { x: dx * scale, y: dy * scale };
}

/**
 * Bundle export `cct` — convert pointer velocity into a capped travel offset.
 */
export function velocityToTravelOffset(velocity: ScreenPoint, zoom: number, maxDistance: number): ScreenPoint {
  const dx = (velocity.x * 0.055) / zoom;
  const dy = (velocity.y * 0.055) / zoom;
  const dist = Math.hypot(dx, dy);
  const scale = dist > maxDistance ? maxDistance / dist : 1;
  return { x: dx * scale, y: dy * scale };
}

/** Bundle export `uct` — Rolldown ESM init retained as no-op. */
export function ensureRealtimeVoiceHandoffGeometryInit(): void {}
