// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `AZ` / export `gx`.

const SECONDS_PER_DAY = 60 * 1440;

/** Format an upcoming instant: relative now, short time today, else month/day. */
export function formatUpcomingLocalDatetime(
  date: Date,
  now: Date = new Date(),
): string {
  const deltaSeconds = Math.floor((date.getTime() - now.getTime()) / 1000);
  if (deltaSeconds <= 0) {
    return new Intl.RelativeTimeFormat(undefined, { numeric: "auto" }).format(
      0,
      "second",
    );
  }
  if (deltaSeconds < SECONDS_PER_DAY) {
    return new Intl.DateTimeFormat(undefined, { timeStyle: "short" }).format(
      date,
    );
  }
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
  }).format(date);
}
