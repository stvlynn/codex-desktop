// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `n0n` / export `p6`.

import { fileExtensionFromPath } from "./file-extension-from-path";
import { IMAGE_FILE_EXTENSIONS } from "./image-file-extensions";

export type ImagePreviewMode = "none" | "toggle" | "always";

/** Preview chrome mode for a path based on its extension. */
export function imagePreviewModeFromPath(filePath: string): ImagePreviewMode {
  const ext = fileExtensionFromPath(filePath);
  if (ext == null) return "none";
  if (ext === "svg") return "toggle";
  return IMAGE_FILE_EXTENSIONS.has(ext) ? "always" : "none";
}
