// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `_2i`) / export `rB`.

export type HostToolCallView = {
  icon?: unknown;
  title?: unknown;
  [key: string]: unknown;
};

export type OpenHostToolCallPanelOptions = {
  activate?: boolean;
  hostToolCallMetadata?: unknown;
  hostToolResultMetadata?: unknown;
  instanceId?: string;
  isPreview?: boolean;
  onClose?: () => void;
  readHostResource?: unknown;
  resolveHostResourceSubscriptionPath?: unknown;
  writeHostResource?: unknown;
  tabId?: string;
  target?: "right" | "left" | "bottom" | string;
  title?: unknown;
  toolArguments?: unknown;
};

export type OpenHostToolCallPanelPeers = {
  requireHostValue: (value: unknown) => unknown | null;
  resolveTabId: (view: HostToolCallView, instanceId: string) => string;
  locatePanel: (store: any, tabId: string) => string | null;
  panelController: (side: string) => {
    openTab: (store: any, component: unknown, opts: unknown) => void;
  };
  panelComponent: unknown;
  resolveIcon: (icon: unknown, className: string) => unknown;
  openPanel: (store: any, side: string) => void;
};

let peers: OpenHostToolCallPanelPeers | null = null;

/** Wire host tool-call panel peers once companions land. */
export function setOpenHostToolCallPanelPeers(
  next: OpenHostToolCallPanelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `rB` / internal `_2i`.
 * Open a host tool-call panel instance and return its tab id.
 */
export function openHostToolCallPanel(
  store: { value?: unknown },
  view: HostToolCallView,
  options: OpenHostToolCallPanelOptions = {},
): string | null {
  if (peers == null) {
    throw new Error("OpenHostToolCallPanel peers are not configured");
  }
  if (peers.requireHostValue(store.value) == null) return null;
  const {
    activate = true,
    hostToolCallMetadata,
    hostToolResultMetadata,
    instanceId = crypto.randomUUID(),
    isPreview,
    onClose,
    readHostResource,
    resolveHostResourceSubscriptionPath,
    writeHostResource,
    tabId: explicitTabId,
    target = "right",
    title = view.title,
    toolArguments,
  } = options;
  const tabId = explicitTabId ?? peers.resolveTabId(view, instanceId);
  const side = peers.locatePanel(store as any, tabId) ?? target;
  peers.panelController(side).openTab(store, peers.panelComponent, {
    icon: peers.resolveIcon(view.icon, "icon-xs shrink-0"),
    id: tabId,
    props: {
      hostToolCallMetadata,
      hostToolResultMetadata,
      instanceId,
      readHostResource,
      resolveHostResourceSubscriptionPath,
      toolArguments,
      view,
      writeHostResource,
    },
    title,
    activate,
    isPreview,
    onClose,
  });
  if (activate) peers.openPanel(store as any, side);
  return tabId;
}
