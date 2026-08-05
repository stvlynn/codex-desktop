// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-9: apply / coerce TextStyle bags (legacy workbookYt + fontSize/input parsers).

import { verticalAlignmentNameToAnchor } from "./alignment";
import { isPlainObject } from "./is-plain-object";
import {
  isCssDeclarationText,
  parseTextStyleCssDeclarations,
} from "./css-declaration-parse";

/** Legacy workbookHelper 103 — number or `Npx`/`Npt` → CSS px. */
export function parseFontSizePx(
  value: number | string | undefined,
): number | undefined {
  if (value === undefined) return;
  if (typeof value == "number") return value;
  const trimmed = value.trim().toLowerCase();
  const match = /^(-?\d+(?:\.\d+)?)\s*(px|pt)$/.exec(trimmed);
  if (!match)
    throw Error(
      `fontSize string must use px or pt units, received "${value}".`,
    );
  const n = Number(match[1]);
  if (!Number.isFinite(n) || n < 0)
    throw Error("fontSize must be a non-negative finite value.");
  return match[2] === "pt" ? (n * 96) / 72 : n;
}

export type TextStylePatch = {
  anchor?: unknown;
  verticalAlignment?: unknown;
  vertical?: unknown;
  rotation?: unknown;
  bold?: unknown;
  italic?: unknown;
  fontSize?: number | string;
  fontSizePt?: number;
  lineSpacing?: unknown;
  alignment?: unknown;
  underline?: unknown;
  fill?: unknown;
  color?: unknown;
  highlight?: unknown;
  outline?: unknown;
  shadow?: unknown;
  capitalization?: unknown;
  textTransform?: unknown;
  useParagraphSpacing?: unknown;
  wrap?: unknown;
  autoFit?: unknown;
  autoFitScale?: unknown;
  autoFitLineSpaceReduction?: unknown;
  name?: unknown;
  family?: unknown;
  scheme?: unknown;
  typeface?: unknown;
  insets?: unknown;
};

/**
 * Legacy `workbookYt` — mutate a TextStyle-like bag from a partial patch.
 * Used by presentation/shape style merges across the workbook boundary.
 */
export function applyTextStylePatch(
  target: Record<string, unknown>,
  patch: TextStylePatch | null | undefined,
): void {
  patch &&
    ("anchor" in patch && (target.anchor = patch.anchor),
    "verticalAlignment" in patch &&
      (target.anchor =
        patch.verticalAlignment === undefined
          ? undefined
          : verticalAlignmentNameToAnchor(String(patch.verticalAlignment))),
    "vertical" in patch && (target.vertical = patch.vertical),
    "rotation" in patch && (target.rotation = patch.rotation),
    "bold" in patch && (target.bold = patch.bold),
    "italic" in patch && (target.italic = patch.italic),
    "fontSize" in patch
      ? (target.fontSize = parseFontSizePx(patch.fontSize))
      : "fontSizePt" in patch &&
        (target.fontSize =
          patch.fontSizePt === undefined
            ? undefined
            : (patch.fontSizePt * 96) / 72),
    "lineSpacing" in patch && (target.lineSpacing = patch.lineSpacing),
    "alignment" in patch && (target.alignment = patch.alignment),
    "underline" in patch && (target.underline = patch.underline),
    "fill" in patch && patch.fill !== undefined && (target.fill = patch.fill),
    "color" in patch && (target.color = patch.color),
    "highlight" in patch && (target.highlight = patch.highlight),
    "outline" in patch && (target.outline = patch.outline),
    "shadow" in patch && (target.shadow = patch.shadow),
    "capitalization" in patch && (target.capitalization = patch.capitalization),
    "textTransform" in patch && (target.textTransform = patch.textTransform),
    "useParagraphSpacing" in patch &&
      (target.useParagraphSpacing = patch.useParagraphSpacing),
    "wrap" in patch && (target.wrap = patch.wrap),
    "autoFit" in patch && (target.autoFit = patch.autoFit),
    "autoFitScale" in patch && (target.autoFitScale = patch.autoFitScale),
    "autoFitLineSpaceReduction" in patch &&
      (target.autoFitLineSpaceReduction = patch.autoFitLineSpaceReduction),
    "name" in patch && (target.name = patch.name),
    "family" in patch && (target.family = patch.family),
    "scheme" in patch && (target.scheme = patch.scheme),
    "typeface" in patch && (target.typeface = patch.typeface),
    "insets" in patch && (target.insets = patch.insets));
}

/**
 * Legacy workbookHelper 104 — CSS decls → bag, plain object passthrough, else null.
 */
export function parseTextStyleInput(value: unknown): unknown {
  return typeof value == "string"
    ? isCssDeclarationText(value)
      ? parseTextStyleCssDeclarations(value)
      : null
    : isPlainObject(value)
      ? value
      : null;
}
