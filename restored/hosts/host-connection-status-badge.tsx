// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `Cql`) / export `Na`.
// Host connection status badge from extractFn(Cql).

import type { ReactElement, ReactNode } from "react";

export type HostConnectionStatusBadgeProps = Record<string, unknown>;

export type HostConnectionStatusBadgePeers = {
  render: (props: HostConnectionStatusBadgeProps) => ReactNode;
};

let peers: HostConnectionStatusBadgePeers | null = null;

/** Wire HostConnectionStatusBadge peers once companions land. */
export function setHostConnectionStatusBadgePeers(
  next: HostConnectionStatusBadgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Na` / internal `Cql`.
 * Host connection status badge from extractFn(Cql).
 */
export function HostConnectionStatusBadge(
  props: HostConnectionStatusBadgeProps,
): ReactElement {
  if (peers == null) {
    throw new Error("HostConnectionStatusBadge peers are not configured");
  }
  return peers.render(props) as ReactElement;
}
