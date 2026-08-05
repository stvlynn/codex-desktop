// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `UPs`) / export `K_`.

export type BindDeferredWorktreeKPeers = {
  Ax: (...args: unknown[]) => unknown;
  BPs: (...args: unknown[]) => unknown;
  DE: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  OPs: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Q8n: (...args: unknown[]) => unknown;
  RPs: (...args: unknown[]) => unknown;
  XT: (...args: unknown[]) => unknown;
  applied: (...args: unknown[]) => unknown;
  bE: (...args: unknown[]) => unknown;
  cwd: (...args: unknown[]) => unknown;
  eu: (...args: unknown[]) => unknown;
  jPs: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  nxe: (...args: unknown[]) => unknown;
  pending: (...args: unknown[]) => unknown;
  pu: (...args: unknown[]) => unknown;
  roots: (...args: unknown[]) => unknown;
  zPs: (...args: unknown[]) => unknown;
};

let peers: BindDeferredWorktreeKPeers | null = null;

/** Wire bindDeferredWorktreeK peers once companions land. */
export function setBindDeferredWorktreeKPeers(
  next: BindDeferredWorktreeKPeers,
): void {
  peers = next;
}

/**
 * Bundle export `K_` / internal `UPs`.
 */
export function bindDeferredWorktreeK() {
  if (peers == null) {
    throw new Error("bindDeferredWorktreeK peers are not configured");
  }

  return peers.ka(
    peers.Q,
    ({ conversationId: e, cwd: t, hostId: n }, { get: r }) => {
      let i = peers.jPs(n);
      if (t == null)
        return {
          queryFn: async () => peers.zPs,
          queryKey: [...i, `available`, null],
          staleTime: peers.Hf.FIVE_SECONDS,
        };
      let a = r(peers.bE, {
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
      let s = r(peers.DE, n);
      if (s.id !== n)
        return {
          enabled: !1,
          queryFn: async () => peers.BPs,
          queryKey: [...i, `host-config-loading`, t],
          staleTime: peers.Hf.FIVE_SECONDS,
        };
      let c = r(peers.Ax, e),
        l =
          c?.pending?.cwd === t
            ? c.pending.projectSources
            : c?.applied?.cwd === t
              ? c.applied.projectSources
              : null,
        u = r(peers.Q8n, {
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
          switch (e.kind) {
            case `available`:
              return peers.zPs;
            case `restorable`:
              return {
                ...e,
                worktreePath: f,
              };
            case `gone`:
              return {
                kind: `gone`,
                worktreePath: f,
              };
            case `unavailable`:
              return {
                ...e,
                worktreePath: f,
              };
          }
        },
        queryKey: [...i, `inspect`, t, f, d],
        staleTime: peers.Hf.FIVE_SECONDS,
      };
    },
  );
}
