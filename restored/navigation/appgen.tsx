// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LNa`) / export `kN`.

export type BindAppgenPeers = {
  Au: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  ONa: (...args: unknown[]) => unknown;
  PNa: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  Wnn: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kx: (...args: unknown[]) => unknown;
  tR: (...args: unknown[]) => unknown;
  zbt: (...args: unknown[]) => unknown;
};

let peers: BindAppgenPeers | null = null;

/** Wire bindAppgen peers once companions land. */
export function setBindAppgenPeers(next: BindAppgenPeers): void {
  peers = next;
}

/**
 * Bundle export `kN` / internal `LNa`.
 */
export function bindAppgen() {
  if (peers == null) {
    throw new Error("bindAppgen peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), peers.DD(), peers.Vf(), peers.tR(), peers.zbt(), peers.kx(), peers.Wnn(), peers.ONa(), peers.PNa();
  });
}
