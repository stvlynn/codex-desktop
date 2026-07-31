// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: horizontal bar-direction series paint (legacy Dbe).
// Stage-3 wave-95. Wave-89 chart-paint hook was misnamed paintFunnel.

import { Mn as _presentationMn } from "../presentation-protobuf";
import { cbdH } from "./boundary-hooks";

void _presentationMn;
void cbdH;

export function paintBarDirectionSeries(
  cbdIn281: any,
  cbdIn282: any,
  cbdIn283: any,
  cbdIn284: any,
  cbdIn285: any,
  cbdIn286: any,
) {
  let { x, y } = cbdIn283,
    cbdBind3458 = cbdH.bh421(cbdIn282, cbdIn286),
    cbdBind3459 = cbdBind3458.categories,
    cbdBind3460 = cbdBind3458.mode === "clustered",
    cbdBind3461 =
      cbdIn282.xAxis?.orientation === _presentationMn.AXIS_ORIENTATION_MIN_MAX,
    cbdBind3462 = new Map(
      cbdBind3458.visibleSeries.map((item, index) => [item, index]),
    );
  cbdBind3459.forEach((item, index) => {
    let cbdBind3592 = y(item);
    if (cbdBind3592 === undefined) return;
    let cbdBind3593 = cbdBind3458.segmentsByCategory[index];
    if (!cbdBind3593) return;
    let cbdBind3594 =
        cbdBind3460 || cbdBind3593.length === 0
          ? undefined
          : cbdBind3593.reduce((accumulator, current, _index) => {
              if (!current.hasValue || current.end < current.start)
                return accumulator;
              if (accumulator === undefined) return _index;
              let cbdBind18247 = cbdBind3593[accumulator];
              return cbdBind18247 && cbdBind18247.end < current.end
                ? _index
                : accumulator;
            }, undefined),
      cbdBind3595 =
        cbdBind3460 || cbdBind3593.length === 0
          ? undefined
          : cbdBind3593.reduce((accumulator, current, _index) => {
              if (!current.hasValue || current.end >= current.start)
                return accumulator;
              if (accumulator === undefined) return _index;
              let cbdBind18230 = cbdBind3593[accumulator];
              return cbdBind18230 && cbdBind18230.end > current.end
                ? _index
                : accumulator;
            }, undefined);
    cbdBind3593.forEach((_item, _index) => {
      if (!_item.hasValue) return;
      let cbdBind4159 = cbdIn282.series[_item.seriesIndex];
      if (!cbdBind4159) return;
      let cbdBind4160 = _item.valueRaw,
        cbdBind4161 = cbdBind3462.get(_item.seriesIndex);
      if (cbdBind4161 === undefined) return;
      let cbdBind4162 = cbdBind3460
          ? cbdBind4161.bandwidth() *
            cbdH.bh394({
              orderIndex: cbdBind4161,
              seriesCount: cbdBind3458.visibleSeries.length,
              overlap: cbdIn282.barOptions?.overlap,
              reverse: cbdBind3461,
            })
          : 0,
        cbdBind4163 = cbdBind3460 ? cbdBind3592 + cbdBind4162 : cbdBind3592,
        cbdBind4164 = cbdBind3460
          ? cbdBind4161.bandwidth() *
            cbdH.bh393(
              cbdBind3458.visibleSeries.length,
              cbdIn282.barOptions?.overlap,
            )
          : cbdBind4161.bandwidth(),
        cbdBind4165 = cbdBind4163(cbdH.bh404(cbdBind4163, _item.start)),
        cbdBind4166 = cbdBind4163(cbdH.bh404(cbdBind4163, _item.end)),
        cbdBind4167 = Math.min(cbdBind4165, cbdBind4166),
        cbdBind4168 = Math.max(cbdBind4165, cbdBind4166),
        cbdBind4169 = Math.abs(cbdBind4168 - cbdBind4167),
        cbdBind4170 = _item.end >= _item.start,
        cbdBind4171 = cbdH.bh474(cbdBind4159, index),
        cbdBind4172 = cbdH.bh469(
          cbdBind4159,
          index,
          _item.seriesIndex,
          cbdIn284,
          {
            chartStyleIndex: cbdIn282.styleIndex,
          },
        ),
        cbdBind4173 = cbdH.bh470(
          cbdIn281,
          {
            x: cbdBind4167,
            y: cbdBind4163,
            width: cbdBind4169,
            height: cbdBind4164,
          },
          cbdBind4159,
          index,
          _item.seriesIndex,
          cbdIn284,
          {
            chartStyleIndex: cbdIn282.styleIndex,
          },
        );
      !cbdBind4171 && cbdBind4173 && (cbdIn281.fillStyle = cbdBind4173);
      let cbdBind4174 = Math.max(0, Math.min(2, cbdBind4164 / 2, cbdBind4169)),
        cbdBind4175 =
          cbdBind3460 ||
          (_item.end >= _item.start
            ? _index === cbdBind3594
            : _index === cbdBind3595)
            ? cbdBind4174
            : 0;
      cbdIn281.beginPath();
      cbdBind4170
        ? (cbdIn281.moveTo(cbdBind4167, cbdBind4163),
          cbdIn281.lineTo(cbdBind4168 - cbdBind4175, cbdBind4163),
          cbdIn281.arcTo(
            cbdBind4168,
            cbdBind4163,
            cbdBind4168,
            cbdBind4163 + cbdBind4175,
            cbdBind4175,
          ),
          cbdIn281.lineTo(cbdBind4168, cbdBind4163 + cbdBind4164 - cbdBind4175),
          cbdIn281.arcTo(
            cbdBind4168,
            cbdBind4163 + cbdBind4164,
            cbdBind4168 - cbdBind4175,
            cbdBind4163 + cbdBind4164,
            cbdBind4175,
          ),
          cbdIn281.lineTo(cbdBind4167, cbdBind4163 + cbdBind4164),
          cbdIn281.closePath())
        : (cbdIn281.moveTo(cbdBind4168, cbdBind4163),
          cbdIn281.lineTo(cbdBind4167 + cbdBind4175, cbdBind4163),
          cbdIn281.arcTo(
            cbdBind4167,
            cbdBind4163,
            cbdBind4167,
            cbdBind4163 + cbdBind4175,
            cbdBind4175,
          ),
          cbdIn281.lineTo(cbdBind4167, cbdBind4163 + cbdBind4164 - cbdBind4175),
          cbdIn281.arcTo(
            cbdBind4167,
            cbdBind4163 + cbdBind4164,
            cbdBind4167 + cbdBind4175,
            cbdBind4163 + cbdBind4164,
            cbdBind4175,
          ),
          cbdIn281.lineTo(cbdBind4168, cbdBind4163 + cbdBind4164),
          cbdIn281.closePath());
      !cbdBind4171 && cbdBind4173 && cbdIn281.fill();
      let { color, widthPx } = cbdH.bh473(cbdBind4159, index, cbdIn284);
      if (
        (color &&
          ((cbdIn281.strokeStyle = color),
          (cbdIn281.lineWidth = widthPx ?? 1),
          cbdIn281.stroke()),
        cbdIn285)
      ) {
        let cbdBind15889 = cbdBind4170 ? cbdBind4168 : cbdBind4167;
        cbdIn285.push({
          kind: "bar-horizontal",
          x: cbdBind4167,
          y: cbdBind4163,
          width: cbdBind4169,
          height: cbdBind4164,
          seriesName: cbdBind4159.name,
          category: item,
          value: cbdBind4160,
          color: cbdBind4172,
          anchorX: cbdBind15889,
          anchorY: cbdBind4163,
        });
      }
      let cbdBind4176 = cbdH.bh495(cbdIn282, cbdBind4159, index, cbdBind4160);
      cbdBind4176.show &&
        cbdBind4164 > 0 &&
        cbdH.bh500(
          cbdIn281,
          cbdBind4176.text,
          cbdBind4176.position,
          cbdBind4176.textStyle,
          cbdIn284,
          {
            x: cbdBind4170 ? cbdBind4168 : cbdBind4167,
            y: cbdBind4163 + cbdBind4164 / 2,
          },
          {
            box: {
              x: cbdBind4167,
              y: cbdBind4163,
              width: cbdBind4169,
              height: cbdBind4164,
            },
            isPositive: cbdBind4170,
            callout: cbdBind4176.callout,
            orientation: "horizontal",
          },
        );
    });
  });
}

/** Legacy alias. */
export const Dbe = paintBarDirectionSeries;
