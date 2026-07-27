// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Mn` — pure helper.

/** True when payload exceeds 500 bytes and has no content preamble. */
export function shouldSkipLargeContentPreamble(payload: {
  byteSize: number;
  contentPreamble: unknown;
}): boolean {
  return (500 < payload.byteSize || false) && payload.contentPreamble === null;
}
