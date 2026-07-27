// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$Xc` companion for schedule rrule building.

import { WEEKDAY_CODES, type WeekdayCode } from "./weekday-codes";

/** Dedupe weekdays and sort Sunday-first. */
export function uniqueWeekdaysSundayFirst(weekdays: string[]): WeekdayCode[] {
  const rank = new Map(WEEKDAY_CODES.map((code, index) => [code, index]));
  return [...new Set(weekdays)].sort(
    (a, b) =>
      (rank.get(a as WeekdayCode) ?? 0) - (rank.get(b as WeekdayCode) ?? 0),
  ) as WeekdayCode[];
}
