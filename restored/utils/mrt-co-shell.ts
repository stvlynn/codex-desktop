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
      [u, alpha] = peers.qv.useReducer(peers.yHt, undefined, peers.vHt),
      [bravo, p] = peers.sVt(),
      [copper, echo] = peers.qv.useState(peers.yUt.Uninitialized),
      falcon = copper === peers.yUt.Initialized,
      {
        draggable: { active: gamma, nodes, translate },
        droppable: { containers },
      } = u,
      harbor = gamma == null ? null : nodes.get(gamma),
      indigo = peers.qv.useRef({
        initial: null,
        translated: null,
      }),
      jade = peers.qv.useMemo(() => {
        return gamma == null
          ? null
          : {
              id: gamma,
              data: harbor?.data ?? peers.dUt,
              rect: indigo,
            };
      }, [gamma, harbor]),
      kite = peers.qv.useRef(null),
      [lemon, marble] = peers.qv.useState(null),
      [nickel, onyx] = peers.qv.useState(null),
      pearl = peers.RBt(rest, Object.values(rest)),
      quartz = peers.HBt("DndDescribedBy", id),
      river = peers.qv.useMemo(() => {
        return containers.getEnabled();
      }, [containers]),
      slate = peers.SHt(measuring),
      { droppableRects, measureDroppableContainers, measuringScheduled } =
        peers.tHt(river, {
          dragging: falcon,
          dependencies: [translate.x, translate.y],
          config: slate.droppable,
        }),
      timber = peers.$Vt(nodes, gamma),
      umbra = peers.qv.useMemo(() => {
        return nickel ? peers.qBt(nickel) : null;
      }, [nickel]),
      violet = peers.xe(),
      willow = peers.rHt(timber, slate.draggable.measure);
    peers.CHt({
      activeNode: gamma == null ? null : nodes.get(gamma),
      config: violet.layoutShiftCompensation,
      initialRect: willow,
      measure: slate.draggable.measure,
    });
    let xenon = peers.sHt(timber, slate.draggable.measure, willow),
      yellow = peers.sHt(timber ? timber.parentElement : null),
      zinc = peers.qv.useRef({
        activatorEvent: null,
        active: null,
        activeNode: timber,
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
      amber = containers.getNodeFor(zinc.current.over?.id),
      basalt = peers._Ht({
        measure: slate.dragOverlay.measure,
      }),
      cedar = basalt.nodeRef.current ?? timber,
      daisy = falcon ? (basalt.rect ?? xenon) : null,
      q = !!(basalt.nodeRef.current && basalt.rect),
      Ember = peers.cHt(q ? null : xenon),
      Flint = peers.mHt(cedar ? peers.Hv(cedar) : null),
      Garnet = peers.lHt(falcon ? (amber ?? timber) : null),
      Hazel = peers.hHt(Garnet),
      Ivory = peers.xHt(modifiers, {
        transform: {
          x: translate.x - Ember.x,
          y: translate.y - Ember.y,
          scaleX: 1,
          scaleY: 1,
        },
        activatorEvent: nickel,
        active: jade,
        activeNodeRect: xenon,
        containerNodeRect: yellow,
        draggingNodeRect: daisy,
        over: zinc.current.over,
        overlayNodeRect: basalt.rect,
        scrollableAncestors: Garnet,
        scrollableAncestorRects: Hazel,
        windowRect: Flint,
      }),
      Jasper = umbra ? peers.ZBt(umbra, translate) : null,
      Kelp = peers.uHt(Garnet),
      Lotus = peers.dHt(Kelp),
      Mint = peers.dHt(Kelp, [xenon]),
      Nova = peers.ZBt(Ivory, Lotus),
      Olive = daisy ? peers.zHt(daisy, Ivory) : null,
      Prism =
        jade && Olive
          ? collisionDetection({
              active: jade,
              collisionRect: Olive,
              droppableRects,
              droppableContainers: river,
              pointerCoordinates: Jasper,
            })
          : null,
      Quill = peers._Vt(Prism, "id"),
      [Reef, Sage] = peers.qv.useState(null),
      Topaz = peers.xVt(
        q ? Ivory : peers.ZBt(Ivory, Mint),
        Reef?.rect ?? null,
        xenon,
      ),
      Ultra = peers.qv.useRef(null),
      _e = peers.qv.useCallback(
        (event, zephyr) => {
          let { sensor, options } = zephyr;
          if (kite.current == null) return;
          let i = nodes.get(kite.current);
          if (!i) return;
          let a = event.nativeEvent,
            acorn = new sensor({
              active: kite.current,
              activeNode: i,
              event: a,
              options,
              context: zinc,
              onAbort(bloom) {
                if (!nodes.get(bloom)) return;
                let { onDragAbort } = pearl.current,
                  coral = {
                    id: bloom,
                  };
                onDragAbort?.(coral);
                bravo({
                  type: "onDragAbort",
                  event: coral,
                });
              },
              onPending(drift, eagle, frost, glide) {
                if (!nodes.get(drift)) return;
                let { onDragPending } = pearl.current,
                  a = {
                    id: drift,
                    constraint: eagle,
                    initialCoordinates: frost,
                    offset: glide,
                  };
                onDragPending?.(a);
                bravo({
                  type: "onDragPending",
                  event: a,
                });
              },
              onStart(honey) {
                let iris = kite.current;
                if (iris == null) return;
                let jewel = nodes.get(iris);
                if (!jewel) return;
                let { onDragStart } = pearl.current,
                  i = {
                    activatorEvent: a,
                    active: {
                      id: iris,
                      data: jewel.data,
                      rect: indigo,
                    },
                  };
                peers.MHt.unstable_batchedUpdates(() => {
                  onDragStart?.(i);
                  echo(peers.yUt.Initializing);
                  alpha({
                    type: peers.Jv.DragStart,
                    initialCoordinates: honey,
                    active: iris,
                  });
                  bravo({
                    type: "onDragStart",
                    event: i,
                  });
                  marble(Ultra.current);
                  onyx(a);
                });
              },
              onMove(knoll) {
                alpha({
                  type: peers.Jv.DragMove,
                  coordinates: knoll,
                });
              },
              onEnd: s(peers.Jv.DragEnd),
              onCancel: s(peers.Jv.DragCancel),
            });
          Ultra.current = acorn;
          function s(lunar) {
            return async function () {
              let { active, collisions, over, scrollAdjustedTranslate } =
                  zinc.current,
                moss = null;
              if (active && scrollAdjustedTranslate) {
                let { cancelDrop } = pearl.current;
                moss = {
                  activatorEvent: a,
                  active,
                  collisions,
                  delta: scrollAdjustedTranslate,
                  over,
                };
                lunar === peers.Jv.DragEnd &&
                  typeof cancelDrop == "function" &&
                  (await Promise.resolve(cancelDrop(moss))) &&
                  (lunar = peers.Jv.DragCancel);
              }
              kite.current = null;
              peers.MHt.unstable_batchedUpdates(() => {
                alpha({
                  type: lunar,
                });
                echo(peers.yUt.Uninitialized);
                Sage(null);
                marble(null);
                onyx(null);
                Ultra.current = null;
                let north =
                  lunar === peers.Jv.DragEnd ? "onDragEnd" : "onDragCancel";
                if (moss) {
                  let orbit = pearl.current[north];
                  orbit?.(moss);
                  bravo({
                    type: north,
                    event: moss,
                  });
                }
              });
            };
          }
        },
        [nodes],
      ),
      Vapor = peers.eHt(
        sensors,
        peers.qv.useCallback(
          (pine, quest) => {
            return (event, ridge) => {
              let i = event.nativeEvent,
                a = nodes.get(ridge);
              if (kite.current !== null || !a || i.dndKit || i.defaultPrevented)
                return;
              let storm = {
                active: a,
              };
              pine(event, quest.options, storm) === true &&
                ((i.dndKit = {
                  capturedBy: quest.sensor,
                }),
                (kite.current = ridge),
                _e(event, quest));
            };
          },
          [nodes, _e],
        ),
      );
    peers.fHt(sensors);
    peers.Wv(() => {
      xenon && copper === peers.yUt.Initializing && echo(peers.yUt.Initialized);
    }, [xenon, copper]);
    peers.qv.useEffect(() => {
      let { onDragMove } = pearl.current,
        { active, activatorEvent, collisions, over } = zinc.current;
      if (!active || !activatorEvent) return;
      let a = {
        active,
        activatorEvent,
        collisions,
        delta: {
          x: Nova.x,
          y: Nova.y,
        },
        over,
      };
      peers.MHt.unstable_batchedUpdates(() => {
        onDragMove?.(a);
        bravo({
          type: "onDragMove",
          event: a,
        });
      });
    }, [Nova.x, Nova.y]);
    peers.qv.useEffect(() => {
      let {
        active,
        activatorEvent,
        collisions,
        droppableContainers,
        scrollAdjustedTranslate,
      } = zinc.current;
      if (
        !active ||
        kite.current == null ||
        !activatorEvent ||
        !scrollAdjustedTranslate
      )
        return;
      let { onDragOver } = pearl.current,
        tide = droppableContainers.get(Quill),
        s =
          tide && tide.rect.current
            ? {
                id: tide.id,
                rect: tide.rect.current,
                data: tide.data,
                disabled: tide.disabled,
              }
            : null,
        unity = {
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
        Sage(s);
        onDragOver?.(unity);
        bravo({
          type: "onDragOver",
          event: unity,
        });
      });
    }, [Quill]);
    peers.Wv(() => {
      zinc.current = {
        activatorEvent: nickel,
        active: jade,
        activeNode: timber,
        collisionRect: Olive,
        collisions: Prism,
        droppableRects,
        draggableNodes: nodes,
        draggingNode: cedar,
        draggingNodeRect: daisy,
        droppableContainers: containers,
        over: Reef,
        scrollableAncestors: Garnet,
        scrollAdjustedTranslate: Nova,
      };
      indigo.current = {
        initial: daisy,
        translated: Olive,
      };
    }, [
      jade,
      timber,
      Prism,
      Olive,
      nodes,
      cedar,
      daisy,
      droppableRects,
      containers,
      Reef,
      Garnet,
      Nova,
    ]);
    peers.ZVt({
      ...violet,
      delta: translate,
      draggingRect: Olive,
      pointerCoordinates: Jasper,
      scrollableAncestors: Garnet,
      scrollableAncestorRects: Hazel,
    });
    let Wheat = peers.qv.useMemo(() => {
        return {
          active: jade,
          activeNode: timber,
          activeNodeRect: xenon,
          activatorEvent: nickel,
          collisions: Prism,
          containerNodeRect: yellow,
          dragOverlay: basalt,
          draggableNodes: nodes,
          droppableContainers: containers,
          droppableRects,
          over: Reef,
          measureDroppableContainers,
          scrollableAncestors: Garnet,
          scrollableAncestorRects: Hazel,
          measuringConfiguration: slate,
          measuringScheduled,
          windowRect: Flint,
        };
      }, [
        jade,
        timber,
        xenon,
        nickel,
        Prism,
        yellow,
        basalt,
        nodes,
        containers,
        droppableRects,
        Reef,
        measureDroppableContainers,
        Garnet,
        Hazel,
        slate,
        measuringScheduled,
        Flint,
      ]),
      be = peers.qv.useMemo(() => {
        return {
          activatorEvent: nickel,
          activators: Vapor,
          active: jade,
          activeNodeRect: xenon,
          ariaDescribedById: {
            draggable: quartz,
          },
          dispatch: alpha,
          draggableNodes: nodes,
          over: Reef,
          measureDroppableContainers,
        };
      }, [
        nickel,
        Vapor,
        jade,
        xenon,
        alpha,
        quartz,
        nodes,
        Reef,
        measureDroppableContainers,
      ]);
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
            value: Wheat,
          },
          peers.qv.createElement(
            peers.vUt.Provider,
            {
              value: Topaz,
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
        hiddenTextDescribedById: quartz,
      }),
    );
    function Yarn() {
      let vale = lemon?.autoScrollEnabled === false,
        wave =
          typeof autoScroll == "object"
            ? autoScroll.enabled === false
            : autoScroll === false,
        apex = falcon && !vale && !wave;
      return typeof autoScroll == "object"
        ? {
            ...autoScroll,
            enabled: apex,
          }
        : {
            enabled: apex,
          };
    }
  });
}
