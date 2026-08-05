// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zql`) / export `Ta`.

export type BindRemote2Peers = {
  Fql: (...args: unknown[]) => unknown;
  Gk: (...args: unknown[]) => unknown;
  Lql: (...args: unknown[]) => unknown;
  RE: (...args: unknown[]) => unknown;
  YRl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ih: (...args: unknown[]) => unknown;
};

let peers: BindRemote2Peers | null = null;

/** Wire bindRemote2 peers once companions land. */
export function setBindRemote2Peers(next: BindRemote2Peers): void {
  peers = next;
}

/**
 * Bundle export `Ta` / internal `zql`.
 */
export function bindRemote2() {
  if (peers == null) {
    throw new Error("bindRemote2 peers are not configured");
  }

  return peers.e(() => {
    (peers.Gk(), peers.ih(), peers.RE(), peers.Fql(), peers.Lql(), peers.YRl());
  });
}
