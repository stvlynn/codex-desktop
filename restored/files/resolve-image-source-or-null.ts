// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `cBa` / export `WM`.

function isHttpOrDataUrl(value: string): boolean {
  return (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:") ||
    value.startsWith("file:") ||
    value.startsWith("blob:")
  );
}

/**
 * When `value` looks like an image URL/path, return a usable `src`.
 * Bundle used `Yza` for local-file → object URL; here we pass through URL-like
 * strings and otherwise return null (callers may bind a richer resolver).
 */
export function resolveImageSourceOrNull(
  value: string | null | undefined,
): string | null {
  if (value == null) return null;
  const text = typeof value === "string" && isHttpOrDataUrl(value) ? value : "";
  if (text) return text;
  return value ?? null;
}
