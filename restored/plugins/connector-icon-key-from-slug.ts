// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `mei` / export `zG` (via `dei` = mei(pei(e))).

import {
  CONNECTOR_ICON_KEY_SET,
  type ConnectorIconKey,
} from "./connector-icon-key-catalog";
import { slugifyConnectorToken } from "./slugify-connector-token";

/** Resolve a connector icon catalog key from a raw / slug token. */
export function connectorIconKeyFromSlug(token: string): ConnectorIconKey | null {
  const stripped = token.replace(/^connector-/u, "");
  const candidates = [token, stripped, stripped.replace(/-mcp-server$/u, "")];
  for (const candidate of candidates) {
    if (CONNECTOR_ICON_KEY_SET.has(candidate)) {
      return candidate as ConnectorIconKey;
    }
  }
  return null;
}

/** `dei` / `zG`: slugify then look up. */
export function connectorIconKeyFromToken(token: string): ConnectorIconKey | null {
  return connectorIconKeyFromSlug(slugifyConnectorToken(token));
}
