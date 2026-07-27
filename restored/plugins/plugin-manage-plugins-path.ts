// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Lwe` / export `emt`; companions `lTe` / `Wwe` / `Gwe`.

import { encodePluginIdForPath } from "./encode-plugin-id-for-path";

const PLUGINS_MANAGE_ROOT = "/skills/manage/plugins";

export type PluginManagePathInput = {
  pluginId: string;
  deepLinkMode?: string;
  hostId?: string;
  marketplacePath?: string;
  pluginName?: string;
  remoteMarketplaceName?: string;
};

function queryFromPluginManageInput(input: PluginManagePathInput): string {
  const params = new URLSearchParams();
  if (input.deepLinkMode) params.set("deepLinkMode", input.deepLinkMode);
  if (input.hostId) params.set("hostId", input.hostId);
  if (input.marketplacePath)
    params.set("marketplacePath", input.marketplacePath);
  if (input.pluginName) params.set("pluginName", input.pluginName);
  if (input.remoteMarketplaceName)
    params.set("remoteMarketplaceName", input.remoteMarketplaceName);
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}

/** Build `/skills/manage/plugins/<id>` with optional query. */
export function pluginManagePluginsPath(input: PluginManagePathInput): string {
  const query = queryFromPluginManageInput(input);
  return `${PLUGINS_MANAGE_ROOT}/${encodePluginIdForPath(input.pluginId)}${query}`;
}
