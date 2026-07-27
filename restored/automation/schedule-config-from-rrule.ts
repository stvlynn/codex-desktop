// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `pZc` / export `Wu` (full rrule parse deferred).

import {
  defaultScheduleConfig,
  type ScheduleConfig,
} from "./default-schedule-config";

/** Best-effort schedule config from an rrule string (full `pZc` deferred). */
export function scheduleConfigFromRrule(rrule: string): ScheduleConfig {
  const base = defaultScheduleConfig();
  const trimmed = rrule.trim();
  if (trimmed.length === 0) return base;
  return {
    ...base,
    mode: "custom",
    customRrule: trimmed,
    intervalHours: 1,
    intervalMinutes: null,
    weekdays: [],
    time: "09:00",
  };
}
