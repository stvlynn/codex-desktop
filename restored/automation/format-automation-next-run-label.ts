// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `XRl`) / export `Ho`.

import type { ReactNode } from "react";

export type FormatAutomationNextRunLabelArgs = {
  intl: {
    formatMessage: (descriptor: {
      id: string;
      defaultMessage: string;
      description?: string;
    }) => string;
  };
  nextRunAt?: string | number | Date | null;
  status?: string | null;
};

export type FormatAutomationNextRunLabelPeers = {
  formatRelativeTimestamp: (args: {
    intl: FormatAutomationNextRunLabelArgs["intl"];
    timestamp: string | number | Date;
  }) => ReactNode | string;
};

let peers: FormatAutomationNextRunLabelPeers | null = null;

/** Wire next-run label peers once companions land. */
export function setFormatAutomationNextRunLabelPeers(
  next: FormatAutomationNextRunLabelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ho` / internal `XRl`.
 * Format the next-run label for an automation row.
 */
export function formatAutomationNextRunLabel(
  args: FormatAutomationNextRunLabelArgs,
): ReactNode | string {
  if (peers == null) {
    throw new Error("FormatAutomationNextRunLabel peers are not configured");
  }
  const { intl, nextRunAt, status } = args;
  if (status === "PAUSED") return "-";
  if (nextRunAt == null) {
    return intl.formatMessage({
      id: "inbox.automations.nextRun.none",
      defaultMessage: "Not scheduled",
      description:
        "Fallback label when an automation does not have a next run time",
    });
  }
  return peers.formatRelativeTimestamp({ intl, timestamp: nextRunAt });
}
