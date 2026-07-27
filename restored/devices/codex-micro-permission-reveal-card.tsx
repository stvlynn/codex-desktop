// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `WSu`) / export `_`.

import type { ReactElement, ReactNode } from "react";

export type CodexMicroPermissionRevealCardProps = {
  appIconMedium?: string | null;
  appName?: ReactNode;
  permissionSettingsName?: ReactNode;
  [key: string]: unknown;
};

export type CodexMicroPermissionRevealCardPeers = {
  renderCard: (props: CodexMicroPermissionRevealCardProps) => ReactNode;
};

let peers: CodexMicroPermissionRevealCardPeers | null = null;

/** Wire Codex micro permission reveal card peers once companions land. */
export function setCodexMicroPermissionRevealCardPeers(
  next: CodexMicroPermissionRevealCardPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_` / internal `WSu`.
 * Render the Codex micro permission reveal card chrome.
 */
export function CodexMicroPermissionRevealCard(
  props: CodexMicroPermissionRevealCardProps,
): ReactElement {
  if (peers == null) {
    throw new Error("CodexMicroPermissionRevealCard peers are not configured");
  }
  return peers.renderCard(props) as ReactElement;
}
