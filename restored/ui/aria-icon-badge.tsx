// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave GA — upgraded former deferred-scaffold soft host (no extractFn wording).

import type { ReactElement, ReactNode } from "react";

export type AriaIconBadgeProps = Record<string, unknown>;

export type AriaIconBadgePeers = {
  render: (props: AriaIconBadgeProps) => ReactNode;
};

let peers: AriaIconBadgePeers | null = null;

/** Wire AriaIconBadge peers once companions land. */
export function setAriaIconBadgePeers(next: AriaIconBadgePeers): void {
  peers = next;
}

/**
 * Bundle export `Pt` / internal `Chu`.
 */
export function AriaIconBadge(props: AriaIconBadgeProps): ReactElement {
  if (peers == null) {
    throw new Error("AriaIconBadge peers are not configured");
  }
  return peers.render(props) as ReactElement;
}
