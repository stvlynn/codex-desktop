// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle companion `s0n` for `c0n` / export `d6`.

export type GoogleDocsUrlKind = "document" | "spreadsheet" | "presentation";

/** Classify a Google Docs/Sheets/Slides/Drive URL. */
export function googleDocsUrlKind(url: URL): GoogleDocsUrlKind | null {
  if (url.hostname === "docs.google.com") {
    if (url.pathname.startsWith("/document/")) return "document";
    if (url.pathname.startsWith("/spreadsheets/")) return "spreadsheet";
    if (url.pathname.startsWith("/presentation/")) return "presentation";
    return null;
  }
  if (url.hostname === "sheets.google.com") return "spreadsheet";
  if (url.hostname === "slides.google.com") return "presentation";
  if (url.hostname === "drive.google.com") return null;
  return null;
}
