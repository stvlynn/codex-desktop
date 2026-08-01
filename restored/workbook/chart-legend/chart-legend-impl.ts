// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart legend + map-legend paint (legacy legend/map painters).
// Stage-3 wave-92; kept flat under maxFlatLines.

import { Cn, Mn } from "../presentation-protobuf";
import { hundredthsPointToCssPx } from "../font-stack";
import { resolveFillStyle } from "../canvas-fill";
import { resolveColorToCssRgba } from "../color-resolve";
import { clH } from "./boundary-hooks";
import {
  $A,
  workbookHelper484,
  workbookHelper488,
} from "./legend-marker-size-impl";

/** Legacy Binding899 — map-legend ramp max width. */
export const LEGEND_RAMP_MAX_WIDTH = 120;
/** Legacy Binding900 — legend outer pad. */
export const LEGEND_PAD = 12;
/** Legacy Binding901 — small legend gap. */
export const LEGEND_GAP_SM = 4;
/** Legacy Binding902 — swatch size. */
export const LEGEND_SWATCH = 12;
/** Legacy Binding903 — series name gap. */
export const LEGEND_SERIES_GAP = 12;
/** Legacy Binding905 — legend inset. */
export const LEGEND_INSET = 8;
/** Legacy Binding907 — row gap. */
export const LEGEND_ROW_GAP = 16;
/** Legacy Binding908 — entry gap / marker size. */
export const LEGEND_ENTRY_GAP = 10;
/** Legacy Binding909 — column gap. */
export const LEGEND_COL_GAP = 8;
/** Legacy Binding912 — stroke width. */
export const LEGEND_STROKE_WIDTH = 1;
/** Legacy `_j` — label/swatch gap. */
export const LEGEND_LABEL_GAP = 6;

/** Fallback legend label color (legacy `$D`). */
export const DEFAULT_CHART_MUTED = "#666";

/** Resolve legend text fill (legacy `$ye`). */
export function resolveLegendLabelColor(chart: any, themeMap: any): string {
  const color = chart?.legend?.textStyle?.fill?.color;
  return color ? resolveColorToCssRgba(color, themeMap) : DEFAULT_CHART_MUTED;
}

