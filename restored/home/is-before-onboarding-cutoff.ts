// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Cutoff used to decide whether a unix-seconds timestamp is "before" onboarding era.

/** Exclusive upper bound: 2026-04-30 local midnight (month is 0-indexed in source). */
export const ONBOARDING_CUTOFF_TIMESTAMP_MS = new Date(2026, 3, 30).getTime();

/**
 * True when `unixSeconds * 1000` is strictly before {@link ONBOARDING_CUTOFF_TIMESTAMP_MS}.
 */
export function isBeforeOnboardingCutoff(
  unixSeconds: number | null | undefined,
): boolean {
  return (
    unixSeconds != null && unixSeconds * 1000 < ONBOARDING_CUTOFF_TIMESTAMP_MS
  );
}
