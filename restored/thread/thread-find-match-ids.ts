// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle match-id + text-search helpers for conversation/diff find.

export type ConversationMatchLocation = {
  turnKey: string;
  unitId: string;
  start: number;
};

export type DiffMatchLocation = {
  path: string;
  hunkId: string;
  start: number;
};

export type TextOffset = { start: number; end: number };

export type TextSearchResult = {
  offsets: TextOffset[];
  totalMatches: number;
  isCapped: boolean;
};

export type MatchSnippet = {
  before: string;
  match: string;
  after: string;
};

/** Bundle `gBi`. */
export function contentSearchUnitKey(turnKey: string, unitId: string): string {
  return `${turnKey}:${unitId}`;
}

/** Bundle `_Bi` / export `QH`. */
export function conversationMatchId(
  location: ConversationMatchLocation,
): string {
  return `conversation:${location.turnKey}:${location.unitId}:${location.start}`;
}

/** Bundle `vBi`. */
export function diffMatchId(location: DiffMatchLocation): string {
  return `diff:${location.path}:${location.hunkId}:${location.start}`;
}

/** Bundle `Aho` / export `$A`. */
export function groupConversationMatchesByUnitKey<
  T extends { location: { domain: string; turnKey: string; unitId: string } },
>(matches: T[]): Map<string, T[]> {
  const byUnit = new Map<string, T[]>();
  for (const match of matches) {
    if (match.location.domain !== "conversation") continue;
    const key = contentSearchUnitKey(
      match.location.turnKey,
      match.location.unitId,
    );
    const list = byUnit.get(key) ?? [];
    list.push(match);
    byUnit.set(key, list);
  }
  return byUnit;
}

/** Bundle `jho`. */
export function groupDiffMatchesByPath<
  T extends { location: { domain: string; path: string } },
>(matches: T[]): Map<string, T[]> {
  const byPath = new Map<string, T[]>();
  for (const match of matches) {
    if (match.location.domain !== "diff") continue;
    const list = byPath.get(match.location.path) ?? [];
    list.push(match);
    byPath.set(match.location.path, list);
  }
  return byPath;
}

/** Bundle `VBi` / export `JH`. */
export function findTextOffsets(
  haystack: string,
  needle: string,
  maxMatches: number,
): TextSearchResult {
  const needleLower = needle.toLowerCase();
  const haystackLower = haystack.toLowerCase();
  const offsets: TextOffset[] = [];
  let totalMatches = 0;
  let isCapped = false;
  let cursor = 0;
  while (cursor < haystackLower.length) {
    const start = haystackLower.indexOf(needleLower, cursor);
    if (start === -1) break;
    const end = start + needle.length;
    totalMatches += 1;
    if (offsets.length < maxMatches) offsets.push({ start, end });
    else isCapped = true;
    cursor = end;
  }
  return { offsets, totalMatches, isCapped };
}

/** Bundle `BBi` / export `qH`. */
export function buildMatchSnippet(
  text: string,
  start: number,
  end: number,
  padding: number = 24,
): MatchSnippet {
  const beforeStart = Math.max(0, start - padding);
  const afterEnd = Math.min(text.length, end + padding);
  return {
    before: text.slice(beforeStart, start),
    match: text.slice(start, end),
    after: text.slice(end, afterEnd),
  };
}
