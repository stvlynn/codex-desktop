// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `lpo`) / export `Ej`.

import type { ReactElement } from "react";

export type WorkspaceDirectoryTreeSearchPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: WorkspaceDirectoryTreeSearchPeers | null = null;

/** Wire WorkspaceDirectoryTreeSearch peers once companions land. */
export function setWorkspaceDirectoryTreeSearchPeers(
  next: WorkspaceDirectoryTreeSearchPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ej` / internal `lpo`.
 * UI body restored from extractFn(internal `lpo`).
 */
export type WorkspaceDirectoryTreeSearchProps = {
  [key: string]: unknown;
};

export function WorkspaceDirectoryTreeSearch(
  props: WorkspaceDirectoryTreeSearchProps,
): ReactElement {
  if (peers == null) {
    throw new Error("WorkspaceDirectoryTreeSearch peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
