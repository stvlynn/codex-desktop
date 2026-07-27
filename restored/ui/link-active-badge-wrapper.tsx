// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `MZl`) / export `ya`.

import type { ReactElement, ReactNode } from "react";

export type LinkActiveBadgeWrapperPeers = {
  cx: (...parts: Array<string | false | null | undefined>) => string;
  renderNode: (type: unknown, props: Record<string, unknown>) => ReactNode;
  renderNodes: (type: unknown, props: Record<string, unknown>) => ReactNode;
  Fragment: unknown;
};

let peers: LinkActiveBadgeWrapperPeers | null = null;

/** Wire LinkActiveBadgeWrapper peers once companions land. */
export function setLinkActiveBadgeWrapperPeers(
  next: LinkActiveBadgeWrapperPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ya` / internal `MZl`.
 * Wrap children with an optional absolute active-link badge.
 */
export type LinkActiveBadgeWrapperProps = {
  children?: ReactNode;
  color?: string;
  borderColor?: string;
  badgeEnabled?: boolean;
};

export function LinkActiveBadgeWrapper(
  props: LinkActiveBadgeWrapperProps,
): ReactElement {
  if (peers == null) {
    throw new Error("LinkActiveBadgeWrapper peers are not configured");
  }
  const {
    children,
    color = "bg-token-text-link-active-foreground",
    borderColor,
    badgeEnabled = true,
  } = props;
  if (!badgeEnabled) {
    return peers.renderNode(peers.Fragment, { children }) as ReactElement;
  }
  const badgeClass = peers.cx(
    "border-token-bg-primary absolute right-0 top-0 size-[7px] translate-x-[2px] translate-y-[-2px] rounded-full border-[1px]",
    color,
    borderColor,
    !badgeEnabled && "hidden",
  );
  const badge = peers.renderNode("div", { className: badgeClass });
  return peers.renderNodes("div", {
    className: "relative",
    children: [children, badge],
  }) as ReactElement;
}
