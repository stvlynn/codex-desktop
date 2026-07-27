// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `TZc`) / export `zu`.

export type FormatAutomationScheduleLabelArgs = {
  rrule?: string | null;
  intl: {
    formatDate: (
      date: Date,
      options: { dateStyle: string; timeStyle: string },
    ) => string;
  };
  fallbackMessage?: unknown;
  nextRunAt?: string | number | Date | null;
};

export type FormatAutomationScheduleLabelPeers = {
  parseRrule: (rrule: string) => { origOptions?: { count?: number } } | null;
  formatRecurrence: (
    parsed: { origOptions?: { count?: number } } | null,
    intl: FormatAutomationScheduleLabelArgs["intl"],
  ) => unknown;
};

let peers: FormatAutomationScheduleLabelPeers | null = null;

/** Wire rrule label peers once companions land. */
export function setFormatAutomationScheduleLabelPeers(
  next: FormatAutomationScheduleLabelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `zu` / internal `TZc`.
 * Format an automation schedule label from rrule / next-run.
 */
export function formatAutomationScheduleLabel(
  args: FormatAutomationScheduleLabelArgs,
): unknown {
  if (peers == null) {
    throw new Error("FormatAutomationScheduleLabel peers are not configured");
  }
  const { rrule, intl, fallbackMessage, nextRunAt = null } = args;
  if (!rrule) return null;
  const parsed = peers.parseRrule(rrule);
  if (parsed?.origOptions?.count === 1 && nextRunAt != null) {
    return intl.formatDate(new Date(nextRunAt), {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }
  return peers.formatRecurrence(parsed, intl) ?? fallbackMessage;
}
