// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-30: partial style bags ↔ color/fill/line/TextStyle converters.

import { WorkbookColor } from "../theme-color";
import { Fill } from "../fill";
import { Line } from "../line";
import { anchorTypeProtoToName } from "../chart-proto-name-maps";
import {
  TextStyle,
  applyTextStylePatch,
  parseFontSizePx,
  alignmentProtoToName,
  normalizeAlignment,
} from "../text-style";
import { applyListParagraphDefaults } from "../text-run";
import { parseUtilityClassStyles } from "./parse-utility-class-styles";
import { trimNonEmptyString } from "./trim-non-empty-string";

type StylePartial = Record<string, unknown>;

/** Color proto/value → config. */
export function colorConfigFromValue(value: unknown): unknown {
  if (value === undefined) return;
  if (
    typeof value === "string" ||
    (typeof value === "object" &&
      value !== null &&
      "type" in value &&
      (value as { type: unknown }).type !== "proto")
  )
    return value;
  const cfg = new WorkbookColor(value as never).toConfig();
  if (!cfg) return;
  if (
    typeof cfg === "object" &&
    cfg !== null &&
    "type" in cfg &&
    (cfg as { type: unknown }).type === "proto"
  )
    return undefined;
  return cfg;
}

/** Fill proto/value → config. */
export function fillConfigFromValue(value: unknown): unknown {
  if (value === undefined) return;
  if (
    typeof value === "string" ||
    (typeof value === "object" &&
      value !== null &&
      "type" in value &&
      (value as { type: unknown }).type !== "proto")
  )
    return value;
  const cfg = new Fill(value as never).toConfig({ preserveProto: false });
  if (!cfg) return;
  if (
    typeof cfg === "object" &&
    cfg !== null &&
    "type" in cfg &&
    (cfg as { type: unknown }).type === "proto"
  )
    return undefined;
  return cfg;
}

/** Outline/line proto → style/width/fill config. */
export function outlineConfigFromValue(value: unknown): unknown {
  if (value === undefined) return;
  const cfg = new Line(value as never).toConfig({ preserveProto: false });
  if (!cfg || (typeof cfg === "object" && cfg !== null && "type" in cfg))
    return;
  const line = cfg as { style?: unknown; width?: unknown; fill?: unknown };
  return {
    style: line.style,
    width: line.width,
    fill: fillConfigFromValue(line.fill),
  };
}

