// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vJe`) / export `uft`.

export type Uft2Peers = {
  Ud: (...args: unknown[]) => unknown;
  _Je: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  ud: (...args: unknown[]) => unknown;
  zze: (...args: unknown[]) => unknown;
};

let peers: Uft2Peers | null = null;

/** Wire uft2 peers once companions land. */
export function setUft2Peers(next: Uft2Peers): void {
  peers = next;
}

/**
 * Bundle export `uft` / internal `vJe`.
 */
export function uft2() {
  if (peers == null) {
    throw new Error("uft2 peers are not configured");
  }

  return peers.e(() => {
    peers.Ud(), _Je = peers.r(peers.o(), 1), peers.zze(), peers.ud();
  });
}
