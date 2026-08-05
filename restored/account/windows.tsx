// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Wna`) / export `$L`.

export type WindowsPeers = {
  Uf: (...args: unknown[]) => unknown;
  Una: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dk: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: WindowsPeers | null = null;

/** Wire Windows peers once companions land. */
export function setWindowsPeers(next: WindowsPeers): void {
  peers = next;
}

/**
 * Bundle export `$L` / internal `Wna`.
 */
export function Windows() {
  if (peers == null) {
    throw new Error("Windows peers are not configured");
  }
  return peers.e(() => {
    ((Una = peers.c()), peers.dk(), peers.Uf(), peers.ap());
  });
}
