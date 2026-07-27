// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `Hrr`) / export `H0`.

export type UseBrowserOpenTargetArgs = {
  href: string;
  isBrowserSidebarEnabled?: boolean;
  openTarget?: unknown;
  openTargetIntent?: unknown;
  useExternalBrowser?: boolean;
};

export type UseBrowserOpenTargetPeers = {
  useBrowserSidebarEnabled: () => boolean;
  useLinksDefaultInAppBrowserGate: () => boolean;
  useOpenLinkInTargetPreference: () => unknown;
  useOpenLocalUrlInTargetPreference: () => unknown;
  normalizeUrl: (href: string) => string;
  resolveOpenTarget: (args: {
    browserPaneEnabled: boolean;
    linksDefaultInAppBrowser: boolean;
    openLinkInTargetPreference: unknown;
    openLocalUrlInTargetPreference: unknown;
    openTarget: unknown;
    openTargetIntent: unknown;
    url: string;
    useExternalBrowser?: boolean;
  }) => unknown;
};

let peers: UseBrowserOpenTargetPeers | null = null;

/** Wire browser open-target peers once companions land. */
export function setUseBrowserOpenTargetPeers(
  next: UseBrowserOpenTargetPeers,
): void {
  peers = next;
}

/**
 * Bundle export `H0` / internal `Hrr`.
 * Resolve where a browser href should open.
 */
export function useBrowserOpenTarget(args: UseBrowserOpenTargetArgs): unknown {
  if (peers == null) {
    throw new Error("UseBrowserOpenTarget peers are not configured");
  }
  const {
    href,
    isBrowserSidebarEnabled,
    openTarget,
    openTargetIntent,
    useExternalBrowser,
  } = args;
  const sidebarEnabled =
    isBrowserSidebarEnabled ?? peers.useBrowserSidebarEnabled();
  return peers.resolveOpenTarget({
    browserPaneEnabled: sidebarEnabled,
    linksDefaultInAppBrowser: peers.useLinksDefaultInAppBrowserGate(),
    openLinkInTargetPreference: peers.useOpenLinkInTargetPreference(),
    openLocalUrlInTargetPreference: peers.useOpenLocalUrlInTargetPreference(),
    openTarget,
    openTargetIntent,
    url: peers.normalizeUrl(href),
    useExternalBrowser,
  });
}
