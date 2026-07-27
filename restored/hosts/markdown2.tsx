// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Cho`) / export `rj`.

export type BindMarkdown2Peers = {
  Vf: (...args: unknown[]) => unknown;
  bho: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  nO: (...args: unknown[]) => unknown;
};

let peers: BindMarkdown2Peers | null = null;

/** Wire bindMarkdown2 peers once companions land. */
export function setBindMarkdown2Peers(next: BindMarkdown2Peers): void {
  peers = next;
}

/**
 * Bundle export `rj` / internal `Cho`.
 */
export function bindMarkdown2() {
  if (peers == null) {
    throw new Error("bindMarkdown2 peers are not configured");
  }

  return peers.e(() => {
    peers.Vf(), peers.nO(), peers.bho();
  });
}
