// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `s0n` companion (no export alias) — kept for BJ file helpers.

/** Classify a Google Docs/Drive URL into a workspace kind. */
export function googleWorkspaceKindFromUrl(url: Pick<URL, "hostname" | "pathname">): "document" | "spreadsheet" | "presentation" | "drive" | null {
  if (url.hostname === "docs.google.com") {
    if (url.pathname.startsWith("/document/")) return "document";
    if (url.pathname.startsWith("/spreadsheets/")) return "spreadsheet";
    if (url.pathname.startsWith("/presentation/")) return "presentation";
    return null;
  }
  if (url.hostname === "sheets.google.com") return "spreadsheet";
  if (url.hostname === "slides.google.com") return "presentation";
  if (url.hostname === "drive.google.com") return "drive";
  return null;
}
