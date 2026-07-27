// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `dN` — pure helper.

/** Strip `$[`/`@[` … `]` or leading `$/`@` mention wrappers. */
export function stripMentionWrappers(value: string): string {
  const trimmed = value.trim();
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
