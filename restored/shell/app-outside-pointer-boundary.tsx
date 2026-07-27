// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `r3s`) / export `lh`.

export type AppOutsidePointerBoundaryPeers = {
  $: (...args: unknown[]) => unknown;
  Bj: (...args: unknown[]) => unknown;
  DGi: (...args: unknown[]) => unknown;
  Dp: (...args: unknown[]) => unknown;
  EGi: (...args: unknown[]) => unknown;
  Element: (...args: unknown[]) => unknown;
  G$: (...args: unknown[]) => unknown;
  HTMLElement: (...args: unknown[]) => unknown;
  IGi: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  K$: (...args: unknown[]) => unknown;
  LGi: (...args: unknown[]) => unknown;
  Lm: (...args: unknown[]) => unknown;
  MGi: (...args: unknown[]) => unknown;
  NGi: (...args: unknown[]) => unknown;
  Node: (...args: unknown[]) => unknown;
  ORr: (...args: unknown[]) => unknown;
  ResizeObserver: (...args: unknown[]) => unknown;
  Rm: (...args: unknown[]) => unknown;
  VD: (...args: unknown[]) => unknown;
  VGi: (...args: unknown[]) => unknown;
  W$: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  a3s: (...args: unknown[]) => unknown;
  aR: (...args: unknown[]) => unknown;
  activeElement: (...args: unknown[]) => unknown;
  c3s: (...args: unknown[]) => unknown;
  cR: (...args: unknown[]) => unknown;
  contains: (...args: unknown[]) => unknown;
  eO: (...args: unknown[]) => unknown;
  ef: (...args: unknown[]) => unknown;
  getBoundingClientRect: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  i3s: (...args: unknown[]) => unknown;
  jYn: (...args: unknown[]) => unknown;
  kh: (...args: unknown[]) => unknown;
  o3s: (...args: unknown[]) => unknown;
  oR: (...args: unknown[]) => unknown;
  ownerDocument: (...args: unknown[]) => unknown;
  qHr: (...args: unknown[]) => unknown;
  sR: (...args: unknown[]) => unknown;
  tbs: (...args: unknown[]) => unknown;
};
let peers: AppOutsidePointerBoundaryPeers | null = null;

