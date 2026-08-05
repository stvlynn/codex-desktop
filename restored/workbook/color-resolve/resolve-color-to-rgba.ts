// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-7: scheme/system/rgb color → RGBA (legacy Tae / workbookSt cluster).

import { Zn as colorTypeEnum } from "../presentation-protobuf";
import { cssNamedColors } from "../presentation-theme";
import { hexToRgb, applyColorTransform } from "../theme-color";
import {
  clampRange,
  normalizeRgbHex,
  isWorkbookColorInstance,
  colorTransformOf,
  colorValueOf,
  colorLastColorOf,
  isSystemColor,
  type RgbaColor,
} from "./color-proto-accessors";

export type ThemeColorMap = { colorMap: Record<string, string> };

export type ResolveColorOptions = {
  colorSpace?: string;
  defaultFill?: string;
};

const THEME_SCHEME_ORDER = [
  "lt1",
  "dk1",
  "lt2",
  "dk2",
  "accent1",
  "accent2",
  "accent3",
  "accent4",
  "accent5",
  "accent6",
  "hlink",
  "folHlink",
] as const;

/** Resolve color proto/VO to RGBA channels. */
export function resolveColorToRgba(
  color: unknown,
  theme: ThemeColorMap,
  options?: ResolveColorOptions,
): RgbaColor {
  if (!color)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1,
    };
  let hex = "#000000";
  let alpha = 1;
  let applyTransform = true;
  const isVo = isWorkbookColorInstance(color);
  const typed = color as { type?: string | number; value?: string };
  if (
    (isVo && typed.type === "rgb") ||
    (!isVo && typed.type === colorTypeEnum.COLOR_TYPE_RGB)
  )
    hex = normalizeRgbHex(colorValueOf(typed)) ?? "#000000";
  else if (
    (isVo && typed.type === "theme") ||
    (!isVo && typed.type === colorTypeEnum.COLOR_TYPE_SCHEME)
  ) {
    let scheme = colorValueOf(typed) ?? "";
    let mapped = theme.colorMap[scheme];
    if (!mapped && scheme.startsWith("theme:")) {
      const index = parseInt(scheme.split(":")[1] ?? "", 10);
      if (!Number.isNaN(index)) {
        const alias = THEME_SCHEME_ORDER[index];
        alias && (mapped = theme.colorMap[alias]);
      }
    }
    if (mapped) hex = mapped;
    else {
      const last = normalizeRgbHex(colorLastColorOf(color));
      last && ((hex = last), (applyTransform = false));
    }
  } else if (isSystemColor(color)) {
    const last = normalizeRgbHex(colorLastColorOf(color));
    last
      ? ((hex = last), (applyTransform = false))
      : (hex =
          (cssNamedColors as Record<string, string>)[
            colorValueOf(typed) ?? ""
          ] ?? "#000000");
  } else hex = "#000000";
  let { r, g, b } = hexToRgb(hex);
  const transform = colorTransformOf(
    color as { transform?: Record<string, number> | null },
  );
  return (
    transform &&
      (transform.alpha !== undefined &&
        (alpha = clampRange(transform.alpha / 1e5, 0, 1)),
      applyTransform &&
        ({ r, g, b } = applyColorTransform(
          { r, g, b },
          transform,
          options?.colorSpace ?? "drawingml-crgb",
        ))),
    {
      r,
      g,
      b,
      a: alpha,
    }
  );
}

/** Legacy `Tae` — resolve color proto/VO to `rgba(r,g,b,a)` string. */
export function resolveColorProtoToRgbaString(
  color: unknown,
  theme: unknown,
  options?: ResolveColorOptions,
): string {
  const { r, g, b, a } = resolveColorToRgba(
    color,
    theme as ThemeColorMap,
    options,
  );
  return `rgba(${r},${g},${b},${a})`;
}

/**
 * Like resolveColorToRgba, but skips unspecified
 * colors and maps system `auto` to undefined.
 */
export function resolveColorToRgbaOrUndefined(
  color: unknown,
  theme: ThemeColorMap,
  options?: ResolveColorOptions,
): RgbaColor | undefined {
  if (
    color &&
    !(
      (isWorkbookColorInstance(color) && color.type === "unspecified") ||
      (!isWorkbookColorInstance(color) &&
        (color as { type?: number }).type ===
          colorTypeEnum.COLOR_TYPE_UNSPECIFIED)
    )
  ) {
    if (isSystemColor(color)) {
      const last = colorLastColorOf(color);
      if (last)
        return resolveColorToRgba(
          {
            transform: (color as { transform?: Record<string, number> })
              .transform,
            type: colorTypeEnum.COLOR_TYPE_RGB,
            value: last,
          },
          theme,
          options,
        );
      if (colorValueOf(color as { value?: string }) === "auto") return;
    }
    return resolveColorToRgba(color, theme, options);
  }
}

/**
 * Legacy `workbookSt` — resolve to CSS rgba string, or `defaultFill` / transparent.
 */
export function resolveColorToCssRgba(
  color: unknown,
  theme: ThemeColorMap,
  optionsOrDefaultFill?: string | ResolveColorOptions,
): string {
  const options =
    typeof optionsOrDefaultFill == "string"
      ? { defaultFill: optionsOrDefaultFill }
      : optionsOrDefaultFill;
  const defaultFill = options?.defaultFill;
  const rgba = resolveColorToRgbaOrUndefined(color, theme, options);
  return rgba
    ? `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`
    : (defaultFill ?? "transparent");
}
