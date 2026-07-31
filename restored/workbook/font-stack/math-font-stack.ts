// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-14: Granola/STIX/Cambria math font names + CSS stack.

import { esmInit } from "../../runtime/rolldown-runtime";

/** Legacy `workbookBinding490`. */
export let GRANOLA_MATH_FONT: string;
/** Legacy `workbookBinding491`. */
export let STIX_TWO_MATH_FONT: string;
/** Legacy `workbookBinding492`. */
export let CAMBRIA_MATH_FONT: string;
/** Legacy `workbookBinding493` — quoted CSS stack for math runs. */
export let MATH_FONT_STACK: string;

export let ensureMathFontStackInit: () => void = esmInit(() => {
  GRANOLA_MATH_FONT = "Granola Math";
  STIX_TWO_MATH_FONT = "STIX Two Math";
  CAMBRIA_MATH_FONT = "Cambria Math";
  MATH_FONT_STACK = `'${GRANOLA_MATH_FONT}', '${STIX_TWO_MATH_FONT}', '${CAMBRIA_MATH_FONT}', 'Times New Roman', serif`;
});
