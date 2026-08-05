// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uM`) / export `aZ`.

export type BindAppShellLayoutPeers = {
  AWr: (...args: unknown[]) => unknown;
  CWr: (...args: unknown[]) => unknown;
  DWr: (...args: unknown[]) => unknown;
  EWr: (...args: unknown[]) => unknown;
  GWr: (...args: unknown[]) => unknown;
  HWr: (...args: unknown[]) => unknown;
  JWr: (...args: unknown[]) => unknown;
  MWr: (...args: unknown[]) => unknown;
  OWr: (...args: unknown[]) => unknown;
  SWr: (...args: unknown[]) => unknown;
  TWr: (...args: unknown[]) => unknown;
  _Wr: (...args: unknown[]) => unknown;
  bWr: (...args: unknown[]) => unknown;
  gWr: (...args: unknown[]) => unknown;
  hWr: (...args: unknown[]) => unknown;
  jWr: (...args: unknown[]) => unknown;
  kWr: (...args: unknown[]) => unknown;
  lM: (...args: unknown[]) => unknown;
  mWr: (...args: unknown[]) => unknown;
  pWr: (...args: unknown[]) => unknown;
  vWr: (...args: unknown[]) => unknown;
  wWr: (...args: unknown[]) => unknown;
  xWr: (...args: unknown[]) => unknown;
  yWr: (...args: unknown[]) => unknown;
  zWr: (...args: unknown[]) => unknown;
};

let peers: BindAppShellLayoutPeers | null = null;

/** Wire bindAppShellLayout peers once companions land. */
export function setBindAppShellLayoutPeers(
  next: BindAppShellLayoutPeers,
): void {
  peers = next;
}

/**
 * Bundle export `aZ` / internal `uM`.
 */
export function bindAppShellLayout() {
  if (peers == null) {
    throw new Error("bindAppShellLayout peers are not configured");
  }

  return {
    Root: (0, peers.lM.memo)(peers.MWr),
    LeftPanel: peers.pWr,
    Content: (0, peers.lM.memo)(peers.AWr),
    Header: (0, peers.lM.memo)(peers.mWr),
    HeaderAction: (0, peers.lM.memo)(peers.hWr),
    HeaderContextMenuItem: (0, peers.lM.memo)(peers.gWr),
    HeaderToolbar: (0, peers.lM.memo)(peers.JWr),
    MainContentLayout: (0, peers.lM.memo)(peers.jWr),
    BottomPanel: peers.wWr,
    BottomPanelTabs: (0, peers.lM.memo)(peers.TWr),
    BottomPanelTabsEmptyState: (0, peers.lM.memo)(peers.EWr),
    BottomPanelTabListAfter: (0, peers.lM.memo)(peers.DWr),
    BottomPanelTabListAfterSticky: (0, peers.lM.memo)(peers.OWr),
    BottomPanelOutlet: (0, peers.lM.memo)(peers.kWr),
    RightPanel: peers._Wr,
    RightPanelTabs: (0, peers.lM.memo)(peers.vWr),
    RightPanelTabsEmptyState: (0, peers.lM.memo)(peers.yWr),
    RightPanelTabListAfter: (0, peers.lM.memo)(peers.xWr),
    RightPanelTabListAfterSticky: (0, peers.lM.memo)(peers.CWr),
    RightPanelTabListBefore: (0, peers.lM.memo)(peers.SWr),
    RightPanelOutlet: (0, peers.lM.memo)(peers.bWr),
    DetailPanel: (0, peers.lM.memo)(peers.HWr),
    DetailPanelLoading: (0, peers.lM.memo)(peers.GWr),
    DetailPanelOutlet: (0, peers.lM.memo)(peers.zWr),
  };
}

/**
 * `aZ` is consumed elsewhere as a compound-component namespace
 * (`AppShellLayout.HeaderAction`, `AppShellLayout.Root`, …), not as a call —
 * proxy each property access through `bindAppShellLayout()` so the peers
 * indirection stays lazy until a companion is actually read.
 */
export const AppShellLayout: ReturnType<typeof bindAppShellLayout> = new Proxy(
  {} as ReturnType<typeof bindAppShellLayout>,
  {
    get(_target, prop) {
      return bindAppShellLayout()[
        prop as keyof ReturnType<typeof bindAppShellLayout>
      ];
    },
  },
);
