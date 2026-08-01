// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: shape geometry apply + masked image paint (legacy bh614/qwe).
// Stage-3 wave-128.

import { EffectList } from "../document-style";
import { lookupPresetShapeDefinition } from "../preset-shape";
import { paintShapeGeometry } from "../shape-geometry-paint";

export function applyShapeGeometryPaint(
  sgaIn3320: any,
  sgaIn3321: any,
  sgaIn3322: any,
  sgaIn3323: any,
  sgaIn3324: any,
  sgaIn3325: any = {},
) {
  sgaIn3320.shape &&
    paintShapeGeometry(
      {
        proto: sgaIn3320,
        geometry: sgaIn3320.shape.geometry,
        preset: lookupPresetShapeDefinition(sgaIn3320.shape.geometry),
        adjustmentList: sgaIn3320.shape.adjustmentList,
        customPaths: sgaIn3320.shape.customPaths,
        fill: sgaIn3320.shape.fill,
        line: sgaIn3320.shape.line,
        connector: sgaIn3320.connector,
        effects: new EffectList(sgaIn3320.effects),
        effectReference: sgaIn3320.effectReference,
        fillReference: sgaIn3320.fillReference,
        lineReference: sgaIn3320.lineReference,
      },
      sgaIn3321,
      sgaIn3322,
      sgaIn3323,
      sgaIn3324,
      sgaIn3325,
    );
}
export function paintMaskedImage(
  sgaIn5216: any,
  sgaIn5217: any,
  { frame: any, geometry: any, adjustmentList: any, fill: any, bitmap }: any,
) {
  let sgaBind14765 = lookupPresetShapeDefinition(geometry);
  return sgaBind14765
    ? (paintShapeGeometry(
        {
          geometry,
          preset: sgaBind14765,
          adjustmentList,
          customPaths: [],
        },
        sgaIn5216,
        undefined,
        undefined,
        sgaIn5217,
        {
          frame,
          pictureFillBitmap: {
            bitmap,
          },
          pictureFill: fill,
        },
      ),
      true)
    : false;
}

export const qwe = paintMaskedImage;
