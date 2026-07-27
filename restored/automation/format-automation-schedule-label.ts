// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TZc`) / export `zu`.

export type FormatAutomationScheduleLabelPeers = {
  BZc: (...args: unknown[]) => unknown;
  MZc: (...args: unknown[]) => unknown;
  count: (...args: unknown[]) => unknown;
  origOptions: (...args: unknown[]) => unknown;
};
let peers: FormatAutomationScheduleLabelPeers | null = null;

/** Wire formatAutomationScheduleLabel peers once companions land. */
export function setFormatAutomationScheduleLabelPeers(
  next: FormatAutomationScheduleLabelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `zu` / internal `TZc`.
 */
export function formatAutomationScheduleLabel({
  rrule,
  intl,
  fallbackMessage,
  nextRunAt = null,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("formatAutomationScheduleLabel peers are not configured");
  }
  if (!rrule) return null;
  let i = peers.MZc(rrule);
  return i?.origOptions.count === 1 && nextRunAt != null
    ? intl.formatDate(new Date(nextRunAt), {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : (peers.BZc(i, intl) ?? fallbackMessage);
}
