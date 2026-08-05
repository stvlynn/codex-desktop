// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-31: TextSelection split/replace/insertAfter (legacy #w/replace/insertAfter).

import type { TextSelectionSpan } from "./types";
import {
  type TextSelectionMutationHost,
  groupSpansByParagraph,
  resolveSoleParagraphSpan,
  buildReplacementRuns,
  firstParagraphFromPayload,
  copyParagraphStyleFields,
  runsTextLength,
} from "./text-selection-ops-helpers";

/** Legacy #w — split runs at selection boundaries once. */
export function splitRunsAtSelectionBoundaries(
  host: TextSelectionMutationHost,
): void {
  if (host.runsSplit || host.isEmpty) return;
  const byParagraph = groupSpansByParagraph(host.ranges);
  for (const [paragraphIndex, spans] of byParagraph.entries()) {
    const paragraph = host.paragraphs.getItem(paragraphIndex);
    if (!paragraph) continue;
    const runsCollection = paragraph.runs;
    const runItems = runsCollection.items;
    if (runItems.length === 0) continue;
    const offsets = new Set<number>();
    for (const span of spans) {
      offsets.add(span.startOffset);
      offsets.add(span.endOffset);
    }
    const sortedOffsets = [...offsets].sort((a, b) => a - b);
    const nextRuns: any[] = [];
    let cursor = 0;
    for (const run of runItems) {
      const text = run.text;
      const textLength = text.length;
      const runStart = cursor;
      const runEnd = runStart + textLength;
      const interior = sortedOffsets.filter(
        (item) => item > runStart && item < runEnd,
      );
      if (interior.length === 0) {
        nextRuns.push(run);
        cursor = runEnd;
        continue;
      }
      let sliceStart = 0;
      let reusedOriginal = false;
      const cutPoints = [...interior, runEnd];
      for (const cut of cutPoints) {
        const localEnd = cut - runStart;
        const slice = text.slice(sliceStart, localEnd);
        if (slice.length === 0) {
          sliceStart = localEnd;
          continue;
        }
        if (reusedOriginal) {
          nextRuns.push(runsCollection.cloneWithText(run, slice));
        } else {
          run.text = slice;
          nextRuns.push(run);
          reusedOriginal = true;
        }
        sliceStart = localEnd;
      }
      if (!reusedOriginal) {
        run.text = "";
        nextRuns.push(run);
      }
      cursor = runEnd;
    }
    runsCollection.replace(nextRuns);
  }
  host.setRunsSplit(true);
}

/** Legacy replace(). */
export function replaceTextSelection(
  host: TextSelectionMutationHost,
  input: unknown,
): void {
  if (host.isEmpty) return;
  const selection = resolveSoleParagraphSpan(host);
  if (!selection) return;
  splitRunsAtSelectionBoundaries(host);
  const { paragraph, paragraphIndex, startOffset, endOffset } = selection;
  const runsCollection = paragraph.runs;
  const runItems = runsCollection.items;
  if (runItems.length === 0) return;
  const covered: any[] = [];
  let cursor = 0;
  for (const run of runItems) {
    const textLength = run.text.length;
    const runStart = cursor;
    const runEnd = runStart + textLength;
    if (textLength > 0 && runStart >= startOffset && runEnd <= endOffset) {
      covered.push(run);
    }
    cursor = runEnd;
  }
  if (covered.length === 0) return;
  const styleParagraph = firstParagraphFromPayload(input);
  const plainLength = paragraph.toPlainText().length;
  const replacesWholeParagraph = startOffset === 0 && endOffset === plainLength;
  const replacement = buildReplacementRuns(input, runsCollection, covered[0]);
  const nextRuns: any[] = [];
  cursor = 0;
  let inserted = replacement.length === 0;
  for (const run of runItems) {
    const textLength = run.text.length;
    const runStart = cursor;
    const runEnd = runStart + textLength;
    if (!(textLength > 0 && runStart >= startOffset && runEnd <= endOffset)) {
      nextRuns.push(run);
    } else if (!inserted) {
      for (const item of replacement) nextRuns.push(item);
      inserted = true;
    }
    cursor = runEnd;
  }
  if (!inserted) for (const item of replacement) nextRuns.push(item);
  runsCollection.replace(nextRuns);
  if (replacesWholeParagraph && styleParagraph) {
    copyParagraphStyleFields(paragraph, styleParagraph);
  }
  const insertedLength = runsTextLength(replacement);
  if (insertedLength === 0) {
    host.setRanges([]);
  } else {
    host.setRanges([
      {
        paragraphIndex,
        startOffset,
        endOffset: startOffset + insertedLength,
      },
    ]);
  }
  host.setRunsSplit(false);
  host.notifyLayoutInvalidated();
}

/** Legacy insertAfter(). */
export function insertAfterTextSelection(
  host: TextSelectionMutationHost,
  input: unknown,
): any {
  if (host.isEmpty) return host.empty();
  const selection = resolveSoleParagraphSpan(host);
  if (!selection) return host.empty();
  splitRunsAtSelectionBoundaries(host);
  const { paragraph, paragraphIndex, endOffset } = selection;
  const runsCollection = paragraph.runs;
  const runItems = runsCollection.items;
  if (runItems.length === 0) return host.empty();
  const coveredIndexes: number[] = [];
  const coveredRuns: any[] = [];
  let cursor = 0;
  for (const [index, run] of runItems.entries()) {
    const textLength = run.text.length;
    const runStart = cursor;
    const runEnd = runStart + textLength;
    if (
      textLength > 0 &&
      runStart >= selection.startOffset &&
      runEnd <= endOffset
    ) {
      coveredIndexes.push(index);
      coveredRuns.push(run);
    }
    cursor = runEnd;
  }
  if (coveredRuns.length === 0) return host.empty();
  const template = coveredRuns[coveredRuns.length - 1];
  const insertedRuns = buildReplacementRuns(input, runsCollection, template);
  if (insertedRuns.length === 0) return host.empty();
  const lastCoveredIndex = coveredIndexes[coveredIndexes.length - 1];
  const nextRuns: any[] = [];
  runItems.forEach((item: any, index: number) => {
    nextRuns.push(item);
    if (index === lastCoveredIndex) {
      for (const run of insertedRuns) nextRuns.push(run);
    }
  });
  runsCollection.replace(nextRuns);
  host.setRunsSplit(false);
  host.notifyLayoutInvalidated();
  const insertedLength = runsTextLength(insertedRuns);
  const nextSpans: TextSelectionSpan[] =
    insertedLength === 0
      ? []
      : [
          {
            paragraphIndex,
            startOffset: endOffset,
            endOffset: endOffset + insertedLength,
          },
        ];
  return host.create(host.paragraphs, nextSpans, host.cloneOptions());
}
