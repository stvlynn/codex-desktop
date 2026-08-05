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
    WVn = ((alpha) => {
      return (
        (alpha.Pop = "POP"),
        (alpha.Push = "PUSH"),
        (alpha.Replace = "REPLACE"),
        alpha
      );
    })(peers.WVn || {});
    GVn = /^:[\w-]+$/;
    KVn = 3;
    qVn = 2;
    JVn = 1;
    YVn = 10;
    XVn = -2;
    ZVn = (bravo) => {
      return bravo === "*";
    };
    QVn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    kw = (copper) => {
      return copper.join("/").replace(/\/\/+/g, "/");
    };
    $Vn = (delta) => {
      return delta.replace(/\/+$/, "").replace(/^\/*/, "/");
    };
    eHn = (echo) => {
      return !echo || echo === "?"
        ? ""
        : echo.startsWith("?")
          ? echo
          : "?" + echo;
    };
    tHn = (falcon) => {
      return !falcon || falcon === "#"
        ? ""
        : falcon.startsWith("#")
          ? falcon
          : "#" + falcon;
    };
    nHn = class {
      constructor(gamma, harbor, indigo, jade = false) {
        this.status = gamma;
        this.statusText = harbor || "";
        this.internal = jade;
        indigo instanceof Error
          ? ((this.data = indigo.toString()), (this.error = indigo))
          : (this.data = indigo);
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
      constructor(kite) {
        super(kite);
        this.state = {
          location: kite.location,
          revalidation: kite.revalidation,
          error: kite.error,
        };
      }
      static getDerivedStateFromError(lemon) {
        return {
          error: lemon,
        };
      }
      static getDerivedStateFromProps(marble, nickel) {
        return nickel.location !== marble.location ||
          (nickel.revalidation !== "idle" && marble.revalidation === "idle")
          ? {
              error: marble.error,
              location: marble.location,
              revalidation: marble.revalidation,
            }
          : {
              error: marble.error === undefined ? nickel.error : marble.error,
              location: nickel.location,
              revalidation: marble.revalidation || nickel.revalidation,
            };
      }
      componentDidCatch(onyx, pearl) {
        this.props.onError
          ? this.props.onError(onyx, pearl)
          : console.error(
              "React Router caught the following error during render",
              onyx,
            );
      }
      render() {
        let quartz = this.state.error;
        if (
          this.context &&
          typeof quartz == "object" &&
          quartz &&
          "digest" in quartz &&
          typeof quartz.digest == "string"
        ) {
          let slate = peers.xBn(quartz.digest);
          slate && (quartz = slate);
        }
        let river =
          quartz === undefined
            ? this.props.children
            : peers.Tw.createElement(
                peers.Mw.Provider,
                {
                  value: this.props.routeContext,
                },
                peers.Tw.createElement(peers.fHn.Provider, {
                  value: quartz,
                  children: this.props.component,
                }),
              );
        return this.context
          ? peers.Tw.createElement(
              peers.NBn,
              {
                error: quartz,
              },
              river,
            )
          : river;
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
      timber,
    ) {
      let {
          basename,
          navigator,
          unstable_useTransitions: umbra,
        } = peers.Ow.useContext(peers.Aw),
        violet = typeof to == "string" && peers.jHn.test(to),
        willow = peers.yBn(to, basename);
      to = willow.to;
      let b = peers.SBn(to, {
          relative,
        }),
        xenon = peers.vw(),
        yellow = null;
      if (unstable_mask) {
        let garnet = peers.gBn(
          unstable_mask,
          [],
          xenon.unstable_mask ? xenon.unstable_mask.pathname : "/",
          true,
        );
        basename !== "/" &&
          (garnet.pathname =
            garnet.pathname === "/"
              ? basename
              : peers.kw([basename, garnet.pathname]));
        yellow = navigator.createHref(garnet);
      }
      let [zinc, amber, basalt] = peers.wVn(prefetch, rest),
        cedar = peers.FVn(to, {
          replace,
          unstable_mask,
          state,
          target,
          preventScrollReset,
          relative,
          viewTransition,
          unstable_defaultShouldRevalidate,
          unstable_useTransitions: umbra,
        });
      function daisy(hazel) {
        onClick && onClick(hazel);
        hazel.defaultPrevented || cedar(hazel);
      }
      let ember = !(willow.isExternal || reloadDocument),
        flint = peers.Ow.createElement("a", {
          ...rest,
          ...basalt,
          href: (ember ? yellow : undefined) || willow.absoluteURL || b,
          onClick: ember ? peers.D : onClick,
          ref: peers.kVn(timber, amber),
          target,
          "data-discover":
            !violet && discover === "render" ? "true" : undefined,
        });
      return zinc && !violet
        ? peers.Ow.createElement(
            peers.Ow.Fragment,
            null,
            flint,
            peers.Ow.createElement(peers.EVn, {
              page: b,
            }),
          )
        : flint;
    });
    peers.MHn.displayName = "Link";
    NHn = peers.Ow.forwardRef(function (
      {
        "aria-current": ivory = "page",
        caseSensitive = false,
        className = "",
        end = false,
        style,
        to,
        viewTransition,
        children,
        ...rest
      },
      jasper,
    ) {
      let u = peers.kBn(to, {
          relative: rest.relative,
        }),
        kelp = peers.vw(),
        lotus = peers.Ow.useContext(peers.sHn),
        { navigator, basename } = peers.Ow.useContext(peers.Aw),
        mint = lotus != null && peers.HVn(u) && viewTransition === true,
        nova = navigator.encodeLocation
          ? navigator.encodeLocation(u).pathname
          : u.pathname,
        olive = kelp.pathname,
        prism =
          lotus && lotus.navigation && lotus.navigation.location
            ? lotus.navigation.location.pathname
            : null;
      caseSensitive ||
        ((olive = olive.toLowerCase()),
        (prism = prism ? prism.toLowerCase() : null),
        (nova = nova.toLowerCase()));
      prism && basename && (prism = peers._w(prism, basename) || prism);
      let quill =
          nova !== "/" && nova.endsWith("/") ? nova.length - 1 : nova.length,
        b =
          olive === nova ||
          (!end && olive.startsWith(nova) && olive.charAt(quill) === "/"),
        reef =
          prism != null &&
          (prism === nova ||
            (!end &&
              prism.startsWith(nova) &&
              prism.charAt(nova.length) === "/")),
        sage = {
          isActive: b,
          isPending: reef,
          isTransitioning: mint,
        },
        topaz = b ? ivory : undefined,
        ultra;
      ultra =
        typeof className == "function"
          ? className(sage)
          : [
              className,
              b ? "active" : null,
              reef ? "pending" : null,
              mint ? "transitioning" : null,
            ]
              .filter(Boolean)
              .join(" ");
      let vapor = typeof style == "function" ? style(sage) : style;
      return peers.Ow.createElement(
        peers.MHn,
        {
          ...rest,
          "aria-current": topaz,
          className: ultra,
          ref: jasper,
          style: vapor,
          to,
          viewTransition,
        },
        typeof children == "function" ? children(sage) : children,
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
        wheat,
      ) => {
        let { unstable_useTransitions } = peers.Ow.useContext(peers.Aw),
          yarn = peers.LVn(),
          zephyr = peers.RVn(action, {
            relative,
          }),
          acorn = method.toLowerCase() === "get" ? "get" : "post",
          bloom = typeof action == "string" && peers.jHn.test(action);
        return peers.Ow.createElement("form", {
          ref: wheat,
          method: acorn,
          action: zephyr,
          onSubmit: reloadDocument
            ? onSubmit
            : (event) => {
                if ((onSubmit && onSubmit(event), event.defaultPrevented))
                  return;
                event.preventDefault();
                let coral = event.nativeEvent.submitter,
                  s = coral?.getAttribute("formmethod") || method,
                  p = () => {
                    return yarn(coral || event.currentTarget, {
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
          "data-discover": !bloom && discover === "render" ? "true" : undefined,
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
