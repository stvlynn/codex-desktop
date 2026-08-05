// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vnt`) / export `dlt`.

export type BindDeferredUiDltPeers = {
  Ch: (...args: unknown[]) => unknown;
  _nt: (...args: unknown[]) => unknown;
  ant: (...args: unknown[]) => unknown;
  cnt: (...args: unknown[]) => unknown;
  dnt: (...args: unknown[]) => unknown;
  fnt: (...args: unknown[]) => unknown;
  gnt: (...args: unknown[]) => unknown;
  hnt: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
  int: (...args: unknown[]) => unknown;
  lnt: (...args: unknown[]) => unknown;
  mnt: (...args: unknown[]) => unknown;
  ont: (...args: unknown[]) => unknown;
  pnt: (...args: unknown[]) => unknown;
  snt: (...args: unknown[]) => unknown;
  unt: (...args: unknown[]) => unknown;
  xh: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiDltPeers | null = null;

/** Wire bindDeferredUiDlt peers once companions land. */
export function setBindDeferredUiDltPeers(next: BindDeferredUiDltPeers): void {
  peers = next;
}

/**
 * Bundle export `dlt` / internal `vnt`.
 */
export function bindDeferredUiDlt() {
  if (peers == null) {
    throw new Error("bindDeferredUiDlt peers are not configured");
  }

  return peers.i((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!peers.i ||
                (`get` in peers.i
                  ? !t.__esModule
                  : peers.i.writable || peers.i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, peers.i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e)
            r !== "default" &&
              !Object.prototype.hasOwnProperty.call(n, r) &&
              t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.useStatsigUser =
        e.useStatsigInternalClientFactoryBootstrap =
        e.useStatsigInternalClientFactoryAsync =
        e.useStatsigClient =
        e.useParameterStore =
        e.useLayer =
        e.useGateValue =
        e.useFeatureGate =
        e.useExperiment =
        e.useDynamicConfig =
        e.useClientBootstrapInit =
        e.useClientAsyncInit =
        e.StatsigProvider =
        e.StatsigContext =
          void 0));
    var r = peers.xh(),
      i = peers.Ch();
    e.StatsigContext = peers.i.default;
    var a = peers.snt();
    Object.defineProperty(e, "StatsigProvider", {
      enumerable: !0,
      get: function () {
        return a.StatsigProvider;
      },
    });
    var o = peers.ont();
    Object.defineProperty(e, "useClientAsyncInit", {
      enumerable: !0,
      get: function () {
        return o.useClientAsyncInit;
      },
    });
    var s = peers.lnt();
    Object.defineProperty(e, "useClientBootstrapInit", {
      enumerable: !0,
      get: function () {
        return s.useClientBootstrapInit;
      },
    });
    var c = peers.unt();
    e.useDynamicConfig = c.default;
    var l = peers.dnt();
    e.useExperiment = l.default;
    var u = peers.fnt();
    e.useFeatureGate = u.default;
    var d = peers.pnt();
    e.useGateValue = d.default;
    var f = peers.mnt();
    e.useLayer = f.default;
    var p = peers.hnt();
    e.useParameterStore = p.default;
    var m = peers.gnt();
    Object.defineProperty(e, "useStatsigClient", {
      enumerable: !0,
      get: function () {
        return m.useStatsigClient;
      },
    });
    var h = peers.ant();
    Object.defineProperty(e, "useStatsigInternalClientFactoryAsync", {
      enumerable: !0,
      get: function () {
        return h.useStatsigInternalClientFactoryAsync;
      },
    });
    var g = peers.cnt();
    Object.defineProperty(e, "useStatsigInternalClientFactoryBootstrap", {
      enumerable: !0,
      get: function () {
        return g.useStatsigInternalClientFactoryBootstrap;
      },
    });
    var _ = peers._nt();
    (Object.defineProperty(e, "useStatsigUser", {
      enumerable: !0,
      get: function () {
        return _.useStatsigUser;
      },
    }),
      n(peers.int(), e),
      Object.assign((0, r._getStatsigGlobal)(), {
        StatsigContext: peers.i.default,
        StatsigProvider: a.StatsigProvider,
        useClientAsyncInit: o.useClientAsyncInit,
        useClientBootstrapInit: s.useClientBootstrapInit,
        useDynamicConfig: c.default,
        useExperiment: l.default,
        useFeatureGate: u.default,
        useGateValue: d.default,
        useLayer: f.default,
        useParameterStore: p.default,
        useStatsigClient: m.useStatsigClient,
        useStatsigInternalClientFactoryAsync:
          h.useStatsigInternalClientFactoryAsync,
        useStatsigInternalClientFactoryBootstrap:
          g.useStatsigInternalClientFactoryBootstrap,
        useStatsigUser: _.useStatsigUser,
      }));
  });
}
