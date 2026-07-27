// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nlu` / export `nn`.

import { pathSeparatorFor } from "./path-separator-for";

/** Join path segments using the separator implied by the first segment. */
export function joinPathSegments(base: string, ...parts: string[]): string {
  const separator = pathSeparatorFor(base);
  return [
    base.replace(/[\\/]+$/, ""),
    ...parts.map((part) => part.replace(/^[\\/]+|[\\/]+$/g, "")),
  ].join(separator);
}
