// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `aSa` / export `iI` — webpage attrs + nav_list attrs for a content ref.

import { getContentReferenceAttributes } from "./get-content-reference-attributes";
import { extractNavListContentReferenceAttributes } from "./extract-nav-list-content-reference-attributes";

/** Bundle `aSa` / export `iI`. */
export function collectConversationContentReferences(
  ref: Record<string, unknown>,
): unknown[] {
  return [
    ...getContentReferenceAttributes(ref),
    ...extractNavListContentReferenceAttributes(ref),
  ];
}
