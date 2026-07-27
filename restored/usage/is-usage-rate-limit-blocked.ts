// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `L_s` / export `Gb` (+ companions `fgs` / `ygs` / `B_s` / `j_s` / local `LZ`).

const CODEX_LIMIT_NAME = "codex";

const USAGE_BASED_PLAN_TYPES = new Set([
  "self_serve_business_usage_based",
  "enterprise_cbp_usage_based",
  "enterprise_cbp_automation",
]);

function normalizeLimitName(value: string | null | undefined): string | null {
  if (value == null) return null;
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[_\s.]+/g, "-");
  return normalized.length > 0 ? normalized : null;
}

function isCodexLimitName(value: string | null | undefined): boolean {
  return value == null ? true : value.trim().toLowerCase() === CODEX_LIMIT_NAME;
}

function rateLimitNameFromUsage(
  usage: {
    rate_limit_name?: string | null;
  } | null,
): string | null {
  if (usage == null) return null;
  const name = usage.rate_limit_name;
  if (name == null) return null;
  const trimmed = name.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function isAdditionalLimitReached(entry: {
  rate_limit?: { limit_reached?: boolean; allowed?: boolean } | null;
}): boolean {
  const rateLimit = entry?.rate_limit;
  return rateLimit?.limit_reached === true || rateLimit?.allowed === false;
}

function isPrimaryRateLimitExhausted(
  usage: {
    rate_limit_reached_type?: unknown;
    rate_limit?: { limit_reached?: boolean; allowed?: boolean } | null;
    plan_type?: string | null;
    credits?: { unlimited?: boolean; has_credits?: boolean } | null;
    spend_control?: { reached?: boolean } | null;
  } | null,
): boolean {
  if (usage == null) return false;
  if (usage.rate_limit_reached_type != null) return true;
  const rateLimit = usage.rate_limit ?? null;
  const usageBasedCreditsExhausted =
    USAGE_BASED_PLAN_TYPES.has(usage.plan_type ?? "") &&
    usage.credits?.unlimited === false &&
    usage.credits?.has_credits === false;
  return !!(
    rateLimit?.limit_reached === true ||
    rateLimit?.allowed === false ||
    usageBasedCreditsExhausted ||
    usage.spend_control?.reached === true
  );
}

/** True when usage is blocked for the active/selected model limit. */
export function isUsageRateLimitBlocked(
  usage: {
    rate_limit_reached_type?: unknown;
    rate_limit_name?: string | null;
    rate_limit?: { limit_reached?: boolean; allowed?: boolean } | null;
    plan_type?: string | null;
    credits?: { unlimited?: boolean; has_credits?: boolean } | null;
    spend_control?: { reached?: boolean } | null;
    additional_rate_limits?: Array<{
      limit_name?: string | null;
      rate_limit?: { limit_reached?: boolean; allowed?: boolean } | null;
    }> | null;
  } | null,
  options: {
    activeLimitName?: string | null;
    selectedModel?: string | null;
  } = {},
): boolean {
  if (usage == null || isPrimaryRateLimitExhausted(usage)) return false;
  const active = options.activeLimitName ?? rateLimitNameFromUsage(usage);
  const additional = usage.additional_rate_limits;
  if (!Array.isArray(additional)) {
    return active != null && !isCodexLimitName(active);
  }
  const selected = normalizeLimitName(options.selectedModel);
  if (
    selected != null &&
    additional.some(
      (entry) =>
        isAdditionalLimitReached(entry) &&
        normalizeLimitName(entry.limit_name) === selected,
    )
  ) {
    return true;
  }
  return active != null && !isCodexLimitName(active);
}
