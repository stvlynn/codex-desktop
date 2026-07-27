// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `l0n` / export `u6`.

export type OfficeDocKind = "document" | "spreadsheet" | "presentation";

/** Map Google/Office MIME types onto a coarse document kind. */
export function mimeTypeToOfficeKind(mimeType: string | null): OfficeDocKind | null {
  switch (mimeType) {
    case null:
      return null;
    case "application/vnd.google-apps.document":
    case "application/msword":
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return "document";
    case "application/vnd.google-apps.spreadsheet":
    case "application/vnd.ms-excel":
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return "spreadsheet";
    case "application/vnd.google-apps.presentation":
    case "application/vnd.ms-powerpoint":
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return "presentation";
    default:
      return null;
  }
}
