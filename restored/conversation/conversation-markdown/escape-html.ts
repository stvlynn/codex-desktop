// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (HTML / details escaping).

export function normalizeNewlines(text: string): string {
  return text.replaceAll(/\r\n?/g, "\n");
}

export function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** Escape literal `<details>` tags so nested markdown details stay intact. */
export function escapeEmbeddedDetailsTags(text: string): string {
  return text.replaceAll(/<\/?details(?=[\s>])[^>]*>/gi, (tag) =>
    escapeHtml(tag),
  );
}

export function escapeDetailsInNormalizedText(text: string): string {
  return escapeEmbeddedDetailsTags(normalizeNewlines(text));
}
