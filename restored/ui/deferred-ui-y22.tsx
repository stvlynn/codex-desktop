// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `knr`) / export `y2`.

export type BindBindDeferredUiY22Peers = {
  JE: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiY22Peers | null = null;

/** Wire bindBindDeferredUiY22 peers once companions land. */
export function setBindBindDeferredUiY22Peers(next: BindBindDeferredUiY22Peers): void {
  peers = next;
}

/**
 * Bundle export `y2` / internal `knr`.
 */
export function bindBindDeferredUiY22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiY22 peers are not configured");
  }

  return peers.JE(({
    resumeState: e,
    threadRuntimeStatus: t
  }) => e === `needs_resume` && t?.type === `active`);
}
