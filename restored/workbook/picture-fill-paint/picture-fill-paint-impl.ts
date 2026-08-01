// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: picture fill/stroke paint (legacy Jwe/Ywe).
// Stage-3 wave-130.

import { paintShapeGeometry, elementStrokeBBox } from "../shape-geometry-paint";
import { ShapeGeometry } from "../shape-geometry";

export function normalizePictureSource(pfpIn5335: any) {
  if (
    pfpIn5335.geometry !== undefined &&
    !(
      pfpIn5335.geometry === ShapeGeometry.SHAPE_GEOMETRY_CUSTOM &&
      pfpIn5335.customPaths.length === 0
    ) &&
    !(
      pfpIn5335.geometry !== ShapeGeometry.SHAPE_GEOMETRY_CUSTOM &&
      pfpIn5335.preset === undefined
    )
  )
    return {
      geometry: pfpIn5335.geometry,
      preset: pfpIn5335.preset,
      adjustmentList: pfpIn5335.adjustmentList,
      customPaths: pfpIn5335.customPaths,
    };
}
export function paintElementGeometry(
  pfpIn9529: any,
  pfpIn9530: any,
  pfpIn9531: any,
  pfpIn9532: any,
  pfpIn9533: any,
  pfpIn9534: any = {},
) {
  let { source = pfpIn9529.renderStyleData, ...rest } = pfpIn9534;
  paintShapeGeometry(
    {
      ...source,
      proto: source.connector ? elementStrokeBBox(pfpIn9529) : undefined,
    },
    pfpIn9530,
    pfpIn9531,
    pfpIn9532,
    pfpIn9533,
    rest,
  );
}
export function paintPictureFill(
  pfpIn6288: any,
  pfpIn6289: any,
  { frame: any, source: any, fill: any, bitmap: any, contentType }: any,
) {
  let pfpBind16402 = normalizePictureSource(source);
  return pfpBind16402
    ? (paintShapeGeometry(
        pfpBind16402,
        pfpIn6288,
        undefined,
        undefined,
        pfpIn6289,
        {
          frame,
          pictureFillBitmap: {
            bitmap,
            contentType,
          },
          pictureFill: fill,
        },
      ),
      true)
    : false;
}
export function paintPictureStroke(
  pfpIn9285: any,
  pfpIn9286: any,
  { frame: any, source: any, line }: any,
) {
  let pfpBind19851 = normalizePictureSource(source);
  return pfpBind19851
    ? (paintShapeGeometry(
        {
          ...pfpBind19851,
          line,
        },
        pfpIn9285,
        undefined,
        undefined,
        pfpIn9286,
        {
          frame,
        },
      ),
      true)
    : false;
}

export const workbookHelper609 = normalizePictureSource;
export const workbookHelper615 = paintElementGeometry;
export const Jwe = paintPictureFill;
export const Ywe = paintPictureStroke;
