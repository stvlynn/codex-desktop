// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `DZc` companion for export `Iu`.

import { positiveRoundedIntOrNull } from "../utils/positive-rounded-int-or-null";

/** Build a minutely RRULE string. */
export function buildMinutelyRrule(intervalMinutes: unknown): string {
  const interval =
    positiveRoundedIntOrNull(
      typeof intervalMinutes === "number" ? intervalMinutes : null,
    ) ?? 30;
  return `FREQ=MINUTELY;INTERVAL=${interval}`;
}
