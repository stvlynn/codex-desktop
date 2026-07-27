// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ug` / export `Lst` — strip writing-block fences then markdown→plain.
// Bundle uses micromark+mdast GFM; dependency-light projection for callers.

const WRITING_FENCE = ":::writing";

/** Bundle `l_t` (internal) — drop :::writing … fence bodies. */
export function stripWritingBlockDirectives(markdown: string): string {
  if (!markdown.includes(WRITING_FENCE)) return markdown;
  const lines = markdown.split("\n");
  const out: string[] = [];
  let inWriting = false;
  for (const line of lines) {
    const trimmed = line.trimStart();
    if (!inWriting && trimmed.startsWith(WRITING_FENCE)) {
      inWriting = true;
      continue;
    }
    if (inWriting && (trimmed === ":::" || /^(`{3,}|~{3,})$/.test(trimmed))) {
      inWriting = false;
      continue;
    }
    if (!inWriting) out.push(line);
  }
  return out.join("\n");
}

/** Bundle `Ug` / export `Lst`. */
export function markdownToPlainText(markdown: string): string {
  const trimmed = stripWritingBlockDirectives(markdown).trim();
  if (trimmed.length === 0) return "";
  return trimmed
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_~]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