export function paintChartLegend(
  clIn103: any,
  clIn104: any,
  clIn105: any,
  clIn106: any,
  clIn107: any = Mn.LEGEND_POSITION_TOP,
  clIn108: any,
) {
  if (clIn104.series.length === 0) return;
  clIn103.save();
  let clBind2739 = $ye(clIn104, clIn106),
    clBind2740 = clIn104.legend?.textStyle?.fontSize,
    clBind2741 = clBind2740 ? hundredthsPointToCssPx(clBind2740) : 11;
  clIn103.font = `${clBind2741}px ${clH.bh387(clIn104.legend?.textStyle)}`;
  let clBind2742 = clH.bh486(clIn107),
    clBind2743 = clH.bh487(clBind2742) ? Math.max(0, clIn105.width) : undefined;
  if (clIn104.type === Cn.CHART_TYPE_MAP) {
    paintMapLegend(
      clIn103,
      clIn104,
      clIn105,
      clIn106,
      clBind2742,
      clBind2741,
      clBind2739,
      clIn108,
    );
    clIn103.restore();
    return;
  }
  let { width, height, entries, labelWidths, rows } = clH.bh490(
    clIn103,
    clIn104,
    clIn106,
    {
      position: clBind2742,
      maxWidthPx: clBind2743,
    },
  );
  if (entries.length === 0) {
    clIn103.restore();
    return;
  }
  let clBind2744 = LEGEND_ENTRY_GAP,
    clBind2745 = clIn105.x + 8,
    clBind2746 = clIn105.y + 8,
    clBind2747 = clH.bh487(clBind2742),
    clBind2748 =
      (clBind2747 ? workbookHelper488(clBind2742) : null)?.top ?? LEGEND_INSET;
  if (clBind2747) {
    let clBind21192 = width,
      clBind21193 = Math.max(0, clIn105.width),
      clBind21194 = Math.max(0, (clBind21193 - clBind21192) / 2);
    clBind2745 = clIn105.x + clBind21194;
    clBind2746 = clIn105.y;
  } else
    (clBind2742 === Mn.LEGEND_POSITION_LEFT ||
      clBind2742 === Mn.LEGEND_POSITION_RIGHT) &&
      ((clBind2745 = clIn105.x + 8),
      (clBind2746 = Math.max(
        clIn105.y + 8,
        clIn105.y + (clIn105.height - height) / 2,
      )));
  let clBind2749 = !!clIn104.legend?.overlay,
    clBind2750 = {
      x: clBind2745,
      y: clBind2746,
      width,
      height,
    };
  clIn103.beginPath();
  clIn103.rect(clBind2745, clBind2746, width, height);
  clIn104.legend?.fill
    ? ((clIn103.fillStyle = resolveFillStyle(
        clIn103,
        clBind2750,
        clIn104.legend.fill,
        clIn106,
        "transparent",
      )),
      clIn103.fill())
    : clBind2749 &&
      (clIn103.save(),
      (clIn103.globalAlpha = 0.85),
      (clIn103.fillStyle = "#ffffff"),
      clIn103.fill(),
      clIn103.restore());
  clIn104.legend?.stroke?.fill?.color
    ? (clH.bh433(clIn103, clIn104.legend?.stroke, clIn106, {
        widthPx: 0.75,
      }),
      clIn103.stroke())
    : clBind2749 &&
      (clIn103.save(),
      (clIn103.strokeStyle = "#d0d0d0"),
      (clIn103.lineWidth = 0.75),
      clIn103.setLineDash([]),
      clIn103.stroke(),
      clIn103.restore());
  let clBind2751 = Array.isArray(clIn108?.hiddenSeriesIndices)
      ? new Set(clIn108?.hiddenSeriesIndices)
      : clIn108?.hiddenSeriesIndices,
    clBind2752 = (clIn309, clIn310, clIn311, clIn312) => {
      let clBind3551 = clIn104.series[clIn309.seriesIndex];
      if (!clBind3551) return;
      let clBind3552 = clIn309.label,
        clBind3553 =
          labelWidths[clIn310] ?? clIn103.measureText(clBind3552).width,
        clBind3554 = $A(clIn309.chartType),
        { width: _width, height: _height } = workbookHelper484(clIn309),
        clBind3555 = clIn309.pointIndex,
        clBind3556 = clIn309.fillColor;
      clBind3556 === undefined &&
        (clBind3556 =
          clBind3555 === undefined
            ? clH.bh465(clBind3551, clIn309.seriesIndex, clIn106)
            : clH.bh469(clBind3551, clBind3555, clBind3555, clIn106));
      let clBind3557,
        clBind3558,
        clBind3559 = false;
      if (clBind3554) {
        let clBind21546 = clH.bh481(clBind3551, clIn309.seriesIndex, clIn106);
        clBind3557 = clBind21546.color;
        clBind3558 = clBind21546.widthPx;
        clBind3559 = clBind21546.visible;
      } else if (clBind3555 !== undefined) {
        let clBind22408 = clH.bh482(clBind3551, clBind3555, clIn106);
        clBind3557 = clBind22408.color;
        clBind3558 = clBind22408.widthPx;
      } else {
        let clBind22458 = clH.bh472(clBind3551, clIn106);
        clBind3557 = clBind22458.color;
        clBind3558 = clBind22458.widthPx;
      }
      let clBind3560 = clIn312 - _height / 2,
        clBind3561 = _width,
        clBind3562 = _height,
        clBind3563 = clBind3557;
      clBind3563 === undefined && (clBind3563 = clBind3556);
      let clBind3564 = false;
      if (
        (clBind3555 !== undefined &&
          (clBind3564 = clH.bh474(clBind3551, clBind3555)),
        clBind2751?.has(clIn309.seriesIndex) ?? false)
      ) {
        if (clBind3554 && clBind3563 && clBind3558 !== undefined)
          clH.bh483(clIn103, clBind3551, clIn106, {
            x: clIn311,
            y: clIn312,
            width: clBind3561,
            color: clBind3563,
            lineWidth: clBind3558,
            lineVisible: clBind3559,
            opacity: 0.5,
          });
        else {
          let clBind9099 = clIn311 + 0.5,
            clBind9100 = clBind3560 + 0.5,
            clBind9101 = clBind3561 - 1,
            clBind9102 = clBind3562 - 1;
          clIn103.beginPath();
          clIn103.moveTo(clBind9099 + 1.5, clBind9100);
          clIn103.lineTo(clBind9099 + clBind9101 - 1.5, clBind9100);
          clIn103.quadraticCurveTo(
            clBind9099 + clBind9101,
            clBind9100,
            clBind9099 + clBind9101,
            clBind9100 + 1.5,
          );
          clIn103.lineTo(
            clBind9099 + clBind9101,
            clBind9100 + clBind9102 - 1.5,
          );
          clIn103.quadraticCurveTo(
            clBind9099 + clBind9101,
            clBind9100 + clBind9102,
            clBind9099 + clBind9101 - 1.5,
            clBind9100 + clBind9102,
          );
          clIn103.lineTo(clBind9099 + 1.5, clBind9100 + clBind9102);
          clIn103.quadraticCurveTo(
            clBind9099,
            clBind9100 + clBind9102,
            clBind9099,
            clBind9100 + clBind9102 - 1.5,
          );
          clIn103.lineTo(clBind9099, clBind9100 + 1.5);
          clIn103.quadraticCurveTo(
            clBind9099,
            clBind9100,
            clBind9099 + 1.5,
            clBind9100,
          );
          clIn103.closePath();
          let clBind9104 = false;
          clBind3557 !== undefined && clBind3558 !== undefined && clBind3558 > 0
            ? ((clIn103.strokeStyle = clBind3557),
              (clIn103.lineWidth = clBind3558),
              (clBind9104 = true))
            : clBind3556 &&
              ((clIn103.strokeStyle = clBind3556),
              (clIn103.lineWidth = LEGEND_STROKE_WIDTH),
              (clBind9104 = true));
          clBind9104 && clIn103.stroke();
        }
      } else
        clBind3554 && clBind3563 && clBind3558 !== undefined
          ? clH.bh483(clIn103, clBind3551, clIn106, {
              x: clIn311,
              y: clIn312,
              width: clBind3561,
              color: clBind3563,
              lineWidth: clBind3558,
              lineVisible: clBind3559,
              opacity: 1,
            })
          : (!clBind3564 && clBind3556 && (clIn103.fillStyle = clBind3556),
            clIn103.beginPath(),
            clIn103.moveTo(clIn311 + 2, clBind3560),
            clIn103.lineTo(clIn311 + clBind3561 - 2, clBind3560),
            clIn103.quadraticCurveTo(
              clIn311 + clBind3561,
              clBind3560,
              clIn311 + clBind3561,
              clBind3560 + 2,
            ),
            clIn103.lineTo(clIn311 + clBind3561, clBind3560 + clBind3562 - 2),
            clIn103.quadraticCurveTo(
              clIn311 + clBind3561,
              clBind3560 + clBind3562,
              clIn311 + clBind3561 - 2,
              clBind3560 + clBind3562,
            ),
            clIn103.lineTo(clIn311 + 2, clBind3560 + clBind3562),
            clIn103.quadraticCurveTo(
              clIn311,
              clBind3560 + clBind3562,
              clIn311,
              clBind3560 + clBind3562 - 2,
            ),
            clIn103.lineTo(clIn311, clBind3560 + 2),
            clIn103.quadraticCurveTo(
              clIn311,
              clBind3560,
              clIn311 + 2,
              clBind3560,
            ),
            clIn103.closePath(),
            !clBind3564 && clBind3556 && clIn103.fill(),
            clBind3557 !== undefined &&
              clBind3558 !== undefined &&
              clBind3558 > 0 &&
              ((clIn103.strokeStyle = clBind3557),
              (clIn103.lineWidth = clBind3558),
              clIn103.stroke()));
      clIn103.fillStyle = clBind2739;
      clIn103.textAlign = "left";
      clIn103.textBaseline = "middle";
      let clBind3565 = clIn311 + clBind3561 + LEGEND_LABEL_GAP;
      if (
        (clIn103.fillText(clBind3552, clBind3565, clIn312),
        clIn108?.chartHoverTargets)
      ) {
        let clBind13139 = clIn311 + clBind3561,
          clBind13140 = clIn312,
          clBind13141 = clBind3561 + LEGEND_LABEL_GAP + clBind3553,
          clBind13142 = clIn312 - clBind2744 / 2,
          clBind13143 = clBind2744;
        clIn108.chartHoverTargets.push({
          kind: "legend",
          x: clIn311,
          y: clBind13142,
          width: clBind13141,
          height: clBind13143,
          value: 0,
          color: clBind3556,
          anchorX: clBind13139,
          anchorY: clBind13140,
          elementId: clIn108.elementId,
          seriesIndex: clIn309.seriesIndex,
          seriesName: clBind3551.name,
        });
      }
    };
  if (clBind2747) {
    let clBind7728 = rows ?? [],
      clBind7729 = Math.max(0, width - LEGEND_INSET * 2),
      clBind7730 = false,
      clBind7731 = clIn104.legend?.manualLayout;
    if (clBind7731 !== undefined && clBind7728.length > 1) {
      let clBind20817 =
          clBind7731.w !== undefined && Number.isFinite(clBind7731.w),
        clBind20818 =
          clBind7731.h !== undefined && Number.isFinite(clBind7731.h);
      clBind7730 = clBind20817 || clBind20818;
    }
    let clBind7732 = 0;
    clBind7730 &&
      (clBind7732 = clBind7728.reduce(
        (accumulator, current) =>
          Math.max(accumulator, current.itemIndices.length),
        0,
      ));
    let clBind7733 = 0;
    clBind7732 > 0 && (clBind7733 = Math.max(0, clIn105.width) / clBind7732);
    let clBind7734 = 0;
    clBind7730 &&
      (clBind7734 = Math.max(
        clBind2744,
        (clIn105.height - LEGEND_INSET * 2 - clBind2744) /
          (clBind7728.length - 1),
      ));
    clBind7728.forEach((item, index) => {
      let clBind12401 =
          clBind2745 +
          LEGEND_INSET +
          Math.max(0, (clBind7729 - item.width) / 2),
        clBind12402 =
          clBind2746 +
          clBind2748 +
          clBind2744 / 2 +
          index * (clBind2744 + LEGEND_COL_GAP);
      clBind7730 &&
        (clBind12402 =
          clIn105.y + LEGEND_INSET + clBind2744 / 2 + index * clBind7734);
      item.itemIndices.forEach((_item, _index) => {
        let clBind16152 = entries[_item];
        if (!clBind16152) return;
        let clBind16153 = clBind12401;
        clBind7730 &&
          (clBind16153 = clIn105.x + 8 + LEGEND_INSET + _index * clBind7733);
        clBind2752(clBind16152, _item, clBind16153, clBind12402);
        let clBind16154 =
            labelWidths[_item] ?? clIn103.measureText(clBind16152.label).width,
          { width: _width } = workbookHelper484(clBind16152);
        clBind7730 ||
          (clBind12401 +=
            _width + LEGEND_LABEL_GAP + clBind16154 + LEGEND_ROW_GAP);
      });
    });
  } else {
    let clBind21130 = clBind2745 + LEGEND_INSET,
      clBind21131 = clBind2746 + clBind2748;
    entries.forEach((item, index) => {
      clBind2752(item, index, clBind21130, clBind21131 + clBind2744 / 2);
      clBind21131 += clBind2744 + LEGEND_ROW_GAP;
    });
  }
  clIn103.restore();
}
export function paintMapLegend(
  clIn462: any,
  clIn463: any,
  clIn464: any,
  clIn465: any,
  clIn466: any,
  clIn467: any,
  clIn468: any,
  clIn469: any,
) {
  let clBind4023 = clH.bh489(clIn463, clIn465);
  if (
    !clBind4023 ||
    (Array.isArray(clIn469?.hiddenSeriesIndices)
      ? new Set(clIn469?.hiddenSeriesIndices)
      : clIn469?.hiddenSeriesIndices
    )?.has(0)
  )
    return;
  let clBind4024 = clIn462.measureText(clBind4023.minLabel).width,
    clBind4025 = clIn462.measureText(clBind4023.maxLabel).width,
    clBind4026 = clBind4023.seriesName
      ? clIn462.measureText(clBind4023.seriesName).width
      : 0,
    clBind4027 = !!clBind4023.seriesName,
    clBind4028 = clH.bh487(clIn466),
    clBind4029 = Math.max(0, clIn464.width - LEGEND_PAD * 2);
  if (clBind4029 <= 0) return;
  if (clBind4028) {
    let clBind6824 = Math.max(0, Math.min(clBind4029, LEGEND_RAMP_MAX_WIDTH));
    if (clBind6824 <= 0) return;
    let clBind6825 = Math.max(clBind6824, clBind4026),
      clBind6826 = Math.max(0, (clBind4029 - clBind6825) / 2);
    clIn466 === Mn.LEGEND_POSITION_LEFT
      ? (clBind6826 = 0)
      : clIn466 === Mn.LEGEND_POSITION_RIGHT &&
        (clBind6826 = Math.max(0, clBind4029 - clBind6825));
    let clBind6827 = Math.max(0, (clBind6825 - clBind6824) / 2),
      clBind6828 = clIn464.x + LEGEND_PAD + clBind6826 + clBind6827,
      clBind6829 = Math.max(0, clIn464.height - LEGEND_PAD * 2),
      clBind6830 =
        (clBind4027 ? clIn467 + LEGEND_SERIES_GAP : 0) +
        LEGEND_SWATCH +
        LEGEND_GAP_SM +
        clIn467,
      clBind6831 = Math.max(0, (clBind6829 - clBind6830) / 2),
      clBind6832 = clIn464.y + LEGEND_PAD + clBind6831,
      clBind6833 = clBind6832 + (clBind4027 ? clIn467 + LEGEND_SERIES_GAP : 0),
      clBind6834 = clIn462.createLinearGradient(
        clBind6828,
        clBind6833,
        clBind6828 + clBind6824,
        clBind6833,
      );
    clBind6834.addColorStop(0, clBind4023.rampStart);
    clBind6834.addColorStop(1, clBind4023.rampEnd);
    clIn462.fillStyle = clBind6834;
    clIn462.fillRect(clBind6828, clBind6833, clBind6824, LEGEND_SWATCH);
    clIn462.strokeStyle = "rgba(0, 0, 0, 0.12)";
    clIn462.lineWidth = 1;
    clIn462.strokeRect(clBind6828, clBind6833, clBind6824, LEGEND_SWATCH);
    let clBind6835 = clBind6833 + LEGEND_SWATCH + LEGEND_GAP_SM;
    if (
      ((clIn462.fillStyle = clIn468),
      (clIn462.textBaseline = "top"),
      (clIn462.textAlign = "left"),
      clIn462.fillText(clBind4023.minLabel, clBind6828, clBind6835),
      (clIn462.textAlign = "right"),
      clIn462.fillText(
        clBind4023.maxLabel,
        clBind6828 + clBind6824,
        clBind6835,
      ),
      clBind4023.seriesName)
    ) {
      clIn462.textAlign = "center";
      clIn462.textBaseline = "top";
      let clBind20535 = clIn464.x + LEGEND_PAD + clBind6826 + clBind6825 / 2;
      clIn462.fillText(clBind4023.seriesName, clBind20535, clBind6832);
    }
    return;
  }
  let clBind4030 = Math.max(clBind4024, clBind4025),
    clBind4031 = clBind4030 > 0 ? LEGEND_GAP_SM : 0,
    clBind4032 = Math.max(
      0,
      Math.min(LEGEND_SWATCH, clBind4029 - clBind4031 - clBind4030),
    );
  if (clBind4032 <= 0) return;
  let clBind4033 = Math.max(clBind4032 + clBind4031 + clBind4030, clBind4026),
    clBind4034 = Math.max(0, (clBind4029 - clBind4033) / 2),
    clBind4035 = clIn464.x + LEGEND_PAD + clBind4034,
    clBind4036 = clBind4035 + clBind4032 + clBind4031,
    clBind4037 = Math.max(0, clIn464.height - LEGEND_PAD * 2),
    clBind4038 = clBind4027 ? clIn467 + LEGEND_SERIES_GAP : 0,
    clBind4039 = Math.max(0, clBind4037 - clBind4038),
    clBind4040 = Math.min(LEGEND_RAMP_MAX_WIDTH, clBind4039);
  if (clBind4040 <= 0) return;
  let clBind4041 = clIn464.y + LEGEND_PAD + clBind4038,
    clBind4042 = clBind4041 + clBind4040,
    clBind4043 = clIn462.createLinearGradient(
      clBind4035,
      clBind4042,
      clBind4035,
      clBind4041,
    );
  if (
    (clBind4043.addColorStop(0, clBind4023.rampStart),
    clBind4043.addColorStop(1, clBind4023.rampEnd),
    (clIn462.fillStyle = clBind4043),
    clIn462.fillRect(clBind4035, clBind4041, clBind4032, clBind4040),
    (clIn462.strokeStyle = "rgba(0, 0, 0, 0.12)"),
    (clIn462.lineWidth = 1),
    clIn462.strokeRect(clBind4035, clBind4041, clBind4032, clBind4040),
    (clIn462.fillStyle = clIn468),
    (clIn462.textAlign = "left"),
    (clIn462.textBaseline = "middle"),
    clBind4030 > 0 &&
      (clIn462.fillText(clBind4023.maxLabel, clBind4036, clBind4041),
      clIn462.fillText(clBind4023.minLabel, clBind4036, clBind4042)),
    clBind4023.seriesName)
  ) {
    clIn462.textAlign = "center";
    clIn462.textBaseline = "top";
    let clBind20564 = clIn464.x + LEGEND_PAD + clBind4034 + clBind4033 / 2;
    clIn462.fillText(
      clBind4023.seriesName,
      clBind20564,
      clIn464.y + LEGEND_PAD,
    );
  }
}

/** Legacy alias kept for any residual call sites. */
export const lbe = paintMapLegend;
