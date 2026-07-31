// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex chart/widget IntlProvider wrapper (bundle chartWidgetStoresI).
// Uses the mega dump's inlined react-intl IntlProvider so Chart FormattedMessage
// shares the same context (npm react-intl is a separate context tree).

import { createElement, type ComponentType, type ReactNode } from "react";

import { DEFAULT_LOCALE } from "../../i18n/default-locale";

import {
  canonicalizeLocale,
  ensureChartLocaleMessagesInit,
  getLocaleMessages,
} from "./locale-messages";

type BundleIntlProviderProps = {
  children?: ReactNode;
  defaultLocale?: string;
  locale?: string;
  messages?: Record<string, string>;
};

type BundleIntlProvider = ComponentType<BundleIntlProviderProps>;

let bundleIntlProvider: BundleIntlProvider | null = null;

/**
 * Wire the inlined react-intl `IntlProvider` from the chart-widget-stores mega
 * dump (binding set during `chartWidgetStoresL`).
 */
export function setChartBundleIntlProvider(provider: BundleIntlProvider): void {
  bundleIntlProvider = provider;
}

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
  if (!bundleIntlProvider) {
    throw new Error(
      "ChartIntlProvider requires setChartBundleIntlProvider (call chartWidgetStoresL / chartWidgetStoresA first)",
    );
  }
  const canonical = canonicalizeLocale(locale);
  return createElement(bundleIntlProvider, {
    defaultLocale: DEFAULT_LOCALE,
    locale: canonical,
    messages: getLocaleMessages(canonical),
    children,
  });
}

/** Compat alias matching boundaries/chart-widget-stores export name. */
export { ChartIntlProvider as chartWidgetStoresI };
