// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-9: TextStyle CSS value parsers (legacy iae/sae/cae/lae/uae/dae/fae/pae/mae/hae).

import { Yn as anchorTypeEnum } from "../presentation-protobuf";
import {
  splitCssValueList,
  parseCssLengthPx,
} from "../fill/css-value-tokenize";

/** Legacy `iae` — CSS vertical-align → AnchorType proto. */
export function parseTextAnchorCss(raw: string): number {
  const value = raw.trim().toLowerCase();
  if (value === "top") return anchorTypeEnum.ANCHOR_TYPE_TOP;
  if (value === "middle" || value === "center")
    return anchorTypeEnum.ANCHOR_TYPE_MIDDLE;
  if (value === "bottom") return anchorTypeEnum.ANCHOR_TYPE_BOTTOM;
  throw Error(`Unsupported text anchor "${raw}".`);
}

/** Legacy `sae` — font-size CSS (pt/px) → CSS px. */
export function parseFontSizeCssToken(raw: string): number | null {
  const value = raw.trim().toLowerCase();
  if (!value) return null;
  if (value.endsWith("pt")) {
    const n = Number(value.slice(0, -2));
    return Number.isFinite(n) ? (n * 96) / 72 : null;
  }
  return parseCssLengthPx(value);
}

/** Legacy `cae` — sized font token only when unit is px/pt. */
export function parseSizedFontToken(raw: string): number | null {
  const value = raw.trim().toLowerCase();
  return !value || (!value.endsWith("px") && !value.endsWith("pt"))
    ? null
    : parseFontSizeCssToken(value);
}

/** Legacy `lae` — CSS font-weight keyword / numeric token. */
export function isFontWeightToken(value: string): boolean {
  return (
    value === "normal" ||
    value === "regular" ||
    value === "medium" ||
    value === "semibold" ||
    value === "bold" ||
    /^\d+$/.test(value)
  );
}

/** Legacy `uae` — font-weight → bold boolean. */
export function parseFontWeightBold(raw: string): boolean {
  const value = raw.trim().toLowerCase();
  if (value === "bold" || value === "semibold") return true;
  if (value === "medium" || value === "normal" || value === "regular")
    return false;
  const n = Number(value);
  if (!Number.isFinite(n)) throw Error(`Unsupported font weight "${raw}".`);
  return n >= 600;
}

/** Legacy `dae` — boolean-like CSS keyword. */
export function parseBooleanLikeCss(raw: string, truthy: string): boolean {
  const value = raw.trim().toLowerCase();
  if (value === truthy || value === "true" || value === "yes") return true;
  if (value === "normal" || value === "false" || value === "no") return false;
  throw Error(`Unsupported boolean-like value "${raw}".`);
}

/** Legacy `fae` — wrap CSS → square/none. */
export function parseTextWrapCss(raw: string): "square" | "none" {
  const value = raw.trim().toLowerCase();
  if (value === "square" || value === "wrap" || value === "wrapped")
    return "square";
  if (value === "none" || value === "nowrap" || value === "no-wrap")
    return "none";
  throw Error(`Unsupported text wrap value "${raw}".`);
}

/** Legacy `pae` — underline CSS → sng/none/passthrough. */
export function parseUnderlineCss(raw: string): string {
  const value = raw.trim().toLowerCase();
  return value === "true" || value === "yes" || value === "underline"
    ? "sng"
    : value === "false" || value === "none"
      ? "none"
      : raw.trim();
}

/** Legacy `mae` — padding/inset CSS (1–4 lengths). */
export function parseInsetsCss(raw: string): {
  top: number;
  right: number;
  bottom: number;
  left: number;
} {
  const lengths = splitCssValueList(raw).map((item) => parseCssLengthPx(item));
  if (lengths.some((item) => item === null))
    throw Error(`Unsupported inset value "${raw}".`);
  const values = lengths as number[];
  if (values.length === 1)
    return {
      top: values[0]!,
      right: values[0]!,
      bottom: values[0]!,
      left: values[0]!,
    };
  if (values.length === 2)
    return {
      top: values[0]!,
      right: values[1]!,
      bottom: values[0]!,
      left: values[1]!,
    };
  if (values.length === 3)
    return {
      top: values[0]!,
      right: values[1]!,
      bottom: values[2]!,
      left: values[1]!,
    };
  if (values.length === 4)
    return {
      top: values[0]!,
      right: values[1]!,
      bottom: values[2]!,
      left: values[3]!,
    };
  throw Error(`Inset value "${raw}" must contain 1-4 lengths.`);
}

/** Legacy `hae` — autofit CSS keyword. */
export function parseAutofitCss(
  raw: string,
): "none" | "shrinkText" | "resizeShapeToFitText" {
  const value = raw.trim().toLowerCase();
  if (value === "none") return "none";
  if (
    value === "shrink" ||
    value === "shrinktext" ||
    value === "shrink-text"
  )
    return "shrinkText";
  if (
    value === "resize" ||
    value === "resizeshapetofittext" ||
    value === "resize-shape"
  )
    return "resizeShapeToFitText";
  throw Error(`Unsupported autoFit value "${raw}".`);
}
