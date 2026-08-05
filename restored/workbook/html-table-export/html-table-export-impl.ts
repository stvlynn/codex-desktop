// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel HTML clipboard table (legacy Wpt/Gpt/Kpt).
// Stage-3 wave-92; kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr } from "../presentation-protobuf";
import { initAddressMetrics } from "../../utils/spreadsheet-address-utils";
import { ensureSsfFormatInit } from "../cell-xf-format";

export const ensureHtmlTableExportInit = esmInit(() => {
  wr();
  initAddressMetrics();
  ensureSsfFormatInit();
});
export function escapeHtmlText(htIn9730: any) {
  let htBind20249 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
  };
  return String(htIn9730 ?? "").replace(
    /[&<>"]/g,
    (htIn16488) => htBind20249[htIn16488] ?? htIn16488,
  );
}
export function buildExcelHtmlClipboard(htIn98: any, htIn99: any) {
  let htBind2718 = new Map(),
    htBind2719 = new Set();
  for (let htBind22989 of htIn99)
    htBind2718.set(`${htBind22989.r},${htBind22989.c}`, htBind22989);
  let htBind2720 = htIn98.reduce(
      (accumulator, current) => Math.max(accumulator, current?.length ?? 0),
      0,
    ),
    htBind2721 = Array(htBind2720).fill(0),
    htBind2722 = (htIn11219) => {
      let htBind21693 = htIn11219.length * 7 + 10;
      return Math.round(Math.max(20, Math.min(htBind21693, 360)));
    };
  for (let htBind10332 = 0; htBind10332 < htIn98.length; htBind10332++) {
    let htBind10686 = htIn98[htBind10332]?.length ?? 0;
    for (let htBind11115 = 0; htBind11115 < htBind10686; htBind11115++) {
      let htBind11390 = `${htBind10332},${htBind11115}`;
      if (htBind2719.has(htBind11390)) continue;
      let htBind11391 = htBind2718.get(htBind11390),
        htBind11392 = 1;
      if (htBind11391) {
        htBind11392 = Math.max(1, htBind11391.colspan);
        for (
          let htBind20790 = 0;
          htBind20790 < htBind11391.rowspan;
          htBind20790++
        )
          for (
            let htBind22247 = 0;
            htBind22247 < htBind11391.colspan;
            htBind22247++
          )
            (htBind20790 || htBind22247) &&
              htBind2719.add(
                `${htBind10332 + htBind20790},${htBind11115 + htBind22247}`,
              );
      }
      let htBind11393 = htIn98[htBind10332]?.[htBind11115] ?? {},
        htBind11394 = String(htBind11393.v ?? "");
      if (!htBind2720) continue;
      let htBind11395 = htBind2722(htBind11394),
        htBind11396 = Math.max(1, Math.round(htBind11395 / htBind11392));
      for (
        let htBind21344 = 0;
        htBind21344 < htBind11392 && htBind11115 + htBind21344 < htBind2720;
        htBind21344++
      ) {
        let htBind22500 = htBind2721[htBind11115 + htBind21344] ?? 0;
        htBind2721[htBind11115 + htBind21344] = Math.max(
          htBind22500,
          htBind11396,
        );
      }
    }
  }
  for (let htBind21881 = 0; htBind21881 < htBind2721.length; htBind21881++) {
    let htBind22684 = htBind2721[htBind21881];
    (!htBind22684 || !isFinite(htBind22684)) && (htBind2721[htBind21881] = 32);
  }
  function toMsoColor(htIn4424: any) {
    if (!htIn4424) return "#000";
    if (/^#/i.test(htIn4424)) return htIn4424;
    let htBind13650 = htIn4424.match(
      /^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*[\d.]+)?\)$/i,
    );
    if (htBind13650) {
      let htBind18193 = Number(htBind13650[1]),
        htBind18194 = Number(htBind13650[2]),
        htBind18195 = Number(htBind13650[3]),
        htBind18196 = (htIn13374) =>
          Math.max(0, Math.min(255, htIn13374)).toString(16).padStart(2, "0");
      return `#${htBind18196(htBind18193)}${htBind18196(htBind18194)}${htBind18196(htBind18195)}`.toUpperCase();
    }
    return htIn4424;
  }
  let htBind2723 =
    '<table style="table-layout:fixed;border-collapse:collapse;width:0px">';
  if (htBind2720 > 0) {
    htBind2723 += "<colgroup>";
    for (let htBind21251 = 0; htBind21251 < htBind2720; htBind21251++) {
      let htBind22124 = Math.max(1, Math.round(htBind2721[htBind21251] ?? 0));
      htBind2723 += `<col width="${htBind22124}"/>`;
    }
    htBind2723 += "</colgroup>";
  }
  for (let htBind3193 = 0; htBind3193 < htIn98.length; htBind3193++) {
    htBind2723 += "<tr>";
    let htBind3210 = htIn98[htBind3193]?.length ?? 0;
    for (let htBind3262 = 0; htBind3262 < htBind3210; htBind3262++) {
      if (htBind2719.has(`${htBind3193},${htBind3262}`)) continue;
      let htBind3288 = htBind2718.get(`${htBind3193},${htBind3262}`),
        htBind3289 = "";
      if (htBind3288) {
        htBind3288.rowspan > 1 &&
          (htBind3289 += ` rowspan="${htBind3288.rowspan}"`);
        htBind3288.colspan > 1 &&
          (htBind3289 += ` colspan="${htBind3288.colspan}"`);
        for (
          let htBind20791 = 0;
          htBind20791 < htBind3288.rowspan;
          htBind20791++
        )
          for (
            let htBind22248 = 0;
            htBind22248 < htBind3288.colspan;
            htBind22248++
          )
            (htBind20791 || htBind22248) &&
              htBind2719.add(
                `${htBind3193 + htBind20791},${htBind3262 + htBind22248}`,
              );
      }
      let htBind3290 = htIn98[htBind3193]?.[htBind3262] ?? {},
        htBind3291 = htBind3290.fmt ?? {},
        htBind3292 = [];
      if (
        (htBind3291.bold && htBind3292.push("font-weight:bold"),
        htBind3291.italic && htBind3292.push("font-style:italic"),
        htBind3291.underline && htBind3292.push("text-decoration:underline"),
        htBind3291.strike && htBind3292.push("text-decoration:line-through"),
        htBind3291.color &&
          htBind3292.push(`color:${toMsoColor(htBind3291.color)}`),
        htBind3291.fontFamily)
      ) {
        let htBind21116 = /\s/.test(htBind3291.fontFamily)
          ? `"${htBind3291.fontFamily}"`
          : htBind3291.fontFamily;
        htBind3292.push(`font-family:${htBind21116}`);
      }
      if (
        typeof htBind3291.fontSizePt == "number" &&
        isFinite(htBind3291.fontSizePt) &&
        htBind3291.fontSizePt > 0
      ) {
        let htBind21772 = `${Math.round(htBind3291.fontSizePt * 10) / 10}pt`;
        htBind3292.push(`font-size:${htBind21772}`);
      }
      if (htBind3291.bg) {
        htBind3292.push(`background-color:${htBind3291.bg}`);
        let htBind20327 = toMsoColor(htBind3291.bg);
        htBind3292.push(`background:${htBind20327}`);
        htBind3292.push("mso-pattern:black none");
      }
      htBind3291.align && htBind3292.push(`text-align:${htBind3291.align}`);
      htBind3291.valign &&
        htBind3292.push(`vertical-align:${htBind3291.valign}`);
      htBind3291.wrap === false && htBind3292.push("white-space:nowrap");
      htBind3291.wrap === true && htBind3292.push("white-space:normal");
      htBind3291.numFmt
        ? htBind3292.push(
            `mso-number-format:"${String(htBind3291.numFmt).replace(/"/g, '\\"')}"`,
          )
        : htBind3292.push('mso-number-format:"General"');
      typeof htBind3290.v == "string" &&
        /^\s*=/.test(htBind3290.v) &&
        htBind3292.push('mso-number-format:"\\@"');
      let htBind3293 = (htIn1215) => {
          switch (htIn1215) {
            case "hair":
              return {
                widthPx: 1,
                cssStyle: "solid",
              };
            case "thin":
              return {
                widthPx: 1,
                cssStyle: "solid",
              };
            case "medium":
              return {
                widthPx: 2,
                cssStyle: "solid",
              };
            case "thick":
              return {
                widthPx: 3,
                cssStyle: "solid",
              };
            case "dotted":
              return {
                widthPx: 1,
                cssStyle: "dotted",
              };
            case "dashed":
              return {
                widthPx: 1,
                cssStyle: "dashed",
              };
            case "mediumDashed":
              return {
                widthPx: 2,
                cssStyle: "dashed",
              };
            case "dashDot":
              return {
                widthPx: 1,
                cssStyle: "dashed",
              };
            case "dashDotDot":
              return {
                widthPx: 1,
                cssStyle: "dotted",
              };
            case "mediumDashDot":
              return {
                widthPx: 2,
                cssStyle: "dashed",
              };
            case "mediumDashDotDot":
              return {
                widthPx: 2,
                cssStyle: "dotted",
              };
            case "double":
              return {
                widthPx: 3,
                cssStyle: "double",
              };
            case "slantDashDot":
              return {
                widthPx: 2,
                cssStyle: "dashed",
              };
            default:
              return null;
          }
        },
        htBind3294 = (htIn6014, htIn6015, htIn6016) => {
          let htBind16053 = htBind3293(htIn6015);
          if (!htBind16053) return;
          let htBind16054 = htIn6016 ?? "#000",
            htBind16055 = `${htBind16053.widthPx}px ${htBind16053.cssStyle} ${htBind16054}`,
            htBind16056 = `${(htBind16053.widthPx * 72) / 96}pt ${htBind16053.cssStyle} ${toMsoColor(htBind16054)}`;
          htBind3292.push(`border-${htIn6014}:${htBind16055}`);
          htBind3292.push(`mso-border-${htIn6014}-alt:${htBind16056}`);
        };
      if (
        (htBind3291.border?.top &&
          htBind3294(
            "top",
            htBind3291.border.top.style,
            htBind3291.border.top.color,
          ),
        htBind3291.border?.right &&
          htBind3294(
            "right",
            htBind3291.border.right.style,
            htBind3291.border.right.color,
          ),
        htBind3291.border?.bottom &&
          htBind3294(
            "bottom",
            htBind3291.border.bottom.style,
            htBind3291.border.bottom.color,
          ),
        htBind3291.border?.left &&
          htBind3294(
            "left",
            htBind3291.border.left.style,
            htBind3291.border.left.color,
          ),
        htBind3291.diagonal?.up || htBind3291.diagonal?.down)
      ) {
        let htBind15513 = htBind3291.diagonal.style,
          htBind15514 = htBind3291.diagonal.color ?? "#000",
          htBind15515 = htBind3293(htBind15513);
        if (htBind15515) {
          let htBind18550 = `${(htBind15515.widthPx * 72) / 96}pt ${htBind15515.cssStyle} ${toMsoColor(htBind15514)}`;
          htBind3291.diagonal.up &&
            htBind3292.push(`mso-diagonal-up:${htBind18550}`);
          htBind3291.diagonal.down &&
            htBind3292.push(`mso-diagonal-down:${htBind18550}`);
        }
      }
      let htBind3295 = htBind3292.length
        ? ` style='${htBind3292.join(";")}'`
        : "";
      htBind2723 += `<td${htBind3289}${htBind3295}>${escapeHtmlText(htBind3290.v ?? "")}</td>`;
    }
    htBind2723 += "</tr>";
  }
  return (
    (htBind2723 += "</table>"),
    `<html><head><meta http-equiv=Content-Type content="text/html; charset=utf-8"><meta name=ProgId content="Excel.Sheet"><meta name=Generator content="Microsoft Excel 15"><style>table{mso-displayed-decimal-separator:"\\.";mso-displayed-thousand-separator:"\\,";}tr{mso-height-source:auto;}td{padding-top:1px;padding-right:1px;padding-left:1px;mso-ignore:padding;color:black;font-size:12.0pt;font-weight:400;font-style:normal;text-decoration:none;font-family:"Aptos Narrow", sans-serif;mso-font-charset:0;text-align:general;vertical-align:bottom;border:none;white-space:nowrap;mso-rotate:0;}</style></head><body><!--StartFragment-->${htBind2723}<!--EndFragment--></body></html>`
  );
}

/** Legacy ensure alias (`Wpt`). */
export const Wpt = ensureHtmlTableExportInit;
/** Legacy alias (`Gpt`). */
export const Gpt = escapeHtmlText;
/** Legacy alias (`Kpt`). */
export const Kpt = buildExcelHtmlClipboard;
