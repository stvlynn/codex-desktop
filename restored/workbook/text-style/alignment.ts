// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-8: text alignment / vertical-anchor maps (legacy $f / $ae / parse helpers).

import {
  Jn as alignmentTypeEnum,
  Yn as anchorTypeEnum,
} from "../presentation-protobuf";

export type AlignmentName = "left" | "center" | "right" | "justify";
export type VerticalAlignmentName = "top" | "middle" | "bottom";

/** Legacy `$f` — alignment name → AlignmentType proto. */
export function alignmentNameToProto(name: AlignmentName | string): number {
  switch (name) {
    case "center":
      return alignmentTypeEnum.ALIGNMENT_TYPE_CENTER;
    case "right":
      return alignmentTypeEnum.ALIGNMENT_TYPE_RIGHT;
    case "justify":
      return 4;
    default:
      return alignmentTypeEnum.ALIGNMENT_TYPE_LEFT;
  }
}

/** Legacy alignment proto → camelCase name. */
export function alignmentProtoToName(
  value: number | null | undefined,
): AlignmentName | undefined {
  switch (value) {
    case alignmentTypeEnum.ALIGNMENT_TYPE_CENTER:
      return "center";
    case alignmentTypeEnum.ALIGNMENT_TYPE_RIGHT:
      return "right";
    case alignmentTypeEnum.ALIGNMENT_TYPE_LEFT:
      return "left";
    case 4:
      return "justify";
    default:
      return;
  }
}

/** Legacy vertical alignment name → AnchorType proto. */
export function verticalAlignmentNameToAnchor(
  value: VerticalAlignmentName | string,
): number {
  switch (value) {
    case "middle":
      return anchorTypeEnum.ANCHOR_TYPE_MIDDLE;
    case "bottom":
      return anchorTypeEnum.ANCHOR_TYPE_BOTTOM;
    default:
      return anchorTypeEnum.ANCHOR_TYPE_TOP;
  }
}

/** Coerce number / name / enum-label to AlignmentType proto. */
export function parseAlignment(value: unknown): number | undefined {
  if (value == null) return;
  if (typeof value == "number") {
    if (!Number.isFinite(value) || !Number.isInteger(value))
      throw Error("text alignment must be an integer enum value.");
    return value;
  }
  if (typeof value != "string")
    throw Error(`Unsupported text alignment value: "${String(value)}"`);
  const trimmed = value.trim();
  if (!trimmed) return;
  const lower = trimmed.toLowerCase();
  if (lower === "left") return alignmentNameToProto("left");
  if (lower === "center" || lower === "centre" || lower === "middle")
    return alignmentNameToProto("center");
  if (lower === "right") return alignmentNameToProto("right");
  if (lower === "justify") return alignmentNameToProto("justify");
  if (/^-?\d+$/.test(trimmed)) {
    const asNumber = Number(trimmed);
    if (!Number.isFinite(asNumber) || !Number.isInteger(asNumber))
      throw Error(`Unsupported text alignment value: "${value}"`);
    return asNumber;
  }
  if (trimmed === "ALIGNMENT_TYPE_UNSPECIFIED")
    return alignmentTypeEnum.ALIGNMENT_TYPE_UNSPECIFIED;
  if (trimmed === "ALIGNMENT_TYPE_LEFT")
    return alignmentTypeEnum.ALIGNMENT_TYPE_LEFT;
  if (trimmed === "ALIGNMENT_TYPE_CENTER")
    return alignmentTypeEnum.ALIGNMENT_TYPE_CENTER;
  if (trimmed === "ALIGNMENT_TYPE_RIGHT")
    return alignmentTypeEnum.ALIGNMENT_TYPE_RIGHT;
  if (trimmed === "UNRECOGNIZED") return alignmentTypeEnum.UNRECOGNIZED;
  throw Error(`Unsupported text alignment value: "${value}"`);
}

/**
 * Legacy `$ae` — normalize alignment for TextStyle setter (number or known name).
 */
export function normalizeAlignment(value: unknown): number | undefined {
  if (value !== undefined)
    return typeof value == "number"
      ? parseAlignment(value)
      : value === "left" ||
          value === "center" ||
          value === "right" ||
          value === "justify"
        ? alignmentNameToProto(value)
        : parseAlignment(value);
}
