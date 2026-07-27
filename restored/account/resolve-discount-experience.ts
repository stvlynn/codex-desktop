// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Volume-discount UX state for the credits / auto-reload modal (`iTs` / `hy`).

import { isVolumeDiscountPolicy } from "./credit-auto-reload-validators";

export type CreditDiscountTier = {
  minimum_quantity: number;
  percent_off: number;
};

export type VolumeDiscountPresentation = "base" | "boost";

export type ActiveVolumeDiscountExperience = {
  presentation: VolumeDiscountPresentation;
  additionalDiscountPercent: number | null;
  tiers: readonly CreditDiscountTier[];
};

/**
 * Built-in active policy tables (`uTs` / export `yy` init).
 * Keys match `volume_discount_v1` / incentive variant.
 */
export const VOLUME_DISCOUNT_ACTIVE_EXPERIENCES: Record<
  string,
  ActiveVolumeDiscountExperience
> = {
  volume_discount_v1: {
    presentation: "base",
    additionalDiscountPercent: null,
    tiers: [
      { minimum_quantity: 2500, percent_off: 10 },
      { minimum_quantity: 5000, percent_off: 20 },
      { minimum_quantity: 25000, percent_off: 30 },
    ],
  },
  volume_discount_with_auto_reload_incentive_v1: {
    presentation: "boost",
    additionalDiscountPercent: 10,
    tiers: [
      { minimum_quantity: 1, percent_off: 10 },
      { minimum_quantity: 2500, percent_off: 20 },
      { minimum_quantity: 5000, percent_off: 30 },
      { minimum_quantity: 25000, percent_off: 40 },
    ],
  },
};

export type CreditDiscountOffer = {
  one_time: { tiers: readonly CreditDiscountTier[] };
  auto_reload?: { tiers: readonly CreditDiscountTier[] } | null;
} | null;

export type DiscountExperience =
  | { kind: "legacy" }
  | ({ kind: "active" } & ActiveVolumeDiscountExperience)
  | {
      kind: "available";
      presentation: VolumeDiscountPresentation;
      additionalDiscountPercent: number | null;
      tiers: readonly CreditDiscountTier[];
      offer: NonNullable<CreditDiscountOffer>;
    };

/** Highest `percent_off` for quantity (`lTs`, co-located). */
function maxDiscountPercentForQuantity(
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

/**
 * Extra auto-reload discount vs one-time at shared quantity breakpoints (`cTs`).
 */
export function additionalAutoReloadDiscountPercent(offer: NonNullable<CreditDiscountOffer>): number | null {
  const quantities = [
    ...new Set([
      1,
      ...offer.one_time.tiers.map((tier) => tier.minimum_quantity),
      ...(offer.auto_reload?.tiers.map((tier) => tier.minimum_quantity) ?? []),
    ]),
  ];

  return quantities.reduce<number | null>((best, quantity) => {
    const delta =
      maxDiscountPercentForQuantity(offer.auto_reload?.tiers ?? [], quantity) -
      maxDiscountPercentForQuantity(offer.one_time.tiers, quantity);
    return delta > 0 ? Math.max(best ?? 0, delta) : best;
  }, null);
}

export type ResolveDiscountExperienceProps = {
  isEnabled: boolean;
  offer: CreditDiscountOffer;
  policy: string | null | undefined;
};

/**
 * Bundle `iTs` / export `hy`.
 * Enabled auto-reload → active table (or legacy); otherwise surface an offer.
 */
export function resolveDiscountExperience({
  isEnabled,
  offer,
  policy,
}: ResolveDiscountExperienceProps): DiscountExperience {
  if (isEnabled) {
    const active =
      isVolumeDiscountPolicy(policy) && policy != null
        ? VOLUME_DISCOUNT_ACTIVE_EXPERIENCES[policy]
        : undefined;
    return active == null ? { kind: "legacy" } : { kind: "active", ...active };
  }

  if (offer?.auto_reload == null) return { kind: "legacy" };

  const additional = additionalAutoReloadDiscountPercent(offer);
  return {
    kind: "available",
    presentation: additional == null ? "base" : "boost",
    additionalDiscountPercent: additional,
    tiers: offer.auto_reload.tiers,
    offer,
  };
}
