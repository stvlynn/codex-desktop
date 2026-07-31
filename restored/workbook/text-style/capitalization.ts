// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-8: text capitalization ↔ CSS text-transform (legacy ioe/aoe).

import { _r as textCapitalizationEnum } from "../presentation-protobuf";

export type TextTransformName = "none" | "uppercase" | "smallCaps";

/** Legacy `ioe` — CSS text-transform → TextCapitalization proto. */
export function capitalizationFromTextTransform(
  value: TextTransformName | string | undefined,
): number | undefined {
  if (value !== undefined)
    return value === "none"
      ? textCapitalizationEnum.TEXT_CAPITALIZATION_NONE
      : value === "uppercase"
        ? textCapitalizationEnum.TEXT_CAPITALIZATION_ALL
        : textCapitalizationEnum.TEXT_CAPITALIZATION_SMALL;
}

/** Legacy `aoe` — TextCapitalization proto → CSS text-transform name. */
export function textTransformFromCapitalization(
  value: number | null | undefined,
): TextTransformName | undefined {
  if (value === textCapitalizationEnum.TEXT_CAPITALIZATION_NONE) return "none";
  if (value === textCapitalizationEnum.TEXT_CAPITALIZATION_ALL)
    return "uppercase";
  if (value === textCapitalizationEnum.TEXT_CAPITALIZATION_SMALL)
    return "smallCaps";
}
