// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `QYn`) / export `setStickyFlagAtomTrue`.

export type StickyFlagAtomTruePeers = {
  $Yn: (...args: unknown[]) => unknown;
  HYn: (...args: unknown[]) => unknown;
};
let peers: StickyFlagAtomTruePeers | null = null;

/** Wire setStickyFlagAtomTrue peers once companions land. */
export function setStickyFlagAtomTruePeers(next: StickyFlagAtomTruePeers): void {
  peers = next;
}

/**
 * Bundle export `setStickyFlagAtomTrue` / internal `QYn`.
 */
export function setStickyFlagAtomTrue(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("setStickyFlagAtomTrue peers are not configured");
  }
  peers.HYn(t);
  e.set(peers.$Yn, t, true);
}
