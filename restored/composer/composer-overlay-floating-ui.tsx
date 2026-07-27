// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Y5o`) / export `$w`.

export type ComposerOverlayFloatingUiPeers = {
  AHa: (...args: unknown[]) => unknown;
  Q5o: (...args: unknown[]) => unknown;
  X5o: (...args: unknown[]) => unknown;
  Z5o: (...args: unknown[]) => unknown;
  bQa: (...args: unknown[]) => unknown;
};
let peers: ComposerOverlayFloatingUiPeers | null = null;

/** Wire ComposerOverlayFloatingUi peers once companions land. */
export function setComposerOverlayFloatingUiPeers(
  next: ComposerOverlayFloatingUiPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$w` / internal `Y5o`.
 */
export function ComposerOverlayFloatingUi(props: unknown) {
  const AHa = peers.AHa;
  if (peers == null) {
    throw new Error("ComposerOverlayFloatingUi peers are not configured");
  }
  let {
      isActive,
      children,
      chromeVariant = "default",
      placement = "top",
      spacing = "default",
    } = props,
    u = {
      placement,
      spacing,
      variant: chromeVariant,
    };
  let { overlayPortalContainer, shellClassName, usesExpandedTopTray } =
    peers.bQa(u);
  if (!isActive) return null;
  if (overlayPortalContainer != null) {
    let e = (
      <AHa
        data-composer-overlay-floating-ui={true}
        expandedTopTray={usesExpandedTopTray}
        className={shellClassName}
      >
        {children}
      </AHa>
    );
    let n;
    return peers.Z5o.createPortal(e, overlayPortalContainer);
  }
  return (
    <AHa
      data-composer-overlay-floating-ui={true}
      expandedTopTray={usesExpandedTopTray}
      className={shellClassName}
    >
      {children}
    </AHa>
  );
}
