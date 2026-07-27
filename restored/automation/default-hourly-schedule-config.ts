// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `fZc` / export `Lu`.

import { defaultDailyScheduleConfig } from "./default-daily-schedule-config";
import { weekdayCodesCopy } from "./weekday-codes";

/** Default hourly schedule (30-minute interval). */
export function defaultHourlyScheduleConfig(): {
  mode: "hourly";
  intervalHours: number;
  intervalMinutes: number;
  weekdays: string[];
  time: string;
  customRrule: string;
} {
  return {
    ...defaultDailyScheduleConfig(),
    mode: "hourly",
    intervalHours: 1,
    intervalMinutes: 30,
    weekdays: weekdayCodesCopy(),
    customRrule: "",
  };
}
