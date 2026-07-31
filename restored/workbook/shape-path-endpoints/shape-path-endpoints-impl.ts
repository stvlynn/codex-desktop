// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: shape path start/end endpoints + angles (legacy Vwe).
// Stage-3 wave-99.

import { workbookGt } from "../text-style";

void workbookGt;

export function computeShapePathEndpoints(speIn758: any, speIn759: any, speIn760: any) {
  let speBind5264,
    speBind5265,
    speBind5266,
    speBind5267,
    speBind5268;
  for (let speBind5996 of speIn758) {
    if (speBind5996.moveTo) {
      speBind5268 = {
        x:
          Number(speBind5996.moveTo.x ?? 0) *
          workbookGt *
          speIn759,
        y:
          Number(speBind5996.moveTo.y ?? 0) *
          workbookGt *
          speIn760,
      };
      speBind5264 ||= {
        ...speBind5268,
      };
      continue;
    }
    if (speBind5996.lineTo && speBind5268) {
      let speBind16825 =
          Number(speBind5996.lineTo.x ?? speBind5268.x) *
          workbookGt *
          speIn759,
        speBind16826 =
          Number(speBind5996.lineTo.y ?? speBind5268.y) *
          workbookGt *
          speIn760,
        speBind16827 = Math.atan2(
          speBind16826 - speBind5268.y,
          speBind16825 - speBind5268.x,
        );
      speBind5264 &&
        speBind5265 === undefined &&
        (speBind5265 = speBind16827);
      speBind5268 = {
        x: speBind16825,
        y: speBind16826,
      };
      speBind5266 = {
        ...speBind5268,
      };
      speBind5267 = speBind16827;
      continue;
    }
    if (speBind5996.quadBezTo && speBind5268) {
      let speBind14010 =
          Number(speBind5996.quadBezTo.x1 ?? speBind5268.x) *
          workbookGt *
          speIn759,
        speBind14011 =
          Number(speBind5996.quadBezTo.y1 ?? speBind5268.y) *
          workbookGt *
          speIn760,
        speBind14012 =
          Number(speBind5996.quadBezTo.x ?? speBind5268.x) *
          workbookGt *
          speIn759,
        speBind14013 =
          Number(speBind5996.quadBezTo.y ?? speBind5268.y) *
          workbookGt *
          speIn760,
        speBind14014 = Math.atan2(
          speBind14011 - speBind5268.y,
          speBind14010 - speBind5268.x,
        );
      speBind5264 &&
        speBind5265 === undefined &&
        (speBind5265 = speBind14014);
      speBind5268 = {
        x: speBind14012,
        y: speBind14013,
      };
      speBind5266 = {
        ...speBind5268,
      };
      speBind5267 = Math.atan2(
        speBind14013 - speBind14011,
        speBind14012 - speBind14010,
      );
      continue;
    }
    if (speBind5996.cubicBezTo && speBind5268) {
      let speBind12519 =
          Number(speBind5996.cubicBezTo.x1 ?? speBind5268.x) *
          workbookGt *
          speIn759,
        speBind12520 =
          Number(speBind5996.cubicBezTo.y1 ?? speBind5268.y) *
          workbookGt *
          speIn760,
        speBind12521 =
          Number(speBind5996.cubicBezTo.x2 ?? speBind5268.x) *
          workbookGt *
          speIn759,
        speBind12522 =
          Number(speBind5996.cubicBezTo.y2 ?? speBind5268.y) *
          workbookGt *
          speIn760,
        speBind12523 =
          Number(speBind5996.cubicBezTo.x ?? speBind5268.x) *
          workbookGt *
          speIn759,
        speBind12524 =
          Number(speBind5996.cubicBezTo.y ?? speBind5268.y) *
          workbookGt *
          speIn760,
        speBind12525 = Math.atan2(
          speBind12520 - speBind5268.y,
          speBind12519 - speBind5268.x,
        );
      speBind5264 &&
        speBind5265 === undefined &&
        (speBind5265 = speBind12525);
      speBind5268 = {
        x: speBind12523,
        y: speBind12524,
      };
      speBind5266 = {
        ...speBind5268,
      };
      speBind5267 = Math.atan2(
        speBind12524 - speBind12522,
        speBind12523 - speBind12521,
      );
    }
  }
  if (!(!speBind5264 || !speBind5266))
    return (
      speBind5265 === undefined &&
        speBind5267 !== undefined &&
        (speBind5265 = speBind5267),
      speBind5267 === undefined &&
        speBind5265 !== undefined &&
        (speBind5267 = speBind5265),
      {
        start: {
          x: speBind5264.x,
          y: speBind5264.y,
          angle: speBind5265 ?? 0,
        },
        end: {
          x: speBind5266.x,
          y: speBind5266.y,
          angle: speBind5267 ?? 0,
        },
      }
    );
}

/** Legacy alias. */
export const Vwe = computeShapePathEndpoints;
