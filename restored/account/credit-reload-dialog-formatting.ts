// Restored from ref/webview/assets/credit-reload-dialog-formatting-DseKnUsj.js
// Credit reload dialog currency formatting helpers.
// Stage 3: app-initial aliases → semantic modules; Fy ESM init dropped.

import { formatCurrency, type CurrencyIntl } from "../utils/format-currency";
import { trimOptionalString } from "../utils/trim-optional-string";
export type CreditPricingInfo = {
  amountPerCredit: number;
  currencyCode: string;
  minorUnitExponent?: number;
};
type FormatPartsArgs = {
  intl: CurrencyIntl;
  amount: number;
  pricingInfo: CreditPricingInfo;
};
function formatCurrencyParts({
  intl,
  amount,
  pricingInfo,
}: FormatPartsArgs): Intl.NumberFormatPart[] | null {
  return Number.isFinite(amount)
    ? intl.formatters
        .getNumberFormat(intl.locale, {
          style: "currency",
          currency: pricingInfo.currencyCode,
          minimumFractionDigits: pricingInfo.minorUnitExponent ?? undefined,
          maximumFractionDigits: pricingInfo.minorUnitExponent ?? undefined,
        })
        .formatToParts(amount)
    : null;
}
function formatShortfallCost({
  intl,
  creditQuantity,
  pricingInfo,
}: {
  intl: CurrencyIntl;
  creditQuantity: number;
  pricingInfo: CreditPricingInfo;
}): string | null {
  return Number.isFinite(creditQuantity)
    ? formatCurrency({
        intl,
        amount: creditQuantity * pricingInfo.amountPerCredit,
        currencyCode: pricingInfo.currencyCode,
        currencyFractionDigits: pricingInfo.minorUnitExponent,
      })
    : null;
}

/** Bundle export `a` — Rolldown ESM init retained as no-op for graph parity. */
export function initCreditReloadDialogFormatting(): void {}

/** Bundle export `i` — cost to reach recharge target from current balance. */
export function formatCreditReloadShortfallCost({
  intl,
  creditBalance,
  rechargeTarget,
  pricingInfo,
}: {
  intl: CurrencyIntl;
  creditBalance: number | null | undefined;
  rechargeTarget: string | null | undefined;
  pricingInfo: CreditPricingInfo;
}): string | null {
  const target = Number.parseInt(trimOptionalString(rechargeTarget), 10);
  if (!Number.isFinite(target)) return null;
  const balance = Math.max(0, Math.floor(Number(creditBalance ?? 0)));
  const shortfall = Math.max(0, target - balance);
  return shortfall === 0
    ? null
    : formatShortfallCost({
        intl,
        creditQuantity: shortfall,
        pricingInfo,
      });
}

/** Bundle export `n` — amount string without the currency symbol. */
export function formatCreditReloadAmountWithoutSymbol({
  intl,
  creditQuantity,
  pricingInfo,
}: {
  intl: CurrencyIntl;
  creditQuantity: number;
  pricingInfo: CreditPricingInfo;
}): string | null {
  const parts = formatCurrencyParts({
    intl,
    amount: creditQuantity * pricingInfo.amountPerCredit,
    pricingInfo,
  });
  return parts == null
    ? null
    : parts
        .filter((item) => item.type !== "currency")
        .map((item) => item.value)
        .join("")
        .trim();
}

/** Bundle export `r` — full currency string for a credit quantity. */
export function formatCreditReloadCurrency({
  intl,
  creditQuantity,
  pricingInfo,
}: {
  intl: CurrencyIntl;
  creditQuantity: number;
  pricingInfo: CreditPricingInfo;
}): string | null {
  if (!Number.isFinite(creditQuantity)) return null;
  const amount = creditQuantity * pricingInfo.amountPerCredit;
  return formatCurrency({
    intl,
    amount,
    currencyCode: pricingInfo.currencyCode,
    currencyFractionDigits: Number.isInteger(amount)
      ? 0
      : pricingInfo.minorUnitExponent,
  });
}

/** Bundle export `t` — currency symbol for the pricing info locale. */
export function formatCreditReloadCurrencySymbol({
  intl,
  pricingInfo,
}: {
  intl: CurrencyIntl;
  pricingInfo: CreditPricingInfo;
}): string | null {
  return (
    formatCurrencyParts({
      intl,
      amount: 0,
      pricingInfo,
    })?.find((part) => part.type === "currency")?.value ?? null
  );
}
