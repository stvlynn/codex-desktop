// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `XRl`) / export `Ho`.

export type FormatAutomationNextRunLabelPeers = {
  ZRl: (...args: unknown[]) => unknown;
};
let peers: FormatAutomationNextRunLabelPeers | null = null;

/** Wire formatAutomationNextRunLabel peers once companions land. */
export function setFormatAutomationNextRunLabelPeers(
  next: FormatAutomationNextRunLabelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ho` / internal `XRl`.
 */
export function formatAutomationNextRunLabel({
  intl,
  nextRunAt,
  status,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("formatAutomationNextRunLabel peers are not configured");
  }
  return status === "PAUSED"
    ? "-"
    : nextRunAt == null
      ? intl.formatMessage({
          id: "inbox.automations.nextRun.none",
          defaultMessage: "Not scheduled",
          description:
            "Fallback label when an automation does not have a next run time",
        })
      : peers.ZRl({
          intl,
          timestamp: nextRunAt,
        });
}
