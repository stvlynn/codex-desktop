// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-26: strip redundant XF ids + build cell XF format map (legacy Cle / Binding227).

import { themeStyleMapsFromProto } from "../design-tokens";
import { applyCellXfToFormat } from "./apply-cell-xf";

export function stripRedundantCellXfIds(xfIn4988: unknown, xfIn4989: unknown) {
  if (!xfIn4989) return xfIn4988;
  let xfBind14407 = {
    ...xfIn4988,
  };
  return (
    xfBind14407.fontId != null &&
      xfBind14407.fontId === xfIn4989.fontId &&
      (xfBind14407.fontId = undefined),
    xfBind14407.fillId != null &&
      xfBind14407.fillId === xfIn4989.fillId &&
      (xfBind14407.fillId = undefined),
    xfBind14407.borderId != null &&
      xfBind14407.borderId === xfIn4989.borderId &&
      (xfBind14407.borderId = undefined),
    xfBind14407.numFmtId != null &&
      xfBind14407.numFmtId === xfIn4989.numFmtId &&
      (xfBind14407.numFmtId = undefined),
    xfBind14407
  );
}
export function buildCellXfFormatMap(xfIn3983: unknown) {
  let { styles } = xfIn3983,
    xfBind12880 = themeStyleMapsFromProto(xfIn3983.theme),
    xfBind12881 = {};
  return (
    styles &&
      styles.cellXfs.forEach((item, index) => {
        let xfBind15417 = {},
          xfBind15418 =
            item.xfId != null &&
            styles.cellStyleXfs &&
            styles.cellStyleXfs[item.xfId]
              ? styles.cellStyleXfs[item.xfId]?.format
              : undefined;
        xfBind15418 &&
          applyCellXfToFormat(
            xfBind15418,
            styles,
            xfBind15417,
            false,
            xfBind12880,
            "base",
            `base:${index}`,
          );
        applyCellXfToFormat(
          stripRedundantCellXfIds(item, xfBind15418),
          styles,
          xfBind15417,
          true,
          xfBind12880,
          "cell",
          `cell:${index}`,
        );
        xfBind12881[index] = xfBind15417;
      }),
    xfBind12881
  );
}
