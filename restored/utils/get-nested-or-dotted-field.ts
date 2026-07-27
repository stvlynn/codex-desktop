// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `E5n` / export `H4`.

/** Read `obj[key]`, else first non-null `obj[`${key}.${suffix}`]`. */
export function getNestedOrDottedField(
  obj: Record<string, unknown> | null | undefined,
  key: string,
  suffixes: string[] = [],
): unknown {
  const direct = obj?.[key] ?? null;
  if (direct != null) return direct;
  for (const suffix of suffixes) {
    const nested = obj?.[`${key}.${suffix}`];
    if (nested != null) return nested;
  }
  return null;
}
