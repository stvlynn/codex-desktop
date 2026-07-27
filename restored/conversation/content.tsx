// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rps`) / export `rS`.

export type BindBindContentPeers = {
  Mo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  nps: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindBindContentPeers | null = null;

/** Wire bindBindContent peers once companions land. */
export function setBindBindContentPeers(next: BindBindContentPeers): void {
  peers = next;
}

/**
 * Bundle export `rS` / internal `rps`.
 */
export function bindBindContent() {
  if (peers == null) {
    throw new Error("bindBindContent peers are not configured");
  }

  return peers.e(() => {
    nps = peers.r(peers.Mo(), 1);
  });
}
