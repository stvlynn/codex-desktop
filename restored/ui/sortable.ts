// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wk`) / export `L1`.

export type SortablePeers = {
  $v: (...args: unknown[]) => unknown;
  ASr: (...args: unknown[]) => unknown;
  BSr: (...args: unknown[]) => unknown;
  Ck: (...args: unknown[]) => unknown;
  FSr: (...args: unknown[]) => unknown;
  GSr: (...args: unknown[]) => unknown;
  Gv: (...args: unknown[]) => unknown;
  HSr: (...args: unknown[]) => unknown;
  IHt: (...args: unknown[]) => unknown;
  ISr: (...args: unknown[]) => unknown;
  JSr: (...args: unknown[]) => unknown;
  KSr: (...args: unknown[]) => unknown;
  Kv: (...args: unknown[]) => unknown;
  LSr: (...args: unknown[]) => unknown;
  PSr: (...args: unknown[]) => unknown;
  QBt: (...args: unknown[]) => unknown;
  RSr: (...args: unknown[]) => unknown;
  Sk: (...args: unknown[]) => unknown;
  USr: (...args: unknown[]) => unknown;
  VSr: (...args: unknown[]) => unknown;
  WSr: (...args: unknown[]) => unknown;
  YSr: (...args: unknown[]) => unknown;
  _Vt: (...args: unknown[]) => unknown;
  current: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ey: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  jVt: (...args: unknown[]) => unknown;
  kSr: (...args: unknown[]) => unknown;
  node: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  qSr: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  wSr: (...args: unknown[]) => unknown;
  zSr: (...args: unknown[]) => unknown;
};

let peers: SortablePeers | null = null;

/** Wire sortable peers once companions land. */
export function setSortablePeers(next: SortablePeers): void {
  peers = next;
}

/**
 * Bundle export `L1` / internal `wk`.
 */
