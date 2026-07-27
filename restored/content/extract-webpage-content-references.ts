// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oSa` / export `eI`.

import { nonEmptyStringOrNull } from "../utils/non-empty-string-or-null";
import { asRecord } from "../utils/as-record";
import { normalizeWebpageContentReference } from "./normalize-webpage-content-reference";

export function extractWebpageContentReferences(ref: Record<string, unknown>): ReturnType<typeof normalizeWebpageContentReference>[] {
  switch (nonEmptyStringOrNull(ref.type)) {
    case "grouped_webpages":
    case "grouped_webpages_v2":
    case "grouped_webpages_model_predicted_fallback":
      return (Array.isArray(ref.items) ? ref.items : [])
        .map((item) => normalizeWebpageContentReference(asRecord(item)))
        .filter((item) => item != null);
    case "url": {
      const normalized = normalizeWebpageContentReference(asRecord(ref.item));
      return normalized == null ? [] : [normalized];
    }
    case "webpage":
    case "webpage_extended": {
      const normalized = normalizeWebpageContentReference(ref);
      return normalized == null ? [] : [normalized];
    }
    case "sources_footnote":
      return (Array.isArray(ref.sources) ? ref.sources : [])
        .map((item) => normalizeWebpageContentReference(asRecord(item)))
        .filter((item) => item != null);
    case "dil":
    case "hidden":
    case "image_group":
    case "image_v2":
    case null:
      return [];
    default:
      return [];
  }
}
