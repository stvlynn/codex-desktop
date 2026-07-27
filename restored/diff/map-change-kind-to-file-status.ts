// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zLi` / export `WU`.

/** Map internal diff change kinds onto file-status labels. */
export function mapChangeKindToFileStatus(kind: string | null | undefined): "modified" | "renamed" | "added" | "deleted" | undefined {
  switch (kind) {
    case "change":
      return "modified";
    case "rename-pure":
    case "rename-changed":
      return "renamed";
    case "new":
      return "added";
    case "deleted":
      return "deleted";
  }
}
