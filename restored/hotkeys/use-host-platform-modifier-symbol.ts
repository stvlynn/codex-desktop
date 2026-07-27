// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `uk`) / export `X1`.

export type UseHostPlatformModifierSymbolPeers = {
  useHostPlatformQuery: () => {
    data?: { platform?: string } | null;
    isLoading: boolean;
  };
  normalizePlatform: (platform: unknown) => unknown;
  modifierSymbolFor: (platform: unknown) => unknown;
};

let peers: UseHostPlatformModifierSymbolPeers | null = null;

/** Wire useHostPlatformModifierSymbol peers once companions land. */
export function setUseHostPlatformModifierSymbolPeers(
  next: UseHostPlatformModifierSymbolPeers,
): void {
  peers = next;
}

/**
 * Bundle export `X1` / internal `uk`.
 * Resolve host platform + modifier symbol for keybinding UI.
 */
export function useHostPlatformModifierSymbol(): {
  platform: unknown;
  modifierSymbol: unknown;
  isLoading: boolean;
} {
  if (peers == null) {
    throw new Error("UseHostPlatformModifierSymbol peers are not configured");
  }
  const { data, isLoading } = peers.useHostPlatformQuery();
  const platform = peers.normalizePlatform(data?.platform);
  const modifierSymbol = peers.modifierSymbolFor(platform);
  return { platform, modifierSymbol, isLoading };
}
