// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `K$o`) / export `hE`.

export type OpenThreadBrowserSidePanelTabWithPendingStatePeers = {
  $$o: (...args: unknown[]) => unknown;
  Aj: (...args: unknown[]) => unknown;
  OI: (...args: unknown[]) => unknown;
  SY: (...args: unknown[]) => unknown;
  Z$o: (...args: unknown[]) => unknown;
  iL: (...args: unknown[]) => unknown;
  jj: (...args: unknown[]) => unknown;
  lT: (...args: unknown[]) => unknown;
  q$o: (...args: unknown[]) => unknown;
  xYn: (...args: unknown[]) => unknown;
  yT: (...args: unknown[]) => unknown;

  Jf: any;
  Rj: any;
};

let peers: OpenThreadBrowserSidePanelTabWithPendingStatePeers | null = null;

/** Wire openThreadBrowserSidePanelTabWithPendingState peers once companions land. */
export function setOpenThreadBrowserSidePanelTabWithPendingStatePeers(next: OpenThreadBrowserSidePanelTabWithPendingStatePeers): void {
  peers = next;
}

/**
 * Bundle export `hE` / internal `K$o`.
 */
export function openThreadBrowserSidePanelTabWithPendingState(
  e: unknown,
  {
    activate: t = !0,
    browserConversationId: n,
    browserHostDisplayName: r,
    browserTabId: i,
    cwd: a,
    hostId: o,
    initialUrl: s,
    initiator: c,
    insertAfterTabId: l,
    openerTabId: u,
    restore: d,
    source: f,
    target: p = `right`,
  }: {
    activate?: unknown;
    browserConversationId?: unknown;
    browserHostDisplayName?: unknown;
    browserTabId?: unknown;
    cwd?: unknown;
    hostId?: unknown;
    initialUrl?: unknown;
    initiator?: unknown;
    insertAfterTabId?: unknown;
    openerTabId?: unknown;
    restore?: unknown;
    source?: unknown;
    target?: unknown;
  } = {},
) {
  if (peers == null) {
    throw new Error(
      "openThreadBrowserSidePanelTabWithPendingState peers are not configured",
    );
  }
  let m = n ?? peers.yT(e);
  if (m == null) return null;
  let h = peers.Z$o(e, m, i);
  if (
    (!e.get(peers.lT) &&
      !peers.xYn(e, m, h) &&
      peers.iL(e, m, h) == null &&
      peers.Rj.removeTab(m, h),
    d != null && peers.q$o(m, h, d),
    peers.Aj(m, h, {
      initialUrl: s,
      initiator: c,
      source: f,
    }),
    !peers.SY(
      e,
      t,
      {
        browserConversationId: m,
        browserHostDisplayName: r,
        browserTabId: h,
        cwd: a,
        insertAfterTabId: l,
        openerTabId: u,
      },
      p,
    ))
  )
    return (peers.jj(m, h), null);
  let g = t && p === `right` ? (peers.$$o(e, m, h) ?? h) : h;
  if (
    (d != null && g !== h && peers.q$o(m, g, d),
    g !== h &&
      (peers.jj(m, h),
      peers.Aj(m, g, {
        initialUrl: s,
        initiator: c,
        source: f,
      })),
    s != null)
  ) {
    let t = peers.Rj.getPagePersistence(m, g);
    peers.Jf.dispatchMessage(`browser-sidebar-command`, {
      pagePersistence: t,
      browserTabId: g,
      conversationId: m,
      command: {
        hostId: o ?? e.get(peers.OI),
        initiator: c ?? `toggle_browser_command`,
        source: f ?? `manual`,
        type: `navigate`,
        url: s,
      },
    });
  }
  return g;
}
