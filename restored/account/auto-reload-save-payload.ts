// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Auto-reload form → API payload / mutation action helpers (`Yws` / `Xws` / `Zws`).

import { trimOptionalString } from "../utils/trim-optional-string";
import {
  validateCreditBalanceField,
  validateCreditTargetAgainstMinimum,
} from "./credit-auto-reload-validators";

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

export type MonthlyLimitFieldError =
  | "not-whole-number"
  | "monthly-limit-below-target";

/**
 * Bundle `Yws` / export `My`.
 * Empty monthly limit is allowed; otherwise it must be ≥ target balance.
 */
export function validateMonthlyLimitAgainstTarget({
  monthlyLimit,
  targetBalance,
}: {
  monthlyLimit: string | null | undefined;
  targetBalance: string | null | undefined;
}): MonthlyLimitFieldError | null {
  const limit = parseWholeNumber(monthlyLimit);
  const target = parseWholeNumber(targetBalance);
  switch (limit.kind) {
    case "missing":
      return null;
    case "invalid":
      return "not-whole-number";
    case "valid":
      return target.kind === "valid" && limit.value < target.value
        ? "monthly-limit-below-target"
        : null;
  }
}

export type AutoReloadSavePayload = {
  recharge_threshold: string;
  recharge_target: string;
  recharge_monthly_limit: string | null;
};

/**
 * Bundle `Xws` / export `wy`.
 * Returns `null` when any related field is invalid.
 */
export function buildAutoReloadSavePayload({
  minimumBalance,
  targetBalance,
  monthlyLimit,
}: {
  minimumBalance: string | null | undefined;
  targetBalance: string | null | undefined;
  monthlyLimit: string | null | undefined;
}): AutoReloadSavePayload | null {
  if (
    validateCreditBalanceField(minimumBalance) != null ||
    validateCreditTargetAgainstMinimum({
      minimumBalance,
      targetBalance,
    }) != null ||
    validateMonthlyLimitAgainstTarget({
      monthlyLimit,
      targetBalance,
    }) != null
  ) {
    return null;
  }

  const threshold = Number.parseInt(trimOptionalString(minimumBalance), 10);
  const target = Number.parseInt(trimOptionalString(targetBalance), 10);
  const limit = trimOptionalString(monthlyLimit);
  return {
    recharge_threshold: String(threshold),
    recharge_target: String(target),
    recharge_monthly_limit: limit.length > 0 ? limit : null,
  };
}

export type AutoReloadServerState = {
  isEnabled: boolean;
  rechargeThreshold?: string | null;
  rechargeTarget?: string | null;
  rechargeMonthlyLimit?: string | null;
};

export type AutoReloadMutationAction = "enable" | "update" | "disable";

/**
 * Bundle `Zws` / export `Cy`.
 * Diff desired enabled flag + payload against the server auto-reload state.
 */
export function resolveAutoReloadMutationAction({
  isEnabled,
  serverState,
  savePayload,
}: {
  isEnabled: boolean;
  serverState: AutoReloadServerState;
  savePayload: AutoReloadSavePayload | null;
}): AutoReloadMutationAction | null {
  if (isEnabled) {
    if (savePayload == null) return null;
    if (!serverState.isEnabled) return "enable";
    return savePayload.recharge_threshold !== serverState.rechargeThreshold ||
      savePayload.recharge_target !== serverState.rechargeTarget ||
      savePayload.recharge_monthly_limit !== serverState.rechargeMonthlyLimit
      ? "update"
      : null;
  }
  return serverState.isEnabled ? "disable" : null;
}
