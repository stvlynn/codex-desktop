// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hNo`) / export `GO`.

export type IconXxsPeers = {
  J: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dNo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  mNo: (...args: unknown[]) => unknown;
  pNo: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: IconXxsPeers | null = null;

/** Wire iconXxs peers once companions land. */
export function setIconXxsPeers(next: IconXxsPeers): void {
  peers = next;
}

/**
 * Bundle export `GO` / internal `hNo`.
 */
export function iconXxs() {
  if (peers == null) {
    throw new Error("iconXxs peers are not configured");
  }

  return peers.e(() => {
    ((pNo = peers.c()), peers.sd(), peers.dNo(), (mNo = peers.J()));
  });
}
