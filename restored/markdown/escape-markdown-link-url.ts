// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `kvt` — pure helper.

/** Escape `\` and `)` for markdown link destinations. */
export function escapeMarkdownLinkUrl(url: string): string {
  return url.replaceAll("\\", "\\\\").replaceAll(")", "\\)");
}
