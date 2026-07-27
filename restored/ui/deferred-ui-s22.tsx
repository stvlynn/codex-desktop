// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Anr`) / export `S2`.

export type BindBindDeferredUiS22Peers = {
  JE: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiS22Peers | null = null;

/** Wire bindBindDeferredUiS22 peers once companions land. */
export function setBindBindDeferredUiS22Peers(next: BindBindDeferredUiS22Peers): void {
  peers = next;
}

/**
 * Bundle export `S2` / internal `Anr`.
 */
export function bindBindDeferredUiS22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiS22 peers are not configured");
  }

  return peers.JE(({
    ephemeral: e,
    sideConversation: t,
    threadRuntimeStatus: n
  }) => e === !0 && t === !0 && n?.type === `notLoaded`);
}