/** Wire AppOutsidePointerBoundary peers once companions land. */
export function setAppOutsidePointerBoundaryPeers(
  next: AppOutsidePointerBoundaryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lh` / internal `r3s`.
 */
export function AppOutsidePointerBoundary({
  children,
  onPointerDownOutside,
}: Record<string, unknown>) {
  const Div = peers.ef.div;
  const Tbs = peers.tbs;
  const I3s = peers.i3s;
  const A3s = peers.a3s;
  if (peers == null) {
    throw new Error("AppOutsidePointerBoundary peers are not configured");
  }
  let n = peers.Io(peers.hT),
    r = peers.G$.useContext(peers.ORr),
    i = peers.kh("4018050594"),
    a = peers.Dp(),
    o = peers.Lm(),
    s = peers.G$.useContext(peers.qHr),
    c = peers.Y(peers.eO.activeTab$),
    l = peers.Y(peers.VD),
    u = peers.Y(peers.VGi),
    d = peers.Y(peers.cR) && !u,
    f = peers.Y(peers.sR),
    p = peers.Y(peers.aR),
    m = peers.G$.useRef(null),
    h = peers.G$.useRef(null),
    g = peers.G$.useRef(null),
    _ = peers.G$.useRef(null),
    v = peers.G$.useRef(0),
    y = peers.G$.useRef(false),
    b = peers.G$.useRef(false),
    [x, S] = peers.G$.useState(false),
    [C, w] = peers.G$.useState(false),
    T = onPointerDownOutside != null,
    E = peers.jYn(c) && l,
    D = i && E,
    O = !E || u,
    k = peers.o3s(O, f),
    A = D && d,
    j = A ? 16 : O ? 118 : 0,
    M = k !== "hidden" || (E && d),
    N = k === "visible",
    P = D
      ? !A && x
        ? "expanded"
        : !A && C
          ? "compact-hovered"
          : "compact"
      : "default",
    F = k === "entering" || k === "exiting",
    I = F ? p : j,
    L = D ? 0 : I,
    R = D ? "0px" : `${118 - I}px`;
  v.current = L;
  let z = peers.G$.useEffectEvent(() => {
      onPointerDownOutside?.();
    }),
    B = peers.G$.useCallback(() => {
      let e = m.current,
        t = s?.getBoundingClientRect();
      if (t != null && e != null) {
        let n = {
          height: `${peers.Rm(D ? window.innerHeight - t.top : t.height, o)}px`,
          left: `${peers.Rm(t.left, o)}px`,
          top: `${peers.Rm(t.top, o)}px`,
          width: `${peers.Rm(t.width, o)}px`,
        };
        Object.assign(e.style, n);
        h.current != null && Object.assign(h.current.style, n);
      }
      let r = A ? null : g.current?.getBoundingClientRect(),
        i =
          t == null || r == null
            ? 0
            : Math.max(0, peers.Rm(t.right - r.right, o));
      n.get(peers.oR) !== i && n.set(peers.oR, i);
    }, [A, s, n, D, o]);
  if (
    (peers.G$.useLayoutEffect(() => {
      return () => {
        peers.NGi(n);
        n.get(peers.aR) !== 0 && n.set(peers.aR, 0);
        n.get(peers.oR) !== 0 && n.set(peers.oR, 0);
      };
    }, [n]),
    peers.G$.useLayoutEffect(() => {
      let e = D && !y.current;
      if (((y.current = D), !e)) return;
      let t = _.current,
        n = t?.ownerDocument.activeElement;
      n instanceof peers.HTMLElement &&
        t?.contains(n) &&
        ((b.current = true), n.blur(), (b.current = false));
    }, [D]),
    peers.G$.useLayoutEffect(() => {
      if (!M) {
        n.get(peers.oR) !== 0 && n.set(peers.oR, 0);
        return;
      }
      B();
      let e = g.current;
      if (e == null || typeof peers.ResizeObserver > "u") return;
      let t = new peers.ResizeObserver(B);
      return (
        t.observe(e),
        s != null && t.observe(s),
        window.addEventListener("resize", B),
        () => {
          t.disconnect();
          window.removeEventListener("resize", B);
        }
      );
    }, [s, n, M, B]),
    peers.G$.useLayoutEffect(() => {
      if (!(!M || s == null))
        return (
          s.style.setProperty(peers.IGi, "102px"),
          s.style.setProperty(peers.LGi, `${v.current}px`),
          () => {
            s.style.removeProperty(peers.IGi);
            s.style.removeProperty(peers.LGi);
          }
        );
    }, [s, M]),
    peers.G$.useLayoutEffect(() => {
      E ||
        (f !== "entering" && f !== "exiting") ||
        (peers.NGi(n), n.set(peers.sR, u ? "visible" : "hidden"));
    }, [u, E, f, n]),
    peers.G$.useLayoutEffect(() => {
      F || peers.MGi(n, j);
    }, [F, n, j]),
    peers.G$.useLayoutEffect(() => {
      !M || s == null || s.style.setProperty(peers.LGi, `${L}px`);
    }, [L, s, M]),
    peers.G$.useEffect(() => {
      if (!T || !N) return;
      let e = (event) => {
        let t = event.target;
        t instanceof peers.Node && (_.current?.contains(t) || z());
      };
      return (
        document.addEventListener("pointerdown", e, true),
        () => {
          document.removeEventListener("pointerdown", e, true);
        }
      );
    }, [T, N]),
    !M)
  )
    return null;
  let V = {
      "--right-panel-composer-overlay-bottom-panel-height": r ?? "0px",
      bottom: "var(--right-panel-composer-overlay-bottom-panel-height)",
    },
    H = {
      ...V,
      transform: `translateY(${R})`,
    },
    U = (
      <Div
        aria-hidden={!D && !N}
        data-testid="right-panel-composer-overlay"
        className={peers.$(
          "pointer-events-none absolute inset-x-0 z-[42] motion-reduce:transition-none",
          D
            ? "transition-[opacity,transform] duration-basic ease-enter-snappy"
            : "transition-opacity duration-[120ms]",
          k === "entering" &&
            (D
              ? "opacity-100"
              : "right-panel-composer-overlay-enter opacity-100"),
          k === "visible" && "opacity-100 ease-in",
          k === "exiting" && (A ? "opacity-100" : "opacity-0 ease-out"),
          k === "hidden" && (A ? "opacity-100" : "opacity-0"),
        )}
        style={H}
      >
        <div className={peers.$(peers.W$, "pb-6")}>
          <div
            ref={g}
            data-right-panel-composer-overlay-content="true"
            className={peers.$(
              "mx-auto w-full",
              !a && "transition-[max-width] duration-basic ease-enter-snappy",
              P === "compact" || P === "compact-hovered"
                ? "max-w-sm"
                : "max-w-full",
            )}
          >
            <div
              ref={_}
              className={peers.$(
                "group/floating-composer relative isolate",
                N ? "pointer-events-auto" : "pointer-events-none",
              )}
              onPointerEnter={(event) => {
                event.pointerType !== "touch" && w(true);
              }}
              onPointerLeave={() => {
                return w(false);
              }}
            >
              {
                <Tbs value={P}>
                  <div
                    aria-hidden={A}
                    className={peers.$(
                      "relative z-10 min-w-0 transition-opacity duration-basic ease-enter-snappy motion-reduce:transition-none",
                      A
                        ? "opacity-0"
                        : P === "compact"
                          ? "opacity-95 delay-300"
                          : "opacity-100",
                    )}
                    inert={A}
                    onFocusCapture={() => {
                      D && !A && S(true);
                    }}
                    onBlurCapture={(event) => {
                      let n = event.relatedTarget;
                      (n instanceof peers.Element &&
                        (event.currentTarget.contains(n) ||
                          (n.closest("[data-radix-popper-content-wrapper]") !=
                            null &&
                            event.currentTarget.querySelector(
                              '[aria-haspopup="menu"][data-state="open"]',
                            ) != null))) ||
                        (S(false), D && !b.current && onPointerDownOutside?.());
                    }}
                  >
                    {children}
                  </div>
                </Tbs>
              }
              {D ? (
                <I3s
                  isExpanded={P === "expanded"}
                  isVisible={N}
                  onClick={(event) => {
                    S(false);
                    onPointerDownOutside?.();
                    peers.EGi(n, {
                      prefersReducedMotion: a || event.detail === 0,
                    });
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </Div>
    ),
    W = D ? (
      <Div className="absolute inset-x-0 z-[42] flex justify-center" style={V}>
        <A3s
          isVisible={A}
          onClick={(event) => {
            S(true);
            peers.DGi(n, {
              prefersReducedMotion: a || event.detail === 0,
            });
            peers.Bj();
          }}
        />
      </Div>
    ) : null;
  return s == null ? (
    <>
      {U}
      {W}
    </>
  ) : (
    <>
      {peers.c3s.createPortal(
        <div
          ref={m}
          className={peers.$(
            "pointer-events-none fixed z-[41]",
            D ? "overflow-hidden" : "overflow-visible",
          )}
          data-testid="right-panel-composer-overlay-host"
          style={{
            zoom: o,
          }}
        >
          {U}
        </div>,
        s.ownerDocument.body,
      )}
      {W == null
        ? null
        : peers.c3s.createPortal(
            <div
              ref={h}
              className="pointer-events-none fixed z-[42] overflow-hidden"
              style={{
                zoom: o,
              }}
            >
              {W}
            </div>,
            s.ownerDocument.body,
          )}
    </>
  );
}
