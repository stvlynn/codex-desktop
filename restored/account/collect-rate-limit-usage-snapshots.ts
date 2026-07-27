// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `M_s` / export `Hb` (+ local `fgs`/`ygs`/`j_s`).

import { buildRateLimitUsageSnapshot } from "./build-rate-limit-usage-snapshot";
import type { RateLimitUsageSnapshot } from "./build-rate-limit-usage-snapshot";
import { trimRateLimitName } from "./trim-rate-limit-name";

type RateLimitPayload = {
  rate_limit?: Parameters<typeof buildRateLimitUsageSnapshot>[0];
  credits?: Parameters<typeof buildRateLimitUsageSnapshot>[1];
  plan_type?: string | null;
  rate_limit_name?: string | null;
  rate_limit_reached_type?: string | null;
  additional_rate_limits?: Array<{
    rate_limit?: Parameters<typeof buildRateLimitUsageSnapshot>[0];
    limit_name?: string | null;
  }> | null;
  spend_control?: { reached?: boolean } | null;
};

function isUsageBasedPlan(plan: string | null | undefined): boolean {
  return (
    plan === "self_serve_business_usage_based" ||
    plan === "enterprise_cbp_usage_based" ||
    plan === "enterprise_cbp_automation"
  );
}

function isPrimaryBlocked(payload: RateLimitPayload): boolean {
  if (payload.rate_limit_reached_type != null) return true;
  const rl = payload.rate_limit as
    | { limit_reached?: boolean; allowed?: boolean }
    | null
    | undefined;
  const outOfCredits =
    isUsageBasedPlan(payload.plan_type) &&
    payload.credits?.unlimited === false &&
    payload.credits?.has_credits === false;
  return Boolean(
    rl?.limit_reached === true ||
    rl?.allowed === false ||
    outOfCredits ||
    payload.spend_control?.reached === true,
  );
}

function isAdditionalBlocked(entry: {
  rate_limit?: { limit_reached?: boolean; allowed?: boolean } | null;
}): boolean {
  const rl = entry.rate_limit;
  return rl?.limit_reached === true || rl?.allowed === false;
}

export type RateLimitUsageEntry = {
  limitName: string | null;
  snapshot: RateLimitUsageSnapshot;
  blocked: boolean;
};

/** Bundle `M_s` / export `Hb`. */
export function collectRateLimitUsageSnapshots(
  payload: RateLimitPayload | null | undefined,
): RateLimitUsageEntry[] {
  if (payload == null) return [];
  const out: RateLimitUsageEntry[] = [];
  const primaryName = trimRateLimitName(payload);
  const primary = buildRateLimitUsageSnapshot(
    payload.rate_limit,
    payload.credits ?? null,
    payload.plan_type,
    primaryName,
  );
  out.push({
    limitName: null,
    snapshot: primary,
    blocked: isPrimaryBlocked(payload),
  });
  const extra = payload.additional_rate_limits;
  if (Array.isArray(extra)) {
    for (const entry of extra) {
      if (!entry?.rate_limit) continue;
      const name = entry.limit_name?.trim() ?? null;
      if (name == null || name.length === 0) continue;
      out.push({
        limitName: name,
        snapshot: buildRateLimitUsageSnapshot(
          entry.rate_limit,
          null,
          payload.plan_type,
          name,
        ),
        blocked: isAdditionalBlocked(entry),
      });
    }
  }
  return out;
}
