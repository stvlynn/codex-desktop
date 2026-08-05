// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Cfa`) / export `fL`.

export type BindBindFilePeers = {
  Sfa: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  pfa: (...args: unknown[]) => unknown;
  sfa: (...args: unknown[]) => unknown;
  yfa: (...args: unknown[]) => unknown;
};

let peers: BindBindFilePeers | null = null;

/** Wire bindBindFile peers once companions land. */
export function setBindBindFilePeers(next: BindBindFilePeers): void {
  peers = next;
}

/**
 * Bundle export `fL` / internal `Cfa`.
 */
export function bindBindFile() {
  if (peers == null) {
    throw new Error("bindBindFile peers are not configured");
  }

  return peers.e(() => {
    (peers.pfa(), peers.yfa(), (Sfa = peers.sfa()));
  });
}
