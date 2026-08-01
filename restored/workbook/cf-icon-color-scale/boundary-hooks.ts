// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-119: cf-icon-color-scale boundary hooks.

export type CfIconColorScaleHooks = {
  resolveIconSetId: (...args: any[]) => any;
  getIconSetDef: (...args: any[]) => any;
  iconThresholdMet: (...args: any[]) => any;
  pickIconIndex: (...args: any[]) => any;
  buildIconStats: (...args: any[]) => any;
  evalIconRule: (...args: any[]) => any;
};

export const cicH: CfIconColorScaleHooks = {} as CfIconColorScaleHooks;

export function wireCfIconColorScaleBoundaryHooks(
  next: CfIconColorScaleHooks,
): void {
  Object.assign(cicH, next);
}
