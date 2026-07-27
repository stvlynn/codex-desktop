// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `Obu`) / export `G`.

export type UseOpenLocatorInMainWindowPeers = {
  presentLocator: (input: { locator: unknown; surface: "main-thread" }) => void;
  locatorToPath: (locator: unknown) => unknown;
  dispatchOpenInMainWindow: (path: unknown) => void;
};

let peers: UseOpenLocatorInMainWindowPeers | null = null;

/** Wire open-locator-in-main-window peers once companions land. */
export function setUseOpenLocatorInMainWindowPeers(
  next: UseOpenLocatorInMainWindowPeers,
): void {
  peers = next;
}

/**
 * Bundle export `G` / internal `Obu`.
 * Return a callback that opens a locator in the main window.
 */
export function useOpenLocatorInMainWindow(
  locator: unknown,
): (() => void) | undefined {
  if (peers == null) {
    throw new Error("UseOpenLocatorInMainWindow peers are not configured");
  }
  if (locator == null) return undefined;
  return () => {
    peers!.presentLocator({ locator, surface: "main-thread" });
    peers!.dispatchOpenInMainWindow(peers!.locatorToPath(locator));
  };
}
