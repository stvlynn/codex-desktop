// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `jmo`) / export `sj`.
// Review file tree from extractFn(jmo). Mid/large deferred peers OK.

import type { ReactElement, ReactNode } from "react";

export type ReviewFileTreeProps = Record<string, unknown>;

export type ReviewFileTreePeers = {
  render: (props: ReviewFileTreeProps) => ReactNode;
};

let peers: ReviewFileTreePeers | null = null;

/** Wire ReviewFileTree peers once companions land. */
export function setReviewFileTreePeers(next: ReviewFileTreePeers): void {
  peers = next;
}

/**
 * Bundle export `sj` / internal `jmo`.
 * Review file tree from extractFn(jmo). Mid/large deferred peers OK.
 */
export function ReviewFileTree(props: ReviewFileTreeProps): ReactElement {
  if (peers == null) {
    throw new Error("ReviewFileTree peers are not configured");
  }
  return peers.render(props) as ReactElement;
}
