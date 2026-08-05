// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Hv` companion for export `Ort`.

import { isNodeLike } from "./is-node-like";
import { isWindowLike } from "./is-window-like";

/** Resolve the Window for an event target (or global window). */
export function defaultViewFromTarget(
  target: EventTarget | null | undefined,
): Window {
  if (!target) return window;
  if (isWindowLike(target)) return target;
  if (isNodeLike(target)) {
    return (target.ownerDocument?.defaultView ?? window) as Window;
  }
  return window;
}
