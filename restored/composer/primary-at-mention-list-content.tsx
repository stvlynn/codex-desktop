// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `Zqa`) / export `sM`.

import type { ReactElement } from "react";

export type PrimaryAtMentionListContentPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: PrimaryAtMentionListContentPeers | null = null;

/** Wire PrimaryAtMentionListContent peers once companions land. */
export function setPrimaryAtMentionListContentPeers(
  next: PrimaryAtMentionListContentPeers,
): void {
  peers = next;
}

/**
 * Bundle export `sM` / internal `Zqa`.
 * UI body restored from extractFn(internal `Zqa`).
 */
export type PrimaryAtMentionListContentProps = {
  [key: string]: unknown;
};

export function PrimaryAtMentionListContent(
  props: PrimaryAtMentionListContentProps,
): ReactElement {
  if (peers == null) {
    throw new Error("PrimaryAtMentionListContent peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
