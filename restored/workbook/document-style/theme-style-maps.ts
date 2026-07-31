// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-16: theme format scheme → color/fill/line/effect maps (Yse / Nt / Binding520 / Rt).

import { esmInit } from "../../runtime/rolldown-runtime";
import { EffectList, ensureEffectListInit } from "./effect-list";

/** Legacy `workbookBinding520` — short theme color aliases → hexColorMap keys. */
export let THEME_COLOR_SCHEME_ALIASES: Record<string, string>;

export type ColorMapAliases = Record<string, string> & {
  background1?: string;
  background2?: string;
  text1?: string;
  text2?: string;
  dark1?: string;
  dark2?: string;
  light1?: string;
  light2?: string;
  hyperlink?: string;
  followedhyperlink?: string;
  bg1?: string;
  bg2?: string;
  tx1?: string;
  tx2?: string;
  dk1?: string;
  dk2?: string;
  lt1?: string;
  lt2?: string;
  hlink?: string;
  folHlink?: string;
};

/** Legacy `Yse` — normalize bg/tx/dk/lt alias keys on a color map. */
export function normalizeColorMapAliases(
  map: ColorMapAliases,
): ColorMapAliases {
  return {
    ...map,
    background1: map.background1 ?? map.bg1 ?? map.lt1 ?? "",
    background2: map.background2 ?? map.bg2 ?? map.lt2 ?? "",
    text1: map.text1 ?? map.tx1 ?? map.dk1 ?? "",
    text2: map.text2 ?? map.tx2 ?? map.lt1 ?? "",
    dark1: map.dark1 ?? map.dk1 ?? "",
    dark2: map.dark2 ?? map.dk2 ?? "",
    light1: map.light1 ?? map.lt1 ?? "",
    light2: map.light2 ?? map.lt2 ?? "",
    hyperlink: map.hyperlink ?? map.hlink ?? "",
    followedhyperlink: map.followedhyperlink ?? map.folHlink ?? "",
  };
}

export type ThemeFormatScheme = {
  fillStyleList?: unknown[];
  lineStyleList?: unknown[];
  effectStyleList?: Array<{ effects?: Iterable<Record<string, unknown>> }>;
  hexColorMap?: Record<string, string>;
  fontScheme?: unknown;
};

export type ThemeStyleMaps = {
  colorMap: ColorMapAliases;
  fillStyleMap: Record<number, unknown>;
  lineStyleMap: Record<number, unknown>;
  effectMap: Record<number, EffectList>;
  fontScheme?: unknown;
};

/** Legacy `workbookNt` — build 1-based fill/line/effect maps + aliased color map. */
export function buildThemeStyleMaps(
  scheme: ThemeFormatScheme | null | undefined,
  extraColorAliases?: Record<string, string> | null,
): ThemeStyleMaps {
  if (!scheme) {
    return {
      colorMap: {},
      fillStyleMap: {},
      lineStyleMap: {},
      effectMap: {},
    };
  }
  const fillStyleMap: Record<number, unknown> = {};
  for (const [index, fill] of (scheme.fillStyleList ?? []).entries())
    fillStyleMap[index + 1] = fill;
  const lineStyleMap: Record<number, unknown> = {};
  for (const [index, line] of (scheme.lineStyleList ?? []).entries())
    lineStyleMap[index + 1] = line;
  const effectMap: Record<number, EffectList> = {};
  for (const [index, effectStyle] of (scheme.effectStyleList ?? []).entries())
    effectMap[index + 1] = new EffectList(effectStyle.effects);
  const hexColorMap = scheme.hexColorMap ?? {};
  const colorMap: Record<string, string> = { ...hexColorMap };
  ensureThemeStyleMapsInit();
  for (const [alias, key] of Object.entries({
    ...THEME_COLOR_SCHEME_ALIASES,
    ...(extraColorAliases ?? {}),
  })) {
    const hex = hexColorMap[key];
    if (hex) colorMap[alias] = hex;
  }
  return {
    colorMap: normalizeColorMapAliases(colorMap),
    fillStyleMap,
    lineStyleMap,
    effectMap,
    fontScheme: scheme.fontScheme,
  };
}

/** Finite-number guard. */
export function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && !Number.isNaN(value);
}

export type ListLevelStyle = {
  level?: number;
  paragraphStyle?: { marginLeft?: unknown };
  spaceBefore?: unknown;
  spaceAfter?: unknown;
};

/** List-level style pick: pick list level by marginLeft proximity, else level 1 / first. */
export function resolveListLevelStyle(
  element: { levelsStyles?: ListLevelStyle[] } | null | undefined,
  paragraph: { paragraphStyle?: { marginLeft?: unknown } } | null | undefined,
): ListLevelStyle | undefined {
  if (!element || !element.levelsStyles?.length) return;
  const levels = element.levelsStyles;
  const marginLeft = paragraph?.paragraphStyle?.marginLeft;
  if (isFiniteNumber(marginLeft)) {
    let best: ListLevelStyle | undefined;
    let bestDelta = Infinity;
    for (const level of levels) {
      const levelMargin = level.paragraphStyle?.marginLeft;
      if (!isFiniteNumber(levelMargin)) continue;
      const delta = Math.abs(levelMargin - marginLeft);
      if (delta < bestDelta) {
        best = level;
        bestDelta = delta;
      }
    }
    if (best) return best;
  }
  return levels.find((level) => level.level === 1) ?? levels[0];
}

/** Legacy `Xse` — paragraph spaceBefore/After with list-level fallback. */
export function resolveParagraphSpacingOverrides(
  element: { levelsStyles?: ListLevelStyle[] } | null | undefined,
  paragraph:
    | {
        paragraphStyle?: { marginLeft?: unknown };
        spaceBefore?: unknown;
        spaceAfter?: unknown;
      }
    | null
    | undefined,
): { spaceBefore?: unknown; spaceAfter?: unknown } {
  const level = resolveListLevelStyle(element, paragraph);
  const spaceBefore = paragraph?.spaceBefore;
  const spaceAfter = paragraph?.spaceAfter;
  return {
    spaceBefore: spaceBefore === undefined ? level?.spaceBefore : spaceBefore,
    spaceAfter: spaceAfter === undefined ? level?.spaceAfter : spaceAfter,
  };
}

/** Legacy `workbookRt` — theme color aliases + EffectList init. */
export const ensureThemeStyleMapsInit = esmInit(() => {
  ensureEffectListInit();
  THEME_COLOR_SCHEME_ALIASES = {
    accent1: "accent1",
    accent2: "accent2",
    accent3: "accent3",
    accent4: "accent4",
    accent5: "accent5",
    accent6: "accent6",
    bg1: "lt1",
    tx1: "dk1",
    bg2: "lt2",
    tx2: "dk2",
    hlink: "hlink",
    folHlink: "folHlink",
  };
});
