// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `yLo`) / export `cO`.
// Browser-use webview host surface from extractFn(yLo).

import type { ReactElement, ReactNode } from "react";

export type BrowserUseWebviewHostProps = Record<string, unknown>;

export type BrowserUseWebviewHostPeers = {
  render: (props: BrowserUseWebviewHostProps) => ReactNode;
};

let peers: BrowserUseWebviewHostPeers | null = null;

/** Wire BrowserUseWebviewHost peers once companions land. */
export function setBrowserUseWebviewHostPeers(
  next: BrowserUseWebviewHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cO` / internal `yLo`.
 * Browser-use webview host surface from extractFn(yLo).
 */
export function BrowserUseWebviewHost(
  props: BrowserUseWebviewHostProps,
): ReactElement {
  if (peers == null) {
    throw new Error("BrowserUseWebviewHost peers are not configured");
  }
  return peers.render(props) as ReactElement;
}
