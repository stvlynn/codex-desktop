// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: image mask preset geometry resolve (legacy JTe/YTe/XTe/ZTe).
// Stage-3 wave-139.

import { ShapeGeometry } from "../shape-geometry";
import { shapeGeometryNameToProto } from "../chart-proto-name-maps";
import { lookupPresetShapeDefinition } from "../preset-shape";

export function JTe(sipIn9535: any) {
  return (
    sipIn9535 !== undefined &&
    sipIn9535 !== ShapeGeometry.SHAPE_GEOMETRY_UNSPECIFIED &&
    sipIn9535 !== ShapeGeometry.UNRECOGNIZED &&
    sipIn9535 !== ShapeGeometry.SHAPE_GEOMETRY_RECT
  );
}
export function YTe(sipIn12014: any) {
  let sipBind22241 = sipIn12014?.geometry;
  if (sipBind22241 !== undefined && sipBind22241 in shapeGeometryNameToProto)
    return shapeGeometryNameToProto[sipBind22241];
}
export function XTe(sipIn11416: any) {
  return sipIn11416?.adjustmentList?.reduce(
    (sipIn15604, sipIn15605) => (
      (sipIn15604[sipIn15605.name] = sipIn15605.formula),
      sipIn15604
    ),
    {},
  );
}
export function ZTe(sipIn10430: any) {
  let sipBind20905 = YTe(sipIn10430);
  if (!JTe(sipBind20905)) return;
  let sipBind20906 = lookupPresetShapeDefinition(sipBind20905);
  if (sipBind20906)
    return {
      preset: sipBind20906,
      adjustments: XTe(sipIn10430),
    };
}
