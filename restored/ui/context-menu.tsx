// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `b7e`) / export `uut`.

export type ContextMenuPeers = {
  $5e: (...args: unknown[]) => unknown;
  A5e: (...args: unknown[]) => unknown;
  B5e: (...args: unknown[]) => unknown;
  C5e: (...args: unknown[]) => unknown;
  D5e: (...args: unknown[]) => unknown;
  E5e: (...args: unknown[]) => unknown;
  F5e: (...args: unknown[]) => unknown;
  Fp: (...args: unknown[]) => unknown;
  G5e: (...args: unknown[]) => unknown;
  Gp: (...args: unknown[]) => unknown;
  H5e: (...args: unknown[]) => unknown;
  I5e: (...args: unknown[]) => unknown;
  Ip: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  J5e: (...args: unknown[]) => unknown;
  K5e: (...args: unknown[]) => unknown;
  L5e: (...args: unknown[]) => unknown;
  Lp: (...args: unknown[]) => unknown;
  M5e: (...args: unknown[]) => unknown;
  Mm: (...args: unknown[]) => unknown;
  N5e: (...args: unknown[]) => unknown;
  Nm: (...args: unknown[]) => unknown;
  O5e: (...args: unknown[]) => unknown;
  P5e: (...args: unknown[]) => unknown;
  Q5e: (...args: unknown[]) => unknown;
  R$e: (...args: unknown[]) => unknown;
  R5e: (...args: unknown[]) => unknown;
  S5e: (...args: unknown[]) => unknown;
  T5e: (...args: unknown[]) => unknown;
  U5e: (...args: unknown[]) => unknown;
  V5e: (...args: unknown[]) => unknown;
  W5e: (...args: unknown[]) => unknown;
  Wp: (...args: unknown[]) => unknown;
  X5e: (...args: unknown[]) => unknown;
  Y5e: (...args: unknown[]) => unknown;
  Z5e: (...args: unknown[]) => unknown;
  _5e: (...args: unknown[]) => unknown;
  _7e: (...args: unknown[]) => unknown;
  a7e: (...args: unknown[]) => unknown;
  b5e: (...args: unknown[]) => unknown;
  c7e: (...args: unknown[]) => unknown;
  d5e: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  e7e: (...args: unknown[]) => unknown;
  f5e: (...args: unknown[]) => unknown;
  f8e: (...args: unknown[]) => unknown;
  g5e: (...args: unknown[]) => unknown;
  h5e: (...args: unknown[]) => unknown;
  i7e: (...args: unknown[]) => unknown;
  j5e: (...args: unknown[]) => unknown;
  jm: (...args: unknown[]) => unknown;
  k5e: (...args: unknown[]) => unknown;
  l7e: (...args: unknown[]) => unknown;
  m5e: (...args: unknown[]) => unknown;
  n7e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  o7e: (...args: unknown[]) => unknown;
  p5e: (...args: unknown[]) => unknown;
  q5e: (...args: unknown[]) => unknown;
  qp: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  r7e: (...args: unknown[]) => unknown;
  s7e: (...args: unknown[]) => unknown;
  t7e: (...args: unknown[]) => unknown;
  u5e: (...args: unknown[]) => unknown;
  v5e: (...args: unknown[]) => unknown;
  w5e: (...args: unknown[]) => unknown;
  x5e: (...args: unknown[]) => unknown;
  xm: (...args: unknown[]) => unknown;
  y5e: (...args: unknown[]) => unknown;
  ym: (...args: unknown[]) => unknown;
  z5e: (...args: unknown[]) => unknown;
  zp: (...args: unknown[]) => unknown;
};
let peers: ContextMenuPeers | null = null;

/** Wire contextMenu peers once companions land. */
export function setContextMenuPeers(next: ContextMenuPeers): void {
  peers = next;
}

/**
 * Bundle export `uut` / internal `b7e`.
 */
