// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `fgu`) / export `St`.

import type { ReactElement, ReactNode } from "react";

export type ChartsPurpleBadgePeers = {
  renderBadge: () => ReactNode;
};

let peers: ChartsPurpleBadgePeers | null = null;

/** Wire ChartsPurpleBadge peers once companions land. */
export function setChartsPurpleBadgePeers(next: ChartsPurpleBadgePeers): void {
  peers = next;
}

/**
 * Bundle export `St` / internal `fgu`.
 * Render the charts-purple Upgrade-to-unlock badge.
 */
export type ChartsPurpleBadgeProps = Record<string, unknown>;

export function ChartsPurpleBadge(
  _props: ChartsPurpleBadgeProps = {},
): ReactElement {
  if (peers == null) {
    throw new Error("ChartsPurpleBadge peers are not configured");
  }
  void _props;
  return peers.renderBadge() as ReactElement;
}
