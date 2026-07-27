// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Eoc`) / export `yp`.

export type CadencedLegacyModeKeyPeers = {
  Toc: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: CadencedLegacyModeKeyPeers | null = null;

/** Wire cadencedLegacyModeKey peers once companions land. */
export function setCadencedLegacyModeKeyPeers(next: CadencedLegacyModeKeyPeers): void {
  peers = next;
}

/**
 * Bundle export `yp` / internal `Eoc`.
 */
export function cadencedLegacyModeKey() {
  if (peers == null) {
    throw new Error("cadencedLegacyModeKey peers are not configured");
  }

  return peers.e(() => {
    Toc = `3278809559`;
  });
}
