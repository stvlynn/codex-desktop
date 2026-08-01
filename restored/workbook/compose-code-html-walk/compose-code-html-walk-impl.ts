// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: walk HTML/code DOM into paragraph runs (legacy code HTML walker nest).
// Stage-3 wave-132.

import {
  workbookBinding1592,
  workbookBinding1594,
  workbookBinding1595,
} from "../mermaid-slide-helpers";
import { vAe } from "../presentation-code-block";

export function walkCodeHtmlIntoParagraphs(
  chwIn5545: any,
  chwIn5546: any,
  chwIn5547: any,
) {
  if (chwIn5545 instanceof workbookBinding1592.TextNode) {
    pushCodeTextRuns(chwIn5545.text, chwIn5546, chwIn5547);
    return;
  }
  if (!(chwIn5545 instanceof workbookBinding1592.HTMLElement)) return;
  let chwBind15342 = [
    ...chwIn5546,
    ...splitClassList(chwIn5545.getAttribute("class")),
  ];
  for (let chwBind20538 of chwIn5545.childNodes)
    (chwBind20538.nodeType === workbookBinding1592.NodeType.TEXT_NODE ||
      chwBind20538.nodeType === workbookBinding1592.NodeType.ELEMENT_NODE) &&
      walkCodeHtmlIntoParagraphs(chwBind20538, chwBind15342, chwIn5547);
}

export function pushCodeTextRuns(
  chwIn5591: any,
  chwIn5592: any,
  chwIn5593: any,
) {
  let chwBind15422 = chwIn5591.split("\n");
  for (let [chwBind16563, chwBind16564] of chwBind15422.entries()) {
    if (chwBind16564.length > 0) {
      let chwBind19307 = chwIn5593[chwIn5593.length - 1];
      if (!chwBind19307)
        throw Error("Code plugin requires at least one paragraph.");
      chwBind19307.runs ??= [];
      chwBind19307.runs.push({
        run: chwBind16564,
        textStyle: codeRunStyleFromClasses(chwIn5592),
      });
    }
    chwBind16563 < chwBind15422.length - 1 &&
      chwIn5593.push(emptyCodeParagraph());
  }
}

export function emptyCodeParagraph() {
  return {
    runs: [],
    paragraphStyle: {
      tabStops: [],
    },
  };
}

export function codeRunStyleFromClasses(chwIn9567: any) {
  let chwBind20096 = vAe(chwIn9567);
  return {
    fontSize: `${workbookBinding1595}px`,
    typeface: workbookBinding1594,
    color: chwBind20096.color,
    bold: chwBind20096.bold,
    italic: chwBind20096.italic,
  };
}

export function splitClassList(chwIn9794: any) {
  return chwIn9794 === undefined
    ? []
    : chwIn9794
        .split(/\s+/)
        .map((item: string) => item.trim())
        .filter((item: string) => item.length > 0);
}
