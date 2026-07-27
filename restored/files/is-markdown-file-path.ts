// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `i0n` / export `g6`.

import { fileExtensionFromPath } from "./file-extension-from-path";
import { MARKDOWN_FILE_EXTENSIONS } from "./markdown-file-extensions";

/** True when the path's extension is a known markdown extension. */
export function isMarkdownFilePath(filePath: string): boolean {
  const ext = fileExtensionFromPath(filePath);
  return ext != null && MARKDOWN_FILE_EXTENSIONS.has(ext);
}
