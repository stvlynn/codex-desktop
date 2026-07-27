// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `dQl` / export `ca` (`CQl(uQl(t), e)`).

import {
  addUtcDaysIso,
  creditsUsageStartDateIso,
} from "./credits-usage-week-helpers";

/** Add UTC days to the credits-usage chart start date for `todayIso`. */
export function addUtcDaysToCreditsUsageStart(
  days: number,
  todayIso: string,
): string {
  return addUtcDaysIso(creditsUsageStartDateIso(todayIso), days);
}
