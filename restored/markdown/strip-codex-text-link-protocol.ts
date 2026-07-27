// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Dvt` / export `wst`; companion `Nvt`.

const CODEX_TEXT_LINK_PROTOCOL = "codex-text-link://";

/** Remove the `codex-text-link://` protocol from markdown link targets. */
export function stripCodexTextLinkProtocol(markdown: string): string {
  return markdown.replaceAll(`](${CODEX_TEXT_LINK_PROTOCOL}`, "](");
}
