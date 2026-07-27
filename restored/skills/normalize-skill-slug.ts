// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `vXr` companion for `IY` / `FY`.

/** Normalize legacy skill slug aliases (documents→document, etc.). */
export function normalizeSkillSlug(raw: string): string | null {
  const token = raw.trim();
  if (token === "documents") return "document";
  if (token === "presentations") return "presentation";
  if (token === "spreadsheets") return "spreadsheet";
  if (
    token === "google-docs" ||
    token === "google-slides" ||
    token === "google-sheets"
  ) {
    return token;
  }
  return token.length > 0 ? token : null;
}
