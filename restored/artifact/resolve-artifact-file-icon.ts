// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Resolve a file-path/mime to its kind icon (bundle `YL` / export `bH`).

import {
  getArtifactFileKindIcon,
  type ArtifactFileKindIcon,
} from "./artifact-file-kind-icons";
import { resolveArtifactFileKind } from "./resolve-artifact-file-kind";

export type { ArtifactFileKindIcon };

/**
 * Look up the SVG icon component for a file path + optional mime
 * (`YL` / export `bH` → `XL[GUi(path, mime)]`).
 */
export function resolveArtifactFileIcon(
  filePath: string | null | undefined,
  mimeType?: string | false | null,
): ArtifactFileKindIcon {
  const kind = resolveArtifactFileKind(filePath, mimeType);
  return getArtifactFileKindIcon(kind);
}

/** Directory entries use the folder icon (`XL.folder`). */
export function resolveArtifactEntryIcon(
  filePath: string | null | undefined,
  entryKind?: "directory" | "file" | string | null,
  mimeType?: string | false | null,
): ArtifactFileKindIcon {
  if (entryKind === "directory") return getArtifactFileKindIcon("folder");
  return resolveArtifactFileIcon(filePath, mimeType);
}
