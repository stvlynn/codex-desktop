// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Hat` — pure helper.

/** Extract trimmed text inside the first `<message>…</message>` block. */
export function extractXmlMessageContent(value: string): string {
  return (
    value.match(/<message>\s*([\s\S]*?)\s*<\/message>/i)?.[1]?.trim() ?? ""
  );
}
