// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `x5r`) / export `_K`.

export type BuildAliasKeyedActivityIndexPeers = {
  G8r: (...args: unknown[]) => unknown;
  JN: (...args: unknown[]) => unknown;
  S5r: (...args: unknown[]) => unknown;
  displayName: (...args: unknown[]) => unknown;
  shortDescription: (...args: unknown[]) => unknown;
};

let peers: BuildAliasKeyedActivityIndexPeers | null = null;

/** Wire buildAliasKeyedActivityIndex peers once companions land. */
export function setBuildAliasKeyedActivityIndexPeers(next: BuildAliasKeyedActivityIndexPeers): void {
  peers = next;
}

/**
 * Bundle export `_K` / internal `x5r`.
 */
export function buildAliasKeyedActivityIndex(e: unknown, t: unknown = peers.JN) {
  if (peers == null) {
    throw new Error("buildAliasKeyedActivityIndex peers are not configured");
  }

  let n = new Map(),
    r = new Set();
  for (let t of e)
    for (let e of t.plugins) {
      e.installed || r.add(e.id);
      let i = {
          ...peers.S5r(e),
          description: e.interface?.shortDescription ?? null,
          displayName: e.interface?.displayName ?? null,
          marketplaceDisplayName: t.interface?.displayName ?? null,
          marketplaceName: t.name,
          plugin: e,
          keywords: e.keywords,
          ...peers.G8r({
            marketplaceName: t.name,
            marketplacePath: t.path,
          }),
        },
        a = n.get(e.id);
      if (a == null) {
        n.set(e.id, i);
        continue;
      }
      let o = a;
      (((a.plugin.installed && !e.installed) ||
        (a.plugin.installed === e.installed &&
          a.plugin.interface == null &&
          e.interface != null)) &&
        (o = i),
        a.plugin.installed && !e.installed && n.delete(e.id));
      let s = null;
      if (
        (a.plugin.installed ? (s = a.plugin) : e.installed && (s = e),
        s == null)
      ) {
        n.set(e.id, o);
        continue;
      }
      n.set(e.id, {
        ...o,
        plugin: {
          ...o.plugin,
          enabled: s.enabled,
          installed: !0,
          installPolicy: s.installPolicy,
          localVersion: s.localVersion,
          remotePluginId: o.plugin.remotePluginId ?? s.remotePluginId,
        },
      });
    }
  let i = new Map(t.map((e) => [e.plugin.id, e])),
    a = !1,
    o = Array.from(n.values()).map((e) => {
      let t = i.get(e.plugin.id);
      return !e.plugin.installed || t == null || r.has(e.plugin.id)
        ? e
        : ((a ||=
            e.marketplaceName !== t.marketplaceName ||
            e.marketplacePath !== t.marketplacePath),
          {
            ...t,
            plugin: {
              ...e.plugin,
              id: t.plugin.id,
              interface: t.plugin.interface ?? e.plugin.interface,
              keywords: t.plugin.keywords ?? e.plugin.keywords,
              name: t.plugin.name,
              remotePluginId:
                t.plugin.remotePluginId ?? e.plugin.remotePluginId,
              shareContext: t.plugin.shareContext ?? e.plugin.shareContext,
              source: t.plugin.source,
            },
          });
    });
  if (!a) return o;
  let s = new Map(o.map((e) => [e.plugin.id, e]));
  return [
    ...t.flatMap((e) => {
      let t = s.get(e.plugin.id);
      return (s.delete(e.plugin.id), t == null ? [] : [t]);
    }),
    ...s.values(),
  ];
}
