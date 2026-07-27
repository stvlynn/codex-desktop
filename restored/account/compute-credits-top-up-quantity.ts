// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Pick a one-time credit purchase quantity from discount tiers (`aTs` / `gy`).

import { trimOptionalString } from "../utils/trim-optional-string";

export type CreditDiscountTier = {
  minimum_quantity: number;
  percent_off: number;
};

/**
 * Highest `percent_off` among tiers whose `minimum_quantity` is <= `quantity`
 * (`lTs`, co-located helper).
 */
export function maxDiscountPercentForQuantity(
  tiers: readonly CreditDiscountTier[],
  quantity: number,
): number {
  return tiers.reduce(
    (best, tier) =>
      quantity >= tier.minimum_quantity
        ? Math.max(best, tier.percent_off)
        : best,
    0,
  );
}

export type ComputeCreditsTopUpQuantityProps = {
  tiers: readonly CreditDiscountTier[];
  targetBalance: string;
  minimumBalance: string;
};

/**
 * Bundle `aTs` / export `gy`.
 * Returns the delta (`target - minimum`) when it unlocks a positive discount
 * tier; otherwise `null`.
 */
export function computeCreditsTopUpQuantity({
  tiers,
  targetBalance,
  minimumBalance,
}: ComputeCreditsTopUpQuantityProps): number | null {
  const delta =
    Number.parseInt(trimOptionalString(targetBalance), 10) -
    Number.parseInt(trimOptionalString(minimumBalance), 10);
  if (!Number.isFinite(delta) || delta <= 0) return null;
  const percentOff = maxDiscountPercentForQuantity(tiers, delta);
  return percentOff > 0 ? delta : null;
}
