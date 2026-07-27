// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Resolve auto-reload target balance under volume-discount UX (`oTs` / `vy`).

import {
  CREDIT_RECHARGE_THRESHOLD_DEFAULT,
  getDefaultRechargeTarget,
  type AutoTopUpSettingsLike,
} from "./credits-recharge-defaults";
import { trimOptionalString } from "../utils/trim-optional-string";
import type { DiscountExperience } from "./resolve-discount-experience";

export type ResolveRechargeTargetForDiscountProps = {
  serverState: AutoTopUpSettingsLike & {
    rechargeThreshold?: string | null;
    rechargeTarget?: string | null;
  };
  discountExperience: DiscountExperience;
};

/**
 * Bundle `oTs` / export `vy`.
 * Legacy / active experiences keep the default target; offer experiences bump
 * threshold by the cheapest multi-unit discount tier when no explicit target.
 */
export function resolveRechargeTargetForDiscount({
  serverState,
  discountExperience,
}: ResolveRechargeTargetForDiscountProps): string {
  if (discountExperience.kind === "legacy") {
    return getDefaultRechargeTarget(serverState);
  }

  const threshold =
    trimOptionalString(serverState.rechargeThreshold ?? "") ||
    CREDIT_RECHARGE_THRESHOLD_DEFAULT;
  const explicitTarget = trimOptionalString(serverState.rechargeTarget ?? "");
  if (explicitTarget.length > 0) return explicitTarget;

  if (discountExperience.kind === "active") {
    return getDefaultRechargeTarget(serverState);
  }

  const cheapestMultiUnit = discountExperience.tiers
    .filter((tier) => tier.minimum_quantity > 1)
    .reduce<
      number | null
    >((best, tier) => (best == null ? tier.minimum_quantity : Math.min(best, tier.minimum_quantity)), null);
  const thresholdValue = Number.parseInt(threshold, 10);
  return cheapestMultiUnit != null && Number.isFinite(thresholdValue)
    ? String(thresholdValue + cheapestMultiUnit)
    : getDefaultRechargeTarget(serverState);
}
