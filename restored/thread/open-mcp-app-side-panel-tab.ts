// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `XGi`) / export `NV`.

import type { ReactNode } from "react";

export type OpenMcpAppSidePanelTabOptions = {
  activate?: boolean;
  icon?: {
    alt?: string;
    logoUrl?: string;
    logoDarkUrl?: string;
  } | null;
  mcpAppId: unknown;
  onExitFullScreen?: () => void;
  onPanelElementChange?: unknown;
  title?: ReactNode;
};

export type OpenMcpAppSidePanelTabPeers = {
  tabIdFromAppId: (mcpAppId: unknown) => string;
  openTab: (
    store: unknown,
    component: unknown,
    opts: Record<string, unknown>,
  ) => void;
  panelComponent: unknown;
  DefaultIcon: (props: { className?: string }) => ReactNode;
  AppLogo: (props: Record<string, unknown>) => ReactNode;
  openRightPanel: (store: unknown) => void;
};

let peers: OpenMcpAppSidePanelTabPeers | null = null;

/** Wire MCP side-panel peers once companions land. */
export function setOpenMcpAppSidePanelTabPeers(
  next: OpenMcpAppSidePanelTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `NV` / internal `XGi`.
 * Open an MCP app side-panel tab.
 */
export function openMcpAppSidePanelTab(
  store: unknown,
  options: OpenMcpAppSidePanelTabOptions,
): void {
  if (peers == null) {
    throw new Error("OpenMcpAppSidePanelTab peers are not configured");
  }
  const {
    activate = true,
    icon,
    mcpAppId,
    onExitFullScreen,
    onPanelElementChange,
    title,
  } = options;
  const tabId = peers.tabIdFromAppId(mcpAppId);
  const defaultIcon = peers.DefaultIcon({
    className: "icon-xs shrink-0 text-token-text-secondary",
  });
  peers.openTab(store, peers.panelComponent, {
    icon:
      icon == null
        ? defaultIcon
        : peers.AppLogo({
            alt: icon.alt,
            className: "icon-xs shrink-0 object-contain",
            knownAppId: icon.alt,
            logoUrl: icon.logoUrl,
            logoDarkUrl: icon.logoDarkUrl,
            fallback: defaultIcon,
          }),
    props: { onPanelElementChange },
    id: tabId,
    title,
    activate,
    onClose: onExitFullScreen,
  });
  if (activate) peers.openRightPanel(store);
}
