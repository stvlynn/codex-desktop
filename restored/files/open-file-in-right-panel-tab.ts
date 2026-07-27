// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `who`) / export `nj`.

export type OpenFileInRightPanelTabOptions = {
  activate?: boolean;
  hostId?: unknown;
  isPreview?: boolean;
  line?: unknown;
  syncOpenTabs?: boolean;
  tabId?: unknown;
  target?: "right" | "left" | "bottom" | string;
};

export type OpenFileInRightPanelTabPeers = {
  resolveEditor: (path: unknown) => unknown | null;
  resolveIcon: (path: unknown) => unknown;
  resolveTabId: (path: unknown, hostId: unknown, tabId?: unknown) => string;
  locatePanel: (store: any, tabId: string) => "right" | "left" | "bottom";
  panelController: (side: string) => {
    openTab: (store: any, component: unknown, opts: unknown) => void;
    resetTabState: (store: any, tabId: string) => void;
    activeTab$: unknown;
    tabById$: unknown;
  };
  editorComponent: unknown;
  editorKind: unknown;
  syncOpenTabs: (
    store: any,
    opts?: { excludeTab?: { panelId: unknown; tabId: string } },
  ) => void;
  titleFromPath: (path: unknown) => unknown;
  isFullWidthAtom: unknown;
  setFullWidth: (store: any, value: boolean) => void;
  focusMain: (store: any, area: string) => void;
};

let peers: OpenFileInRightPanelTabPeers | null = null;

/** Wire right-panel file tab peers once companions land. */
export function setOpenFileInRightPanelTabPeers(
  next: OpenFileInRightPanelTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `nj` / internal `who`.
 * Open a file into the right (or located) panel tab.
 */
export function openFileInRightPanelTab(
  store: any,
  filePath: unknown,
  options: OpenFileInRightPanelTabOptions,
): boolean {
  if (peers == null) {
    throw new Error("OpenFileInRightPanelTab peers are not configured");
  }
  const {
    activate = true,
    hostId,
    isPreview,
    line,
    syncOpenTabs = true,
    tabId: explicitTabId,
    target = "right",
  } = options;
  const editor = peers.resolveEditor(filePath);
  if (editor == null) return false;
  const Icon = peers.resolveIcon(filePath);
  const tabId = explicitTabId ?? `text-editor:${hostId}:${filePath}`;
  const side = peers.locatePanel(store, tabId) ?? target;
  const controller = peers.panelController(side);
  const existing = store.get(controller.tabById$, tabId);
  const pathChanged =
    existing != null &&
    "path" in existing.props &&
    existing.props.path !== filePath;
  const sameLine =
    existing != null &&
    line != null &&
    "line" in existing.props &&
    existing.props.line === line;
  controller.openTab(store, peers.editorComponent, {
    activate,
    defaultState: () => ({
      markdownMode: "markdown",
      markdownSourceScrollTop: null,
      pierreDraft: null,
      scrollTop: null,
      textDraft: null,
    }),
    icon: Icon,
    id: tabId,
    isPreview,
    kind: peers.editorKind,
    onBeforeClose: pathChanged ? undefined : existing?.onBeforeClose,
    props: { editor, hostId, line, path: filePath },
    resetState:
      !pathChanged && line != null
        ? (state: Record<string, unknown>) => ({
            ...state,
            markdownScrollSnapshot: undefined,
            markdownSourceScrollTop: null,
            scrollTop: null,
          })
        : undefined,
    onClose: (closeStore: any, panelId: unknown) => {
      peers!.syncOpenTabs(closeStore, {
        excludeTab: { panelId, tabId },
      });
      if (
        panelId === "right" &&
        closeStore.get(peers!.panelController("right").activeTab$)?.tabId ===
          tabId &&
        closeStore.get(peers!.isFullWidthAtom)
      ) {
        peers!.setFullWidth(closeStore, false);
        peers!.focusMain(closeStore, "main");
      }
    },
    title: peers.titleFromPath(filePath),
  });
  if (pathChanged || sameLine) controller.resetTabState(store, tabId);
  if (existing == null && syncOpenTabs) peers.syncOpenTabs(store);
  return true;
}
