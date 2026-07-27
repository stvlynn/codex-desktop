// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Default credit auto-reload target / threshold helpers (`$ws` / `Bws` / `Vws`).

import { trimOptionalString } from "../utils/trim-optional-string";

/** Bundle `$ws` / export `Sy`. */
export const CREDIT_RECHARGE_TARGET_OPTIONS = [500, 1000, 2000] as const;

/** Default recharge threshold when auto-reload is disabled (`Vws` fallback). */
export const CREDIT_RECHARGE_THRESHOLD_DEFAULT = "125";

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

export type AutoTopUpSettingsLike = {
  isEnabled: boolean;
  rechargeTarget?: string | null;
  rechargeThreshold?: string | null;
};

/** Bundle `Bws` / export `jy`. */
export function getDefaultRechargeTarget(settings: AutoTopUpSettingsLike): string {
  if (!settings.isEnabled) {
    return String(CREDIT_RECHARGE_TARGET_OPTIONS[0]);
  }
  const parsed = parseWholeNumber(settings.rechargeTarget ?? "");
  return parsed.kind === "valid"
    ? String(parsed.value)
    : String(CREDIT_RECHARGE_TARGET_OPTIONS[0]);
}

/** Bundle `Vws` / export `ky`. */
export function getDefaultRechargeThreshold(settings: AutoTopUpSettingsLike): string {
  if (!settings.isEnabled) return CREDIT_RECHARGE_THRESHOLD_DEFAULT;
  const parsed = parseWholeNumber(settings.rechargeThreshold ?? "");
  return parsed.kind === "valid"
    ? String(parsed.value)
    : CREDIT_RECHARGE_THRESHOLD_DEFAULT;
}