export function contextMenu() {
  if (peers == null) {
    throw new Error("contextMenu peers are not configured");
  }
  return peers.e(() => {
    jm = peers.r(peers.o(), 1);
    peers.Ip();
    peers.zp();
    peers.Gp();
    peers.E5e();
    peers.R$e();
    peers.xm();
    Mm = peers.J();
    O5e = "ContextMenu";
    [k5e, A5e] = peers.Lp(peers.O5e, [peers.f8e]);
    Nm = peers.f8e();
    [j5e, M5e] = peers.k5e(peers.O5e);
    N5e = props => {
      const J5e = peers.j5e;
      const U5e = peers.u5e;
      let {
          __scopeContextMenu,
          children,
          onOpenChange,
          dir,
          modal = true
        } = props,
        [alpha, s] = peers.jm.useState(false),
        bravo = peers.Nm(__scopeContextMenu),
        copper = peers.qp(onOpenChange),
        u = peers.jm.useCallback(delta => {
          s(delta);
          copper(delta);
        }, [copper]);
      return <J5e scope={__scopeContextMenu} open={alpha} onOpenChange={u} modal={modal}>
          <U5e {...bravo} dir={dir} open={alpha} onOpenChange={u} modal={modal}>
            {children}
          </U5e>
        </J5e>;
    };
    peers.N5e.displayName = peers.O5e;
    P5e = "ContextMenuTrigger";
    F5e = peers.jm.forwardRef((echo, falcon) => {
      const D5e = peers.d5e;
      const Span = peers.Wp.span;
      let {
          __scopeContextMenu,
          disabled = false,
          ...rest
        } = echo,
        a = peers.M5e(peers.P5e, __scopeContextMenu),
        gamma = peers.Nm(__scopeContextMenu),
        s = peers.jm.useRef({
          x: 0,
          y: 0
        }),
        harbor = peers.jm.useRef({
          getBoundingClientRect: () => {
            return DOMRect.fromRect({
              width: 0,
              height: 0,
              ...s.current
            });
          }
        }),
        indigo = peers.jm.useRef(0),
        u = peers.jm.useCallback(() => {
          return window.clearTimeout(indigo.current);
        }, []),
        jade = event => {
          s.current = {
            x: event.clientX,
            y: event.clientY
          };
          a.onOpenChange(true);
        };
      return peers.jm.useEffect(() => {
        return u;
      }, [u]), peers.jm.useEffect(() => {
        return void (disabled && u());
      }, [disabled, u]), <>
            {<D5e {...gamma} virtualRef={harbor} />}
            {<Span data-state={a.open ? "open" : "closed"} data-disabled={disabled ? "" : undefined} {...rest} ref={falcon} style={{
          WebkitTouchCallout: "none",
          ...echo.style
        }} onContextMenu={disabled ? echo.onContextMenu : peers.Fp(echo.onContextMenu, event => {
          u();
          jade(event);
          event.preventDefault();
        })} onPointerDown={disabled ? echo.onPointerDown : peers.Fp(echo.onPointerDown, peers.D5e(kite => {
          u();
          indigo.current = window.setTimeout(() => {
            return jade(kite);
          }, 700);
        }))} onPointerMove={disabled ? echo.onPointerMove : peers.Fp(echo.onPointerMove, peers.D5e(u))} onPointerCancel={disabled ? echo.onPointerCancel : peers.Fp(echo.onPointerCancel, peers.D5e(u))} onPointerUp={disabled ? echo.onPointerUp : peers.Fp(echo.onPointerUp, peers.D5e(u))} />}
          </>;
    });
    peers.F5e.displayName = peers.P5e;
    I5e = "ContextMenuPortal";
    L5e = props => {
      const F5e = peers.f5e;
      let {
          __scopeContextMenu,
          ...rest
        } = props,
        lemon = peers.Nm(__scopeContextMenu);
      return <F5e {...lemon} {...rest} />;
    };
    peers.L5e.displayName = peers.I5e;
    R5e = "ContextMenuContent";
    z5e = peers.jm.forwardRef((marble, nickel) => {
      const P5e = peers.p5e;
      let {
          __scopeContextMenu,
          ...rest
        } = marble,
        i = peers.M5e(peers.R5e, __scopeContextMenu),
        a = peers.Nm(__scopeContextMenu),
        onyx = peers.jm.useRef(false);
      return <P5e {...a} {...rest} ref={nickel} side="right" sideOffset={2} align="start" onCloseAutoFocus={event => {
        marble.onCloseAutoFocus?.(event);
        !event.defaultPrevented && onyx.current && event.preventDefault();
        onyx.current = false;
      }} onInteractOutside={pearl => {
        marble.onInteractOutside?.(pearl);
        !pearl.defaultPrevented && !i.modal && (onyx.current = true);
      }} style={{
        ...marble.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }} />;
    });
    peers.z5e.displayName = peers.R5e;
    B5e = "ContextMenuGroup";
    V5e = peers.jm.forwardRef((quartz, river) => {
      const M5e = peers.m5e;
      let {
          __scopeContextMenu,
          ...rest
        } = quartz,
        i = peers.Nm(__scopeContextMenu);
      return <M5e {...i} {...rest} ref={river} />;
    });
    peers.V5e.displayName = peers.B5e;
    H5e = "ContextMenuLabel";
    U5e = peers.jm.forwardRef((slate, timber) => {
      const H5e = peers.h5e;
      let {
          __scopeContextMenu,
          ...rest
        } = slate,
        i = peers.Nm(__scopeContextMenu);
      return <H5e {...i} {...rest} ref={timber} />;
    });
    peers.U5e.displayName = peers.H5e;
    W5e = "ContextMenuItem";
    G5e = peers.jm.forwardRef((umbra, violet) => {
      const G5e = peers.g5e;
      let {
          __scopeContextMenu,
          ...rest
        } = umbra,
        i = peers.Nm(__scopeContextMenu);
      return <G5e {...i} {...rest} ref={violet} />;
    });
    peers.G5e.displayName = peers.W5e;
    K5e = "ContextMenuCheckboxItem";
    q5e = peers.jm.forwardRef((willow, xenon) => {
      const C5e = peers._5e;
      let {
          __scopeContextMenu,
          ...rest
        } = willow,
        i = peers.Nm(__scopeContextMenu);
      return <C5e {...i} {...rest} ref={xenon} />;
    });
    peers.q5e.displayName = peers.K5e;
    J5e = "ContextMenuRadioGroup";
    Y5e = peers.jm.forwardRef((yellow, zinc) => {
      const V5e = peers.v5e;
      let {
          __scopeContextMenu,
          ...rest
        } = yellow,
        i = peers.Nm(__scopeContextMenu);
      return <V5e {...i} {...rest} ref={zinc} />;
    });
    peers.Y5e.displayName = peers.J5e;
    X5e = "ContextMenuRadioItem";
    Z5e = peers.jm.forwardRef((amber, basalt) => {
      const Y5e = peers.y5e;
      let {
          __scopeContextMenu,
          ...rest
        } = amber,
        i = peers.Nm(__scopeContextMenu);
      return <Y5e {...i} {...rest} ref={basalt} />;
    });
    peers.Z5e.displayName = peers.X5e;
    Q5e = "ContextMenuItemIndicator";
    $5e = peers.jm.forwardRef((cedar, daisy) => {
      const B5e = peers.b5e;
      let {
          __scopeContextMenu,
          ...rest
        } = cedar,
        i = peers.Nm(__scopeContextMenu);
      return <B5e {...i} {...rest} ref={daisy} />;
    });
    peers.$5e.displayName = peers.Q5e;
    e7e = "ContextMenuSeparator";
    t7e = peers.jm.forwardRef((ember, flint) => {
      const X5e = peers.x5e;
      let {
          __scopeContextMenu,
          ...rest
        } = ember,
        i = peers.Nm(__scopeContextMenu);
      return <X5e {...i} {...rest} ref={flint} />;
    });
    peers.t7e.displayName = peers.e7e;
    n7e = "ContextMenuArrow";
    r7e = peers.jm.forwardRef((garnet, hazel) => {
      const S5e = peers.S5e;
      let {
          __scopeContextMenu,
          ...rest
        } = garnet,
        i = peers.Nm(__scopeContextMenu);
      return <S5e {...i} {...rest} ref={hazel} />;
    });
    peers.r7e.displayName = peers.n7e;
    i7e = "ContextMenuSub";
    a7e = props => {
      const C5e = peers.C5e;
      let {
          __scopeContextMenu,
          children,
          onOpenChange,
          open,
          defaultOpen
        } = props,
        ivory = peers.Nm(__scopeContextMenu),
        [s, jasper] = peers.ym({
          prop: open,
          defaultProp: defaultOpen ?? false,
          onChange: onOpenChange,
          caller: peers.i7e
        });
      return <C5e {...ivory} open={s} onOpenChange={jasper}>
          {children}
        </C5e>;
    };
    peers.a7e.displayName = peers.i7e;
    o7e = "ContextMenuSubTrigger";
    s7e = peers.jm.forwardRef((kelp, lotus) => {
      const W5e = peers.w5e;
      let {
          __scopeContextMenu,
          ...rest
        } = kelp,
        i = peers.Nm(__scopeContextMenu);
      return <W5e {...i} {...rest} ref={lotus} />;
    });
    peers.s7e.displayName = peers.o7e;
    c7e = "ContextMenuSubContent";
    l7e = peers.jm.forwardRef((mint, nova) => {
      const T5e = peers.T5e;
      let {
          __scopeContextMenu,
          ...rest
        } = mint,
        i = peers.Nm(__scopeContextMenu);
      return <T5e {...i} {...rest} ref={nova} style={{
        ...mint.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }} />;
    });
    peers.l7e.displayName = peers.c7e;
    u7e = peers.N5e;
    d7e = peers.F5e;
    f7e = peers.L5e;
    p7e = peers.z5e;
    m7e = peers.G5e;
    h7e = peers.q5e;
    g7e = peers.t7e;
    _7e = peers.a7e;
    v7e = peers.s7e;
    y7e = peers.l7e;
  });
}
