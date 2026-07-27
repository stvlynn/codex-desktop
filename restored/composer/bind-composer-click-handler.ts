// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Yt`) / export `gvt`.

export type BindComposerClickHandlerPeers = {
  Jt: (...args: unknown[]) => unknown;
  Ze: (...args: unknown[]) => unknown;
  at: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindComposerClickHandlerPeers | null = null;

/** Wire bindComposerClickHandler peers once companions land. */
export function setBindComposerClickHandlerPeers(next: BindComposerClickHandlerPeers): void {
  peers = next;
}

/**
 * Bundle export `gvt` / internal `Yt`.
 */
export function bindComposerClickHandler() {
  if (peers == null) {
    throw new Error("bindComposerClickHandler peers are not configured");
  }

  return peers.e(() => {
    Jt = peers.r(peers.o(), 1), peers.Ze(), peers.at();
  });
}
