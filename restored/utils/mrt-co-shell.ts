// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bUt`) / export `mrt`.

export type BindMrtCoShellPeers = {
  $Vt: (...args: unknown[]) => unknown;
  CHt: (...args: unknown[]) => unknown;
  HBt: (...args: unknown[]) => unknown;
  Hv: (...args: unknown[]) => unknown;
  Jv: (...args: unknown[]) => unknown;
  LHt: (...args: unknown[]) => unknown;
  MHt: (...args: unknown[]) => unknown;
  NHt: (...args: unknown[]) => unknown;
  RBt: (...args: unknown[]) => unknown;
  SHt: (...args: unknown[]) => unknown;
  Wv: (...args: unknown[]) => unknown;
  ZBt: (...args: unknown[]) => unknown;
  ZVt: (...args: unknown[]) => unknown;
  _Ht: (...args: unknown[]) => unknown;
  _Ut: (...args: unknown[]) => unknown;
  _Vt: (...args: unknown[]) => unknown;
  autoScrollEnabled: (...args: unknown[]) => unknown;
  bHt: (...args: unknown[]) => unknown;
  cHt: (...args: unknown[]) => unknown;
  cVt: (...args: unknown[]) => unknown;
  dHt: (...args: unknown[]) => unknown;
  dUt: (...args: unknown[]) => unknown;
  data: (...args: unknown[]) => unknown;
  eHt: (...args: unknown[]) => unknown;
  fHt: (...args: unknown[]) => unknown;
  gUt: (...args: unknown[]) => unknown;
  hHt: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  lHt: (...args: unknown[]) => unknown;
  mHt: (...args: unknown[]) => unknown;
  qBt: (...args: unknown[]) => unknown;
  qv: (...args: unknown[]) => unknown;
  rHt: (...args: unknown[]) => unknown;
  rect: (...args: unknown[]) => unknown;
  restoreFocus: (...args: unknown[]) => unknown;
  sHt: (...args: unknown[]) => unknown;
  sVt: (...args: unknown[]) => unknown;
  tHt: (...args: unknown[]) => unknown;
  uHt: (...args: unknown[]) => unknown;
  uUt: (...args: unknown[]) => unknown;
  vHt: (...args: unknown[]) => unknown;
  vUt: (...args: unknown[]) => unknown;
  xHt: (...args: unknown[]) => unknown;
  xVt: (...args: unknown[]) => unknown;
  xe: (...args: unknown[]) => unknown;
  yHt: (...args: unknown[]) => unknown;
  yUt: (...args: unknown[]) => unknown;
  zHt: (...args: unknown[]) => unknown;
};
let peers: BindMrtCoShellPeers | null = null;

/** Wire bindMrtCoShell peers once companions land. */
export function setBindMrtCoShellPeers(next: BindMrtCoShellPeers): void {
  peers = next;
}

/**
 * Bundle export `mrt` / internal `bUt`.
 */
