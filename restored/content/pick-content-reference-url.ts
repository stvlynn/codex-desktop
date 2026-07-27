// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Zxa` / export `sI`.

import { nonEmptyStringOrNull } from "../utils/non-empty-string-or-null";
import { asRecord } from "../utils/as-record";

export function pickContentReferenceUrl(
  ref: Record<string, unknown>,
): string | null {
  const item = asRecord(ref.item);
  return (
    nonEmptyStringOrNull(ref.url) ??
    nonEmptyStringOrNull(ref.cloud_doc_url) ??
    nonEmptyStringOrNull(ref.source_url) ??
    nonEmptyStringOrNull(item?.url)
  );
}
