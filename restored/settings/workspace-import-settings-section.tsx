// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `dlu`) / export `Qt`.

import type { ReactElement } from "react";

export type WorkspaceImportSettingsSectionPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: WorkspaceImportSettingsSectionPeers | null = null;

/** Wire WorkspaceImportSettingsSection peers once companions land. */
export function setWorkspaceImportSettingsSectionPeers(
  next: WorkspaceImportSettingsSectionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Qt` / internal `dlu`.
 * UI body restored from extractFn(internal `dlu`).
 */
export type WorkspaceImportSettingsSectionProps = {
  [key: string]: unknown;
};

export function WorkspaceImportSettingsSection(
  props: WorkspaceImportSettingsSectionProps,
): ReactElement {
  if (peers == null) {
    throw new Error("WorkspaceImportSettingsSection peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
