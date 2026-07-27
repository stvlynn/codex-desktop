// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `WN` / export `xK`.

/** Prefer marketplacePath; else `remote:<remoteMarketplaceName>`. */
export function marketplacePathOrRemote(entry: {
  marketplacePath?: string | null;
  remoteMarketplaceName?: string | null;
}): string {
  return entry.marketplacePath ?? `remote:${entry.remoteMarketplaceName ?? ""}`;
}
