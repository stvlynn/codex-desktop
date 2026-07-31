// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-31: TextSelection mutation helpers (#y/#L/#I/#P/#F/#N/#M).

import { TextStyle } from "../text-style";
import { Paragraphs } from "../text-run";
import type {
  TextSelectionOptions,
  TextSelectionParagraphs,
  TextSelectionSpan,
} from "./types";

export type TextSelectionMutationHost = {
  paragraphs: TextSelectionParagraphs;
  ranges: TextSelectionSpan[];
  options: TextSelectionOptions;
  runsSplit: boolean;
  readonly isEmpty: boolean;
  setRanges(next: TextSelectionSpan[]): void;
  setRunsSplit(next: boolean): void;
  notifyLayoutInvalidated(): void;
  cloneOptions(): TextSelectionOptions;
  empty(): any;
  create(
    paragraphs: TextSelectionParagraphs,
    ranges: TextSelectionSpan[],
    options: TextSelectionOptions,
  ): any;
};

/** Legacy #y — group spans by paragraph index. */
export function groupSpansByParagraph(
  ranges: TextSelectionSpan[],
): Map<number, TextSelectionSpan[]> {
  const byParagraph = new Map<number, TextSelectionSpan[]>();
  for (const span of ranges) {
    if (!byParagraph.has(span.paragraphIndex)) {
      byParagraph.set(span.paragraphIndex, []);
    }
    byParagraph.get(span.paragraphIndex)!.push(span);
  }
  return byParagraph;
}

/** Legacy #L — input carries Paragraphs VO. */
export function isParagraphsPayload(value: unknown): boolean {
  if (typeof value != "object" || !value) return false;
  const record = value as { paragraphs?: unknown };
  return record.paragraphs ? record.paragraphs instanceof Paragraphs : false;
}

/** Legacy #I — sum run text lengths. */
export function runsTextLength(runs: Array<{ text: string }>): number {
  return runs.reduce(
    (accumulator, current) => accumulator + current.text.length,
    0,
  );
}

/** Legacy #P — first paragraph from Paragraphs payload. */
export function firstParagraphFromPayload(value: unknown): any | undefined {
  if (!isParagraphsPayload(value)) return;
  const items = (value as { paragraphs: { items: any[] } }).paragraphs.items;
  if (items.length !== 0) return items[0];
}

/** Legacy #F — copy paragraph style fields onto target. */
export function copyParagraphStyleFields(target: any, source: any): void {
  target.styleId = source.styleId;
  const textStyle = source.textStyle;
  target.textStyle = textStyle
    ? new TextStyle(textStyle.toProto())
    : undefined;
  target.bulletCharacter = source.bulletCharacter;
  target.marginLeft = source.marginLeft;
  target.indent = source.indent;
  target.spaceAfter = source.spaceAfter;
  target.spaceBefore = source.spaceBefore;
  target.paragraphStyle = source.paragraphStyle
    ? { ...source.paragraphStyle }
    : undefined;
}

/** Legacy #N — build replacement runs from string or Paragraphs payload. */
export function buildReplacementRuns(
  input: unknown,
  runsCollection: any,
  templateRun: any,
): any[] {
  if (isParagraphsPayload(input)) {
    const paragraphItems = (input as { paragraphs: { items: any[] } })
      .paragraphs.items;
    if (paragraphItems.length === 0) return [];
    const first = paragraphItems[0];
    if (!first) return [];
    const runItems = first.runs.items;
    return runItems.length === 0
      ? []
      : runItems.map((item: any) =>
          runsCollection.cloneWithText(item, item.text),
        );
  }
  const raw = input ?? "";
  const text = typeof raw == "string" ? raw : String(raw);
  return text.length === 0
    ? []
    : [runsCollection.cloneWithText(templateRun, text)];
}

/** Legacy #M — sole-paragraph selection bounds. */
export function resolveSoleParagraphSpan(host: TextSelectionMutationHost):
  | {
      paragraph: any;
      paragraphIndex: number;
      startOffset: number;
      endOffset: number;
    }
  | undefined {
  if (host.isEmpty) return;
  const indexes = new Set(host.ranges.map((item) => item.paragraphIndex));
  if (indexes.size !== 1) return;
  const [paragraphIndex] = indexes;
  if (paragraphIndex === undefined) return;
  const paragraph = host.paragraphs.getItem(paragraphIndex);
  if (!paragraph) return;
  const spans = host.ranges.filter(
    (item) => item.paragraphIndex === paragraphIndex,
  );
  if (spans.length === 0) return;
  return {
    paragraph,
    paragraphIndex,
    startOffset: Math.min(...spans.map((item) => item.startOffset)),
    endOffset: Math.max(...spans.map((item) => item.endOffset)),
  };
}
