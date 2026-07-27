// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$Zc` / `CZc` companions for weekly schedule mode.

import { uniqueWeekdaysSundayFirst } from "./unique-weekdays-sunday-first";
import { weekdayCodesCopy } from "./weekday-codes";

/** First weekday from the list, else Monday. */
export function firstWeekdayOrMonday(weekdays: string[]): string {
  const list =
    weekdays.length > 0
      ? uniqueWeekdaysSundayFirst(weekdays)
      : weekdayCodesCopy();
  return list[0] ?? "MO";
}
