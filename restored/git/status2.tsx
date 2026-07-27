// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dJ`) / export `zD`.

export type BindBindStatus2Peers = {
  $f: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  IUo: (...args: unknown[]) => unknown;
  Lpo: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  RUo: (...args: unknown[]) => unknown;
  checks: (...args: unknown[]) => unknown;
  ciStatus: (...args: unknown[]) => unknown;
  eu: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  pUo: (...args: unknown[]) => unknown;
  some: (...args: unknown[]) => unknown;
  uJ: (...args: unknown[]) => unknown;
  zUo: (...args: unknown[]) => unknown;
};

let peers: BindBindStatus2Peers | null = null;

/** Wire bindBindStatus2 peers once companions land. */
export function setBindBindStatus2Peers(next: BindBindStatus2Peers): void {
  peers = next;
}

/**
 * Bundle export `zD` / internal `dJ`.
 */
export function bindBindStatus2() {
  if (peers == null) {
    throw new Error("bindBindStatus2 peers are not configured");
  }

  return peers.ka(peers.Q, (e, { get: t, scope: n }) => {
    let r = e.hostId ?? `local`,
      {
        originRepository: i,
        source: a,
        upstreamRepository: o,
      } = t(peers.uJ, {
        ...e,
        operation: `status`,
      }),
      s =
        i != null &&
        o != null &&
        o.host.toLowerCase() === `github.com` &&
        `${i.host}/${i.owner}/${i.repo}`.toLowerCase() !==
          `${o.host}/${o.owner}/${o.repo}`.toLowerCase();
    return {
      enabled: e.cwd != null && e.headBranch.length > 0 && a !== `loading`,
      meta: {
        hostId: r,
      },
      queryFn: async () => {
        switch (a) {
          case `github-cli`:
            return peers.RUo(
              await n.query.getOrFetch(peers.Lpo, {
                cwd: e.cwd,
                headBranch: e.headBranch,
                hostId: e.hostId,
                operationSource: e.operationSource,
              }),
            );
          case `github-connector`:
            if (i == null) return null;
            if (s && o != null) {
              let t = await peers.pUo(
                n,
                r,
                o,
                e.headBranch.includes(`:`)
                  ? e.headBranch
                  : `${i.owner}:${e.headBranch}`,
              );
              if (t != null) return t;
            }
            return i.host.toLowerCase() === `github.com`
              ? peers.pUo(n, r, i, e.headBranch)
              : null;
          case `loading`:
          case `unavailable`:
            throw Error(`Pull request status source unavailable`);
        }
      },
      queryKey: [
        ...peers.$f(`gh-pr-status`, {
          cwd: peers.eu(e.cwd ?? `/`),
          headBranch: e.headBranch,
          hostId: e.hostId,
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
          e.operationSource !== `local_conversation_git_summary` &&
          e.operationSource !== `sidebar_task_pr_chip`
        )
          return !1;
        let n = t.state.data;
        if (n == null || !n.hasOpenPr) return !1;
        let r = n.details;
        return r?.ciStatus === `pending` ||
          r?.checks.some((e) => e.status === `pending`)
          ? peers.Hf.FIFTEEN_SECONDS
          : peers.Hf.ONE_MINUTE;
      },
      refetchIntervalInBackground: !1,
      refetchOnMount: !0,
      refetchOnWindowFocus: !0,
      staleTime: peers.zUo(e.operationSource),
      structuralSharing: peers.IUo,
    };
  });
}
