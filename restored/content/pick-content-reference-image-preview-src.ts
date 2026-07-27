// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `TSa` — prefer thumbnail URLs for image previews.

import { nonEmptyStringOrNull } from "../utils/non-empty-string-or-null";
import { asRecord } from "../utils/as-record";

export function pickContentReferenceImagePreviewSrc(image: Record<string, unknown> | null | undefined): string | null {
  const result = asRecord(image?.image_result);
  return (
    nonEmptyStringOrNull(image?.thumbnail_url) ??
    nonEmptyStringOrNull(result?.thumbnail_url) ??
    nonEmptyStringOrNull(image?.content_url) ??
    nonEmptyStringOrNull(result?.content_url) ??
    nonEmptyStringOrNull(image?.original_content_url) ??
    nonEmptyStringOrNull(result?.original_content_url) ??
    nonEmptyStringOrNull(image?.url) ??
    nonEmptyStringOrNull(result?.url)
  );
}
