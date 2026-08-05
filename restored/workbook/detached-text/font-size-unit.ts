// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: pt/px font-size unit parse (legacy Binding624 / uue).

/** Legacy Binding624 — pt|px font-size unit regex. */
export const FONT_SIZE_UNIT_RE = /^(-?\d+(?:\.\d+)?)(pt|px)$/i;

export function parseFontSizeUnitString(dtIn4689: any) {
  let dtBind13967 = FONT_SIZE_UNIT_RE.exec(dtIn4689.trim());
  if (!dtBind13967)
    throw Error(
      `Unsupported font size "${dtIn4689}". Use unit strings like "11pt" or "16px".`,
    );
  let dtBind13968 = Number(dtBind13967[1]),
    dtBind13969 = dtBind13967[2]?.toLowerCase();
  if (Number.isNaN(dtBind13968))
    throw Error(`Invalid font size "${dtIn4689}".`);
  if (dtBind13969 === "px") return dtBind13968;
  if (dtBind13969 === "pt") return (dtBind13968 * 96) / 72;
  throw Error(`Unsupported font size unit in "${dtIn4689}".`);
}
