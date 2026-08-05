// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Map a personal ChatGPT plan to upgrade-modal display / CTA (`sQ` / `ey`).

import { ChatGptPlanId } from "./chatgpt-plan-ids";
import { isPaidPersonalPlan } from "./is-paid-personal-plan";

export type PersonalPlanUpgradeCta = "upgrade" | "view";

export type PersonalPlanUpgradeDisplay =
  | {
      displayPlan: "free";
      pricePlan: typeof ChatGptPlanId.FREE;
      cta: "upgrade";
    }
  | { displayPlan: "go"; pricePlan: typeof ChatGptPlanId.GO; cta: "upgrade" }
  | { displayPlan: "plus"; pricePlan: typeof ChatGptPlanId.PLUS; cta: "view" }
  | {
      displayPlan: "pro";
      pricePlan: typeof ChatGptPlanId.PROLITE | typeof ChatGptPlanId.PRO;
      cta: "view";
    };

/** Bundle `rEs` (co-located with `sQ`). */
export function isPersonalChatGptPlan(
  plan: string | null | undefined,
): plan is
  | typeof ChatGptPlanId.FREE
  | typeof ChatGptPlanId.GO
  | typeof ChatGptPlanId.PLUS
  | typeof ChatGptPlanId.PROLITE
  | typeof ChatGptPlanId.PRO {
  return (
    plan === ChatGptPlanId.FREE ||
    plan === ChatGptPlanId.GO ||
    plan === ChatGptPlanId.PLUS ||
    plan === ChatGptPlanId.PROLITE ||
    plan === ChatGptPlanId.PRO
  );
}

/** Bundle `eEs` (co-located) — paid personal excluding Go. */
export function isPaidPersonalPlanExcludingGo(
  plan: string | null | undefined,
): boolean {
  return isPaidPersonalPlan(plan) && plan !== ChatGptPlanId.GO;
}

/**
 * Bundle `sQ` / export `ey`.
 * Returns null for non-personal plans; otherwise display slug + CTA kind.
 */
export function resolvePlanUpgradeCta(
  plan: string | null | undefined,
): PersonalPlanUpgradeDisplay | null {
  if (!isPersonalChatGptPlan(plan)) return null;
  switch (plan) {
    case ChatGptPlanId.FREE:
      return { displayPlan: "free", pricePlan: plan, cta: "upgrade" };
    case ChatGptPlanId.GO:
      return { displayPlan: "go", pricePlan: plan, cta: "upgrade" };
    case ChatGptPlanId.PLUS:
      return { displayPlan: "plus", pricePlan: plan, cta: "view" };
    case ChatGptPlanId.PROLITE:
    case ChatGptPlanId.PRO:
      return { displayPlan: "pro", pricePlan: plan, cta: "view" };
  }
}