export function sortable() {
  if (peers == null) {
    throw new Error("sortable peers are not configured");
  }

  return peers.e(() => {
    ((Sk = peers.r(peers.o())),
      peers.ey(),
      peers.Kv(),
      (ISr = {
        scaleX: 1,
        scaleY: 1,
      }),
      (LSr = (e) => {
        let {
            rects: t,
            activeNodeRect: n,
            activeIndex: r,
            overIndex: i,
            index: a,
          } = peers.e,
          o = t[peers.r] ?? n;
        if (!peers.o) return null;
        let s = peers.kSr(t, a, peers.r);
        if (a === peers.r) {
          let e = t[i];
          return peers.e
            ? {
                x:
                  peers.r < i
                    ? peers.e.left +
                      peers.e.width -
                      (peers.o.left + peers.o.width)
                    : peers.e.left - peers.o.left,
                y: 0,
                ...peers.ISr,
              }
            : null;
        }
        return a > peers.r && a <= i
          ? {
              x: -peers.o.width - s,
              y: 0,
              ...peers.ISr,
            }
          : a < peers.r && a >= i
            ? {
                x: peers.o.width + s,
                y: 0,
                ...peers.ISr,
              }
            : {
                x: 0,
                y: 0,
                ...peers.ISr,
              };
      }),
      (RSr = (e) => {
        let { rects: t, activeIndex: n, overIndex: r, index: i } = peers.e,
          a = peers.wSr(t, peers.r, n),
          o = t[i],
          s = a[i];
        return !s || !peers.o
          ? null
          : {
              x: s.left - peers.o.left,
              y: s.top - peers.o.top,
              scaleX: s.width / peers.o.width,
              scaleY: s.height / peers.o.height,
            };
      }),
      (zSr = {
        scaleX: 1,
        scaleY: 1,
      }),
      (Ck = (e) => {
        let {
            activeIndex: t,
            activeNodeRect: n,
            index: r,
            rects: i,
            overIndex: a,
          } = peers.e,
          o = i[t] ?? n;
        if (!peers.o) return null;
        if (peers.r === t) {
          let e = i[a];
          return peers.e
            ? {
                x: 0,
                y:
                  t < a
                    ? peers.e.top +
                      peers.e.height -
                      (peers.o.top + peers.o.height)
                    : peers.e.top - peers.o.top,
                ...peers.zSr,
              }
            : null;
        }
        let s = peers.ASr(i, peers.r, t);
        return peers.r > t && peers.r <= a
          ? {
              x: 0,
              y: -peers.o.height - s,
              ...peers.zSr,
            }
          : peers.r < t && peers.r >= a
            ? {
                x: 0,
                y: peers.o.height + s,
                ...peers.zSr,
              }
            : {
                x: 0,
                y: 0,
                ...peers.zSr,
              };
      }),
      (BSr = `Sortable`),
      (VSr = peers.Sk.createContext({
        activeIndex: -1,
        containerId: peers.BSr,
        disableTransforms: !1,
        items: [],
        overIndex: -1,
        useDragOverlay: !1,
        sortedRects: [],
        strategy: peers.RSr,
        disabled: {
          draggable: !1,
          droppable: !1,
        },
      })),
      (HSr = (e) => {
        let { id: t, items: n, activeIndex: r, overIndex: i } = peers.e;
        return peers.wSr(n, peers.r, i).indexOf(t);
      }),
      (USr = (e) => {
        let {
          containerId: t,
          isSorting: n,
          wasDragging: r,
          index: i,
          items: a,
          newIndex: o,
          previousItems: s,
          previousContainerId: c,
          transition: l,
        } = peers.e;
        return !l || !peers.r || (s !== a && i === peers.o)
          ? !1
          : n
            ? !0
            : peers.o !== i && t === c;
      }),
      (WSr = {
        duration: 200,
        easing: `ease`,
      }),
      (GSr = `transform`),
      (KSr = peers.Gv.Transition.toString({
        property: peers.GSr,
        duration: 0,
        easing: `linear`,
      })),
      (qSr = {
        roleDescription: `sortable`,
      }),
      (JSr = [peers.$v.Down, peers.$v.Right, peers.$v.Up, peers.$v.Left]),
      (YSr = (e, t) => {
        let {
          context: {
            active: n,
            collisionRect: r,
            droppableRects: i,
            droppableContainers: a,
            over: o,
            scrollableAncestors: s,
          },
        } = t;
        if (peers.JSr.includes(peers.e.code)) {
          if ((peers.e.preventDefault(), !n || !peers.r)) return;
          let t = [];
          a.getEnabled().forEach((n) => {
            if (!n || (n != null && n.disabled)) return;
            let a = i.get(n.id);
            if (a)
              switch (peers.e.code) {
                case peers.$v.Down:
                  peers.r.top < a.top && t.push(n);
                  break;
                case peers.$v.Up:
                  peers.r.top > a.top && t.push(n);
                  break;
                case peers.$v.Left:
                  peers.r.left > a.left && t.push(n);
                  break;
                case peers.$v.Right:
                  peers.r.left < a.left && t.push(n);
                  break;
              }
          });
          let c = peers.IHt({
              active: n,
              collisionRect: peers.r,
              droppableRects: i,
              droppableContainers: t,
              pointerCoordinates: null,
            }),
            l = peers._Vt(c, `id`);
          if ((l === peers.o?.id && c.length > 1 && (l = c[1].id), l != null)) {
            let e = a.get(n.id),
              t = a.get(l),
              o = t ? i.get(t.id) : null,
              c = t?.node.current;
            if (c && peers.o && peers.e && t) {
              let n = peers.jVt(c).some((e, t) => s[t] !== peers.e),
                i = peers.PSr(peers.e, t),
                a = peers.FSr(peers.e, t),
                l =
                  n || !i
                    ? {
                        x: 0,
                        y: 0,
                      }
                    : {
                        x: a ? peers.r.width - peers.o.width : 0,
                        y: a ? peers.r.height - peers.o.height : 0,
                      },
                u = {
                  x: peers.o.left,
                  y: peers.o.top,
                };
              return l.x && l.y ? u : peers.QBt(u, l);
            }
          }
        }
      }));
  });
}
