// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Xxa` / export `aI`.

import { nonEmptyStringOrNull } from "../utils/non-empty-string-or-null";
import { asRecord } from "../utils/as-record";

export function pickContentReferenceLabel(
  ref: Record<string, unknown>,
): string | null {
  const item = asRecord(ref.item);
  return (
    nonEmptyStringOrNull(ref.snippet) ??
    nonEmptyStringOrNull(ref.text) ??
    nonEmptyStringOrNull(ref.subtitle) ??
    nonEmptyStringOrNull(ref.source_label) ??
    nonEmptyStringOrNull(ref.provider) ??
    nonEmptyStringOrNull(item?.snippet) ??
    nonEmptyStringOrNull(item?.url)
  );
}
