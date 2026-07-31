// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Flat boundary facade — vendored oversized chart-widget-stores runtime module.
// Intentional oversized vendor-runtime terminal (openBoundary kept: residual
// Flat chart-component.tsx). Mega vendor bodies deleted wave-10.
// Not a single stock npm package: Codex WidgetContext / widget-scope / chrome /
// i18n / Chart / Box live in visualization/; Recharts+RTK+Immer+react-intl bodies
// deleted wave-10 (consumers on public recharts@3 + react-intl).
// Stage-3 wave-1..10: WidgetContext, widget-scope, chrome, i18n, Chart,
// C/S/U/B/X/Box + Recharts aliases; Chart+pie npm-migrated (wave-8/9);
// pre-Y + Y + post-Y intl jointly deleted (wave-10).
// Stage 3 candidate: 36/36 app-initial aliases rewritten to
// IMPORT_MAP semantic/vendor/boundary paths. AppScope (Fft/Ift/ivt/M_t/L_t) is an
// open host/runtime facade — not stock jotai. No whole-file app-initial promote.

import {
  esmInit as rolldownRuntimeN,
} from "../../runtime/rolldown-runtime";
import {
  WidgetContext as vizWidgetContext,
  useWidgetContext as vizUseWidgetContext,
  ensureWidgetContextInit as vizEnsureWidgetContextInit,
  useWidgetStores as vizUseWidgetStores,
  createWidgetHostContext as vizCreateWidgetHostContext,
  ensureWidgetScopeStoreInit as vizEnsureWidgetScopeStoreInit,
  ensureChartChromeConstantsInit as vizEnsureChartChromeConstantsInit,
  ensureChartLocaleMessagesInit as vizEnsureChartLocaleMessagesInit,
  ChartIntlProvider as vizChartIntlProvider,
  Chart as vizChart,
  ensureChartComponentInit as vizEnsureChartComponentInit,
  isChartPaletteColor as vizIsChartPaletteColor,
  resolveChartThemeColor as vizResolveChartThemeColor,
  useWidgetEvaluate as vizUseWidgetEvaluate,
  resolveWidgetProps as vizResolveWidgetProps,
  useResolveWidgetAction as vizUseResolveWidgetAction,
  useChartIntl as vizUseChartIntl,
  classNames as vizClassNames,
  WidgetBoxRoot as vizWidgetBoxRoot,
  ensureWidgetBoxInit as vizEnsureWidgetBoxInit,
  getChartWidgetStoresRechartsLocals as vizGetRechartsLocals,
} from "../../visualization/chart-widget-stores";

// --- Codex WidgetContext (wave-1) ---
var chartWidgetStoresW: typeof vizWidgetContext | undefined,
  chartWidgetStoresE: typeof vizUseWidgetContext | undefined,
  chartWidgetStoresT = rolldownRuntimeN(() => {
    vizEnsureWidgetContextInit();
    chartWidgetStoresW = vizWidgetContext;
    chartWidgetStoresE = vizUseWidgetContext;
  });

// --- Codex props / evaluate / action (wave-4) ---
function chartWidgetStoresS() {
  return vizUseWidgetEvaluate();
}
function chartWidgetStoresC(chartWidgetStoresInput255: Record<string, unknown>) {
  return vizResolveWidgetProps(chartWidgetStoresInput255);
}
function $_() {
  return vizUseResolveWidgetAction();
}

// --- Codex useIntl (wave-8 → npm) ---
function chartWidgetStoresU() {
  return vizUseChartIntl();
}

// --- Recharts locals (wave-6/9 → public recharts; was assigned inside Y) ---
const _rechartsLocals = vizGetRechartsLocals();
var chartWidgetStoresF = _rechartsLocals.chartWidgetStoresF,
  chartWidgetStoresG = _rechartsLocals.chartWidgetStoresG,
  chartWidgetStoresH = _rechartsLocals.chartWidgetStoresH,
  chartWidgetStoresM = _rechartsLocals.chartWidgetStoresM,
  chartWidgetStoresP = _rechartsLocals.chartWidgetStoresP,
  chartWidgetStoresUnderscore = _rechartsLocals.chartWidgetStoresUnderscore;

