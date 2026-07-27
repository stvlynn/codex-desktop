// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `fei` / export `BG`.

import type { ConnectorIconKey } from "./connector-icon-key-catalog";
import { connectorIconKeyFromSlug } from "./connector-icon-key-from-slug";
import { slugifyConnectorToken } from "./slugify-connector-token";

/** Match a connector icon key from plugin name/id/display names. */
export function matchConnectorIconKeyFromPlugin(plugin: {
  name?: string | null;
  id?: string | null;
  pluginDisplayNames?: string[] | null;
}): ConnectorIconKey | null {
  const tokens = [
    plugin.name ?? "",
    plugin.id ?? "",
    ...(plugin.pluginDisplayNames ?? []),
  ].map(slugifyConnectorToken);
  for (const token of tokens) {
    const key = connectorIconKeyFromSlug(token);
    if (key != null) return key;
  }
  return null;
}
