// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: AND over flattened formula args (legacy $0e).
// Stage-3 wave-131 — restored after false-dead inventory miss (jot wrapper).

import { flattenFormulaArgs } from "../formula-token-utils";
import { workbookBinding1835 } from "../formula-stats";

export function formulaAndFromArgs(): any {
  let flat = flattenFormulaArgs(arguments as any),
    acc: any = workbookBinding1835;
  for (let i = 0; i < flat.length; i++) {
    if (flat[i] instanceof Error) return flat[i];
    flat[i] === undefined ||
      flat[i] === null ||
      typeof flat[i] == "string" ||
      (acc === workbookBinding1835 && (acc = true), flat[i] || (acc = false));
  }
  return acc;
}

/** Legacy alias. */
export function $0e(): any {
  return formulaAndFromArgs.apply(null, arguments as any);
}
