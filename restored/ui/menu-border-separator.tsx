// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `lXi`) / export `ZB`.

import type { ReactElement, ReactNode } from "react";

export type MenuBorderSeparatorPeers = {
  mergeClassNames: (...parts: Array<string | undefined>) => string;
  renderSeparator: (props: { className: string }) => ReactNode;
};

let peers: MenuBorderSeparatorPeers | null = null;

/** Wire MenuBorderSeparator peers once companions land. */
export function setMenuBorderSeparatorPeers(
  next: MenuBorderSeparatorPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ZB` / internal `lXi`.
 * Render a full-width menu border separator row.
 */
export type MenuBorderSeparatorProps = {
  className?: string;
  paddingClassName?: string;
};

export function MenuBorderSeparator(
  props: MenuBorderSeparatorProps,
): ReactElement {
  if (peers == null) {
    throw new Error("MenuBorderSeparator peers are not configured");
  }
  const paddingClassName = props.paddingClassName ?? "py-1";
  const className = peers.mergeClassNames(
    "w-full px-[var(--padding-row-x)]",
    paddingClassName,
    props.className,
  );
  return peers.renderSeparator({ className }) as ReactElement;
}
