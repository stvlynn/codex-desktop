// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Wqr` / export `gX`.

/** True for text-like workbook kinds that open in-editor. */
export function isTextualWorkbookKind(kind: string | null | undefined): boolean | undefined {
  switch (kind) {
    case "csv":
    case "ipynb":
    case "tex":
    case "tsv":
      return true;
    case "docx":
    case "pdf":
    case "pptx":
    case "xlsx":
      return false;
  }
}
