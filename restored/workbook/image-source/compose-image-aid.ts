// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: image aid composer (legacy Kde → composeScopedId).

import { composeScopedId } from "../stable-id";

/** Legacy `Kde` — `im` / slideId / elementId scoped aid. */
export function composeImageAid(
  prefix: string,
  slideId: string | null | undefined,
  localId: string,
): string {
  return composeScopedId(prefix, slideId, localId);
}
