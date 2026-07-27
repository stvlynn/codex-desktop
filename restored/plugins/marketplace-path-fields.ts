// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `G8r` companion for export `gK` / `yK`.

/** Split marketplace name vs local path fields. */
export function marketplacePathFields(input: {
  marketplaceName: string | null | undefined;
  marketplacePath: string | null | undefined;
}): {
  marketplacePath: string | null;
  remoteMarketplaceName: string | null | undefined;
} {
  return input.marketplacePath == null
    ? {
        marketplacePath: null,
        remoteMarketplaceName: input.marketplaceName,
      }
    : {
        marketplacePath: input.marketplacePath,
        remoteMarketplaceName: null,
      };
}
