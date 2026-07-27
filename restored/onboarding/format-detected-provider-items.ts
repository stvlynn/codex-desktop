// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ysu`) / export `fn`.

export type FormatDetectedProviderItemsPeers = {
  Qsu: (...args: unknown[]) => unknown;
  Zsu: (...args: unknown[]) => unknown;
  uPl: (...args: unknown[]) => unknown;
};
let peers: FormatDetectedProviderItemsPeers | null = null;

/** Wire formatDetectedProviderItems peers once companions land. */
export function setFormatDetectedProviderItemsPeers(
  next: FormatDetectedProviderItemsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `fn` / internal `Ysu`.
 */
export function formatDetectedProviderItems({
  detectedItems,
  intl,
  providerIds,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("formatDetectedProviderItems peers are not configured");
  }
  let r = peers.Zsu(detectedItems, providerIds),
    i = r == null ? [] : peers.uPl(r);
  return i.length === 0 ? null : peers.Qsu(intl, i);
}
