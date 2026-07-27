// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Personal paid-plan predicate used by upgrade / checkout flows (`$Ts` / export `ry`).

import { ChatGptPlanId } from "./chatgpt-plan-ids";

/** Bundle `$Ts` / export `ry`. */
export function isPaidPersonalPlan(plan: string | null | undefined): boolean {
  return (
    plan === ChatGptPlanId.GO ||
    plan === ChatGptPlanId.PLUS ||
    plan === ChatGptPlanId.PROLITE ||
    plan === ChatGptPlanId.PRO
  );
}
