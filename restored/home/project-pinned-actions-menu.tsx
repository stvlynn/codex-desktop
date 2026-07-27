// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `rUl`) / export `Ya`.

import type { ReactElement, ReactNode } from "react";

export type ProjectPinnedActionsMenuPeers = {
  useTranslations: () => (key: string) => string;
  Menu: (props: Record<string, unknown>) => ReactNode;
  MenuItem: (props: Record<string, unknown>) => ReactNode;
};

let peers: ProjectPinnedActionsMenuPeers | null = null;

/** Wire ProjectPinnedActionsMenu peers once companions land. */
export function setProjectPinnedActionsMenuPeers(
  next: ProjectPinnedActionsMenuPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ya` / internal `rUl`.
 * Pinned-project overflow menu (new task / settings / delete).
 */
export type ProjectPinnedActionsMenuProps = {
  align?: string;
  canDeleteProject?: boolean;
  deleteDisabledMessage?: string;
  isPinned?: boolean;
  onDelete?: () => void;
  onNewLocalTask?: () => void;
  onOpenChange?: (open: boolean) => void;
  onPinnedChange?: (pinned: boolean) => void;
  onSettings?: () => void;
  open?: boolean;
  projectTitle?: string;
  triggerButton?: ReactNode;
};

export function ProjectPinnedActionsMenu(
  props: ProjectPinnedActionsMenuProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ProjectPinnedActionsMenu peers are not configured");
  }
  const t = peers.useTranslations();
  return peers.Menu({
    align: props.align,
    open: props.open,
    onOpenChange: props.onOpenChange,
    trigger: props.triggerButton,
    children: [
      peers.MenuItem({
        key: "new",
        onSelect: props.onNewLocalTask,
        children: t("codex.projectPinnedActions.newLocalTask"),
      }),
      peers.MenuItem({
        key: "settings",
        onSelect: props.onSettings,
        children: t("codex.projectPinnedActions.settings"),
      }),
      peers.MenuItem({
        key: "pin",
        onSelect: () => props.onPinnedChange?.(!(props.isPinned ?? false)),
        children: props.isPinned
          ? t("codex.projectPinnedActions.unpin")
          : t("codex.projectPinnedActions.pin"),
      }),
      peers.MenuItem({
        key: "delete",
        disabled: props.canDeleteProject === false,
        title: props.deleteDisabledMessage,
        onSelect: props.onDelete,
        children: t("codex.projectPinnedActions.delete"),
      }),
    ],
  }) as ReactElement;
}
