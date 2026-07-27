// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MWl`) / export `Ka`.

export type BindChatsPeers = {
  $u: (...args: unknown[]) => unknown;
  AWl: (...args: unknown[]) => unknown;
  DWl: (...args: unknown[]) => unknown;
  FUl: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  J6o: (...args: unknown[]) => unknown;
  MUl: (...args: unknown[]) => unknown;
  NV: (...args: unknown[]) => unknown;
  OWl: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  W8i: (...args: unknown[]) => unknown;
  _Ul: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cA: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eA: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fja: (...args: unknown[]) => unknown;
  hU: (...args: unknown[]) => unknown;
  ih: (...args: unknown[]) => unknown;
  jWl: (...args: unknown[]) => unknown;
  kWl: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  x5: (...args: unknown[]) => unknown;
  xWl: (...args: unknown[]) => unknown;
};

let peers: BindChatsPeers | null = null;

/** Wire bindChats peers once companions land. */
export function setBindChatsPeers(next: BindChatsPeers): void {
  peers = next;
}

/**
 * Bundle export `Ka` / internal `MWl`.
 */
export function bindChats() {
  if (peers == null) {
    throw new Error("bindChats peers are not configured");
  }

  return peers.e(() => {
    DWl = peers.c(), peers.Qt(), peers.Ho(), x5 = peers.r(peers.o(), 1), peers.$u(), peers.eA(), peers.cA(), peers.ih(), peers.hU(), peers.ed(), peers.Uf(), peers.W8i(), peers._Ul(), peers.NV(), peers.J6o(), peers.fja(), peers.MUl(), peers.FUl(), peers.xWl(), OWl = peers.J(), kWl = 100, AWl = 50, jWl = 8e3;
  });
}
