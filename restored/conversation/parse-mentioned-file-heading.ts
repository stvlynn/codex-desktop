// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `aDt` companion for `oDt` / `Uot`.

import { isAbsolutePath, toPosixPath } from "../utils/workspace-paths";

export type MentionedFileHeading = {
  label: string;
  path: string;
  fsPath: string;
};

/** Parse a `## label: /abs/path` mentioned-file heading. */
export function parseMentionedFileHeading(
  line: string,
): MentionedFileHeading | null {
  const title = line.match(/^##\s+(.+)$/)?.[1];
  if (title == null) return null;
  let idx = title.lastIndexOf(": ");
  while (idx > 0) {
    const label = title.slice(0, idx).trim();
    const filePath = title
      .slice(idx + 2)
      .trim()
      .replace(/\s+\((?:lines\s+\d+-\d+|line\s+\d+)\)\s*$/, "");
    if (label.length > 0 && isAbsolutePath(toPosixPath(filePath))) {
      return { label, path: filePath, fsPath: filePath };
    }
    idx = title.lastIndexOf(": ", idx - 1);
  }
  return null;
}
