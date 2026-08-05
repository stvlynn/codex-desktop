// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Unn`) / export `h9`.

export type BindDeferredh9Peers = {
  Hnn: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Ox: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Vnn: (...args: unknown[]) => unknown;
};

let peers: BindDeferredh9Peers | null = null;

/** Wire bindDeferredh9 peers once companions land. */
export function setBindDeferredh9Peers(next: BindDeferredh9Peers): void {
  peers = next;
}

/**
 * Bundle export `h9` / internal `Unn`.
 */
export function bindDeferredh9() {
  if (peers == null) {
    throw new Error("bindDeferredh9 peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) => {
    let t = e(peers.Ox);
    return t.phase === `inactive` ? peers.Vnn : e(peers.Hnn, t.locator);
  });
}
