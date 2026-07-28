// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Fuzzy query scorer (bundle export `HM` / internal `HH`).
// IMPORT_MAP exportSources wrongly maps HM → ensureKeyboardShortcutsHMInit.
// Full HH/NBa/FuzzyPatternMatcher port lives in
// `.deobfuscate-javascript/_full/files/settings-page-CXDiYo2f/deps/`;
// this public module ships a typed path-aware subsequence scorer with the same
// (haystack, query) → number contract used by settings search + project filter.

/** Return 0 when `query` is empty/whitespace or does not subsequence-match. */
export function scoreFuzzyMatch(haystack: string, query: string): number {
  const trimmedQuery = query.trim();
  if (trimmedQuery.length === 0) return 0;

  const pathAware = /[\\/]/.test(trimmedQuery);
  const haystackForMatch = pathAware
    ? haystack
    : haystack.replace(/[\\/]/g, "\0");
  const queryForMatch = pathAware
    ? trimmedQuery
    : trimmedQuery.replace(/[\\/]/g, "\0");

  const matchScore = scoreSubsequenceMatch(
    haystackForMatch.toLowerCase(),
    queryForMatch.toLowerCase(),
    haystackForMatch,
    queryForMatch,
  );
  if (matchScore <= 0) return 0;
  const lengthPenalty = haystack.length;
  const adjusted = matchScore * 10 - lengthPenalty;
  return adjusted <= 0 ? 1 : adjusted;
}

/** Build a reusable scorer for a fixed query (bundle `UH`). */
export function createFuzzyScorer(query: string): (haystack: string) => number {
  const trimmedQuery = query.trim();
  if (trimmedQuery.length === 0) return () => 0;
  return (haystack: string) => scoreFuzzyMatch(haystack, trimmedQuery);
}

function scoreSubsequenceMatch(
  haystackLower: string,
  queryLower: string,
  haystackOriginal: string,
  queryOriginal: string,
): number {
  if (queryLower.length > haystackLower.length) return 0;

  let queryIndex = 0;
  let score = 0;
  let previousMatchIndex = -1;
  let contiguousBonus = 0;

  for (
    let haystackIndex = 0;
    haystackIndex < haystackLower.length && queryIndex < queryLower.length;
    haystackIndex += 1
  ) {
    if (haystackLower[haystackIndex] !== queryLower[queryIndex]) continue;

    let stepScore = 1;
    if (
      haystackIndex === 0 ||
      isWordBoundaryAt(haystackOriginal, haystackIndex)
    ) {
      stepScore += 4;
    }
    if (
      queryOriginal[queryIndex] === haystackOriginal[haystackIndex] &&
      /[A-Z]/.test(queryOriginal[queryIndex]!)
    ) {
      stepScore += 2;
    }
    if (previousMatchIndex === haystackIndex - 1) {
      contiguousBonus += 1;
      stepScore += contiguousBonus;
    } else {
      contiguousBonus = 0;
    }

    score += stepScore;
    previousMatchIndex = haystackIndex;
    queryIndex += 1;
  }

  if (queryIndex < queryLower.length) return 0;
  if (previousMatchIndex === 0) score += 8;
  if (previousMatchIndex + 1 === haystackLower.length) score += 2;
  return score;
}

function isWordBoundaryAt(text: string, index: number): boolean {
  if (index <= 0) return true;
  const current = text[index]!;
  const previous = text[index - 1]!;
  if (/[^a-zA-Z0-9]/.test(previous)) return true;
  if (/[A-Z]/.test(current) && /[a-z]/.test(previous)) return true;
  if (/[0-9]/.test(current) && /[a-zA-Z]/.test(previous)) return true;
  return false;
}
