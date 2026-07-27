// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `k3i`) / export `uz`.

export type RemovePluginMarketplaceForHostPeers = {
  Bf: (...args: unknown[]) => unknown;
  I3i: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  L3i: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R3i: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  marketplaceName: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  vE: (...args: unknown[]) => unknown;
};

let peers: RemovePluginMarketplaceForHostPeers | null = null;

/** Wire removePluginMarketplaceForHost peers once companions land. */
export function setRemovePluginMarketplaceForHostPeers(next: RemovePluginMarketplaceForHostPeers): void {
  peers = next;
}

/**
 * Bundle export `uz` / internal `k3i`.
 */
export function removePluginMarketplaceForHost(e: unknown) {
  if (peers == null) {
    throw new Error("removePluginMarketplaceForHost peers are not configured");
  }

  let t = (0, peers.R3i.c)(19),
    n = e?.hostId ?? `local`,
    r = peers.Io(peers.Q),
    i = peers.rt(),
    a = peers.vE(),
    o = peers.Ju(),
    s;
  t[0] !== n || t[1] !== o || t[2] !== i || t[3] !== r
    ? ((s = async (e) => {
        let { marketplaceName: t } = e;
        (await peers.Bf(`remove-marketplace`, {
          hostId: n,
          marketplaceName: t,
        }),
          await peers.I3i({
            hostId: n,
            intl: o,
            queryClient: i,
            scope: r,
          }));
      }),
      (t[0] = n),
      (t[1] = o),
      (t[2] = i),
      (t[3] = r),
      (t[4] = s))
    : (s = t[4]);
  let c, l;
  t[5] !== o || t[6] !== r
    ? ((c = (e, t) => {
        let { marketplaceDisplayName: n } = t;
        r.get(peers.rh).success(
          o.formatMessage(
            {
              id: `plugins.marketplace.removeSuccess`,
              defaultMessage: `{marketplaceName} marketplace removed`,
              description: `Toast shown after successfully removing a plugin marketplace`,
            },
            {
              marketplaceName: n,
            },
          ),
        );
      }),
      (l = (e, t) => {
        let { marketplaceName: n } = t;
        (peers.Wf.error(`manual_plugin_marketplace_remove_failed`, {
          safe: {
            marketplaceName: n,
          },
          sensitive: {
            error: e,
          },
        }),
          r.get(peers.rh).danger(
            o.formatMessage({
              id: `plugins.marketplace.removeError`,
              defaultMessage: `Failed to remove marketplace`,
              description: `Toast message shown when removing a marketplace fails`,
            }),
          ));
      }),
      (t[5] = o),
      (t[6] = r),
      (t[7] = c),
      (t[8] = l))
    : ((c = t[7]), (l = t[8]));
  let u;
  t[9] === a
    ? (u = t[10])
    : ((u = async () => {
        await peers.L3i(a);
      }),
      (t[9] = a),
      (t[10] = u));
  let d;
  t[11] !== s || t[12] !== c || t[13] !== l || t[14] !== u
    ? ((d = {
        mutationFn: s,
        onSuccess: c,
        onError: l,
        onSettled: u,
      }),
      (t[11] = s),
      (t[12] = c),
      (t[13] = l),
      (t[14] = u),
      (t[15] = d))
    : (d = t[15]);
  let f = peers.qt(d),
    p = f.isPending ? (f.variables?.marketplaceName ?? null) : null,
    m;
  return (
    t[16] !== f.mutateAsync || t[17] !== p
      ? ((m = {
          pendingRemoveMarketplaceName: p,
          removeMarketplace: f.mutateAsync,
        }),
        (t[16] = f.mutateAsync),
        (t[17] = p),
        (t[18] = m))
      : (m = t[18]),
    m
  );
}
