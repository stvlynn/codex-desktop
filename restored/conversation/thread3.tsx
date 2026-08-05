// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sjs`) / export `_v`.

export type BindBindThread3Peers = {
  Vf: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  oU: (...args: unknown[]) => unknown;
};

let peers: BindBindThread3Peers | null = null;

/** Wire bindBindThread3 peers once companions land. */
export function setBindBindThread3Peers(next: BindBindThread3Peers): void {
  peers = next;
}

/**
 * Bundle export `_v` / internal `sjs`.
 */
export function bindBindThread3() {
  if (peers == null) {
    throw new Error("bindBindThread3 peers are not configured");
  }

  return peers.e(() => {
    (peers.Vf(), peers.oU());
  });
}
