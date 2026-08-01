// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: shape.add props normalize (legacy hze).
// Stage-3 wave-109.

import { seH } from "./boundary-hooks";

void seH;

export function requireShapeTarget(seIn11294: any, seIn11295: any) {
  if (seIn11294 instanceof seH.ShapeClass) return seIn11294;
  throw Error(`${seIn11295} requires a shape target.`);
}
export function normalizeShapeAddProps(seIn1227: any, seIn1228: any) {
  if (seIn1227.geometry === "custom")
    return {
      geometry: "custom",
      position: seIn1227.position,
      fill: seIn1227.fill,
      line: seIn1227.line,
      adjustmentList: seIn1227.adjustmentList,
      borderRadius: seIn1227.borderRadius,
      shadow: seIn1227.shadow,
      className: seIn1227.className,
      customPaths: seIn1227.customPaths ?? [],
    };
  if (seIn1227.geometry !== "connector")
    return {
      geometry: seIn1227.geometry,
      position: seIn1227.position,
      fill: seIn1227.fill,
      line: seIn1227.line,
      adjustmentList: seIn1227.adjustmentList,
      borderRadius: seIn1227.borderRadius,
      shadow: seIn1227.shadow,
      className: seIn1227.className,
    };
  let seBind6758 =
      seIn1227.from === undefined
        ? undefined
        : requireShapeTarget(seIn1228(seIn1227.from), "shape.add"),
    seBind6759 =
      seIn1227.to === undefined
        ? undefined
        : requireShapeTarget(seIn1228(seIn1227.to), "shape.add");
  if (!seBind6758 || !seBind6759)
    throw Error("shape.add connector requires from/to targets.");
  return {
    geometry: "connector",
    position: seIn1227.position,
    fill: seIn1227.fill,
    line: seIn1227.line,
    adjustmentList: seIn1227.adjustmentList,
    borderRadius: seIn1227.borderRadius,
    shadow: seIn1227.shadow,
    className: seIn1227.className,
    from: seBind6758,
    to: seBind6759,
    fromIdx: seIn1227.fromIdx ?? 0,
    toIdx: seIn1227.toIdx ?? 0,
    kind: seIn1227.kind,
    head: seIn1227.head,
    tail: seIn1227.tail,
    cap: seIn1227.cap,
    join: seIn1227.join,
  };
}

/** Legacy aliases. */
export const workbookHelper786 = requireShapeTarget;
export const hze = normalizeShapeAddProps;
