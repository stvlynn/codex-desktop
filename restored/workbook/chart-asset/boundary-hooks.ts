// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-75: boundary deps for chart-asset (Zae/Qae leave-behinds).

export type ChartAssetBoundaryHooks = {
  /** Map display-blanks-as name → proto (legacy Zae). */
  mapDisplayBlanksAs: (name: any) => any;
  /** Map parent-label-layout name → proto (legacy Qae). */
  mapParentLabelLayout: (name: any) => any;
};

/** Live bag for intentional chart enum leave-behinds. */
export const caH: ChartAssetBoundaryHooks = {} as ChartAssetBoundaryHooks;

export function wireChartAssetBoundaryHooks(
  next: ChartAssetBoundaryHooks,
): void {
  caH.mapDisplayBlanksAs = next.mapDisplayBlanksAs;
  caH.mapParentLabelLayout = next.mapParentLabelLayout;
}
