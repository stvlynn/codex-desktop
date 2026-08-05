// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Credit auto-reload form validation + discount policy helpers.

import { trimOptionalString } from "../utils/trim-optional-string";

type ParsedWholeNumber =
  | { kind: "missing" }
  | { kind: "invalid" }
  | { kind: "valid"; value: number };

/** Bundle `aQ` (co-located with credit validators). */
function parseWholeNumber(value: string | null | undefined): ParsedWholeNumber {
  const trimmed = trimOptionalString(value);
  if (trimmed.length === 0) return { kind: "missing" };
  if (!/^\d+$/.test(trimmed)) return { kind: "invalid" };
  return { kind: "valid", value: Number.parseInt(trimmed, 10) };
}

export type AutoTopUpSettingsLike = {
  isEnabled: boolean;
  rechargeMonthlyLimit?: string | null;
  autoReloadCreditDiscountPolicy?: string | null;
};

/**
 * Bundle `Hws` / export `Ay`.
 * Empty when auto-reload is off; otherwise the trimmed monthly limit (or ``).
 */
export function getRechargeMonthlyLimitInput(
  settings: AutoTopUpSettingsLike,
): string {
  return settings.isEnabled
    ? settings.rechargeMonthlyLimit == null
      ? ""
      : trimOptionalString(settings.rechargeMonthlyLimit)
    : "";
}

export type CreditBalanceFieldError =
  | "missing"
  | "not-whole-number"
  | "below-minimum"
  | "target-balance-below-minimum";

/** Minimum credit delta / balance used by validators (`125`). */
export const CREDIT_BALANCE_MINIMUM = 125;

/**
 * Bundle `Uws` / export `Dy`.
 * Validates a single credit balance field (target / threshold).
 */
export function validateCreditBalanceField(
  value: string | null | undefined,
): CreditBalanceFieldError | null {
  const parsed = parseWholeNumber(value);
  switch (parsed.kind) {
    case "missing":
      return "missing";
    case "invalid":
      return "not-whole-number";
    case "valid":
      return parsed.value < CREDIT_BALANCE_MINIMUM ? "below-minimum" : null;
  }
}

/**
 * Bundle `Wws` / export `Ty`.
 * Ensures target − minimum is at least the credit minimum when both parse.
 */
export function validateCreditTargetAgainstMinimum({
  minimumBalance,
  targetBalance,
}: {
  minimumBalance: string | null | undefined;
  targetBalance: string | null | undefined;
}): CreditBalanceFieldError | null {
  const targetError = validateCreditBalanceField(targetBalance);
  if (targetError != null) return targetError;
  const minimum = parseWholeNumber(minimumBalance);
  const target = parseWholeNumber(targetBalance);
  return minimum.kind === "valid" &&
    target.kind === "valid" &&
    target.value - minimum.value < CREDIT_BALANCE_MINIMUM
    ? "target-balance-below-minimum"
    : null;
}

/** Volume-discount policy ids (`nTs` / export `by`). */
export const VOLUME_DISCOUNT_POLICY_IDS = [
  "volume_discount_v1",
  "volume_discount_with_auto_reload_incentive_v1",
] as const;

/** Bundle `nTs` / export `by`. */
export function isVolumeDiscountPolicy(
  policy: string | null | undefined,
): boolean {
  return (
    policy === "volume_discount_v1" ||
    policy === "volume_discount_with_auto_reload_incentive_v1"
  );
}

export type ShouldPromptForPaymentMethodProps = {
  autoTopUpSettings: AutoTopUpSettingsLike | null | undefined;
  hasPaymentMethod: boolean;
  isManageAutoReload: boolean;
};

/**
 * Bundle `rTs` / export `xy`.
 * Prompt for a payment method when missing, unless managing an already-enabled
 * volume-discount auto-reload.
 */
export function shouldPromptForPaymentMethod({
  autoTopUpSettings,
  hasPaymentMethod,
  isManageAutoReload,
}: ShouldPromptForPaymentMethodProps): boolean {
  return (
    !hasPaymentMethod &&
    (!isManageAutoReload || autoTopUpSettings != null) &&
    !(
      autoTopUpSettings?.isEnabled === true &&
      isVolumeDiscountPolicy(autoTopUpSettings.autoReloadCreditDiscountPolicy)
    )
  );
}
