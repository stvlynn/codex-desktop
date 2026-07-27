// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Strip `$` / `@` mention sigils (bundle `dN` / export `vJ`).

/** Remove leading `$`/`@` or `$[…]`/`@[…]` wrappers from a mention token. */
export function stripMentionSigil(raw: string): string {
  const trimmed = raw.trim();
  if (
    (trimmed.startsWith("$[") || trimmed.startsWith("@[")) &&
    trimmed.endsWith("]")
  ) {
    return trimmed.slice(2, -1);
  }
  if (trimmed.startsWith("$") || trimmed.startsWith("@")) {
    return trimmed.slice(1);
  }
  return trimmed;
}
