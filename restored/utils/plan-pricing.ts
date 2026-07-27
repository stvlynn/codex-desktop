// Restored from ref/webview/assets/plan-pricing-CDdVyvV-.js
// Plan price formatting helpers: plain currency string and parts with symbol fallback.

export type PlanPricingIntl = {
  formatNumber: (value: number, options: Intl.NumberFormatOptions) => string;
  formatNumberToParts: (
    value: number,
    options: Intl.NumberFormatOptions,
  ) => Intl.NumberFormatPart[];
};

export type PlanPricingAmountOptions = {
  intl: PlanPricingIntl;
  amount: number | null | undefined;
  currencyCode: string;
  minorUnitExponent?: number | null;
};

export type PlanPricingPartsResult = {
  currencyCodeLabel: string | null;
  formatted: string;
  parts: Intl.NumberFormatPart[];
};

type CurrencyDisplay = NonNullable<Intl.NumberFormatOptions["currencyDisplay"]>;

function planCurrencyFormatOptions(
  currencyCode: string,
  minorUnitExponent: number | null | undefined,
  currencyDisplay: CurrencyDisplay = "narrowSymbol",
): Intl.NumberFormatOptions {
  return {
    style: "currency",
    currency: currencyCode,
    currencyDisplay,
    // Stage-4 Intl option used by the bundled formatter; not in all lib dom typings.
    trailingZeroDisplay: "stripIfInteger",
    minimumFractionDigits: minorUnitExponent ?? undefined,
    maximumFractionDigits: minorUnitExponent ?? undefined,
  } as Intl.NumberFormatOptions;
}

/**
 * Format a plan amount into currency parts. When the `symbol` display still
 * shows the ISO code, try `narrowSymbol`; if that yields a distinct symbol,
 * use it and clear `currencyCodeLabel`.
 */
export function formatPlanPriceParts(options: PlanPricingAmountOptions): PlanPricingPartsResult | null {
  const { intl, amount, currencyCode, minorUnitExponent } = options;
  if (amount == null) return null;

  let currencyCodeLabel: string | null = currencyCode;
  let parts = intl.formatNumberToParts(
    amount,
    planCurrencyFormatOptions(currencyCode, minorUnitExponent, "symbol"),
  );

  if (
    parts.some(
      ({ type, value }) => type === "currency" && value === currencyCode,
    )
  ) {
    const narrowParts = intl.formatNumberToParts(
      amount,
      planCurrencyFormatOptions(currencyCode, minorUnitExponent),
    );
    if (
      narrowParts.some(
        ({ type, value }) => type === "currency" && value !== currencyCode,
      )
    ) {
      parts = narrowParts;
    } else {
      currencyCodeLabel = null;
    }
  }

  return {
    currencyCodeLabel,
    formatted: parts.map(({ value }) => value).join(""),
    parts,
  };
}

/** No-op Rolldown ESM init retained for graph compatibility. */
export function initPlanPricing(): void {}

/** Format a plan amount as a currency string, or `null` when amount is missing. */
export function formatPlanPrice(options: PlanPricingAmountOptions): string | null {
  const { intl, amount, currencyCode, minorUnitExponent } = options;
  return amount == null
    ? null
    : intl.formatNumber(
        amount,
        planCurrencyFormatOptions(currencyCode, minorUnitExponent),
      );
}
