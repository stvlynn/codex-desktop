// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `a3` / `l3` companions for schedule defaults.

/** Sunday-first weekday codes used by automation schedules. */
export const WEEKDAY_CODES = [
  "SU",
  "MO",
  "TU",
  "WE",
  "TH",
  "FR",
  "SA",
] as const;

export type WeekdayCode = (typeof WEEKDAY_CODES)[number];

/** Mutable copy of weekday codes (bundle `l3`). */
export function weekdayCodesCopy(): WeekdayCode[] {
  return Array.from(WEEKDAY_CODES);
}
