// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bei` / export `LG`.

import { connectorIconKeyFromToken } from "./connector-icon-key-from-slug";

/** True when the first token has no connector icon mapping. */
export function isFirstConnectorIconMissing(tokens: Iterable<string>): boolean {
  for (const token of tokens) {
    return connectorIconKeyFromToken(token) == null;
  }
  return false;
}
