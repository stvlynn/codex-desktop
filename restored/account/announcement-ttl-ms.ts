// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Announcement / NUX TTL by ChatGPT plan (`lme` / export `Hgt`).

const FIVE_HOURS_MS = 300 * 60_000;
const ONE_DAY_MS = 1440 * 60_000;

/** Non-Plus announcement TTL (`pme`). */
export const ANNOUNCEMENT_TTL_MS_DEFAULT = FIVE_HOURS_MS;

/** Plus-plan announcement TTL (`mme`). */
export const ANNOUNCEMENT_TTL_MS_PLUS = ONE_DAY_MS;

/**
 * Bundle `lme` / export `Hgt`.
 * Plus subscribers keep announcements longer (24h vs 5h).
 */
export function getAnnouncementTtlMs(plan: string | null | undefined): number {
  return plan === "plus"
    ? ANNOUNCEMENT_TTL_MS_PLUS
    : ANNOUNCEMENT_TTL_MS_DEFAULT;
}
