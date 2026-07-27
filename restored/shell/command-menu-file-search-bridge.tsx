// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `P3s`) / export `rh`.

import type { ReactElement, ReactNode } from "react";

export type CommandMenuFileSearchBridgePeers = {
  renderBridge: (props: Record<string, unknown>) => ReactNode;
};

let peers: CommandMenuFileSearchBridgePeers | null = null;

/** Wire CommandMenuFileSearchBridge peers once companions land. */
export function setCommandMenuFileSearchBridgePeers(
  next: CommandMenuFileSearchBridgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `rh` / internal `P3s`.
 * Bridge command-menu file search into the shell surface.
 */
export type CommandMenuFileSearchBridgeProps = Record<string, unknown>;

export function CommandMenuFileSearchBridge(
  props: CommandMenuFileSearchBridgeProps,
): ReactElement {
  if (peers == null) {
    throw new Error("CommandMenuFileSearchBridge peers are not configured");
  }
  return peers.renderBridge(props) as ReactElement;
}
