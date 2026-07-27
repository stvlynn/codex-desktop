// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `eQc` companion for weekly rrule building.

/** Parse `HH:MM` into hour/minute parts. */
export function parseScheduleTime(value: string): { hour: number; minute: number } | null {
  const [hours, minutes] = value.split(":");
  const hour = Number(hours);
  const minute = Number(minutes);
  return !Number.isFinite(hour) || !Number.isFinite(minute)
    ? null
    : { hour, minute };
}
