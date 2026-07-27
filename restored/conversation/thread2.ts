// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `E3`) / export `Kl`.

export type BindThread2Peers = {
  Au: (...args: unknown[]) => unknown;
  Nw: (...args: unknown[]) => unknown;
  X1c: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindThread2Peers | null = null;

/** Wire bindThread2 peers once companions land. */
export function setBindThread2Peers(next: BindThread2Peers): void {
  peers = next;
}

/**
 * Bundle export `Kl` / internal `E3`.
 */
export function bindThread2() {
  if (peers == null) {
    throw new Error("bindThread2 peers are not configured");
  }

  return peers.e(() => {
    X1c = peers.c(), peers.Au(), peers.Nw();
  });
}
