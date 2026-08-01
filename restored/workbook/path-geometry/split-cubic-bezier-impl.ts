// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: de Casteljau cubic split (legacy #626/627).
// Stage-3 wave-114.

export function splitCubicBezier(pgIn6749: any, pgIn6750: any) {
  let pgBind17056 = lerpPoint2D(pgIn6749.p0, pgIn6749.p1, pgIn6750),
    pgBind17057 = lerpPoint2D(pgIn6749.p1, pgIn6749.p2, pgIn6750),
    pgBind17058 = lerpPoint2D(pgIn6749.p2, pgIn6749.p3, pgIn6750),
    pgBind17059 = lerpPoint2D(pgBind17056, pgBind17057, pgIn6750),
    pgBind17060 = lerpPoint2D(pgBind17057, pgBind17058, pgIn6750),
    pgBind17061 = lerpPoint2D(pgBind17059, pgBind17060, pgIn6750);
  return [
    {
      p0: pgIn6749.p0,
      p1: pgBind17056,
      p2: pgBind17059,
      p3: pgBind17061,
    },
    {
      p0: pgBind17061,
      p1: pgBind17060,
      p2: pgBind17058,
      p3: pgIn6749.p3,
    },
  ];
}
export function lerpPoint2D(pgIn11918: any, pgIn11919: any, pgIn11920: any) {
  return {
    x: pgIn11918.x + (pgIn11919.x - pgIn11918.x) * pgIn11920,
    y: pgIn11918.y + (pgIn11919.y - pgIn11918.y) * pgIn11920,
  };
}
