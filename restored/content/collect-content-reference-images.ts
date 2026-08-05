// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `CSa` — images[] when present, otherwise the ref itself.

import { asRecord } from "../utils/as-record";

export function collectContentReferenceImages(
  ref: Record<string, unknown>,
): Record<string, unknown>[] {
  const images = Array.isArray(ref.images)
    ? ref.images
        .map(asRecord)
        .filter((entry): entry is Record<string, unknown> => entry != null)
    : [];
  return images.length > 0 ? images : [ref];
}
