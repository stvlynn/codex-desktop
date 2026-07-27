// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Static code-theme registry catalog (bundle `zri` labels + variant support;
// list helper `Zni` / export `MW`). Consumers: register-app-actions
// `app.appearance.get_available_themes`.
//
// Chrome-theme seed loading (`eri` / `jW`) lives in `load-chrome-theme-seed.ts`.

import { CodeThemeId, type CodeThemeIdValue } from "./code-theme-ids";

export type CodeThemeCatalogEntry = {
  id: CodeThemeIdValue;
  label: string;
  supportsDark: boolean;
  supportsLight: boolean;
};

/**
 * Bundle `zri` projection — id/label + which appearance variants exist.
 * Sorted by label (bundle `Lri` = `Intl.Collator` base sensitivity).
 */
export const CODE_THEME_CATALOG: readonly CodeThemeCatalogEntry[] = [
  {
    id: CodeThemeId.AYU,
    label: "Ayu",
    supportsDark: true,
    supportsLight: false,
  },
  {
    id: CodeThemeId.CATPPUCCIN,
    label: "Catppuccin",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.ABSOLUTELY,
    label: "Absolutely",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.CODEX,
    label: "Codex",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.DRACULA,
    label: "Dracula",
    supportsDark: true,
    supportsLight: false,
  },
  {
    id: CodeThemeId.EVERFOREST,
    label: "Everforest",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.GITHUB,
    label: "GitHub",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.GRUVBOX,
    label: "Gruvbox",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.LINEAR,
    label: "Linear",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.LOBSTER,
    label: "Lobster",
    supportsDark: true,
    supportsLight: false,
  },
  {
    id: CodeThemeId.MATERIAL,
    label: "Material",
    supportsDark: true,
    supportsLight: false,
  },
  {
    id: CodeThemeId.MATRIX,
    label: "Matrix",
    supportsDark: true,
    supportsLight: false,
  },
  {
    id: CodeThemeId.MONOKAI,
    label: "Monokai",
    supportsDark: true,
    supportsLight: false,
  },
  {
    id: CodeThemeId.NIGHT_OWL,
    label: "Night Owl",
    supportsDark: true,
    supportsLight: false,
  },
  {
    id: CodeThemeId.NORD,
    label: "Nord",
    supportsDark: true,
    supportsLight: false,
  },
  {
    id: CodeThemeId.NOTION,
    label: "Notion",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.OSCURANGE,
    label: "Oscurange",
    supportsDark: true,
    supportsLight: false,
  },
  {
    id: CodeThemeId.ONE,
    label: "One",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.PROOF,
    label: "Proof",
    supportsDark: false,
    supportsLight: true,
  },
  {
    id: CodeThemeId.RAYCAST,
    label: "Raycast",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.ROSE_PINE,
    label: "Rose Pine",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.SENTRY,
    label: "Sentry",
    supportsDark: true,
    supportsLight: false,
  },
  {
    id: CodeThemeId.SOLARIZED,
    label: "Solarized",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.TOKYO_NIGHT,
    label: "Tokyo Night",
    supportsDark: true,
    supportsLight: false,
  },
  {
    id: CodeThemeId.TEMPLE,
    label: "Temple",
    supportsDark: true,
    supportsLight: false,
  },
  {
    id: CodeThemeId.VERCEL,
    label: "Vercel",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.VSCODE_PLUS,
    label: "VS Code Plus",
    supportsDark: true,
    supportsLight: true,
  },
  {
    id: CodeThemeId.XCODE,
    label: "Xcode",
    supportsDark: true,
    supportsLight: true,
  },
] as const;

const labelCollator = new Intl.Collator(undefined, { sensitivity: "base" });

/**
 * Bundle `Zni` / export `MW` — themes sorted by label for
 * `app.appearance.get_available_themes`.
 */
export function listAvailableCodeThemes(): CodeThemeCatalogEntry[] {
  return [...CODE_THEME_CATALOG].sort((a, b) =>
    labelCollator.compare(a.label, b.label),
  );
}

/**
 * Bundle `FP` / export `PW` — original ESM init that built `zri`/`Bri`.
 * Catalog data lives in this module; consumers that only call the init for
 * side effects before `listAvailableCodeThemes` get a no-op.
 */
export function ensureCodeThemeRegistryInit(): void {}
