// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `V5r` / export `pK`.

import { connectorsSettingsHash } from "./connectors-settings-hash";

/** Build install URL with connectors settings hash for a plugin id. */
export function buildConnectorInstallUrl(plugin: {
  id: string;
  installUrl?: string | null;
}): string | null {
  const trimmed = plugin.installUrl?.trim();
  if (!trimmed) return null;
  const url = new URL(trimmed);
  url.hash = connectorsSettingsHash(plugin.id);
  return url.toString();
}
