// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-9: TextStyle CSS declaration list parsers (legacy workbookHelper 80/81 + oae/aae).

import {
  splitRespectingQuotes,
  splitCssValueList,
  unquoteCssString,
  parseLoosePercentNumber,
} from "../fill/css-value-tokenize";
import { parseOutlineCss } from "./outline-css";
import {
  parseTextAnchorCss,
  parseFontSizeCssToken,
  parseSizedFontToken,
  isFontWeightToken,
  parseFontWeightBold,
  parseBooleanLikeCss,
  parseTextWrapCss,
  parseUnderlineCss,
  parseInsetsCss,
  parseAutofitCss,
} from "./css-value-parsers";

export type TextStyleCssBag = {
  fontSize?: number;
  typeface?: string;
  bold?: boolean;
  italic?: boolean;
  color?: string;
  fill?: string;
  highlight?: string;
  outline?: ReturnType<typeof parseOutlineCss>;
  shadow?: string;
  lineSpacing?: number;
  alignment?: string;
  anchor?: number;
  wrap?: string;
  underline?: string;
  insets?: { top: number; right: number; bottom: number; left: number };
  autoFit?: string;
};

/** Legacy workbookHelper 80 — true when string looks like `key: value` CSS decls. */
export function isCssDeclarationText(value: string): boolean {
  const trimmed = value.trim();
  return trimmed.includes(":") || trimmed.includes(";");
}

/** Legacy `oae` — apply CSS `font:` shorthand onto a bag. */
export function applyFontShorthand(
  target: TextStyleCssBag,
  raw: string,
): void {
  const tokens = splitCssValueList(raw);
  if (tokens.length === 0) return;
  let sizeIndex = -1;
  tokens.forEach((item, index) => {
    if (sizeIndex >= 0) return;
    const [maybeSize, slashRest] = item.split("/", 2);
    if (slashRest !== undefined)
      throw Error(
        'Text style font shorthand does not support slash line spacing. Use "leading: <number>" instead.',
      );
    const size = parseSizedFontToken(maybeSize ?? "");
    size !== null && ((sizeIndex = index), (target.fontSize = size));
  });
  if (sizeIndex >= 0) {
    const before = tokens.slice(0, sizeIndex);
    const after = tokens.slice(sizeIndex + 1);
    before.forEach((item) => {
      const lower = item.toLowerCase();
      if (lower === "italic") {
        target.italic = true;
        return;
      }
      isFontWeightToken(lower) && (target.bold = parseFontWeightBold(lower));
    });
    after.length > 0 && (target.typeface = unquoteCssString(after.join(" ")));
    return;
  }
  target.typeface = unquoteCssString(tokens.join(" "));
}

/** Legacy workbookHelper 81 — parse `key: value; …` TextStyle CSS. */
export function parseTextStyleCssDeclarations(raw: string): TextStyleCssBag {
  const trimmed = raw.trim();
  if (!trimmed) return {};
  const decls = splitRespectingQuotes(trimmed, ";");
  const out: TextStyleCssBag = {};
  decls.forEach((item) => {
    const colon = item.indexOf(":");
    if (colon <= 0)
      throw Error(
        `Text style declaration "${item}" must use "key: value" syntax.`,
      );
    const key = item.slice(0, colon).trim().toLowerCase();
    const value = item.slice(colon + 1).trim();
    if (!value) return;
    switch (key) {
      case "font":
        applyFontShorthand(out, value);
        return;
      case "size":
      case "font-size": {
        const size = parseFontSizeCssToken(value);
        size !== null && (out.fontSize = size);
        return;
      }
      case "family":
      case "font-family":
      case "typeface":
        out.typeface = unquoteCssString(value);
        return;
      case "weight":
      case "font-weight":
        out.bold = parseFontWeightBold(value);
        return;
      case "italic":
      case "font-style":
        out.italic = parseBooleanLikeCss(value, "italic");
        return;
      case "color":
        out.color = value;
        return;
      case "fill":
        out.fill = value;
        return;
      case "highlight":
        out.highlight = value;
        return;
      case "outline":
      case "stroke": {
        const outline = parseOutlineCss(value);
        outline && (out.outline = outline);
        return;
      }
      case "shadow":
      case "text-shadow":
        out.shadow = value;
        return;
      case "leading": {
        const leading = parseLoosePercentNumber(value);
        leading !== null && (out.lineSpacing = leading);
        return;
      }
      case "align":
      case "alignment":
        out.alignment = value;
        return;
      case "anchor":
      case "valign":
      case "vertical-align":
      case "vertical-alignment":
        out.anchor = parseTextAnchorCss(value);
        return;
      case "wrap":
        out.wrap = parseTextWrapCss(value);
        return;
      case "underline":
        out.underline = parseUnderlineCss(value);
        return;
      case "inset":
      case "insets":
      case "padding":
        out.insets = parseInsetsCss(value);
        return;
      case "autofit":
      case "auto-fit":
        out.autoFit = parseAutofitCss(value);
        return;
      default:
        throw Error(`Unsupported text style declaration key "${key}".`);
    }
  });
  return out;
}

/** Legacy `aae` — CSS declaration string → parsed bag, else passthrough. */
export function coerceTextStyleCssOrValue(value: unknown): unknown {
  return typeof value == "string" && isCssDeclarationText(value)
    ? parseTextStyleCssDeclarations(value)
    : value;
}
