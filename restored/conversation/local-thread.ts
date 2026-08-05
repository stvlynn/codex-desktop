// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Enu`) / export `sr`.

export type LocalThreadPeers = {
  Tnu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  wnu: (...args: unknown[]) => unknown;
};

let peers: LocalThreadPeers | null = null;

/** Wire localThread peers once companions land. */
export function setLocalThreadPeers(next: LocalThreadPeers): void {
  peers = next;
}

/**
 * Bundle export `sr` / internal `Enu`.
 */
export function localThread() {
  if (peers == null) {
    throw new Error("localThread peers are not configured");
  }

  return peers.e(() => {
    ((wnu = `3026692602`), (Tnu = `3502101112`));
  });
}
