// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle companion `eQc` for schedule helpers.

export type HourMinute = { hour: number; minute: number };

/** Parse `HH:MM` into hour/minute, or null when invalid. */
export function parseHhMm(value: string): HourMinute | null {
  const [hourRaw, minuteRaw] = value.split(":");
  const hour = Number(hourRaw);
  const minute = Number(minuteRaw);
  return !Number.isFinite(hour) || !Number.isFinite(minute)
    ? null
    : { hour, minute };
}
