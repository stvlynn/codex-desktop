// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bk`) / export `F1`.

export type SortableContextPeers = {
  BSr: (...args: unknown[]) => unknown;
  DSr: (...args: unknown[]) => unknown;
  HBt: (...args: unknown[]) => unknown;
  OSr: (...args: unknown[]) => unknown;
  RSr: (...args: unknown[]) => unknown;
  Sk: (...args: unknown[]) => unknown;
  THt: (...args: unknown[]) => unknown;
  TSr: (...args: unknown[]) => unknown;
  VSr: (...args: unknown[]) => unknown;
  Wv: (...args: unknown[]) => unknown;
};

let peers: SortableContextPeers | null = null;

/** Wire SortableContext peers once companions land. */
export function setSortableContextPeers(next: SortableContextPeers): void {
  peers = next;
}

/**
 * Bundle export `F1` / internal `bk`.
 */
export function SortableContext(e: unknown) {
  if (peers == null) {
    throw new Error("SortableContext peers are not configured");
  }

  let {
      children: t,
      id: n,
      items: r,
      strategy: i = peers.RSr,
      disabled: a = !1,
    } = e,
    {
      active: o,
      dragOverlay: s,
      droppableRects: c,
      over: l,
      measureDroppableContainers: u,
    } = peers.THt(),
    d = peers.HBt(peers.BSr, n),
    f = s.rect !== null,
    p = (0, peers.Sk.useMemo)(
      () => r.map((e) => (typeof e == `object` && `id` in e ? e.id : e)),
      [r],
    ),
    m = o != null,
    h = o ? p.indexOf(o.id) : -1,
    g = l ? p.indexOf(l.id) : -1,
    _ = (0, peers.Sk.useRef)(p),
    v = !peers.DSr(p, _.current),
    y = (g !== -1 && h === -1) || v,
    b = peers.OSr(a);
  (peers.Wv(() => {
    v && m && u(p);
  }, [v, p, m, u]),
    (0, peers.Sk.useEffect)(() => {
      _.current = p;
    }, [p]));
  let x = (0, peers.Sk.useMemo)(
    () => ({
      activeIndex: h,
      containerId: d,
      disabled: b,
      disableTransforms: y,
      items: p,
      overIndex: g,
      useDragOverlay: f,
      sortedRects: peers.TSr(p, c),
      strategy: i,
    }),
    [h, d, b.draggable, b.droppable, y, p, g, c, f, i],
  );
  return peers.Sk.createElement(
    peers.VSr.Provider,
    {
      value: x,
    },
    t,
  );
}
