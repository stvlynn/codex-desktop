// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: table has border/content check (legacy vTe).
// Stage-3 wave-138.

import { tcpH } from "./boundary-hooks";

export function vTe(tcpIn6598: any) {
  let tcpBind16873 = tcpIn6598.table?.rows ?? [];
  for (let tcpBind18692 of tcpBind16873)
    for (let tcpBind19346 of tcpBind18692.cells ?? [])
      if (
        tcpH.bh634(tcpBind19346.lines?.top) ||
        tcpH.bh634(tcpBind19346.lines?.right) ||
        tcpH.bh634(tcpBind19346.lines?.bottom) ||
        tcpH.bh634(tcpBind19346.lines?.left)
      )
        return true;
  return false;
}
