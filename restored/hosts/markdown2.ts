// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `y2i`) / export `nB`.

export type Markdown2Peers = {
  e: (...args: unknown[]) => unknown;
  g2i: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  l2i: (...args: unknown[]) => unknown;
  nL: (...args: unknown[]) => unknown;
};

let peers: Markdown2Peers | null = null;

/** Wire markdown2 peers once companions land. */
export function setMarkdown2Peers(next: Markdown2Peers): void {
  peers = next;
}

/**
 * Bundle export `nB` / internal `y2i`.
 */
export function markdown2() {
  if (peers == null) {
    throw new Error("markdown2 peers are not configured");
  }

  return peers.e(() => {
    peers.gT(), peers.nL(), peers.l2i(), peers.g2i();
  });
}
