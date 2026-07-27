// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Default chrome themes + merge helper (bundle `Bni` / `wP`; export `IW`).

export type ChromeThemeFonts = {
  code: string | null;
  ui: string | null;
};

export type ChromeThemeSemanticColors = {
  diffAdded: string;
  diffRemoved: string;
  skill: string;
};

export type ChromeTheme = {
  accent: string;
  contrast: number;
  fonts: ChromeThemeFonts;
  ink: string;
  opaqueWindows: boolean;
  semanticColors: ChromeThemeSemanticColors;
  surface: string;
};

export type ChromeThemeVariant = "dark" | "light";

export type ChromeThemePatch = {
  accent?: string | null;
  contrast?: number | null;
  fonts?: { code?: string | null; ui?: string | null } | null;
  ink?: string | null;
  opaqueWindows?: boolean | null;
  semanticColors?: Partial<ChromeThemeSemanticColors> | null;
  surface?: string | null;
};

/** Bundle `Bni` — stock chrome theme defaults per appearance variant. */
export const CHROME_THEME_DEFAULTS: Record<ChromeThemeVariant, ChromeTheme> = {
  dark: {
    accent: "#339cff",
    contrast: 60,
    fonts: { code: null, ui: null },
    ink: "#ffffff",
    opaqueWindows: false,
    semanticColors: {
      diffAdded: "#40c977",
      diffRemoved: "#fa423e",
      skill: "#ad7bf9",
    },
    surface: "#181818",
  },
  light: {
    accent: "#339cff",
    contrast: 45,
    fonts: { code: null, ui: null },
    ink: "#1a1c1f",
    opaqueWindows: false,
    semanticColors: {
      diffAdded: "#00a240",
      diffRemoved: "#ba2623",
      skill: "#924ff7",
    },
    surface: "#ffffff",
  },
};

function normalizeHexColor(
  value: string | null | undefined,
): string | undefined {
  if (value == null) return undefined;
  const trimmed = value.trim();
  if (!/^#[0-9a-fA-F]{6}$/.test(trimmed)) return undefined;
  return trimmed.toLowerCase();
}

function normalizeContrast(
  value: number | null | undefined,
  fallback: number,
): number {
  if (value == null || Number.isNaN(value)) return fallback;
  return Math.min(100, Math.max(0, Math.round(value)));
}

function normalizeFontName(value: string | null | undefined): string | null {
  const trimmed = value?.trim() ?? "";
  return trimmed.length > 0 ? trimmed : null;
}

function normalizeFonts(fonts: ChromeThemePatch["fonts"]): ChromeThemeFonts {
  return {
    code: normalizeFontName(fonts?.code),
    ui: normalizeFontName(fonts?.ui),
  };
}

function mergeSemanticColors(
  patch: ChromeThemePatch["semanticColors"],
  fallback: ChromeThemeSemanticColors,
): ChromeThemeSemanticColors {
  return {
    diffAdded: normalizeHexColor(patch?.diffAdded) ?? fallback.diffAdded,
    diffRemoved: normalizeHexColor(patch?.diffRemoved) ?? fallback.diffRemoved,
    skill: normalizeHexColor(patch?.skill) ?? fallback.skill,
  };
}

/**
 * Bundle `wP` / export `IW` — merge a stored chrome theme with variant defaults.
 */
export function mergeChromeThemeWithDefaults(
  stored: ChromeThemePatch | null | undefined,
  variant: ChromeThemeVariant,
): ChromeTheme {
  const defaults = CHROME_THEME_DEFAULTS[variant];
  return {
    accent: normalizeHexColor(stored?.accent) ?? defaults.accent,
    contrast: normalizeContrast(stored?.contrast, defaults.contrast),
    fonts: normalizeFonts(stored?.fonts),
    ink: normalizeHexColor(stored?.ink) ?? defaults.ink,
    opaqueWindows: stored?.opaqueWindows ?? defaults.opaqueWindows,
    semanticColors: mergeSemanticColors(
      stored?.semanticColors,
      defaults.semanticColors,
    ),
    surface: normalizeHexColor(stored?.surface) ?? defaults.surface,
  };
}
/**
 * Bundle `Yni` / export `LW` — original ESM init that assigned `Bni`.
 * Defaults already live in `CHROME_THEME_DEFAULTS`; no-op for side-effect callers.
 */
export function ensureChromeThemeDefaultsInit(): void {}
