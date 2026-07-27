// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hK`) / export `LA`.

export type OpenFileInPanelTabPeers = {
  AHi: (...args: unknown[]) => unknown;
  EWi: (...args: unknown[]) => unknown;
  Ef: (...args: unknown[]) => unknown;
  LE: (...args: unknown[]) => unknown;
  LWi: (...args: unknown[]) => unknown;
  Mar: (...args: unknown[]) => unknown;
  RWi: (...args: unknown[]) => unknown;
  TWi: (...args: unknown[]) => unknown;
  XFi: (...args: unknown[]) => unknown;
  XI: (...args: unknown[]) => unknown;
  YL: (...args: unknown[]) => unknown;
  ZI: (...args: unknown[]) => unknown;
  bWi: (...args: unknown[]) => unknown;
  cxo: (...args: unknown[]) => unknown;
  hK: (...args: unknown[]) => unknown;
  isPreview: (...args: unknown[]) => unknown;
  ixo: (...args: unknown[]) => unknown;
  kHi: (...args: unknown[]) => unknown;
  lxo: (...args: unknown[]) => unknown;
  onBeforeClose: (...args: unknown[]) => unknown;
  uxo: (...args: unknown[]) => unknown;
  yWi: (...args: unknown[]) => unknown;
};
let peers: OpenFileInPanelTabPeers | null = null;

/** Wire openFileInPanelTab peers once companions land. */
export function setOpenFileInPanelTabPeers(
  next: OpenFileInPanelTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `LA` / internal `hK`.
 */
export function openFileInPanelTab(e: unknown, t: unknown, n: unknown = {}) {
  if (peers == null) {
    throw new Error("openFileInPanelTab peers are not configured");
  }
  let {
      activate = true,
      controller,
      endLine,
      hostId = "local",
      icon,
      isPreview,
      line,
      onClose,
      resetTabState = false,
      syncOpenTabs = true,
      target = "right",
      tabId,
      title,
      workspaceRoot,
    } = n,
    _ =
      t == null
        ? workspaceRoot
        : (peers.yWi({
            filePath: t,
            roots: e.get(peers.XFi),
          }) ?? workspaceRoot),
    y = peers.cxo(t, hostId, tabId),
    b = controller ?? peers.XI(peers.ZI(e, y) ?? target),
    x = e.get(b.tabById$, y),
    S = peers.RWi(e),
    C = title ?? e.get(peers.LE).formatMessage(peers.uxo.openFileTabTitle),
    w = peers.YL(t ?? undefined),
    T =
      t == null
        ? C
        : peers.bWi({
            cwd: S,
            path: t,
            workspaceRoot: _,
          });
  t != null &&
    peers.AHi(e, {
      cwd: S,
      hostId,
      path: t,
    });
  let E = (e, t) => {
    peers.LWi(e, {
      excludeTab: {
        panelId: t,
        tabId: y,
      },
    });
    onClose?.();
  };
  b.openTab(e, peers.ixo, {
    contextMenuItems:
      t == null
        ? undefined
        : (e) => {
            return peers.kHi(e, {
              cwd: S,
              hostId,
              path: t,
            });
          },
    defaultState: peers.TWi,
    icon:
      icon ??
      peers.lxo.createElement(w, {
        className: "icon-xs shrink-0",
      }),
    isPreview,
    kind: `${peers.EWi}${hostId}`,
    props: {
      cwd: S,
      path: t,
      hostId,
      tabId: y,
      workspaceRoot: _ ?? null,
      onSelectFile: (e, n, r) => {
        peers.hK(e, n, {
          controller: b,
          hostId,
          isPreview: t == null ? false : r?.isPreview,
          workspaceRoot: _,
        });
        t ?? b.closeTab(e, y);
      },
      initialLine: line,
      initialEndLine: endLine,
    },
    resetState: (e) => {
      return {
        ...e,
        editor:
          e.editor == null
            ? e.editor
            : {
                ...e.editor,
                markdownScrollSnapshot: undefined,
                markdownSourceScrollTop: null,
                scrollTop: null,
              },
        scrollLeft: null,
        scrollTop: null,
      };
    },
    onMove: (e, n) => {
      return {
        props: {
          cwd: S,
          path: t,
          hostId,
          tabId: y,
          workspaceRoot: _ ?? null,
          onSelectFile: (e, r, i) => {
            peers.hK(e, r, {
              controller: n,
              hostId,
              isPreview: t == null ? false : i?.isPreview,
              workspaceRoot: _,
            });
            t ?? n.closeTab(e, y);
          },
          initialLine: line,
          initialEndLine: endLine,
        },
        onClose: E,
      };
    },
    onBeforeClose: x?.onBeforeClose,
    onClose: E,
    id: y,
    activate,
    title: t == null ? C : (title ?? peers.Ef(t)),
    tooltip: T,
  });
  resetTabState && b.resetTabState(e, y);
  t == null &&
    x == null &&
    peers.Mar(e, true, {
      animate: false,
    });
  syncOpenTabs && peers.LWi(e);
}
