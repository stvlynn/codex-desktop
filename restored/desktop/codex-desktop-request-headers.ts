// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Hh` / export `Bct` — baseline Codex Desktop request headers.

export const CODEX_DESKTOP_ATTACH_AUTH_HEADER = "X-OpenAI-Attach-Auth";
export const CODEX_DESKTOP_ATTACH_INTEGRITY_HEADER =
  "X-OpenAI-Attach-Integrity-State";

/** Bundle `Hh` / export `Bct`. */
export function buildCodexDesktopRequestHeaders(): Record<string, string> {
  return {
    [CODEX_DESKTOP_ATTACH_AUTH_HEADER]: "1",
    [CODEX_DESKTOP_ATTACH_INTEGRITY_HEADER]: "1",
    originator: "Codex Desktop",
  };
}
