// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-88: table-row-range cluster ensure
// (legacy JEe + YEe + Binding1321 + QEe + $Ee).

import { JEe } from "./table-cell-impl";
import { YEe } from "./table-row-range-impl";
import { workbookBinding1321 } from "./table-row-range-impl";
import { QEe } from "./table-row-range-impl";
import { $Ee } from "./table-row-range-impl";

/** Seed cell + row + range + columns + borders (call any leaf; they chain). */
export const ensureTableRowRangeInit = () => {
  JEe();
  YEe();
  workbookBinding1321();
  QEe();
  $Ee();
};
