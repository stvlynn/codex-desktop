// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$jt`) / export `Uat`.

export type BindDeferredUatPeers = {
  Gjt: (...args: unknown[]) => unknown;
  Qjt: (...args: unknown[]) => unknown;
  Zjt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUatPeers | null = null;

/** Wire bindDeferredUat peers once companions land. */
export function setBindDeferredUatPeers(next: BindDeferredUatPeers): void {
  peers = next;
}

/**
 * Bundle export `Uat` / internal `$jt`.
 */
export function bindDeferredUat() {
  if (peers == null) {
    throw new Error("bindDeferredUat peers are not configured");
  }

  return peers.e(() => {
    (peers.Gjt(),
      (Zjt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g),
      (Qjt = new RegExp(peers.Zjt.source, `g`)));
  });
}
