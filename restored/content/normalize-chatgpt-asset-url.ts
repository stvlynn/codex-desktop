// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Fba` / export `wI` (`nxa` is a thin alias).

export function normalizeChatgptAssetUrl(
  value: string | null | undefined,
): string | null {
  if (value == null) return null;
  const trimmed = value.trim();
  if (trimmed.startsWith("/backend-api/")) {
    return `https://chatgpt.com${trimmed}`;
  }
  if (trimmed.startsWith("/__codex-api/")) return trimmed;
  try {
    const url = new URL(trimmed);
    return url.protocol === "http:" || url.protocol === "https:"
      ? trimmed
      : null;
  } catch {
    return null;
  }
}
