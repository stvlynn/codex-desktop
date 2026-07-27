// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `wS` — thin helper.

/** Run content check then copy onto a typed node. */
export function checkContentAndCopy<
  T extends {
    type: { checkContent: (v: unknown) => void };
    copy: (v: unknown) => unknown;
  },
>(node: T, value: unknown): unknown {
  node.type.checkContent(value);
  return node.copy(value);
}
