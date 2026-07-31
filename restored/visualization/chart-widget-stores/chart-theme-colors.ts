// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex chart theme color helpers (bundle chartWidgetStoresB / chartWidgetStoresX).

import { CHART_COLOR_NAMES } from "./chart-chrome-constants";

/** Design-token color ids that map to `var(--token)`. */
const DESIGN_TOKEN_COLOR_RE =
  /^(?:white|black|alpha-\d{1,3}|(?:gray|green|red|pink|orange|yellow|purple|blue)-(?:\d{1,4}|a\d{1,3}))$/;

export type ThemeColorInput =
  | string
  | Readonly<Record<string, string>>
  | null
  | undefined;

/**
 * True when `name` is a Codex chart palette hue (blue/purple/…).
 * Bundle export `chartWidgetStoresB`.
 */
export function isChartPaletteColor(name: string): boolean {
  return (CHART_COLOR_NAMES as readonly string[]).includes(name);
}

/** Pick a theme-keyed color string (light/dark map or plain string). */
export function pickThemeColor(
  theme: string,
  color: ThemeColorInput,
): string | undefined {
  if (!color) return undefined;
  return typeof color === "string" ? color : color[theme];
}

/**
 * Resolve a series/marker color for the active theme.
 * Palette hues stay bare (`blue`); design tokens become `var(--…)`.
 * Bundle export `chartWidgetStoresX`.
 */
export function resolveChartThemeColor(
  theme: string,
  color: ThemeColorInput,
): string | undefined {
  const resolved = pickThemeColor(theme, color);
  if (!resolved) return undefined;
  if (isChartPaletteColor(resolved)) return resolved;
  if (DESIGN_TOKEN_COLOR_RE.test(resolved)) return `var(--${resolved})`;
  return resolved;
}

/** Compat aliases matching boundaries/chart-widget-stores export names. */
export {
  isChartPaletteColor as chartWidgetStoresB,
  resolveChartThemeColor as chartWidgetStoresX,
};
