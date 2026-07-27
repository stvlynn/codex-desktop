// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Tqa`) / export `hM`.

export type BindRemote2Peers = {
  $u: (...args: unknown[]) => unknown;
  AUa: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  BGa: (...args: unknown[]) => unknown;
  DM: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IE: (...args: unknown[]) => unknown;
  TKa: (...args: unknown[]) => unknown;
  UUa: (...args: unknown[]) => unknown;
  VUa: (...args: unknown[]) => unknown;
  aqa: (...args: unknown[]) => unknown;
  bVa: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  cKa: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gqa: (...args: unknown[]) => unknown;
  hGa: (...args: unknown[]) => unknown;
  nN: (...args: unknown[]) => unknown;
  uUa: (...args: unknown[]) => unknown;
  wqa: (...args: unknown[]) => unknown;
  xGa: (...args: unknown[]) => unknown;
  zUa: (...args: unknown[]) => unknown;
};

let peers: BindRemote2Peers | null = null;

/** Wire bindRemote2 peers once companions land. */
export function setBindRemote2Peers(next: BindRemote2Peers): void {
  peers = next;
}

/**
 * Bundle export `hM` / internal `Tqa`.
 */
export function bindRemote2() {
  if (peers == null) {
    throw new Error("bindRemote2 peers are not configured");
  }

  return peers.e(() => {
    wqa = peers.c(), peers.Ho(), peers.Au(), peers.$u(), peers.AUa(), peers.zUa(), peers.VUa(), peers.bVa(), peers.DM(), peers.IE(), peers.nN(), peers.uUa(), peers.UUa(), peers.hGa(), peers.xGa(), peers.BGa(), peers.cKa(), peers.TKa(), peers.aqa(), peers.gqa();
  });
}
