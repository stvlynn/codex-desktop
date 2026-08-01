// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: resolve element style with slide scope (legacy $De).
// Stage-3 wave-134.

import { tOe } from "../text-frame-resolve";
import { workbookHelper685 } from "./snapshot-paragraphs-impl";
import { applyOutlineLevelStyles as nOe } from "./layout-blob-impl";

export function $De(cesIn8034: any) {
  let cesBind18538 = tOe(
    workbookHelper685(cesIn8034.modelElement, cesIn8034.presentation),
    cesIn8034.protoElement,
  );
  return cesIn8034.scope !== "slide" ||
    cesBind18538 === undefined ||
    cesIn8034.protoElement === undefined
    ? cesBind18538
    : nOe(cesBind18538, cesIn8034.protoElement, cesIn8034.slide);
}
