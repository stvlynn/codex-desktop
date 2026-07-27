// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KPs`) / export `G_`.

export type BindUnavailablePeers = {
  Au: (...args: unknown[]) => unknown;
  Ax: (...args: unknown[]) => unknown;
  BPs: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  DE: (...args: unknown[]) => unknown;
  GPs: (...args: unknown[]) => unknown;
  HPs: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  MPs: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  OPs: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Q8n: (...args: unknown[]) => unknown;
  RPs: (...args: unknown[]) => unknown;
  UPs: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  VPs: (...args: unknown[]) => unknown;
  WPs: (...args: unknown[]) => unknown;
  XT: (...args: unknown[]) => unknown;
  ZN: (...args: unknown[]) => unknown;
  ZT: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  applied: (...args: unknown[]) => unknown;
  bE: (...args: unknown[]) => unknown;
  cwd: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  eu: (...args: unknown[]) => unknown;
  jPs: (...args: unknown[]) => unknown;
  kPs: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  mrn: (...args: unknown[]) => unknown;
  nxe: (...args: unknown[]) => unknown;
  oD: (...args: unknown[]) => unknown;
  pending: (...args: unknown[]) => unknown;
  pu: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  roots: (...args: unknown[]) => unknown;
  wD: (...args: unknown[]) => unknown;
  zPs: (...args: unknown[]) => unknown;
};

let peers: BindUnavailablePeers | null = null;

/** Wire bindUnavailable peers once companions land. */
export function setBindUnavailablePeers(next: BindUnavailablePeers): void {
  peers = next;
}

/**
 * Bundle export `G_` / internal `KPs`.
 */
export function bindUnavailable() {
  if (peers == null) {
    throw new Error("bindUnavailable peers are not configured");
  }

  return peers.e(() => {
    ((RPs = peers.r(peers.ZN(), 1)),
      peers.Ho(),
      peers.Au(),
      peers.DD(),
      peers.ed(),
      peers.OE(),
      peers.mrn(),
      peers.Uf(),
      peers.ap(),
      peers.ZT(),
      peers.kPs(),
      peers.MPs(),
      (zPs = {
        kind: `available`,
      }),
      (BPs = {
        kind: `unavailable`,
        reason: `inspection-failed`,
        worktreePath: null,
      }),
      (VPs = `worktree_restore_required`),
      (HPs = `worktree_status_unavailable`),
      (UPs = peers.ka(
        peers.Q,
        ({ conversationId: e, cwd: t, hostId: n }, { get: r }) => {
          let i = peers.jPs(n);
          if (t == null)
            return {
              queryFn: async () => peers.zPs,
              queryKey: [...i, `available`, null],
              staleTime: peers.Hf.FIVE_SECONDS,
            };
          let a = peers.r(peers.bE, {
            hostId: n,
          });
          if (a.data == null)
            return {
              enabled: a.isError,
              queryFn: async () => peers.BPs,
              queryKey: [
                ...i,
                a.isError ? `codex-home-error` : `codex-home-loading`,
                t,
              ],
              staleTime: peers.Hf.FIVE_SECONDS,
            };
          if (!peers.pu(t, a.data.codexHome))
            return {
              queryFn: async () => peers.zPs,
              queryKey: [...i, `available`, t],
              staleTime: peers.Hf.FIVE_SECONDS,
            };
          let o = peers.OPs(t, a.data.worktreesSegment);
          if (o == null)
            return {
              queryFn: async () => peers.BPs,
              queryKey: [...i, `invalid-worktree-root`, t],
              staleTime: peers.Hf.FIVE_SECONDS,
            };
          let s = peers.r(peers.DE, n);
          if (s.id !== n)
            return {
              enabled: !1,
              queryFn: async () => peers.BPs,
              queryKey: [...i, `host-config-loading`, t],
              staleTime: peers.Hf.FIVE_SECONDS,
            };
          let c = peers.r(peers.Ax, peers.e),
            l =
              c?.pending?.cwd === t
                ? c.pending.projectSources
                : c?.applied?.cwd === t
                  ? c.applied.projectSources
                  : null,
            u = peers.r(peers.Q8n, {
              hostId: n,
            });
          if (l == null && u.data == null && !u.isError)
            return {
              enabled: !1,
              queryFn: async () => peers.BPs,
              queryKey: [...i, `workspace-roots-loading`, o],
              staleTime: peers.Hf.FIVE_SECONDS,
            };
          let d = (0, peers.RPs.default)([
              ...(l ?? []),
              ...(u.data?.roots ?? []),
            ]).map(peers.nxe),
            f = peers.eu(o);
          return {
            queryFn: async () => {
              let e = await peers.XT(`git`).request({
                method: `managed-worktree-state`,
                params: {
                  candidateRoots: d,
                  cwd: t,
                  hostConfig: s,
                  operationSource: `worktree_restore_banner`,
                  worktreePath: f,
                },
              });
              switch (peers.e.kind) {
                case `available`:
                  return peers.zPs;
                case `restorable`:
                  return {
                    ...peers.e,
                    worktreePath: f,
                  };
                case `gone`:
                  return {
                    kind: `gone`,
                    worktreePath: f,
                  };
                case `unavailable`:
                  return {
                    ...peers.e,
                    worktreePath: f,
                  };
              }
            },
            queryKey: [...i, `inspect`, t, f, d],
            staleTime: peers.Hf.FIVE_SECONDS,
          };
        },
      )),
      (WPs = peers.Oa(peers.Q, (e, { get: t }) =>
        t(peers.UPs, {
          conversationId: peers.e,
          cwd: t(peers.oD, peers.e),
          hostId: t(peers.wD, peers.e),
        }),
      )),
      (GPs = peers.Oa(peers.Q, (e, { get: t }) => {
        let n = t(peers.WPs, peers.e);
        return n.isError
          ? `unavailable`
          : n.data == null
            ? `loading`
            : n.data.kind;
      })));
  });
}
