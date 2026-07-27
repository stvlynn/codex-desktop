// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `gQl` / `sQl` / export `da`.

import { aggregateCreditsUsageByWeek } from "./credits-usage-week-helpers";

/** Prefix-sum of weekly credit totals. */
export function cumulativeSum(values: readonly number[]): number[] {
  return values.reduce<number[]>((acc, value) => {
    acc.push((acc.at(-1) ?? 0) + value);
    return acc;
  }, []);
}

/** Cumulative weekly credits series for the usage chart. */
export function cumulativeCreditsUsageByWeek(args: {
  dailyUsage: readonly { date: string; credits: number }[];
  todayIso: string;
}): number[] {
  return cumulativeSum(aggregateCreditsUsageByWeek(args));
}
