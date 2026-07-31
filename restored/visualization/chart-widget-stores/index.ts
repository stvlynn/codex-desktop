// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Stage-3 Codex glue drained from boundaries/chart-widget-stores.
// Wave-11: Chart body promoted to ./chart/*; openBoundary cleared.

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
export { CodexChartBody } from "./chart";

export {
  setChartBundleSurface,
  getChartBundleSurface,
  hasChartBundleSurface,
} from "./chart-bundle-surface";
export type { ChartBundleSurface } from "./chart-bundle-surface";

export {
  getRechartsSurfaceAliases,
  getChartWidgetStoresRechartsLocals,
} from "./recharts-surface-aliases";
export type { RechartsSurfaceAliases } from "./recharts-surface-aliases";

export {
  isChartPaletteColor,
  pickThemeColor,
  resolveChartThemeColor,
  chartWidgetStoresB,
  chartWidgetStoresX,
} from "./chart-theme-colors";
export type { ThemeColorInput } from "./chart-theme-colors";

export {
  useWidgetEvaluate,
  resolveWidgetProps,
  useResolveWidgetAction,
  WidgetExpressionScopeContext,
  ensureWidgetExpressionInit,
  chartWidgetStoresS,
  chartWidgetStoresC,
  $_,
} from "./use-widget-expression";
export type {
  SoftFailureReport,
  EvaluateOptions,
} from "./use-widget-expression";

export {
  useChartIntl,
  setChartBundleIntlContext,
  hasChartBundleIntlContext,
  chartWidgetStoresU,
} from "./use-chart-intl";
export type { ChartIntlShape } from "./use-chart-intl";

export {
  classNames,
  chartWidgetStoresV,
} from "./widget-class-names";

export {
  BOX_CLASS_NAMES,
  BOX_VISIBILITY_THRESHOLD,
  toSpacingCss,
  toCssVars,
  parseAspectRatio,
  toAspectRatioCss,
  toRadiusStyle,
  isDesignTokenColor,
  resolveSemanticColorName,
  resolveBackgroundCss,
  resolveBorderColorCss,
  toMarginStyle,
  toPaddingStyle,
  toBorderStyle,
  $V,
  _H,
} from "./widget-style-helpers";
export type {
  SpacingInput,
  RadiusInput,
  BorderInput,
  AspectRatioInput,
} from "./widget-style-helpers";

export {
  WidgetBox,
  WidgetBoxWithVisibleAction,
  WidgetBoxRoot,
  chartWidgetStoresD,
  ensureWidgetBoxInit,
} from "./widget-box";
export type { WidgetBoxProps } from "./widget-box";
