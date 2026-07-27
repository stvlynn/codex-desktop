// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `hLn` / export `e7` — keep tone-section ids stable across content edits.
// Section parser (`eLn`) left injectable.

export type ToneSection = {
  id: string;
  tone?: unknown;
  [key: string]: unknown;
};

type ParseToneSections = (args: {
  content: string;
  metadata: unknown;
  preserveEmptySections?: boolean;
}) => ToneSection[] | null;

let parseToneSections: ParseToneSections | null = null;

/** Wire tone-section parser (`eLn` in the bundle). */
export function setToneSectionsParser(parser: ParseToneSections): void {
  parseToneSections = parser;
}

export function alignToneSectionIds(args: {
  content: string;
  metadata: unknown;
  preserveEmptySections?: boolean;
}): ToneSection[] | null {
  if (parseToneSections == null) return null;
  const next = parseToneSections({
    content: args.content,
    metadata: args.metadata,
    preserveEmptySections: args.preserveEmptySections ?? false,
  });
  const empty = parseToneSections({ content: "", metadata: args.metadata });
  if (next == null || empty == null) return next;
  return next.map((section, index) => {
    const baseline = empty[index];
    if (
      baseline == null ||
      baseline.tone !== section.tone ||
      baseline.id === section.id
    ) {
      return section;
    }
    return { ...section, id: baseline.id };
  });
}
