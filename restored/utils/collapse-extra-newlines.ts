// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `eqn` / export `t5`. Companion `uqn` = /^::[a-zA-Z0-9-]+.*$/gm.

const STRIP_RE = /^::[a-zA-Z0-9-]+.*$/gm;

/** Strip control runs, collapse 3+ newlines, trim. */
export function collapseExtraNewlines(value: string): string {
  return value
    .replace(STRIP_RE, "")
    .replace(/\n{3,}/gu, "\n\n")
    .trim();
}
