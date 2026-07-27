// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `PUt`) / export `hrt`.

export type BindDeferredUiHrtPeers = {
  DHt: (...args: unknown[]) => unknown;
  OHt: (...args: unknown[]) => unknown;
  THt: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  jHt: (...args: unknown[]) => unknown;
  kHt: (...args: unknown[]) => unknown;
  kUt: (...args: unknown[]) => unknown;
  nHt: (...args: unknown[]) => unknown;
  qv: (...args: unknown[]) => unknown;
  vUt: (...args: unknown[]) => unknown;
  xHt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiHrtPeers | null = null;

/** Wire bindDeferredUiHrt peers once companions land. */
export function setBindDeferredUiHrtPeers(next: BindDeferredUiHrtPeers): void {
  peers = next;
}

/**
 * Bundle export `hrt` / internal `PUt`.
 */
export function bindDeferredUiHrt() {
  if (peers == null) {
    throw new Error("bindDeferredUiHrt peers are not configured");
  }

  return peers.qv.memo((e) => {
    let {
        adjustScale: t = !1,
        children: n,
        dropAnimation: r,
        style: i,
        transition: a,
        modifiers: o,
        wrapperElement: s = `div`,
        className: c,
        zIndex: l = 999,
      } = e,
      {
        activatorEvent: u,
        active: d,
        activeNodeRect: f,
        containerNodeRect: p,
        draggableNodes: m,
        droppableContainers: h,
        dragOverlay: g,
        over: _,
        measuringConfiguration: v,
        scrollableAncestors: y,
        scrollableAncestorRects: b,
        windowRect: x,
      } = peers.THt(),
      S = (0, peers.qv.useContext)(peers.vUt),
      C = peers.jHt(d?.id),
      w = peers.xHt(o, {
        activatorEvent: u,
        active: d,
        activeNodeRect: f,
        containerNodeRect: p,
        draggingNodeRect: g.rect,
        over: _,
        overlayNodeRect: g.rect,
        scrollableAncestors: y,
        scrollableAncestorRects: b,
        transform: S,
        windowRect: x,
      }),
      T = peers.nHt(f),
      E = peers.kHt({
        config: r,
        draggableNodes: m,
        droppableContainers: h,
        measuringConfiguration: v,
      }),
      D = T ? g.setRef : void 0;
    return peers.qv.createElement(
      peers.OHt,
      null,
      peers.qv.createElement(
        peers.DHt,
        {
          animation: E,
        },
        d && C
          ? peers.qv.createElement(
              peers.kUt,
              {
                key: C,
                id: d.id,
                ref: D,
                as: s,
                activatorEvent: u,
                adjustScale: t,
                className: c,
                transition: a,
                rect: T,
                style: {
                  zIndex: l,
                  ...i,
                },
                transform: w,
              },
              n,
            )
          : null,
      ),
    );
  });
}
