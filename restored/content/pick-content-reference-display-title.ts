// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Yxa` / export `oI`.

import { nonEmptyStringOrNull } from "../utils/non-empty-string-or-null";
import { asRecord } from "../utils/as-record";
import { hostnameFromUrl } from "../utils/hostname-from-url";
import { pickContentReferenceUrl } from "./pick-content-reference-url";

export function pickContentReferenceDisplayTitle(ref: Record<string, unknown>): string | null {
  const item = asRecord(ref.item);
  return (
    nonEmptyStringOrNull(ref.title) ??
    nonEmptyStringOrNull(ref.description) ??
    nonEmptyStringOrNull(ref.display_title) ??
    nonEmptyStringOrNull(ref.display_text) ??
    nonEmptyStringOrNull(ref.name) ??
    nonEmptyStringOrNull(ref.query) ??
    nonEmptyStringOrNull(ref.alt) ??
    nonEmptyStringOrNull(ref.prompt_text) ??
    nonEmptyStringOrNull(item?.title) ??
    hostnameFromUrl(pickContentReferenceUrl(ref))
  );
}
