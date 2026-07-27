// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Yhs` (+ co-located `Xhs`/`Zhs`/`Qhs`/`$hs`) — export `hx`.
// `MZ` = 1440 minutes/day (also exported elsewhere as max-content-width px value).

const MINUTES_PER_DAY = 1440;

/** Seven-day rate-limit window length in minutes (`Yhs` / `hx`). */
export const RATE_LIMIT_WEEK_WINDOW_MINUTES = 7 * MINUTES_PER_DAY;

/** ~30-day window minutes (`Xhs`). */
export const RATE_LIMIT_MONTH_WINDOW_MINUTES = 30 * MINUTES_PER_DAY;

/** 365-day window minutes (`Zhs`). */
export const RATE_LIMIT_YEAR_WINDOW_MINUTES = 365 * MINUTES_PER_DAY;

/** 60-day window minutes (`Qhs`). */
export const RATE_LIMIT_SIXTY_DAY_WINDOW_MINUTES = 60 * MINUTES_PER_DAY;

/** Used% threshold before showing a rate-limit warning (`$hs`). */
export const RATE_LIMIT_WARNING_USED_PERCENT = 90;
