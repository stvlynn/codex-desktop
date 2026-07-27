// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bEs`) / export `Uv`.

export type DeferredAccountUvPeers = {
  Fh: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  rQ: (...args: unknown[]) => unknown;
  vEs: (...args: unknown[]) => unknown;
  yEs: (...args: unknown[]) => unknown;
};

let peers: DeferredAccountUvPeers | null = null;

/** Wire deferredAccountUv peers once companions land. */
export function setDeferredAccountUvPeers(next: DeferredAccountUvPeers): void {
  peers = next;
}

/**
 * Bundle export `Uv` / internal `bEs`.
 */
export function deferredAccountUv() {
  if (peers == null) {
    throw new Error("deferredAccountUv peers are not configured");
  }
  return peers.e(() => {
    vEs = peers.c(), peers.rQ(), peers.Fh(), yEs = `show_logged_in_pricing_page`;
  });
}
