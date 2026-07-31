// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-11: strip UNSPECIFIED enums + TextStyle → clean proto (_p cluster).

import {
  Yn as anchorTypeEnum,
  Cr as verticalTypeEnum,
  Jn as alignmentTypeEnum,
  _r as textCapitalizationEnum,
} from "../presentation-protobuf";
import { TextStyle } from "./text-style";
import type { TextStyleProto } from "./text-style";

type HighlightLike = { toProto(): unknown };
type FillLike = { isSet?: boolean };

/** Legacy workbookHelper 109 — drop UNSPECIFIED enum fields from a style bag. */
export function cleanUnspecifiedTextStyleEnums<
  T extends Record<string, unknown>,
>(input: T): T {
  const out = { ...input };
  if (out.anchor === anchorTypeEnum.ANCHOR_TYPE_UNSPECIFIED) delete out.anchor;
  if (out.vertical === verticalTypeEnum.VERTICAL_TYPE_UNSPECIFIED)
    delete out.vertical;
  if (out.alignment === alignmentTypeEnum.ALIGNMENT_TYPE_UNSPECIFIED)
    delete out.alignment;
  if (out.capitalization === textCapitalizationEnum.TEXT_CAPITALIZATION_UNSPECIFIED)
    delete out.capitalization;
  return out;
}

/**
 * Legacy `_p` — TextStyle instance → cleaned proto bag, or clean a plain bag.
 */
export function textStyleToCleanProto(
  value: TextStyle | TextStyleProto | Record<string, unknown> | null | undefined,
): Record<string, unknown> | undefined {
  if (!value) return;
  if (value instanceof TextStyle) {
    const fill = value.fill as FillLike | undefined;
    const highlight = value.highlight as HighlightLike | undefined;
    return cleanUnspecifiedTextStyleEnums({
      anchor: value.anchor,
      vertical: value.vertical,
      rotation: value.rotation,
      bold: value.bold,
      italic: value.italic,
      fontSize: value.fontSizeCentipoints,
      fill: fill?.isSet ? value.fill : undefined,
      alignment: value.alignment,
      underline: value.underline,
      bottomInset: value.bottomInsetEmu,
      leftInset: value.leftInsetEmu,
      rightInset: value.rightInsetEmu,
      topInset: value.topInsetEmu,
      useParagraphSpacing: value.useParagraphSpacing,
      wrap: value.wrapProto,
      autoFit: value.autoFitProto,
      name: value.name,
      family: value.family,
      scheme: value.scheme,
      typeface: value.typeface,
      shadow: value.shadow,
      capitalization: value.capitalization,
      highlight: highlight?.toProto(),
    });
  }
  return cleanUnspecifiedTextStyleEnums({ ...value });
}
