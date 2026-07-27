// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `H7r`) / export `uK`.

export type BindBindAppsPeers = {
  Ho: (...args: unknown[]) => unknown;
  V7r: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kD: (...args: unknown[]) => unknown;
};

let peers: BindBindAppsPeers | null = null;

/** Wire bindBindApps peers once companions land. */
export function setBindBindAppsPeers(next: BindBindAppsPeers): void {
  peers = next;
}

/**
 * Bundle export `uK` / internal `H7r`.
 */
export function bindBindApps() {
  if (peers == null) {
    throw new Error("bindBindApps peers are not configured");
  }

  return peers.e(() => {
    V7r = peers.c(), peers.Ho(), peers.kD();
  });
}
