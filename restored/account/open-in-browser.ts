// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `z$l`) / export `Ii`.

export type OpenInBrowserPeers = {
  L$l: (...args: unknown[]) => unknown;
  R$l: (...args: unknown[]) => unknown;
  Yf: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: OpenInBrowserPeers | null = null;

/** Wire openInBrowser peers once companions land. */
export function setOpenInBrowserPeers(next: OpenInBrowserPeers): void {
  peers = next;
}

/**
 * Bundle export `Ii` / internal `z$l`.
 */
export function openInBrowser() {
  if (peers == null) {
    throw new Error("openInBrowser peers are not configured");
  }
  return peers.e(() => {
    (peers.Yf(),
      (L$l = `1728613635`),
      (R$l = `https://chatgpt.com/gifts/credits`));
  });
}

// --- missing-relative-export aliases ---
export { openInBrowser as OpenInBrowser };
