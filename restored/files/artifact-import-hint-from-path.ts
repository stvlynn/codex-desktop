// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Gqr` / export `mX`.

import { importKindFromPath } from "./import-kind-from-path";

export type ArtifactImportHint = {
  artifactType: "spreadsheet" | "document" | "notebook" | "pdf" | "slides";
  importKind: string;
};

/** Artifact type + import kind hint from a file path. */
export function artifactImportHintFromPath(filePath: string): ArtifactImportHint | null {
  const kind = importKindFromPath(filePath);
  if (kind == null) return null;
  switch (kind) {
    case "csv":
    case "tsv":
    case "xlsx":
      return { artifactType: "spreadsheet", importKind: kind };
    case "docx":
      return { artifactType: "document", importKind: kind };
    case "ipynb":
      return { artifactType: "notebook", importKind: kind };
    case "pdf":
    case "tex":
      return { artifactType: "pdf", importKind: kind };
    case "pptx":
      return { artifactType: "slides", importKind: kind };
  }
  return null;
}
