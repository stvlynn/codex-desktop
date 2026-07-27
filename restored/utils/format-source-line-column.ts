// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `hut` — pure helper.

import { coerceSourcePositionNumber } from "./coerce-source-position-number";

/** Format `line:column` from a partial source position. */
export function formatSourceLineColumn(
  position: { line?: unknown; column?: unknown } | null | undefined,
): string {
  return (
    coerceSourcePositionNumber(position && position.line) +
    ":" +
    coerceSourcePositionNumber(position && position.column)
  );
}
