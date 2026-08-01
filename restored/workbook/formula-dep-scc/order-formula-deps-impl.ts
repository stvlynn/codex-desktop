// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula dependency topo-order (legacy BXe).
// Stage-3 wave-116.

import { findFormulaSccs } from "./formula-dep-scc-impl";

export function orderFormulaDeps(sccIn2631: any, sccIn2632: any) {
  let sccBind10106 = new Map(),
    sccBind10107 = [],
    sccBind10108 = [];
  for (let sccBind19995 of sccIn2632) {
    let sccBind20518 = 0,
      sccBind20519 = sccIn2631.precedents.get(sccBind19995);
    if (sccBind20519)
      for (let sccBind23037 of sccBind20519)
        sccIn2632.has(sccBind23037) && (sccBind20518 += 1);
    sccBind10106.set(sccBind19995, sccBind20518);
    sccBind20518 === 0 && sccBind10108.push(sccBind19995);
  }
  let sccBind10109 = 0;
  for (; sccBind10109 < sccBind10108.length; ) {
    let sccBind16326 = sccBind10108[sccBind10109];
    sccBind10109 += 1;
    sccBind10107.push(sccBind16326);
    let sccBind16327 = sccIn2631.dependents.get(sccBind16326);
    if (sccBind16327)
      for (let sccBind19081 of sccBind16327) {
        if (!sccIn2632.has(sccBind19081)) continue;
        let sccBind19610 = sccBind10106.get(sccBind19081);
        if (sccBind19610 === undefined) continue;
        let sccBind19611 = sccBind19610 - 1;
        sccBind10106.set(sccBind19081, sccBind19611);
        sccBind19611 === 0 && sccBind10108.push(sccBind19081);
      }
  }
  let sccBind10110 = new Set();
  for (let [sccBind22826, sccBind22827] of sccBind10106.entries())
    sccBind22827 && sccBind22827 > 0 && sccBind10110.add(sccBind22826);
  return {
    order: sccBind10107,
    circular:
      sccBind10110.size > 0
        ? findFormulaSccs(sccIn2631, sccIn2632, sccBind10110)
        : [],
  };
}

export const BXe = orderFormulaDeps;
