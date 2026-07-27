// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `R5`) / export `La`.
// Virtualized thread-key list from extractFn(R5). Deferred companions OK.

import type { ReactElement, ReactNode } from "react";

export type ThreadKeyVirtualListProps = Record<string, unknown>;

export type ThreadKeyVirtualListPeers = {
  render: (props: ThreadKeyVirtualListProps) => ReactNode;
};

let peers: ThreadKeyVirtualListPeers | null = null;

/** Wire ThreadKeyVirtualList peers once companions land. */
export function setThreadKeyVirtualListPeers(
  next: ThreadKeyVirtualListPeers,
): void {
  peers = next;
}

/**
 * Bundle export `La` / internal `R5`.
 * Virtualized thread-key list from extractFn(R5). Deferred companions OK.
 */
export function ThreadKeyVirtualList(
  props: ThreadKeyVirtualListProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ThreadKeyVirtualList peers are not configured");
  }
  return peers.render(props) as ReactElement;
}
