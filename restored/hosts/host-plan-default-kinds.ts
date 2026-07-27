// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `I2r`) / export `zq`.

export type HostPlanDefaultKindsPeers = {
  DD: (...args: unknown[]) => unknown;
  F2r: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  M2r: (...args: unknown[]) => unknown;
  N2r: (...args: unknown[]) => unknown;
  P2r: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  SD: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
};

let peers: HostPlanDefaultKindsPeers | null = null;

/** Wire hostPlanDefaultKinds peers once companions land. */
export function setHostPlanDefaultKindsPeers(next: HostPlanDefaultKindsPeers): void {
  peers = next;
}

/**
 * Bundle export `zq` / internal `I2r`.
 */
export function hostPlanDefaultKinds() {
  if (peers == null) {
    throw new Error("hostPlanDefaultKinds peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.DD(), peers.Vf(), peers.ed(), peers.Uf(), N2r = [`plan`, `default`], P2r = peers.ka(peers.Q, e => peers.M2r(peers.e)), F2r = peers.Ia(peers.Q, ({
      get: e
    }) => peers.M2r(peers.e(peers.SD)));
  });
}
