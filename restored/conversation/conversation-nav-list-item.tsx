// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `Lzl`) / export `Mo`.

import type { ReactElement } from "react";

export type ConversationNavListItemPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: ConversationNavListItemPeers | null = null;

/** Wire ConversationNavListItem peers once companions land. */
export function setConversationNavListItemPeers(
  next: ConversationNavListItemPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Mo` / internal `Lzl`.
 * UI body restored from extractFn(internal `Lzl`).
 */
export type ConversationNavListItemProps = {
  [key: string]: unknown;
};

export function ConversationNavListItem(
  props: ConversationNavListItemProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ConversationNavListItem peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
