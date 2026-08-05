// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `z2i`) / export `Zz`.

export type UseMarketplaceConnectFlowPeers = {
  B2i: (...args: unknown[]) => unknown;
  H2i: (...args: unknown[]) => unknown;
  U2i: (...args: unknown[]) => unknown;
  V2i: (...args: unknown[]) => unknown;
  jw: (...args: unknown[]) => unknown;
  kh: (...args: unknown[]) => unknown;
  location: (...args: unknown[]) => unknown;
  trim: (...args: unknown[]) => unknown;
  w2i: (...args: unknown[]) => unknown;
};

let peers: UseMarketplaceConnectFlowPeers | null = null;

/** Wire useMarketplaceConnectFlow peers once companions land. */
export function setUseMarketplaceConnectFlowPeers(
  next: UseMarketplaceConnectFlowPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Zz` / internal `z2i`.
 */
export function useMarketplaceConnectFlow(e: unknown) {
  if (peers == null) {
    throw new Error("useMarketplaceConnectFlow peers are not configured");
  }

  let t = (0, peers.H2i.c)(19),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let {
      hostId: r,
      marketplaceAnalytics: i,
      onConnectStarted: a,
      onExternalConnectStarted: o,
    } = n,
    s = (0, peers.U2i.useContext)(peers.jw),
    c = r ?? `local`,
    l = peers.kh(`2761268526`),
    {
      clearPendingAppConnect: u,
      isAppConnectPending: d,
      markAppConnectOAuthPending: f,
    } = peers.w2i(),
    [p, m] = (0, peers.U2i.useState)(null),
    h = peers.B2i,
    g;
  t[2] !== u || t[3] !== l || t[4] !== a || t[5] !== o
    ? ((g = async (e) => {
        if (
          (u({
            appId: e.id,
          }),
          a?.(e),
          !l && e.installUrl?.trim())
        ) {
          (h(e.installUrl), o?.(e));
          return;
        }
        m(e);
      }),
      (t[2] = u),
      (t[3] = l),
      (t[4] = a),
      (t[5] = o),
      (t[6] = g))
    : (g = t[6]);
  let _ = g,
    v;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => {
        m(null);
      }),
      (t[7] = v))
    : (v = t[7]);
  let y = v,
    b;
  t[8] !== c || t[9] !== s?.location || t[10] !== f || t[11] !== i
    ? ((b = (e) => {
        let { app: t, redirectUrl: n, resumeTarget: r } = e;
        f({
          app: t,
          hostId: c,
          marketplaceAnalytics: i,
          redirectUrl: n,
          returnTo: peers.V2i(s?.location),
          resumeTarget: r,
        });
      }),
      (t[8] = c),
      (t[9] = s?.location),
      (t[10] = f),
      (t[11] = i),
      (t[12] = b))
    : (b = t[12]);
  let x = b,
    S;
  return (
    t[13] !== u || t[14] !== p || t[15] !== x || t[16] !== _ || t[17] !== d
      ? ((S = {
          connectingApp: p,
          clearConnectingApp: y,
          clearPendingAppConnect: u,
          handleAppConnectOAuthStarted: x,
          handleConnectApp: _,
          handleOpenAppUrl: h,
          isAppConnectPending: d,
        }),
        (t[13] = u),
        (t[14] = p),
        (t[15] = x),
        (t[16] = _),
        (t[17] = d),
        (t[18] = S))
      : (S = t[18]),
    S
  );
}
