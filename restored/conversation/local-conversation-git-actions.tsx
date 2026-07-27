// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `GYo`) / export `BE`.

import type { ReactElement, ReactNode } from "react";

export type LocalConversationGitActionsPeers = {
  renderActions: (props: Record<string, unknown>) => ReactNode;
};

let peers: LocalConversationGitActionsPeers | null = null;

/** Wire LocalConversationGitActions peers once companions land. */
export function setLocalConversationGitActionsPeers(
  next: LocalConversationGitActionsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `BE` / internal `GYo`.
 * Render local conversation git action toolbar/menu.
 */
export type LocalConversationGitActionsProps = Record<string, unknown>;

export function LocalConversationGitActions(
  props: LocalConversationGitActionsProps,
): ReactElement {
  if (peers == null) {
    throw new Error("LocalConversationGitActions peers are not configured");
  }
  return peers.renderActions(props) as ReactElement;
}
