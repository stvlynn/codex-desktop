// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `X6i`) / export `ZR`.

export type IsLocalOrNullValuePeers = {
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  EM: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  I6i: (...args: unknown[]) => unknown;
  J6i: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  Lqr: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  U_: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Y6i: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  ih: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  z6i: (...args: unknown[]) => unknown;
};

let peers: IsLocalOrNullValuePeers | null = null;

/** Wire isLocalOrNullValue peers once companions land. */
export function setIsLocalOrNullValuePeers(next: IsLocalOrNullValuePeers): void {
  peers = next;
}

/**
 * Bundle export `ZR` / internal `X6i`.
 */
export function isLocalOrNullValue() {
  if (peers == null) {
    throw new Error("isLocalOrNullValue peers are not configured");
  }

  return peers.e(() => {
    J6i = peers.c(), peers.Qt(), peers.Ho(), peers.Au(), Y6i = peers.r(peers.o(), 1), peers.$u(), peers.ih(), peers.EM(), peers.Lqr(), peers.I6i(), peers.Kb(), peers.gT(), peers.U_(), peers.Uf(), peers.z6i();
  });
}

// --- split/export lane aliases ---
export { isLocalOrNullValue as IsLocalOrNullValue };
