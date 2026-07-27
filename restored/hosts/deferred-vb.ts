// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LXi`) / export `VB`.

export type BindDeferredVBPeers = {
  DD: (...args: unknown[]) => unknown;
  FXi: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IXi: (...args: unknown[]) => unknown;
  JR: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  PXi: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  QE: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindDeferredVBPeers | null = null;

/** Wire bindDeferredVB peers once companions land. */
export function setBindDeferredVBPeers(next: BindDeferredVBPeers): void {
  peers = next;
}

/**
 * Bundle export `VB` / internal `LXi`.
 */
export function bindDeferredVB() {
  if (peers == null) {
    throw new Error("bindDeferredVB peers are not configured");
  }

  return peers.e(() => {
    PXi = peers.c(), FXi = peers.r(peers.JR(), 1), peers.Ho(), peers.DD(), peers.ed(), IXi = peers.Oa(peers.Q, (e, {
      get: t
    }) => {
      if (peers.e != null) return Object.fromEntries(peers.e.map(e => [peers.e, t(peers.QE, peers.e)]));
    });
  });
}
