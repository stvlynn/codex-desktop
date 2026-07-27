// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Mg` — pure helper.

export type SourcePositionFields = {
  line: unknown;
  column: unknown;
  offset: unknown;
};

/** Pick `line`/`column`/`offset` from a source position-like object. */
export function pickSourcePosition(value: SourcePositionFields): {
  line: unknown;
  column: unknown;
  offset: unknown;
} {
  return { line: value.line, column: value.column, offset: value.offset };
}
