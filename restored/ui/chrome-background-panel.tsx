// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BHa`) / export `NM`.

export type ChromeBackgroundPanelPeers = {
  $: (...args: unknown[]) => unknown;
  GHa: (...args: unknown[]) => unknown;
  QH: (...args: unknown[]) => unknown;
  WHa: (...args: unknown[]) => unknown;
  vw: (...args: unknown[]) => unknown;
};
let peers: ChromeBackgroundPanelPeers | null = null;

/** Wire ChromeBackgroundPanel peers once companions land. */
export function setChromeBackgroundPanelPeers(
  next: ChromeBackgroundPanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `NM` / internal `BHa`.
 */
export function ChromeBackgroundPanel(props: unknown) {
  if (peers == null) {
    throw new Error("ChromeBackgroundPanel peers are not configured");
  }
  let {
      children,
      className,
      background = "default",
      chromeVariant = "default",
    } = props,
    c = peers.vw(),
    l =
      chromeVariant === "expandedTopTray" ||
      chromeVariant === "embeddedExpandedTopTray" ||
      peers.QH(c.pathname);
  let u = l,
    d = peers.$(
      u
        ? "px-row-x pb-1 text-sm text-token-description-foreground"
        : peers.$(
            "text-token-description-foreground sticky top-0 z-10 px-row-x py-1 text-sm",
            background === "default"
              ? "bg-token-dropdown-background/95 backdrop-blur-sm"
              : "bg-transparent",
          ),
      className,
    );
  return <div className={d}>{children}</div>;
}
