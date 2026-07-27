// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `dte`) / export `j_t`.

type FiberLike = {
  tag?: number;
  stateNode: {
    _visibility: number;
    _pendingMarkers: null;
    _retryCache: null;
    _transitions: null;
  } | null;
  sibling: unknown;
};

/**
 * Bundle export `j_t` / internal `dte`.
 * Ensure a fiber stateNode exists (unless Offscreen tag 22) and return sibling.
 */
export function applyFunctionHelper4(
  fiber: { tag?: number } | null,
  target: FiberLike,
): unknown {
  if (!((fiber !== null && fiber.tag === 22) || target.stateNode !== null)) {
    target.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
    };
  }
  return target.sibling;
}
