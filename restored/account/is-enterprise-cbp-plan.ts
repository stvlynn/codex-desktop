// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `f$l` / export `Vi`. Uses `ChatGptPlanId` (`Kx` / `Y7`).

import { ChatGptPlanId } from "./chatgpt-plan-ids";

/** True for enterprise CBP / usage-based / automation plan slugs. */
export function isEnterpriseCbpPlan(planId: string): boolean {
  return (
    planId === ChatGptPlanId.ENTERPRISE_CBP ||
    planId === ChatGptPlanId.ENTERPRISE_CBP_USAGE_BASED ||
    planId === ChatGptPlanId.ENTERPRISE_CBP_AUTOMATION
  );
}
