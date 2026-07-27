// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Vxo`) / export `wA`.

export type BindConfigValuePeers = {
  $D: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Bxo: (...args: unknown[]) => unknown;
  CT: (...args: unknown[]) => unknown;
  DWi: (...args: unknown[]) => unknown;
  Da: (...args: unknown[]) => unknown;
  Eho: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Il: (...args: unknown[]) => unknown;
  Pf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  UD: (...args: unknown[]) => unknown;
  _K: (...args: unknown[]) => unknown;
  bho: (...args: unknown[]) => unknown;
  dxo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  hBi: (...args: unknown[]) => unknown;
  jD: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  nGi: (...args: unknown[]) => unknown;
  nO: (...args: unknown[]) => unknown;
  oL: (...args: unknown[]) => unknown;
  oT: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  zj: (...args: unknown[]) => unknown;
  zxo: (...args: unknown[]) => unknown;
};

let peers: BindConfigValuePeers | null = null;

/** Wire bindConfigValue peers once companions land. */
export function setBindConfigValuePeers(next: BindConfigValuePeers): void {
  peers = next;
}

/**
 * Bundle export `wA` / internal `Vxo`.
 */
export function bindConfigValue() {
  if (peers == null) {
    throw new Error("bindConfigValue peers are not configured");
  }

  return peers.e(() => {
    _K = peers.r(peers.Il(), 1), peers.Ho(), peers.Au(), peers.nGi(), peers.jD(), peers.zj(), peers.UD(), peers.nO(), peers.$D(), peers.dxo(), peers.DWi(), peers.ed(), peers.oT(), peers.Pf(), peers.Eho(), peers.oL(), peers.CT(), peers.hBi(), peers.bho(), peers.jf(), zxo = peers.Da(peers.Q, e => null), Bxo = peers.Da(peers.Q, e => null);
  });
}
