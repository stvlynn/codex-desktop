// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex chart chrome CSS class names + layout/color constants.
// Bundle: _chartWidgetStoresC (export S).

export const CHART_CLASS_NAMES = {
  Chart: "Chart_Chart",
  ScrollViewport: "Chart_ScrollViewport",
  Scrollable: "Chart_Scrollable",
  ScrollLocked: "Chart_ScrollLocked",
  ScrollContent: "Chart_ScrollContent",
  ChartScrollable: "Chart_ChartScrollable",
  Axis: "Chart_Axis",
  ChartTooltip: "Chart_ChartTooltip",
  LegendItem: "Chart_LegendItem",
  LegendToggle: "Chart_LegendToggle",
  LegendItemMarker: "Chart_LegendItemMarker",
  LegendItemLabel: "Chart_LegendItemLabel",
  LegendSelectedIcon: "Chart_LegendSelectedIcon",
  InteractiveSeries: "Chart_InteractiveSeries",
  ValueLabel: "Chart_ValueLabel",
} as const;

export type ChartClassNameKey = keyof typeof CHART_CLASS_NAMES;

/** Default aspect when neither height nor minHeight is set (4/3). */
export const CHART_DEFAULT_ASPECT_RATIO = 1.3333333333333333;

export const CHART_BAR_RADIUS_DEFAULT = 4;
export const CHART_TOOLTIP_OFFSET_DEFAULT = 6;
export const CHART_TOOLTIP_ANIMATION_MS_DEFAULT = 600;

/** Tick label width heuristics used by axis layout. */
export const CHART_AXIS_CHAR_WIDTH = 7;
export const CHART_AXIS_LABEL_GAP = 8;
export const CHART_AXIS_COMPACT_WIDTH = 520;
export const CHART_AXIS_COMPACT_MAX_LABEL = 22;
export const CHART_LEGEND_ITEM_MIN_WIDTH = 160;
export const CHART_LEGEND_ROW_HEIGHT = 28;
export const CHART_HOVER_DOT_RADIUS = 6;
export const CHART_VALUE_LABEL_OFFSET = 12;

export const CHART_BAR_GAP_RATIO = 0.25;
export const CHART_BAR_CATEGORY_GAP_RATIO = 0.5;

export const CHART_DEFAULT_VALUE_FORMAT = { valueFormat: "compact" as const };

export const CHART_VIEW_BOX_AUTO = ["auto", "auto"] as const;

export const CHART_COLOR_NAMES = [
  "blue",
  "purple",
  "orange",
  "green",
  "red",
  "yellow",
  "pink",
] as const;

export const CHART_COLOR_WEIGHTS_PRIMARY = [400, 500, 600, 300, 200] as const;

export const CHART_COLOR_WEIGHTS_SECONDARY = [500, 200, 400, 600, 300] as const;

/** CSS var palette: var(--{color}-{weight}) across primary weights × color names. */
export const CHART_CSS_VAR_PALETTE: readonly string[] =
  CHART_COLOR_WEIGHTS_PRIMARY.flatMap((weight) =>
    CHART_COLOR_NAMES.map((color) => `var(--${color}-${weight})`),
  );

/** Bundle `_chartWidgetStoresC` — ESM ensure-init (idempotent once modules load). */
export function ensureChartChromeConstantsInit(): void {}

/** Compat alias matching boundaries/chart-widget-stores export name. */
export { ensureChartChromeConstantsInit as _chartWidgetStoresC };
