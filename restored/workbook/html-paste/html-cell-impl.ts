// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: apply HTML cell value/format (legacy Dmt/Omt).
// Stage-3 wave-104.

export function applyHtmlCell(htmIn631: any, htmIn632: any, htmIn633: any) {
  let htmBind4707 =
      typeof htmIn632?.v == "number" ? String(htmIn632.v) : (htmIn632?.v ?? ""),
    htmBind4708 = htmIn632?.fmt;
  if (htmIn633) {
    let htmBind18712 = htmBind4707.trimStart(),
      htmBind18713 = htmBind4708?.numFmt?.trim(),
      htmBind18714 = htmBind18713 === "@" || htmBind18713 === "\\@";
    htmBind18712.startsWith("=") && !htmBind18714
      ? (htmIn631.formulas = [[htmBind18712]])
      : htmBind4707 !== "" &&
        (htmIn631.values = [[coerceHtmlCellValue(htmBind4707, htmBind18714)]]);
  }
  htmBind4708 &&
    (htmBind4708.bold !== undefined &&
      (htmIn631.format.font.bold = htmBind4708.bold),
    htmBind4708.italic !== undefined &&
      (htmIn631.format.font.italic = htmBind4708.italic),
    htmBind4708.color && (htmIn631.format.font.color = htmBind4708.color),
    htmBind4708.bg && (htmIn631.format.fill = htmBind4708.bg),
    htmBind4708.align &&
      (htmIn631.format.horizontalAlignment = htmBind4708.align),
    htmBind4708.valign &&
      (htmIn631.format.verticalAlignment =
        htmBind4708.valign === "middle" ? "center" : htmBind4708.valign),
    htmBind4708.wrap !== undefined &&
      (htmIn631.format.wrapText = htmBind4708.wrap),
    htmBind4708.numFmt && (htmIn631.format.numberFormat = htmBind4708.numFmt),
    htmBind4708.fontFamily &&
      (htmIn631.format.font.name = htmBind4708.fontFamily),
    typeof htmBind4708.fontSizePt == "number" &&
      Number.isFinite(htmBind4708.fontSizePt) &&
      htmBind4708.fontSizePt > 0 &&
      (htmIn631.format.font.size = htmBind4708.fontSizePt),
    (htmBind4708.border || htmBind4708.diagonal) &&
      (htmIn631.format.borders = {
        ...(htmBind4708.border?.top
          ? {
              top: {
                style: htmBind4708.border.top.style,
                color: htmBind4708.border.top.color,
              },
            }
          : {}),
        ...(htmBind4708.border?.right
          ? {
              right: {
                style: htmBind4708.border.right.style,
                color: htmBind4708.border.right.color,
              },
            }
          : {}),
        ...(htmBind4708.border?.bottom
          ? {
              bottom: {
                style: htmBind4708.border.bottom.style,
                color: htmBind4708.border.bottom.color,
              },
            }
          : {}),
        ...(htmBind4708.border?.left
          ? {
              left: {
                style: htmBind4708.border.left.style,
                color: htmBind4708.border.left.color,
              },
            }
          : {}),
        ...(htmBind4708.diagonal?.up
          ? {
              diagonalUp: {
                style: htmBind4708.diagonal.style,
                color: htmBind4708.diagonal.color,
              },
            }
          : {}),
        ...(htmBind4708.diagonal?.down
          ? {
              diagonalDown: {
                style: htmBind4708.diagonal.style,
                color: htmBind4708.diagonal.color,
              },
            }
          : {}),
      }));
}
export function coerceHtmlCellValue(htmIn6790: any, htmIn6791: any) {
  if (htmIn6791) return htmIn6790;
  let htmBind17092 = htmIn6790.trim();
  if (htmBind17092.length === 0) return "";
  if (htmBind17092.toLowerCase() === "true") return true;
  if (htmBind17092.toLowerCase() === "false") return false;
  let htmBind17093 = Number(htmBind17092);
  return !Number.isNaN(htmBind17093) && htmBind17092 === String(htmBind17093)
    ? htmBind17093
    : htmIn6790;
}

/** Legacy aliases. */
export const Dmt = applyHtmlCell;
export const Omt = coerceHtmlCellValue;
