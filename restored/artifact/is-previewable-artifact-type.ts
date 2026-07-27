// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Previewable artifact type check (bundle `AWi` / export `rH`).

export type PreviewableArtifactType =
  | "document"
  | "slides"
  | "spreadsheet"
  | "pdf";

/** Whether an artifact type can open in the in-app preview surface. */
export function isPreviewableArtifactType(
  value: string | null | undefined,
): value is PreviewableArtifactType {
  return (
    value === "document" ||
    value === "slides" ||
    value === "spreadsheet" ||
    value === "pdf"
  );
}
