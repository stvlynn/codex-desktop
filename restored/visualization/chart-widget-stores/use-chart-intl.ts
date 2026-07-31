// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex useIntl hook (bundle chartWidgetStoresU) — shares mega react-intl context.

import { useContext, type Context } from "react";

/**
 * Opaque intl shape from the inlined react-intl bag (formatMessage, …).
 * Kept loose: mega Formatted* consumers expect the full IntlShape surface.
 */
export type ChartIntlShape = {
  formatMessage: (...args: unknown[]) => unknown;
  formatDate?: (...args: unknown[]) => unknown;
  formatTime?: (...args: unknown[]) => unknown;
  formatNumber?: (...args: unknown[]) => unknown;
  formatPlural?: (...args: unknown[]) => unknown;
  formatRelativeTime?: (...args: unknown[]) => unknown;
  formatDateToParts?: (...args: unknown[]) => unknown;
  formatTimeToParts?: (...args: unknown[]) => unknown;
  formatNumberToParts?: (...args: unknown[]) => unknown;
  textComponent?: unknown;
  [key: string]: unknown;
};

let intlContext: Context<ChartIntlShape | null> | null = null;

/**
 * Wire the inlined react-intl context created during `chartWidgetStoresL`.
 * Must run before any `useChartIntl` / Formatted* consumer.
 */
export function setChartBundleIntlContext(
  context: Context<ChartIntlShape | null>,
): void {
  intlContext = context;
}

export function hasChartBundleIntlContext(): boolean {
  return intlContext != null;
}

/**
 * Read the chart/widget intl object. Throws outside `<IntlProvider>`.
 * Bundle export `chartWidgetStoresU`.
 */
export function useChartIntl(): ChartIntlShape {
  if (!intlContext) {
    throw new Error(
      "useChartIntl requires setChartBundleIntlContext (call chartWidgetStoresL first)",
    );
  }
  const intl = useContext(intlContext);
  if (!intl) {
    throw new Error(
      "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.",
    );
  }
  return intl;
}

/** Compat alias matching boundaries/chart-widget-stores export name. */
export { useChartIntl as chartWidgetStoresU };
