// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `c3i`) / export `Cz`.

export type UsePluginCategoryPageTelemetryPeers = {
  Ez: (...args: unknown[]) => unknown;
  G1t: (...args: unknown[]) => unknown;
  Ib: (...args: unknown[]) => unknown;
  J1t: (...args: unknown[]) => unknown;
  K1t: (...args: unknown[]) => unknown;
  LZt: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  _3i: (...args: unknown[]) => unknown;
  clearTimeout: (...args: unknown[]) => unknown;
  g3i: (...args: unknown[]) => unknown;
  m3i: (...args: unknown[]) => unknown;
  setTimeout: (...args: unknown[]) => unknown;
};
let peers: UsePluginCategoryPageTelemetryPeers | null = null;

/** Wire usePluginCategoryPageTelemetry peers once companions land. */
export function setUsePluginCategoryPageTelemetryPeers(
  next: UsePluginCategoryPageTelemetryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Cz` / internal `c3i`.
 */
export function usePluginCategoryPageTelemetry(e: unknown) {
  if (peers == null) {
    throw new Error("usePluginCategoryPageTelemetry peers are not configured");
  }
  let {
      scope,
      categoryId,
      enabled,
      entrypoint,
      pageName,
      searchQuery,
      source,
    } = e,
    l = peers.Ez.useRef(false),
    u = peers.Ez.useRef(null),
    d = peers.Ez.useRef(peers.Ib.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED),
    f = peers.Ez.useRef(""),
    p = () => {
      peers.Ub(scope, peers.G1t, {
        entrypoint,
      });
    };
  let m = peers.Ez.useEffectEvent(p),
    h = (e) => {
      peers.Ub(scope, peers.K1t, {
        ...(pageName === peers.Ib.CODEX_PLUGIN_PAGE_NAME_CATEGORY &&
        categoryId != null
          ? {
              categoryId,
            }
          : {}),
        pageName,
        referrer: e,
        source,
      });
    };
  let g = peers.Ez.useEffectEvent(h),
    _ = () => {
      peers.Ub(scope, peers.J1t, {
        source,
        target: peers.LZt.CODEX_PLUGIN_CLICK_TARGET_SUBMIT_SEARCH,
      });
    };
  let v = peers.Ez.useEffectEvent(_),
    y = () => {
      if (!enabled) {
        l.current = false;
        u.current = null;
        d.current = peers.Ib.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED;
        return;
      }
      l.current || ((l.current = true), m());
      let e =
          pageName === peers.Ib.CODEX_PLUGIN_PAGE_NAME_CATEGORY
            ? (categoryId ?? "")
            : "",
        t = `${pageName}\u0000${source}\u0000${e}`;
      u.current !== t &&
        (g(peers.m3i(d.current)), (u.current = t), (d.current = pageName));
    };
  let b;
  b = [categoryId, enabled, entrypoint, pageName, source];
  peers.Ez.useEffect(y, b);
  let x = () => {
    if (!enabled || searchQuery === "") {
      f.current = "";
      return;
    }
    let e = peers.setTimeout(() => {
      f.current !== searchQuery && (v(), (f.current = searchQuery));
    }, peers._3i);
    return () => {
      peers.clearTimeout(e);
    };
  };
  let S;
  S = [enabled, searchQuery];
  peers.Ez.useEffect(x, S);
}
