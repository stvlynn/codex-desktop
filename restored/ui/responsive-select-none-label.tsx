// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `Met`) / export `ylt`.

import type { ReactElement, ReactNode } from "react";

export type ResponsiveSelectNoneLabelPeers = {
  footerResponsive: boolean;
  mergeClassNames: (...parts: Array<string | boolean | undefined>) => string;
  renderDiv: (props: Record<string, unknown>) => ReactNode;
};

let peers: ResponsiveSelectNoneLabelPeers | null = null;

/** Wire ResponsiveSelectNoneLabel peers once companions land. */
export function setResponsiveSelectNoneLabelPeers(
  next: ResponsiveSelectNoneLabelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ylt` / internal `Met`.
 * Render a select-none label, optionally footer-responsive.
 */
export type ResponsiveSelectNoneLabelProps = {
  className?: string;
  responsive?: boolean;
  [key: string]: unknown;
};

export function ResponsiveSelectNoneLabel(
  props: ResponsiveSelectNoneLabelProps,
): ReactElement {
  if (peers == null) {
    throw new Error("ResponsiveSelectNoneLabel peers are not configured");
  }
  const { className, responsive, ...rest } = props;
  const responsiveClass =
    (responsive === undefined ? true : responsive) && peers.footerResponsive;
  const merged = peers.mergeClassNames(
    "select-none",
    responsiveClass,
    className,
  );
  return peers.renderDiv({ className: merged, ...rest }) as ReactElement;
}
