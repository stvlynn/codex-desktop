// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: shape className → fill / borderRadius / shadow (legacy workbookHelper 304).

import { resolveNamedCssColor } from "../theme-color";
import { Fill } from "../fill";
import { matchShadowPresetName } from "../text-style";
import type { ShadowPresetName } from "../text-style";
import { resolveBorderRadiusToken } from "./border-radius-tokens";

export type ShapeUtilityStyle = {
  fill?: unknown;
  borderRadius?: number;
  shadow?: ShadowPresetName;
};

/**
 * Legacy workbookHelper 304 — parse space-separated utilities into a
 * shape style bag (`bg-*` → solid fill, `rounded-*` → px, shadow preset).
 */
export function parseShapeUtilityClasses(
  className: string,
): ShapeUtilityStyle | null {
  const tokens = className
    .split(/\s+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
  if (tokens.length === 0) return null;
  const style: ShapeUtilityStyle = {};
  let matched = false;
  for (const token of tokens) {
    if (token.startsWith("bg-")) {
      const named = resolveNamedCssColor(token.slice(3));
      if (named) {
        style.fill = new Fill({
          type: "solid",
          color: {
            type: "rgb",
            value: named.hex,
            transform:
              named.alpha === undefined
                ? undefined
                : {
                    opacity: named.alpha,
                  },
          },
        }).toConfig();
        matched = true;
      }
      continue;
    }
    const radius = resolveBorderRadiusToken(token);
    if (radius !== null) {
      style.borderRadius = radius;
      matched = true;
      continue;
    }
    const shadow = matchShadowPresetName(token);
    if (shadow) {
      style.shadow = shadow;
      matched = true;
    }
  }
  return matched ? style : null;
}
