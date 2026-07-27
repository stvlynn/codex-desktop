// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Overlay focus helpers for Codex Micro mini-games activation (_Z/vZ).

let activeSurfaceId: unknown = null;

export function bindActiveOverlaySurfaceId(id: unknown): void {
  activeSurfaceId = id;
}

export function getActiveOverlaySurfaceId(): unknown {
  return activeSurfaceId;
}

/** Bundle export `vZ` — true when `surfaceId` is the focused overlay surface. */
export function isActiveOverlaySurface(surfaceId: unknown): boolean {
  return getActiveOverlaySurfaceId() === surfaceId;
}

/** Bundle export `_Z` — Rolldown ESM init retained as no-op. */
export function ensureOverlayFocusSelectorsInit(): void {}
