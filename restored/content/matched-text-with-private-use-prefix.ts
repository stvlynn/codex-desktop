// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `vSa` / export `rI` — matched_text must start with U+E200 (`PSa`).

import { nonEmptyStringOrNull } from "../utils/non-empty-string-or-null";

const PRIVATE_USE_MATCH_PREFIX = "";

export function matchedTextWithPrivateUsePrefix(ref: {
  matched_text?: unknown;
}): string | null {
  const text = nonEmptyStringOrNull(ref.matched_text);
  return text?.startsWith(PRIVATE_USE_MATCH_PREFIX) === true ? text : null;
}
