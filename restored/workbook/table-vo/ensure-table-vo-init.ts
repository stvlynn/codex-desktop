// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-76: table-vo cluster ensure (legacy fhe/yhe/xhe).

import { esmInit } from "../../runtime/rolldown-runtime";
import { fhe } from "./table-vo-impl";
import { yhe } from "./tables-collection-impl";
import { xhe } from "./data-tables-impl";

export const ensureTableVoInit = esmInit(() => {
  fhe();
  yhe();
  xhe();
});
