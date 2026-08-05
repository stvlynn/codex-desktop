// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `SQc` / export `Mu` (lodash `isEqual` negation).

import isEqual from "lodash/isEqual";

/** True when automation-like values differ under deep equality. */
export function automationsNotShallowEqual(
  left: unknown,
  right: unknown,
): boolean {
  return !isEqual(left, right);
}
