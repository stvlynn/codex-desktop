// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Z8r` / export `bK`.

export type MarketplaceKind = string;

/** Marketplace kind list for remote/vertical catalog filters. */
export function resolveMarketplaceKinds(args: {
  additionalMarketplaceKinds: readonly MarketplaceKind[];
  includeRemoteCatalog: boolean;
  includeVerticalCatalog: boolean;
}): MarketplaceKind[] | null {
  const {
    additionalMarketplaceKinds,
    includeRemoteCatalog,
    includeVerticalCatalog,
  } = args;
  if (
    includeRemoteCatalog &&
    !includeVerticalCatalog &&
    additionalMarketplaceKinds.length === 0
  ) {
    return null;
  }
  return includeVerticalCatalog
    ? ["local", "vertical", ...additionalMarketplaceKinds]
    : ["local", ...additionalMarketplaceKinds];
}
