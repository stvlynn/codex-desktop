// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `qat` — pure helper.

/** Extract trimmed text inside the first `<tag>…</tag>` block for `tag`. */
export function extractXmlTagContent(
  value: string,
  tag: string,
): string | null {
  return (
    RegExp(`<${tag}>\\s*([\\s\\S]*?)\\s*<\\/${tag}>`, "i")
      .exec(value)?.[1]
      .trim() ?? null
  );
}
