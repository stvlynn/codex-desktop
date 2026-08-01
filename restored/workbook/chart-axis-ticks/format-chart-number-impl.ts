// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: SSF-backed chart number formatters (legacy #439/478).
// Stage-3 wave-114.

import { format as appInitialAt } from "../../vendor/d3-format";
import { toEsm } from "../../runtime/rolldown-runtime";
import workbookSsf from "../../vendor/ssf";

const ssfEsm = toEsm(workbookSsf);
const MILLION_NUMFMT_RE = /^\$?(?:#,##)?0(?:\.0+)?M$/i;

void appInitialAt;
void ssfEsm;
void MILLION_NUMFMT_RE;

export function formatAxisTickValue(catIn8213: any, catIn8214: any) {
  if (!Number.isFinite(catIn8213)) return "";
  if (catIn8214)
    try {
      let catBind22020 = MILLION_NUMFMT_RE.test(catIn8214.trim())
        ? "General"
        : catIn8214;
      return ssfEsm.default.format(catBind22020, catIn8213);
    } catch {}
  return appInitialAt("~s")(catIn8213);
}
export function formatChartNumber(catIn10865: any, catIn10866: any) {
  if (catIn10866)
    try {
      return ssfEsm.default.format(catIn10866, catIn10865);
    } catch {}
  return appInitialAt("~s")(catIn10865);
}
