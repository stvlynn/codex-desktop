// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Stage-3 Codex glue drained from boundaries/chart-widget-stores (openBoundary).

export type {
  WidgetContextProviderProps,
  WidgetHostContext,
  WidgetScopeSliceKey,
  WidgetScopeState,
  WidgetSliceState,
  WidgetSliceStore,
  WidgetSliceUpdater,
  WidgetStores,
} from "./types";

export {
  WidgetContext,
  chartWidgetStoresE,
  chartWidgetStoresT,
  chartWidgetStoresW,
  ensureWidgetContextInit,
  useWidgetContext,
} from "./widget-context";

export {
  _chartWidgetStoresT,
  chartWidgetStoresN,
  chartWidgetStoresR,
  createWidgetHostContext,
  ensureWidgetScopeStoreInit,
  useWidgetStores,
} from "./widget-scope-store";

export {
  CHART_AXIS_CHAR_WIDTH,
  CHART_AXIS_COMPACT_MAX_LABEL,
  CHART_AXIS_COMPACT_WIDTH,
  CHART_AXIS_LABEL_GAP,
  CHART_BAR_CATEGORY_GAP_RATIO,
  CHART_BAR_GAP_RATIO,
  CHART_BAR_RADIUS_DEFAULT,
  CHART_CLASS_NAMES,
  CHART_COLOR_NAMES,
  CHART_COLOR_WEIGHTS_PRIMARY,
  CHART_COLOR_WEIGHTS_SECONDARY,
  CHART_CSS_VAR_PALETTE,
  CHART_DEFAULT_ASPECT_RATIO,
  CHART_DEFAULT_VALUE_FORMAT,
  CHART_HOVER_DOT_RADIUS,
  CHART_LEGEND_ITEM_MIN_WIDTH,
  CHART_LEGEND_ROW_HEIGHT,
  CHART_TOOLTIP_ANIMATION_MS_DEFAULT,
  CHART_TOOLTIP_OFFSET_DEFAULT,
  CHART_VALUE_LABEL_OFFSET,
  CHART_VIEW_BOX_AUTO,
  _chartWidgetStoresC,
  ensureChartChromeConstantsInit,
} from "./chart-chrome-constants";
export type { ChartClassNameKey } from "./chart-chrome-constants";

export {
  canonicalizeLocale,
  chartWidgetStoresA,
  ensureChartLocaleMessagesInit,
  getLocaleMessages,
} from "./locale-messages";
export type { ChartLocaleMessages } from "./locale-messages";

export {
  ChartIntlProvider,
  chartWidgetStoresI,
  setChartBundleIntlProvider,
} from "./chart-intl-provider";
export type { ChartIntlProviderProps } from "./chart-intl-provider";

export {
  Chart,
  _chartWidgetStoresS,
  ensureChartComponentInit,
} from "./chart";
export type { CodexChartComponent } from "./chart";

export {
  setChartBundleSurface,
  getChartBundleSurface,
  hasChartBundleSurface,
} from "./chart-bundle-surface";
export type { ChartBundleSurface } from "./chart-bundle-surface";
