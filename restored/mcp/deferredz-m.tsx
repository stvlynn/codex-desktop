// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bVa`) / export `zM`.

export type BindDeferredzMPeers = {
  $u: (...args: unknown[]) => unknown;
  WH: (...args: unknown[]) => unknown;
  ZL: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  g2i: (...args: unknown[]) => unknown;
  vB: (...args: unknown[]) => unknown;
};

let peers: BindDeferredzMPeers | null = null;

/** Wire bindDeferredzM peers once companions land. */
export function setBindDeferredzMPeers(next: BindDeferredzMPeers): void {
  peers = next;
}

/**
 * Bundle export `zM` / internal `bVa`.
 */
export function bindDeferredzM() {
  if (peers == null) {
    throw new Error("bindDeferredzM peers are not configured");
  }

  return peers.e(() => {
    (peers.$u(), peers.WH(), peers.ZL(), peers.vB(), peers.g2i());
  });
}
