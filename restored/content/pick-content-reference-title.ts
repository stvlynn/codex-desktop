// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Jxa` / export `nI`.

import { nonEmptyStringOrNull } from "../utils/non-empty-string-or-null";
import { asRecord } from "../utils/as-record";

export function pickContentReferenceTitle(
  ref: Record<string, unknown>,
): string | null {
  const item = asRecord(ref.item);
  return (
    nonEmptyStringOrNull(ref.alt) ??
    nonEmptyStringOrNull(ref.prompt_text) ??
    nonEmptyStringOrNull(ref.description) ??
    nonEmptyStringOrNull(ref.display_text) ??
    nonEmptyStringOrNull(ref.title) ??
    nonEmptyStringOrNull(ref.name) ??
    nonEmptyStringOrNull(ref.query) ??
    nonEmptyStringOrNull(item?.title)
  );
}
