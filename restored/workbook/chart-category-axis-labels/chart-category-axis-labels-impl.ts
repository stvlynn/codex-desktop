// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: category-axis label paint/layout (legacy Nxe…Lxe).
// Stage-3 wave-98.

import { calH } from "./boundary-hooks";

void calH;

export function paintCategoryAxisLabels(props: any) {
  let {
      ctx,
      axis,
      categories,
      scale,
      plotDims,
      themeMap,
      maxLabelBandHeightPx,
      labelHeightPx,
    } = props,
    calBind3835 = calH.bh428(axis, themeMap);
  ctx.font = calH.bh430(calBind3835);
  let calBind3836 = {
    ...axis?.textStyle,
  };
  (calBind3836.fontSize === undefined ||
    !Number.isFinite(calBind3836.fontSize) ||
    calBind3836.fontSize <= 0) &&
    (calBind3836.fontSize = Math.round(calBind3835.fontSize * 75));
  let calBind3837 = labelHeightPx ?? calH.bh431(ctx, calBind3835.fontSize),
    calBind3838 = calH.bh435(axis),
    calBind3839 = calFn436(axis),
    calBind3840 = zxe(axis),
    calBind3841 = Bxe(axis),
    calBind3842 =
      axis && calFn444(axis) ? Bye(axis, categories) : undefined,
    calBind3843 =
      axis && calBind3842
        ? calFn445(axis, categories.map(Number))
        : undefined,
    calBind3844 =
      calBind3842?.map(({ positionCategory }) => positionCategory) ??
      categories,
    calBind3845 =
      calBind3842?.map(({ label }) => label) ??
      calBind3844.map((item) => calFn446(item, axis)),
    calBind3846 =
      calBind3842 && calBind3843
        ? calBind3842.map(({ serial }) => Hxe(serial, calBind3843, plotDims))
        : undefined,
    calBind3847 = qxe(ctx, calBind3845);
  if (calBind3844.length === 0 || calBind3839)
    return {
      step: calBind3840 ?? 1,
      rotationDeg: calBind3841 ?? 0,
      labelMaxWidthPx: 0,
      labelBandHeight: 0,
      labelLinesByIndex: {},
      visibleIndices: calFn542(calBind3844.length, calBind3840 ?? 1),
      hideTickLabels: calBind3839,
      tickLabelDistancePx: calBind3838,
      autoRotation: false,
      autoStep: false,
      tickCategories: calBind3844,
      tickLabels: calBind3845,
      tickPositionsPx: calBind3846,
    };
  let calBind3848 = calBind3845.map((item) => {
      let calBind11692 = workbookQ(
        {
          type: j.ELEMENT_TYPE_TEXT,
          paragraphs: [
            {
              runs: [
                {
                  text: item,
                  citations: [],
                  reviewMarkIds: [],
                },
              ],
              inlineNodes: [],
            },
          ],
          textStyle: calBind3836,
          effects: [],
          children: [],
          citations: [],
          levelsStyles: [],
          id: "category-axis-label",
        },
        themeMap,
        {
          wrap: false,
        },
      );
      if (calBind11692 !== undefined)
        return calBind11692.lines.reduce(
          (accumulator, current) => Math.max(accumulator, current.widthPx),
          0,
        );
    }),
    calBind3849 = calBind3840
      ? [calBind3840]
      : calBind3842
        ? [1]
        : Array.from(
            {
              length: calBind3844.length,
            },
            (calIn16526, calIn16527) => calIn16527 + 1,
          ),
    calBind3850 = calBind3841 === undefined ? [..._L] : [calBind3841],
    calBind3851;
  for (let calBind11970 of calBind3849)
    for (let calBind12277 of calBind3850) {
      let calBind12557 = layoutCategoryAxisLabelBand({
        ctx,
        categories: calBind3844,
        labels: calBind3845,
        scale,
        plotDims,
        labelHeightPx: calBind3837,
        step: calBind11970,
        rotationDeg: calBind12277,
        maxLabelBandHeightPx,
        tickLabelDistancePx: calBind3838,
        minimumReadableWidthPx: calBind3847,
        labelWidthsPx: calBind3848,
        explicitRotation: calBind3841,
        explicitStep: calBind3840,
        tickPositionsPx: calBind3846,
      });
      if (calBind12557.fits) return calBind12557;
      (!calBind3851 || calBind12557.overflowPx < calBind3851.overflowPx) &&
        (calBind3851 = calBind12557);
    }
  return (
    calBind3851 ?? {
      step: calBind3840 ?? Math.max(1, calBind3844.length),
      rotationDeg: calBind3841 ?? 90,
      labelMaxWidthPx: 0,
      labelBandHeight: 0,
      labelLinesByIndex: {},
      visibleIndices: calFn542(
        calBind3844.length,
        calBind3840 ?? Math.max(1, calBind3844.length),
      ),
      hideTickLabels: false,
      tickLabelDistancePx: calBind3838,
      autoRotation: calBind3841 === undefined,
      autoStep: calBind3840 === undefined,
      tickCategories: calBind3844,
      tickLabels: calBind3845,
      tickPositionsPx: calBind3846,
      fits: false,
      overflowPx: 1 / 0,
    }
  );
}
export function layoutCategoryAxisLabelBand(props: any) {
  let {
      ctx,
      categories,
      labels,
      scale,
      plotDims,
      labelHeightPx,
      step,
      rotationDeg,
      maxLabelBandHeightPx,
      tickLabelDistancePx,
      minimumReadableWidthPx,
      labelWidthsPx,
      explicitRotation,
      explicitStep,
      tickPositionsPx,
    } = props,
    calBind5021 = calFn542(categories.length, step),
    calBind5022 = Vxe(scale, categories, calBind5021, tickPositionsPx),
    calBind5023 = Kxe(rotationDeg),
    calBind5024 = Math.max(
      0,
      maxLabelBandHeightPx - calBind1168 - tickLabelDistancePx,
    ),
    calBind5025 = Uxe(calBind5022, labelHeightPx, calBind5023),
    calBind5026 = Wxe(calBind5024, labelHeightPx, calBind5023),
    calBind5027 = Gxe(Math.min(calBind5025, calBind5026, plotDims.width)),
    calBind5028 =
      rotationDeg === 0
        ? Math.max(1, Math.floor(calBind5024 / labelHeightPx))
        : 1,
    calBind5029 =
      rotationDeg === 0 &&
      labelsFitWithoutOverlap({
        categories,
        scale,
        plotDims,
        visibleIndices: calBind5021,
        labelWidthsPx,
        tickPositionsPx,
      }),
    calBind5030 = rotationDeg === 0 && calBind5028 > 1 && !calBind5029,
    calBind5031 = calBind5029 ? plotDims.width : calBind5027,
    calBind5032 = 0,
    calBind5033 = 0,
    calBind5034 = {};
  for (let calBind16249 of calBind5021) {
    let calBind16674 = splitAxisLabelLines({
      ctx,
      label: labels[calBind16249] ?? "",
      maxWidthPx: calBind5031,
      maxLineCount: calBind5028,
      allowWordWrap: calBind5030,
    });
    calBind5034[calBind16249] = calBind16674;
    calBind5033 = Math.max(calBind5033, calBind16674.length);
    for (let calBind22266 of calBind16674) {
      let calBind22573 = ctx.measureText(calBind22266).width;
      calBind22573 > calBind5032 && (calBind5032 = calBind22573);
    }
  }
  let calBind5035 =
      rotationDeg === 0
        ? {
            width: calBind5032,
            height: calBind5033 * labelHeightPx,
          }
        : calFn437(calBind5032, labelHeightPx, calBind5023),
    calBind5036 =
      calBind5021.length > 0
        ? calBind5035.height + calBind1168 + tickLabelDistancePx
        : 0,
    calBind5037 = Jxe(explicitRotation, explicitStep)
      ? Math.max(0, minimumReadableWidthPx - calBind5027)
      : 0,
    calBind5038 = Rxe({
      ctx,
      categories: labels,
      visibleIndices: calBind5021,
      labelMaxWidthPx: calBind5027,
      rotationDeg,
      explicitRotation,
    }),
    calBind5039 = Math.max(
      0,
      calBind5036 - maxLabelBandHeightPx,
      calBind5037,
      calBind5038,
    );
  return {
    step,
    rotationDeg,
    labelMaxWidthPx: calBind5027,
    labelBandHeight: calBind5036,
    labelLinesByIndex: calBind5034,
    visibleIndices: calBind5021,
    hideTickLabels: false,
    tickLabelDistancePx,
    autoRotation: explicitRotation === undefined,
    autoStep: explicitStep === undefined,
    tickCategories: categories,
    tickLabels: labels,
    tickPositionsPx,
    fits: calBind5039 <= 0,
    overflowPx: calBind5039,
  };
}
function splitAxisLabelLines(props: any) {
  let { allowWordWrap, ctx, label, maxLineCount, maxWidthPx } = props,
    calBind13810 = label.split(/\r\n|\n|\r/);
  if (calBind13810.length <= 1)
    return allowWordWrap
      ? wrapAxisLabelLines(ctx, label, maxWidthPx, maxLineCount)
      : [calH.bh427(ctx, label, maxWidthPx)];
  let calBind13811 = Math.max(1, maxLineCount),
    calBind13812 = calBind13810.slice(0, calBind13811);
  return (
    calBind13812.length < calBind13810.length &&
      (calBind13812[calBind13812.length - 1] = calBind13810
        .slice(calBind13812.length - 1)
        .join(" ")),
    calBind13812.map((item) => calH.bh427(ctx, item.trim(), maxWidthPx))
  );
}
function labelsFitWithoutOverlap(props: any) {
  let {
      categories,
      plotDims,
      scale,
      labelWidthsPx,
      visibleIndices,
      tickPositionsPx,
    } = props,
    calBind10973 = plotDims.x + plotDims.width,
    calBind10974 = -1 / 0;
  for (let calBind14152 of visibleIndices) {
    let calBind14418 = categories[calBind14152];
    if (!calH.bh543(calBind14418)) continue;
    let calBind14419 =
      tickPositionsPx?.[calBind14152] ?? calH.bh425(scale, calBind14418);
    if (calBind14419 === undefined || !Number.isFinite(calBind14419)) continue;
    let calBind14420 = labelWidthsPx[calBind14152];
    if (
      calBind14420 === undefined ||
      !Number.isFinite(calBind14420) ||
      calBind14420 <= 0 ||
      calBind14420 > plotDims.width
    )
      return false;
    let calBind14421 = calBind14420 / 2,
      calBind14422 = Math.min(
        Math.max(calBind14419, plotDims.x + calBind14421),
        calBind10973 - calBind14421,
      ),
      calBind14423 = calBind14422 - calBind14421,
      calBind14424 = calBind14422 + calBind14421;
    if (calBind14423 < calBind10974 - calH.overlapEpsilon) return false;
    calBind10974 = calBind14424;
  }
  return true;
}
function wrapAxisLabelLines(
  calIn3161: any,
  calIn3162: any,
  calIn3163: any,
  calIn3164: any,
) {
  let calBind11302 = Math.max(1, calIn3164);
  if (calBind11302 === 1) return [calH.bh427(calIn3161, calIn3162, calIn3163)];
  let calBind11303 = calIn3162.trim().split(/\s+/).filter(Boolean);
  if (calBind11303.length <= 1)
    return [calH.bh427(calIn3161, calIn3162, calIn3163)];
  let calBind11304 = [],
    calBind11305 = 0;
  for (
    ;
    calBind11305 < calBind11303.length && calBind11304.length < calBind11302;
  ) {
    if (calBind11304.length === calBind11302 - 1) {
      calBind11304.push(
        calH.bh427(
          calIn3161,
          calBind11303.slice(calBind11305).join(" "),
          calIn3163,
        ),
      );
      break;
    }
    let calBind16270 = calBind11303[calBind11305] ?? "";
    for (calBind11305 += 1; calBind11305 < calBind11303.length; ) {
      let calBind21548 = `${calBind16270} ${calBind11303[calBind11305]}`;
      if (calIn3161.measureText(calBind21548).width > calIn3163) break;
      calBind16270 = calBind21548;
      calBind11305 += 1;
    }
    calBind11304.push(calH.bh427(calIn3161, calBind16270, calIn3163));
  }
  return calBind11304.length > 0
    ? calBind11304
    : [calH.bh427(calIn3161, calIn3162, calIn3163)];
}

/** Legacy aliases. */
export const Nxe = paintCategoryAxisLabels;
export const Pxe = layoutCategoryAxisLabelBand;
