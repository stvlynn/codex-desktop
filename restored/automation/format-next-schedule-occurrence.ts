// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wZc` / export `Ru` — thin facade over schedule→rrule→label pipeline.

import { scheduleConfigToRrule } from "./schedule-config-to-rrule";
import type { ScheduleConfigForRrule } from "./schedule-config-to-rrule";

export type ScheduleOccurrenceIntl = {
  formatMessage: (desc: unknown, values?: Record<string, unknown>) => string;
  formatTime?: (date: Date, opts?: unknown) => string;
};

type OccurrenceFormatter = (
  rruleText: string,
  intl: ScheduleOccurrenceIntl,
) => string | null;

let occurrenceFormatter: OccurrenceFormatter | null = null;

/** Bind the RRULE → human label implementation (bundle `BZc`/`MZc` cluster). */
export function bindScheduleOccurrenceFormatter(formatter: OccurrenceFormatter): void {
  occurrenceFormatter = formatter;
}

/** Format the next occurrence label for a schedule config. */
export function formatNextScheduleOccurrence(config: ScheduleConfigForRrule, intl: ScheduleOccurrenceIntl): string | null {
  if (occurrenceFormatter == null) return null;
  const rrule = scheduleConfigToRrule(config);
  return occurrenceFormatter(rrule, intl);
}
