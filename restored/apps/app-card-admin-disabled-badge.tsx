// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `Phu`) / export `At`.
// App card admin-disabled badge from extractFn(Phu). Large UI deferred peers OK.

import type { ReactElement, ReactNode } from "react";

export type AppCardAdminDisabledBadgeProps = Record<string, unknown>;

export type AppCardAdminDisabledBadgePeers = {
  render: (props: AppCardAdminDisabledBadgeProps) => ReactNode;
};

let peers: AppCardAdminDisabledBadgePeers | null = null;

/** Wire AppCardAdminDisabledBadge peers once companions land. */
export function setAppCardAdminDisabledBadgePeers(
  next: AppCardAdminDisabledBadgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `At` / internal `Phu`.
 * App card admin-disabled badge from extractFn(Phu). Large UI deferred peers OK.
 */
export function AppCardAdminDisabledBadge(
  props: AppCardAdminDisabledBadgeProps,
): ReactElement {
  if (peers == null) {
    throw new Error("AppCardAdminDisabledBadge peers are not configured");
  }
  return peers.render(props) as ReactElement;
}
