// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `Liu`) / export `Rn`.

export type UseChromeAndCodeThemeSyncPeers = {
  useAtomValue: (atom: unknown) => unknown;
  appearanceAtom: unknown;
  useEffect: (effect: () => void | (() => void), deps: unknown[]) => void;
  applyChromeTheme: (theme: unknown) => void;
  applyCodeTheme: (theme: unknown) => void;
};

let peers: UseChromeAndCodeThemeSyncPeers | null = null;

/** Wire useChromeAndCodeThemeSync peers once companions land. */
export function setUseChromeAndCodeThemeSyncPeers(
  next: UseChromeAndCodeThemeSyncPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Rn` / internal `Liu`.
 * Keep chrome + code themes synchronized with appearance settings.
 */
export function useChromeAndCodeThemeSync(): void {
  if (peers == null) {
    throw new Error("UseChromeAndCodeThemeSync peers are not configured");
  }
  const appearance = peers.useAtomValue(peers.appearanceAtom) as {
    chromeTheme?: unknown;
    codeTheme?: unknown;
  };
  peers.useEffect(() => {
    peers!.applyChromeTheme(appearance?.chromeTheme);
    peers!.applyCodeTheme(appearance?.codeTheme);
  }, [appearance]);
}
