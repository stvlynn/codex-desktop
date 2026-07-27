// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Compare current vs target ChatGPT plans and resolve checkout / downgrade URLs.

import { ChatGptPlanId } from "./chatgpt-plan-ids";
import {
  CHATGPT_COM_CODEX_PURCHASE_GO_URL,
  CHATGPT_COM_CODEX_PURCHASE_PLUS_URL,
  CHATGPT_COM_CODEX_PURCHASE_PRO5X_URL,
  CHATGPT_COM_CODEX_PURCHASE_PRO_URL,
} from "../docs/chatgpt-plan-purchase-urls";

/** Rank used by `tEs` / export `$v` to decide upgrade vs downgrade. */
const PLAN_RANK: Record<string, number> = {
  [ChatGptPlanId.FREE]: 0,
  [ChatGptPlanId.GO]: 1,
  [ChatGptPlanId.PLUS]: 2,
  [ChatGptPlanId.PROLITE]: 3,
  [ChatGptPlanId.PRO]: 4,
};

export type PlanChangeDirection = "current" | "upgrade" | "downgrade";

export type PlanChangeArgs = {
  currentPlan: string;
  targetPlan: string;
};

/** Bundle `tEs` / export `$v`. */
export function getPlanChangeDirection({
  currentPlan,
  targetPlan,
}: PlanChangeArgs): PlanChangeDirection {
  if (currentPlan === targetPlan) return "current";
  return (PLAN_RANK[targetPlan] ?? 0) < (PLAN_RANK[currentPlan] ?? 0)
    ? "downgrade"
    : "upgrade";
}

/** Bundle `nEs` / export `ty`. */
export function resolvePlanChangeUrl({
  currentPlan,
  targetPlan,
}: PlanChangeArgs): string | null {
  const direction = getPlanChangeDirection({ currentPlan, targetPlan });
  if (direction === "current") return null;
  if (direction === "downgrade") {
    const slug = targetPlan === ChatGptPlanId.PROLITE ? "pro5x" : targetPlan;
    return `https://chatgpt.com/codex/downgrade/${slug}`;
  }
  if (targetPlan === ChatGptPlanId.PLUS)
    return CHATGPT_COM_CODEX_PURCHASE_PLUS_URL;
  if (targetPlan === ChatGptPlanId.GO) return CHATGPT_COM_CODEX_PURCHASE_GO_URL;
  if (targetPlan === ChatGptPlanId.PROLITE) {
    return CHATGPT_COM_CODEX_PURCHASE_PRO5X_URL;
  }
  return CHATGPT_COM_CODEX_PURCHASE_PRO_URL;
}
