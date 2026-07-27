// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `t6s`) / export `Zm`.

import type { ReactNode } from "react";

export type ComposerProjectSelectorProps = {
  projectId?: string | null;
  projectName?: string | null;
  menuOpen?: boolean;
  onMenuOpenChange?: (open: boolean) => void;
  shortcut?: unknown;
  subtleHover?: boolean;
  triggerButton?: ReactNode;
  variant?: unknown;
  onProjectChange?: (projectId: string | null) => void;
};

export type ComposerProjectSelectorPeers = {
  useActiveThread: () => { type?: string; projectId?: string | null } | null;
  ControlledProjectSelector: (props: Record<string, unknown>) => ReactNode;
  UncontrolledProjectSelector: (props: Record<string, unknown>) => ReactNode;
};

let peers: ComposerProjectSelectorPeers | null = null;

/** Wire composer project selector peers once companions land. */
export function setComposerProjectSelectorPeers(
  next: ComposerProjectSelectorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Zm` / internal `t6s`.
 * Project selector for composer — controlled when onProjectChange is set.
 */
export function ComposerProjectSelector(
  props: ComposerProjectSelectorProps,
): ReactNode {
  if (peers == null) {
    throw new Error("ComposerProjectSelector peers are not configured");
  }
  const {
    projectId,
    projectName = null,
    menuOpen,
    onMenuOpenChange,
    shortcut,
    subtleHover,
    triggerButton,
    variant,
    onProjectChange,
  } = props;
  const active = peers.useActiveThread();
  let resolvedId = projectId;
  if (resolvedId === undefined) {
    resolvedId = active?.type === "local" ? (active.projectId ?? null) : null;
  }
  if (onProjectChange != null) {
    const chatgptProjectId = resolvedId?.startsWith("g-p-") ? resolvedId : null;
    return peers.ControlledProjectSelector({
      projectId: chatgptProjectId,
      projectName,
      menuOpen,
      onMenuOpenChange,
      shortcut,
      subtleHover,
      triggerButton,
      variant,
      onProjectChange,
    });
  }
  return peers.UncontrolledProjectSelector({
    projectId: resolvedId,
    projectName,
    menuOpen,
    onMenuOpenChange,
    shortcut,
    subtleHover,
    triggerButton,
    variant,
  });
}

/** Bundle export `Qm` — Rolldown ESM init retained as no-op. */
export function ensureComposerProjectSelectorInit(): void {}