/** Non-empty style id string. */
export function normalizeStyleId(partial: StylePartial): string | undefined {
  const style = partial.style;
  if (typeof style !== "string") return;
  const trimmed = style.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

/** className field via trimNonEmptyString. */
export function classNameFromPartial(
  partial: StylePartial,
): string | undefined {
  const className = partial.className;
  if (typeof className === "string") return trimNonEmptyString(className);
}

/** Alignment value → proto name. */
export function alignmentNameFromValue(value: unknown): string | undefined {
  return alignmentProtoToName(normalizeAlignment(value) as never);
}

/** Color field, or color derived from fill via TextStyle. */
export function colorFromPartialOrFill(partial: StylePartial): unknown {
  if ("color" in partial) return partial.color;
  if (!("fill" in partial)) return;
  const style = new TextStyle();
  applyTextStylePatch(style as never, { fill: partial.fill } as never);
  const color = style.color as { toConfig?: () => unknown } | undefined;
  return color?.toConfig?.();
}

/** Text-box / shape style bag from a partial. */
export function textBoxStyleConfigFromPartial(
  partial: StylePartial,
): StylePartial {
  const out: StylePartial = {};
  const className = classNameFromPartial(partial);
  if (className !== undefined) out.className = className;
  if ("bold" in partial) out.bold = partial.bold;
  if ("italic" in partial) out.italic = partial.italic;
  if ("underline" in partial) out.underline = partial.underline;
  if ("fontSize" in partial) out.fontSize = parseFontSizePx(partial.fontSize);
  if ("typeface" in partial) out.typeface = partial.typeface;
  if ("lineSpacing" in partial) out.lineSpacing = partial.lineSpacing;
  if ("alignment" in partial)
    out.alignment = alignmentNameFromValue(partial.alignment);
  if ("verticalAlignment" in partial)
    out.verticalAlignment = partial.verticalAlignment;
  else if ("anchor" in partial)
    out.verticalAlignment = partial.anchor
      ? (anchorTypeProtoToName as Record<string | number, string | undefined>)[
          partial.anchor as string | number
        ]
      : undefined;
  if ("autoFit" in partial) out.autoFit = partial.autoFit;
  if ("wrap" in partial) out.wrap = partial.wrap;
  if ("insets" in partial) out.insets = partial.insets;
  const styleId = normalizeStyleId(partial);
  if (styleId !== undefined) out.style = styleId;
  const derivedColor = colorFromPartialOrFill(partial);
  if ("fill" in partial) out.fill = fillConfigFromValue(partial.fill);
  if ("color" in partial || derivedColor !== undefined)
    out.color = colorConfigFromValue(derivedColor);
  if ("highlight" in partial)
    out.highlight = colorConfigFromValue(partial.highlight);
  if ("outline" in partial)
    out.outline = outlineConfigFromValue(partial.outline);
  if ("shadow" in partial) out.shadow = partial.shadow;
  return out;
}

/** Legacy iue — text-run style bag (no verticalAlignment / autofit / wrap / insets). */
export function textRunStyleConfigFromPartial(
  partial: StylePartial,
): StylePartial {
  const out: StylePartial = {};
  const className = classNameFromPartial(partial);
  if (className !== undefined) out.className = className;
  if ("bold" in partial) out.bold = partial.bold;
  if ("italic" in partial) out.italic = partial.italic;
  if ("underline" in partial) out.underline = partial.underline;
  if ("fontSize" in partial) out.fontSize = parseFontSizePx(partial.fontSize);
  if ("typeface" in partial) out.typeface = partial.typeface;
  if ("lineSpacing" in partial) out.lineSpacing = partial.lineSpacing;
  if ("alignment" in partial)
    out.alignment = alignmentNameFromValue(partial.alignment);
  const styleId = normalizeStyleId(partial);
  if (styleId !== undefined) out.style = styleId;
  const derivedColor = colorFromPartialOrFill(partial);
  if ("fill" in partial) out.fill = fillConfigFromValue(partial.fill);
  if ("color" in partial || derivedColor !== undefined)
    out.color = colorConfigFromValue(derivedColor);
  if ("highlight" in partial)
    out.highlight = colorConfigFromValue(partial.highlight);
  if ("outline" in partial)
    out.outline = outlineConfigFromValue(partial.outline);
  if ("shadow" in partial) out.shadow = partial.shadow;
  return out;
}

type ParagraphLike = {
  styleId?: string;
  textStyle?: TextStyle | undefined;
  lineSpacingPercent?: number;
  runs: { items: Array<{ textStyle?: unknown }> };
};

/** Legacy aue — apply style config onto a Paragraph VO. */
export function applyStyleConfigToParagraph(
  paragraph: ParagraphLike,
  partial: StylePartial,
): void {
  const styleId = normalizeStyleId(partial);
  if (styleId !== undefined) {
    paragraph.styleId = styleId;
    applyListParagraphDefaults(paragraph, styleId);
    for (const run of paragraph.runs.items) run.textStyle = undefined;
  }
  const next = paragraph.textStyle
    ? new TextStyle(paragraph.textStyle.toProto())
    : new TextStyle();
  applyTextStylePatch(next as never, partial as never);
  paragraph.textStyle = next;
  if ("lineSpacing" in partial) {
    paragraph.lineSpacingPercent =
      partial.lineSpacing === undefined
        ? undefined
        : Math.round(Number(partial.lineSpacing) * 1e5);
  }
}

/** className + merged styleConfig from utilities + explicit fields. */
export function classNameAndStyleConfigFromPartial(partial: StylePartial): {
  className: string | undefined;
  styleConfig: StylePartial;
} {
  const className = classNameFromPartial(partial);
  const fromUtilities = className ? parseUtilityClassStyles(className) : null;
  const styleConfig: StylePartial = {};
  if (fromUtilities) Object.assign(styleConfig, fromUtilities);
  for (const [key, value] of Object.entries(partial)) {
    if (key !== "className") styleConfig[key] = value;
  }
  return { className, styleConfig };
}
