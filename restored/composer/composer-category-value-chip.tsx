// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `Fos`) / export `IS`.

import type { ReactElement, ReactNode } from "react";

export type ComposerCategoryValueChipPeers = {
  renderChip: (props: Record<string, unknown>) => ReactNode;
};

let peers: ComposerCategoryValueChipPeers | null = null;

/** Wire ComposerCategoryValueChip peers once companions land. */
export function setComposerCategoryValueChipPeers(
  next: ComposerCategoryValueChipPeers,
): void {
  peers = next;
}

/**
 * Bundle export `IS` / internal `Fos`.
 * Render a composer utility-bar category/value chip button.
 */
export type ComposerCategoryValueChipProps = {
  categoryLabel?: ReactNode;
  className?: string;
  collapse?: unknown;
  icon?: ReactNode;
  indicator?: unknown;
  value?: ReactNode;
  valueClassName?: string;
  [key: string]: unknown;
};

export function ComposerCategoryValueChip(
  props: ComposerCategoryValueChipProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ComposerCategoryValueChip peers are not configured");
  }
  return peers.renderChip(props) as ReactElement;
}
