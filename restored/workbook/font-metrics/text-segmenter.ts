// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-10: Intl.Segmenter grapheme cache (legacy workbookPt / workbookFt).

const MAX_CACHE = 1024;
const segmentCache = new Map<string, string[]>();

type SegmenterLike = {
  segment(input: string): Iterable<{ segment?: string }>;
};

let segmenter: SegmenterLike | undefined;
let ready = false;

/** Legacy `workbookFt` — init Intl.Segmenter when available. */
export function ensureTextSegmenterInit(): void {
  if (ready) return;
  const intl = typeof Intl < "u" ? Intl : undefined;
  segmenter =
    typeof (intl as { Segmenter?: new () => SegmenterLike } | undefined)
      ?.Segmenter == "function"
      ? new (intl as { Segmenter: new () => SegmenterLike }).Segmenter()
      : undefined;
  ready = true;
}

/** Legacy `workbookPt` — split text into grapheme clusters (cached). */
export function segmentGraphemes(text: string | null | undefined): string[] {
  if (!text) return [];
  const hit = segmentCache.get(text);
  if (hit) return hit;
  ensureTextSegmenterInit();
  if (segmenter) {
    const parts: string[] = [];
    for (const entry of segmenter.segment(text)) {
      if (entry.segment) parts.push(entry.segment);
    }
    if (segmentCache.size >= MAX_CACHE) segmentCache.clear();
    segmentCache.set(text, parts);
    return parts;
  }
  const chars = Array.from(text);
  if (segmentCache.size >= MAX_CACHE) segmentCache.clear();
  segmentCache.set(text, chars);
  return chars;
}
