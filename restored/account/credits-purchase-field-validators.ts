// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// One-time credit purchase field parsers / validators (`Gws`–`Jws` / `Ny`–`Oy`).

import { trimOptionalString } from "../utils/trim-optional-string";

/** Minimum spend in minor currency units used by `Gws` (`eTs` / export `Fy`). */
export const CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS = 1000;

/** Credit quantity snaps to multiples of 250 (`Qws` step / `Gws` floor). */
export const CREDIT_PURCHASE_QUANTITY_INCREMENT = 250;

export type CreditPricingInfo = {
  amountPerCredit: number;
  minorUnitExponent?: number | null;
} | null;

type ParsedWholeNumber =
  | { kind: "missing" }
  | { kind: "invalid" }
  | { kind: "valid"; value: number };

function parseWholeNumber(value: string | null | undefined): ParsedWholeNumber {
  const trimmed = trimOptionalString(value);
  if (trimmed.length === 0) return { kind: "missing" };
  if (!/^\d+$/.test(trimmed)) return { kind: "invalid" };
  return { kind: "valid", value: Number.parseInt(trimmed, 10) };
}

/** Bundle `Qws` (co-located helper). */
export function ceilToIncrement(value: number, increment: number): number {
  return Math.ceil(value / increment) * increment;
}

/**
 * Bundle `Gws` / export `Ny`.
 * Minimum purchasable credit quantity from pricing (floor 250, snapped).
 */
export function getCreditsPurchaseMinimumQuantity(
  pricingInfo: CreditPricingInfo,
): number {
  if (
    pricingInfo == null ||
    pricingInfo.minorUnitExponent == null ||
    pricingInfo.amountPerCredit <= 0
  ) {
    return CREDIT_PURCHASE_QUANTITY_INCREMENT;
  }

  const minorUnitsPerCredit =
    pricingInfo.amountPerCredit * 10 ** pricingInfo.minorUnitExponent;
  const raw = Math.ceil(
    CREDIT_PURCHASE_MIN_SPEND_MINOR_UNITS / minorUnitsPerCredit,
  );
  return Math.max(
    CREDIT_PURCHASE_QUANTITY_INCREMENT,
    ceilToIncrement(raw, CREDIT_PURCHASE_QUANTITY_INCREMENT),
  );
}

export type CreditsPurchaseQuantityError =
  | "missing"
  | "not-whole-number"
  | "below-minimum"
  | "invalid-increment";

/**
 * Bundle `Kws` / export `Py`.
 * Validates a whole-number credit purchase quantity against pricing minimums.
 */
export function validateCreditsPurchaseQuantity({
  value,
  pricingInfo,
}: {
  value: string | null | undefined;
  pricingInfo: CreditPricingInfo;
}): CreditsPurchaseQuantityError | null {
  const parsed = parseWholeNumber(value);
  switch (parsed.kind) {
    case "missing":
      return "missing";
    case "invalid":
      return "not-whole-number";
    case "valid": {
      const minimum = getCreditsPurchaseMinimumQuantity(pricingInfo);
      if (parsed.value < minimum) return "below-minimum";
      return parsed.value % CREDIT_PURCHASE_QUANTITY_INCREMENT === 0
        ? null
        : "invalid-increment";
    }
  }
}

export type ParseFormattedCreditsProps = {
  value: string;
  pricingInfo: CreditPricingInfo;
  groupSeparator: string;
  decimalSeparator: string;
};

/**
 * Bundle `Jws` / export `Oy`.
 * Parse a localized currency-ish string into a credit quantity (number).
 */
export function parseFormattedCreditsQuantity({
  value,
  pricingInfo,
  groupSeparator,
  decimalSeparator,
}: ParseFormattedCreditsProps): number | null {
  const normalized = trimOptionalString(value)
    .replaceAll(groupSeparator, "")
    .replaceAll(decimalSeparator, ".")
    .replace(/[^\d.]/g, "");
  if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(normalized)) return null;

  const amount = Number.parseFloat(normalized);
  if (
    pricingInfo == null ||
    pricingInfo.amountPerCredit <= 0 ||
    !Number.isFinite(amount) ||
    amount <= 0
  ) {
    return null;
  }

  return amount / pricingInfo.amountPerCredit;
}

/**
 * Bundle `qws` / export `Ey`.
 * Like `parseFormattedCreditsQuantity`, but only when the result is integral.
 */
export function parseFormattedCreditsQuantityString(
  props: ParseFormattedCreditsProps,
): string | null {
  const quantity = parseFormattedCreditsQuantity(props);
  if (quantity == null) return null;
  const rounded = Math.round(quantity);
  return Math.abs(quantity - rounded) > 1e-6 ? null : String(rounded);
}
