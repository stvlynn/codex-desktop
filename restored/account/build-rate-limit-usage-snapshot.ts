// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `A_s`/`U_s`/`W_s`/`D_s` — export `Kb`.

import { normalizePlanTypeForRateLimit } from "./normalize-plan-type-for-rate-limit";
import type { RateLimitPlanType } from "./normalize-plan-type-for-rate-limit";

const SECONDS_PER_MINUTE = 60;

export type RateLimitWindowSnapshot = {
  usedPercent: number;
  windowDurationMins: number | null;
  resetsAt: string | null;
};

export type CreditsSnapshot = {
  hasCredits: boolean;
  unlimited: boolean;
  balance: number | null;
};

export type RateLimitUsageSnapshot = {
  limitId: null;
  limitName: string | null;
  primary: RateLimitWindowSnapshot | null;
  secondary: RateLimitWindowSnapshot | null;
  credits: CreditsSnapshot | null;
  individualLimit: null;
  spendControlReached: null;
  planType: RateLimitPlanType | null;
  rateLimitReachedType: null;
};

type RawWindow = {
  used_percent?: number | null;
  limit_window_seconds?: number | null;
  reset_at?: string | null;
} | null;

type RawCredits = {
  has_credits?: boolean;
  unlimited?: boolean;
  balance?: number | null;
} | null;

function normalizeWindow(raw: RawWindow): RateLimitWindowSnapshot | null {
  if (raw == null) return null;
  return {
    usedPercent: raw.used_percent ?? 0,
    windowDurationMins:
      raw.limit_window_seconds == null
        ? null
        : raw.limit_window_seconds / SECONDS_PER_MINUTE,
    resetsAt: raw.reset_at ?? null,
  };
}

function normalizeCredits(raw: RawCredits): CreditsSnapshot | null {
  if (!raw) return null;
  return {
    hasCredits: Boolean(raw.has_credits),
    unlimited: Boolean(raw.unlimited),
    balance: raw.balance ?? null,
  };
}

/** Bundle `A_s` / export `Kb`. */
export function buildRateLimitUsageSnapshot(
  rateLimit:
    | {
        primary_window?: RawWindow;
        secondary_window?: RawWindow;
      }
    | null
    | undefined,
  credits: RawCredits,
  planType: string | null | undefined,
  limitName: string | null = null,
): RateLimitUsageSnapshot {
  return {
    limitId: null,
    limitName,
    primary: normalizeWindow(rateLimit?.primary_window ?? null),
    secondary: normalizeWindow(rateLimit?.secondary_window ?? null),
    credits: normalizeCredits(credits),
    individualLimit: null,
    spendControlReached: null,
    planType: normalizePlanTypeForRateLimit(planType),
    rateLimitReachedType: null,
  };
}
