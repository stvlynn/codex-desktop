// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `svt`) / export `Ast`.

export type Cloud2Peers = {
  Xg: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
};

let peers: Cloud2Peers | null = null;

/** Wire cloud2 peers once companions land. */
export function setCloud2Peers(next: Cloud2Peers): void {
  peers = next;
}

/**
 * Bundle export `Ast` / internal `svt`.
 */
export function cloud2() {
  if (peers == null) {
    throw new Error("cloud2 peers are not configured");
  }

  return peers.e(() => {
    peers.jf(), peers.Xg();
  });
}
