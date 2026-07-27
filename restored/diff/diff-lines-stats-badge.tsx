// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave ED — real body via extractFn(internal `Hq`) / export `QD`.

import { createElement, type ReactElement, type ReactNode } from "react";

export type DiffLinesStatsBadgeProps = {
  linesAdded: number;
  linesRemoved: number;
  variant?: "color" | "monochrome" | "agent-activity" | string;
  className?: string;
};

export type DiffLinesStatsBadgePeers = {
  useIntl: () => {
    formatNumber: (value: number) => string;
  };
  cx: (...parts: Array<string | false | null | undefined>) => string;
  FormattedMessage: (props: {
    id: string;
    defaultMessage: string;
    description?: string;
    values?: Record<string, unknown>;
  }) => ReactNode;
};

let peers: DiffLinesStatsBadgePeers | null = null;

/** Wire diff stats badge peers once companions land. */
export function setDiffLinesStatsBadgePeers(
  next: DiffLinesStatsBadgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `QD` / internal `Hq`.
 * Render +/− line stats for a diff / agent-activity header.
 */
export function DiffLinesStatsBadge(
  props: DiffLinesStatsBadgeProps,
): ReactElement {
  if (peers == null) {
    throw new Error("DiffLinesStatsBadge peers are not configured");
  }
  const { linesAdded, linesRemoved, variant = "color", className } = props;
  const intl = peers.useIntl();
  const rootClass = peers.cx(
    "inline-flex items-center gap-1 disambiguated-digits tabular-nums tracking-tight",
    className,
  );
  const addedTone =
    (variant === "monochrome" && "text-token-input-placeholder-foreground") ||
    (variant === "color" &&
      "text-token-git-decoration-added-resource-foreground") ||
    (variant === "agent-activity" &&
      "[@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:text-token-git-decoration-added-resource-foreground");
  const removedTone =
    (variant === "monochrome" && "text-token-input-placeholder-foreground") ||
    (variant === "color" &&
      "text-token-git-decoration-deleted-resource-foreground") ||
    (variant === "agent-activity" &&
      "[@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:text-token-git-decoration-deleted-resource-foreground");
  const addedClass = peers.cx("flex shrink-0 items-center", addedTone || false);
  const removedClass = peers.cx(
    "flex shrink-0 items-center",
    removedTone || false,
  );
  const addedLabel = peers.FormattedMessage({
    id: "wham.message.modal.repoAndDiffStats.linesAdded",
    defaultMessage: "+{linesAdded}",
    description: "Number of lines added",
    values: { linesAdded: intl.formatNumber(linesAdded) },
  });
  const removedLabel = peers.FormattedMessage({
    id: "wham.message.modal.repoAndDiffStats.linesRemoved",
    defaultMessage: "-{linesRemoved}",
    description: "Number of lines removed",
    values: { linesRemoved: intl.formatNumber(linesRemoved) },
  });
  return createElement(
    "div",
    { className: rootClass },
    createElement("span", { className: addedClass, key: "a" }, addedLabel),
    createElement("span", { className: removedClass, key: "r" }, removedLabel),
  );
}
