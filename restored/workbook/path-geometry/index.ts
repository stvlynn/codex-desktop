// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: path-geometry barrel (xde/Sde/workbookHelper 306-310/Cde/wde/Tde/Ede/Dde/Ode/kde/Ade/jde).

export type {
  Point2D,
  SizeRect,
  PathCommandPoint,
  AxisAlignedBBox,
  RectSide,
  EdgeHit,
} from "./types";
export { pointsNearEqual, pointsEqual, isAxisCollinear } from "./point-ops";
export { insertAxisElbow, simplifyPolyline } from "./simplify-polyline";
export { pathCommandsToSimplifiedPoints } from "./path-commands";
export { pointsBBox, rectCenter } from "./bbox";
export {
  rectSideHit,
  dominantRectSide,
  normalizeVector,
  nearestRectEdgeToward,
} from "./rect-edge";
export {
  scaleOffset,
  isAxisMonotonicPolyline,
  clampFixedPercent,
  ratioToFixedPercent,
} from "./vector-scale";

export { splitCubicBezier, lerpPoint2D } from "./split-cubic-bezier-impl";
