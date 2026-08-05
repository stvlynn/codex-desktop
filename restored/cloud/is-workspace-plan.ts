// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Plan helpers used when resolving Codex Cloud access (`Gx` / related checks).

export type WorkspacePlan =
  | "business"
  | "enterprise"
  | "enterprise_cbp_usage_based"
  | "enterprise_cbp_automation"
  | "deprecated_enterprise"
  | "hc"
  | "finserv"
  | (string & {});

/** True for business / enterprise-style plans that gate workspace Codex access (`Gx`). */
export function isWorkspacePlan(
  plan: WorkspacePlan | null | undefined,
): boolean {
  return (
    plan === "business" ||
    plan === "enterprise" ||
    plan === "enterprise_cbp_usage_based" ||
    plan === "enterprise_cbp_automation" ||
    plan === "deprecated_enterprise" ||
    plan === "hc" ||
    plan === "finserv" ||
    plan === "education" ||
    plan === "edu_plus" ||
    plan === "edu_pro" ||
    plan === "edu" ||
    plan === "deprecated_edu" ||
    plan === "k12" ||
    plan === "quorum"
  );
}
