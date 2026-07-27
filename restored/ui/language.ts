// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `h1o`) / export `cE`.

export type LanguagePeers = {
  Nqr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hxo: (...args: unknown[]) => unknown;
  mHi: (...args: unknown[]) => unknown;
  p1o: (...args: unknown[]) => unknown;
};

let peers: LanguagePeers | null = null;

/** Wire language peers once companions land. */
export function setLanguagePeers(next: LanguagePeers): void {
  peers = next;
}

/**
 * Bundle export `cE` / internal `h1o`.
 */
export function language() {
  if (peers == null) {
    throw new Error("language peers are not configured");
  }

  return peers.e(() => {
    peers.mHi(), peers.Nqr(), peers.hxo(), peers.p1o();
  });
}
