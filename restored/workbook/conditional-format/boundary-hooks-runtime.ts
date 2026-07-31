// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-108: CF runtime peel hooks (date period + color-scale/data-bar).

export type CfRuntimeBoundaryHooks = {
  addDays: (...args: any[]) => any;
  weekStart: (...args: any[]) => any;
  monthStart: (...args: any[]) => any;
  monthEnd: (...args: any[]) => any;
  rangeStats: (...args: any[]) => any;
  resolveCfvoPos: (...args: any[]) => any;
  parseRgb: (...args: any[]) => any;
  resolveColor: (...args: any[]) => any;
  colorOpts: any;
  defaultDataBarColor: any;
  defaultAccentFallback: any;
};

export const cfRtH: CfRuntimeBoundaryHooks = {} as CfRuntimeBoundaryHooks;

export function wireCfRuntimeBoundaryHooks(next: CfRuntimeBoundaryHooks): void {
  Object.assign(cfRtH, next);
}