export function bindMrtCoShell() {
  if (peers == null) {
    throw new Error("bindMrtCoShell peers are not configured");
  }
  return peers.qv.memo(function (props) {
    let {
        id,
        accessibility,
        autoScroll = true,
        children,
        sensors = peers.uUt,
        collisionDetection = peers.LHt,
        measuring,
        modifiers,
        ...rest
      } = props,
      [u, d] = peers.qv.useReducer(peers.yHt, undefined, peers.vHt),
      [f, p] = peers.sVt(),
      [m, h] = peers.qv.useState(peers.yUt.Uninitialized),
      g = m === peers.yUt.Initialized,
      {
        draggable: { active: _, nodes, translate },
        droppable: { containers },
      } = u,
      x = _ == null ? null : nodes.get(_),
      S = peers.qv.useRef({
        initial: null,
        translated: null,
      }),
      C = peers.qv.useMemo(() => {
        return _ == null
          ? null
          : {
              id: _,
              data: x?.data ?? peers.dUt,
              rect: S,
            };
      }, [_, x]),
      w = peers.qv.useRef(null),
      [T, E] = peers.qv.useState(null),
      [D, O] = peers.qv.useState(null),
      k = peers.RBt(rest, Object.values(rest)),
      A = peers.HBt("DndDescribedBy", id),
      j = peers.qv.useMemo(() => {
        return containers.getEnabled();
      }, [containers]),
      M = peers.SHt(measuring),
      { droppableRects, measureDroppableContainers, measuringScheduled } =
        peers.tHt(j, {
          dragging: g,
          dependencies: [translate.x, translate.y],
          config: M.droppable,
        }),
      I = peers.$Vt(nodes, _),
      L = peers.qv.useMemo(() => {
        return D ? peers.qBt(D) : null;
      }, [D]),
      R = peers.xe(),
      z = peers.rHt(I, M.draggable.measure);
    peers.CHt({
      activeNode: _ == null ? null : nodes.get(_),
      config: R.layoutShiftCompensation,
      initialRect: z,
      measure: M.draggable.measure,
    });
    let B = peers.sHt(I, M.draggable.measure, z),
      V = peers.sHt(I ? I.parentElement : null),
      H = peers.qv.useRef({
        activatorEvent: null,
        active: null,
        activeNode: I,
        collisionRect: null,
        collisions: null,
        droppableRects,
        draggableNodes: nodes,
        draggingNode: null,
        draggingNodeRect: null,
        droppableContainers: containers,
        over: null,
        scrollableAncestors: [],
        scrollAdjustedTranslate: null,
      }),
      U = containers.getNodeFor(H.current.over?.id),
      W = peers._Ht({
        measure: M.dragOverlay.measure,
      }),
      G = W.nodeRef.current ?? I,
      K = g ? (W.rect ?? B) : null,
      q = !!(W.nodeRef.current && W.rect),
      ee = peers.cHt(q ? null : B),
      te = peers.mHt(G ? peers.Hv(G) : null),
      ne = peers.lHt(g ? (U ?? I) : null),
      re = peers.hHt(ne),
      ie = peers.xHt(modifiers, {
        transform: {
          x: translate.x - ee.x,
          y: translate.y - ee.y,
          scaleX: 1,
          scaleY: 1,
        },
        activatorEvent: D,
        active: C,
        activeNodeRect: B,
        containerNodeRect: V,
        draggingNodeRect: K,
        over: H.current.over,
        overlayNodeRect: W.rect,
        scrollableAncestors: ne,
        scrollableAncestorRects: re,
        windowRect: te,
      }),
      ae = L ? peers.ZBt(L, translate) : null,
      oe = peers.uHt(ne),
      se = peers.dHt(oe),
      ce = peers.dHt(oe, [B]),
      le = peers.ZBt(ie, se),
      ue = K ? peers.zHt(K, ie) : null,
      de =
        C && ue
          ? collisionDetection({
              active: C,
              collisionRect: ue,
              droppableRects,
              droppableContainers: j,
              pointerCoordinates: ae,
            })
          : null,
      fe = peers._Vt(de, "id"),
      [pe, me] = peers.qv.useState(null),
      he = peers.xVt(q ? ie : peers.ZBt(ie, ce), pe?.rect ?? null, B),
      ge = peers.qv.useRef(null),
      _e = peers.qv.useCallback(
        (event, t) => {
          let { sensor, options } = t;
          if (w.current == null) return;
          let i = nodes.get(w.current);
          if (!i) return;
          let a = event.nativeEvent,
            o = new sensor({
              active: w.current,
              activeNode: i,
              event: a,
              options,
              context: H,
              onAbort(e) {
                if (!nodes.get(e)) return;
                let { onDragAbort } = k.current,
                  n = {
                    id: e,
                  };
                onDragAbort?.(n);
                f({
                  type: "onDragAbort",
                  event: n,
                });
              },
              onPending(e, t, n, r) {
                if (!nodes.get(e)) return;
                let { onDragPending } = k.current,
                  a = {
                    id: e,
                    constraint: t,
                    initialCoordinates: n,
                    offset: r,
                  };
                onDragPending?.(a);
                f({
                  type: "onDragPending",
                  event: a,
                });
              },
              onStart(e) {
                let t = w.current;
                if (t == null) return;
                let n = nodes.get(t);
                if (!n) return;
                let { onDragStart } = k.current,
                  i = {
                    activatorEvent: a,
                    active: {
                      id: t,
                      data: n.data,
                      rect: S,
                    },
                  };
                peers.MHt.unstable_batchedUpdates(() => {
                  onDragStart?.(i);
                  h(peers.yUt.Initializing);
                  d({
                    type: peers.Jv.DragStart,
                    initialCoordinates: e,
                    active: t,
                  });
                  f({
                    type: "onDragStart",
                    event: i,
                  });
                  E(ge.current);
                  O(a);
                });
              },
              onMove(e) {
                d({
                  type: peers.Jv.DragMove,
                  coordinates: e,
                });
              },
              onEnd: s(peers.Jv.DragEnd),
              onCancel: s(peers.Jv.DragCancel),
            });
          ge.current = o;
          function s(e) {
            return async function () {
              let { active, collisions, over, scrollAdjustedTranslate } =
                  H.current,
                o = null;
              if (active && scrollAdjustedTranslate) {
                let { cancelDrop } = k.current;
                o = {
                  activatorEvent: a,
                  active,
                  collisions,
                  delta: scrollAdjustedTranslate,
                  over,
                };
                e === peers.Jv.DragEnd &&
                  typeof cancelDrop == "function" &&
                  (await Promise.resolve(cancelDrop(o))) &&
                  (e = peers.Jv.DragCancel);
              }
              w.current = null;
              peers.MHt.unstable_batchedUpdates(() => {
                d({
                  type: e,
                });
                h(peers.yUt.Uninitialized);
                me(null);
                E(null);
                O(null);
                ge.current = null;
                let t = e === peers.Jv.DragEnd ? "onDragEnd" : "onDragCancel";
                if (o) {
                  let e = k.current[t];
                  e?.(o);
                  f({
                    type: t,
                    event: o,
                  });
                }
              });
            };
          }
        },
        [nodes],
      ),
      ve = peers.eHt(
        sensors,
        peers.qv.useCallback(
          (e, t) => {
            return (event, r) => {
              let i = event.nativeEvent,
                a = nodes.get(r);
              if (w.current !== null || !a || i.dndKit || i.defaultPrevented)
                return;
              let o = {
                active: a,
              };
              e(event, t.options, o) === true &&
                ((i.dndKit = {
                  capturedBy: t.sensor,
                }),
                (w.current = r),
                _e(event, t));
            };
          },
          [nodes, _e],
        ),
      );
    peers.fHt(sensors);
    peers.Wv(() => {
      B && m === peers.yUt.Initializing && h(peers.yUt.Initialized);
    }, [B, m]);
    peers.qv.useEffect(() => {
      let { onDragMove } = k.current,
        { active, activatorEvent, collisions, over } = H.current;
      if (!active || !activatorEvent) return;
      let a = {
        active,
        activatorEvent,
        collisions,
        delta: {
          x: le.x,
          y: le.y,
        },
        over,
      };
      peers.MHt.unstable_batchedUpdates(() => {
        onDragMove?.(a);
        f({
          type: "onDragMove",
          event: a,
        });
      });
    }, [le.x, le.y]);
    peers.qv.useEffect(() => {
      let {
        active,
        activatorEvent,
        collisions,
        droppableContainers,
        scrollAdjustedTranslate,
      } = H.current;
      if (
        !active ||
        w.current == null ||
        !activatorEvent ||
        !scrollAdjustedTranslate
      )
        return;
      let { onDragOver } = k.current,
        o = droppableContainers.get(fe),
        s =
          o && o.rect.current
            ? {
                id: o.id,
                rect: o.rect.current,
                data: o.data,
                disabled: o.disabled,
              }
            : null,
        c = {
          active,
          activatorEvent,
          collisions,
          delta: {
            x: scrollAdjustedTranslate.x,
            y: scrollAdjustedTranslate.y,
          },
          over: s,
        };
      peers.MHt.unstable_batchedUpdates(() => {
        me(s);
        onDragOver?.(c);
        f({
          type: "onDragOver",
          event: c,
        });
      });
    }, [fe]);
    peers.Wv(() => {
      H.current = {
        activatorEvent: D,
        active: C,
        activeNode: I,
        collisionRect: ue,
        collisions: de,
        droppableRects,
        draggableNodes: nodes,
        draggingNode: G,
        draggingNodeRect: K,
        droppableContainers: containers,
        over: pe,
        scrollableAncestors: ne,
        scrollAdjustedTranslate: le,
      };
      S.current = {
        initial: K,
        translated: ue,
      };
    }, [C, I, de, ue, nodes, G, K, droppableRects, containers, pe, ne, le]);
    peers.ZVt({
      ...R,
      delta: translate,
      draggingRect: ue,
      pointerCoordinates: ae,
      scrollableAncestors: ne,
      scrollableAncestorRects: re,
    });
    let ye = peers.qv.useMemo(() => {
        return {
          active: C,
          activeNode: I,
          activeNodeRect: B,
          activatorEvent: D,
          collisions: de,
          containerNodeRect: V,
          dragOverlay: W,
          draggableNodes: nodes,
          droppableContainers: containers,
          droppableRects,
          over: pe,
          measureDroppableContainers,
          scrollableAncestors: ne,
          scrollableAncestorRects: re,
          measuringConfiguration: M,
          measuringScheduled,
          windowRect: te,
        };
      }, [
        C,
        I,
        B,
        D,
        de,
        V,
        W,
        nodes,
        containers,
        droppableRects,
        pe,
        measureDroppableContainers,
        ne,
        re,
        M,
        measuringScheduled,
        te,
      ]),
      be = peers.qv.useMemo(() => {
        return {
          activatorEvent: D,
          activators: ve,
          active: C,
          activeNodeRect: B,
          ariaDescribedById: {
            draggable: A,
          },
          dispatch: d,
          draggableNodes: nodes,
          over: pe,
          measureDroppableContainers,
        };
      }, [D, ve, C, B, d, A, nodes, pe, measureDroppableContainers]);
    return peers.qv.createElement(
      peers.NHt.Provider,
      {
        value: p,
      },
      peers.qv.createElement(
        peers.gUt.Provider,
        {
          value: be,
        },
        peers.qv.createElement(
          peers._Ut.Provider,
          {
            value: ye,
          },
          peers.qv.createElement(
            peers.vUt.Provider,
            {
              value: he,
            },
            children,
          ),
        ),
        peers.qv.createElement(peers.bHt, {
          disabled: accessibility?.restoreFocus === false,
        }),
      ),
      peers.qv.createElement(peers.cVt, {
        ...accessibility,
        hiddenTextDescribedById: A,
      }),
    );
    function xe() {
      let e = T?.autoScrollEnabled === false,
        t =
          typeof autoScroll == "object"
            ? autoScroll.enabled === false
            : autoScroll === false,
        n = g && !e && !t;
      return typeof autoScroll == "object"
        ? {
            ...autoScroll,
            enabled: n,
          }
        : {
            enabled: n,
          };
    }
  });
}
