// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `yes` / export `dw`.

import { isOpenaiCuratedMarketplaceToken } from "./is-openai-curated-marketplace-token";

/** True when marketplace name or display name is an OpenAI curated token. */
export function pluginHasOpenaiCuratedMarketplace(plugin: {
  marketplaceName: string;
  marketplaceDisplayName?: string | null;
}): boolean {
  return (
    isOpenaiCuratedMarketplaceToken(plugin.marketplaceName) ||
    (plugin.marketplaceDisplayName != null &&
      isOpenaiCuratedMarketplaceToken(plugin.marketplaceDisplayName))
  );
}
