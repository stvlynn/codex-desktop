// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: highlight.js code-plugin meta (legacy lAe/dAe/fAe/hAe…).
// Stage-3 wave-136.

import { Core } from "../../boundaries/highlight-js";
import { workbookBinding1592 } from "../mermaid-slide-helpers";
import {
  walkCodeHtmlIntoParagraphs,
  emptyCodeParagraph,
} from "../compose-code-html-walk";

const workbookBinding1591 = Core();

export function lAe(event: any) {
  let pcbBind19198 = uAe(event.code),
    pcbBind19199 = dAe(pcbBind19198, event.language);
  return {
    code: pcbBind19198,
    label: pAe(event, pcbBind19199.language),
    language: pcbBind19199.language,
    paragraphs: hAe(pcbBind19199.html),
  };
}
export function uAe(pcbIn9444: any) {
  let pcbBind19958 = Array.isArray(pcbIn9444)
    ? pcbIn9444.join("\n")
    : pcbIn9444;
  if (pcbBind19958.length === 0)
    throw Error("Code plugin requires non-empty code.");
  return pcbBind19958;
}
export function dAe(pcbIn7602: any, pcbIn7603: any) {
  if (pcbIn7603 === undefined) {
    let pcbBind22152 = workbookBinding1591.highlightAuto(pcbIn7602);
    return {
      html: pcbBind22152.value,
      language: pcbBind22152.language,
    };
  }
  let pcbBind18090 = fAe(pcbIn7603);
  return {
    html: workbookBinding1591.highlight(pcbIn7602, {
      language: pcbBind18090,
    }).value,
    language: pcbBind18090,
  };
}
export function fAe(pcbIn6922: any) {
  let pcbBind17271 = pcbIn6922.trim().toLowerCase();
  if (pcbBind17271.length === 0)
    throw Error("Code plugin language must be non-empty when provided.");
  if (!workbookBinding1591.getLanguage(pcbBind17271))
    throw Error(`Code plugin does not support language "${pcbIn6922}".`);
  return pcbBind17271;
}
export function pAe(pcbIn10465: any, pcbIn10466: any) {
  return pcbIn10465.fileName === undefined
    ? pcbIn10465.language === undefined
      ? pcbIn10466
      : pcbIn10465.language
    : pcbIn10465.fileName;
}
export function mAe(pcbIn9470: any) {
  return pcbIn9470.fit === undefined
    ? pcbIn9470.position?.width === undefined ||
      pcbIn9470.position.height === undefined
      ? "content"
      : "frame"
    : pcbIn9470.fit;
}
export function hAe(pcbIn7082: any) {
  let pcbBind17420 = workbookBinding1592
      .parse(`<code>${pcbIn7082}</code>`, {
        lowerCaseTagName: true,
        preserveTagNesting: true,
      })
      .querySelector("code"),
    pcbBind17421 = [emptyCodeParagraph()];
  if (!pcbBind17420) return pcbBind17421;
  for (let pcbBind23006 of pcbBind17420.childNodes)
    walkCodeHtmlIntoParagraphs(pcbBind23006, [], pcbBind17421);
  return pcbBind17421;
}
