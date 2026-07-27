// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `x_`) / export `ist`.

export type BindUserMessage2Peers = {
  A_t: (...args: unknown[]) => unknown;
  Kg: (...args: unknown[]) => unknown;
  Wg: (...args: unknown[]) => unknown;
  dg: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  g_: (...args: unknown[]) => unknown;
  wSt: (...args: unknown[]) => unknown;
};

let peers: BindUserMessage2Peers | null = null;

/** Wire bindUserMessage2 peers once companions land. */
export function setBindUserMessage2Peers(next: BindUserMessage2Peers): void {
  peers = next;
}

/**
 * Bundle export `ist` / internal `x_`.
 */
export function bindUserMessage2() {
  if (peers == null) {
    throw new Error("bindUserMessage2 peers are not configured");
  }

  return peers.e(() => {
    peers.Wg(), peers.dg(), peers.Kg(), peers.A_t(), peers.g_(), peers.wSt();
  });
}
