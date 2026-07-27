// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `dZc` companion for `Lu`.

import { weekdayCodesCopy } from "./weekday-codes";

/** Default daily schedule config. */
export function defaultDailyScheduleConfig(): {
  mode: "daily";
  intervalHours: number;
  intervalMinutes: null;
  weekdays: string[];
  time: string;
  customRrule: string;
} {
  return {
    mode: "daily",
    intervalHours: 24,
    intervalMinutes: null,
    weekdays: weekdayCodesCopy(),
    time: "09:00",
    customRrule: "",
  };
}
