// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `p3r` / export `aq`.

import { isBusinessPlan } from "../account/plan-type-helpers";

/** When provider is `other`, pick microsoft vs google from plan type. */
export function resolveOtherAuthProvider(
  provider: string,
  plan: string | null | undefined,
): string {
  return provider === "other"
    ? isBusinessPlan(plan)
      ? "microsoft"
      : "google"
    : provider;
}
