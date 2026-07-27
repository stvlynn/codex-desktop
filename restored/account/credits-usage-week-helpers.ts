// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `lQl`/`uQl`/`yQl`/`CQl`/`oQl`/`aQl`/`vQl` — exports `ua`/`pa`/`fa`.

const CREDITS_USAGE_EPOCH_ISO = "2025-07-13";
const CREDITS_USAGE_MAX_WEEK_COLUMNS = 52;
const MS_PER_WEEK = 10080 * 60 * 1e3;

/** Start-of-week (UTC Sunday) ISO date for `yyyy-mm-dd`. */
export function startOfUtcWeekIso(dateIso: string): string {
  const d = new Date(`${dateIso}T00:00:00.000Z`);
  d.setUTCDate(d.getUTCDate() - d.getUTCDay());
  return d.toISOString().slice(0, 10);
}

/** Add UTC days to an ISO date. */
export function addUtcDaysIso(dateIso: string, days: number): string {
  const d = new Date(`${dateIso}T00:00:00.000Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/** Bundle `lQl` / export `ua` — week columns from epoch..today (capped at 52). */
export function creditsUsageWeekColumnCount(todayIso: string): number {
  const todayWeek = new Date(
    `${startOfUtcWeekIso(todayIso)}T00:00:00.000Z`,
  ).getTime();
  const epoch = new Date(`${CREDITS_USAGE_EPOCH_ISO}T00:00:00.000Z`).getTime();
  const weeks = Math.floor((todayWeek - epoch) / MS_PER_WEEK);
  return Math.min(CREDITS_USAGE_MAX_WEEK_COLUMNS, Math.max(1, weeks + 1));
}

/** Bundle `uQl` — ISO date of the first week column. */
export function creditsUsageStartDateIso(todayIso: string): string {
  return addUtcDaysIso(
    startOfUtcWeekIso(todayIso),
    -(creditsUsageWeekColumnCount(todayIso) - 1) * 7,
  );
}

export type DailyCreditsUsage = { date: string; credits: number };

/** Bundle `oQl` / export `pa` — sum credits into week columns. */
export function aggregateCreditsUsageByWeek(args: {
  dailyUsage: readonly DailyCreditsUsage[];
  todayIso: string;
}): number[] {
  const start = creditsUsageStartDateIso(args.todayIso);
  const columns = creditsUsageWeekColumnCount(args.todayIso);
  const totals = Array.from({ length: columns }, () => 0);
  const indexByWeek = new Map(
    Array.from({ length: columns }, (_, i) => [addUtcDaysIso(start, i * 7), i]),
  );
  for (const day of args.dailyUsage) {
    if (day.date > args.todayIso) continue;
    const idx = indexByWeek.get(startOfUtcWeekIso(day.date));
    if (idx != null) totals[idx] += Math.max(0, day.credits);
  }
  return totals;
}

/** Bundle `vQl` — expand daily map into `columnCount * 7` day cells. */
export function buildCreditsDailyUsageSeries(args: {
  dailyUsage: readonly DailyCreditsUsage[];
  todayIso: string;
}): number[] {
  const columnCount = creditsUsageWeekColumnCount(args.todayIso);
  const startDateIso = creditsUsageStartDateIso(args.todayIso);
  const byDate = new Map<string, number>();
  for (const day of args.dailyUsage) {
    if (day.date > args.todayIso) continue;
    byDate.set(day.date, (byDate.get(day.date) ?? 0) + day.credits);
  }
  return Array.from(
    { length: columnCount * 7 },
    (_, i) => byDate.get(addUtcDaysIso(startDateIso, i)) ?? 0,
  );
}

/** Bundle `aQl` / export `fa` — daily series for the credits usage chart. */
export function buildCreditsUsageChartSeries(args: {
  dailyUsage: readonly DailyCreditsUsage[];
  todayIso: string;
}): number[] {
  return buildCreditsDailyUsageSeries(args);
}
