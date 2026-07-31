// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: axis tick-count planner (linear + log scales).
// Stage-3 wave-112.

import { catH } from "./boundary-hooks";

const AXIS_LABEL_PAD_PX = 6;
const AXIS_TICK_LABEL_GAP_PX = 4;

void catH;
void AXIS_LABEL_PAD_PX;
void AXIS_TICK_LABEL_GAP_PX;

export function planAxisTicks(catIn1736: any) {
  let { ctx, axis, scale, preferredTickCount, themeMap } = catIn1736,
    catBind8135 = catH.bh428(axis, themeMap);
  ctx.font = catH.bh430(catBind8135);
  let catBind8136 = catH.bh436(axis),
    catBind8137 = Math.max(1, Math.floor(preferredTickCount || 1));
  if (catBind8136) {
    let catBind17592 = majorTicksForAxis(scale, axis, catBind8137);
    return {
      ticks: catBind17592,
      minorTicks: minorTicksForAxis(scale, axis, catBind17592),
      labelBandWidth: 0,
      hideTickLabels: true,
      preferredTickCount: catBind8137,
      chosenTickCount: catBind8137,
      minTickSeparationPx: minTickSeparationPx(scale, catBind17592),
    };
  }
  let catBind8138;
  for (let catBind17019 = catBind8137; catBind17019 >= 1; --catBind17019) {
    let catBind17796 = tryAxisTickCount({
      ctx,
      axis,
      scale,
      fontSizePx: catBind8135.fontSize,
      preferredTickCount: catBind8137,
      tickCount: catBind17019,
    });
    if (catBind17796.fits) return catBind17796;
    (!catBind8138 || catBind17796.overflowPx < catBind8138.overflowPx) &&
      (catBind8138 = catBind17796);
  }
  return (
    catBind8138 ?? {
      ticks: [],
      minorTicks: [],
      labelBandWidth: 0,
      hideTickLabels: false,
      preferredTickCount: catBind8137,
      chosenTickCount: catBind8137,
      minTickSeparationPx: 1 / 0,
      fits: true,
      overflowPx: 0,
    }
  );
}
export function tryAxisTickCount(props: any) {
  let { ctx, axis, scale, fontSizePx, preferredTickCount, tickCount } = props,
    catBind11004 = majorTicksForAxis(scale, axis, tickCount),
    catBind11005 = minTickSeparationPx(scale, catBind11004),
    catBind11006 = fontSizePx + AXIS_TICK_LABEL_GAP_PX,
    catBind11007 = 0;
  for (let catBind21591 of catBind11004) {
    let catBind22148 = catH.bh439(catBind21591, axis?.numberFormatCode);
    catBind11007 = Math.max(catBind11007, ctx.measureText(catBind22148).width);
  }
  let catBind11008 = Math.max(0, catBind11006 - catBind11005);
  return {
    ticks: catBind11004,
    minorTicks: minorTicksForAxis(scale, axis, catBind11004),
    labelBandWidth: catBind11007 > 0 ? catBind11007 + AXIS_LABEL_PAD_PX : 0,
    hideTickLabels: false,
    preferredTickCount,
    chosenTickCount: tickCount,
    minTickSeparationPx: catBind11005,
    fits: catBind11004.length <= 1 || catBind11008 <= 0,
    overflowPx: catBind11008,
  };
}
export function majorTicksForAxis(
  catIn11851: any,
  catIn11852: any,
  catIn11853: any,
) {
  return catIn11852?.logBase === undefined
    ? catH.bh406(catIn11852, catIn11851, catIn11853)
    : logMajorTicks(catIn11851, catIn11852.logBase);
}
export function minorTicksForAxis(
  catIn11793: any,
  catIn11794: any,
  catIn11795: any,
) {
  return catIn11794?.logBase === undefined
    ? catH.bhTye(catIn11794, catIn11793, catIn11795)
    : logMinorTicks(catIn11793, catIn11794.logBase);
}
export function logMajorTicks(catIn3937: any, catIn3938: any) {
  let [catBind12830, catBind12831] = catIn3937.domain();
  if (catBind12830 === undefined || catBind12831 === undefined)
    throw Error("Expected a two-value logarithmic chart scale domain");
  let catBind12832 = Math.min(catBind12830, catBind12831),
    catBind12833 = Math.max(catBind12830, catBind12831),
    catBind12834 = Math.log(catIn3938),
    catBind12835 = Math.ceil(Math.log(catBind12832) / catBind12834 - 1e-12),
    catBind12836 = Math.floor(Math.log(catBind12833) / catBind12834 + 1e-12),
    catBind12837 = Array.from(
      {
        length: Math.max(0, catBind12836 - catBind12835 + 1),
      },
      (catIn14383, catIn14384) =>
        Number((catIn3938 ** (catBind12835 + catIn14384)).toPrecision(15)),
    );
  return catBind12831 >= catBind12830 ? catBind12837 : catBind12837.reverse();
}
export function logMinorTicks(catIn3093: any, catIn3094: any) {
  if (!Number.isInteger(catIn3094)) return [];
  let [catBind11175, catBind11176] = catIn3093.domain();
  if (catBind11175 === undefined || catBind11176 === undefined)
    throw Error("Expected a two-value logarithmic chart scale domain");
  let catBind11177 = Math.min(catBind11175, catBind11176),
    catBind11178 = Math.max(catBind11175, catBind11176),
    catBind11179 = Math.log(catIn3094),
    catBind11180 = Math.floor(Math.log(catBind11177) / catBind11179),
    catBind11181 = Math.ceil(Math.log(catBind11178) / catBind11179),
    catBind11182 = [];
  for (
    let catBind19293 = catBind11180;
    catBind19293 <= catBind11181;
    catBind19293 += 1
  ) {
    let catBind20263 = catIn3094 ** catBind19293;
    for (let catBind21191 = 2; catBind21191 < catIn3094; catBind21191 += 1) {
      let catBind22177 = Number((catBind21191 * catBind20263).toPrecision(15));
      catBind22177 < catBind11177 ||
        catBind22177 > catBind11178 ||
        catBind11182.push(catBind22177);
    }
  }
  return (
    catBind11182.sort((catIn16517, catIn16518) => catIn16517 - catIn16518),
    catBind11176 >= catBind11175 ? catBind11182 : catBind11182.reverse()
  );
}
export function minTickSeparationPx(catIn6340: any, catIn6341: any) {
  if (catIn6341.length <= 1) return 1 / 0;
  let catBind16489 = 1 / 0;
  for (
    let catBind18892 = 1;
    catBind18892 < catIn6341.length;
    catBind18892 += 1
  ) {
    let catBind20046 = catIn6340(catIn6341[catBind18892 - 1] ?? 0),
      catBind20047 = catIn6340(catIn6341[catBind18892] ?? 0);
    !Number.isFinite(catBind20046) ||
      !Number.isFinite(catBind20047) ||
      (catBind16489 = Math.min(
        catBind16489,
        Math.abs(catBind20047 - catBind20046),
      ));
  }
  return catBind16489;
}

export const Iye = tryAxisTickCount;
export const Lye = logMajorTicks;
export const Rye = logMinorTicks;
