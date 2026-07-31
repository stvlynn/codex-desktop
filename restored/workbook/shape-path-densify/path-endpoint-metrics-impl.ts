// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: connector path start/end + tangent angles (legacy mTe).
// Stage-3 wave-107. Pure — no boundary hooks.

export function pathEndpointMetrics(spdIn2127: any) {
  let spdBind9041,
    spdBind9042,
    spdBind9043,
    spdBind9044,
    spdBind9045;
  for (let spdBind11833 of spdIn2127)
    if (spdBind11833.cmd === "moveTo") {
      spdBind9045 = {
        x: spdBind11833.x,
        y: spdBind11833.y,
      };
      spdBind9041 ||= {
        ...spdBind9045,
      };
    } else if (spdBind11833.cmd === "lineTo" && spdBind9045) {
      let spdBind19744 = Math.atan2(
        spdBind11833.y - spdBind9045.y,
        spdBind11833.x - spdBind9045.x,
      );
      spdBind9041 &&
        spdBind9042 === undefined &&
        (spdBind9042 = spdBind19744);
      spdBind9045 = {
        x: spdBind11833.x,
        y: spdBind11833.y,
      };
      spdBind9043 = {
        ...spdBind9045,
      };
      spdBind9044 = spdBind19744;
    } else if (
      spdBind11833.cmd === "cubicBezTo" &&
      spdBind9045
    ) {
      let spdBind18648 = Math.atan2(
        spdBind11833.y1 - spdBind9045.y,
        spdBind11833.x1 - spdBind9045.x,
      );
      spdBind9041 &&
        spdBind9042 === undefined &&
        (spdBind9042 = spdBind18648);
      spdBind9045 = {
        x: spdBind11833.x,
        y: spdBind11833.y,
      };
      spdBind9043 = {
        ...spdBind9045,
      };
      spdBind9044 = Math.atan2(
        spdBind11833.y - spdBind11833.y2,
        spdBind11833.x - spdBind11833.x2,
      );
    }
  if (!(!spdBind9041 || !spdBind9043))
    return (
      spdBind9042 === undefined &&
        spdBind9044 !== undefined &&
        (spdBind9042 = spdBind9044),
      spdBind9044 === undefined &&
        spdBind9042 !== undefined &&
        (spdBind9044 = spdBind9042),
      {
        start: {
          x: spdBind9041.x,
          y: spdBind9041.y,
          angle: spdBind9042 ?? 0,
        },
        end: {
          x: spdBind9043.x,
          y: spdBind9043.y,
          angle: spdBind9044 ?? 0,
        },
      }
    );
}

/** Legacy alias. */
export const mTe = pathEndpointMetrics;
