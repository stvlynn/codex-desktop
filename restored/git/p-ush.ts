// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zHn`) / export `R5`.

export type PUSHPeers = {
  $Vn: (...args: unknown[]) => unknown;
  $l: (...args: unknown[]) => unknown;
  AHn: (...args: unknown[]) => unknown;
  AVn: (...args: unknown[]) => unknown;
  Aw: (...args: unknown[]) => unknown;
  CHn: (...args: unknown[]) => unknown;
  D: (...args: unknown[]) => unknown;
  DHn: (...args: unknown[]) => unknown;
  Dw: (...args: unknown[]) => unknown;
  EHn: (...args: unknown[]) => unknown;
  EVn: (...args: unknown[]) => unknown;
  Ew: (...args: unknown[]) => unknown;
  FHn: (...args: unknown[]) => unknown;
  FVn: (...args: unknown[]) => unknown;
  GVn: (...args: unknown[]) => unknown;
  HVn: (...args: unknown[]) => unknown;
  IHn: (...args: unknown[]) => unknown;
  JVn: (...args: unknown[]) => unknown;
  KVn: (...args: unknown[]) => unknown;
  LHn: (...args: unknown[]) => unknown;
  LVn: (...args: unknown[]) => unknown;
  MBn: (...args: unknown[]) => unknown;
  MHn: (...args: unknown[]) => unknown;
  Mw: (...args: unknown[]) => unknown;
  NBn: (...args: unknown[]) => unknown;
  NHn: (...args: unknown[]) => unknown;
  OHn: (...args: unknown[]) => unknown;
  Ow: (...args: unknown[]) => unknown;
  PHn: (...args: unknown[]) => unknown;
  QVn: (...args: unknown[]) => unknown;
  RHn: (...args: unknown[]) => unknown;
  RVn: (...args: unknown[]) => unknown;
  SBn: (...args: unknown[]) => unknown;
  SHn: (...args: unknown[]) => unknown;
  THn: (...args: unknown[]) => unknown;
  Tw: (...args: unknown[]) => unknown;
  UVn: (...args: unknown[]) => unknown;
  WVn: (...args: unknown[]) => unknown;
  XVn: (...args: unknown[]) => unknown;
  YVn: (...args: unknown[]) => unknown;
  ZBn: (...args: unknown[]) => unknown;
  _w: (...args: unknown[]) => unknown;
  aHn: (...args: unknown[]) => unknown;
  cHn: (...args: unknown[]) => unknown;
  dHn: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fHn: (...args: unknown[]) => unknown;
  gBn: (...args: unknown[]) => unknown;
  iHn: (...args: unknown[]) => unknown;
  jHn: (...args: unknown[]) => unknown;
  jVn: (...args: unknown[]) => unknown;
  jw: (...args: unknown[]) => unknown;
  kBn: (...args: unknown[]) => unknown;
  kHn: (...args: unknown[]) => unknown;
  kVn: (...args: unknown[]) => unknown;
  kw: (...args: unknown[]) => unknown;
  lHn: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  oHn: (...args: unknown[]) => unknown;
  qBn: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sHn: (...args: unknown[]) => unknown;
  uHn: (...args: unknown[]) => unknown;
  vw: (...args: unknown[]) => unknown;
  wVn: (...args: unknown[]) => unknown;
  ww: (...args: unknown[]) => unknown;
  xBn: (...args: unknown[]) => unknown;
  yBn: (...args: unknown[]) => unknown;
  yHn: (...args: unknown[]) => unknown;
};
let peers: PUSHPeers | null = null;

/** Wire pUSH peers once companions land. */
export function setPUSHPeers(next: PUSHPeers): void {
  peers = next;
}

/**
 * Bundle export `R5` / internal `zHn`.
 */
