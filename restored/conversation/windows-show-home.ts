// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dj`) / export `ZZ`.

export type BindWindowsShowHomePeers = {
  $Pr: (...args: unknown[]) => unknown;
  APr: (...args: unknown[]) => unknown;
  BPr: (...args: unknown[]) => unknown;
  GPr: (...args: unknown[]) => unknown;
  HPr: (...args: unknown[]) => unknown;
  JPr: (...args: unknown[]) => unknown;
  Jf: (...args: unknown[]) => unknown;
  KPr: (...args: unknown[]) => unknown;
  LPr: (...args: unknown[]) => unknown;
  QPr: (...args: unknown[]) => unknown;
  RPr: (...args: unknown[]) => unknown;
  UPr: (...args: unknown[]) => unknown;
  VPr: (...args: unknown[]) => unknown;
  WPr: (...args: unknown[]) => unknown;
  XPr: (...args: unknown[]) => unknown;
  YPr: (...args: unknown[]) => unknown;
  Yf: (...args: unknown[]) => unknown;
  ZPr: (...args: unknown[]) => unknown;
  aFr: (...args: unknown[]) => unknown;
  cFr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eFr: (...args: unknown[]) => unknown;
  iFr: (...args: unknown[]) => unknown;
  iZe: (...args: unknown[]) => unknown;
  lj: (...args: unknown[]) => unknown;
  nFr: (...args: unknown[]) => unknown;
  oFr: (...args: unknown[]) => unknown;
  qPr: (...args: unknown[]) => unknown;
  rFr: (...args: unknown[]) => unknown;
  sFr: (...args: unknown[]) => unknown;
  tFr: (...args: unknown[]) => unknown;
  tZe: (...args: unknown[]) => unknown;
  zPr: (...args: unknown[]) => unknown;
  zf: (...args: unknown[]) => unknown;
};

let peers: BindWindowsShowHomePeers | null = null;

/** Wire bindWindowsShowHome peers once companions land. */
export function setBindWindowsShowHomePeers(next: BindWindowsShowHomePeers): void {
  peers = next;
}

/**
 * Bundle export `ZZ` / internal `dj`.
 */
export function bindWindowsShowHome() {
  if (peers == null) {
    throw new Error("bindWindowsShowHome peers are not configured");
  }

  return peers.e(() => {
    (peers.iZe(),
      peers.Yf(),
      peers.lj(),
      (LPr = () => {
        peers.tZe({
          type: `windows.show_home`,
          windowId: peers.zf,
        });
      }),
      (RPr = () => {
        peers.Jf.dispatchHostMessage({
          type: `new-projectless-task`,
        });
      }),
      (zPr = (e) => {
        peers.Jf.dispatchHostMessage({
          type: `archive-thread`,
          source: peers.e,
        });
      }),
      (BPr = () => {
        peers.Jf.dispatchHostMessage({
          type: `toggle-thread-pin`,
        });
      }),
      (VPr = () => {
        peers.Jf.dispatchMessage(`avatar-overlay-open`, {});
      }),
      (HPr = () => {
        peers.Jf.dispatchHostMessage({
          type: `navigate-to-route`,
          path: `/settings`,
        });
      }),
      (UPr = () => {
        peers.Jf.dispatchHostMessage({
          type: `navigate-to-route`,
          path: `/settings/mcp-settings`,
        });
      }),
      (WPr = () => {
        peers.Jf.dispatchHostMessage({
          type: `navigate-to-route`,
          path: `/settings/personalization`,
        });
      }),
      (GPr = () => {
        peers.Jf.dispatchHostMessage({
          type: `navigate-to-route`,
          path: `/settings/keyboard-shortcuts`,
        });
      }),
      (KPr = () => {
        peers.Jf.dispatchHostMessage({
          type: `navigate-to-route`,
          path: `/automations?automationMode=create`,
        });
      }),
      (qPr = () => {
        peers.Jf.dispatchHostMessage({
          type: `navigate-to-route`,
          path: `/skills`,
        });
      }),
      (JPr = () => {
        peers.APr();
      }),
      (YPr = () => {
        peers.tZe({
          type: `windows.sidebar.toggle`,
          windowId: peers.zf,
        });
      }),
      (XPr = () => {
        peers.Jf.dispatchHostMessage({
          type: `toggle-bottom-panel`,
        });
      }),
      (ZPr = () => {
        peers.tZe({
          type: `windows.terminal.toggle`,
          windowId: peers.zf,
        });
      }),
      (QPr = () => {
        peers.Jf.dispatchHostMessage({
          type: `toggle-browser-panel`,
          source: `manual`,
          initiator: `toggle_browser_command`,
        });
      }),
      ($Pr = () => {
        peers.Jf.dispatchHostMessage({
          type: `open-browser-tab`,
          source: `manual`,
          initiator: `toggle_browser_command`,
        });
      }),
      (eFr = () => {
        peers.tZe({
          type: `windows.review.toggle`,
          windowId: peers.zf,
        });
      }),
      (tFr = () => {
        peers.Jf.dispatchHostMessage({
          type: `toggle-file-tree-panel`,
        });
      }),
      (nFr = () => {
        peers.Jf.dispatchHostMessage({
          type: `find-in-thread`,
        });
      }),
      (rFr = () => {
        peers.Jf.dispatchHostMessage({
          type: `chat-search-command-menu`,
        });
      }),
      (iFr = () => {
        peers.Jf.dispatchHostMessage({
          type: `navigate-back`,
        });
      }),
      (aFr = () => {
        peers.Jf.dispatchHostMessage({
          type: `navigate-forward`,
        });
      }),
      (oFr = () => {
        peers.Jf.dispatchHostMessage({
          type: `log-out`,
        });
      }),
      (sFr = new Map([
        [`newTask`, peers.LPr],
        [`newProjectlessTask`, peers.RPr],
        [`archiveThread`, peers.zPr],
        [`toggleThreadPin`, peers.BPr],
        [`openAvatarOverlay`, peers.VPr],
        [`settings`, peers.HPr],
        [`mcpSettings`, peers.UPr],
        [`personalitySettings`, peers.WPr],
        [`keyboardShortcuts`, peers.GPr],
        [`manageTasks`, peers.KPr],
        [`openSkills`, peers.qPr],
        [`openFolder`, peers.JPr],
        [`toggleSidebar`, peers.YPr],
        [`toggleBottomPanel`, peers.XPr],
        [`toggleTerminal`, peers.ZPr],
        [`openBrowserTab`, peers.$Pr],
        [`toggleBrowserPanel`, peers.QPr],
        [`toggleSidePanel`, peers.eFr],
        [`toggleFileTreePanel`, peers.tFr],
        [`findInThread`, peers.nFr],
        [`searchChats`, peers.rFr],
        [`navigateBack`, peers.iFr],
        [`navigateForward`, peers.aFr],
        [`logOut`, peers.oFr],
      ])),
      (cFr = new Map()));
  });
}
