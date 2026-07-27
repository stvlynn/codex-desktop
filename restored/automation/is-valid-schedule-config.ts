// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `yZc` / export `Vu`.

import { parseHhMm } from "./parse-hh-mm";
import { positiveIntOrNull } from "./positive-int-or-null";

export type ScheduleConfig = {
  mode: "hourly" | "daily" | "weekdays" | "weekly" | "custom";
  intervalHours?: number | null;
  intervalMinutes?: number | null;
  time?: string;
  customRrule?: string;
};

/** True when a schedule config has the fields required for its mode. */
export function isValidScheduleConfig(config: ScheduleConfig): boolean {
  switch (config.mode) {
    case "hourly":
      return config.intervalMinutes == null
        ? positiveIntOrNull(config.intervalHours as number) != null
        : positiveIntOrNull(config.intervalMinutes) != null;
    case "daily":
    case "weekdays":
    case "weekly":
      return parseHhMm(config.time ?? "") != null;
    case "custom":
      return (config.customRrule?.trim() ?? "").length > 0;
  }
}
