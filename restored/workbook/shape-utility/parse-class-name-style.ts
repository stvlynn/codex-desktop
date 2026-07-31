// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: optional className → shape utility style (legacy yde).

import {
  parseShapeUtilityClasses,
  type ShapeUtilityStyle,
} from "./parse-shape-utility-classes";

/** Legacy `yde` — parse className when present. */
export function parseClassNameStyle(
  className: string | null | undefined,
): ShapeUtilityStyle | null {
  return className ? parseShapeUtilityClasses(className) : null;
}
