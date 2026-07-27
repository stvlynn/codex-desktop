// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `xZc`) / export `Uu`.

export type NormalizeCronScheduleFieldsPeers = {
  parseSchedule: (input: unknown) => {
    hasMultipleTimeValues?: boolean;
    interval: number;
    weekdays: unknown;
    time: unknown;
    minute?: number;
    freq: unknown;
    origOptions: Record<string, unknown>;
  } | null;
  freq: {
    HOURLY: unknown;
    DAILY: unknown;
    WEEKLY: unknown;
    MONTHLY: unknown;
    YEARLY: unknown;
  };
  matchesHourly: (parsed: unknown, guard: unknown) => boolean;
  matchesDaily: (parsed: unknown, guard: unknown) => boolean;
  matchesWeekly: (parsed: unknown, guard: unknown) => boolean;
  matchesMonthly: (parsed: unknown, guard: unknown) => boolean;
  matchesYearly: (parsed: unknown, guard: unknown) => boolean;
  byMinuteOk: (value: unknown) => unknown;
  weekdaysOk: (weekdays: unknown, guard: unknown) => boolean;
  singleTimeOk: (parsed: unknown) => boolean;
  monthDaysOk: (days: unknown) => boolean;
  normalizeMonthDays: (value: unknown) => number[];
  normalizeMonths: (value: unknown) => number[];
  hourlyGuard: unknown;
  dailyGuard: unknown;
  weeklyGuard: unknown;
  monthlyGuard: unknown;
  yearlyGuard: unknown;
  weekdayGuard: unknown;
  hasComplexWeekday: (value: unknown) => boolean;
};

let peers: NormalizeCronScheduleFieldsPeers | null = null;

/** Wire cron schedule normalize peers once companions land. */
export function setNormalizeCronScheduleFieldsPeers(
  next: NormalizeCronScheduleFieldsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Uu` / internal `xZc`.
 * Normalize a cron schedule into a single-frequency draft shape.
 */
export function normalizeCronScheduleFields(
  input: unknown,
): Record<string, unknown> | null {
  if (peers == null) {
    throw new Error("NormalizeCronScheduleFields peers are not configured");
  }
  const parsed = peers.parseSchedule(input);
  if (parsed == null || parsed.hasMultipleTimeValues) return null;
  const base = {
    interval: Math.max(1, Math.round(parsed.interval)),
    weekdays: parsed.weekdays,
    month: 1,
    monthDays: [1],
    time: parsed.time,
    minute: parsed.minute ?? 0,
  };
  switch (parsed.freq) {
    case peers.freq.HOURLY:
      return peers.matchesHourly(parsed, peers.hourlyGuard) &&
        peers.byMinuteOk(parsed.origOptions.byminute) != null &&
        peers.weekdaysOk(parsed.weekdays, peers.weekdayGuard)
        ? { ...base, frequency: "hourly" }
        : null;
    case peers.freq.DAILY:
      return peers.matchesDaily(parsed, peers.dailyGuard) &&
        peers.singleTimeOk(parsed)
        ? { ...base, frequency: "daily" }
        : null;
    case peers.freq.WEEKLY:
      return peers.matchesWeekly(parsed, peers.weeklyGuard) &&
        peers.singleTimeOk(parsed) &&
        parsed.origOptions.byweekday != null &&
        !peers.hasComplexWeekday(parsed.origOptions.byweekday)
        ? { ...base, frequency: "weekly" }
        : null;
    case peers.freq.MONTHLY: {
      const days = peers.normalizeMonthDays(parsed.origOptions.bymonthday);
      return peers.matchesMonthly(parsed, peers.monthlyGuard) &&
        peers.singleTimeOk(parsed) &&
        peers.monthDaysOk(days)
        ? { ...base, frequency: "monthly", monthDays: days }
        : null;
    }
    case peers.freq.YEARLY: {
      const months = peers.normalizeMonths(parsed.origOptions.bymonth);
      const days = peers.normalizeMonthDays(parsed.origOptions.bymonthday);
      return peers.matchesYearly(parsed, peers.yearlyGuard) &&
        peers.singleTimeOk(parsed) &&
        months.length === 1 &&
        months[0] != null &&
        peers.monthDaysOk(days)
        ? { ...base, frequency: "yearly", month: months[0], monthDays: days }
        : null;
    }
    default:
      return null;
  }
}
