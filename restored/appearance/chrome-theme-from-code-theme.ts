// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Extract chrome theme seed colors from a VS Code / Shiki code-theme document
// (bundle `ari`/`ori`/`sri`/`cri`/`lri` + color-key tables from `FP`).

import {
  CHROME_THEME_DEFAULTS,
  type ChromeTheme,
  type ChromeThemePatch,
  type ChromeThemeSemanticColors,
  type ChromeThemeVariant,
} from "./chrome-theme-defaults";

export type CodeThemeDocument = {
  colors?: Record<string, string | undefined>;
  tokenColors?: ReadonlyArray<{
    settings?: { foreground?: string };
  }>;
  settings?: ReadonlyArray<{
    settings?: { foreground?: string };
  }>;
  chromeTheme?: ChromeThemePatch | null;
};

import {
  SURFACE_COLOR_KEYS,
  INK_COLOR_KEYS,
  DIFF_ADDED_COLOR_KEYS,
  DIFF_REMOVED_COLOR_KEYS,
  SKILL_COLOR_KEYS,
  GREEN_HUE_RANGE,
  GREEN_HUE_TARGET,
  RED_HUE_RANGE,
  RED_HUE_TARGET,
  PURPLE_HUE_RANGE,
  PURPLE_HUE_TARGET,
  firstMatchingColor,
  pickAccentColor,
  pickSemanticByHue,
  colorsNear,
} from "./chrome-theme-color-math";

/**
 * Bundle `ari` — derive accent / ink / surface / semanticColors from a
 * code-theme document for the given appearance variant.
 */
export function extractChromeThemeColors(
  theme: CodeThemeDocument,
  variant: ChromeThemeVariant,
): Pick<ChromeTheme, "accent" | "ink" | "semanticColors" | "surface"> {
  const defaults = CHROME_THEME_DEFAULTS[variant];
  const surface =
    firstMatchingColor(theme.colors, SURFACE_COLOR_KEYS) ?? defaults.surface;
  const ink = firstMatchingColor(theme.colors, INK_COLOR_KEYS) ?? defaults.ink;
  const accent = pickAccentColor(theme, surface, ink) ?? defaults.accent;
  const semanticColors: ChromeThemeSemanticColors = {
    diffAdded:
      firstMatchingColor(theme.colors, DIFF_ADDED_COLOR_KEYS) ??
      pickSemanticByHue(
        theme,
        surface,
        ink,
        GREEN_HUE_RANGE,
        GREEN_HUE_TARGET,
      ) ??
      defaults.semanticColors.diffAdded,
    diffRemoved:
      firstMatchingColor(theme.colors, DIFF_REMOVED_COLOR_KEYS) ??
      pickSemanticByHue(theme, surface, ink, RED_HUE_RANGE, RED_HUE_TARGET) ??
      defaults.semanticColors.diffRemoved,
    skill:
      firstMatchingColor(theme.colors, SKILL_COLOR_KEYS) ??
      pickSemanticByHue(
        theme,
        surface,
        ink,
        PURPLE_HUE_RANGE,
        PURPLE_HUE_TARGET,
      ) ??
      (!colorsNear(accent, surface) && !colorsNear(accent, ink)
        ? accent
        : defaults.semanticColors.skill),
  };
  return { accent, ink, semanticColors, surface };
}

export type ChromeThemeSeedColors = Pick<
  ChromeTheme,
  "accent" | "ink" | "semanticColors" | "surface"
>;

/**
 * Bundle `ori` — merge optional `chromeTheme` overlay from the code-theme
 * document onto extracted colors.
 */
export function mergeChromeThemeSeedOverlay(
  extracted: ChromeThemeSeedColors,
  overlay: ChromeThemePatch | null | undefined,
): ChromeThemeSeedColors {
  if (overlay == null) return extracted;
  return {
    accent: overlay.accent ?? extracted.accent,
    ink: overlay.ink ?? extracted.ink,
    surface: overlay.surface ?? extracted.surface,
    semanticColors:
      overlay.semanticColors == null
        ? extracted.semanticColors
        : { ...extracted.semanticColors, ...overlay.semanticColors },
  };
}

/**
 * Bundle `ari`+`ori` pipeline used by `loadChromeThemeSeed`.
 */
export function chromeThemeSeedFromCodeTheme(
  theme: CodeThemeDocument,
  variant: ChromeThemeVariant,
): Pick<ChromeTheme, "accent" | "ink" | "semanticColors" | "surface"> {
  return mergeChromeThemeSeedOverlay(
    extractChromeThemeColors(theme, variant),
    theme.chromeTheme,
  );
}
