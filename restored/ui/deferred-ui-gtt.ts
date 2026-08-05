// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kXt`) / export `Gtt`.

export type BindDeferredUiGttPeers = {
  DXt: (...args: unknown[]) => unknown;
  EXt: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  dXt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiGttPeers | null = null;

/** Wire bindDeferredUiGtt peers once companions land. */
export function setBindDeferredUiGttPeers(next: BindDeferredUiGttPeers): void {
  peers = next;
}

/**
 * Bundle export `Gtt` / internal `kXt`.
 */
export function bindDeferredUiGtt() {
  if (peers == null) {
    throw new Error("bindDeferredUiGtt peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) =>
    peers.dXt({
      ctrlKey: e(peers.EXt),
      metaKey: e(peers.DXt),
    }),
  );
}
