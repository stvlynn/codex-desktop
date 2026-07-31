// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: KPI/chart card name+value painter (legacy ASe).
// Stage-3 wave-106.

import { color } from "../../vendor/d3-color";
import { ccpH } from "./boundary-hooks";

void color;
void ccpH;

export function paintChartCard(ccpIn1666: any, ccpIn1667: any, ccpIn1668: any, ccpIn1669: any, ) {
  let ccpBind7951 = ccpIn1667.width - ccpH.padX * 2,
    ccpBind7952 = Math.max(0, ccpIn1669?.reservedTop ?? 0),
    ccpBind7953 = ccpIn1667.y + ccpH.padX + ccpBind7952,
    ccpBind7954 = ccpIn1667.y + ccpIn1667.height - ccpH.padX,
    ccpBind7955 = ccpBind7954 - ccpBind7953;
  if (
    ccpBind7951 < ccpH.minWidth ||
    ccpBind7955 < ccpH.minHeight
  )
    return;
  let ccpBind7956 = ccpH.toCssColor(
      color(ccpIn1667.fill) ?? color("#000000"),
    ),
    ccpBind7957 =
      ccpBind7956 === "#ffffff"
        ? "rgba(255,255,255,0.8)"
        : "rgba(0,0,0,0.7)",
    ccpBind7958 = ccpH.layoutCardLines(
      ccpIn1666,
      ccpIn1667.name,
      ccpBind7951,
      ccpBind7955,
    );
  if (ccpBind7958.length === 0) return;
  let ccpBind7959 = ccpH.formatCardValue(
    ccpIn1667.value,
    ccpIn1668,
  );
  ccpIn1666.save();
  ccpIn1666.beginPath();
  ccpIn1666.rect(
    ccpIn1667.x,
    ccpIn1667.y,
    ccpIn1667.width,
    ccpIn1667.height,
  );
  ccpIn1666.clip();
  ccpIn1666.textAlign = "left";
  ccpIn1666.textBaseline = "top";
  ccpIn1666.font = `600 11px ${ccpH.uiFont}`;
  let ccpBind7960 = ccpIn1669?.verticalAlign === "bottom";
  ccpIn1666.fillStyle = ccpBind7956;
  let ccpBind7961 = Math.min(
      ccpBind7958.length,
      Math.floor(ccpBind7955 / 14) - 1,
    ),
    ccpBind7962 = ccpBind7958.slice(
      0,
      Math.max(1, ccpBind7961),
    ),
    ccpBind7963 =
      ccpBind7962.length * 14 + 14 <= ccpBind7955,
    ccpBind7964 =
      ccpBind7962.length * 14 + (ccpBind7963 ? 14 : 0),
    ccpBind7965 = ccpBind7960
      ? ccpBind7954 - ccpBind7964
      : ccpBind7953;
  for (let ccpBind22747 of ccpBind7962) {
    ccpIn1666.fillText(
      ccpBind22747,
      ccpIn1667.x + ccpH.padX,
      ccpBind7965,
      ccpBind7951,
    );
    ccpBind7965 += 14;
  }
  ccpBind7963 &&
    ((ccpIn1666.font = `500 10px ${ccpH.uiFont}`),
    (ccpIn1666.fillStyle = ccpBind7957),
    ccpIn1666.fillText(
      ccpBind7959,
      ccpIn1667.x + ccpH.padX,
      ccpBind7965,
      ccpBind7951,
    ));
  ccpIn1666.restore();
}

/** Legacy alias. */
export const ASe = paintChartCard;
