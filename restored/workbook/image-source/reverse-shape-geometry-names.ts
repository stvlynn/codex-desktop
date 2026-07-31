// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: proto geometry → camel name (legacy Jde).

import { shapeGeometryNameToProto } from "../chart-proto-name-maps";

/**
 * Legacy `Jde` — reverse of shapeGeometryNameToProto, skipping
 * custom / connector / textbox keys.
 */
export function buildReverseShapeGeometryNameMap(): Record<
  number,
  string
> {
  return Object.entries(shapeGeometryNameToProto).reduce(
    (acc, [name, proto]) => {
      if (
        name === "custom" ||
        name === "connector" ||
        name === "textbox"
      )
        return acc;
      if (acc[proto as number] === undefined)
        acc[proto as number] = name;
      return acc;
    },
    {} as Record<number, string>,
  );
}

export const reverseShapeGeometryNameMap =
  buildReverseShapeGeometryNameMap();
