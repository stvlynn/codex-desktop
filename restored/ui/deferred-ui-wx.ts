// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vM`) / export `WX`.

export type BindDeferredUiWXPeers = {
  DD: (...args: unknown[]) => unknown;
  Dh: (...args: unknown[]) => unknown;
  Fw: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  NGr: (...args: unknown[]) => unknown;
  PGr: (...args: unknown[]) => unknown;
  Pw: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  WHn: (...args: unknown[]) => unknown;
  ZA: (...args: unknown[]) => unknown;
  _M: (...args: unknown[]) => unknown;
  aGr: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cGr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  hM: (...args: unknown[]) => unknown;
  i9t: (...args: unknown[]) => unknown;
  mGr: (...args: unknown[]) => unknown;
  mM: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rGr: (...args: unknown[]) => unknown;
  sGr: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiWXPeers | null = null;

/** Wire bindDeferredUiWX peers once companions land. */
export function setBindDeferredUiWXPeers(next: BindDeferredUiWXPeers): void {
  peers = next;
}

/**
 * Bundle export `WX` / internal `vM`.
 */
export function bindDeferredUiWX() {
  if (peers == null) {
    throw new Error("bindDeferredUiWX peers are not configured");
  }

  return peers.e(() => {
    NGr = peers.c(), peers.Qt(), peers.Ho(), _M = peers.r(peers.o(), 1), peers.rGr(), peers.DD(), peers.aGr(), peers.Vf(), peers.hM(), peers.cGr(), peers.Fw(), peers.mGr(), peers.ed(), peers.K_(), peers.ZA(), peers.Dh(), peers.i9t(), peers.Gf(), peers.Uf(), PGr = peers.Ma(peers.Q, ({
      get: e
    }) => !peers.Pw() || peers.e(peers.mM) === !0 ? !0 : peers.WHn() && peers.e(peers.sGr) === !0);
  });
}
