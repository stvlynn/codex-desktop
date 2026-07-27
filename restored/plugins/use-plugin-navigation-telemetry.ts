// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `u3i`) / export `Sz`.

export type UsePluginNavigationTelemetryPeers = {
  Ez: (...args: unknown[]) => unknown;
  Ib: (...args: unknown[]) => unknown;
  K1t: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  g3i: (...args: unknown[]) => unknown;
  h3i: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  installed: (...args: unknown[]) => unknown;
  marketplaceName: (...args: unknown[]) => unknown;
  navigationKey: (...args: unknown[]) => unknown;
  q1t: (...args: unknown[]) => unknown;
  source: (...args: unknown[]) => unknown;
  summary: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
  v3i: (...args: unknown[]) => unknown;
};
let peers: UsePluginNavigationTelemetryPeers | null = null;

/** Wire usePluginNavigationTelemetry peers once companions land. */
export function setUsePluginNavigationTelemetryPeers(
  next: UsePluginNavigationTelemetryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Sz` / internal `u3i`.
 */
export function usePluginNavigationTelemetry(e: unknown) {
  if (peers == null) {
    throw new Error("usePluginNavigationTelemetry peers are not configured");
  }
  let { scope, navigationKey, plugin, referrer, source } = e,
    s = peers.Ez.useRef(null),
    c = peers.Ez.useRef(null),
    l = plugin?.summary.id,
    u = plugin?.summary ?? null,
    d = peers.h3i(u);
  let f = d,
    p = (e, t) => {
      peers.Ub(scope, peers.K1t, {
        enabled: plugin?.summary.enabled,
        installed: plugin?.summary.installed,
        marketplaceName: plugin?.marketplaceName,
        pageName: peers.Ib.CODEX_PLUGIN_PAGE_NAME_DETAILS,
        pluginId: l,
        pluginSourceType: plugin?.summary.source.type,
        referrer,
        remotePluginId: f,
        source,
      });
      peers.Ub(scope, peers.q1t, {
        isFirstVisit: t,
        loadDurationMs: Math.max(0, Math.round(performance.now() - e)),
      });
    };
  let m = peers.Ez.useEffectEvent(p),
    h = () => {
      if (c.current?.navigationKey !== navigationKey) {
        let e = !peers.v3i.has(scope);
        peers.v3i.add(scope);
        c.current = {
          isFirstVisit: e,
          navigationKey,
          startedAtMs: performance.now(),
        };
      }
      if (l == null) return;
      let e = `${navigationKey}\u0000${l}\u0000${f ?? ""}`;
      if (s.current === e) return;
      let { isFirstVisit, startedAtMs } = c.current;
      s.current = e;
      m(startedAtMs, isFirstVisit);
    };
  let g;
  g = [navigationKey, l, referrer, f, scope, source];
  peers.Ez.useEffect(h, g);
}
