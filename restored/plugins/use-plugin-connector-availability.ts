// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oes`) / export `Cw`.

export type UsePluginConnectorAvailabilityPeers = {
  I4i: (...args: unknown[]) => unknown;
  QN: (...args: unknown[]) => unknown;
  Tt: (...args: unknown[]) => unknown;
  _X: (...args: unknown[]) => unknown;
  apps: (...args: unknown[]) => unknown;
  ces: (...args: unknown[]) => unknown;
  data: (...args: unknown[]) => unknown;
  des: (...args: unknown[]) => unknown;
  fes: (...args: unknown[]) => unknown;
  les: (...args: unknown[]) => unknown;
  ses: (...args: unknown[]) => unknown;
  source: (...args: unknown[]) => unknown;
  status: (...args: unknown[]) => unknown;
  summary: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
  ues: (...args: unknown[]) => unknown;
};

let peers: UsePluginConnectorAvailabilityPeers | null = null;

/** Wire usePluginConnectorAvailability peers once companions land. */
export function setUsePluginConnectorAvailabilityPeers(
  next: UsePluginConnectorAvailabilityPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Cw` / internal `oes`.
 */
export function usePluginConnectorAvailability(e: unknown) {
  if (peers == null) {
    throw new Error("usePluginConnectorAvailability peers are not configured");
  }

  let t = (0, peers.des.c)(14),
    {
      hostId: n,
      pluginApps: r,
      pluginSummary: i,
      marketplacePath: a,
      pluginName: o,
      remoteMarketplaceName: s,
    } = e,
    c = r == null && (a != null || s != null) && o != null,
    l = a ?? null,
    u = o ?? null,
    d = s ?? null,
    f;
  t[0] !== n || t[1] !== c || t[2] !== l || t[3] !== u || t[4] !== d
    ? ((f = {
        hostId: n,
        marketplacePath: l,
        pluginName: u,
        remoteMarketplaceName: d,
        enabled: c,
      }),
      (t[0] = n),
      (t[1] = c),
      (t[2] = l),
      (t[3] = u),
      (t[4] = d),
      (t[5] = f))
    : (f = t[5]);
  let { isLoading: p, plugin: m } = peers.I4i(f),
    h = r ?? m?.apps ?? [],
    g = i ?? m?.summary,
    _ = g?.source.type === `remote`,
    v = Array.from(new Set(h.map(peers.ues).filter(peers.les))),
    y = v.length > 0,
    b;
  t[6] !== n || t[7] !== y
    ? ((b = {
        enabled: y,
        hostId: n,
      }),
      (t[6] = n),
      (t[7] = y),
      (t[8] = b))
    : (b = t[8]);
  let { data: x, isLoading: S, loadError: C } = peers.QN(b),
    w = x === void 0 ? [] : x,
    T = peers.Tt({
      queries: v.map(peers.ces),
    }),
    E;
  t[9] !== T || t[10] !== S || t[11] !== p || t[12] !== c
    ? ((E = (c && p) || S || T.some(peers.ses)),
      (t[9] = T),
      (t[10] = S),
      (t[11] = p),
      (t[12] = c),
      (t[13] = E))
    : (E = t[13]);
  let D = E,
    O = !0,
    k = 0,
    A = {};
  for (let [e, t] of v.entries()) {
    let n = T[e],
      r = !S && C == null && !w.some((e) => e.id === t),
      i = null;
    (n?.data?.status === peers.fes
      ? (i = `disabled-by-admin`)
      : (r ||
          (n != null && !n.isPending && n.error == null && n.data == null)) &&
        (i = `connector-unavailable`),
      (A[t] = i),
      i != null && (k += 1),
      i !== `disabled-by-admin` && (O = !1));
  }
  let j = null;
  return (
    _ && peers._X(g)
      ? (j = `disabled-by-admin`)
      : !_ &&
        v.length > 0 &&
        k === v.length &&
        (j = O ? `disabled-by-admin` : `connector-unavailable`),
    {
      blockedReasonsByConnectorId: A,
      isConnectorAvailabilityLoading: D,
      isLoading: !_ && D,
      blockedReason: j,
    }
  );
}
