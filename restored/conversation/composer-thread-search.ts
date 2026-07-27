// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Rqa`) / export `mM`.

export type BindComposerThreadSearchPeers = {
  Au: (...args: unknown[]) => unknown;
  HA: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  WH: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  oT: (...args: unknown[]) => unknown;
  x_: (...args: unknown[]) => unknown;
};

let peers: BindComposerThreadSearchPeers | null = null;

/** Wire bindComposerThreadSearch peers once companions land. */
export function setBindComposerThreadSearchPeers(next: BindComposerThreadSearchPeers): void {
  peers = next;
}

/**
 * Bundle export `mM` / internal `Rqa`.
 */
export function bindComposerThreadSearch() {
  if (peers == null) {
    throw new Error("bindComposerThreadSearch peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), peers.WH(), peers.x_(), peers.oT(), peers.K_(), peers.HA();
  });
}
