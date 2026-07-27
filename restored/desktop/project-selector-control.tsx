// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `F6s`) / export `Gm`.

import type { ReactElement } from "react";

export type ProjectSelectorControlPeers = {
  createElement: (
    type: unknown,
    props: Record<string, unknown> | null,
    ...children: unknown[]
  ) => unknown;
  render: (props: Record<string, unknown>) => unknown;
  useTranslations?: () => (key: string) => string;
};

let peers: ProjectSelectorControlPeers | null = null;

/** Wire ProjectSelectorControl peers once companions land. */
export function setProjectSelectorControlPeers(
  next: ProjectSelectorControlPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Gm` / internal `F6s`.
 * UI body restored from extractFn(internal `F6s`).
 */
export type ProjectSelectorControlProps = {
  activeProjectIdOverride?: unknown;
  allowLocalProjects?: unknown;
  allowLocalProjectActions?: unknown;
  allowRemoteProjects?: unknown;
  disabled?: unknown;
  hideLabel?: unknown;
  onProjectSelected?: unknown;
  variant?: unknown;
  isOpen?: unknown;
  onOpenChange?: unknown;
  shortcut?: unknown;
  triggerButton?: unknown;
};

export function ProjectSelectorControl(
  props: ProjectSelectorControlProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ProjectSelectorControl peers are not configured");
  }
  return peers.render(props as Record<string, unknown>) as ReactElement;
}
