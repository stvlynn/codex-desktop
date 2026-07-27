// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KIc`) / export `Zd`.

export type BindDeferredZdPeers = {
  $u: (...args: unknown[]) => unknown;
  Bzo: (...args: unknown[]) => unknown;
  GIc: (...args: unknown[]) => unknown;
  HIc: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  Um: (...args: unknown[]) => unknown;
  W2: (...args: unknown[]) => unknown;
  _hs: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  zm: (...args: unknown[]) => unknown;
};

let peers: BindDeferredZdPeers | null = null;

/** Wire bindDeferredZd peers once companions land. */
export function setBindDeferredZdPeers(next: BindDeferredZdPeers): void {
  peers = next;
}

/**
 * Bundle export `Zd` / internal `KIc`.
 */
export function bindDeferredZd() {
  if (peers == null) {
    throw new Error("bindDeferredZd peers are not configured");
  }

  return peers.e(() => {
    GIc = peers.c(), peers.Hb(), peers.sd(), peers.Ho(), peers.$u(), peers.zm(), peers.Um(), peers.Kb(), peers.Bzo(), peers._hs(), peers.HIc(), W2 = peers.J();
  });
}
