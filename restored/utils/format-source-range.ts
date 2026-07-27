// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `gut` — pure helper; imports hut.

import { formatSourceLineColumn } from "./format-source-line-column.ts";

/** Format `start-end` line:column range. */
export function formatSourceRange(range: {
  start?: { line?: unknown; column?: unknown } | null;
  end?: { line?: unknown; column?: unknown } | null;
}): string {
  return (
    formatSourceLineColumn(range && range.start) +
    "-" +
    formatSourceLineColumn(range && range.end)
  );
}
