// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hMt`) / export `Bat`.

export type BindDeferredBatPeers = {
  Gjt: (...args: unknown[]) => unknown;
  cMt: (...args: unknown[]) => unknown;
  dMt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fMt: (...args: unknown[]) => unknown;
  lMt: (...args: unknown[]) => unknown;
  mMt: (...args: unknown[]) => unknown;
  pMt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredBatPeers | null = null;

/** Wire bindDeferredBat peers once companions land. */
export function setBindDeferredBatPeers(next: BindDeferredBatPeers): void {
  peers = next;
}

/**
 * Bundle export `Bat` / internal `hMt`.
 */
export function bindDeferredBat() {
  if (peers == null) {
    throw new Error("bindDeferredBat peers are not configured");
  }

  return peers.e(() => {
    peers.Gjt(), peers.dMt(), pMt = peers.fMt(peers.cMt, `px, `, `px)`, `deg)`), mMt = peers.fMt(peers.lMt, `, `, `)`, `)`);
  });
}
