// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-18: grapheme tokenize + DOCX-break split (legacy yce).

import { segmentGraphemes } from "../font-metrics";
import { WHITESPACE_RE, DOCX_BREAK_RENDERED_MARKER, TOKENIZE_CACHE_LIMIT, tokenizeCache } from "./text-layout-constants";
export function tokenizeTextRuns(textIn1102: unknown) {
  function workbookHelper1182(textIn1750) {
    let workbookBinding8200 = segmentGraphemes(textIn1750),
      workbookBinding8201 = [],
      workbookBinding8202 = [],
      workbookBinding8203 = null,
      workbookBinding8204 = () => {
        !workbookBinding8202.length || !workbookBinding8203 || (workbookBinding8201.push({
          type: workbookBinding8203,
          text: workbookBinding8202.join(""),
          graphemes: workbookBinding8202.slice()
        }), workbookBinding8202 = [], workbookBinding8203 = null);
      };
    for (let workbookBinding10459 = 0; workbookBinding10459 < workbookBinding8200.length; workbookBinding10459++) {
      let workbookBinding10841 = workbookBinding8200[workbookBinding10459];
      if (!workbookBinding10841) continue;
      let workbookBinding10842 = workbookBinding8200[workbookBinding10459 + 1];
      if (workbookBinding10841 === "\r" && workbookBinding10842 === "\n") {
        workbookBinding8204();
        workbookBinding8201.push({
          type: "newline",
          text: "\r\n"
        });
        workbookBinding10459++;
        continue;
      }
      if (workbookBinding10841 === "\n" || workbookBinding10841 === "\r") {
        workbookBinding8204();
        workbookBinding8201.push({
          type: "newline",
          text: workbookBinding10841
        });
        continue;
      }
      if (workbookBinding10841 === "\t") {
        workbookBinding8204();
        workbookBinding8201.push({
          type: "tab",
          text: workbookBinding10841
        });
        continue;
      }
      let workbookBinding10843 = WHITESPACE_RE.test(workbookBinding10841) ? "whitespace" : "word";
      workbookBinding10843 !== workbookBinding8203 && (workbookBinding8204(), workbookBinding8203 = workbookBinding10843);
      workbookBinding8202.push(workbookBinding10841);
    }
    return workbookBinding8204(), workbookBinding8201;
  }
  if (!textIn1102) return [];
  let workbookBinding6476 = tokenizeCache.get(textIn1102);
  if (workbookBinding6476) return workbookBinding6476;
  let workbookBinding6477 = [],
    workbookBinding6478 = 0;
  for (; workbookBinding6478 < textIn1102.length;) {
    let workbookBinding20386 = textIn1102.indexOf(DOCX_BREAK_RENDERED_MARKER, workbookBinding6478),
      workbookBinding20387 = workbookBinding20386 >= 0 ? workbookBinding20386 : textIn1102.length;
    if (workbookBinding20387 > workbookBinding6478 && workbookBinding6477.push(...workbookHelper1182(textIn1102.slice(workbookBinding6478, workbookBinding20387))), workbookBinding20386 < 0) break;
    workbookBinding6478 = workbookBinding20386 + 22;
  }
  return tokenizeCache.size >= TOKENIZE_CACHE_LIMIT && tokenizeCache.clear(), tokenizeCache.set(textIn1102, workbookBinding6477), workbookBinding6477;
}
