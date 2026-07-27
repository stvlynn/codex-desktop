// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `xza`) / export `ZM`.

import type { ReactElement, ReactNode } from "react";

export type AvatarCornerBadgePeers = {
  renderBadge: (children: ReactNode) => ReactNode;
};

let peers: AvatarCornerBadgePeers | null = null;

/** Wire AvatarCornerBadge peers once companions land. */
export function setAvatarCornerBadgePeers(next: AvatarCornerBadgePeers): void {
  peers = next;
}

/**
 * Bundle export `ZM` / internal `xza`.
 * Wrap children with an absolute corner badge overlay.
 */
export type AvatarCornerBadgeProps = {
  children?: ReactNode;
};

export function AvatarCornerBadge(props: AvatarCornerBadgeProps): ReactElement {
  if (peers == null) {
    throw new Error("AvatarCornerBadge peers are not configured");
  }
  return peers.renderBadge(props.children) as ReactElement;
}
