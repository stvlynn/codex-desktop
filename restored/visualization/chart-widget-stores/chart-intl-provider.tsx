// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex chart/widget IntlProvider wrapper (bundle chartWidgetStoresI).
// Wave-8: npm react-intl IntlProvider (shares context with Chart FormattedMessage).

import { createElement, type ReactNode } from "react";
import { IntlProvider } from "react-intl";

import { DEFAULT_LOCALE } from "../../i18n/default-locale";

import {
  canonicalizeLocale,
  ensureChartLocaleMessagesInit,
  getLocaleMessages,
} from "./locale-messages";

/**
 * Mega still calls this during chartWidgetStoresL; no-op after npm migrate.
 */
export function setChartBundleIntlProvider(_provider: unknown): void {}

export type ChartIntlProviderProps = {
  children?: ReactNode;
  locale?: string;
};

/**
 * Provide locale messages for client-defined widgets / charts.
 * Bundle export `chartWidgetStoresI`.
 */
export function ChartIntlProvider({
  children,
  locale = DEFAULT_LOCALE,
}: ChartIntlProviderProps) {
  ensureChartLocaleMessagesInit();
  const canonical = canonicalizeLocale(locale);
  return createElement(IntlProvider, {
    defaultLocale: DEFAULT_LOCALE,
    locale: canonical,
    messages: getLocaleMessages(canonical),
    children,
  });
}

/** Compat alias matching boundaries/chart-widget-stores export name. */
export { ChartIntlProvider as chartWidgetStoresI };
