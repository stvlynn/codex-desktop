// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: pie/doughnut series paint (legacy helper #496).
// Stage-3 wave-101/102 (paintPieLabels / fbe).

import { Cn, En } from "../presentation-protobuf";
import { cpsH } from "./boundary-hooks";
import { workbookHelper568 } from "./measure-canvas-text-impl";

void Cn;
void En;
void cpsH;

export function paintPieSeries(
  cpsIn726: any,
  cpsIn727: any,
  cpsIn728: any,
  cpsIn729: any,
  cpsIn730: any,
  cpsIn731: any,
) {
  let cpsBind5147 = cpsIn727.series[0];
  if (!cpsBind5147 || cpsIn731?.has(0)) return;
  let cpsBind5148 = cpsBind5147.values,
    cpsBind5149 = appInitialSat(cpsBind5148);
  if (cpsBind5149 === 0) return;
  let cpsBind5150 = cpsIn728.x + cpsIn728.width / 2,
    cpsBind5151 = cpsIn728.y + cpsIn728.height / 2,
    cpsBind5152 = Math.min(cpsIn728.width, cpsIn728.height) / 2,
    cpsBind5153 = cpsIn727.type === Cn.CHART_TYPE_DOUGHNUT,
    cpsBind5154 = cpsBind5153
      ? Math.max(0, Math.min(100, cpsIn727.doughnutOptions?.holeSize ?? 55))
      : 0,
    cpsBind5155 = cpsBind5153 ? (cpsBind5154 / 100) * cpsBind5152 : 0,
    cpsBind5156 = appInitialNit()
      .innerRadius(cpsBind5155)
      .outerRadius(cpsBind5152)
      .context(cpsIn726),
    cpsBind5157 =
      (((cpsBind5153
        ? cpsIn727.doughnutOptions?.firstSliceAngle
        : cpsIn727.pieOptions?.firstSliceAngle) ?? 0) /
        360) *
      Math.PI *
      2,
    cpsBind5158 = appInitialOit()
      .sort(null)
      .startAngle(cpsBind5157)
      .endAngle(cpsBind5157 + Math.PI * 2),
    cpsBind5159 = cpsH.bh347(cpsBind5147, cpsIn727.categories);
  cpsIn726.save();
  cpsIn726.translate(cpsBind5150, cpsBind5151);
  cpsIn726.lineJoin = "bevel";
  cpsBind5158(cpsBind5148).forEach((item, index) => {
    let cpsBind7799 = item.index ?? index,
      cpsBind7800 = cpsH.bh469(cpsBind5147, cpsBind7799, cpsBind7799, cpsIn729);
    cpsH.bh474(cpsBind5147, cpsBind7799) ||
      (cpsBind7800 && (cpsIn726.fillStyle = cpsBind7800),
      cpsIn726.beginPath(),
      cpsBind5156(item),
      cpsIn726.fill());
    let cpsBind7801 = cpsH.bh482(cpsBind5147, cpsBind7799, cpsIn729);
    if (
      (cpsBind7801.visible &&
        (cpsIn726.beginPath(),
        cpsBind5156(item),
        (cpsIn726.strokeStyle = cpsBind7801.color),
        (cpsIn726.lineWidth = cpsBind7801.widthPx),
        cpsIn726.stroke()),
      cpsIn730)
    ) {
      let cpsBind11686 = cpsBind5155,
        cpsBind11687 = cpsBind5152,
        cpsBind11688 = (item.startAngle + item.endAngle) / 2,
        cpsBind11689 = cpsBind5150 + Math.cos(cpsBind11688) * cpsBind11687,
        cpsBind11690 = cpsBind5151 + Math.sin(cpsBind11688) * cpsBind11687,
        cpsBind11691 =
          cpsBind5159[cpsBind7799] ??
          cpsIn727.categories?.[cpsBind7799] ??
          cpsBind5147.name;
      cpsIn730.push({
        kind: "pie",
        cx: cpsBind5150,
        cy: cpsBind5151,
        rInner: cpsBind11686,
        rOuter: cpsBind11687,
        startAngle: item.startAngle,
        endAngle: item.endAngle,
        value: item.value,
        seriesName: cpsBind5147.name,
        category: cpsBind11691,
        color: cpsBind7800,
        anchorX: cpsBind11689,
        anchorY: cpsBind11690,
      });
    }
    let cpsBind7802 = cpsH.sliceMid(
      cpsIn727,
      cpsBind5147,
      cpsBind7799,
      item.value,
      cpsBind5149,
    );
    cpsBind7802 &&
      paintPieLabels(
        cpsIn726,
        cpsBind7802,
        (item.startAngle + item.endAngle) / 2,
        cpsBind5152,
        cpsBind5155,
        cpsIn729,
      );
  });
  cpsIn726.restore();
}

