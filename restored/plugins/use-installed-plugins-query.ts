// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KN`) / export `jK`.

export type UseInstalledPluginsQueryPeers = {
  $E: (...args: unknown[]) => unknown;
  A5r: (...args: unknown[]) => unknown;
  BN: (...args: unknown[]) => unknown;
  C5r: (...args: unknown[]) => unknown;
  D5r: (...args: unknown[]) => unknown;
  E5r: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  JN: (...args: unknown[]) => unknown;
  Jx: (...args: unknown[]) => unknown;
  K8r: (...args: unknown[]) => unknown;
  L5r: (...args: unknown[]) => unknown;
  O5r: (...args: unknown[]) => unknown;
  P6r: (...args: unknown[]) => unknown;
  Q8n: (...args: unknown[]) => unknown;
  SM: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  Z3r: (...args: unknown[]) => unknown;
  Z8r: (...args: unknown[]) => unknown;
  additionalMarketplaceKinds: (...args: unknown[]) => unknown;
  authMethod: (...args: unknown[]) => unknown;
  bM: (...args: unknown[]) => unknown;
  c6r: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  featuredPluginIds: (...args: unknown[]) => unknown;
  i5r: (...args: unknown[]) => unknown;
  i6r: (...args: unknown[]) => unknown;
  includeRemoteCatalog: (...args: unknown[]) => unknown;
  installSuggestionPluginNames: (...args: unknown[]) => unknown;
  kh: (...args: unknown[]) => unknown;
  marketplaceLoadErrors: (...args: unknown[]) => unknown;
  marketplaces: (...args: unknown[]) => unknown;
  n5r: (...args: unknown[]) => unknown;
  plugins: (...args: unknown[]) => unknown;
  q8r: (...args: unknown[]) => unknown;
  qN: (...args: unknown[]) => unknown;
  r5r: (...args: unknown[]) => unknown;
  roots: (...args: unknown[]) => unknown;
  v5r: (...args: unknown[]) => unknown;
  vE: (...args: unknown[]) => unknown;
};
let peers: UseInstalledPluginsQueryPeers | null = null;

/** Wire useInstalledPluginsQuery peers once companions land. */
export function setUseInstalledPluginsQueryPeers(
  next: UseInstalledPluginsQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `jK` / internal `KN`.
 */
export function useInstalledPluginsQuery(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("useInstalledPluginsQuery peers are not configured");
  }
  let i = {
    hostId: e,
  };
  let a = peers.BN(i) && (n?.enabled ?? true),
    o = n?.additionalMarketplaceKinds ?? peers.O5r,
    s = n?.installSuggestionPluginNames ?? null,
    c = peers.kh("4218407052"),
    l = peers.bM(e)?.authMethod ?? null,
    u = peers.P6r(l);
  let d = u,
    f = n?.includeRemoteCatalog ?? true,
    p = !c,
    m = peers.Z8r({
      additionalMarketplaceKinds: o,
      includeRemoteCatalog: f,
      includeVerticalCatalog: p,
    });
  let h = m,
    g = peers.vE(),
    _ = peers.Y(peers.$E),
    v = _.includes(e);
  let y = v,
    b = t === undefined,
    x = {
      hostId: e,
    };
  let S = a && y && b,
    C = {
      enabled: S,
    };
  let w = peers.Fo(peers.Q8n, x, C),
    T = peers.SM(e),
    E = a && y,
    D = {
      enabled: E,
      hostId: e,
    };
  let O = peers.Z3r(D),
    k = {
      hostId: e,
    };
  let A = peers.c6r(k),
    j = {
      hostId: e,
    };
  let M = peers.i6r(j),
    N = w.data?.roots,
    P = peers.v5r({
      codexHome: T,
      hostId: e,
      rootsOverrideCwd: t,
      workspaceRoots: N,
    });
  let F = P,
    I = a && y && (t !== undefined || w.isFetched),
    L = peers.Jx();
  let R = L,
    z = {
      buildFlavor: R,
      hostId: e,
      installSuggestionPluginNames: s,
      isOpenAICuratedRemoteMarketplaceEnabled: c,
      marketplaceKinds: h,
      roots: F,
      shouldHideOpenAICuratedMarketplaces: d,
    };
  let B = {
    enabled: I,
  };
  let V = peers.Fo(peers.L5r, z, B);
  if (!a || !y) {
    let e;
    return {
      availablePlugins: peers.JN,
      featuredPluginIds: peers.E5r,
      installedPlugins: peers.JN,
      marketplaceLoadErrors: peers.D5r,
      marketplaces: peers.A5r,
      errorMessage: null,
      isLoading: false,
      isFetching: false,
      refetch: peers.q8r,
      forceReload: peers.K8r,
    };
  }
  let H, U, W, G;
  H = {
    isComputerUseAvailable: O.available,
    isExternalBrowserUseAvailable: M.available,
    isInAppBrowserUseAvailable: A.available,
  };
  U = V.data?.plugins ?? peers.JN;
  W = peers.r5r({
    plugins: U,
    ...H,
  });
  G = peers.n5r({
    featuredPluginIds: V.data?.featuredPluginIds ?? peers.E5r,
    ...H,
  });
  let K = peers.i5r(U);
  let q = V.data?.marketplaceLoadErrors ?? peers.D5r,
    ee = V.data?.marketplaces ?? peers.A5r,
    te = V.error ? String(V.error.message) : null,
    ne =
      (b && w.isLoading) ||
      V.isLoading ||
      A.isLoading ||
      M.isLoading ||
      O.isLoading,
    re = (b && w.isFetching) || V.isFetching || O.isFetching,
    ie = async () => {
      let e = (await V.refetch()).data?.plugins ?? peers.JN;
      return {
        availablePlugins: peers.r5r({
          plugins: e,
          ...H,
        }),
        installedPlugins: peers.i5r(e),
      };
    };
  let ae = () => {
    return g(peers.qN);
  };
  return {
    availablePlugins: W,
    featuredPluginIds: G,
    installedPlugins: K,
    marketplaceLoadErrors: q,
    marketplaces: ee,
    errorMessage: te,
    isLoading: ne,
    isFetching: re,
    refetch: ie,
    forceReload: ae,
  };
}

/** Bundle path ESM init retained as no-op. */
export function ensureInstalledPluginsQueryInit(): void {}
