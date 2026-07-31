// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: spreadsheet canvas paint helpers (legacy SYe…Helper831 + emu/theme inits).
// Stage-3 wave-66 cohesive helper impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { initAddressMetrics } from "../../utils/spreadsheet-address-utils";
import {
  ensureWorkbookZ,
  ensureWorkbookT,
  ensureWorkbookXt,
  ensureWr,
  ensureWorkbookBinding1252,
  ensureWorkbookBinding1266,
  ensureWorkbookS,
  ensureDollarX,
  ensureU,
  ensureWorkbookBinding362,
  ensureWorkbookBinding834,
  ensureWorkbookBinding699,
  matchPivotStyleName,
  pivotStyleElementOf,
  workbookSt,
  indexedExcelColor,
  hre,
} from "./boundary-hooks";

export let pxToEmu: any;
export let pictureFillBitmapCache: any;
export let pictureFillBitmapPending: any;
export const ensurePaintEmuMapsInit = esmInit(() => {
  initAddressMetrics();
  ensureWorkbookBinding1266();
  ensureWorkbookZ();
  ensureWorkbookT();
  ensureWorkbookXt();
  ensureWorkbookBinding1252();
  ensureWr();
  ensureWorkbookS();
  $x();
  pxToEmu = (cpIn16099) => Math.round(cpIn16099 * 9525);
  pictureFillBitmapCache = new Map();
  pictureFillBitmapPending = new Map();
});
export function buildPivotCellHintMap(cpIn4335: any, cpIn4336: any): any {
  let cpBind13463 = new Map(),
    cpBind13464 = cpIn4335.pivotTables.items;
  for (let cpBind15214 of cpBind13464) {
    let cpBind15535 = pivotStyleElementOf(cpBind15214),
      cpBind15536 =
        ensureWorkbookBinding699().getStyle(cpBind15535.styleName) ??
        ensureWorkbookBinding699().getStyle("PivotStyleMedium2");
    if (!cpBind15536) continue;
    let cpBind15537 = cpBind15214.__getPivotCellRenderHints(),
      cpBind15538 = new Set(cpBind15537.keys());
    for (let [cpBind20800, cpBind20801] of cpBind15537.entries()) {
      let cpBind21847 = hre(cpBind20800);
      cpBind21847 &&
        cpBind13463.set(
          cpBind20800,
          resolvePaintFillCss(
            cpBind15536.getElement(cpBind20801.type),
            cpBind20801,
            cpBind21847.row,
            cpBind21847.col,
            cpBind15538,
            cpIn4336,
          ),
        );
    }
  }
  return cpBind13463;
}
export function lookupPivotHint(
  cpIn14737: any,
  cpIn14738: any,
  cpIn14739: any,
): any {
  return cpIn14737.get(matchPivotStyleName(cpIn14738, cpIn14739));
}
export function resolvePaintFillCss(
  cpIn2988: any,
  cpIn2989: any,
  cpIn2990: any,
  cpIn2991: any,
  cpIn2992: any,
  cpIn2993: any,
): any {
  let cpBind10992 = {};
  if (
    (cpIn2988?.border?.top &&
      (cpBind10992.top = parseThemeColorToken(cpIn2988.border.top, cpIn2993)),
    cpIn2988?.border?.bottom &&
      (cpBind10992.bottom = parseThemeColorToken(
        cpIn2988.border.bottom,
        cpIn2993,
      )),
    cpIn2988?.border?.left &&
      (cpBind10992.left = parseThemeColorToken(cpIn2988.border.left, cpIn2993)),
    cpIn2988?.border?.right &&
      (cpBind10992.right = parseThemeColorToken(
        cpIn2988.border.right,
        cpIn2993,
      )),
    cpIn2988?.border?.horizontal && !cpBind10992.top)
  ) {
    let cpBind22301 = matchPivotStyleName(cpIn2990 - 1, cpIn2991);
    cpIn2992.has(cpBind22301) &&
      (cpBind10992.top = parseThemeColorToken(
        cpIn2988.border.horizontal,
        cpIn2993,
      ));
  }
  return {
    fillCss: cpIn2988?.fill?.color
      ? workbookSt(cpIn2988.fill.color, cpIn2993, paintThemeColorSpace)
      : undefined,
    fontColor: cpIn2988?.font?.fill?.color,
    bold: cpIn2988?.font?.bold,
    borders: cpBind10992,
    indentPx: Math.max(0, cpIn2989.indentLevel) * 8,
  };
}
export function parseThemeColorToken(cpIn11868: any, cpIn11869: any): any {
  return {
    style: cpIn11868.style ?? "thin",
    colorCss: workbookSt(cpIn11868.color, cpIn11869, paintThemeColorSpace),
  };
}
export let paintThemeColorSpace: any;
export const ensurePaintThemeInit = esmInit(() => {
  ensureWorkbookXt();
  ensureU();
  ensureWorkbookBinding362();
  ensureWorkbookBinding834();
  paintThemeColorSpace = {
    colorSpace: "spreadsheetml",
  };
});
export function buildPaintFillState(props: any): any {
  let cpBind14561 = props.style.fill ?? null,
    cpBind14562 = {
      fillCss: null,
      textColor: null,
    };
  return (
    props.cfRenderCache &&
      ((cpBind14562.fillCss = props.cfRenderCache.getFillCss(
        props.rowIdx,
        props.colIdx,
        props.cell,
      )),
      (cpBind14562.textColor = props.cfRenderCache.getTextColor(
        props.rowIdx,
        props.colIdx,
        props.cell,
      ))),
    {
      baseFillCss: cpBind14561,
      conditionalFormatting: cpBind14562,
      hasAnyFill: !!(cpBind14561 || cpBind14562.fillCss),
    }
  );
}
export const ensurePaintDummyInit = esmInit(() => {});
export function resolveIndexedExcelColor(cpIn11811: any): any {
  return typeof cpIn11811 == "number" &&
    Number.isFinite(cpIn11811) &&
    cpIn11811 > 0
    ? cpIn11811
    : null;
}
export function createPixelAlignedCtx(
  cpIn7983: any,
  cpIn7984: any,
  cpIn7985: any,
): any {
  let cpBind18464 = cpIn7983.getTransform(),
    cpBind18465 = Math.hypot(cpBind18464.a, cpBind18464.b),
    cpBind18466 = Math.hypot(cpBind18464.c, cpBind18464.d),
    cpBind18467 = resolveIndexedExcelColor(Math.max(cpBind18465, cpBind18466));
  return cpBind18467 == null
    ? 0.5 /
        ((resolveIndexedExcelColor(cpIn7985) ?? 1) *
          (resolveIndexedExcelColor(cpIn7984) ?? 1))
    : 0.5 / cpBind18467;
}
export function parseHexColorChannels(cpIn5874: any): any {
  let cpBind15848 = cpIn5874.trim();
  if (!cpBind15848.startsWith("#") || cpBind15848.length !== 7) return null;
  let cpBind15849 = parseInt(cpBind15848.slice(1, 3), 16),
    cpBind15850 = parseInt(cpBind15848.slice(3, 5), 16),
    cpBind15851 = parseInt(cpBind15848.slice(5, 7), 16);
  return Number.isNaN(cpBind15849) ||
    Number.isNaN(cpBind15850) ||
    Number.isNaN(cpBind15851)
    ? null
    : {
        r: cpBind15849,
        g: cpBind15850,
        b: cpBind15851,
      };
}
export function sheetTextMetricsBag(cpIn6856: any): any {
  let cpBind17166 = paintWeakMap.get(cpIn6856);
  return (
    cpBind17166 ||
      ((cpBind17166 = {
        rowCellByColIdx: new Map(),
        rowNonEmptyCols: new Map(),
        textMetrics: new Map(),
        cellRenderLayouts: new Map(),
      }),
      paintWeakMap.set(cpIn6856, cpBind17166)),
    cpBind17166
  );
}
export function cellKey(cpIn15317: any, cpIn15318: any): any {
  return cpIn15317 + ":" + cpIn15318;
}
export function rangesIntersecting(cpIn15233: any, cpIn15234: any): any {
  return `${cpIn15233}:${cpIn15234}|`;
}
export function notifyRowHeights(cpIn4062: any, cpIn4063: any): any {
  let cpBind13034 = paintWeakMap.get(cpIn4062);
  if (cpBind13034)
    for (let cpBind14132 of cpIn4063) {
      cpBind13034.rowCellByColIdx.delete(cpBind14132);
      cpBind13034.rowNonEmptyCols.delete(cpBind14132);
      for (let cpBind20542 of cpBind13034.textMetrics.keys()) {
        let cpBind21654 = cpBind20542.indexOf(":");
        Number(cpBind20542.slice(0, cpBind21654)) === cpBind14132 &&
          cpBind13034.textMetrics.delete(cpBind20542);
      }
      for (let cpBind20187 of cpBind13034.cellRenderLayouts.keys()) {
        let cpBind21481 = cpBind20187.indexOf(":");
        Number(cpBind20187.slice(0, cpBind21481)) === cpBind14132 &&
          cpBind13034.cellRenderLayouts.delete(cpBind20187);
      }
    }
}
export function mergeCssColor(cpIn8777: any, cpIn8778: any): any {
  let cpBind19315 = 0,
    cpBind19316 = cpIn8777.length;
  for (; cpBind19315 < cpBind19316; ) {
    let cpBind21871 = (cpBind19315 + cpBind19316) >>> 1,
      cpBind21872 = cpIn8777[cpBind21871];
    cpBind21872 !== undefined && cpBind21872 < cpIn8778
      ? (cpBind19315 = cpBind21871 + 1)
      : (cpBind19316 = cpBind21871);
  }
  return cpBind19315;
}
export function nextNonEmptyCol(cpIn8719: any, cpIn8720: any): any {
  let cpBind19227 = 0,
    cpBind19228 = cpIn8719.length;
  for (; cpBind19227 < cpBind19228; ) {
    let cpBind21848 = (cpBind19227 + cpBind19228) >>> 1,
      cpBind21849 = cpIn8719[cpBind21848];
    cpBind21849 !== undefined && cpBind21849 <= cpIn8720
      ? (cpBind19227 = cpBind21848 + 1)
      : (cpBind19228 = cpBind21848);
  }
  return cpBind19227;
}
export function paintCheckboxGlyph(props: any): any {
  if (!props) return [];
  let cpBind13354 = [],
    cpBind13355 = "",
    cpBind13356 = false;
  for (let cpBind15440 = 0; cpBind15440 < props.length; cpBind15440++) {
    let cpBind16190 = props[cpBind15440] ?? "";
    if (cpBind16190 === '"') {
      cpBind13355 += cpBind16190;
      cpBind13356 = !cpBind13356;
      continue;
    }
    if (cpBind16190 === "\\" && cpBind15440 + 1 < props.length) {
      cpBind13355 += cpBind16190 + (props[cpBind15440 + 1] ?? "");
      cpBind15440++;
      continue;
    }
    if (cpBind16190 === ";" && !cpBind13356) {
      cpBind13354.push(cpBind13355);
      cpBind13355 = "";
      continue;
    }
    cpBind13355 += cpBind16190;
  }
  return (cpBind13354.push(cpBind13355), cpBind13354);
}
export function strokeDiagonalBorder(cpIn7345: any, cpIn7346: any): any {
  if (cpIn7345 <= 0) return null;
  if (cpIn7345 === 1) return 0;
  if (cpIn7345 === 2) return +(cpIn7346 < 0);
  if (cpIn7345 >= 3) {
    if (cpIn7346 > 0) return 0;
    if (cpIn7346 < 0) return 1;
    if (Object.is(cpIn7346, 0) || cpIn7346 === 0) return 2;
  }
  return 0;
}
export function paintDataBar(props: any): any {
  let cpBind16647 = props.replace(/\s+/g, "").toUpperCase(),
    cpBind16648 = PAINT_INDEXED_COLORS[cpBind16647];
  if (cpBind16648 != null) return indexedExcelColor(cpBind16648) ?? null;
  let cpBind16649 = cpBind16647.match(/^COLOR(\d{1,2})$/);
  if (cpBind16649) {
    let cpBind22091 = Number(cpBind16649[1]);
    if (!Number.isNaN(cpBind22091) && cpBind22091 > 0)
      return indexedExcelColor(cpBind22091 - 1) ?? null;
  }
  return null;
}
export function paintIconSet(props: any): any {
  let cpBind15512 = 0;
  for (; cpBind15512 < props.length && /\s/.test(props[cpBind15512] ?? ""); )
    cpBind15512++;
  for (; cpBind15512 < props.length && props[cpBind15512] === "["; ) {
    let cpBind19229 = props.indexOf("]", cpBind15512);
    if (cpBind19229 === -1) break;
    let cpBind19230 = paintDataBar(props.slice(cpBind15512 + 1, cpBind19229));
    if (cpBind19230) return cpBind19230;
    for (
      cpBind15512 = cpBind19229 + 1;
      cpBind15512 < props.length && /\s/.test(props[cpBind15512] ?? "");
    )
      cpBind15512++;
  }
  return null;
}
export function drawHeaderLabel(
  cpIn6442: any,
  cpIn6443: any,
  cpIn6444: any,
): any {
  let cpBind16650 = (cpIn10572) =>
      Math.max(0, Math.min(255, Math.round(cpIn10572)))
        .toString(16)
        .padStart(2, "0")
        .toUpperCase(),
    cpBind16651 = `FF${cpBind16650(cpIn6442)}${cpBind16650(cpIn6443)}${cpBind16650(cpIn6444)}`;
  return {
    type: Zn.COLOR_TYPE_RGB,
    value: cpBind16651,
    lastColor: cpBind16651,
    transform: undefined,
  };
}
export function rgbaFromChannels(cpIn10312: any): any {
  let cpBind20782 = parseHexColorChannels(cpIn10312);
  if (cpBind20782)
    return drawHeaderLabel(cpBind20782.r, cpBind20782.g, cpBind20782.b);
  let cpBind20783 = resolveShapeFillBitmap(cpIn10312);
  return cpBind20783
    ? drawHeaderLabel(cpBind20783[0], cpBind20783[1], cpBind20783[2])
    : null;
}
export function resolveCellDisplay(cpIn3719: any, cpIn3720: any): any {
  if (
    !cpIn3720?.numberFormatCode ||
    cpIn3719.dataType === d.CELL_DATA_TYPE_STRING ||
    cpIn3719.dataType === d.CELL_DATA_TYPE_SHARED_STRING ||
    cpIn3719.dataType === d.CELL_DATA_TYPE_INLINE_STRING
  )
    return null;
  let cpBind12388 = Number(cpIn3719.value);
  if (Number.isNaN(cpBind12388)) return null;
  let cpBind12389 = paintCheckboxGlyph(cpIn3720.numberFormatCode);
  if (cpBind12389.length === 0) return null;
  let cpBind12390 = strokeDiagonalBorder(cpBind12389.length, cpBind12388);
  if (cpBind12390 == null) return null;
  let cpBind12391 = paintIconSet(
    cpBind12389[Math.min(cpBind12390, cpBind12389.length - 1)] ?? "",
  );
  return cpBind12391 ? rgbaFromChannels(cpBind12391) : null;
}
export function fillRectTransformed(
  cpIn2225: any,
  cpIn2226: any,
  cpIn2227: any,
  cpIn2228: any,
  cpIn2229: any,
): any {
  let cpBind9272 = cpIn2225.getTransform();
  if (
    cpBind9272.b === 0 &&
    cpBind9272.c === 0 &&
    cpBind9272.a !== 0 &&
    cpBind9272.d !== 0
  ) {
    let cpBind11885 = cpIn2226 * cpBind9272.a + cpBind9272.e,
      cpBind11886 = cpIn2227 * cpBind9272.d + cpBind9272.f,
      cpBind11887 = (cpIn2226 + cpIn2228) * cpBind9272.a + cpBind9272.e,
      cpBind11888 = (cpIn2227 + cpIn2229) * cpBind9272.d + cpBind9272.f,
      cpBind11889 = Math.round(Math.min(cpBind11885, cpBind11887)),
      cpBind11890 = Math.round(Math.min(cpBind11886, cpBind11888)),
      cpBind11891 = Math.round(Math.max(cpBind11885, cpBind11887)),
      cpBind11892 = Math.round(Math.max(cpBind11886, cpBind11888));
    if (cpBind11891 <= cpBind11889 || cpBind11892 <= cpBind11890) return;
    let cpBind11893 = (cpBind11889 - cpBind9272.e) / cpBind9272.a,
      cpBind11894 = (cpBind11891 - cpBind9272.e) / cpBind9272.a,
      cpBind11895 = (cpBind11890 - cpBind9272.f) / cpBind9272.d,
      cpBind11896 = (cpBind11892 - cpBind9272.f) / cpBind9272.d,
      cpBind11897 = Math.min(cpBind11893, cpBind11894),
      cpBind11898 = Math.min(cpBind11895, cpBind11896);
    cpIn2225.fillRect(
      cpBind11897,
      cpBind11898,
      Math.abs(cpBind11894 - cpBind11893),
      Math.abs(cpBind11896 - cpBind11895),
    );
    return;
  }
  let cpBind9273 = Math.round(cpIn2226),
    cpBind9274 = Math.round(cpIn2227),
    cpBind9275 = Math.round(cpIn2226 + cpIn2228),
    cpBind9276 = Math.round(cpIn2227 + cpIn2229);
  cpBind9275 <= cpBind9273 ||
    cpBind9276 <= cpBind9274 ||
    cpIn2225.fillRect(
      cpBind9273,
      cpBind9274,
      cpBind9275 - cpBind9273,
      cpBind9276 - cpBind9274,
    );
}
