// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `pPr`) / export `rQ`.
// Archive all project threads dropdown menu from extractFn(pPr).

import type { ReactElement, ReactNode } from "react";

export type ArchiveProjectThreadsMenuProps = Record<string, unknown>;

export type ArchiveProjectThreadsMenuPeers = {
  render: (props: ArchiveProjectThreadsMenuProps) => ReactNode;
};

let peers: ArchiveProjectThreadsMenuPeers | null = null;

/** Wire ArchiveProjectThreadsMenu peers once companions land. */
export function setArchiveProjectThreadsMenuPeers(
  next: ArchiveProjectThreadsMenuPeers,
): void {
  peers = next;
}

/**
 * Bundle export `rQ` / internal `pPr`.
 * Archive all project threads dropdown menu from extractFn(pPr).
 */
export function ArchiveProjectThreadsMenu(
  props: ArchiveProjectThreadsMenuProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ArchiveProjectThreadsMenu peers are not configured");
  }
  return peers.render(props) as ReactElement;
}
