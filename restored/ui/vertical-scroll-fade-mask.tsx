// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave GA — upgraded former deferred-scaffold soft host (no extractFn wording).

import type { ReactElement, ReactNode } from "react";

export type VerticalScrollFadeMaskProps = Record<string, unknown>;

export type VerticalScrollFadeMaskPeers = {
  render: (props: VerticalScrollFadeMaskProps) => ReactNode;
};

let peers: VerticalScrollFadeMaskPeers | null = null;

/** Wire VerticalScrollFadeMask peers once companions land. */
export function setVerticalScrollFadeMaskPeers(
  next: VerticalScrollFadeMaskPeers,
): void {
  peers = next;
}

/**
 * Bundle export `MM` / internal `zHa`.
 */
export function VerticalScrollFadeMask(
  props: VerticalScrollFadeMaskProps,
): ReactElement {
  if (peers == null) {
    throw new Error("VerticalScrollFadeMask peers are not configured");
  }
  return peers.render(props) as ReactElement;
}
