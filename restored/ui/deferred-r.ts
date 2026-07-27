// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zFs`) / export `R_`.

export type DeferredRPeers = {
  J: (...args: unknown[]) => unknown;
  LFs: (...args: unknown[]) => unknown;
  RFs: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: DeferredRPeers | null = null;

/** Wire deferredR peers once companions land. */
export function setDeferredRPeers(next: DeferredRPeers): void {
  peers = next;
}

/**
 * Bundle export `R_` / internal `zFs`.
 */
export function deferredR() {
  if (peers == null) {
    throw new Error("deferredR peers are not configured");
  }

  return peers.e(() => {
    LFs = peers.c(), peers.sd(), RFs = peers.J();
  });
}
