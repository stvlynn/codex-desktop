// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: data-table plot-area reserve (legacy iSe).
// Stage-3 wave-126.

export function reserveDataTablePlot(
  cplIn3747: any,
  cplIn3748: any,
  cplIn3749: any = {},
) {
  if (!cplIn3747.dataTable?.visible)
    return {
      plotDims: cplIn3748,
    };
  let cplBind12455 = cplIn3749.maxHeightFrac ?? 0.3,
    cplBind12456 = cplIn3749.minHeightPx ?? 48,
    cplBind12457 = Math.max(0, cplIn3748.height * cplBind12455),
    cplBind12458 = Math.max(cplBind12456, cplBind12457),
    cplBind12459 = Math.min(cplIn3748.height, cplBind12458),
    cplBind12460 = {
      x: cplIn3748.x,
      y: cplIn3748.y + Math.max(0, cplIn3748.height - cplBind12459),
      width: cplIn3748.width,
      height: cplBind12459,
    };
  return {
    plotDims: {
      x: cplIn3748.x,
      y: cplIn3748.y,
      width: cplIn3748.width,
      height: Math.max(0, cplIn3748.height - cplBind12459),
    },
    tableRect: cplBind12460,
  };
}

/** Legacy alias (wave-126). */
export const iSe = reserveDataTablePlot;
