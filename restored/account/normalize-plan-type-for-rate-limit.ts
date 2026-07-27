// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `G_s` (companion of `A_s` / export `Kb`).

export type RateLimitPlanType =
  | "free"
  | "plus"
  | "pro"
  | "team"
  | "business"
  | "enterprise"
  | "edu"
  | "unknown";

/** Collapse ChatGPT plan ids into the rate-limit UI plan bucket. */
export function normalizePlanTypeForRateLimit(
  plan: string | null | undefined,
): RateLimitPlanType | null {
  if (!plan) return null;
  switch (plan) {
    case "free":
    case "plus":
    case "pro":
      return plan;
    case "team":
    case "self_serve_business_usage_based":
      return "team";
    case "business":
    case "enterprise_cbp_automation":
    case "enterprise_cbp_usage_based":
      return "business";
    case "enterprise":
    case "edu":
      return plan;
    case "hc":
      return "enterprise";
    case "education":
    case "edu_plus":
    case "edu_pro":
    case "k12":
      return "edu";
    case "go":
    case "guest":
    case "free_workspace":
    case "quorum":
      return "unknown";
    default:
      return "unknown";
  }
}
