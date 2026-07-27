// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ves` / export `lw`.

import { isOfficialSpacedMarketplaceName } from "./is-official-spaced-marketplace-name";

/** True when any plugin marketplace name/display is official/curated. */
export function somePluginHasOfficialMarketplace(
  plugins: Array<{
    marketplaceName?: string | null;
    marketplaceDisplayName?: string | null;
  }>,
): boolean {
  return plugins.some(
    (plugin) =>
      isOfficialSpacedMarketplaceName(plugin.marketplaceName) ||
      (plugin.marketplaceDisplayName != null &&
        isOfficialSpacedMarketplaceName(plugin.marketplaceDisplayName)),
  );
}
