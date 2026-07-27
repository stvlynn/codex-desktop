// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `JB`) / export `xL`.

import type { ReactElement, ReactNode } from "react";

export type RelativeDateByMinuteProps = {
  dateString: string;
};

export type RelativeDateByMinuteParts = {
  useNow: () => unknown;
  Label: (props: { dateString: string; now: unknown }) => ReactNode;
};

let parts: RelativeDateByMinuteParts | null = null;

/** Wire minute-resolution relative date parts once companions land. */
export function setRelativeDateByMinuteParts(
  next: RelativeDateByMinuteParts,
): void {
  parts = next;
}

/**
 * Bundle export `xL` / internal `JB`.
 * Relative date label refreshed on a per-minute clock.
 */
export function RelativeDateByMinute(
  props: RelativeDateByMinuteProps,
): ReactElement {
  if (parts == null) {
    throw new Error("RelativeDateByMinute parts are not configured");
  }
  const { dateString } = props;
  const now = parts.useNow();
  return <>{parts.Label({ dateString, now })}</>;
}
