// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Son`) / export `u9`.

export type BrowserUseFullCdpAccessPeers = {
  e: (...args: unknown[]) => unknown;
  xon: (...args: unknown[]) => unknown;
};

let peers: BrowserUseFullCdpAccessPeers | null = null;

/** Wire browserUseFullCdpAccess peers once companions land. */
export function setBrowserUseFullCdpAccessPeers(
  next: BrowserUseFullCdpAccessPeers,
): void {
  peers = next;
}

/**
 * Bundle export `u9` / internal `Son`.
 */
export function browserUseFullCdpAccess() {
  if (peers == null) {
    throw new Error("browserUseFullCdpAccess peers are not configured");
  }

  return peers.e(() => {
    xon = `browser_use_full_cdp_access`;
  });
}
