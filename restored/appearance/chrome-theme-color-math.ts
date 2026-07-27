// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Color-key tables + RGB/hue math for chrome theme seed extraction.

import type { CodeThemeDocument } from "./chrome-theme-from-code-theme";

type Rgb = { alpha: number; blue: number; green: number; red: number };
type HueRange = { max: number; min: number };

const SURFACE_COLOR_KEYS = [
  "editor.background",
  "sideBar.background",
  "editorGroupHeader.tabsBackground",
  "panel.background",
  "activityBar.background",
] as const;

const INK_COLOR_KEYS = [
  "editor.foreground",
  "sideBarTitle.foreground",
  "sideBar.foreground",
  "foreground",
] as const;

const ACCENT_COLOR_KEYS = [
  "activityBarBadge.background",
  "textLink.foreground",
  "editorCursor.foreground",
  "focusBorder",
  "button.background",
  "activityBar.activeBorder",
] as const;

const DIFF_ADDED_COLOR_KEYS = [
  "gitDecoration.addedResourceForeground",
  "gitDecoration.untrackedResourceForeground",
  "terminal.ansiGreen",
  "terminal.ansiBrightGreen",
] as const;

const DIFF_REMOVED_COLOR_KEYS = [
  "gitDecoration.deletedResourceForeground",
  "terminal.ansiRed",
  "terminal.ansiBrightRed",
] as const;

const SKILL_COLOR_KEYS = [
  "charts.purple",
  "terminal.ansiMagenta",
  "terminal.ansiBrightMagenta",
] as const;

const MINIMUM_ALPHA = 0.45;
const MINIMUM_CHROMATIC_RANGE = 24;
const GREEN_HUE_RANGE: HueRange = { max: 170, min: 80 };
const GREEN_HUE_TARGET = 125;
const RED_HUE_RANGE: HueRange = { max: 15, min: 345 };
const RED_HUE_TARGET = 0;
const PURPLE_HUE_RANGE: HueRange = { max: 320, min: 210 };
const PURPLE_HUE_TARGET = 265;

function parseRgb(value: string | null | undefined): Rgb | null {
  if (value == null) return null;
  const trimmed = value.trim();
  if (!/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/.test(trimmed)) return null;
  const alphaHex = trimmed.length === 9 ? trimmed.slice(7, 9) : "ff";
  return {
    alpha: Number.parseInt(alphaHex, 16) / 255,
    blue: Number.parseInt(trimmed.slice(5, 7), 16),
    green: Number.parseInt(trimmed.slice(3, 5), 16),
    red: Number.parseInt(trimmed.slice(1, 3), 16),
  };
}

function rgbToHex(rgb: Rgb): string {
  return `#${rgb.red.toString(16).padStart(2, "0")}${rgb.green.toString(16).padStart(2, "0")}${rgb.blue.toString(16).padStart(2, "0")}`;
}

function chromaticRange(rgb: Rgb): number {
  return (
    Math.max(rgb.red, rgb.green, rgb.blue) -
    Math.min(rgb.red, rgb.green, rgb.blue)
  );
}

function pickHex(
  value: string | null | undefined,
  options?: { minimumAlpha?: number; minimumChromaticRange?: number },
): string | undefined {
  const rgb = parseRgb(value);
  if (rgb == null) return undefined;
  const minimumAlpha = options?.minimumAlpha ?? 0.98;
  const minimumChromaticRange = options?.minimumChromaticRange ?? 0;
  if (rgb.alpha < minimumAlpha || chromaticRange(rgb) < minimumChromaticRange) {
    return undefined;
  }
  return rgbToHex(rgb);
}

function colorsNear(a: string, b: string): boolean {
  const ra = parseRgb(a);
  const rb = parseRgb(b);
  if (ra == null || rb == null) return false;
  const dist = Math.sqrt(
    (ra.red - rb.red) ** 2 +
      (ra.green - rb.green) ** 2 +
      (ra.blue - rb.blue) ** 2,
  );
  return dist < 42;
}

function contrastScore(color: string, surface: string, ink: string): number {
  const c = parseRgb(color);
  const s = parseRgb(surface);
  const i = parseRgb(ink);
  if (c == null || s == null || i == null) return 0;
  const dist = (a: Rgb, b: Rgb) =>
    Math.sqrt(
      (a.red - b.red) ** 2 + (a.green - b.green) ** 2 + (a.blue - b.blue) ** 2,
    );
  return chromaticRange(c) + dist(c, s) / 4 + dist(c, i) / 4;
}

