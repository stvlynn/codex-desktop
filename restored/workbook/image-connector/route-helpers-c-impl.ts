// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: connector route helpers C (legacy R_e…H_e).
// Stage-3 wave-74 cohesive connector-routing impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, j } from "../presentation-protobuf";
import {
  ShapeGeometry as workbookDt,
  ensureShapeGeometryInit as workbookOt,
} from "../shape-geometry";
import {
  ensureGeometryTransformDepsInit as workbookBinding628,
  ensureRotationScaleInit as $x,
  FrameBbox as workbookBinding632,
  frameUnitToEmu as workbookTt,
  resolveElementFramePx,
  rotationEmuToRadians,
} from "../geometry-transform";
import {
  lookupPresetShapeDefinition,
  ensurePluginSlotsInit as workbookU,
  evalShapeFormula,
  ensureShapeFormulaOpsInit as _S,
  evalPresetGuides,
  ensureAdjAliasInit as workbookBinding643,
} from "../preset-shape";
import { composeScopedId } from "../stable-id";
import {
  insertAxisElbow as xde,
  simplifyPolyline,
  pointsNearEqual,
  pointsBBox,
  rectCenter,
  nearestRectEdgeToward as Cde,
  scaleOffset as Tde,
  isAxisMonotonicPolyline as Ede,
  ratioToFixedPercent,
} from "../path-geometry";
import {
  Rge,
  workbookBinding723,
  workbookBinding724,
  Bge,
  workbookBinding725,
  workbookBinding726,
  Vge,
  Hge,
  Uge,
  Wge,
  workbookBinding727,
  Gge,
  Kge,
  qge,
  workbookBinding728,
  U_e,
  workbookBinding729,
  W_e,
  G_e,
  K_e,
  workbookBinding730,
  workbookBinding731,
  workbookBinding732,
  workbookBinding733,
  workbookBinding735,
} from "./ic-slots";
import { icR } from "./ic-route-bag";

export function R_e(icIn7278: any, icIn7279: any, icIn7280: any) {
  if (icIn7278.y !== icIn7279.y) return true;
  let workbookBinding17651 = Math.min(icIn7278.x, icIn7279.x),
    workbookBinding17652 = Math.max(icIn7278.x, icIn7279.x);
  for (let workbookBinding21545 of icIn7280)
    if (
      !(
        icIn7278.y <= workbookBinding21545.minY ||
        icIn7278.y >= workbookBinding21545.maxY
      ) &&
      !(
        workbookBinding17652 <= workbookBinding21545.minX ||
        workbookBinding17651 >= workbookBinding21545.maxX
      )
    )
      return true;
  return false;
}
export function z_e(icIn11234: any, icIn11235: any, icIn11236: any) {
  return icIn11236.some(
    (item) =>
      icIn11234 > item.minX &&
      icIn11234 < item.maxX &&
      icIn11235 > item.minY &&
      icIn11235 < item.maxY,
  );
}
export function icFn363(icIn9000: any, icIn9001: any) {
  return icIn9000.x === icIn9001.x
    ? icIn9001.y > icIn9000.y
      ? "down"
      : "up"
    : icIn9000.y === icIn9001.y
      ? icIn9001.x > icIn9000.x
        ? "right"
        : "left"
      : "none";
}
export function icFn364(icIn12873: any, icIn12874: any) {
  return (
    Math.abs(icIn12873.x - icIn12874.x) + Math.abs(icIn12873.y - icIn12874.y)
  );
}
export function icFn365(icIn13779: any) {
  return `${icIn13779.node}:${icIn13779.dir}:${icIn13779.bends}`;
}
export function icFn366(icIn15255: any) {
  return `${icIn15255.x}|${icIn15255.y}`;
}
export function icFn367(icIn7568: any) {
  let workbookBinding18049 = Math.abs(icIn7568.x),
    workbookBinding18050 = Math.abs(icIn7568.y);
  return workbookBinding18049 < 1e-6 && workbookBinding18050 < 1e-6
    ? "none"
    : workbookBinding18049 >= workbookBinding18050
      ? icIn7568.x >= 0
        ? "right"
        : "left"
      : icIn7568.y >= 0
        ? "down"
        : "up";
}
export function icFn368(icIn7638: any) {
  switch (icIn7638) {
    case "up":
      return "down";
    case "down":
      return "up";
    case "left":
      return "right";
    case "right":
      return "left";
    default:
      return "none";
  }
}
export function icFn369(icIn12721: any, icIn12722: any) {
  return (
    icIn12721 !== "none" &&
    icIn12722 !== "none" &&
    icR.icFn368(icIn12721) === icIn12722
  );
}
export function B_e(icIn11902: any, icIn11903: any) {
  return (
    Math.abs(icIn11902.x - icIn11903.x) < 1e-4 &&
    Math.abs(icIn11902.y - icIn11903.y) < 1e-4
  );
}
export function icFn370(icIn9913: any) {
  return icIn9913 === "left" || icIn9913 === "right"
    ? "horizontal"
    : icIn9913 === "up" || icIn9913 === "down"
      ? "vertical"
      : "none";
}
export function V_e(icIn14371: any, icIn14372: any) {
  return icIn14371.x * icIn14372.x + icIn14371.y * icIn14372.y;
}
export function H_e({ nodes, cameFrom, state }: any) {
  let workbookBinding15138 = [state.node],
    workbookBinding15139 = icR.icFn365(state);
  for (; cameFrom.has(workbookBinding15139); ) {
    let workbookBinding22108 = cameFrom.get(workbookBinding15139);
    if (
      (workbookBinding15138.push(workbookBinding22108.node),
      !workbookBinding22108.prevKey)
    )
      break;
    workbookBinding15139 = workbookBinding22108.prevKey;
  }
  return workbookBinding15138.reverse().map((item) => {
    let workbookBinding21265 = nodes[item];
    if (!workbookBinding21265) throw Error("Route reconstruction failed.");
    return {
      x: workbookBinding21265.x,
      y: workbookBinding21265.y,
    };
  });
}
