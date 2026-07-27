// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `EZc` companion for export `Iu` (string RRULE, no rrule dep).

import { positiveRoundedIntOrNull } from "../utils/positive-rounded-int-or-null";
import { WEEKDAY_CODES } from "./weekday-codes";

/** Build an hourly RRULE string (BYMINUTE=0, all weekdays). */
export function buildHourlyRrule(intervalHours: unknown): string {
  const interval =
    positiveRoundedIntOrNull(
      typeof intervalHours === "number" ? intervalHours : null,
    ) ?? 1;
  return `FREQ=HOURLY;INTERVAL=${interval};BYMINUTE=0;BYDAY=${WEEKDAY_CODES.join(",")}`;
}
