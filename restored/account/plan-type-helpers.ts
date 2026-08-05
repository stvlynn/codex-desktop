// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Plan classification helpers (`Gx` / `xln` / `bln`).

function isEducationPlan(plan: string | null | undefined): boolean {
  return (
    plan === "education" ||
    plan === "edu_plus" ||
    plan === "edu_pro" ||
    plan === "edu" ||
    plan === "deprecated_edu" ||
    plan === "k12"
  );
}

function isQuorumPlan(plan: string | null | undefined): boolean {
  return plan === "quorum";
}

/** Bundle `Gx` / export `Q7`. */
export function isBusinessPlan(plan: string | null | undefined): boolean {
  return (
    plan === "business" ||
    plan === "enterprise" ||
    plan === "enterprise_cbp_usage_based" ||
    plan === "enterprise_cbp_automation" ||
    plan === "deprecated_enterprise" ||
    plan === "hc" ||
    plan === "finserv" ||
    isEducationPlan(plan) ||
    isQuorumPlan(plan)
  );
}

/** Bundle `xln` / export `Z7`. */
export function isBusinessPlanExcludingEducation(
  plan: string | null | undefined,
): boolean {
  return isBusinessPlan(plan) && !isQuorumPlan(plan);
}

/** Bundle `bln` / export `$7`. */
export function isTeamPlan(plan: string | null | undefined): boolean {
  return plan === "team" || plan === "self_serve_business_usage_based";
}
