// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `GN` / export `CK`; companion `z8r`.

import { pluginNameForMarketplaceRequest } from "./plugin-name-for-marketplace-request";

export type PluginMarketplaceSource = {
  marketplacePath?: string | null;
  remoteMarketplaceName?: string | null;
};

/** Exactly one of marketplacePath / remoteMarketplaceName. */
export function pluginMarketplaceSourceFields(input: PluginMarketplaceSource): { marketplacePath: string } | { remoteMarketplaceName: string } {
  if (input.marketplacePath != null && input.remoteMarketplaceName != null) {
    throw new Error(
      "plugin marketplace request requires one marketplace source",
    );
  }
  if (input.marketplacePath != null) {
    return { marketplacePath: input.marketplacePath };
  }
  if (input.remoteMarketplaceName != null) {
    return { remoteMarketplaceName: input.remoteMarketplaceName };
  }
  throw new Error("plugin marketplace request requires a marketplace source");
}

/** Marketplace source fields plus resolved pluginName. */
export function pluginMarketplaceRequestFields(entry: {
  marketplacePath?: string | null;
  remoteMarketplaceName?: string | null;
  plugin: { id: string; name: string; remotePluginId?: string | null };
}): ({ marketplacePath: string } | { remoteMarketplaceName: string }) & {
  pluginName: string;
} {
  return {
    ...pluginMarketplaceSourceFields(entry),
    pluginName: pluginNameForMarketplaceRequest(entry),
  };
}
