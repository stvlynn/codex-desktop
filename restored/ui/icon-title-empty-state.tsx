// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `bsu`) / export `bn`.

import type { ReactElement, ReactNode } from "react";

export type IconTitleEmptyStatePeers = {
  cx: (...parts: Array<string | false | null | undefined>) => string;
  renderNode: (type: unknown, props: Record<string, unknown>) => ReactNode;
  renderNodes: (type: unknown, props: Record<string, unknown>) => ReactNode;
};

let peers: IconTitleEmptyStatePeers | null = null;

/** Wire IconTitleEmptyState peers once companions land. */
export function setIconTitleEmptyStatePeers(
  next: IconTitleEmptyStatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `bn` / internal `bsu`.
 * Centered empty state with optional icon, title, subtitle, and children.
 */
export type IconTitleEmptyStateProps = {
  children?: ReactNode;
  icon?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  textClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function IconTitleEmptyState(
  props: IconTitleEmptyStateProps,
): ReactElement {
  if (peers == null) {
    throw new Error("IconTitleEmptyState peers are not configured");
  }
  const {
    children,
    icon,
    title,
    subtitle,
    className,
    textClassName,
    titleClassName,
    subtitleClassName,
  } = props;
  const rootClass = peers.cx(
    "flex w-full flex-col items-center gap-6",
    className,
  );
  const textClass = peers.cx(
    "flex w-full flex-col items-center text-center",
    textClassName,
  );
  const titleClass = peers.cx(
    "text-heading-lg font-semibold text-token-foreground",
    titleClassName,
  );
  const titleNode = peers.renderNode("span", {
    className: titleClass,
    children: title,
  });
  const subtitleNode =
    subtitle == null
      ? null
      : peers.renderNode("span", {
          className: peers.cx(
            "text-lg leading-6 text-token-description-foreground",
            subtitleClassName,
          ),
          children: subtitle,
        });
  const textBlock = peers.renderNodes("div", {
    className: textClass,
    children: [titleNode, subtitleNode],
  });
  return peers.renderNodes("div", {
    className: rootClass,
    children: [icon ?? null, textBlock, children],
  }) as ReactElement;
}
