// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pLt`) / export `Iit`.

export type BindDeferredUiIitPeers = {
  CPt: (...args: unknown[]) => unknown;
  HNt: (...args: unknown[]) => unknown;
  JIt: (...args: unknown[]) => unknown;
  TNt: (...args: unknown[]) => unknown;
  XIt: (...args: unknown[]) => unknown;
  _Pt: (...args: unknown[]) => unknown;
  aLt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fLt: (...args: unknown[]) => unknown;
  oPt: (...args: unknown[]) => unknown;
  pPt: (...args: unknown[]) => unknown;
  pv: (...args: unknown[]) => unknown;
  rLt: (...args: unknown[]) => unknown;
  tPt: (...args: unknown[]) => unknown;
  xNt: (...args: unknown[]) => unknown;
  xPt: (...args: unknown[]) => unknown;
  yPt: (...args: unknown[]) => unknown;
  zNt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiIitPeers | null = null;

/** Wire bindDeferredUiIit peers once companions land. */
export function setBindDeferredUiIitPeers(next: BindDeferredUiIitPeers): void {
  peers = next;
}

/**
 * Bundle export `Iit` / internal `pLt`.
 */
export function bindDeferredUiIit() {
  if (peers == null) {
    throw new Error("bindDeferredUiIit peers are not configured");
  }

  return peers.e(() => {
    peers.TNt(), peers.HNt(), peers.pv(), peers.tPt(), peers.oPt(), peers.xNt(), peers.pPt(), peers._Pt(), peers.yPt(), peers.xPt(), peers.CPt(), peers.JIt(), peers.XIt(), peers.rLt(), peers.aLt(), peers.fLt(), peers.zNt();
  });
}
