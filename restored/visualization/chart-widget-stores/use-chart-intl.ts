// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex useIntl hook (bundle chartWidgetStoresU).
// Wave-8: npm react-intl useIntl (same tree as ChartIntlProvider / FormattedMessage).

import { useIntl, type IntlShape } from "react-intl";

export type ChartIntlShape = IntlShape;

/**
 * Mega still calls this during chartWidgetStoresL; no-op after npm migrate.
 */
export function setChartBundleIntlContext(_context: unknown): void {}

export function hasChartBundleIntlContext(): boolean {
  return true;
}

/**
 * Read the chart/widget intl object. Throws outside `<IntlProvider>`.
 * Bundle export `chartWidgetStoresU`.
 */
export function useChartIntl(): ChartIntlShape {
  return useIntl();
}

/** Compat alias matching boundaries/chart-widget-stores export name. */
export { useChartIntl as chartWidgetStoresU };
