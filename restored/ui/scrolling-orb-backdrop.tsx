// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `$rt`) / export `Pct`.

import type { ReactElement } from "react";

export type ScrollingOrbBackdropPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: ScrollingOrbBackdropPeers | null = null;

/** Wire ScrollingOrbBackdrop peers once companions land. */
export function setScrollingOrbBackdropPeers(
  next: ScrollingOrbBackdropPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Pct` / internal `$rt`.
 * UI body restored from extractFn(internal `$rt`).
 */
export type ScrollingOrbBackdropProps = {
  [key: string]: unknown;
};

export function ScrollingOrbBackdrop(
  props: ScrollingOrbBackdropProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ScrollingOrbBackdrop peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
