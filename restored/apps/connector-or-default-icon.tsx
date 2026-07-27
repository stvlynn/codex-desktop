// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave FZ — upgraded former deferred-scaffold soft host (no extractFn wording).
// Open-runtime facade: aggregator-only alias; body not taken from app-initial extractFn.

import type { ReactElement, ReactNode } from "react";

export type ConnectorOrDefaultIconProps = Record<string, unknown>;

export type ConnectorOrDefaultIconPeers = {
  render: (props: ConnectorOrDefaultIconProps) => ReactNode;
};

let peers: ConnectorOrDefaultIconPeers | null = null;

/** Wire ConnectorOrDefaultIcon peers once companions land. */
export function setConnectorOrDefaultIconPeers(
  next: ConnectorOrDefaultIconPeers,
): void {
  peers = next;
}

/**
 * Bundle export `iB` / internal `p2i`.
 */
export function ConnectorOrDefaultIcon(
  props: ConnectorOrDefaultIconProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ConnectorOrDefaultIcon peers are not configured");
  }
  return peers.render(props) as ReactElement;
}
