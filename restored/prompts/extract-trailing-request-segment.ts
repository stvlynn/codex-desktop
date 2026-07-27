// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Splits a composed prompt on the Codex request header and returns the trailing
// segment (bundle `h_` / export `hst`).

export const CODEX_REQUEST_HEADER = "## My request for Codex:";

export function extractTrailingRequestSegment(text: string): string {
  const parts = text.split(CODEX_REQUEST_HEADER);
  return parts.length <= 1 ? text : parts[parts.length - 1]!.trim();
}
