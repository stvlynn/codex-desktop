// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `A3i`) / export `pz`.

export type UseUpgradeMarketplacesMutationPeers = {
  Bf: (...args: unknown[]) => unknown;
  Dz: (...args: unknown[]) => unknown;
  I3i: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  L3i: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R3i: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  qt: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  vE: (...args: unknown[]) => unknown;
};

let peers: UseUpgradeMarketplacesMutationPeers | null = null;

/** Wire useUpgradeMarketplacesMutation peers once companions land. */
export function setUseUpgradeMarketplacesMutationPeers(
  next: UseUpgradeMarketplacesMutationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pz` / internal `A3i`.
 */
export function useUpgradeMarketplacesMutation(e: unknown) {
  if (peers == null) {
    throw new Error("useUpgradeMarketplacesMutation peers are not configured");
  }

  let t = (0, peers.R3i.c)(22),
    n = e?.hostId ?? `local`,
    r = peers.Io(peers.Q),
    i = peers.rt(),
    a = peers.vE(),
    o = peers.Ju(),
    s;
  t[0] !== n || t[1] !== o || t[2] !== i || t[3] !== r
    ? ((s = async (e) => {
        let { marketplaceName: t } = e,
          a = await peers.Bf(`upgrade-marketplaces`, {
            hostId: n,
            marketplaceName: t ?? null,
          });
        return (
          await peers.I3i({
            hostId: n,
            intl: o,
            queryClient: i,
            scope: r,
          }),
          a
        );
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
        if (e.errors.length > 0) {
          (peers.Wf.error(`Failed to upgrade marketplaces`, {
            safe: {
              errorCount: e.errors.length,
            },
            sensitive: {
              errors: e.errors,
            },
          }),
            r
              .get(peers.rh)
              .danger(
                o.formatMessage(
                  n == null
                    ? peers.Dz.marketplacesUpgradeError
                    : peers.Dz.marketplaceUpgradeError,
                ),
              ));
          return;
        }
        if (n != null) {
          r.get(peers.rh).success(
            o.formatMessage(peers.Dz.marketplaceUpgradeSuccess, {
              marketplaceName: n,
            }),
          );
          return;
        }
        r.get(peers.rh).success(
          o.formatMessage(peers.Dz.marketplacesUpgradeSuccess),
        );
      }),
      (l = (e, t) => {
        let { marketplaceDisplayName: n } = t;
        (peers.Wf.error(`Failed to upgrade marketplaces`, {
          safe: {},
          sensitive: {
            error: e,
          },
        }),
          r
            .get(peers.rh)
            .danger(
              o.formatMessage(
                n == null
                  ? peers.Dz.marketplacesUpgradeRequestError
                  : peers.Dz.marketplaceUpgradeError,
              ),
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
    p = f.isPending && f.variables.marketplaceName == null,
    m =
      f.isPending && f.variables.marketplaceName != null
        ? f.variables.marketplaceName
        : null,
    h;
  t[16] === f
    ? (h = t[17])
    : ((h = async (e) => {
        let t = e === void 0 ? {} : e;
        await f.mutateAsync(t);
      }),
      (t[16] = f),
      (t[17] = h));
  let g;
  return (
    t[18] !== p || t[19] !== m || t[20] !== h
      ? ((g = {
          isUpgradingMarketplaces: p,
          pendingUpgradeMarketplaceName: m,
          upgradeMarketplaces: h,
        }),
        (t[18] = p),
        (t[19] = m),
        (t[20] = h),
        (t[21] = g))
      : (g = t[21]),
    g
  );
}
