// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Lm`/`Rm`/`zm` — Electron window zoom context + helpers.

import { createContext, useContext, type Context } from "react";

/** Bundle `M7e` — default zoom factor = 1. */
export const WindowZoomContext: Context<number> = createContext(1);

/** Bundle `Lm` / export `tut`. */
export function useWindowZoom(): number {
  return useContext(WindowZoomContext);
}

/** Bundle `Rm` / export `eut` — convert layout px → CSS px under window zoom. */
export function divideByWindowZoom(
  valuePx: number,
  windowZoom: number,
): number {
  return valuePx / windowZoom;
}

/** Bundle `zm` / export `$lt`. */
export function ensureWindowZoomContextInit(): void {}
