// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `EHt`) / export `Crt`.

export type UseDroppableResizeObserverPeers = {
  BBt: (...args: unknown[]) => unknown;
  HBt: (...args: unknown[]) => unknown;
  Jv: (...args: unknown[]) => unknown;
  RBt: (...args: unknown[]) => unknown;
  TUt: (...args: unknown[]) => unknown;
  aHt: (...args: unknown[]) => unknown;
  clearTimeout: (...args: unknown[]) => unknown;
  gUt: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  qv: (...args: unknown[]) => unknown;
  setTimeout: (...args: unknown[]) => unknown;
  wUt: (...args: unknown[]) => unknown;
};

let peers: UseDroppableResizeObserverPeers | null = null;

/** Wire useDroppableResizeObserver peers once companions land. */
export function setUseDroppableResizeObserverPeers(next: UseDroppableResizeObserverPeers): void {
  peers = next;
}

/**
 * Bundle export `Crt` / internal `EHt`.
 */
export function useDroppableResizeObserver(e: unknown) {
  if (peers == null) {
    throw new Error("useDroppableResizeObserver peers are not configured");
  }

  let { data: t, disabled: n = !1, id: r, resizeObserverConfig: i } = e,
    a = peers.HBt(peers.wUt),
    {
      active: o,
      dispatch: s,
      over: c,
      measureDroppableContainers: l,
    } = (0, peers.qv.useContext)(peers.gUt),
    u = (0, peers.qv.useRef)({
      disabled: n,
    }),
    d = (0, peers.qv.useRef)(!1),
    f = (0, peers.qv.useRef)(null),
    p = (0, peers.qv.useRef)(null),
    {
      disabled: m,
      updateMeasurementsFor: h,
      timeout: g,
    } = {
      ...peers.TUt,
      ...i,
    },
    _ = peers.RBt(h ?? r),
    v = peers.aHt({
      callback: (0, peers.qv.useCallback)(() => {
        if (!d.current) {
          d.current = !0;
          return;
        }
        (p.current != null && peers.clearTimeout(p.current),
          (p.current = peers.setTimeout(() => {
            (l(Array.isArray(_.current) ? _.current : [_.current]),
              (p.current = null));
          }, g)));
      }, [g]),
      disabled: m || !o,
    }),
    [y, b] = peers.BBt(
      (0, peers.qv.useCallback)(
        (e, t) => {
          v && (t && (v.unobserve(t), (d.current = !1)), e && v.observe(e));
        },
        [v],
      ),
    ),
    x = peers.RBt(t);
  return (
    (0, peers.qv.useEffect)(() => {
      !v ||
        !y.current ||
        (v.disconnect(), (d.current = !1), v.observe(y.current));
    }, [y, v]),
    (0, peers.qv.useEffect)(
      () => (
        s({
          type: peers.Jv.RegisterDroppable,
          element: {
            id: r,
            key: a,
            disabled: n,
            node: y,
            rect: f,
            data: x,
          },
        }),
        () =>
          s({
            type: peers.Jv.UnregisterDroppable,
            key: a,
            id: r,
          })
      ),
      [r],
    ),
    (0, peers.qv.useEffect)(() => {
      n !== u.current.disabled &&
        (s({
          type: peers.Jv.SetDroppableDisabled,
          id: r,
          key: a,
          disabled: n,
        }),
        (u.current.disabled = n));
    }, [r, a, n, s]),
    {
      active: o,
      rect: f,
      isOver: c?.id === r,
      node: y,
      over: c,
      setNodeRef: b,
    }
  );
}
