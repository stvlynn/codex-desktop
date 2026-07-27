// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `HBl`) / export `wo`.

export type BindDeferredUiWoPeers = {
  BBl: (...args: unknown[]) => unknown;
  VBl: (...args: unknown[]) => unknown;
  i5: (...args: unknown[]) => unknown;
  uBl: (...args: unknown[]) => unknown;
};
let peers: BindDeferredUiWoPeers | null = null;

/** Wire bindDeferredUiWo peers once companions land. */
export function setBindDeferredUiWoPeers(next: BindDeferredUiWoPeers): void {
  peers = next;
}

/**
 * Bundle export `wo` / internal `HBl`.
 */
export const bindDeferredUiWo = function (e: unknown) {
  if (peers == null) {
    throw new Error("bindDeferredUiWo peers are not configured");
  }
  return peers.i5.createElement(
    peers.BBl,
    peers.uBl({}, e, {
      colorModel: peers.VBl,
    }),
  );
};
