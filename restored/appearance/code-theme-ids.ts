// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Built-in code theme id catalog (bundle `mu`) + refine predicate
// (bundle `$ni` / export `FW`).

export const CodeThemeId = {
  AYU: "ayu",
  CATPPUCCIN: "catppuccin",
  CODEX: "codex",
  DRACULA: "dracula",
  EVERFOREST: "everforest",
  GITHUB: "github",
  GRUVBOX: "gruvbox",
  LINEAR: "linear",
  LOBSTER: "lobster",
  MATERIAL: "material",
  MATRIX: "matrix",
  MONOKAI: "monokai",
  ABSOLUTELY: "absolutely",
  NIGHT_OWL: "night-owl",
  NORD: "nord",
  NOTION: "notion",
  OSCURANGE: "oscurange",
  ONE: "one",
  PROOF: "proof",
  RAYCAST: "raycast",
  ROSE_PINE: "rose-pine",
  SENTRY: "sentry",
  SOLARIZED: "solarized",
  TEMPLE: "temple",
  TOKYO_NIGHT: "tokyo-night",
  VERCEL: "vercel",
  VSCODE_PLUS: "vscode-plus",
  XCODE: "xcode",
} as const;

export type CodeThemeIdValue = (typeof CodeThemeId)[keyof typeof CodeThemeId];

export const CODE_THEME_IDS: readonly CodeThemeIdValue[] =
  Object.values(CodeThemeId);

/**
 * Bundle `$ni` / export `FW` — Zod refine predicate for known code theme ids.
 * Bundle used `Bri = zri.map(e => e.id)`; the registered catalog matches `mu`.
 */
export function isValidCodeThemeId(value: string): boolean {
  return CODE_THEME_IDS.some((id) => id === value);
}
