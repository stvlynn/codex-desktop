// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `Tsl`) / export `Yc`.

import type { ReactElement } from "react";

export type PreviewExpandCollapseListPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: PreviewExpandCollapseListPeers | null = null;

/** Wire PreviewExpandCollapseList peers once companions land. */
export function setPreviewExpandCollapseListPeers(
  next: PreviewExpandCollapseListPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Yc` / internal `Tsl`.
 * UI body restored from extractFn(internal `Tsl`).
 */
export type PreviewExpandCollapseListProps = {
  [key: string]: unknown;
};

export function PreviewExpandCollapseList(
  props: PreviewExpandCollapseListProps,
): ReactElement {
  if (peers == null) {
    throw new Error("PreviewExpandCollapseList peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
