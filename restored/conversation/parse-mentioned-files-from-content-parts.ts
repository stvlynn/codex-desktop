// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `sDt` / export `Uot`.

import { parseMentionedFilesFromPrompt } from "./parse-mentioned-files-from-prompt";
import type { MentionedFileHeading } from "./parse-mentioned-file-heading";

/** Flatten text content parts, then parse mentioned-file headings. */
export function parseMentionedFilesFromContentParts(
  parts: Array<{ type?: string; text?: string }>,
): MentionedFileHeading[] {
  return parseMentionedFilesFromPrompt(
    parts
      .flatMap((part) => (part.type === "text" ? [part.text ?? ""] : []))
      .join(" "),
  );
}
