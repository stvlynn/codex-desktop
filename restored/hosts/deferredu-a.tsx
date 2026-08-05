// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sSo`) / export `uA`.

export type BindBindDeferreduAPeers = {
  Au: (...args: unknown[]) => unknown;
  ZT: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  yK: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferreduAPeers | null = null;

/** Wire bindBindDeferreduA peers once companions land. */
export function setBindBindDeferreduAPeers(
  next: BindBindDeferreduAPeers,
): void {
  peers = next;
}

/**
 * Bundle export `uA` / internal `sSo`.
 */
export function bindBindDeferreduA() {
  if (peers == null) {
    throw new Error("bindBindDeferreduA peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(), peers.jf(), peers.ap(), peers.ZT(), peers.yK());
  });
}
