// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ju` / export `Jft` — react-intl context consumer.

import { useContext, type Context } from "react";

type IntlShape = {
  formatMessage: (...args: unknown[]) => string;
  [key: string]: unknown;
};

let IntlContext: Context<IntlShape | null> | null = null;
let assertIntl: ((value: IntlShape | null) => void) | null = null;

/** Wire react-intl context (`wje` / `lje` in the bundle). */
export function setIntlContext(
  context: Context<IntlShape | null>,
  assert?: (value: IntlShape | null) => void,
): void {
  IntlContext = context;
  assertIntl = assert ?? null;
}

export function useIntl(): IntlShape {
  if (IntlContext == null) {
    throw new Error("Intl context has not been configured");
  }
  const value = useContext(IntlContext);
  assertIntl?.(value);
  if (value == null) {
    throw new Error("Intl provider is missing");
  }
  return value;
}

/**
 * No-op Rolldown ESM init that wired formatDate/formatNumber helpers
 * (bundle `$u` / export `Hft`). npm react-intl needs no side-effect init.
 */
export function ensureIntlFormattersInit(): void {}
