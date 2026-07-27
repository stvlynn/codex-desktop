// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `I4i`) / export `Nz`.

export type UsePluginDetailQueryPeers = {
  B4i: (...args: unknown[]) => unknown;
  BN: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  L4i: (...args: unknown[]) => unknown;
  R4i: (...args: unknown[]) => unknown;
  V4i: (...args: unknown[]) => unknown;
  VN: (...args: unknown[]) => unknown;
  Z3r: (...args: unknown[]) => unknown;
  composerIcon: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  logo: (...args: unknown[]) => unknown;
  logoDark: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  u5r: (...args: unknown[]) => unknown;
  z8r: (...args: unknown[]) => unknown;
};
let peers: UsePluginDetailQueryPeers | null = null;

/** Wire usePluginDetailQuery peers once companions land. */
export function setUsePluginDetailQueryPeers(
  next: UsePluginDetailQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Nz` / internal `I4i`.
 */
export function usePluginDetailQuery(e: unknown) {
  if (peers == null) {
    throw new Error("usePluginDetailQuery peers are not configured");
  }
  let {
      hostId = "local",
      marketplacePath,
      pluginName,
      remoteMarketplaceName,
      enabled = true,
    } = e,
    l = {
      hostId,
    };
  let u = peers.BN(l),
    d = peers.rt(),
    f = pluginName != null && peers.u5r(pluginName);
  let p = f,
    m = {
      enabled: p,
      hostId,
    };
  let h = peers.Z3r(m),
    g =
      (marketplacePath != null || remoteMarketplaceName != null) &&
      pluginName != null,
    _ = u && enabled && g && p && h.isLoading,
    v = u && enabled && g && (!p || h.available),
    y = peers.R4i({
      hostId,
      marketplacePath,
      pluginName,
      remoteMarketplaceName,
    });
  let b = async () => {
    if (pluginName == null)
      throw Error("plugin detail query requires pluginName");
    let { plugin } = await peers.Bf("read-plugin", {
        hostId,
        ...peers.z8r({
          marketplacePath,
          remoteMarketplaceName,
        }),
        pluginName,
      }),
      t = plugin.summary.interface,
      n = peers.VN(t?.logo, hostId, d),
      o = peers.VN(t?.logoDark, hostId, d),
      s = peers.VN(t?.composerIcon, hostId, d),
      l = Promise.all(
        plugin.skills.map(async (item) => {
          if (item.interface == null) return null;
          let [t, n] = await Promise.all([
            peers.VN(item.interface.iconSmall, hostId, d),
            peers.VN(item.interface.iconLarge, hostId, d),
          ]);
          return {
            iconSmallDataUrl: t,
            iconLargeDataUrl: n,
          };
        }),
      ),
      [u, f, p, m] = await Promise.all([s, n, o, l]);
    return peers.B4i(plugin, {
      composerIconDataUrl: u,
      logoDataUrl: f,
      logoDarkDataUrl: p,
      skillImageDataUrls: m,
    });
  };
  let x = {
    queryKey: y,
    queryFn: b,
    enabled: v,
    staleTime: peers.Hf.FIVE_MINUTES,
  };
  let S = peers.jt(x);
  if (!v) {
    let e;
    return {
      errorMessage: null,
      isLoading: _,
      plugin: null,
      refetch: peers.L4i,
    };
  }
  let C = S.error ? String(S.error.message) : null,
    w = S.data ?? null,
    T = async () => {
      await S.refetch();
    };
  return {
    errorMessage: C,
    isLoading: S.isLoading,
    plugin: w,
    refetch: T,
  };
}
