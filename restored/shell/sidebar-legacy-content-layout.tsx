// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `h2l`) / export `li`.

import type { ReactElement, ReactNode } from "react";

export type SidebarLegacyContentLayoutPeers = {
  renderLayout: (props: Record<string, unknown>) => ReactNode;
};

let peers: SidebarLegacyContentLayoutPeers | null = null;

/** Wire SidebarLegacyContentLayout peers once companions land. */
export function setSidebarLegacyContentLayoutPeers(
  next: SidebarLegacyContentLayoutPeers,
): void {
  peers = next;
}

/**
 * Bundle export `li` / internal `h2l`.
 * Render legacy sidebar content layout chrome.
 */
export type SidebarLegacyContentLayoutProps = Record<string, unknown>;

export function SidebarLegacyContentLayout(
  props: SidebarLegacyContentLayoutProps,
): ReactElement {
  if (peers == null) {
    throw new Error("SidebarLegacyContentLayout peers are not configured");
  }
  return peers.renderLayout(props) as ReactElement;
}
