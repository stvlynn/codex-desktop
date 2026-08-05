// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-30: className utility string → partial text style (utility-class parser).

import { resolveNamedCssColor } from "../theme-color";
import { matchShadowPresetName } from "../text-style";
import { resolveFontWeightUtilityBold } from "./font-weight-tokens";
import { resolveLineHeightUtility } from "./line-height-tokens";
import { resolveFontSizeUtility } from "./font-size-tokens";

export type UtilityClassStyle = {
  bold?: boolean;
  italic?: boolean;
  shadow?: string;
  fontSize?: number;
  lineSpacing?: number;
  color?: {
    type: "rgb";
    value: string;
    transform?: { opacity: number };
  };
};

/** Parse space-separated utility classes into a style bag. */
export function parseUtilityClassStyles(
  className: string,
): UtilityClassStyle | null {
  const tokens = className
    .split(/\s+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
  if (tokens.length === 0) return null;
  const style: UtilityClassStyle = {};
  let matched = false;
  for (const token of tokens) {
    const bold = resolveFontWeightUtilityBold(token);
    if (bold !== null) {
      style.bold = bold;
      matched = true;
      continue;
    }
    if (token === "italic") {
      style.italic = true;
      matched = true;
      continue;
    }
    const shadow = matchShadowPresetName(token);
    if (shadow) {
      style.shadow = shadow;
      matched = true;
      continue;
    }
    const fontSize = resolveFontSizeUtility(token);
    if (fontSize !== null) {
      style.fontSize = fontSize;
      matched = true;
      continue;
    }
    const lineSpacing = resolveLineHeightUtility(token, {
      fontSizePx:
        typeof style.fontSize === "number" ? style.fontSize : undefined,
    });
    if (lineSpacing !== null) {
      style.lineSpacing = lineSpacing;
      matched = true;
      continue;
    }
    if (token.startsWith("text-")) {
      const named = resolveNamedCssColor(token.slice(5));
      if (named) {
        style.color = {
          type: "rgb",
          value: named.hex,
          transform:
            named.alpha === undefined ? undefined : { opacity: named.alpha },
        };
        matched = true;
      }
    }
  }
  return matched ? style : null;
}
