// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: DetachedText basic style accessors (bold…underline).

import type { DetachedTextStyleHost } from "./types";

export function getDetachedBold(host: DetachedTextStyleHost): any {
  let dtBind21166 = host.fullSelection().bold;
  return dtBind21166 === undefined ? host.defaultTextStyle?.bold : dtBind21166;
}

export function setDetachedBold(
  host: DetachedTextStyleHost,
  dtIn8171: any,
): void {
  let dtBind18680 = host.fullSelection();
  dtBind18680.isEmpty || (dtBind18680.bold = dtIn8171);
  host.patchDefaultStyle(dtIn8171, (dtIn14698, dtIn14699) => {
    dtIn14698.bold = dtIn14699;
  });
  host.recordStyle({
    bold: dtIn8171,
  });
}

export function getDetachedItalic(host: DetachedTextStyleHost): any {
  let dtBind20948 = host.fullSelection().italic;
  return dtBind20948 === undefined
    ? host.defaultTextStyle?.italic
    : dtBind20948;
}

export function setDetachedItalic(
  host: DetachedTextStyleHost,
  dtIn7937: any,
): void {
  let dtBind18419 = host.fullSelection();
  dtBind18419.isEmpty || (dtBind18419.italic = dtIn7937);
  host.patchDefaultStyle(dtIn7937, (dtIn14514, dtIn14515) => {
    dtIn14514.italic = dtIn14515;
  });
  host.recordStyle({
    italic: dtIn7937,
  });
}

export function getDetachedFontSize(host: DetachedTextStyleHost): any {
  let dtBind20766 = host.fullSelection().fontSize;
  return dtBind20766 === undefined
    ? host.defaultTextStyle?.fontSize
    : dtBind20766;
}

export function setDetachedFontSize(
  host: DetachedTextStyleHost,
  dtIn7740: any,
): void {
  let dtBind18225 = host.fullSelection();
  dtBind18225.isEmpty || (dtBind18225.fontSize = dtIn7740);
  host.patchDefaultStyle(dtIn7740, (dtIn14294, dtIn14295) => {
    dtIn14294.fontSize = dtIn14295;
  });
  host.recordStyle({
    fontSize: dtIn7740,
  });
}

export function getDetachedTypeface(host: DetachedTextStyleHost): any {
  let dtBind20767 = host.fullSelection().typeface;
  return dtBind20767 === undefined
    ? host.defaultTextStyle?.typeface
    : dtBind20767;
}

export function setDetachedTypeface(
  host: DetachedTextStyleHost,
  dtIn7741: any,
): void {
  let dtBind18226 = host.fullSelection();
  dtBind18226.isEmpty || (dtBind18226.typeface = dtIn7741);
  host.patchDefaultStyle(dtIn7741, (dtIn14296, dtIn14297) => {
    dtIn14296.typeface = dtIn14297;
  });
  host.recordStyle({
    typeface: dtIn7741,
  });
}

export function getDetachedLineSpacing(host: DetachedTextStyleHost): any {
  let dtBind20502 = host.fullSelection().lineSpacing;
  return dtBind20502 === undefined
    ? host.defaultTextStyle?.lineSpacing
    : dtBind20502;
}

export function setDetachedLineSpacing(
  host: DetachedTextStyleHost,
  dtIn7421: any,
): void {
  let dtBind17882 = host.fullSelection();
  dtBind17882.isEmpty || (dtBind17882.lineSpacing = dtIn7421);
  host.patchDefaultStyle(dtIn7421, (dtIn14003, dtIn14004) => {
    dtIn14003.lineSpacing = dtIn14004;
  });
  host.recordStyle({
    lineSpacing: dtIn7421,
  });
}

export function getDetachedUnderline(host: DetachedTextStyleHost): any {
  let dtBind20671 = host.fullSelection().underline;
  return dtBind20671 === undefined
    ? host.defaultTextStyle?.underline
    : dtBind20671;
}

export function setDetachedUnderline(
  host: DetachedTextStyleHost,
  dtIn7610: any,
): void {
  let dtBind18101 = host.fullSelection();
  dtBind18101.isEmpty || (dtBind18101.underline = dtIn7610);
  host.patchDefaultStyle(dtIn7610, (dtIn14192, dtIn14193) => {
    dtIn14192.underline = dtIn14193;
  });
  host.recordStyle({
    underline: dtIn7610,
  });
}
