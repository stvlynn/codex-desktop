// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-27: apply style fonts + measure cell text px (legacy kle / Ale / Binding237).

import { Jn, Yn, j } from "../presentation-protobuf";
import { cellPaddingForFontSize } from "../../utils/spreadsheet-address-utils";
import { layoutTextElement } from "../text-box";
import { stripFontFaceStyleSuffixes } from "../cell-xf-format";
import { mergeCellTextStyleOverrides } from "./merge-cell-text-style";
export function alignmentFromCellStyle(afIn9025: unknown) {
  return afIn9025?.align === "center" ? Jn.ALIGNMENT_TYPE_CENTER : afIn9025?.align === "right" ? Jn.ALIGNMENT_TYPE_RIGHT : Jn.ALIGNMENT_TYPE_LEFT;
}
export function applyStyleFontToTextRuns(props: unknown) {
  let {
    element,
    style,
    tableCellStyle
  } = props;
  if (style) for (let afBind6774 of element.paragraphs ?? []) for (let afBind6988 of afBind6774.runs ?? []) {
    if (afBind6988.textStyle = afBind6988.textStyle ?? {}, typeof afBind6988.textStyle.fontSize == "number" && afBind6988.textStyle.fontSize > 0 && afBind6988.textStyle.fontSize < 100 && (afBind6988.textStyle.fontSize = Math.round(afBind6988.textStyle.fontSize * 100)), !(typeof afBind6988.textStyle.fontSize == "number" && afBind6988.textStyle.fontSize > 0)) {
      let afBind19807 = style.font?.size,
        afBind19808 = typeof afBind19807 == "number" && afBind19807 > 0 ? afBind19807 * 72 / 96 : 11;
      afBind6988.textStyle.fontSize = Math.round(afBind19808 * 100);
    }
    afBind6988.textStyle.italic == null && style.font?.italic != null && (afBind6988.textStyle.italic = !!style.font.italic);
    afBind6988.textStyle.name ?? (afBind6988.textStyle.name = stripFontFaceStyleSuffixes(style.font?.family));
    afBind6988.textStyle.underline == null && style.font?.underline != null && (afBind6988.textStyle.underline = style.font.underline ? "single" : "none");
    let afBind7150 = mergeCellTextStyleOverrides({
      currentTextStyle: afBind6988.textStyle,
      baseStyle: style,
      baseStyleFontColor: null,
      tableCellStyle
    });
    afBind7150.bold != null && (afBind6988.textStyle.bold = afBind7150.bold);
  }
}
export function measureCellTextPx(afIn1246: unknown) {
  let {
      style,
      themeMap,
      wrap,
      boxWidthPx,
      paragraphs,
      tableCellStyle
    } = afIn1246,
    afBind6812 = style?.font?.size ?? 14.666666666666666,
    {
      padLr,
      padTb
    } = cellPaddingForFontSize(afBind6812),
    afBind6813 = alignmentFromCellStyle(style),
    afBind6814 = {
      paragraphs,
      textStyle: {
        alignment: afBind6813,
        anchor: Yn.ANCHOR_TYPE_TOP
      },
      bbox: {
        xEmu: 0,
        yEmu: 0,
        widthEmu: Math.round(Math.max(boxWidthPx, 1) * 9525),
        heightEmu: Math.round(Math.max(afBind6812 + padTb * 2, 1) * 9525)
      },
      type: j.ELEMENT_TYPE_TEXT,
      effects: [],
      children: [],
      levelsStyles: [],
      id: "",
      citations: []
    };
  applyStyleFontToTextRuns({
    element: afBind6814,
    style,
    tableCellStyle
  });
  let afBind6815 = layoutTextElement(afBind6814, themeMap, {
    resolvedStyle: {
      alignment: afBind6813
    },
    bboxPx: {
      x: 0,
      y: 0,
      width: Math.max(boxWidthPx, 1),
      height: Math.max(afBind6812 + padTb * 2, 1)
    },
    paddingPx: {
      left: padLr,
      right: padLr,
      top: padTb,
      bottom: padTb
    },
    mode: "layout",
    textScale: 1,
    wrap,
    layoutProfile: "spreadsheet"
  });
  return {
    widthPx: (afBind6815?.lines?.reduce((afIn15823, afIn15824) => Math.max(afIn15823, afIn15824.widthPx), 0) ?? 0) + padLr * 2,
    heightPx: afBind6815?.lines?.reduce((afIn16167, afIn16168) => afIn16167 + afIn16168.heightPx, 0) ?? 0
  };
}
