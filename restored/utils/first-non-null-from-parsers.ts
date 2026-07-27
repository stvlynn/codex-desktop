// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `fbe` / export `Zmt`.

/** Run parsers in order; return the first non-null result. */
export function firstNonNullFromParsers<T, R>(
  value: T,
  parsers: Array<(input: T) => R | null | undefined> = [],
): R | null {
  for (const parse of parsers) {
    const result = parse(value);
    if (result != null) return result;
  }
  return null;
}
