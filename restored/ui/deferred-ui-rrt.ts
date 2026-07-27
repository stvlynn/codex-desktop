// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Xzt`) / export `Rrt`.

export type BindDeferredUiRrtPeers = {
  BLt: (...args: unknown[]) => unknown;
  Fzt: (...args: unknown[]) => unknown;
  GLt: (...args: unknown[]) => unknown;
  GRt: (...args: unknown[]) => unknown;
  Gzt: (...args: unknown[]) => unknown;
  HLt: (...args: unknown[]) => unknown;
  HRt: (...args: unknown[]) => unknown;
  IRt: (...args: unknown[]) => unknown;
  Lzt: (...args: unknown[]) => unknown;
  Nzt: (...args: unknown[]) => unknown;
  Ozt: (...args: unknown[]) => unknown;
  Pv: (...args: unknown[]) => unknown;
  QRt: (...args: unknown[]) => unknown;
  SRt: (...args: unknown[]) => unknown;
  TRt: (...args: unknown[]) => unknown;
  Uzt: (...args: unknown[]) => unknown;
  Vzt: (...args: unknown[]) => unknown;
  XLt: (...args: unknown[]) => unknown;
  YRt: (...args: unknown[]) => unknown;
  Yzt: (...args: unknown[]) => unknown;
  azt: (...args: unknown[]) => unknown;
  cRt: (...args: unknown[]) => unknown;
  czt: (...args: unknown[]) => unknown;
  dzt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gRt: (...args: unknown[]) => unknown;
  jLt: (...args: unknown[]) => unknown;
  jRt: (...args: unknown[]) => unknown;
  kRt: (...args: unknown[]) => unknown;
  mLt: (...args: unknown[]) => unknown;
  mRt: (...args: unknown[]) => unknown;
  mzt: (...args: unknown[]) => unknown;
  nRt: (...args: unknown[]) => unknown;
  oRt: (...args: unknown[]) => unknown;
  qzt: (...args: unknown[]) => unknown;
  tzt: (...args: unknown[]) => unknown;
  uRt: (...args: unknown[]) => unknown;
  wzt: (...args: unknown[]) => unknown;
  zRt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiRrtPeers | null = null;

/** Wire bindDeferredUiRrt peers once companions land. */
export function setBindDeferredUiRrtPeers(next: BindDeferredUiRrtPeers): void {
  peers = next;
}

/**
 * Bundle export `Rrt` / internal `Xzt`.
 */
export function bindDeferredUiRrt() {
  if (peers == null) {
    throw new Error("bindDeferredUiRrt peers are not configured");
  }

  return peers.e(() => {
    peers.BLt(), peers.HLt(), peers.mLt(), peers.GLt(), peers.XLt(), peers.jLt(), peers.nRt(), peers.oRt(), peers.jRt(), peers.Pv(), peers.cRt(), peers.uRt(), peers.mRt(), peers.gRt(), peers.SRt(), peers.TRt(), peers.kRt(), peers.zRt(), peers.HRt(), peers.IRt(), peers.GRt(), peers.QRt(), peers.tzt(), peers.YRt(), peers.czt(), peers.dzt(), peers.azt(), peers.mzt(), peers.wzt(), peers.Ozt(), peers.Nzt(), peers.Vzt(), peers.Uzt(), peers.Gzt(), peers.Fzt(), peers.qzt(), peers.Yzt(), peers.Lzt();
  });
}
