// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-17: cascade-resolve placeholder level styles (helper 190–193 / ece / tce / nce).

import { expandPlaceholderTypeCandidates } from "../presentation-theme";
import { mergeParagraphStyleWithBulletExclusivity } from "./merge-bullet-paragraph-style";

export type LevelStyleKey = "titleStyle" | "bodyStyle" | "otherStyle";

export type LevelStyleLayer = {
  paragraphStyle?: Record<string, unknown>;
  spaceBefore?: unknown;
  spaceAfter?: unknown;
  [key: string]: unknown;
};

export type PlaceholderHost = {
  placeholderIndex?: number;
  placeholderType?: string;
  levelsStyles?: Array<LevelStyleLayer | undefined> | null;
  paragraphs?: Array<{
    paragraphStyle?: { outlineLevel?: number };
  } | null>;
};

export type LayoutWithPlaceholders = {
  findPlaceholder?: (
    types: string[],
    index: number,
    options?: { allowIndexMatchWithoutType?: boolean },
  ) => { levelsStyles: Array<LevelStyleLayer | undefined> } | null | undefined;
  titleLevelStyles?: Array<LevelStyleLayer | undefined>;
  bodyLevelStyles?: Array<LevelStyleLayer | undefined>;
  otherLevelStyles?: Array<LevelStyleLayer | undefined>;
};

export type SlideWithRenderContext = {
  resolveRenderContext(): {
    layout?: LayoutWithPlaceholders | null;
    masterLayout?: LayoutWithPlaceholders | null;
  };
};

/** Legacy `tce` — placeholder type → master level-style bucket. */
export function placeholderTypeToLevelStyleKey(
  placeholderType: string | undefined,
  hasPlaceholderIndex: boolean,
): LevelStyleKey {
  if (placeholderType === undefined && !hasPlaceholderIndex) return "otherStyle";
  switch (placeholderType) {
    case "title":
    case "ctrTitle":
      return "titleStyle";
    case "body":
    case "obj":
    case "content":
    case "subTitle":
    case "":
    case undefined:
      return "bodyStyle";
    default:
      return "otherStyle";
  }
}

/** Legacy `ece` — master layout level styles for a placeholder type. */
export function masterLevelStylesForPlaceholder(
  shape: PlaceholderHost,
  masterLayout: LayoutWithPlaceholders | null | undefined,
): Array<LevelStyleLayer | undefined> {
  if (!masterLayout) return [];
  const key = placeholderTypeToLevelStyleKey(
    shape.placeholderType,
    shape.placeholderIndex !== undefined,
  );
  if (key === "titleStyle") return masterLayout.titleLevelStyles ?? [];
  if (key === "bodyStyle") return masterLayout.bodyLevelStyles ?? [];
  return masterLayout.otherLevelStyles ?? [];
}

/** Legacy `workbook helper 193` — first defined value in a list. */
export function firstDefined<T>(values: Array<T | undefined>): T | undefined {
  for (const value of values) if (value !== undefined) return value;
}

/** Legacy `nce` — merge level-style layers (last wins via reverse fold). */
export function mergeLevelStyleLayers(
  ...layers: Array<LevelStyleLayer | null | undefined>
): LevelStyleLayer | undefined {
  let paragraphStyle: Record<string, unknown> | undefined;
  for (let i = layers.length - 1; i >= 0; --i) {
    paragraphStyle = mergeParagraphStyleWithBulletExclusivity(
      layers[i]?.paragraphStyle,
      paragraphStyle,
    );
  }
  const merged: LevelStyleLayer = {
    paragraphStyle,
    spaceBefore: firstDefined(layers.map((layer) => layer?.spaceBefore)),
    spaceAfter: firstDefined(layers.map((layer) => layer?.spaceAfter)),
  };
  return Object.values(merged).some((value) => value !== undefined)
    ? merged
    : undefined;
}

/** Legacy `workbook helper 192` — outline level for paragraph index. */
export function paragraphOutlineLevel(
  element: PlaceholderHost,
  paragraphIndex: number,
): number {
  const raw =
    element.paragraphs?.[paragraphIndex]?.paragraphStyle?.outlineLevel;
  if (raw === undefined || !Number.isFinite(raw)) return 0;
  return Math.max(0, Math.round(raw));
}

/** Legacy `workbook helper 191` — pick level style by outline, fallback [0]. */
export function levelStyleAtOutline(
  levels: Array<LevelStyleLayer | undefined>,
  element: PlaceholderHost,
  paragraphIndex: number,
): LevelStyleLayer | undefined {
  return levels[paragraphOutlineLevel(element, paragraphIndex)] ?? levels[0];
}

/**
 * Legacy `workbook helper 190` — cascade shape / layout / master / master-bucket
 * level styles for a placeholder-bearing shape.
 */
export function resolvePlaceholderLevelStyles(
  shape: PlaceholderHost,
  slide: SlideWithRenderContext,
): Array<LevelStyleLayer | undefined> {
  const { layout, masterLayout } = slide.resolveRenderContext();
  const placeholderIndex = shape.placeholderIndex ?? 0;
  const allowIndexMatchWithoutType =
    shape.placeholderIndex !== undefined && shape.placeholderType === undefined;
  const typeCandidates = expandPlaceholderTypeCandidates(shape.placeholderType);
  const layoutPh = layout?.findPlaceholder?.(typeCandidates, placeholderIndex, {
    allowIndexMatchWithoutType,
  });
  const masterPh = masterLayout?.findPlaceholder?.(
    typeCandidates,
    placeholderIndex,
    { allowIndexMatchWithoutType },
  );
  const masterBucket = masterLevelStylesForPlaceholder(shape, masterLayout);
  const levelCount = Math.max(
    shape.levelsStyles?.length ?? 0,
    layoutPh?.levelsStyles.length ?? 0,
    masterPh?.levelsStyles.length ?? 0,
    masterBucket.length,
  );
  const out: Array<LevelStyleLayer | undefined> = [];
  for (let i = 0; i < levelCount; i += 1) {
    const merged = mergeLevelStyleLayers(
      shape.levelsStyles?.[i],
      layoutPh?.levelsStyles[i],
      masterPh?.levelsStyles[i],
      masterBucket[i],
    );
    if (merged !== undefined) out[i] = merged;
  }
  return out;
}
