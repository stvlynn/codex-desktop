// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `yza` / export `$M`.

/** Build a GitHub avatar URL for a login, or null when invalid. */
export function buildGithubAvatarUrl(
  login: string | null | undefined,
  size: number,
): string | null {
  const trimmed = login?.trim();
  return trimmed == null || trimmed.length === 0 || /\s/.test(trimmed)
    ? null
    : `https://github.com/${encodeURIComponent(trimmed)}.png?size=${size}`;
}