// --- Theme / Box / classNames (wave-4/5; was wired at end of Y) ---
var chartWidgetStoresB: typeof vizIsChartPaletteColor | undefined,
  chartWidgetStoresX: typeof vizResolveChartThemeColor | undefined,
  chartWidgetStoresD: typeof vizWidgetBoxRoot | undefined,
  chartWidgetStoresV: typeof vizClassNames | undefined;

/** Thin Y: Box/theme wire only — Recharts/RTK/Immer body deleted wave-10. */
var chartWidgetStoresY = rolldownRuntimeN(() => {
  chartWidgetStoresT();
  vizEnsureWidgetBoxInit();
  chartWidgetStoresB = vizIsChartPaletteColor;
  chartWidgetStoresX = vizResolveChartThemeColor;
  chartWidgetStoresD = vizWidgetBoxRoot;
  chartWidgetStoresV = vizClassNames;
});

/**
 * Thin L: react-intl body deleted wave-10 (ChartIntlProvider / useChartIntl on npm).
 * Kept as a no-op ESM-init so chartWidgetStoresA / legacy callers stay coherent.
 */
var chartWidgetStoresL = rolldownRuntimeN(() => {});

// Chart + helpers 914–933 drained to visualization/chart-widget-stores/chart.tsx (wave-3)
export function _chartWidgetStoresS(chartWidgetStoresInput4?: unknown) {
  _chartWidgetStoresC();
  vizEnsureChartComponentInit();
  // Appgen ESM-init compat: bare `_chartWidgetStoresS()` only ensures surface.
  if (arguments.length === 0) return;
  return vizChart(chartWidgetStoresInput4);
}

// locales drained to visualization/chart-widget-stores/locales (wave-2)
export const chartWidgetStoresO = rolldownRuntimeN(() => {
  chartWidgetStoresT();
});

export const _chartWidgetStoresC = rolldownRuntimeN(() => {
  chartWidgetStoresY();
  chartWidgetStoresT();
  vizEnsureChartChromeConstantsInit();
  // Wave-10: no chartWidgetStoresL() / vizSetChartBundleSurface() — vendor + surface retired.
  vizEnsureChartComponentInit();
});

export function chartWidgetStoresI(props: {
  children?: unknown;
  locale?: string;
}) {
  return vizChartIntlProvider(
    props as Parameters<typeof vizChartIntlProvider>[0],
  );
}

export const chartWidgetStoresA = rolldownRuntimeN(() => {
  // Wave-10: no chartWidgetStoresL() — locales on npm react-intl via visualization/.
  vizEnsureChartLocaleMessagesInit();
});

export function chartWidgetStoresR() {
  return vizUseWidgetStores();
}

export function _chartWidgetStoresT(
  theme: unknown,
  stores: {
    useNameToIdStore: unknown;
    useWidgetStateStore: unknown;
  },
  flags: Record<string, unknown> = {},
) {
  return vizCreateWidgetHostContext(
    theme,
    stores as Parameters<typeof vizCreateWidgetHostContext>[1],
    flags,
  );
}

export const chartWidgetStoresN = rolldownRuntimeN(() => {
  vizEnsureWidgetScopeStoreInit();
});

export {
  chartWidgetStoresC,
  chartWidgetStoresE,
  chartWidgetStoresS,
  chartWidgetStoresT,
  chartWidgetStoresUnderscore,
  chartWidgetStoresB,
  chartWidgetStoresD,
  chartWidgetStoresF,
  chartWidgetStoresG,
  chartWidgetStoresH,
  chartWidgetStoresL,
  chartWidgetStoresM,
  chartWidgetStoresP,
  chartWidgetStoresU,
  chartWidgetStoresV,
  chartWidgetStoresW,
  chartWidgetStoresX,
  chartWidgetStoresY,
  $_,
};
