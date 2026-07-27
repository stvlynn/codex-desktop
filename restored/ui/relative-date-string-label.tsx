// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `uua`) / export `SL`.

import type { ReactElement, ReactNode } from "react";

export type RelativeDateStringLabelProps = {
  dateString: string;
};

export type RelativeDateStringLabelParts = {
  useNow: () => unknown;
  Label: (props: { dateString: string; now: unknown }) => ReactNode;
};

let parts: RelativeDateStringLabelParts | null = null;

/** Wire relative-date label parts once companions land. */
export function setRelativeDateStringLabelParts(
  next: RelativeDateStringLabelParts,
): void {
  parts = next;
}

/**
 * Bundle export `SL` / internal `uua`.
 * Relative date label driven by a live `now` clock.
 */
export function RelativeDateStringLabel(
  props: RelativeDateStringLabelProps,
): ReactElement {
  if (parts == null) {
    throw new Error("RelativeDateStringLabel parts are not configured");
  }
  const { dateString } = props;
  const now = parts.useNow();
  return <>{parts.Label({ dateString, now })}</>;
}
