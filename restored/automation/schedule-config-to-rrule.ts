// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `vZc` / export `Iu`.

import { buildHourlyRrule } from "./build-hourly-rrule";
import { buildMinutelyRrule } from "./build-minutely-rrule";
import { buildWeeklyRrule } from "./build-weekly-rrule";
import { firstWeekdayOrMonday } from "./first-weekday-or-monday";
import { weekdayCodesCopy } from "./weekday-codes";

const WEEKDAY_CODES_MO_FR = ["MO", "TU", "WE", "TH", "FR"] as const;

export type ScheduleConfigForRrule = {
  mode: "hourly" | "daily" | "weekdays" | "weekly" | "custom";
  intervalHours?: number | null;
  intervalMinutes?: number | null;
  weekdays?: string[];
  time?: string;
  customRrule?: string;
};

/** Convert a schedule config object into an RRULE string. */
export function scheduleConfigToRrule(config: ScheduleConfigForRrule): string {
  switch (config.mode) {
    case "hourly":
      return config.intervalMinutes == null
        ? buildHourlyRrule(config.intervalHours)
        : buildMinutelyRrule(config.intervalMinutes);
    case "daily":
      return buildWeeklyRrule({
        time: config.time ?? "09:00",
        weekdays: weekdayCodesCopy(),
      });
    case "weekdays":
      return buildWeeklyRrule({
        time: config.time ?? "09:00",
        weekdays: Array.from(WEEKDAY_CODES_MO_FR),
      });
    case "weekly":
      return buildWeeklyRrule({
        time: config.time ?? "09:00",
        weekdays: [firstWeekdayOrMonday(config.weekdays ?? [])],
      });
    case "custom":
      return (config.customRrule ?? "").trim();
  }
}