function hueOf(rgb: Rgb): number | null {
  const r = rgb.red / 255;
  const g = rgb.green / 255;
  const b = rgb.blue / 255;
  const max = Math.max(r, g, b);
  const delta = max - Math.min(r, g, b);
  if (delta === 0) return null;
  let hue: number;
  if (max === r) hue = (((g - b) / delta) % 6) * 60;
  else if (max === g) hue = ((b - r) / delta + 2) * 60;
  else hue = ((r - g) / delta + 4) * 60;
  return (hue + 360) % 360;
}

function hueInRange(hue: number, range: HueRange): boolean {
  return range.min <= range.max
    ? hue >= range.min && hue <= range.max
    : hue >= range.min || hue <= range.max;
}

function hueDistance(a: number, b: number): number {
  const delta = Math.abs(a - b);
  return Math.min(delta, 360 - delta);
}

function firstMatchingColor(
  colors: CodeThemeDocument["colors"],
  keys: readonly string[],
): string | undefined {
  if (colors == null) return undefined;
  for (const key of keys) {
    const picked = pickHex(colors[key]);
    if (picked != null) return picked;
  }
  return undefined;
}

function tokenColorEntries(theme: CodeThemeDocument) {
  return [...(theme.tokenColors ?? []), ...(theme.settings ?? [])];
}

function collectThemeColors(theme: CodeThemeDocument): string[] {
  const fromColors = Object.values(theme.colors ?? {});
  const fromTokens = tokenColorEntries(theme).map(
    (entry) => entry.settings?.foreground,
  );
  const unique = new Set<string>();
  for (const value of [...fromColors, ...fromTokens]) {
    const picked = pickHex(value, {
      minimumAlpha: MINIMUM_ALPHA,
      minimumChromaticRange: MINIMUM_CHROMATIC_RANGE,
    });
    if (picked != null) unique.add(picked);
  }
  return [...unique];
}

function pickAccentColor(
  theme: CodeThemeDocument,
  surface: string,
  ink: string,
): string | undefined {
  for (const key of ACCENT_COLOR_KEYS) {
    const picked = pickHex(theme.colors?.[key], {
      minimumAlpha: MINIMUM_ALPHA,
      minimumChromaticRange: MINIMUM_CHROMATIC_RANGE,
    });
    if (
      picked != null &&
      !colorsNear(picked, surface) &&
      !colorsNear(picked, ink)
    ) {
      return picked;
    }
  }
  let best: string | undefined;
  let bestScore = -1;
  for (const entry of tokenColorEntries(theme)) {
    const picked = pickHex(entry.settings?.foreground, {
      minimumAlpha: MINIMUM_ALPHA,
      minimumChromaticRange: MINIMUM_CHROMATIC_RANGE,
    });
    if (
      picked == null ||
      colorsNear(picked, surface) ||
      colorsNear(picked, ink)
    ) {
      continue;
    }
    const score = contrastScore(picked, surface, ink);
    if (score > bestScore) {
      best = picked;
      bestScore = score;
    }
  }
  return best;
}

function pickSemanticByHue(
  theme: CodeThemeDocument,
  surface: string,
  ink: string,
  hueRange: HueRange,
  targetHue: number,
): string | undefined {
  let best: string | undefined;
  let bestScore = -1;
  for (const candidate of collectThemeColors(theme)) {
    if (colorsNear(candidate, surface) || colorsNear(candidate, ink)) continue;
    const rgb = parseRgb(candidate);
    if (rgb == null) continue;
    const hue = hueOf(rgb);
    if (hue == null || !hueInRange(hue, hueRange)) continue;
    const score =
      contrastScore(candidate, surface, ink) - hueDistance(hue, targetHue) * 2;
    if (score > bestScore) {
      best = candidate;
      bestScore = score;
    }
  }
  return best;
}

export type {};
export {
  SURFACE_COLOR_KEYS,
  INK_COLOR_KEYS,
  ACCENT_COLOR_KEYS,
  DIFF_ADDED_COLOR_KEYS,
  DIFF_REMOVED_COLOR_KEYS,
  SKILL_COLOR_KEYS,
  MINIMUM_ALPHA,
  MINIMUM_CHROMATIC_RANGE,
  GREEN_HUE_RANGE,
  GREEN_HUE_TARGET,
  RED_HUE_RANGE,
  RED_HUE_TARGET,
  PURPLE_HUE_RANGE,
  PURPLE_HUE_TARGET,
  parseRgb,
  rgbToHex,
  chromaticRange,
  pickHex,
  colorsNear,
  contrastScore,
  hueOf,
  hueInRange,
  hueDistance,
  firstMatchingColor,
  tokenColorEntries,
  collectThemeColors,
  pickAccentColor,
  pickSemanticByHue,
};
