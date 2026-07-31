// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Box background / border color resolve (Y-init near B/X theme tables).

import { pickThemeColor, type ThemeColorInput } from "./chart-theme-colors";

/** Design-token color ids that map to `var(--token)`. */
const DESIGN_TOKEN_COLOR_RE =
  /^(?:white|black|alpha-\d{1,3}|(?:gray|green|red|pink|orange|yellow|purple|blue)-(?:\d{1,4}|a\d{1,3}))$/;

const PALETTE_HUES = new Set([
  "blue",
  "green",
  "orange",
  "pink",
  "purple",
  "red",
  "yellow",
]);

const WEIGHT_BY_INTENSITY = {
  subtle: { dark: "900", light: "50" },
  soft: { dark: "800", light: "100" },
} as const;

const INTENSITY_ALIASES: Record<string, "subtle" | "soft"> = {
  light: "subtle",
  low: "subtle",
};

const GRAY_INTENSITY = {
  subtle: "gray-50",
  soft: "gray-100",
} as const;

const GRAY_BACKGROUND_DEFAULT = "gray-50";
const GRAY_FOREGROUND_DEFAULT = "gray-600";

export type BorderSideInput =
  | number
  | {
      size: number;
      style?: string;
      color?: ThemeColorInput;
    }
  | null
  | undefined;

export type BorderInput =
  | BorderSideInput
  | {
      x?: BorderSideInput;
      y?: BorderSideInput;
      top?: BorderSideInput;
      bottom?: BorderSideInput;
      left?: BorderSideInput;
      right?: BorderSideInput;
    }
  | null
  | undefined;

export function isDesignTokenColor(name: string): boolean {
  return DESIGN_TOKEN_COLOR_RE.test(name);
}

/**
 * Resolve palette/gray intensity aliases for background vs foreground.
 */
export function resolveSemanticColorName(
  theme: string,
  color: string,
  role: "background" | "foreground",
): string {
  const dash = color.indexOf("-");
  const hue = dash < 0 ? color : color.slice(0, dash);
  const intensity = dash < 0 ? undefined : color.slice(dash + 1);

  if (hue === "gray") {
    const mapped =
      intensity && intensity in INTENSITY_ALIASES
        ? INTENSITY_ALIASES[intensity]
        : (intensity as "subtle" | "soft" | undefined);
    if (mapped) {
      return mapped === "subtle" || mapped === "soft"
        ? GRAY_INTENSITY[mapped]
        : color;
    }
    return role === "background"
      ? GRAY_BACKGROUND_DEFAULT
      : GRAY_FOREGROUND_DEFAULT;
  }

  if (!PALETTE_HUES.has(hue)) return color;
  if (!intensity) {
    return `${hue}-${
      role === "background"
        ? theme === "dark"
          ? "900"
          : "50"
        : theme === "dark"
          ? "400"
          : "500"
    }`;
  }
  const mapped =
    intensity in INTENSITY_ALIASES
      ? INTENSITY_ALIASES[intensity]
      : (intensity as string);
  if (mapped !== "subtle" && mapped !== "soft") return color;
  return `${hue}-${WEIGHT_BY_INTENSITY[mapped][theme === "dark" ? "dark" : "light"]}`;
}

/** Background CSS color for Box. */
export function resolveBackgroundCss(
  theme: string,
  color: ThemeColorInput,
): string | undefined {
  const picked = pickThemeColor(theme, color);
  if (!picked) return undefined;
  const resolved = resolveSemanticColorName(theme, picked, "background");
  if (isDesignTokenColor(resolved)) return `var(--${resolved})`;
  switch (resolved) {
    case "surface":
      return "var(--color-surface)";
    case "surface-inverted":
      return "var(--color-text-prose)";
    case "success":
      return "var(--color-text-success)";
    case "danger":
      return "var(--color-text-danger)";
    case "surface-secondary":
      return "var(--color-surface-secondary)";
    case "surface-tertiary":
      return "var(--color-surface-tertiary)";
    case "surface-soft":
      return "var(--color-background-primary-surface)";
    case "surface-elevated":
      return "var(--color-surface-elevated)";
    case "surface-elevated-secondary":
      return "var(--color-surface-elevated-secondary)";
    case "border":
      return "var(--color-border)";
    case "border-subtle":
      return "var(--color-border-subtle)";
    case "border-strong":
      return "var(--color-border-strong)";
    default:
      return resolved;
  }
}

/** Border CSS color for Box. */
export function resolveBorderColorCss(
  theme: string,
  color: ThemeColorInput,
): string {
  const picked = pickThemeColor(theme, color);
  if (!picked) return "var(--color-border)";
  const resolved = resolveSemanticColorName(theme, picked, "foreground");
  if (isDesignTokenColor(resolved)) return `var(--${resolved})`;
  switch (resolved) {
    case "default":
      return "var(--color-border)";
    case "subtle":
      return "var(--color-border-subtle)";
    case "strong":
      return "var(--color-border-strong)";
    default:
      return resolved;
  }
}

function toBorderCss(
  theme: string,
  border: BorderSideInput,
): string | undefined {
  if (border == null) return undefined;
  if (typeof border === "number") {
    return border
      ? `${border}px solid ${resolveBorderColorCss(theme, undefined)}`
      : "0";
  }
  return `${border.size}px ${border.style ?? "solid"} ${resolveBorderColorCss(theme, border.color)}`;
}

/** Border style object (sides or uniform). */
export function toBorderStyle(
  theme: string,
  border: BorderInput,
): Record<string, string | undefined> {
  if (border == null) return {};
  if (typeof border === "number" || "size" in border) {
    return { border: toBorderCss(theme, border as BorderSideInput) };
  }
  const { x, y, top = y, bottom = y, left = x, right = x } = border;
  return {
    borderTop: toBorderCss(theme, top),
    borderBottom: toBorderCss(theme, bottom),
    borderLeft: toBorderCss(theme, left),
    borderRight: toBorderCss(theme, right),
  };
}