export function paintPieLabels(
  cpsIn891: any,
  cpsIn892: any,
  cpsIn893: any,
  cpsIn894: any,
  cpsIn895: any,
  cpsIn896: any,
) {
  let cpsBind5690 =
      cpsIn892.position === En.DATA_LABEL_POSITION_OUT_END
        ? cpsIn894
        : cpsIn894 * 0.7,
    cpsBind5691 =
      cpsIn895 > 0 ? cpsIn895 + (cpsIn894 - cpsIn895) / 2 : cpsIn894 * 0.55,
    cpsBind5692 =
      cpsIn892.position === En.DATA_LABEL_POSITION_OUT_END
        ? cpsIn894 * 1.12
        : cpsIn892.position === En.DATA_LABEL_POSITION_IN_END
          ? cpsIn894 * 0.78
          : cpsBind5691,
    cpsBind5693 = Math.sin(cpsIn893) * cpsBind5690,
    cpsBind5694 = -Math.cos(cpsIn893) * cpsBind5690,
    cpsBind5695 = Math.sin(cpsIn893) * cpsBind5692,
    cpsBind5696 = -Math.cos(cpsIn893) * cpsBind5692,
    cpsBind5697 = cpsIn892.textStyle?.fontSize
      ? cpsH.bh152(cpsIn892.textStyle.fontSize)
      : 10,
    cpsBind5698 = cpsIn892.textStyle?.bold ?? true,
    cpsBind5699 = cpsIn892.textStyle?.fill?.color
      ? cpsH.resolveColor(cpsIn892.textStyle.fill.color, cpsIn896)
      : cpsH.defaultMuted,
    cpsBind5700 = cpsIn892.text.split("\n"),
    cpsBind5701 = cpsBind5697 * 1.2;
  cpsIn891.save();
  cpsIn891.font = `${cpsBind5698 ? "bold " : ""}${cpsBind5697}px ${cpsH.chartFontFamily}`;
  cpsIn891.textAlign = "center";
  cpsIn891.textBaseline = "middle";
  let cpsBind5702 =
      Math.max(...cpsBind5700.map((item) => cpsIn891.measureText(item).width)) +
      10,
    cpsBind5703 = cpsBind5701 * cpsBind5700.length + 8,
    cpsBind5704 = {
      x: cpsBind5695 - cpsBind5702 / 2,
      y: cpsBind5696 - cpsBind5703 / 2,
      width: cpsBind5702,
      height: cpsBind5703,
    };
  cpsIn892.showLeaderLines &&
    cpsIn892.position === En.DATA_LABEL_POSITION_OUT_END &&
    (cpsIn891.save(),
    cpsH.bh433(cpsIn891, cpsIn892.stroke, cpsIn896, {
      color: "#808080",
      widthPx: 0.75,
    }),
    cpsIn891.beginPath(),
    cpsIn891.moveTo(cpsBind5693, cpsBind5694),
    cpsIn891.lineTo(cpsBind5695, cpsBind5696),
    cpsIn891.stroke(),
    cpsIn891.restore());
  cpsIn892.fill &&
    ((cpsIn891.fillStyle = cpsH.bh212(
      cpsIn891,
      cpsBind5704,
      cpsIn892.fill,
      cpsIn896,
      "transparent",
    )),
    cpsIn891.fillRect(
      cpsBind5704.x,
      cpsBind5704.y,
      cpsBind5704.width,
      cpsBind5704.height,
    ));
  cpsIn892.stroke?.fill?.color &&
    (cpsH.bh433(cpsIn891, cpsIn892.stroke, cpsIn896, {
      widthPx: 0.75,
    }),
    cpsIn891.strokeRect(
      cpsBind5704.x,
      cpsBind5704.y,
      cpsBind5704.width,
      cpsBind5704.height,
    ));
  cpsIn891.fillStyle = cpsBind5699;
  let cpsBind5705 = cpsBind5696 - ((cpsBind5700.length - 1) * cpsBind5701) / 2;
  cpsBind5700.forEach((item, index) => {
    cpsIn891.fillText(item, cpsBind5695, cpsBind5705 + index * cpsBind5701);
  });
  cpsIn891.restore();
}

/** Legacy alias. */
/** Compat alias for barrels. */
export const workbookHelper496 = paintPieSeries;
