// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DU — real body via extractFn(internal `Ysu`) / export `fn`.
// Provider formatting peers bind via setFormatDetectedProviderItemsPeers.

export type FormatDetectedProviderItemsPeers = {
  filterByProviderIds: (
    detectedItems: unknown,
    providerIds: unknown,
  ) => unknown;
  formatItems: (intl: unknown, items: unknown[]) => unknown;
  toDisplayItems: (filtered: unknown) => unknown[] | null;
};

let peers: FormatDetectedProviderItemsPeers | null = null;

/** Wire detected-provider format helpers once companions land. */
export function setFormatDetectedProviderItemsPeers(
  next: FormatDetectedProviderItemsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `fn` / internal `Ysu`.
 * Format detected onboarding provider items for display, or null when empty.
 */
export function formatDetectedProviderItems(input: {
  detectedItems: unknown;
  intl: unknown;
  providerIds: unknown;
}): unknown {
  if (peers == null) {
    throw new Error("formatDetectedProviderItems peers are not configured");
  }
  const filtered = peers.filterByProviderIds(
    input.detectedItems,
    input.providerIds,
  );
  const items = filtered == null ? [] : (peers.toDisplayItems(filtered) ?? []);
  return items.length === 0 ? null : peers.formatItems(input.intl, items);
}
