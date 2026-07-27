// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `jZc` companion for export `Iu`.

import { parseScheduleTime } from "./parse-schedule-time";
import { uniqueWeekdaysSundayFirst } from "./unique-weekdays-sunday-first";

/** Build a weekly BYDAY/BYHOUR/BYMINUTE RRULE string. */
export function buildWeeklyRrule(input: {
  time: string;
  weekdays: string[];
}): string {
  const parsed = parseScheduleTime(input.time) ?? parseScheduleTime("09:00");
  if (parsed == null) return "";
  const days = uniqueWeekdaysSundayFirst(input.weekdays);
  return `FREQ=WEEKLY;BYDAY=${days.join(",")};BYHOUR=${parsed.hour};BYMINUTE=${parsed.minute}`;
}
