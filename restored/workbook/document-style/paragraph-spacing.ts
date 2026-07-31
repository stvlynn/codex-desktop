// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-16: paragraph spaceBefore/After → CSS px (legacy Zse / workbookDollar cluster).

import {
  hundredthsPointToCssPxOrZero,
  twipToCssPx,
} from "../font-stack";
import { resolveParagraphSpacingOverrides } from "./theme-style-maps";

/** Space to CSS px: space value → CSS px (twips or hundredths-of-a-point). */
export function spaceValueToCssPx(
  value: number | undefined,
  unit: "twips" | string | undefined,
): number {
  if (value === undefined) return 0;
  return unit === "twips" ? twipToCssPx(value) : hundredthsPointToCssPxOrZero(value);
}

/** Legacy `Zse` — spacing with element defaults fallback. */
export function resolveParagraphSpacingWithDefaults(args: {
  element: { levelsStyles?: unknown[] } | null | undefined;
  paragraph:
    | {
        paragraphStyle?: { marginLeft?: unknown };
        spaceBefore?: unknown;
        spaceAfter?: unknown;
      }
    | null
    | undefined;
  defaults?: { spaceBefore?: unknown; spaceAfter?: unknown } | null;
}): { spaceBefore?: unknown; spaceAfter?: unknown } {
  const spacing = resolveParagraphSpacingOverrides(args.element as never, args.paragraph);
  return {
    spaceBefore:
      spacing.spaceBefore === undefined
        ? args.defaults?.spaceBefore
        : spacing.spaceBefore,
    spaceAfter:
      spacing.spaceAfter === undefined
        ? args.defaults?.spaceAfter
        : spacing.spaceAfter,
  };
}

/** Paragraph spacing as CSS px: spacing as CSS px. */
export function paragraphSpacingToCssPx(args: {
  element: { levelsStyles?: unknown[] } | null | undefined;
  paragraph:
    | {
        paragraphStyle?: { marginLeft?: unknown };
        spaceBefore?: unknown;
        spaceAfter?: unknown;
      }
    | null
    | undefined;
  unit: "twips" | string | undefined;
  defaults?: { spaceBefore?: unknown; spaceAfter?: unknown } | null;
}): { spaceBeforePx: number; spaceAfterPx: number } {
  const spacing = resolveParagraphSpacingWithDefaults(args);
  return {
    spaceBeforePx: spaceValueToCssPx(spacing.spaceBefore as number | undefined, args.unit),
    spaceAfterPx: spaceValueToCssPx(spacing.spaceAfter as number | undefined, args.unit),
  };
}

/** Legacy `workbookDollar` — first/last paragraph spacing for an element. */
export function elementParagraphSpacingPx(args: {
  element: {
    paragraphs?: Array<{
      paragraphStyle?: { marginLeft?: unknown };
      spaceBefore?: unknown;
      spaceAfter?: unknown;
    }>;
    levelsStyles?: unknown[];
  };
  unit: "twips" | string | undefined;
  defaults?: { spaceBefore?: unknown; spaceAfter?: unknown } | null;
}): { firstParagraphSpaceBeforePx: number; lastParagraphSpaceAfterPx: number } {
  const paragraphs = args.element.paragraphs ?? [];
  if (paragraphs.length === 0) {
    return { firstParagraphSpaceBeforePx: 0, lastParagraphSpaceAfterPx: 0 };
  }
  const first = paragraphSpacingToCssPx({
    element: args.element,
    paragraph: paragraphs[0],
    unit: args.unit,
    defaults: args.defaults,
  });
  const last = paragraphSpacingToCssPx({
    element: args.element,
    paragraph: paragraphs[paragraphs.length - 1],
    unit: args.unit,
    defaults: args.defaults,
  });
  return {
    firstParagraphSpaceBeforePx: first.spaceBeforePx,
    lastParagraphSpaceAfterPx: last.spaceAfterPx,
  };
}
