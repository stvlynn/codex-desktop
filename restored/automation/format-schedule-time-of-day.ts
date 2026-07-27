// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `I$c` / export `su`.

import { parseHhMm } from "./parse-hh-mm";

/** Format a stored `HH:MM` schedule string with the active locale. */
export function formatScheduleTimeOfDay(
  time: string,
  intl: {
    formatTime: (date: Date, options: Intl.DateTimeFormatOptions) => string;
  },
): string {
  const parsed = parseHhMm(time);
  return parsed
    ? intl.formatTime(new Date(2024, 0, 1, parsed.hour, parsed.minute), {
        hour: "numeric",
        minute: "2-digit",
      })
    : time;
}
