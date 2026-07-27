// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BUo`) / export `RD`.

export type BindBindStatusPeers = {
  $f: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  FUo: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IUo: (...args: unknown[]) => unknown;
  Lpo: (...args: unknown[]) => unknown;
  NUo: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  RUo: (...args: unknown[]) => unknown;
  U_: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  checks: (...args: unknown[]) => unknown;
  ciStatus: (...args: unknown[]) => unknown;
  dJ: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  eu: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  pUo: (...args: unknown[]) => unknown;
  some: (...args: unknown[]) => unknown;
  uJ: (...args: unknown[]) => unknown;
  zUo: (...args: unknown[]) => unknown;
  zpo: (...args: unknown[]) => unknown;
};

let peers: BindBindStatusPeers | null = null;

/** Wire bindBindStatus peers once companions land. */
export function setBindBindStatusPeers(next: BindBindStatusPeers): void {
  peers = next;
}

/**
 * Bundle export `RD` / internal `BUo`.
 */
export function bindBindStatus() {
  if (peers == null) {
    throw new Error("bindBindStatus peers are not configured");
  }

  return peers.e(() => {
    (peers.Qt(),
      peers.Ho(),
      peers.Au(),
      peers.zpo(),
      peers.ed(),
      peers.U_(),
      peers.Uf(),
      peers.ap(),
      peers.NUo(),
      peers.FUo(),
      (dJ = peers.ka(peers.Q, (e, { get: t, scope: n }) => {
        let r = peers.e.hostId ?? `local`,
          {
            originRepository: i,
            source: a,
            upstreamRepository: o,
          } = t(peers.uJ, {
            ...peers.e,
            operation: `status`,
          }),
          s =
            i != null &&
            o != null &&
            o.host.toLowerCase() === `github.com` &&
            `${i.host}/${i.owner}/${i.repo}`.toLowerCase() !==
              `${o.host}/${o.owner}/${o.repo}`.toLowerCase();
        return {
          enabled:
            peers.e.cwd != null &&
            peers.e.headBranch.length > 0 &&
            a !== `loading`,
          meta: {
            hostId: r,
          },
          queryFn: async () => {
            switch (a) {
              case `github-cli`:
                return peers.RUo(
                  await n.query.getOrFetch(peers.Lpo, {
                    cwd: peers.e.cwd,
                    headBranch: peers.e.headBranch,
                    hostId: peers.e.hostId,
                    operationSource: peers.e.operationSource,
                  }),
                );
              case `github-connector`:
                if (i == null) return null;
                if (s && o != null) {
                  let t = await peers.pUo(
                    n,
                    r,
                    o,
                    peers.e.headBranch.includes(`:`)
                      ? peers.e.headBranch
                      : `${i.owner}:${peers.e.headBranch}`,
                  );
                  if (t != null) return t;
                }
                return i.host.toLowerCase() === `github.com`
                  ? peers.pUo(n, r, i, peers.e.headBranch)
                  : null;
              case `loading`:
              case `unavailable`:
                throw Error(`Pull request status source unavailable`);
            }
          },
          queryKey: [
            ...peers.$f(`gh-pr-status`, {
              cwd: peers.eu(peers.e.cwd ?? `/`),
              headBranch: peers.e.headBranch,
              hostId: peers.e.hostId,
            }),
            `pull-request-provider`,
            i,
            o,
            a,
          ],
          ...(a === `github-connector` || a === `unavailable`
            ? {
                retry: !1,
              }
            : {}),
          refetchInterval: (t) => {
            if (
              peers.e.operationSource !== `local_conversation_git_summary` &&
              peers.e.operationSource !== `sidebar_task_pr_chip`
            )
              return !1;
            let n = t.state.data;
            if (n == null || !n.hasOpenPr) return !1;
            let r = n.details;
            return r?.ciStatus === `pending` ||
              r?.checks.some((e) => peers.e.status === `pending`)
              ? peers.Hf.FIFTEEN_SECONDS
              : peers.Hf.ONE_MINUTE;
          },
          refetchIntervalInBackground: !1,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          staleTime: peers.zUo(peers.e.operationSource),
          structuralSharing: peers.IUo,
        };
      })));
  });
}