export function pUSH() {
  if (peers == null) {
    throw new Error("pUSH peers are not configured");
  }
  return peers.e(() => {
    ww = peers.r(peers.o(), 1);
    Tw = peers.r(peers.o(), 1);
    Ew = peers.r(peers.o(), 1);
    peers.o();
    UVn = peers.r(peers.o(), 1);
    Dw = peers.r(peers.o(), 1);
    peers.o();
    peers.o();
    peers.o();
    Ow = peers.r(peers.o(), 1);
    peers.o();
    peers.$l();
    WVn = ((e) => {
      return ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"), e);
    })(peers.WVn || {});
    GVn = /^:[\w-]+$/;
    KVn = 3;
    qVn = 2;
    JVn = 1;
    YVn = 10;
    XVn = -2;
    ZVn = (e) => {
      return e === "*";
    };
    QVn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    kw = (e) => {
      return e.join("/").replace(/\/\/+/g, "/");
    };
    $Vn = (e) => {
      return e.replace(/\/+$/, "").replace(/^\/*/, "/");
    };
    eHn = (e) => {
      return !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e;
    };
    tHn = (e) => {
      return !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
    };
    nHn = class {
      constructor(e, t, n, r = false) {
        this.status = e;
        this.statusText = t || "";
        this.internal = r;
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n);
      }
    };
    rHn =
      typeof window < "u" &&
      window.document !== undefined &&
      window.document.createElement !== undefined;
    Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    iHn = ["POST", "PUT", "PATCH", "DELETE"];
    new Set(peers.iHn);
    aHn = ["GET", ...peers.iHn];
    new Set(peers.aHn);
    oHn = peers.ww.createContext(null);
    peers.oHn.displayName = "DataRouter";
    sHn = peers.ww.createContext(null);
    peers.sHn.displayName = "DataRouterState";
    cHn = peers.ww.createContext(false);
    lHn = peers.ww.createContext({
      isTransitioning: false,
    });
    peers.lHn.displayName = "ViewTransition";
    uHn = peers.ww.createContext(new Map());
    peers.uHn.displayName = "Fetchers";
    dHn = peers.ww.createContext(null);
    peers.dHn.displayName = "Await";
    Aw = peers.ww.createContext(null);
    peers.Aw.displayName = "Navigation";
    jw = peers.ww.createContext(null);
    peers.jw.displayName = "Location";
    Mw = peers.ww.createContext({
      outlet: null,
      matches: [],
      isDataRoute: false,
    });
    peers.Mw.displayName = "Route";
    fHn = peers.ww.createContext(null);
    peers.fHn.displayName = "RouteError";
    pHn = "REACT_ROUTER_ERROR";
    mHn = "REDIRECT";
    hHn = "ROUTE_ERROR_RESPONSE";
    gHn =
      "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    _Hn = peers.Tw.createContext(null);
    vHn = peers.Tw.createElement(peers.MBn, null);
    yHn = class extends peers.Tw.Component {
      constructor(e) {
        super(e);
        this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        };
      }
      static getDerivedStateFromError(e) {
        return {
          error: e,
        };
      }
      static getDerivedStateFromProps(e, t) {
        return t.location !== e.location ||
          (t.revalidation !== "idle" && e.revalidation === "idle")
          ? {
              error: e.error,
              location: e.location,
              revalidation: e.revalidation,
            }
          : {
              error: e.error === undefined ? t.error : e.error,
              location: t.location,
              revalidation: e.revalidation || t.revalidation,
            };
      }
      componentDidCatch(e, t) {
        this.props.onError
          ? this.props.onError(e, t)
          : console.error(
              "React Router caught the following error during render",
              e,
            );
      }
      render() {
        let e = this.state.error;
        if (
          this.context &&
          typeof e == "object" &&
          e &&
          "digest" in e &&
          typeof e.digest == "string"
        ) {
          let t = peers.xBn(e.digest);
          t && (e = t);
        }
        let t =
          e === undefined
            ? this.props.children
            : peers.Tw.createElement(
                peers.Mw.Provider,
                {
                  value: this.props.routeContext,
                },
                peers.Tw.createElement(peers.fHn.Provider, {
                  value: e,
                  children: this.props.component,
                }),
              );
        return this.context
          ? peers.Tw.createElement(
              peers.NBn,
              {
                error: e,
              },
              t,
            )
          : t;
      }
    };
    peers.yHn.contextType = peers.cHn;
    bHn = new WeakMap();
    xHn = {};
    peers.Ew.memo(peers.qBn);
    peers.Ew.Component;
    SHn = peers.ZBn;
    CHn = "get";
    wHn = "application/x-www-form-urlencoded";
    THn = null;
    EHn = new Set([
      "application/x-www-form-urlencoded",
      "multipart/form-data",
      "text/plain",
    ]);
    Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    DHn = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
    };
    OHn = /[&><\u2028\u2029]/g;
    kHn = peers.Dw.createContext(undefined);
    peers.kHn.displayName = "FrameworkContext";
    peers.UVn.Component;
    AHn =
      typeof window < "u" &&
      window.document !== undefined &&
      window.document.createElement !== undefined;
    try {
      peers.AHn && (window.__reactRouterVersion = "7.13.1");
    } catch {}
    peers.AVn.displayName = "unstable_HistoryRouter";
    jHn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    MHn = peers.Ow.forwardRef(function (
      {
        onClick,
        discover = "render",
        prefetch = "none",
        relative,
        reloadDocument,
        replace,
        unstable_mask,
        state,
        target,
        to,
        preventScrollReset,
        viewTransition,
        unstable_defaultShouldRevalidate,
        ...rest
      },
      m,
    ) {
      let {
          basename,
          navigator,
          unstable_useTransitions: _,
        } = peers.Ow.useContext(peers.Aw),
        v = typeof to == "string" && peers.jHn.test(to),
        y = peers.yBn(to, basename);
      to = y.to;
      let b = peers.SBn(to, {
          relative,
        }),
        x = peers.vw(),
        S = null;
      if (unstable_mask) {
        let e = peers.gBn(
          unstable_mask,
          [],
          x.unstable_mask ? x.unstable_mask.pathname : "/",
          true,
        );
        basename !== "/" &&
          (e.pathname =
            e.pathname === "/" ? basename : peers.kw([basename, e.pathname]));
        S = navigator.createHref(e);
      }
      let [C, w, T] = peers.wVn(prefetch, rest),
        E = peers.FVn(to, {
          replace,
          unstable_mask,
          state,
          target,
          preventScrollReset,
          relative,
          viewTransition,
          unstable_defaultShouldRevalidate,
          unstable_useTransitions: _,
        });
      function D(t) {
        onClick && onClick(t);
        t.defaultPrevented || E(t);
      }
      let O = !(y.isExternal || reloadDocument),
        k = peers.Ow.createElement("a", {
          ...rest,
          ...T,
          href: (O ? S : undefined) || y.absoluteURL || b,
          onClick: O ? peers.D : onClick,
          ref: peers.kVn(m, w),
          target,
          "data-discover": !v && discover === "render" ? "true" : undefined,
        });
      return C && !v
        ? peers.Ow.createElement(
            peers.Ow.Fragment,
            null,
            k,
            peers.Ow.createElement(peers.EVn, {
              page: b,
            }),
          )
        : k;
    });
    peers.MHn.displayName = "Link";
    NHn = peers.Ow.forwardRef(function (
      {
        "aria-current": e = "page",
        caseSensitive = false,
        className = "",
        end = false,
        style,
        to,
        viewTransition,
        children,
        ...rest
      },
      l,
    ) {
      let u = peers.kBn(to, {
          relative: rest.relative,
        }),
        d = peers.vw(),
        f = peers.Ow.useContext(peers.sHn),
        { navigator, basename } = peers.Ow.useContext(peers.Aw),
        h = f != null && peers.HVn(u) && viewTransition === true,
        g = navigator.encodeLocation
          ? navigator.encodeLocation(u).pathname
          : u.pathname,
        _ = d.pathname,
        v =
          f && f.navigation && f.navigation.location
            ? f.navigation.location.pathname
            : null;
      caseSensitive ||
        ((_ = _.toLowerCase()),
        (v = v ? v.toLowerCase() : null),
        (g = g.toLowerCase()));
      v && basename && (v = peers._w(v, basename) || v);
      let y = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length,
        b = _ === g || (!end && _.startsWith(g) && _.charAt(y) === "/"),
        x =
          v != null &&
          (v === g || (!end && v.startsWith(g) && v.charAt(g.length) === "/")),
        S = {
          isActive: b,
          isPending: x,
          isTransitioning: h,
        },
        C = b ? e : undefined,
        w;
      w =
        typeof className == "function"
          ? className(S)
          : [
              className,
              b ? "active" : null,
              x ? "pending" : null,
              h ? "transitioning" : null,
            ]
              .filter(Boolean)
              .join(" ");
      let T = typeof style == "function" ? style(S) : style;
      return peers.Ow.createElement(
        peers.MHn,
        {
          ...rest,
          "aria-current": C,
          className: w,
          ref: l,
          style: T,
          to,
          viewTransition,
        },
        typeof children == "function" ? children(S) : children,
      );
    });
    peers.NHn.displayName = "NavLink";
    PHn = peers.Ow.forwardRef(
      (
        {
          discover = "render",
          fetcherKey,
          navigate,
          reloadDocument,
          replace,
          state,
          method = peers.CHn,
          action,
          onSubmit,
          relative,
          preventScrollReset,
          viewTransition,
          unstable_defaultShouldRevalidate,
          ...rest
        },
        m,
      ) => {
        let { unstable_useTransitions } = peers.Ow.useContext(peers.Aw),
          g = peers.LVn(),
          _ = peers.RVn(action, {
            relative,
          }),
          v = method.toLowerCase() === "get" ? "get" : "post",
          y = typeof action == "string" && peers.jHn.test(action);
        return peers.Ow.createElement("form", {
          ref: m,
          method: v,
          action: _,
          onSubmit: reloadDocument
            ? onSubmit
            : (event) => {
                if ((onSubmit && onSubmit(event), event.defaultPrevented))
                  return;
                event.preventDefault();
                let r = event.nativeEvent.submitter,
                  s = r?.getAttribute("formmethod") || method,
                  p = () => {
                    return g(r || event.currentTarget, {
                      fetcherKey,
                      method: s,
                      navigate,
                      replace,
                      state,
                      relative,
                      preventScrollReset,
                      viewTransition,
                      unstable_defaultShouldRevalidate,
                    });
                  };
                unstable_useTransitions && navigate !== false
                  ? peers.Ow.startTransition(() => {
                      return p();
                    })
                  : p();
              },
          ...rest,
          "data-discover": !y && discover === "render" ? "true" : undefined,
        });
      },
    );
    peers.PHn.displayName = "Form";
    peers.jVn.displayName = "ScrollRestoration";
    FHn = 0;
    IHn = () => {
      return `__${String(++peers.FHn)}__`;
    };
    LHn = "react-router-scroll-positions";
    RHn = {};
  });
}
