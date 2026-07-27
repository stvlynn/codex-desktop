// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Y1c`) / export `Jl`.

export type BindBindThread2Peers = {
  J: (...args: unknown[]) => unknown;
  J1c: (...args: unknown[]) => unknown;
  QQc: (...args: unknown[]) => unknown;
  W1c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  nO: (...args: unknown[]) => unknown;
};

let peers: BindBindThread2Peers | null = null;

/** Wire bindBindThread2 peers once companions land. */
export function setBindBindThread2Peers(next: BindBindThread2Peers): void {
  peers = next;
}

/**
 * Bundle export `Jl` / internal `Y1c`.
 */
export function bindBindThread2() {
  if (peers == null) {
    throw new Error("bindBindThread2 peers are not configured");
  }

  return peers.e(() => {
    peers.nO(), peers.QQc(), peers.W1c(), J1c = peers.J();
  });
}
