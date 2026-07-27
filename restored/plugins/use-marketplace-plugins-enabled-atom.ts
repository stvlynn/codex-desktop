// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `J8r`) / export `MK`.

export type UseMarketplacePluginsEnabledAtomPeers = {
  BN: (...args: unknown[]) => unknown;
  C5r: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  R5r: (...args: unknown[]) => unknown;
};

let peers: UseMarketplacePluginsEnabledAtomPeers | null = null;

/** Wire UseMarketplacePluginsEnabledAtom peers once companions land. */
export function setUseMarketplacePluginsEnabledAtomPeers(next: UseMarketplacePluginsEnabledAtomPeers): void {
  peers = next;
}

/**
 * Bundle export `MK` / internal `J8r`.
 */
export function UseMarketplacePluginsEnabledAtom(e: unknown) {
  if (peers == null) {
    throw new Error(
      "UseMarketplacePluginsEnabledAtom peers are not configured",
    );
  }

  let t = (0, peers.C5r.c)(7),
    { enabled: n, hostId: r, marketplaceKind: i } = e,
    a = n === void 0 ? !0 : n,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = {
        hostId: r,
      }),
      (t[0] = r),
      (t[1] = o));
  let s = peers.BN(o),
    c;
  t[2] !== r || t[3] !== i
    ? ((c = {
        hostId: r,
        marketplaceKind: i,
      }),
      (t[2] = r),
      (t[3] = i),
      (t[4] = c))
    : (c = t[4]);
  let l = a && s,
    u;
  return (
    t[5] === l
      ? (u = t[6])
      : ((u = {
          enabled: l,
        }),
        (t[5] = l),
        (t[6] = u)),
    peers.Fo(peers.R5r, c, u)
  );
}
