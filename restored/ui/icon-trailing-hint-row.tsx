// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `BR`) / export `YB`.

import type { ReactElement } from "react";

export type IconTrailingHintRowPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: IconTrailingHintRowPeers | null = null;

/** Wire IconTrailingHintRow peers once companions land. */
export function setIconTrailingHintRowPeers(
  next: IconTrailingHintRowPeers,
): void {
  peers = next;
}

/**
 * Bundle export `YB` / internal `BR`.
 * UI body restored from extractFn(internal `BR`).
 */
export type IconTrailingHintRowProps = {
  [key: string]: unknown;
};

export function IconTrailingHintRow(
  props: IconTrailingHintRowProps,
): ReactElement {
  if (peers == null) {
    throw new Error("IconTrailingHintRow peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
