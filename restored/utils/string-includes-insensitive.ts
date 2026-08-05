// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Aja` / export `WN`.

/** Case-insensitive substring check for string haystacks. */
export function stringIncludesInsensitive(
  haystack: unknown,
  needle: string,
): boolean {
  return (
    typeof haystack === "string" && haystack.toLowerCase().includes(needle)
  );
}
