// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `dZc` companion for export `Wu` (partial — rrule parse deferred).

export const DEFAULT_SCHEDULE_WEEKDAYS = [
  "MO",
  "TU",
  "WE",
  "TH",
  "FR",
  "SA",
  "SU",
] as const;
export const DEFAULT_SCHEDULE_TIME = "09:00";

export type ScheduleConfig = {
  mode: "hourly" | "daily" | "weekdays" | "weekly" | "custom";
  intervalHours: number | null;
  intervalMinutes: number | null;
  weekdays: readonly string[];
  time: string;
  customRrule: string;
};

/** Default daily schedule config. */
export function defaultScheduleConfig(): ScheduleConfig {
  return {
    mode: "daily",
    intervalHours: 24,
    intervalMinutes: null,
    weekdays: [...DEFAULT_SCHEDULE_WEEKDAYS],
    time: DEFAULT_SCHEDULE_TIME,
    customRrule: "",
  };
}
