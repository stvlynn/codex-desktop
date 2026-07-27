// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `who`) / export `nj`.

export type OpenFileInRightPanelTabPeers = {
  BD: (...args: unknown[]) => unknown;
  Ef: (...args: unknown[]) => unknown;
  S2i: (...args: unknown[]) => unknown;
  Tho: (...args: unknown[]) => unknown;
  VD: (...args: unknown[]) => unknown;
  XI: (...args: unknown[]) => unknown;
  YL: (...args: unknown[]) => unknown;
  ZI: (...args: unknown[]) => unknown;
  _ho: (...args: unknown[]) => unknown;
  onBeforeClose: (...args: unknown[]) => unknown;
  tabId: (...args: unknown[]) => unknown;
  xho: (...args: unknown[]) => unknown;
  yho: (...args: unknown[]) => unknown;
};
let peers: OpenFileInRightPanelTabPeers | null = null;

/** Wire openFileInRightPanelTab peers once companions land. */
export function setOpenFileInRightPanelTabPeers(
  next: OpenFileInRightPanelTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `nj` / internal `who`.
 */
export function openFileInRightPanelTab(
  e: unknown,
  t: unknown,
  {
    activate = true,
    hostId,
    isPreview,
    line,
    syncOpenTabs = true,
    tabId,
    target = "right",
  }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("openFileInRightPanelTab peers are not configured");
  }
  let l = peers.S2i(t);
  if (l == null) return false;
  let u = peers.YL(t),
    d = tabId ?? `text-editor:${hostId}:${t}`,
    f = peers.XI(peers.ZI(e, d) ?? target),
    p = e.get(f.tabById$, d),
    m = p != null && "path" in p.props && p.props.path !== t,
    h = p != null && line != null && "line" in p.props && p.props.line === line;
  return (
    f.openTab(e, peers._ho, {
      activate,
      defaultState: () => {
        return {
          markdownMode: "markdown",
          markdownSourceScrollTop: null,
          pierreDraft: null,
          scrollTop: null,
          textDraft: null,
        };
      },
      icon: peers.Tho.createElement(u, {
        className: "icon-xs shrink-0",
      }),
      id: d,
      isPreview,
      kind: peers.yho,
      onBeforeClose: m ? undefined : p?.onBeforeClose,
      props: {
        editor: l,
        hostId,
        line,
        path: t,
      },
      resetState:
        !m && line != null
          ? (e) => {
              return {
                ...e,
                markdownScrollSnapshot: undefined,
                markdownSourceScrollTop: null,
                scrollTop: null,
              };
            }
          : undefined,
      onClose: (e, t) => {
        peers.xho(e, {
          excludeTab: {
            panelId: t,
            tabId: d,
          },
        });
        t === "right" &&
          e.get(peers.XI(t).activeTab$)?.tabId === d &&
          e.get(peers.VD) &&
          (e.set(peers.VD, false), peers.BD(e, "main"));
      },
      title: peers.Ef(t),
    }),
    (m || h) && f.resetTabState(e, d),
    p == null && syncOpenTabs && peers.xho(e),
    true
  );
}
