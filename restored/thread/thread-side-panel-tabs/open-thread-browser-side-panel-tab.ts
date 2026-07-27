// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SY`) / export `mE`.

export type OpenThreadBrowserSidePanelTabPeers = {
  $Co: (...args: unknown[]) => unknown;
  $Li: (...args: unknown[]) => unknown;
  DI: (...args: unknown[]) => unknown;
  LE: (...args: unknown[]) => unknown;
  QI: (...args: unknown[]) => unknown;
  R$o: (...args: unknown[]) => unknown;
  VCo: (...args: unknown[]) => unknown;
  Vir: (...args: unknown[]) => unknown;
  W$o: (...args: unknown[]) => unknown;
  XI: (...args: unknown[]) => unknown;
  Z$o: (...args: unknown[]) => unknown;
  cwo: (...args: unknown[]) => unknown;
  e1o: (...args: unknown[]) => unknown;
  fwo: (...args: unknown[]) => unknown;
  iL: (...args: unknown[]) => unknown;
  icon: (...args: unknown[]) => unknown;
  isWaitingForResponse: (...args: unknown[]) => unknown;
  kI: (...args: unknown[]) => unknown;
  lT: (...args: unknown[]) => unknown;
  qJn: (...args: unknown[]) => unknown;
  tab: (...args: unknown[]) => unknown;
  target: (...args: unknown[]) => unknown;
  title: (...args: unknown[]) => unknown;
  xT: (...args: unknown[]) => unknown;
  yT: (...args: unknown[]) => unknown;
  yYn: (...args: unknown[]) => unknown;

  Jf: any;
  Rj: any;
  _T: any;
  d1o: any;};

let peers: OpenThreadBrowserSidePanelTabPeers | null = null;

/** Wire openThreadBrowserSidePanelTab peers once companions land. */
export function setOpenThreadBrowserSidePanelTabPeers(next: OpenThreadBrowserSidePanelTabPeers): void {
  peers = next;
}

/**
 * Bundle export `mE` / internal `SY`.
 */
export function openThreadBrowserSidePanelTab(e: unknown, t: unknown= !0, n: unknown= {}, r: unknown= `right`) {
  if (peers == null) {
    throw new Error("openThreadBrowserSidePanelTab peers are not configured");
  }
  let i = peers.yT(e),
    a = n.browserConversationId ?? i;
  if (a == null) return !1;
  let o = peers.Z$o(e, a, n.browserTabId);
  peers.Rj.getBrowserStorageId(a, o);
  let s = peers.iL(e, a, o, r);
  if (s == null && !e.get(peers.Vir)) return !1;
  let c = s?.target ?? r;
  n.browserTransferSourceConversationId != null && peers.Rj.reassociateTabState(n.browserTransferSourceConversationId, n.browserTransferSourceBrowserTabId ?? peers.xT(n.browserTransferSourceConversationId), a, o, {
    removeSourceBrowserStateWhenEmpty: peers.qJn(e, n.browserTransferSourceConversationId)
  });
  let l = e.get(peers.LE).formatMessage({
      id: `thread.sidePanel.emptyBrowserTab`,
      defaultMessage: `New tab`,
      description: `Title for an empty browser tab in the task side panel`
    }),
    u = peers.Rj.getSnapshot(a, o),
    d = peers.fwo({
      browserSnapshot: u,
      browserTabFallbackTitle: l,
      isBrowserUseActive: peers.Rj.isBrowserUseActive(a, o),
      isBrowserUseTab: peers.Rj.isBrowserUseTab(a, o)
    }),
    f = peers.XI(c),
    p = d.preserveExistingChrome ? s?.tab ?? e.get(f.tabById$, o) : null,
    m = p?.title ?? d.title,
    h = p?.icon ?? (0, peers.d1o.createElement)(peers.VCo, {
      faviconUrl: d.faviconUrl,
      isLoading: d.isLoading,
      isWaitingForResponse: u?.isWaitingForResponse === !0
    }),
    g = n.browserHostDisplayName ?? e.get(peers.kI).display_name,
    _ = n.cwd ?? e.get(peers.DI);
  return f.openTab(e, peers.R$o, {
    contextMenuItems: peers.e1o({
      browserConversationId: a,
      browserHostDisplayName: g,
      browserTabId: o,
      cwd: _,
      target: c
    }),
    highlightedIcon: (0, peers.d1o.createElement)(peers.cwo, {
      className: `size-4`
    }),
    icon: h,
    insertAfterTabId: n.insertAfterTabId,
    isHighlighted: d.isHighlighted,
    openedInBackground: !t,
    openerTabId: n.openerTabId,
    trailingContent: d.isCapturingUserMedia || d.isAudible ? (0, peers.d1o.createElement)(peers.$Co, {
      isAudible: d.isAudible,
      isCapturingUserMedia: d.isCapturingUserMedia
    }) : void 0,
    props: {
      browserConversationId: a,
      browserHostDisplayName: g,
      browserTabId: o,
      cwd: _,
      target: c
    },
    id: o,
    activate: t,
    hasExternalFocus: () => peers.W$o(o),
    kind: peers._T.BROWSER,
    requiresWorkspaceReady: !1,
    onActivate: () => {
      peers.$Li(e, a, o);
    },
    onClose: () => {
      let t = peers.Rj.getPagePersistence(a, o);
      peers.yYn(e, a, o), e.get(peers.lT) || peers.Rj.removeTab(a, o), peers.Jf.dispatchMessage(`browser-sidebar-command`, {
        pagePersistence: t,
        conversationId: a,
        browserTabId: o,
        command: {
          type: `close-tab`
        }
      });
    },
    onMove: (e, t) => ({
      contextMenuItems: peers.e1o({
        browserConversationId: a,
        browserHostDisplayName: g,
        browserTabId: o,
        cwd: _,
        target: t.panelId
      }),
      props: {
        browserConversationId: a,
        browserHostDisplayName: g,
        browserTabId: o,
        cwd: _,
        target: t.panelId
      }
    }),
    title: m
  }), t && peers.QI(e, c), !0;
}
