// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `Ios`) / export `LS`.

import type { ReactElement, ReactNode } from "react";

export type UtilityBarCategoryValuePeers = {
  renderValue: (props: Record<string, unknown>) => ReactNode;
};

let peers: UtilityBarCategoryValuePeers | null = null;

/** Wire UtilityBarCategoryValue peers once companions land. */
export function setUtilityBarCategoryValuePeers(
  next: UtilityBarCategoryValuePeers,
): void {
  peers = next;
}

/**
 * Bundle export `LS` / internal `Ios`.
 * Render a utility-bar category/value row.
 */
export type UtilityBarCategoryValueProps = {
  categoryLabel?: ReactNode;
  className?: string;
  collapse?: unknown;
  icon?: ReactNode;
  value?: ReactNode;
  valueClassName?: string;
  [key: string]: unknown;
};

export function UtilityBarCategoryValue(
  props: UtilityBarCategoryValueProps,
): ReactElement {
  if (peers == null) {
    throw new Error("UtilityBarCategoryValue peers are not configured");
  }
  return peers.renderValue(props) as ReactElement;
}
