// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `FV` / export `$F` — map content refs to their attributes arrays.

import { extractWebpageContentReferences } from "./extract-webpage-content-references";

export type ContentReferenceLike = {
  attributes?: unknown;
  [key: string]: unknown;
};

export function getContentReferenceAttributes(ref: ContentReferenceLike): unknown[] {
  return extractWebpageContentReferences(ref).map((entry) => entry.attributes);
}
