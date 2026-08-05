// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-17: tab-stop alignment map + px conversion (rce / ice).

import { gr as tabStopAlignmentEnum } from "../presentation-protobuf";
import { emuToCssPxOrZero } from "./layout-unit-helpers";

export type TabStopAlignmentName =
  | "left"
  | "center"
  | "right"
  | "decimal"
  | "bar"
  | "clear";

export type TabStopPx = {
  positionPx: number;
  alignment: TabStopAlignmentName;
};

/** Legacy `rce` — tab-stop alignment proto → CSS-ish name. */
export function tabStopAlignmentName(alignment: unknown): TabStopAlignmentName {
  switch (alignment) {
    case tabStopAlignmentEnum.TAB_STOP_ALIGNMENT_CENTER:
      return "center";
    case tabStopAlignmentEnum.TAB_STOP_ALIGNMENT_RIGHT:
      return "right";
    case tabStopAlignmentEnum.TAB_STOP_ALIGNMENT_DECIMAL:
      return "decimal";
    case tabStopAlignmentEnum.TAB_STOP_ALIGNMENT_BAR:
      return "bar";
    case tabStopAlignmentEnum.TAB_STOP_ALIGNMENT_CLEAR:
      return "clear";
    case tabStopAlignmentEnum.TAB_STOP_ALIGNMENT_LEFT:
    case tabStopAlignmentEnum.TAB_STOP_ALIGNMENT_UNSPECIFIED:
    default:
      return "left";
  }
}

/** Legacy `ice` — paragraphStyle.tabStops → sorted px tab stops. */
export function tabStopsFromParagraphStyle(
  paragraphStyle:
    | { tabStops?: Array<{ position?: number; alignment?: unknown }> }
    | null
    | undefined,
): TabStopPx[] {
  return (paragraphStyle?.tabStops ?? [])
    .map((item) => {
      if (item.position !== undefined)
        return {
          positionPx: emuToCssPxOrZero(item.position),
          alignment: tabStopAlignmentName(item.alignment),
        };
    })
    .filter((item): item is TabStopPx => item !== undefined)
    .sort((a, b) => a.positionPx - b.positionPx);
}
