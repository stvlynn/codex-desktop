// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-22: master/layout paragraph spacing defaults (legacy Binding218 cluster).

import { resolvePlaceholderLevelStyles } from "../placeholder-resolve";
export function resolveMasterParagraphDefaults(
  tbIn7531: unknown,
  tbIn7532: unknown,
  tbIn7533: unknown,
) {
  let tbBind18016 = resolvePlaceholderLevelStyles(tbIn7531, tbIn7533),
    tbBind18017 = tbBind18016[0];
  return {
    lineSpacingPercent: tbBind18017?.paragraphStyle?.lineSpacingPercent,
    spaceBefore: tbBind18017?.spaceBefore,
    spaceAfter: tbBind18017?.spaceAfter,
    paragraphLevels: tbBind18016,
  };
}
