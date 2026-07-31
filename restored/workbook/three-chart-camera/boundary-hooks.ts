// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-97: three-chart-camera boundary hooks.

export type ThreeChartCameraBoundaryHooks = {
  /** Legacy Binding1142 — pie/3D camera direction (ixe). */
  cameraDir: any;
};

export const tccH: ThreeChartCameraBoundaryHooks =
  {} as ThreeChartCameraBoundaryHooks;

export function wireThreeChartCameraBoundaryHooks(
  next: ThreeChartCameraBoundaryHooks,
): void {
  Object.assign(tccH, next);
}
