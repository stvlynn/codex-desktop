// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `OWc`) / export `Ad`.

import type { ReactElement, ReactNode } from "react";

export type ExpandableStatusSectionPeers = {
  useState: <T>(
    initial: T | (() => T),
  ) => [T, (next: T | ((prev: T) => T)) => void];
  useElementHeight: () => { elementHeightPx: number; elementRef: unknown };
  StatusSummary: unknown;
  renderNode: (type: unknown, props: Record<string, unknown>) => ReactNode;
  renderNodes: (type: unknown, props: Record<string, unknown>) => ReactNode;
  cx: (...parts: Array<string | false | null | undefined>) => string;
};

let peers: ExpandableStatusSectionPeers | null = null;

/** Wire ExpandableStatusSection peers once companions land. */
export function setExpandableStatusSectionPeers(
  next: ExpandableStatusSectionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ad` / internal `OWc`.
 * Expandable status row that toggles children while running/idle.
 */
export type ExpandableStatusSectionProps = {
  defaultExpanded?: boolean;
  indentContent?: boolean;
  icon?: ReactNode;
  onExpand?: () => void;
  summary?: ReactNode;
  status?: "running" | "idle" | string;
  children?: ReactNode;
};

export function ExpandableStatusSection(
  props: ExpandableStatusSectionProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ExpandableStatusSection peers are not configured");
  }
  const {
    defaultExpanded = false,
    indentContent = true,
    icon,
    onExpand,
    summary,
    status,
    children,
  } = props;
  const [collapsedWhileRunning, setCollapsedWhileRunning] =
    peers.useState(false);
  const [expanded, setExpanded] = peers.useState(defaultExpanded);
  const { elementHeightPx, elementRef } = peers.useElementHeight();
  const isRunning = status === "running";
  const hasChildren = children != null;
  const showChildren =
    hasChildren && (isRunning ? !collapsedWhileRunning : expanded);
  const onToggle = () => {
    if (!showChildren) onExpand?.();
    if (isRunning) setCollapsedWhileRunning(!collapsedWhileRunning);
    else setExpanded(!expanded);
  };
  return peers.renderNodes("div", {
    className: "flex w-full flex-col",
    children: [
      peers.renderNode("button", {
        type: "button",
        onClick: onToggle,
        className: "flex w-full items-center gap-2 text-left",
        children: peers.renderNode(peers.StatusSummary, {
          active: isRunning,
          className:
            "text-size-chat min-w-0 truncate text-token-conversation-summary",
          icon,
          summary,
        }),
      }),
      showChildren
        ? peers.renderNode("div", {
            ref: elementRef,
            className: peers.cx(indentContent && "pl-6"),
            style: { minHeight: elementHeightPx || undefined },
            children,
          })
        : null,
    ],
  }) as ReactElement;
}
