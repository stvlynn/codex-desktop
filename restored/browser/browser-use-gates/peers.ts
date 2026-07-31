// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Peer wiring for browser-use gate hooks.

import type { BrowserUseGatePeers } from "./types";

let peers: BrowserUseGatePeers | null = null;

export function setBrowserUseGatePeers(next: BrowserUseGatePeers): void {
  peers = next;
}

export function requireBrowserUseGatePeers(): BrowserUseGatePeers {
  if (peers == null) {
    throw new Error("browser-use gate peers are not configured");
  }
  return peers;
}
