// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-11: resolve shape text style via placeholder/layout/master cascade.

import { tr as fillTypeEnum } from "../presentation-protobuf";
import {
  placeholderTypeToStyleKey,
  expandPlaceholderTypeCandidates,
  type PlaceholderStyleKey,
} from "../presentation-theme";
import { mergeStyleLayers } from "./style-deep-merge";
import { textStyleToCleanProto } from "./clean-text-style-proto";

export type PlaceholderFindOptions = {
  allowIndexMatchWithoutType?: boolean;
};

export type PlaceholderLike = {
  textStyle?: unknown;
  levelsStyles?: Array<{ textStyle?: unknown } | undefined> | null;
};

export type LayoutLike = {
  findPlaceholder?: (
    types: string[],
    index: number,
    options?: PlaceholderFindOptions,
  ) => PlaceholderLike | null | undefined;
  titleLevelStyles?: Array<{ textStyle?: unknown } | undefined> | null;
  bodyLevelStyles?: Array<{ textStyle?: unknown } | undefined> | null;
  otherLevelStyles?: Array<{ textStyle?: unknown } | undefined> | null;
};

export type RenderContextLike = {
  layout?: LayoutLike | null;
  masterLayout?: LayoutLike | null;
};

export type ShapeTextStyleHost = {
  placeholderIndex?: number;
  placeholderType?: string;
  textStyle?: unknown;
  levelsStyles?: Array<{ textStyle?: unknown } | undefined> | null;
  fontReference?: { color?: unknown } | null;
};

export type SlideRenderHost = {
  resolveRenderContext(): RenderContextLike;
};

const DEFAULT_TEXT_STYLE: Record<string, unknown> = {
  bold: false,
  italic: false,
  fontSize: 1400,
  fill: undefined,
  underline: "none",
  useParagraphSpacing: false,
};

/**
 * Legacy workbookHelper 110 — cascade-resolve text style for a shape from
 * its own style, layout/master placeholders, and master level styles.
 */
export function resolvePlaceholderTextStyle(
  shape: ShapeTextStyleHost,
  _presentation: unknown,
  slide: SlideRenderHost,
): Record<string, unknown> {
  const placeholderIndex = shape.placeholderIndex ?? 0;
  const expandTypes = (raw: string | undefined) =>
    expandPlaceholderTypeCandidates(raw);
  let styleKey: PlaceholderStyleKey =
    shape.placeholderType !== undefined || shape.placeholderIndex !== undefined
      ? placeholderTypeToStyleKey(shape.placeholderType)
      : "otherStyle";
  if (
    shape.placeholderType === "subTitle" &&
    styleKey === "titleStyle"
  )
    styleKey = "bodyStyle";
  const { layout, masterLayout } = slide.resolveRenderContext();
  const allowIndexOnly =
    shape.placeholderIndex !== undefined &&
    shape.placeholderType === undefined;
  const ownStyle = textStyleToCleanProto(shape.textStyle as never) ?? {};
  const level0Style = shape.levelsStyles?.[0]?.textStyle;
  let layoutPlaceholderStyle: Record<string, unknown> | undefined;
  let layoutLevelStyle: unknown;
  let masterPlaceholderStyle: Record<string, unknown> | undefined;
  let masterLevelStyle: unknown;
  let masterRoleLevelStyle: unknown;
  const typeCandidates = expandTypes(shape.placeholderType);
  const layoutPlaceholder = layout?.findPlaceholder?.(
    typeCandidates,
    placeholderIndex,
    { allowIndexMatchWithoutType: allowIndexOnly },
  );
  if (layoutPlaceholder?.textStyle)
    layoutPlaceholderStyle = textStyleToCleanProto(
      layoutPlaceholder.textStyle as never,
    );
  if (layoutPlaceholder?.levelsStyles?.[0]?.textStyle)
    layoutLevelStyle = layoutPlaceholder.levelsStyles[0].textStyle;
  if (masterLayout) {
    const masterTypes = expandTypes(shape.placeholderType);
    const masterPlaceholder = masterLayout.findPlaceholder?.(
      masterTypes,
      placeholderIndex,
      { allowIndexMatchWithoutType: allowIndexOnly },
    );
    if (masterPlaceholder?.textStyle)
      masterPlaceholderStyle = textStyleToCleanProto(
        masterPlaceholder.textStyle as never,
      );
    if (masterPlaceholder?.levelsStyles?.[0]?.textStyle)
      masterLevelStyle = masterPlaceholder.levelsStyles[0].textStyle;
    if (
      styleKey === "titleStyle" &&
      masterLayout?.titleLevelStyles?.[0]?.textStyle
    )
      masterRoleLevelStyle = masterLayout.titleLevelStyles[0].textStyle;
    else if (
      styleKey === "bodyStyle" &&
      masterLayout?.bodyLevelStyles?.[0]?.textStyle
    )
      masterRoleLevelStyle = masterLayout.bodyLevelStyles[0].textStyle;
    else if (masterLayout?.otherLevelStyles?.[0]?.textStyle)
      masterRoleLevelStyle = masterLayout.otherLevelStyles[0].textStyle;
  }
  const fontRefFill = shape.fontReference?.color
    ? {
        fill: {
          type: fillTypeEnum.FILL_TYPE_SOLID,
          color: shape.fontReference.color,
          gradientStops: [],
          pictureEffects: [],
        },
      }
    : undefined;
  return mergeStyleLayers(
    ownStyle,
    fontRefFill,
    level0Style,
    layoutPlaceholderStyle,
    layoutLevelStyle,
    masterPlaceholderStyle,
    masterLevelStyle,
    masterRoleLevelStyle,
    DEFAULT_TEXT_STYLE,
  );
}
