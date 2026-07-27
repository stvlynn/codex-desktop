// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fS`) / export `_7`.

export type BindThreadNavigation2Peers = {
  Gpn: (...args: unknown[]) => unknown;
  Vx: (...args: unknown[]) => unknown;
};

let peers: BindThreadNavigation2Peers | null = null;

/** Wire bindThreadNavigation2 peers once companions land. */
export function setBindThreadNavigation2Peers(next: BindThreadNavigation2Peers): void {
  peers = next;
}

/**
 * Bundle export `_7` / internal `fS`.
 */
export function bindThreadNavigation2() {
  if (peers == null) {
    throw new Error("bindThreadNavigation2 peers are not configured");
  }

  return new peers.Gpn((e, t, n) => peers.Vx.start(e, t, n));
}
