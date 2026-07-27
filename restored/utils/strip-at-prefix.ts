// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `eQl` / export `ea`.

/** Trim and strip a leading `@` from a username-like string. */
export function stripAtPrefix(value: string): string {
  const trimmed = value.trim();
  return trimmed.startsWith("@") ? trimmed.slice(1).trim() : trimmed;
}
