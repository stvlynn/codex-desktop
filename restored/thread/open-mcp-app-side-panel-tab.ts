// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `XGi`) / export `NV`.

export type OpenMcpAppSidePanelTabPeers = {
  QGi: (...args: unknown[]) => unknown;
  UGi: (...args: unknown[]) => unknown;
  _P: (...args: unknown[]) => unknown;
  dR: (...args: unknown[]) => unknown;
  eO: (...args: unknown[]) => unknown;
  pR: (...args: unknown[]) => unknown;
  qGi: (...args: unknown[]) => unknown;
};
let peers: OpenMcpAppSidePanelTabPeers | null = null;

/** Wire openMcpAppSidePanelTab peers once companions land. */
export function setOpenMcpAppSidePanelTabPeers(
  next: OpenMcpAppSidePanelTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `NV` / internal `XGi`.
 */
export function openMcpAppSidePanelTab(
  e: unknown,
  {
    activate = true,
    icon,
    mcpAppId,
    onExitFullScreen,
    onPanelElementChange,
    title,
  }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("openMcpAppSidePanelTab peers are not configured");
  }
  let s = peers.pR(mcpAppId);
  peers.eO.openTab(e, peers.UGi, {
    icon:
      icon == null
        ? peers.QGi.createElement(peers.dR, {
            className: "icon-xs shrink-0 text-token-text-secondary",
          })
        : peers.QGi.createElement(peers._P, {
            alt: icon.alt,
            className: "icon-xs shrink-0 object-contain",
            knownAppId: icon.alt,
            logoUrl: icon.logoUrl,
            logoDarkUrl: icon.logoDarkUrl,
            fallback: peers.QGi.createElement(peers.dR, {
              className: "icon-xs shrink-0 text-token-text-secondary",
            }),
          }),
    props: {
      onPanelElementChange,
    },
    id: s,
    title,
    activate,
    onClose: onExitFullScreen,
  });
  activate && peers.qGi(e);
}
