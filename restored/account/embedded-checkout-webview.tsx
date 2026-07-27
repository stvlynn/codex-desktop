// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `s7l`) / export `br`.

import type { ReactElement } from "react";

export type EmbeddedCheckoutWebviewPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: EmbeddedCheckoutWebviewPeers | null = null;

/** Wire EmbeddedCheckoutWebview peers once companions land. */
export function setEmbeddedCheckoutWebviewPeers(next: EmbeddedCheckoutWebviewPeers): void {
  peers = next;
}

/**
 * Bundle export `br` / internal `s7l`.
 * UI body restored from extractFn(internal `s7l`).
 */
export type EmbeddedCheckoutWebviewProps = {
  [key: string]: unknown;
};

export function EmbeddedCheckoutWebview(props: EmbeddedCheckoutWebviewProps): ReactElement {
  if (peers == null) {
    throw new Error("EmbeddedCheckoutWebview peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
