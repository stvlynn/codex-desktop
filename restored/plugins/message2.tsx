// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `p_e`) / export `Vht`.

export type BindBindMessage2Peers = {
  d_e: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  f_e: (...args: unknown[]) => unknown;
  l_e: (...args: unknown[]) => unknown;
  u_e: (...args: unknown[]) => unknown;
};

let peers: BindBindMessage2Peers | null = null;

/** Wire bindBindMessage2 peers once companions land. */
export function setBindBindMessage2Peers(next: BindBindMessage2Peers): void {
  peers = next;
}

/**
 * Bundle export `Vht` / internal `p_e`.
 */
export function bindBindMessage2() {
  if (peers == null) {
    throw new Error("bindBindMessage2 peers are not configured");
  }

  return peers.e(() => {
    ((l_e = /^[A-Za-z]:[\\/]/),
      (u_e = /^\/[A-Za-z]:[\\/]/),
      (d_e = /^\\\\[^\\]+\\[^\\]+/),
      (f_e = /^\/\/[^/]+\/[^/]+/));
  });
}
